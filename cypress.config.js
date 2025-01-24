const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl: 'https://example.com',

    defaultCommandTimeout: 10000,  // Timeout for commands (10 seconds)
    pageLoadTimeout: 60000,        // Timeout for full page load (60 seconds)
    requestTimeout: 5000,          // Timeout for network requests (5 seconds)
    viewportWidth: 1280,  // Width for desktop view
    viewportHeight: 720,  // Height for desktop view
    //chromeWebSecurity: true, //Enables chrome's web security features
    numTestsKeptInMemory: 0,
    experimentalNetworkIdle: true,
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    "video": false,
    "screenshotOnRunFailure": false,
    

    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      
      
    },
  },
});
