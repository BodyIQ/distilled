import { runOpenApiConvert } from "@distilled.cloud/core/codegen/openapi-cli";

await runOpenApiConvert({
  root: `${import.meta.dir}/..`,
  specs: [{ name: "verda", specPath: "spec/verda.openapi.json" }],
  options: {
    namespace: "com.verda.api",
    serviceName: "Verda",
    operationNames: {
      "POST /v1/oauth2/token": "GetAccessToken",
      "GET /v1/container-deployments": "ListDeployments",
      "POST /v1/container-deployments": "CreateDeployment",
      "GET /v1/container-deployments/{deployment_name}": "GetDeployment",
      "PATCH /v1/container-deployments/{deployment_name}": "UpdateDeployment",
      "DELETE /v1/container-deployments/{deployment_name}": "DeleteDeployment",
      "GET /v1/container-deployments/{deployment_name}/scaling": "GetDeploymentScaling",
      "PATCH /v1/container-deployments/{deployment_name}/scaling":
        "UpdateDeploymentScaling",
    },
  },
});
