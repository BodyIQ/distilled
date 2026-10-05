import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import { makeRestProtocol } from "@distilled.cloud/core/protocol-rest";
import { Credentials } from "./credentials.js";
import { RunpodError } from "./errors.js";
export const RunpodProtocol = makeRestProtocol({
    credentials: Effect.gen(function* () {
        return yield* yield* Credentials;
    }),
    baseUrl: (config) => config.apiBaseUrl ?? "https://api.runpod.io",
    headers: (config) => ({ Authorization: `Bearer ${Redacted.value(config.apiKey)}` }),
    errorEnvelope: (body) => {
        if (body === null || typeof body !== "object")
            return undefined;
        const error = body;
        return {
            code: typeof error.code === "string" || typeof error.code === "number"
                ? error.code
                : undefined,
            message: [error.detail, error.message, error.error, error.title].find((value) => typeof value === "string"),
        };
    },
    unknownError: () => new RunpodError({ operation: "REST request" }),
    parseError: () => new RunpodError({ operation: "REST response validation" }),
});
