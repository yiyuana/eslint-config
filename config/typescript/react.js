module.exports = {
  files: ["*.tsx"],
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      // 检测react版本
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".tsx", ".ts"],
    },
    "import/resolver": {
      // 配置见https://www.npmjs.com/package/eslint-import-resolver-typescript
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
  },
  rules: {},
};
