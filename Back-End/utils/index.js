const {
  sendVerificationEmail,
  sendResetPasswordEmail,
  sendAcknowledgementEmail,
} = require('./sendEmails');
const { generateJWT, verifyJWT } = require('./jwt');
const { generateOTP, verifyOTP } = require('./otp');
const createTokenUser = require('./createTokenUser');
const collectValidationResult = require('./collectValidationResult');

module.exports = {
  sendVerificationEmail,
  sendResetPasswordEmail,
  sendAcknowledgementEmail,
  generateJWT,
  verifyJWT,
  createTokenUser,
  collectValidationResult,
  generateOTP,
  verifyOTP,
};
