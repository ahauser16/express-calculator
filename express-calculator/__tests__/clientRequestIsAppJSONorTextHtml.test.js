const request = require('supertest');
const app = require('../src/app');

describe('GET /mean', () => {
    it('responds with JSON when Accept header is set to application/json', async () => {
        const response = await request(app)
            .get('/mean?nums=1,2,3,4,5')
            .set('Accept', 'application/json');
        expect(response.header['content-type']).toMatch(/json/);
        expect(response.statusCode).toBe(200);
    });
});

describe('GET /mean', () => {
    it('responds with HTML when Accept header is set to text/html', async () => {
        const response = await request(app)
            .get('/mean?nums=1,2,3,4,5')
            .set('Accept', 'text/html');
        expect(response.header['content-type']).toMatch(/html/);
        expect(response.statusCode).toBe(200);
    });
});