import { runOpenApiConvert } from "@distilled.cloud/core/codegen/openapi-cli";

await runOpenApiConvert({
  root: `${import.meta.dir}/..`,
  specs: [{ name: "runpod", specPath: "spec/runpod.openapi.json" }],
  options: { namespace: "com.runpod.api", serviceName: "Runpod" },
});
