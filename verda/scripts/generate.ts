import { runGeneratorCli } from "@distilled.cloud/core/codegen/cli";
import type { SdkSpec } from "@distilled.cloud/core/codegen/generator";
import { runTool } from "@distilled.cloud/core/codegen/format";

const spec: SdkSpec = {
  schemaType: "Codec",
  nullableTrait: "com.distilled.openapi#nullable",
  errorMatchersTrait: "com.distilled.openapi#errorMatchers",
  unionStyle: "untagged",
  // Closed discriminants keep volume union decoding from selecting a different arm.
  shapeOverride: ({ def, name }) => {
    if (def.type !== "enum" || Object.keys(def.members).length !== 1) return undefined;
    const value = Object.values(def.members)[0] as {
      traits: { "smithy.api#enumValue": string };
    };
    const literal = JSON.stringify(value.traits["smithy.api#enumValue"]);
    return [
      `export type ${name} = ${literal};`,
      `export const ${name} = S.Literal(${literal});`,
    ];
  },
  extraBindings: [
    {
      trait: "com.distilled.openapi#rawResponse",
      binding: "rawResponse",
      pipe: "T.RawResponse()",
      rootPipe: "T.RawResponseRoot()",
    },
  ],
  operationDecl: {
    contextType: "VerdaOpContext",
    commonErrorType: "VerdaOpError",
    commonErrorClasses: [],
    protocol: "VerdaProtocol",
  },
  sourceNote: ".generated-specs/verda.json",
};

runGeneratorCli({
  root: `${import.meta.dir}/..`,
  description: "Generate the Verda Effect SDK from Smithy",
  patchesDir: false,
  spec: () => spec,
  finalize: (dir) => runTool(["pnpm", "exec", "vp", "fmt", dir]),
});
