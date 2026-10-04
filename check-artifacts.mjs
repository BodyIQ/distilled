import { execFileSync } from "node:child_process";
const changes = execFileSync(
  "git",
  ["status", "--porcelain", "--untracked-files=all", "--", "dist"],
  { encoding: "utf8" },
);
if (changes) {
  console.error(
    `Compiled artifacts differ from the committed package. Rebuild and commit dist/:\n${changes}`,
  );
  process.exitCode = 1;
}
