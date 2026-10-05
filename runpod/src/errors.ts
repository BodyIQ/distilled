import * as Schema from "effect/Schema";
export class RunpodError extends Schema.TaggedError<RunpodError>()("RunpodError", {
  operation: Schema.String,
  message: Schema.optional(Schema.String),
}) {}
export { API_ERRORS } from "@distilled.cloud/core/errors";
