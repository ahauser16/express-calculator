// express-calculator/test/calculateMode.test.js
const calculateMode = require('../src/utils/calculateMode');

describe('calculateMode', () => {
  test('calculates the mode of an array of numbers', () => {
    expect(calculateMode([1, 2, 2, 3])).toEqual([2]);
  });

  test('calculates the mode of an array with multiple modes', () => {
    expect(calculateMode([1, 1, 2, 2, 3])).toEqual([1, 2]);
  });

  test('calculates the mode of an array with all unique numbers', () => {
    expect(calculateMode([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('calculates the mode of an empty array to be an empty array', () => {
    expect(calculateMode([])).toEqual([]);
  });

  // New tests
  test('calculates the mode of an array with negative numbers', () => {
    expect(calculateMode([-1, -2, -2, -3])).toEqual([-2]);
  });

  test('calculates the mode of an array with floating point numbers', () => {
    expect(calculateMode([1.1, 2.2, 2.2, 3.3])).toEqual([2.2]);
  });

  test('calculates the mode of a large array', () => {
    const largeArray = Array.from({ length: 100 }, (_, i) => Math.floor(i / 2)); // 0, 0, 1, 1, 2, 2, ...
    expect(calculateMode(largeArray)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49]);
  });

  test('calculates the mode of an array of zeros', () => {
    expect(calculateMode([0, 0, 0, 0])).toEqual([0]);
  });

  test('calculates the mode of an array with repeated numbers', () => {
    expect(calculateMode([5, 5, 5, 2, 2, 1, 1])).toEqual([5]);
  });

  test('calculates the mode of an array with no mode', () => {
    expect(calculateMode([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});