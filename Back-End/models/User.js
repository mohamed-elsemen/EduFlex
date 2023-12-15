const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // technically, this isn't a validator..this is just checking for the index
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: {
      values: ['admin', 'instructor', 'student'],
      message: '{VALUE} is not supported',
    },
    required: true,
  },
  education: {
    type: String,
    enum: {
      values: ['General', 'Special', 'Graduated'],
      message: '{VALUE} is not supported',
    },
  },
  level: {
    type: String,
    enum: {
      values: ['Primary stage', 'Middle school', 'High school', 'University'],
      message: '{VALUE} is not supported',
    },
  },
  grade: {
    type: String,
    enum: {
      values: ['First grade', 'Second grade', 'Third grade'],
      message: '{VALUE} is not supported',
    },
  },
  nationalID: String,
  otp: String,
  otpExpiration: Date,
  isVerified: {
    type: Boolean,
    default: false,
  },
});

// reserve the 'this' keyword by using 'function' instead of arrow-function
userSchema.pre('save', async function () {
  // we don't want to re-hash existing password if it wasn't updated.
  if (!this.isModified('password')) {
    return;
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.checkPassword = async function (enteredPassword) {
  const doesMatch = await bcrypt.compare(enteredPassword, this.password);
  return doesMatch;
};

module.exports = model('User', userSchema);
