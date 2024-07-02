const writeResultsToFile = require('./writeResultsToFile');

const handleSave = async (req, res, next) => {
  if (req.query.save && req.query.save.toLowerCase() === 'true') {
    try {
      await writeResultsToFile(req.result);
      console.log('Result saved.');
    } catch (error) {
      return next(error);
    }
  }
  next();
};

module.exports = handleSave;