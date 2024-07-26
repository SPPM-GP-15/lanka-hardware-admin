// jest.config.js
module.exports = {
    // Jest configuration options
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js',
    },
    testEnvironment: 'jsdom',
  };
  