import { recommended } from "@effect/tsgo/oxlint-presets";
import { defineConfig } from "vite-plus";
import { fmt, lint } from "./quality.js";
export default defineConfig({
  test: { include: ["*/test/**/*.test.{ts,mjs}"], pool: "forks" },
  fmt,
  lint: { ...lint, extends: [recommended] },
});
