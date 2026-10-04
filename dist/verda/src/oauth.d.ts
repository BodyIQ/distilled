import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import * as HttpClient from "effect/http/HttpClient";
import { Credentials } from "./credentials.js";
/** Allocate one OAuth token cache for a client. No request runs until an operation is invoked. */
export declare const fromClientCredentials: (http: HttpClient.HttpClient, options: {
    readonly clientId: string;
    readonly clientSecret: Redacted.Redacted<string>;
    readonly baseUrl?: string;
}) => Effect.Effect<Layer.Layer<HttpClient.HttpClient | Credentials, never, never>, never, never>;
export type VerdaServices = Effect.Success<ReturnType<typeof fromClientCredentials>>;
