// express-calcualtor/src/utils/calculateMedian.js
const calculateMedian = (numbers) => {
    numbers.sort((a, b) => a - b);
    const mid = Math.floor(numbers.length / 2);
    return numbers.length % 2 !== 0 ? numbers[mid] : (numbers[mid - 1] + numbers[mid]) / 2;
  };
  
  module.exports = calculateMedian;