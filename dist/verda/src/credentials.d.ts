import * as Context from "effect/Context";
import type * as Effect from "effect/Effect";
import type * as Redacted from "effect/Redacted";
import type { VerdaOpError } from "./protocol.js";
export interface Config {
    readonly apiBaseUrl?: string;
    readonly accessToken?: Redacted.Redacted<string>;
}
declare const Credentials_base: Context.ServiceClass<Credentials, "VerdaCredentials", Effect.Effect<Config, VerdaOpError, never>>;
/** Resolved per request so OAuth tokens renew without rebuilding the protocol. */
export declare class Credentials extends Credentials_base {
}
export {};
