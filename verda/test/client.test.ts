import assert from "node:assert/strict";
import { test } from "vite-plus/test";
import { Clock, Effect, Redacted } from "effect";
import { HttpClient, HttpClientResponse } from "effect/http";
import * as Verda from "../src/index.js";

function fixture(handle: (path: string) => Response) {
  const requests: { path: string; authorization?: string; body: unknown }[] = [];
  const http = HttpClient.make((request, url) =>
    Effect.sync(() => {
      const body =
        request.body._tag === "Uint8Array"
          ? (JSON.parse(new TextDecoder().decode(request.body.body)) as unknown)
          : undefined;
      requests.push({
        path: url.pathname,
        authorization: request.headers.authorization,
        body,
      });
      return HttpClientResponse.fromWeb(request, handle(url.pathname));
    }),
  );
  const services = Effect.runPromise(
    Verda.fromClientCredentials(http, {
      clientId: "test-id",
      clientSecret: Redacted.make("test-secret"),
      baseUrl: "https://api.test/v1/",
    }),
  );
  return { requests, services };
}
const token = (value = "test-token") =>
  Response.json({
    access_token: value,
    token_type: "Bearer",
    expires_in: 120,
    refresh_token: "test-refresh",
    scope: "cloud-api-v1",
  });

test("OAuth is lazy, caches concurrent requests, and renews before expiry", async () => {
  let issued = 0;
  let now = 0;
  const f = fixture((path) =>
    path.endsWith("/token") ? token(`token-${++issued}`) : Response.json([]),
  );
  const services = await f.services;
  assert.equal(f.requests.length, 0);
  await Effect.runPromise(
    Clock.clockWith((clock) => {
      const run = Verda.listDeployments({}).pipe(Effect.provide(services));
      return Effect.gen(function* () {
        yield* Effect.all([run, run], { concurrency: "unbounded" });
        assert.equal(issued, 1);
        now = 60_001;
        yield* run;
        assert.equal(issued, 2);
      }).pipe(
        Effect.provideService(Clock.Clock, {
          currentTimeMillisUnsafe: () => now,
          currentTimeMillis: Effect.sync(() => now),
          currentTimeNanosUnsafe: () => clock.currentTimeNanosUnsafe(),
          currentTimeNanos: clock.currentTimeNanos,
          monotonicTimeNanosUnsafe: () => clock.monotonicTimeNanosUnsafe(),
          monotonicTimeNanos: clock.monotonicTimeNanos,
          sleep: (duration) => clock.sleep(duration),
        }),
      );
    }),
  );
  assert.deepEqual(
    f.requests
      .filter(({ path }) => path.endsWith("/token"))
      .map(({ authorization, body }) => ({ authorization, body })),
    [
      {
        authorization: undefined,
        body: {
          grant_type: "client_credentials",
          client_id: "test-id",
          client_secret: "test-secret",
        },
      },
      {
        authorization: undefined,
        body: {
          grant_type: "client_credentials",
          client_id: "test-id",
          client_secret: "test-secret",
        },
      },
    ],
  );
  assert.deepEqual(
    f.requests
      .filter(({ path }) => !path.endsWith("/token"))
      .map(({ authorization }) => authorization),
    ["Bearer token-1", "Bearer token-1", "Bearer token-2"],
  );
});

test("404 is tagged, IDs are encoded, and empty deletion is supported", async () => {
  const f = fixture((path) =>
    path.endsWith("/token")
      ? token()
      : new Response(null, { status: path.includes("missing") ? 404 : 204 }),
  );
  const services = await f.services;
  const found = await Effect.runPromise(
    Verda.getDeployment({ deployment_name: "missing/name" }).pipe(
      Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
      Effect.provide(services),
    ),
  );
  assert.equal(found, undefined);
  await Effect.runPromise(
    Verda.deleteDeployment({ deployment_name: "present" }).pipe(
      Effect.provide(services),
    ),
  );
  assert.equal(f.requests[1].path, "/v1/container-deployments/missing%2Fname");
});

test("authentication and API failures preserve the provider's error message", async () => {
  for (const mode of ["authentication", "api"] as const) {
    const message =
      mode === "api"
        ? "name must be shorter than or equal to 45 characters"
        : "invalid client credentials";
    const f = fixture((path) =>
      path.endsWith("/token")
        ? mode === "authentication"
          ? Response.json({ message }, { status: 401 })
          : token()
        : Response.json({ code: "invalid_request", message }, { status: 400 }),
    );
    const error = await Effect.runPromise(
      Verda.listDeployments({}).pipe(Effect.flip, Effect.provide(await f.services)),
    );
    assert.equal(error.message, message);
    assert.equal(error._tag, mode === "api" ? "BadRequest" : "Unauthorized");
  }
});
