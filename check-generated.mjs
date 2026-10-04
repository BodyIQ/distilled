import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

// Compare generated trees before/after regeneration, including added/deleted files.
// This works in an uncommitted worktree as well as a clean CI checkout.
async function snapshot(directories) {
  const files = new Map();
  async function visit(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) await visit(path);
      else files.set(path, await readFile(path, "utf8"));
    }
  }
  for (const directory of directories) await visit(directory);
  return files;
}
const directories = process.argv.slice(2);
const before = await snapshot(directories);
const result = spawnSync("pnpm", ["run", "generate"], { stdio: "inherit" });
if (result.status !== 0) process.exit(result.status ?? 1);
const after = await snapshot(directories);
const changed = [...new Set([...before.keys(), ...after.keys()])].filter(
  (path) => before.get(path) !== after.get(path),
);
if (changed.length) {
  console.error(
    `Generated output is stale. Review and commit regeneration:\n${changed.join("\n")}`,
  );
  process.exitCode = 1;
}
