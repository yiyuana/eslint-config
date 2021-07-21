const javascriptReactConfig = require('./overrides/javascript/react');
const typescriptReactConfig = require('./overrides/typescript/react');

module.exports = {
  extends: ['./index'],
  overrides: [javascriptReactConfig, typescriptReactConfig],
  rules: {},
};
