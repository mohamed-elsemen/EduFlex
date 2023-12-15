const path = require('path');
const crypto = require('crypto');

const { v4: uuidv4 } = require('uuid');

const User = require('../models/User');
const {
  sendVerificationEmail,
  generateJWT,
  createTokenUser,
} = require('../utils/');
const throwCustomError = require('../errors/custom-error');

const register = async (req, res, next) => {
  // Protection for admin role (only assigned for first acc or manually from database)
  if (req.body.role === 'admin') {
    throwCustomError('Bad request', 400);
  }

  // First account only is admin!
  const isFirstAccount = (await User.countDocuments()) === 0;
  const role = isFirstAccount ? 'admin' : req.body.role;

  const { education, level, grade, nationalID } = req.body;

  // handling required field for instructor role
  if (
    role === 'instructor' &&
    (!nationalID || nationalID.trim().length === 0)
  ) {
    throwCustomError('National ID is a required field for instructors!', 422);
  }

  // handling required fields for student role
  if (role === 'student' && !education) {
    throwCustomError('Education is a required field for students!', 422);
  }

  if (role === 'student' && education !== 'Graduated' && !(level || grade)) {
    throwCustomError(
      'Level of Education and Grade fields are required for undergrads!',
      422
    );
  }

  const otp = crypto.randomInt(100000, 999999).toString(); // 6-digits verification code
  const otpExpiration = new Date(Date.now() + 3600000); // expires in 1hr

  const user = await User.create({ ...req.body, role, otp, otpExpiration });

  await sendVerificationEmail({
    name: user.firstName,
    email: user.email,
    otp,
  });

  res.status(201).json({
    msg: 'Success! Please check your email to verify account',
  });
};

const verifyEmail = async (req, res, next) => {
  const { email, otp } = req.body;
  const user = await User.findOne({ email });

  if (!user || user.isVerified) {
    throwCustomError('Invalid request or user already verified.', 400);
  }

  if (user.otp !== otp || user.otpExpiration < new Date()) {
    throwCustomError('Invalid OTP or OTP expired.', 400);
  }

  user.isVerified = true;
  await user.save();

  // Generate JWT token for authenticated access
  const tokenUser = createTokenUser(user);
  const token = generateJWT(tokenUser);

  res.status(200).json({ message: 'Email verified successfully.', token });
};

const resendOTP = async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user || user.isVerified) {
    throwCustomError('Invalid request or user already verified.', 400);
  }

  const otp = crypto.randomInt(100000, 999999).toString(); // 6-digits verification code
  const otpExpiration = new Date(Date.now() + 3600000); // expires in 1hr

  user.otp = otp;
  user.otpExpiration = otpExpiration;
  await user.save();

  // Send new OTP via email
  await sendVerificationEmail({
    name: user.firstName,
    email: user.email,
    otp,
    resend: true,
  });

  res.status(200).json({ message: 'New OTP sent successfully.' });
};

const login = async (req, res, next) => {
  res.send('login user');
};

const uploadNationalID = async (req, res, next) => {
  if (!req.files) {
    throwCustomError('No file uploaded', 400);
  }

  const nationalIdImage = req.files.image;
  if (!nationalIdImage.mimetype.startsWith('image')) {
    throwCustomError('Please upload an image', 400);
  }

  const maxSize = 1024 * 1024; // 1MB
  if (nationalIdImage.size > maxSize) {
    throwCustomError('Please upload an image smaller than 1MB', 400);
  }

  const imageName = uuidv4() + '-' + nationalIdImage.name;
  await nationalIdImage.mv(
    path.join(__dirname, '..', 'public', 'uploads', imageName)
  );

  res.status(200).json({ nationalID: `uploads/${imageName}` });
};

module.exports = { register, verifyEmail, resendOTP, login, uploadNationalID };
