// Refactored writeResultsToFile.js to use Promises for better error handling and asynchronous control
const fs = require('fs').promises; // Use the Promise-based version of the fs module
const path = require('path');

const writeResultsToFile = async (result) => {
    const filePath = path.join(__dirname, '..', 'results', 'results.json');
    // Create a new object that includes the original result and a timestamp
    const resultWithTimestamp = {
        ...result,
        timestamp: new Date().toISOString() // ISO 8601 format timestamp
    };
    try {
        await fs.writeFile(filePath, JSON.stringify(resultWithTimestamp, null, 2));
        console.log('Results saved to results/results.json');
    } catch (err) {
        console.error('Error writing to file:', err);
        throw err; // Rethrow the error to be caught by the caller
    }
};

module.exports = writeResultsToFile;