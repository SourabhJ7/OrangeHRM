const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',

    timeout: 30000,

    use: {
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure'
    },

    reporter : [
        ['list'],['allure-playwright',{
        resultsDir : 'allure-results'
        }]
    ],

    projects: [
        {
            name: 'chromium',
            use: {
                browserName : 'chromium'
            }
        },
        {
            name: 'webkit',
            use: {
                browserName : 'webkit'
            }
        },
        {
            name: 'firefox',
            use: {
                browserName : 'firefox'
            }
        }
    ]
});
