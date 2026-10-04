import type * as HttpClient from "effect/http/HttpClient";
import type * as HttpClientError from "effect/http/HttpClientError";
import type { API_ERRORS } from "@distilled.cloud/core/errors";
import { Credentials } from "./credentials.js";
import { VerdaError } from "./errors.js";
export type VerdaOpError = InstanceType<(typeof API_ERRORS)[number]> | VerdaError | HttpClientError.HttpClientError;
export type VerdaOpContext = Credentials | HttpClient.HttpClient;
export declare const VerdaProtocol: import("effect/Layer").Layer<import("@distilled.cloud/core/api").Protocol, never, never>;
