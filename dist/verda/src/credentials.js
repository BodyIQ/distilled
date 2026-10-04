import * as Context from "effect/Context";
/** Resolved per request so OAuth tokens renew without rebuilding the protocol. */
export class Credentials extends Context.Service()("VerdaCredentials") {
}
