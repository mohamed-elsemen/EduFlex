class CustomError extends Error {
  constructor(message, statusCode, data) {
    super(message);
    this.statusCode = statusCode;
    this.data = data;
  }
}

const throwCustomError = (message, statusCode, data) => {
  throw new CustomError(message, statusCode, data);
};

module.exports = throwCustomError;
