// express-calculator/test/calculateMean.test.js
const calculateMean = require('../src/utils/calculateMean');

describe('calculateMean', () => {
  test('calculates the mean of an array of numbers', () => {
    expect(calculateMean([1, 2, 3, 4, 5])).toBe(3);
  });

  test('calculates the mean of an array with one number', () => {
    expect(calculateMean([10])).toBe(10);
  });

  test('calculates the mean of an empty array to be NaN', () => {
    expect(calculateMean([])).toBe(NaN);
  });

  test('calculates the mean of an array with negative numbers', () => {
    expect(calculateMean([-5, -3, -1, -4, -2])).toBe(-3);
  });

  test('calculates the mean of an array with floating point numbers', () => {
    expect(calculateMean([1.5, 2.5, 3.5])).toBeCloseTo(2.5);
  });

  test('calculates the mean of a large array', () => {
    const largeArray = Array.from({length: 100}, (_, i) => i + 1); // 1 to 100
    expect(calculateMean(largeArray)).toBe(50.5);
  });

  test('calculates the mean of an array of zeros', () => {
    expect(calculateMean([0, 0, 0, 0])).toBe(0);
  });

  test('calculates the mean of an array with mixed positive and negative numbers', () => {
    expect(calculateMean([-2, -1, 0, 1, 2])).toBe(0);
  });
});