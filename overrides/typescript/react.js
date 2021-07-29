const javascriptRule = require('../rules/javascript');
const typescriptRule = require('../rules/typescript');
const reactRule = require('../rules/react');

module.exports = {
  files: ['*.tsx'],
  extends: ['airbnb', 'airbnb/hooks', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    ...javascriptRule,
    ...typescriptRule,
    ...reactRule,
  },
  settings: {
    react: {
      // 检测react版本
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.tsx'],
    },
    'import/resolver': {
      // 配置见https://www.npmjs.com/package/eslint-import-resolver-typescript
      typescript: {
        // eslint-disable-next-line max-len
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
  },
};
