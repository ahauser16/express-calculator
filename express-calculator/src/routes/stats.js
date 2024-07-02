const express = require('express');
const router = express.Router();
const calculateMean = require('../utils/calculateMean');
const calculateMedian = require('../utils/calculateMedian');
const calculateMode = require('../utils/calculateMode');
const parseNums = require('../utils/parseNums');
const handleSave = require('../utils/handleSave');

//this function below is used to parse the numbers from the query string
// const writeResultsToFile = require('../utils/writeResultsToFile');

const calculateAndRespond = (operation, req, res, next) => {
  try {
    let result;
    switch (operation) {
      case 'mean':
        result = { operation, value: calculateMean(req.nums) };
        break;
      case 'median':
        result = { operation, value: calculateMedian(req.nums) };
        break;
      case 'mode':
        result = { operation, value: calculateMode(req.nums) };
        break;
      case 'all':
        result = {
          operation,
          mean: calculateMean(req.nums),
          median: calculateMedian(req.nums),
          mode: calculateMode(req.nums),
        };
        break;
      default:
        throw new Error('Invalid operation');
    }
    req.result = result; // Assign result for handleSave

    // Content negotiation
    const accept = req.headers.accept;
    if (accept && accept.includes('text/html')) {
      res.send(`<html><body><p>${JSON.stringify(result)}</p></body></html>`); // Simplified HTML response
    } else {
      res.json(result); // Default to JSON response
    }
    next();
  } catch (error) {
    next(error);
  }
};

router.get('/mean', parseNums, calculateAndRespond.bind(null, 'mean'), handleSave);
router.get('/median', parseNums, calculateAndRespond.bind(null, 'median'), handleSave);
router.get('/mode', parseNums, calculateAndRespond.bind(null, 'mode'), handleSave);
router.get('/all', parseNums, calculateAndRespond.bind(null, 'all'), handleSave);

module.exports = router;