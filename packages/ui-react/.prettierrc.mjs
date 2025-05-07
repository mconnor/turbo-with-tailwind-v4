// .prettierrc.mjs
/** @type {import("prettier").Config} */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindStylesheet: './src/styles.css',
  singleQuote: true,
  experimentalTernaries: true,
};

export default config;
