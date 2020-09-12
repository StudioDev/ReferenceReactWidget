/**
 * This file is used for the sandbox object mocks for the `yarn serve` command
 * It can also double as sandbox mocks for jest and other tests
 * Any unmocked functions are noops by default when doing local server development
 */

module.exports = {
    log: {
        // Since we need this for the server, we ignore
        // eslint-disable-next-line no-console
        log: (input) => console.log(input),
        feature: (input) => {
            window.sandboxFeature = input;
        },
        error: (input) => {
            window.sandboxError = input;
        },
    }
}