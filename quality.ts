// Shared by the application and deployment workspaces. No runtime credentials needed.
export const fmt = {
  printWidth: 88,
  tabWidth: 2,
  ignorePatterns: [
    "**/node_modules/**",
    "**/dist/**",
    "**/.agents/**",
    "**/.alchemy/**",
    "**/*.md",
    "**/*.mdx",
    "**/uv.lock",
    "**/pnpm-lock.yaml",
  ],
};

// Effect's recommended preset owns semantic diagnostics. Keep migration/style
// suggestions visible without making unrelated application rewrites prerequisites.
const rules = {
  "effecttsgo/node-builtin-import": "warn",
  "react/rules-of-hooks": "error",
  "react/exhaustive-deps": "error",
  "typescript/no-floating-promises": "warn",
  "typescript/no-misused-promises": "warn",
  "vite-plus/prefer-vite-plus-imports": "error",
} satisfies Record<string, "error" | "warn" | "off">;

export const lint = {
  plugins: [
    "typescript" as const,
    "react" as const,
    "jsx-a11y" as const,
    "import" as const,
    "vitest" as const,
  ],
  jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
  rules,
  options: { typeAware: true, typeCheck: true },
  ignorePatterns: ["**/node_modules/**", "**/dist/**", "**/.agents/**"],
};
