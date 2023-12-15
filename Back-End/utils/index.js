const sendVerificationEmail = require('./sendVerificationEmail');
const { generateJWT, verifyJWT } = require('./jwt');
const createTokenUser = require('./createTokenUser');
const collectValidationResult = require('./collectValidationResult');

module.exports = {
  sendVerificationEmail,
  generateJWT,
  verifyJWT,
  createTokenUser,
  collectValidationResult,
};
