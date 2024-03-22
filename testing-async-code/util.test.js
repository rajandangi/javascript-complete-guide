const { loadTitle } = require('./util');
/**
 * The jest.mock('./http') line tells Jest to replace the ./http module with a mock module.
 */
// jest.mock('./http');

/**
 * Since we have created axios.get() in __mocks__/axios.js, we can now test the loadTitle() function even without
 * creating mock http.js file.
 * jest js automatically uses mocks of global node_modules.
 */

test('should print an uppercase text', () => {
    loadTitle().then(title => {
        expect(title).toBe('DELECTUS AUT AUTEM');
    });
})