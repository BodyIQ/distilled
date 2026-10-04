import * as Schema from "effect/Schema";
declare const VerdaError_base: Schema.Class<VerdaError, Schema.TaggedStruct<"VerdaError", {
    readonly operation: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class VerdaError extends VerdaError_base {
}
export { API_ERRORS } from "@distilled.cloud/core/errors";
