const nodemailer = require("nodemailer");
const { htmlToText } = require("html-to-text");
const ejs = require("ejs");

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.userName.split(" ")[0];
    this.url = url;
    this.from = `Adit Bhai <apagla988@gmail.com>`;
  }
  newTransport() {
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async send(template, subject) {
    const html = await ejs.renderFile(
      `${__dirname}/../views/email/${template}.ejs`,
      {
        firstName: this.firstName,
        subject,
      }
    );

    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText(html),
    };
    this.newTransport().sendMail(mailOptions);
  }
};
