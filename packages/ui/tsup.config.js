import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/Colors.tsx"],
  format: ["esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
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
