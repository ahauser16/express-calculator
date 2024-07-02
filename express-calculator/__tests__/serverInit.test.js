// express-calculator/__tests__/serverInit.test.js
// Server Initialization Test: Verify that your Express server starts correctly on the specified port. This test ensures that the basic server setup is correct and that the application can run without immediate errors.
const request = require('supertest');
const app = require('../src/app');

describe('Server Initialization', () => {
    test('It should respond to GET requests at the root URL', async () => {
      const response = await request(app).get('/');
      expect(response.statusCode).toBe(200);
      expect(response.text).toContain('Welcome to the Express Calculator!');
    });
  });