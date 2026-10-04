# Verda Effect client

Generated with `@distilled.cloud/core@1.0.0-rc.13`. See [the shared SDK workflow](../README.md).

The initial OpenAPI snapshot and license were imported from
[`gurdasnijor/effect-verda` at `b8fd2f8dcce85953fb58e9d39847d6142afe91c6`](https://github.com/gurdasnijor/effect-verda/tree/b8fd2f8dcce85953fb58e9d39847d6142afe91c6).
Vendor specification: https://api.verda.com/v1/openapi.json. Refresh explicitly and review the resulting diff.

The `@zinnia/distilled/verda` subpath exports generated operations, schemas and types.

```ts
import { Effect, Redacted } from "effect";
import { HttpClient } from "effect/http";
import { fromClientCredentials, getDeployment } from "@zinnia/distilled/verda";

const lookup = Effect.gen(function* () {
  const http = yield* HttpClient.HttpClient;
  const services = yield* fromClientCredentials(http, {
    clientId: "your-client-id",
    clientSecret: Redacted.make("your-client-secret"),
  });
  return yield* getDeployment({ deployment_name: "your-deployment" }).pipe(
    Effect.provide(services),
  );
});
```

Provide your Effect HTTP client layer to `lookup`. Allocate `services` once per
long-lived client so operations share the OAuth cache. `getDeployment` returns a
tagged `NotFound` error when the named deployment does not exist.
