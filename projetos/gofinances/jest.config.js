module.exports = {
  preset: "react-native",
  testPathIgnorePatterns: ["/node_modules/", "/android/", "/ois"],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
};
