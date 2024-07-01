const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1280,
  viewportWidth: 720,

  e2e: {
    baseUrl: "http://localhost:3000/",
    retries: 2,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
