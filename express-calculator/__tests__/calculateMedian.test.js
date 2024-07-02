// express-calculator/test/calculateMedian.test.js

const calculateMedian = require('../src/utils/calculateMedian');

describe('calculateMedian', () => {
  test('calculates the median of an odd-length array', () => {
    expect(calculateMedian([1, 3, 5])).toBe(3);
  });

  test('calculates the median of an even-length array', () => {
    expect(calculateMedian([1, 2, 3, 4])).toBe(2.5);
  });

  test('calculates the median of an array with one number', () => {
    expect(calculateMedian([10])).toBe(10);
  });

  test('calculates the median of an empty array to be NaN', () => {
    expect(calculateMedian([])).toBe(NaN);
  });

  test('calculates the median of an array with negative numbers', () => {
    expect(calculateMedian([-5, -3, -1, -4, -2])).toBe(-3);
  });

  test('calculates the median of a large array', () => {
    const largeArray = Array.from({ length: 101 }, (_, i) => i + 1); // 1 to 101
    expect(calculateMedian(largeArray)).toBe(51);
  });

  test('calculates the median of an array with floating point numbers', () => {
    expect(calculateMedian([1.1, 2.2, 3.3, 4.4, 5.5])).toBe(3.3);
  });

  test('calculates the median of an array of zeros', () => {
    expect(calculateMedian([0, 0, 0, 0, 0])).toBe(0);
  });

  test('calculates the median of an unsorted array', () => {
    expect(calculateMedian([5, 1, 4, 2, 3])).toBe(3);
  });

  test('calculates the median of an array with repeated numbers', () => {
    expect(calculateMedian([2, 2, 2, 3, 3, 3, 4, 4, 4])).toBe(3);
  });
});