const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_USER,
    pass: process.env.BREVO_PASS,
  },
});

const sendEmail = async (email, otp) => {
  await transporter.sendMail({
    from: process.env.BREVO_USER,
    to: email,
    subject: "OTP Verification",
    html: `
      <h2>MERN Authentication</h2>
      <p>Your OTP is:</p>
      <h1>${otp}</h1>
      <p>This OTP is valid for 5 minutes.</p>
    `,
  });
};

module.exports = sendEmail;