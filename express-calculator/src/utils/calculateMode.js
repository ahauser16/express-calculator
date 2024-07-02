// express-calcualtor/src/utils/calculateMedian.js
const calculateMode = (numbers) => {
    const frequency = {};
    let maxFreq = 0;
    let modes = [];
    numbers.forEach((number) => {
      if (!frequency[number]) frequency[number] = 0;
      frequency[number]++;
  
      if (frequency[number] > maxFreq) {
        maxFreq = frequency[number];
        modes = [number];
      } else if (frequency[number] === maxFreq) {
        modes.push(number);
      }
    });
    return [...new Set(modes)];
  };
  
  module.exports = calculateMode;