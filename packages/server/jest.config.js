const { name } = require("./package.json")

module.exports = {
  displayName: name,
  coverageDirectory: "coverage",
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1"
  },
  preset: "ts-jest",
  roots: ["<rootDir>/src"],
  testEnvironment: "node",
  transform: {
    ".+\\.ts$": "ts-jest"
  },
  testMatch: ["**/?(*.)+(spec|test).ts"],
  setupFilesAfterEnv: [
    "<rootDir>/src/__tests__/frameworks/database/prisma-client-mock.ts"
  ]
}
