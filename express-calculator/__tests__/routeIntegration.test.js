const request = require('supertest');
const app = require('../src/app'); 

describe('Route Integration', () => {
  test('The /stats/all route should return mean, median, and mode', async () => {
    const response = await request(app).get('/stats/all?nums=1,2,2,3');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      operation: "all",
      mean: 2,
      median: 2,
      mode: [2]
    });
  });
});

  // Integration Test for Routes: While you have tests for the statistical operations, you can also write integration tests for the routes themselves, ensuring that they correctly parse query parameters, call the appropriate utility functions, and return the expected JSON structure. This test verifies that the /all route correctly calculates the mean, median, and mode of the numbers provided in the query parameter and returns the expected JSON response.