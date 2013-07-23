exports.config = {

    // seleniumServerJar: '/usr/local/opt/selenium-server-standalone/selenium-server-standalone-2.33.0.jar',
    // seleniumPort: 4444,
    // seleniumArgs: [],
    // chromeDriver: '/usr/local/opt/chromedriver/bin/chromedriver',
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:9000',

    specs: [
        'test/spec-e2e/items.js'
    ],

    jasmineNodeOpts: {
        isVerbose: false,
        showColors: true,
        includeStackTrace: true
    }
};