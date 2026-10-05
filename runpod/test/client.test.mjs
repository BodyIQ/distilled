import assert from "node:assert/strict";
import { test } from "vite-plus/test";
import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import * as Stream from "effect/Stream";
import * as HttpClient from "effect/http/HttpClient";
import * as HttpClientResponse from "effect/http/HttpClientResponse";
import * as Validation from "@distilled.cloud/core/response-validation";
import * as Runpod from "../src/index.ts";

const endpoint = (id = "ep-1") => ({
  id,
  name: "flux",
  image: "ghcr.io/test/flux@sha256:123",
  env: { HF_TOKEN: "secret" },
  type: "QUEUE",
  gpu: {
    pools: ["ADA_80_PRO"],
    count: 1,
    allowedCudaVersions: [],
    minCudaVersion: null,
  },
  workers: { min: 0, max: 1 },
  scaling: { type: "REQUEST_COUNT", requestCount: 1 },
  dataCenterIds: [],
  networkVolumes: [],
  timeout: 1800000,
  flashboot: "FLASHBOOT",
  createdAt: "2026-10-03T00:00:00Z",
  registry: null,
});
function fixture(handle) {
  const calls = [];
  let token = "first";
  const http = HttpClient.make((request, url) =>
    Effect.sync(() => {
      const body =
        request.body._tag === "Uint8Array"
          ? JSON.parse(new TextDecoder().decode(request.body.body))
          : undefined;
      calls.push({
        method: request.method,
        url,
        body,
        auth: request.headers.authorization,
      });
      const response = handle(calls.at(-1));
      return HttpClientResponse.fromWeb(
        request,
        response instanceof Response ? response : Response.json(response),
      );
    }),
  );
  const run = (effect) =>
    Effect.runPromise(
      effect.pipe(
        Effect.provideService(
          Runpod.Credentials,
          Effect.sync(() => ({
            apiKey: Redacted.make(token),
            apiBaseUrl: "https://api.test",
          })),
        ),
        Effect.provideService(HttpClient.HttpClient, http),
        Effect.provide(Validation.strict),
      ),
    );
  return {
    run,
    calls,
    rotate: () => {
      token = "second";
    },
  };
}

test("unrecognized REST statuses preserve provider messages", async () => {
  const f = fixture(() => Response.json({ detail: "Selected GPU is unavailable" }, { status: 418 }));
  const error = await f.run(Runpod.getEndpoint({ id: "ep-1" }).pipe(Effect.flip));
  assert.equal(error.message, "Selected GPU is unavailable");
});

test("v2 calls encode IDs and resolve credentials on every request", async () => {
  const f = fixture(() => endpoint());
  await f.run(Runpod.getEndpoint({ id: "ep/1" }));
  f.rotate();
  await f.run(Runpod.updateEndpoint({ id: "ep/1", image: "new-image" }));
  assert.deepEqual(
    f.calls.map((c) => [c.method, c.url.pathname, c.auth]),
    [
      ["GET", "/v2/serverless/ep%2F1", "Bearer first"],
      ["PATCH", "/v2/serverless/ep%2F1", "Bearer second"],
    ],
  );
  assert.deepEqual(f.calls[1].body, { image: "new-image" });
});

test("generated pagination follows nextCursor and accepts null on the final page", async () => {
  const f = fixture(({ url }) => ({
    endpoints: [endpoint(url.searchParams.get("cursor") ?? "first")],
    pagination: {
      nextCursor: url.searchParams.has("cursor") ? null : "second",
      hasNextPage: !url.searchParams.has("cursor"),
    },
  }));
  const all = await f.run(Stream.runCollect(Runpod.listEndpoints.items({})));
  assert.deepEqual(
    Array.from(all).map((x) => x.id),
    ["first", "second"],
  );
  assert.equal(f.calls.length, 2);
});

test("generated create uses inline container settings, nullable registry and scaling union", async () => {
  const f = fixture(
    () =>
      new Response(JSON.stringify(endpoint()), {
        status: 201,
        headers: { "content-type": "application/json" },
      }),
  );
  await f.run(
    Runpod.createEndpoint({
      name: "flux",
      type: "QUEUE",
      image: "image",
      registry: null,
      gpu: { pools: ["ADA_80_PRO"] },
      scaling: { type: "REQUEST_COUNT", requestCount: 1 },
    }),
  );
  assert.equal(f.calls[0].body.scaling.type, "REQUEST_COUNT");
  assert.equal(f.calls[0].body.registry, null);
});

test("404 is tagged and 204 deletion has no JSON body", async () => {
  const f = fixture(({ method }) =>
    method === "DELETE"
      ? new Response(null, { status: 204 })
      : Response.json(
          { title: "Not Found", status: 404, detail: "secret" },
          { status: 404 },
        ),
  );
  const found = await f.run(
    Runpod.getEndpoint({ id: "gone" }).pipe(
      Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
    ),
  );
  assert.equal(found, undefined);
  await f.run(Runpod.deleteEndpoint({ id: "ep-1" }));
});

test("REST failures preserve RunPod's problem detail", async () => {
  const message = "the declared port must match PORT";
  const f = fixture(() =>
    Response.json(
      { title: "Bad Request", status: 400, detail: message },
      { status: 400 },
    ),
  );
  const error = await f.run(Runpod.getEndpoint({ id: "ep-1" }).pipe(Effect.flip));
  assert.equal(error.message, message);
  assert.equal(error._tag, "BadRequest");
});

test("strict decoding rejects malformed success responses without exposing their body", async () => {
  const f = fixture(() => ({ secret: "do-not-log" }));
  await assert.rejects(
    f.run(Runpod.getEndpoint({ id: "ep-1" })),
    (error) => !String(error).includes("do-not-log"),
  );
});
