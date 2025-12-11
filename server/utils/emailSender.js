import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const sendFormEmail = async ({ subject, html }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,  // Your Gmail
        pass: process.env.GMAIL_APP_PASS, // App Password
      },
    });

    const mailOptions = {
      from: `"Rahat Digitals" <${process.env.GMAIL_USER}>`,
      to: "rahatdigitals@gmail.com",  // Receiver
      subject,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("📧 Email Sent:", info.response);
  } catch (err) {
    console.error("❌ Email Sending Error:", err);
  }
};
