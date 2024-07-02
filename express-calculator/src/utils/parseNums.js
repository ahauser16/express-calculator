const parseNums = (req, res, next) => {
    try {
      if (!req.query.nums) {
        const error = new Error('nums are required.');
        error.status = 400;
        throw error;
      }
      const nums = req.query.nums.split(',').map(num => {
        const parsedNum = parseFloat(num);
        if (isNaN(parsedNum)) {
          const error = new Error(`${num} is not a number.`);
          error.status = 400;
          throw error;
        }
        return parsedNum;
      });
      req.nums = nums;
      next();
    } catch (error) {
      next(error);
    }
  };
  
  module.exports = parseNums;