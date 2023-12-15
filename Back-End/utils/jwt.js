const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateJWT = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFESPAN,
  });
};

const verifyJWT = (token) => jwt.verify(token, process.env.JWT_SECRET);

module.exports = { generateJWT, verifyJWT };
