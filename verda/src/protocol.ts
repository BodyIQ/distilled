import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import type * as HttpClient from "effect/http/HttpClient";
import type * as HttpClientError from "effect/http/HttpClientError";
import type { API_ERRORS } from "@distilled.cloud/core/errors";
import { makeRestProtocol } from "@distilled.cloud/core/protocol-rest";
import { Credentials, type Config } from "./credentials.js";
import { VerdaError } from "./errors.js";

export type VerdaOpError =
  | InstanceType<(typeof API_ERRORS)[number]>
  | VerdaError
  | HttpClientError.HttpClientError;
export type VerdaOpContext = Credentials | HttpClient.HttpClient;
export const VerdaProtocol = makeRestProtocol<Config>({
  credentials: Effect.gen(function* () {
    return yield* yield* Credentials;
  }),
  baseUrl: (config) => config.apiBaseUrl ?? "https://api.verda.com",
  headers: (config): Record<string, string> =>
    config.accessToken
      ? { Authorization: `Bearer ${Redacted.value(config.accessToken)}` }
      : {},
  errorEnvelope: () => ({ message: "Verda request failed" }),
  unknownError: () => new VerdaError({ operation: "REST request" }),
  parseError: () => new VerdaError({ operation: "REST response validation" }),
});
