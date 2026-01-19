const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ocnw76",
  video: true,
  
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'Cypress Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {
    baseUrl: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
  env: {
    URL: 'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
  }
});
