const express = require('express');
const { body } = require('express-validator');

const authController = require('../controllers/authController');
const {
  validateNameAndEmail,
  validatePassword,
  normalizeUserEmail,
} = require('../utils');

const router = express.Router();

// we combined this to be in the register route!
// router.post('/upload-national-id', authController.uploadNationalID);

router.post(
  '/register',
  [validateNameAndEmail(), validatePassword('password', 'confirmPassword')],
  authController.register
);

router.post(
  '/verify-email',
  normalizeUserEmail('email'),
  authController.verifyEmail
);

router.post(
  '/resend-otp',
  normalizeUserEmail('email'),
  authController.resendOTP
);

router.post(
  '/login',
  [
    normalizeUserEmail('email'),
    body('password', 'Password must not be empty').trim().notEmpty(),
  ],
  authController.login
);

router.post(
  '/forgot-password',
  normalizeUserEmail('email'),
  authController.forgotPassword
);

router.post(
  '/reset-password',
  validatePassword('newPassword', 'confirmNewPassword'),
  authController.resetPassword
);

module.exports = router;
