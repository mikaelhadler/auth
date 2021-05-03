// eslint-disable-next-line @typescript-eslint/no-var-requires
const { name } = require("./package.json");

module.exports = {
  displayName: name,
  preset: "@vue/cli-plugin-unit-jest/presets/typescript",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  testMatch: ["**/?(*.)+(spec|test).ts"],
};
