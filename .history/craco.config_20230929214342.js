const path = require('path');

module.exports = {
  jest: {
    configure: {
      roots: ['<rootDir>/src', '<rootDir>/spec'],
      testMatch: ['<rootDir>/spec/**/*.{spec,test}.{js,jsx,ts,tsx}'],
    },
  },
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@@": path.resolve(__dirname, "./")
    },
    extensions: ['.ts', '.tsx'],
  },
};
