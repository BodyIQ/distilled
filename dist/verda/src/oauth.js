import * as Clock from "effect/Clock";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import * as Semaphore from "effect/Semaphore";
import * as Ref from "effect/Ref";
import * as HttpClient from "effect/http/HttpClient";
import { strict } from "@distilled.cloud/core/response-validation";
import { Credentials } from "./credentials.js";
import { VerdaError } from "./errors.js";
import { getAccessToken } from "./services/verda.js";
/** Allocate one OAuth token cache for a client. No request runs until an operation is invoked. */
export const fromClientCredentials = (http, options) => Effect.gen(function* () {
    const apiBaseUrl = (options.baseUrl ?? "https://api.verda.com")
        .replace(/\/+$/, "")
        .replace(/\/v1$/, "");
    const token = yield* Ref.make(undefined);
    const lock = yield* Semaphore.make(1);
    const credentials = Effect.gen(function* () {
        const now = yield* Clock.currentTimeMillis;
        const cached = yield* Ref.get(token);
        if (cached && cached.expiresAt > now)
            return cached.config;
        const response = yield* getAccessToken({
            body: {
                grant_type: "client_credentials",
                client_id: options.clientId,
                client_secret: Redacted.value(options.clientSecret),
            },
        }).pipe(Effect.provideService(Credentials, Effect.succeed({ apiBaseUrl })), Effect.provideService(HttpClient.HttpClient, http), Effect.provide(strict), Effect.mapError(() => new VerdaError({ operation: "authentication" })));
        const config = { apiBaseUrl, accessToken: Redacted.make(response.access_token) };
        yield* Ref.set(token, {
            config,
            expiresAt: now + Math.max(0, response.expires_in * 1000 - 60_000),
        });
        return config;
    });
    const serializedCredentials = lock.withPermits(1)(credentials);
    return Layer.mergeAll(Layer.succeed(Credentials, serializedCredentials), Layer.succeed(HttpClient.HttpClient, http), strict);
});
