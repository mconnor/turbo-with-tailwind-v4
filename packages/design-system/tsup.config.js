import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/button.tsx"],
  format: ["esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: false,
  external: ["react"],
  outDir: "dist",
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
  outExtension({ format }) {
    return {
      js: `.mjs`,
      dts: `.d.mts`,
    };
  },
});
