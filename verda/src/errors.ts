import * as Schema from "effect/Schema";
export class VerdaError extends Schema.TaggedError<VerdaError>()("VerdaError", {
  operation: Schema.String,
  message: Schema.optionalKey(Schema.String),
  cause: Schema.optionalKey(Schema.Unknown),
}) {}
export { API_ERRORS } from "@distilled.cloud/core/errors";
