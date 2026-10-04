import * as Schema from "effect/Schema";
export class VerdaError extends Schema.TaggedError()("VerdaError", {
    operation: Schema.String,
}) {
}
export { API_ERRORS } from "@distilled.cloud/core/errors";
