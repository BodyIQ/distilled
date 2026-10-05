import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import * as HttpClient from "effect/http/HttpClient";
import { Credentials } from "./credentials.js";
import { RunpodError } from "./errors.js";
import { NotFound } from "./services/runpod.js";
export declare const getCachedModels: (args_0: {
    id: string;
}) => Effect.Effect<readonly string[], RunpodError | import("effect/http/HttpClientError").HttpClientError | NotFound | Schema.SchemaError, Credentials | HttpClient.HttpClient>;
/**
 * REST v2 doesn't expose model caching. GraphQL saveEndpoint is a full replacement,
 * so preserve the just-observed settings (including v2's bound template) here.
 * https://github.com/runpod/runpodctl/blob/4351fca9ec454b1bdc8572aaad5d3e5a61ead0fa/internal/api/endpoints.go#L305
 */
export declare const setCachedModels: (args_0: {
    id: string;
    models: readonly string[];
}) => Effect.Effect<readonly string[], RunpodError | import("effect/http/HttpClientError").HttpClientError | NotFound | Schema.SchemaError, Credentials | HttpClient.HttpClient>;
