const sendEmail = require('./sendEmail');

const sendVerificationEmail = async ({ name, email, otp }) => {
  const message = `<p>Please verify your email with the code below:</p>
  <p style="color:#00bf63;font-size:25px;letter-spacing:2px;"><b>${otp}</b></p>
  <p>This code <b>expires in 1 hour(s)</b>.</p>`;

  return sendEmail({
    to: email,
    subject: 'Email Verification',
    html: `<h4> Hello, ${name}</h4>
    ${message}
    `,
  });
};

module.exports = sendVerificationEmail;
