const javascriptRule = require('../rules/javascript');
const typescriptRule = require('../rules/typescript');

module.exports = {
  files: ['*.ts'],
  extends: [
    'airbnb-base/legacy',
    'plugin:@typescript-eslint/recommended', // 使用@typescript-eslint / eslint-plugin中的推荐规则
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      // 默认使用根目录 tsconfig.json
      // 配置见https://www.npmjs.com/package/eslint-import-resolver-typescript
      typescript: {
        // eslint-disable-next-line max-len
        // 解决tsconfig下的path别名导致eslint插件无法识别的bug
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
  },
  rules: {
    ...javascriptRule,
    ...typescriptRule,
  },
};
