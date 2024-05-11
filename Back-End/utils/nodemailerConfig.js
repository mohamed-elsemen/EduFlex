require('dotenv').config();

const nodemailerConfig = {
  // host: 'smtp.ethereal.email',
  // port: 587,
  // auth: {
  //   user: 'lizzie.beahan55@ethereal.email',
  //   pass: 'zuY4JkVe8Sx4gfjCK9'
  // }
  
  // for production we use outlook

  host: 'smtp-mail.outlook.com',
  port: 587,
  auth: {
    user: process.env.MY_MAIL,
    pass: process.env.MAIL_PW,
  },
};

module.exports = nodemailerConfig;
