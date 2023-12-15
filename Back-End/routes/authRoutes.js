const express = require('express');
const { body } = require('express-validator');

const User = require('../models/User');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/uploadNationalID', authController.uploadNationalID);

router.post(
  '/register',
  [
    body('firstName')
      .trim()
      .isLength({ min: 3, max: 20 })
      .withMessage('First name must be of length 3-20')
      .isAlphanumeric()
      .withMessage('First name must consist of only letters and numbers'),
    body('lastName')
      .trim()
      .isLength({ min: 3, max: 20 })
      .withMessage('Last name must be of length 3-20')
      .isAlphanumeric()
      .withMessage('Last name must consist of only letters and numbers'),
    body('email')
      .trim()
      .isEmail()
      .withMessage('please provide a valid E-mail')
      .normalizeEmail()
      .custom(async (value, { req }) => {
        const user = await User.findOne({ email: value });
        if (user) {
          throw new Error('A user with this E-mail already exists');
        }
      }),
    body('password')
      .trim()
      .isLength({ min: 8 })
      .withMessage('password must be at least 8 characters')
      // .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) // min-length of 8 characters and at least one letter and one number!
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/) // this one will apply the above and also accept special characters
      .withMessage('password must contain at least 1 letter and 1 number'),
    body('confirmPassword').custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Password and Confirmation don't match");
      }
    }),
  ],
  authController.register
);

router.post('/verify-email', authController.verifyEmail);

router.post('/resend-otp', authController.resendOTP);

router.post(
  '/login',
  [
    body('email', 'E-mail must not be empty').trim().notEmpty(),
    body('password', 'Password must not be empty').trim().notEmpty(),
  ],
  authController.login
);

module.exports = router;
