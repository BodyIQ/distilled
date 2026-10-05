import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import { makeRestProtocol } from "@distilled.cloud/core/protocol-rest";
import { Credentials } from "./credentials.js";
import { VerdaError } from "./errors.js";
export const VerdaProtocol = makeRestProtocol({
    credentials: Effect.gen(function* () {
        return yield* yield* Credentials;
    }),
    baseUrl: (config) => config.apiBaseUrl ?? "https://api.verda.com",
    headers: (config) => config.accessToken
        ? { Authorization: `Bearer ${Redacted.value(config.accessToken)}` }
        : {},
    unknownError: (info) => new VerdaError({ operation: "REST request", message: info.message }),
    parseError: (info) => new VerdaError({
        operation: "REST response validation",
        cause: info.cause,
        message: info.cause instanceof Error ? info.cause.message : String(info.cause),
    }),
});
