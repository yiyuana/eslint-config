module.exports = {
  /**
   * 表情符号支持
   * <Text>😀 😎 👍 💯</Text>
   * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/393
   */
  'jsx-a11y/accessible-emoji': 0,
  /**
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
   */
  'react/jsx-filename-extension': [
    2,
    {
      extensions: ['.jsx', '.tsx'],
    },
  ],
  /**
   * 优先无状态组件？
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
   */
  'react/prefer-stateless-function': 0,
  /**
   * 优先解构赋值？
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
   */
  'react/destructuring-assignment': 0,
  /**
   * 推荐组件开发时打开
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
   */
  'react/prop-types': 0,
  /**
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
   */
  'react/react-in-jsx-scope': 0,
  /**
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
   */
  'react/jsx-props-no-spreading': 0,
  /**
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
   */
  'react/static-property-placement': 0,
  /**
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
   */
  'react/no-unescaped-entities': 0,
  /**
   * https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
   */
  'react-hooks/exhaustive-deps': 0,
};
