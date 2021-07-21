const javascriptConfig = require('./overrides/javascript/default');
const typescriptConfig = require('./overrides/typescript/default');
const javascriptReactConfig = require('./overrides/javascript/react');
const typescriptReactConfig = require('./overrides/typescript/react');

module.exports = {
  extends: ['./index', 'plugin:react-native/all'],
  /**
   * 指定想启用的环境为react-native/react-native，与插件react-native
   */
  env: {
    'react-native/react-native': true,
  },
  overrides: [javascriptConfig, javascriptReactConfig, typescriptConfig, typescriptReactConfig],
  rules: {
    'react-native/no-inline-styles': 1,
    'react-native/no-color-literals': 0,
  },
};
