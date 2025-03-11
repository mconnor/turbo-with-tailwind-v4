// @ts-check
import js from "@eslint/js";

// import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';

// import onlyWarn from 'eslint-plugin-only-warn';
import tseslint from "typescript-eslint";

import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";
import ignoresConfig from "./ignores.config.mjs";

export default tseslint.config(
  ignoresConfig,
  {
    name: "[*] global language options",
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  js.configs.recommended,
  // comments.recommended,
  // TypeScript
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylisticTypeChecked,

  {
    name: "[*] TS Rules",
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        sourceType: "module",
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "capitalized-comments": "off",
      "@typescript-eslint/no-unsafe-call": "warn",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/consistent-type-definitions": "warn",
    },
  },

  {
    name: "[*] .d.ts files",
    files: ["**/*.d.ts"],
    rules: {
      "@typescript-eslint/triple-slash-reference": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/consistent-type-definitions": "warn",
    },
  },

  eslintConfigPrettier,
);
