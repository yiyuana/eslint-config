const reactConfig = require("./react");

module.exports = {
  extends: ["plugin:react-native/all"],
  /**
   * 指定想启用的环境为react-native/react-native，与插件react-native
   */
  env: {
    "react-native/react-native": true,
  },
  overrides: [reactConfig],
  rules: {},
};
