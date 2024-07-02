// express-calcualtor/src/app.js
const express = require('express');
const statsRouter = require('./routes/stats'); // Make sure the path is correct
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Express Calculator!');
});

// Use the stats router
app.use('/stats', statsRouter);

// Generic Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  // Check if the error has a status property
  const errorCode = err.status || 500;
  // Send error in JSON format
  res.status(errorCode).json({ error: err.message || 'Something broke!' });
});

module.exports = app;