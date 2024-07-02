const parseNums = require('../src/utils/parseNums');
const httpMocks = require('node-mocks-http');

describe('parseNums Middleware Tests', () => {
  test('should require nums query parameter', () => {
    const req = httpMocks.createRequest({
      method: 'GET',
      url: '/test',
      query: {}
    });
    const res = httpMocks.createResponse();
    const next = jest.fn();

    parseNums(req, res, next);

    expect(next).toBeCalledWith(expect.objectContaining({ status: 400 }));
  });

  test('should parse nums query parameter into array of numbers', () => {
    const req = httpMocks.createRequest({
      method: 'GET',
      url: '/test',
      query: { nums: '1,2,3.5' }
    });
    const res = httpMocks.createResponse();
    const next = jest.fn();

    parseNums(req, res, next);

    expect(req.nums).toEqual([1, 2, 3.5]);
    expect(next).toBeCalledWith();
  });

  test('should throw an error for non-numeric values', () => {
    const req = httpMocks.createRequest({
      method: 'GET',
      url: '/test',
      query: { nums: '1,a,3' }
    });
    const res = httpMocks.createResponse();
    const next = jest.fn();

    parseNums(req, res, next);

    expect(next).toBeCalledWith(expect.objectContaining({ status: 400 }));
  });

  test('should handle multiple errors for non-numeric values', () => {
    const req = httpMocks.createRequest({
      method: 'GET',
      url: '/test',
      query: { nums: 'x,y,z' }
    });
    const res = httpMocks.createResponse();
    const next = jest.fn();

    parseNums(req, res, next);

    // This test assumes the implementation is adjusted to collect all errors before calling next
    expect(next).toBeCalledWith(expect.objectContaining({ status: 400 }));
  });
});