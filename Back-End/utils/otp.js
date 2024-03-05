const crypto = require('crypto');

const throwCustomError = require('../errors/custom-error');

const generateOTP = (expInMs) => {
  const otp = crypto.randomInt(100000, 999999).toString(); // 6-digits verification code
  const otpExpiration = new Date(Date.now() + expInMs);

  return { otp, otpExpiration };
};

const verifyOTP = ({ user, otp, reset }) => {
  const storedOtp = reset ? user.resetPwOtp : user.otp;
  const storedOtpExpiration = reset
    ? user.resetPwOtpExpiration
    : user.otpExpiration;

  if (storedOtp !== otp || storedOtpExpiration < new Date()) {
    throwCustomError('Invalid OTP or OTP expired.', 400);
  }
};

module.exports = { generateOTP, verifyOTP };
