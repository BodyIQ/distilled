import * as Context from "effect/Context";
import type * as Effect from "effect/Effect";
import type * as Redacted from "effect/Redacted";
import type { VerdaError } from "./errors.js";

export interface Config {
  readonly apiBaseUrl?: string;
  readonly accessToken?: Redacted.Redacted<string>;
}
/** Resolved per request so OAuth tokens renew without rebuilding the protocol. */
export class Credentials extends Context.Service<
  Credentials,
  Effect.Effect<Config, VerdaError>
>()("VerdaCredentials") {}
