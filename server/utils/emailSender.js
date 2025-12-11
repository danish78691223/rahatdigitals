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
        email: process.env.SENDER_EMAIL
      },
      to: [
        { email: process.env.RECEIVER_EMAIL }
      ],
      subject,
      htmlContent: html.replace(/undefined/g, "N/A"),
    };

    const response = await brevo.sendTransacEmail(emailData);

    // FIX: Log correct message Id
    const messageId =
      response?.messageId ||
      response?.["messageId"] ||
      response?.["message-id"] ||
      response?.body?.messageId ||
      response?.body?.["message-id"] ||
      "No message ID returned";

    console.log("📨 Email Sent Successfully:", messageId);

  } catch (err) {
    console.error("❌ BREVO EMAIL API ERROR:", err?.message || err);
  }
};
