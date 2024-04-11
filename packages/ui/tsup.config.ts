import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/components/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react"],
  ...options,
}));
