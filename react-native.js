const javascriptConfig = require('./overrides/javascript/default');
const typescriptConfig = require('./overrides/typescript/default');
const javascriptReactConfig = require('./overrides/javascript/react');
const typescriptReactConfig = require('./overrides/typescript/react');

module.exports = {
  extends: ['plugin:react-native/all', 'plugin:prettier/recommended'],
  /**
   * 指定想启用的环境为react-native/react-native，与插件react-native
   */
  env: {
    'react-native/react-native': true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020, // 指定你想要使用的 ECMAScript 版本
    sourceType: 'module', // 可以设置为设置为 "script" (默认) 或 "module"
    /**
     * 想使用的额外的语言特性
     */
    ecmaFeatures: {
      impliedStrict: true, // 启用全局strict mode（须ecmaVersion>5）
    },
  },
  overrides: [javascriptConfig, javascriptReactConfig, typescriptConfig, typescriptReactConfig],
  rules: {
    'react-native/no-inline-styles': 1,
    'react-native/no-color-literals': 0,
  },
};
