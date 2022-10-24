const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
const browserify = require('@cypress/browserify-preprocessor');
const resolve = require('resolve');

module.exports = defineConfig({
  e2e: {

    excludeSpecPattern: "*.{js,ts}",
    specPattern: "**/*.feature",
    supportFile: false,

    setupNodeEvents(on, config) {

      const options = {
        ...browserify.defaultOptions,
        typescript: resolve.sync('typescript')
      };

      on('file:preprocessor', cucumber(options));

      return config

    },
  },
});
