# Runpod Effect client

Generated with `@distilled.cloud/core@1.0.0-rc.13`. See [the shared SDK workflow](../README.md).

The initial OpenAPI snapshot and license were imported from
[`gurdasnijor/effect-runpod` at `63d2f0ade095387e1a6b2bbab725c2f715c64c10`](https://github.com/gurdasnijor/effect-runpod/tree/63d2f0ade095387e1a6b2bbab725c2f715c64c10).
Vendor specification: https://api.runpod.io/v2/openapi.json. Refresh explicitly and review the resulting diff.

The `@zinnia/distilled/runpod` subpath exports generated operations, schemas and types.

```ts
import { Effect, Redacted, Stream } from "effect";
import { Credentials, listEndpoints, validateResponses } from "@zinnia/distilled/runpod";

const endpoints = Stream.runCollect(listEndpoints.items({})).pipe(
  Effect.provideService(Credentials, Effect.succeed({
    apiKey: Redacted.make("your-api-key"),
  })),
  Effect.provide(validateResponses),
);
```

Provide your Effect HTTP client layer to `endpoints`. `apiBaseUrl` can be set in
the credential configuration for local fixtures. All operations use REST v2;
there is no GraphQL cached-model extension. Network volume configuration is
available through the generated endpoint operations.
