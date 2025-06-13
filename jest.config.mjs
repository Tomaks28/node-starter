/** @type {import('jest').Config} */
export default {
  displayName: "server",
  testEnvironment: "node", // Use node environment for basckend tests
  rootDir: "./",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Map @/ to src/
  },
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.json" }],
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/dist/"],
};
