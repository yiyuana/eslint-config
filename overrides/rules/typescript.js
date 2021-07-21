module.exports = {
  '@typescript-eslint/no-empty-interface': 1,
  '@typescript-eslint/no-empty-function': 1,
  // '@typescript-eslint/explicit-module-boundary-types': 0,
  '@typescript-eslint/explicit-function-return-type': [
    0,
    {
      allowExpressions: true, // if true, only functions which are part of a declaration will be checked
      allowTypedFunctionExpressions: true, // if true, type annotations are also allowed on the variable of a function expression rather than on the function directly
    },
  ],
  '@typescript-eslint/no-use-before-define': [
    2,
    {
      functions: true,
      classes: true,
      variables: false,
    },
  ],
};
