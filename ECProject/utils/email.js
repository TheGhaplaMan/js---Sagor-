const nodemailer = require("nodemailer");
const { htmlToText } = require("html-to-text");
const ejs = require("ejs");

module.exports = class Email {
  constructor(email) {
    this.to = email;
    // this.from = `Election Commission <electioncommbd@gmail.com>`;
  }
  newTransport() {
    return nodemailer.createTransport({
      host: "smtp-mail.outlook.com", // hostname
      secureConnection: false, // TLS requires secureConnection to be false
      port: 587, // port for secure SMTP
      tls: {
        ciphers: "SSLv3",
      },
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async send(OTP, subject) {
    const html = `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${subject}</title>
  </head>
  <body>
    <p>Dear Voter,</p>
    <p>Your OTP is : ${OTP}</p>
  </body>
</html>`;

    const mailOptions = {
      // from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText(html),
    };
    this.newTransport().sendMail(mailOptions);
  }
};
