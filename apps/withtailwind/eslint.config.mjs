import tsLint from "@repo/eslint-config/ts-lint";
import md from "@repo/eslint-config/md-lint";

/** @type {import("eslint").Linter.Config} */
const config = [...tsLint, ...md];

export default config;
