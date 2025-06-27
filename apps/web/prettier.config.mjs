// prettier.config.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindStylesheet: './src/app/global.css',
  singleQuote: true,
  experimentalTernaries: true,
};
