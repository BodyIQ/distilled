import * as Schema from "effect/Schema";
export class RunpodError extends Schema.TaggedError<RunpodError>()("RunpodError", {
  operation: Schema.String,
  message: Schema.optionalKey(Schema.String),
  cause: Schema.optionalKey(Schema.Unknown),
}) {}
export { API_ERRORS } from "@distilled.cloud/core/errors";
