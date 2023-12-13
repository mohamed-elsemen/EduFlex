const express = require('express');
const morgan = require('morgan');
require('express-async-errors');
require('dotenv').config();

// 404 and error handler middlewares
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');

const app = express();

app.use(morgan('dev')); // request logger middleware
app.use(express.json());

app.use(notFound); // catch-all route
app.use(errorHandler); // all errors will be forwarded to this middleware

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});