// prettier.config.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./shared-styles.css",
  singleQuote: true,
  experimentalTernaries: true,
};
