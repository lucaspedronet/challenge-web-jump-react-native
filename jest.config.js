module.exports = {
  preset: "react-native",
  testPathIgnorePatterns: [
    "/node_modules",
    "/android",
    "/ios",
  ],
  setupFiles: [
    "<rootDir>/setupTest.ts"
  ],
  setupFilesAfterEnv: [
    "jest-styled-components",
    "@testing-library/jest-native/extend-expect"
  ],
  transformIgnorePatterns: [
      "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.js$",
      "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.ts$",
      "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.tsx$",
  ],
  // testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(test).ts?(x)"],
  // transform: {
  //     "^.+\\.(js|ts)$": "ts-jest",
  // },
}
