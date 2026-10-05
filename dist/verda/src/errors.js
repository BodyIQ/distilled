import * as Schema from "effect/Schema";
export class VerdaError extends Schema.TaggedError()("VerdaError", {
    operation: Schema.String,
    message: Schema.optional(Schema.String),
}) {
}
export { API_ERRORS } from "@distilled.cloud/core/errors";
