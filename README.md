# Zinnia Distilled clients

One package, `@zinnia/distilled`, owns the generated cloud clients used by
Zinnia's Alchemy providers and applications. Each cloud is a directory, not a
separate package. The Alchemy resource lifecycle stays in `zinnia-apps`.

```ts
import * as Runpod from "@zinnia/distilled/runpod";
import * as Verda from "@zinnia/distilled/verda";
// Or: import { Runpod, Verda } from "@zinnia/distilled";
```

Provider directories contain public vendor snapshots, `{ "patches": [...] }`
RFC 6902 patch files, generated Smithy models, generator configuration, runtime
clients and HTTP fixture tests. All use published Distilled core 1.0.0-rc.13 and
Effect 4.0.0. See [RunPod](runpod/README.md) and [Verda](verda/README.md) for snapshot
provenance and client usage.

`convert.ts` calls `runOpenApiConvert`; `generate.ts` configures `runGeneratorCli`.
OpenAPI patches apply before conversion, Smithy patches afterward; stale targets
fail. The generator's finalization hook invokes pinned Vite+ formatting. Generated
models and source are committed; do not edit them by hand. Refresh vendor
snapshots explicitly and review the resulting changes.

```sh
pnpm install --frozen-lockfile
pnpm generate
pnpm check:quality
pnpm check:artifacts
```

Bun is needed for generation, not runtime. `pnpm build` compiles both clients into
committed `dist/` JavaScript and declarations. Commit rebuilt artifacts with
source changes. Consumers pin a repository commit and install without generation
or compilation. CI checks regeneration, types, tests and compiled artifact drift,
and uploads a packed package for inspection. Adding another cloud adds a directory
and an export to this package, not another repository or workspace package.

RunPod retains cursor pagination patches, SSE exclusions and its cached-model
extension. Verda uses lazy OAuth credentials with serialized renewal, response
nullability patches and literal volume discriminants. Error bodies are sanitized
and credentials stay redacted. Runtime clients have no Alchemy dependency.
