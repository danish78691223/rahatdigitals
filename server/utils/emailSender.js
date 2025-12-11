import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendFormEmail = async ({ subject, html }) => {
  try {
    const response = await resend.emails.send({
      from: "Rahat Digitals <onboarding@resend.dev>", 
      to: process.env.RECEIVER_EMAIL, 
      subject,
      html,
    });

    console.log("Email sent:", response);
  } catch (error) {
    console.error("Email error:", error);
  }
};
