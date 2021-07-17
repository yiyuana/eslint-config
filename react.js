const javascriptReactConfig = require("./config/javascript/react");
const typescriptReactConfig = require("./config/typescript/default");

module.exports = {
  extends: ["./index"],
  overrides: [javascriptReactConfig, typescriptReactConfig],
};
