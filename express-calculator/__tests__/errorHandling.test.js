// express-calculator/__tests__/errorHandling.test.js
const request = require('supertest');
const app = require('../src/app');

describe('Error Handling', () => {
    test('It should handle invalid input when provided to a route', async () => {
        const response = await request(app).get('/stats/mean?nums=invalid,number');
        //This assertion checks if the status code of the response is 400, indicating a Bad Request. A 400 status code is expected here because the input (nums=invalid,number) is invalid.
        expect(response.statusCode).toBe(400);
        //This assertion verifies that the response body contains an error property, suggesting that the application is expected to respond with an error message in the body when an error occurs.
        expect(response.body).toHaveProperty('error');
        //This final assertion checks that the error message includes the phrase 'is not a number', which is expected to be part of the error message when non-numeric values are provided in a context where numbers are expected.
        expect(response.body.error).toContain('is not a number');
    });
});

// Error Handling Test: Test how the application handles errors, for example, by triggering an error within a route and ensuring that it responds with the correct status code and error message.

