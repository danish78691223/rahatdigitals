import Brevo from "@getbrevo/brevo";
import dotenv from "dotenv";

dotenv.config();

// INIT BREVO CLIENT
const brevo = new Brevo.TransactionalEmailsApi();
brevo.setApiKey(
  Brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY
);

// SEND EMAIL USING BREVO API
export const sendFormEmail = async ({ subject, html }) => {
  try {
    const emailData = {
      sender: { 
        name: "Rahat Digital's", 
        email: process.env.SENDER_EMAIL   // Sender identity (your verified Brevo email)
      },
      to: [
        { 
          email: process.env.RECEIVER_EMAIL // Receiver email for notifications
        }
      ],
      subject,
      htmlContent: html.replace(/undefined/g, "N/A"), // ⭐ Prevent undefined in emails
    };

    const response = await brevo.sendTransacEmail(emailData);

    console.log("📨 Email Sent Successfully:", response?.messageId || "No messageId returned");
  } catch (err) {
    console.error("❌ BREVO EMAIL API ERROR:", err?.message || err);
  }
};
