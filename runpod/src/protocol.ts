import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import type * as HttpClient from "effect/http/HttpClient";
import type * as HttpClientError from "effect/http/HttpClientError";
import type { API_ERRORS } from "@distilled.cloud/core/errors";
import { makeRestProtocol } from "@distilled.cloud/core/protocol-rest";
import { Credentials, type Config } from "./credentials.js";
import { RunpodError } from "./errors.js";

export type RunpodOpError =
  | InstanceType<(typeof API_ERRORS)[number]>
  | RunpodError
  | HttpClientError.HttpClientError;
export type RunpodOpContext = Credentials | HttpClient.HttpClient;
export const RunpodProtocol = makeRestProtocol<Config>({
  credentials: Effect.gen(function* () {
    return yield* yield* Credentials;
  }),
  baseUrl: (config) => config.apiBaseUrl ?? "https://api.runpod.io",
  headers: (config) => ({ Authorization: `Bearer ${Redacted.value(config.apiKey)}` }),
  errorEnvelope: (body) => {
    if (body === null || typeof body !== "object") return undefined;
    const error = body as Record<string, unknown>;
    return {
      code:
        typeof error.code === "string" || typeof error.code === "number"
          ? error.code
          : undefined,
      message: [error.detail, error.message, error.error, error.title].find(
        (value): value is string => typeof value === "string",
      ),
    };
  },
  unknownError: () => new RunpodError({ operation: "REST request" }),
  parseError: () => new RunpodError({ operation: "REST response validation" }),
});
