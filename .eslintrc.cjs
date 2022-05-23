/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  env: {
    node: true,
    browser: true,
    commonjs: true,
    es6: true,
    amd: true,
    "vue/setup-compiler-macros": true,
  },
  rules: {
    "vue/multi-word-component-names": 0,
    "no-console": 1,
  },
};
