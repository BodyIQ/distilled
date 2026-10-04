import { runGeneratorCli } from "@distilled.cloud/core/codegen/cli";
import type { SdkSpec } from "@distilled.cloud/core/codegen/generator";
import { runTool } from "@distilled.cloud/core/codegen/format";

const spec: SdkSpec = {
  schemaType: "Codec",
  nullableTrait: "com.distilled.openapi#nullable",
  errorMatchersTrait: "com.distilled.openapi#errorMatchers",
  unionStyle: "untagged",
  extraBindings: [
    {
      trait: "com.distilled.openapi#rawResponse",
      binding: "rawResponse",
      pipe: "T.RawResponse()",
      rootPipe: "T.RawResponseRoot()",
    },
  ],
  paginationProfiles: {
    cursor: { strategy: "paginateCursor", itemsFallback: "items" },
  },
  operationDecl: {
    contextType: "RunpodOpContext",
    commonErrorType: "RunpodOpError",
    commonErrorClasses: [],
    protocol: "RunpodProtocol",
  },
  sourceNote: ".generated-specs/runpod.json",
};

runGeneratorCli({
  root: `${import.meta.dir}/..`,
  description: "Generate the Runpod Effect SDK from Smithy",
  patchesDir: false,
  spec: () => spec,
  finalize: (dir) => runTool(["pnpm", "exec", "vp", "fmt", dir]),
});
