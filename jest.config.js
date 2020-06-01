module.exports = {
  testEnvironment: 'node',
  bail: true,
  verbose: true,
  setupFilesAfterEnv: ['jest-extended'],
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!**/node_modules/**'],
  testPathIgnorePatterns: ['/node_modules/'],
  testMatch: ['<rootDir>/__tests__/**/?(*.)+(spec|test).js?(x)']
}
