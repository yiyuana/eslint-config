/**
 * 参考文档https://eslint.org/docs/rules/
 */

// "off" or 0 - 关闭规则
// "warn" or 1 - 将规则视为一个警告（不会影响退出码）
// "error" or 2 - 将规则视为一个错误 (退出码为1)
const javascriptRule = require('../rules/javascript');

module.exports = {
  files: ['*.js'], // 只检测js文件类型
  extends: ['airbnb-base/legacy', 'prettier'],
  parser: 'babel-eslint',
  rules: {
    ...javascriptRule,
  },
};
