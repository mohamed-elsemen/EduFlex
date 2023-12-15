require('dotenv').config();

const nodemailerConfig = {
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'veda44@ethereal.email',
      pass: 'SQbtwdACsPKJAs4M3S'
  }
  
  // for production we use outlook

  // host: 'smtp-mail.outlook.com',
  // port: 587,
  // auth: {
  //   user: process.env.MY_MAIL,
  //   pass: process.env.MAIL_PW,
  // },
};

module.exports = nodemailerConfig;
