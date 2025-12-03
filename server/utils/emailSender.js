import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// CREATE TRANSPORTER
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,      // smtp.gmail.com
  port: process.env.EMAIL_PORT,      // 465
  secure: process.env.EMAIL_SECURE === "true", 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// VERIFY TRANSPORTER
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ EMAIL TRANSPORTER ERROR:", error);
  } else {
    console.log("📨 Email transporter is ready to send messages");
  }
});

// SEND EMAIL
export const sendFormEmail = async ({ subject, html }) => {
  try {
    const info = await transporter.sendMail({
    from: `"Rahat Digital's" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject,
    html,
    });

    console.log("📨 Email Sent:", info.response);
  } catch (err) {
    console.error("❌ EMAIL SEND ERROR:", err);
  }
};
