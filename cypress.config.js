const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
const browserify = require('@cypress/browserify-preprocessor');
const resolve = require('resolve');

module.exports = defineConfig({
  e2e: {

    excludeSpecPattern: "*.{js,ts}",
    specPattern: "**/*.feature",
    supportFile: false,
    watchForFileChanges: false,
    viewportHeight: 1080,
    viewportWidth: 1920,

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
