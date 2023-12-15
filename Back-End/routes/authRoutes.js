const express = require('express');

const authController = require('../controllers/authController');

const router = express.Router();

router.post('/uploadNationalID', authController.uploadNationalID);

router.post('/register', authController.register);

router.post('/verify-email', authController.verifyEmail);

router.post('/resend-otp', authController.resendOTP);

router.post('/login', authController.login);

module.exports = router;
