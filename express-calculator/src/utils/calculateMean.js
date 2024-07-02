// express-calcualtor/src/utils/calculateMean.js
const calculateMean = (numbers) => {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
  };
  
  module.exports = calculateMean;