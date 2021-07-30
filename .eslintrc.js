module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['./base.js'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // 'comma-dangle': ['error', 'only-multiline'],
  },
};
