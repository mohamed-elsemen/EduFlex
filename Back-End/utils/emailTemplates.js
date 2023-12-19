const generateVerifyEmailTemplate = (otp, name) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <title>Verification OTP for your account</title>
    <style type="text/css">
      /* Set default font styles */
      body {
        font-family: Arial, sans-serif;
        font-size: 14px;
        line-height: 1.5;
        color: #333;
      }
      /* Center the content */
      .container {
        max-width: 600px;
        margin: 0 auto;
      }
      /* Add styles to the logo */
      .logo {
        display: block;
        margin: 20px auto;
        max-width: 200px;
        border-radius: 50%;
        overflow: hidden;
      }
      /* Add styles to the subject */
      .subject {
        margin-top: 30px;
        text-align: center;
      }
      /* Add styles to the message content */
      .message {
        margin-top: 20px;
      }
      /* Add styles to the footer */
      .footer {
        margin-top: 40px;
        font-size: 12px;
        color: #999;
        text-align: center;
      }
    </style>
  </head>
      <body>
      <div class="container">
        <img class="logo" src="https://i.postimg.cc/0QcM8JQs/Edu-Flex-Logo.png" alt="Logo" />
        <h3 class="subject">Email Verification</h3>
        <div class="message">
          <h4> Hello, ${name}</h4>
          <p>Thank you for registering with EduFlex App. As part of our security measures, we require all new users to verify their account.</p>
          <p>Your account verification code is: </p>
          <p style="color:#00bf63;font-size:25px;letter-spacing:2px;text-align:center"><b>${otp}</b></p>
          <p>Please enter this code on the verification page to complete the process.</p>
          <p>Note that this code <b>expires in 1 hour(s)</b>.</p>
          <p>If you do not verify your account within this time, you may need to request a new OTP.</p>
          <p>If you did not register for this service, please disregard this email and contact us immediately at [eduflexteam@outlook.com].</p>
          <p>Thank you for using EduFlex.</p>
          <p>The EduFlex App Team.</p>
        </div>
        <div class="footer">
          <p>Copyright © 2024 EduFlex App.</p>
        </div>
      </div>
      </body>
    </html>
  `;
};

const generateResetPasswordTemplate = (otp, name) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <title>Reset password for your account</title>
    <style type="text/css">
      /* Set default font styles */
      body {
        font-family: Arial, sans-serif;
        font-size: 14px;
        line-height: 1.5;
        color: #333;
      }
      /* Center the content */
      .container {
        max-width: 600px;
        margin: 0 auto;
      }
      /* Add styles to the logo */
      .logo {
        display: block;
        margin: 20px auto;
        max-width: 200px;
        border-radius: 50%;
        overflow: hidden;
      }
      /* Add styles to the subject */
      .subject {
        font-size: 14px;
        font-weight: bold;
        margin-top: 30px;
        text-align: center;
      }
      /* Add styles to the message content */
      .message {
        margin-top: 20px;
      }
      /* Add styles to the footer */
      .footer {
        margin-top: 40px;
        font-size: 12px;
        color: #999;
        text-align: center;
      }
    </style>
  </head>
        <body>
        <div class="container">
          <img class="logo" src="https://i.postimg.cc/0QcM8JQs/Edu-Flex-Logo.png" alt="Logo" />
          <h3 class="subject">Reset Password</h3>
          <div class="message">
            <h4> Hello, ${name}</h4>
            <p>We have received a request to reset password for your account on EduFlex App.</p>
            <p>Your reset password code is: </p>
            <p style="color:#00bf63;font-size:25px;letter-spacing:2px;text-align:center"><b>${otp}</b></p>
            <p>Please enter this code on the reset password page to complete the process.</p>
            <p>Note that this code <b>expires in 10 minute(s)</b>.</p>
            <p>If you did not initiate this request, please disregard this email and contact us immediately at [eduflexteam@outlook.com].</p>
            <p>Thank you for using EduFlex.</p>
            <p>The EduFlex App Team.</p>
          </div>
          <div class="footer">
            <p>Copyright © 2024 EduFlex App.</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

const generateAcknowledgementTemplate = (name, email) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <title>Password Updated</title>
    <style type="text/css">
      /* Set default font styles */
      body {
        font-family: Arial, sans-serif;
        font-size: 14px;
        line-height: 1.5;
        color: #333;
      }
      /* Center the content */
      .container {
        max-width: 600px;
        margin: 0 auto;
      }
      /* Add styles to the logo */
      .logo {
        display: block;
        margin: 20px auto;
        max-width: 200px;
        border-radius: 50%;
        overflow: hidden;
      }
      /* Add styles to the subject */
      .subject {
        font-size: 14px;
        font-weight: bold;
        margin-top: 30px;
        text-align: center;
      }
      /* Add styles to the message content */
      .message {
        margin-top: 20px;
      }
      /* Add styles to the footer */
      .footer {
        margin-top: 40px;
        font-size: 12px;
        color: #999;
        text-align: center;
      }
    </style>
  </head>
      <body>
      <div class="container">
        <img class="logo" src="https://i.postimg.cc/0QcM8JQs/Edu-Flex-Logo.png" alt="Logo" />
        <h3 class="subject">Password Change Acknowledgement</h3>
        <div class="message">
          <h4> Hello, ${name}</h4>
          <p>This is an acknowledgement mail to let you know that you have successfully changed your password for this account: ${email}</p>
          <p>if you didn't do that please contact us immediately at [eduflexteam@outlook.com].</p>
          <p>Best regards,</p>
          <p>The EduFlex App Team.</p>
        </div>
        <div class="footer">
          <p>Copyright © 2024 EduFlex App.</p>
        </div>
      </div>
      </body>
    </html>
  `;
};

module.exports = {
  generateVerifyEmailTemplate,
  generateResetPasswordTemplate,
  generateAcknowledgementTemplate,
};
