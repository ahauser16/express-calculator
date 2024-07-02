// 404 Not Found Test: Test that your application correctly handles undefined routes by returning a 404 status code. This ensures that your error handling for unknown routes is working as expected.
const request = require('supertest');
const app = require('../src/app');

describe('404 Not Found Handling', () => {
    test('It should respond with 404 for non-existent routes', async () => {
      const response = await request(app).get('/non-existent-route');
      expect(response.statusCode).toBe(404);
    });
  });