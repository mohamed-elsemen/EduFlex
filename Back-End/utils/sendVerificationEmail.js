const sendEmail = require('./sendEmail');
const generateVerifyEmailTemplate = require('./emailTemplates');

const sendVerificationEmail = async ({ name, email, otp, resend }) => {
  return sendEmail({
    to: email,
    subject: resend
      ? 'Account Verification Resend request'
      : 'Account Verification',
    html: generateVerifyEmailTemplate(otp, name),
  });
};

module.exports = sendVerificationEmail;
