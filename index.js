const javascriptConfig = require("./config/javascript/default");
const typescriptConfig = require("./config/typescript/default");

module.exports = {
  extends: ["plugin:prettier/recommended"],
  /**
   * 指定想启用的环境为es6
   */
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2021, // 指定你想要使用的 ECMAScript 版本
    sourceType: "module", // 可以设置为设置为 "script" (默认) 或 "module"
    /**
     * 想使用的额外的语言特性
     */
    ecmaFeatures: {
      impliedStrict: true, // 启用全局strict mode（须ecmaVersion>5）
    },
  },
  overrides: [javascriptConfig, typescriptConfig],
};
