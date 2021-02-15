/**
 * Inject a spy function on each console method
 *
 * @param {boolean} mockImplementation
 * @return {Array<jest.SpyInstance>}
 */
export function injectConsoleSpies(mockImplementation = true) {
    const spy = {};

    beforeAll(() => {
        spy.log = jest.spyOn(window.console, 'log');
        spy.warn = jest.spyOn(window.console, 'warn');
        spy.error = jest.spyOn(window.console, 'error');

        mockImplementation && Object.keys(spy).forEach((key) => {
            spy[key].mockImplementation(() => {});
        });
    });

    beforeEach(() => {
        Object.keys(spy).forEach((key) => {
            spy[key].mockClear();
        });
    });

    afterAll(() => {
        Object.keys(spy).forEach((key) => {
            spy[key].mockRestore();
        });
    });

    return spy;
}
