const nodemailer = require('nodemailer');

const nodemailerConfig = require('./nodemailerConfig');
const {
  generateVerifyEmailTemplate,
  generateResetPasswordTemplate,
  generateAcknowledgementTemplate,
} = require('./emailTemplates');

const sendEmail = async ({ to, subject, html }) => {
  const transporter = nodemailer.createTransport(nodemailerConfig);

  return transporter.sendMail({
    from: '"EduFlex Team" <eduflexteam@outlook.com>', // sender address
    to,
    subject,
    html,
  });
};

const sendVerificationEmail = async ({ name, email, otp, resend }) => {
  return sendEmail({
    to: email,
    subject: resend
      ? 'Account Verification Resend request'
      : 'Account Verification',
    html: generateVerifyEmailTemplate(otp, name),
  });
};

const sendResetPasswordEmail = async ({ name, email, resetPwOtp }) => {
  return sendEmail({
    to: email,
    subject: 'Reset Password',
    html: generateResetPasswordTemplate(resetPwOtp, name),
  });
};

const sendAcknowledgementEmail = async ({ name, email }) => {
  return sendEmail({
    to: email,
    subject: 'Password Update',
    html: generateAcknowledgementTemplate(name, email),
  });
};

module.exports = {
  sendVerificationEmail,
  sendResetPasswordEmail,
  sendAcknowledgementEmail,
};
