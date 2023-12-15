const sendEmail = require('./sendEmail');
const generateVerifyEmailTemplate = require('./emailTemplates');

const sendVerificationEmail = async ({ name, email, otp }) => {

  return sendEmail({
    to: email,
    subject: 'Email Verification',
    html: generateVerifyEmailTemplate(otp, name),
  });
};

module.exports = sendVerificationEmail;
