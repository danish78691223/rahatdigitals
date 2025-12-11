import sendFormEmail from "../utils/emailSender.js";
import ContactMessage from "../models/ContactMessage.js";

export const sendContactMessage = async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    // Save to MongoDB
    await ContactMessage.create({ name, email, phone, message });

    // Send email
    const html = `
      <h2>New Contact Message</h2>
      <table border="1" cellpadding="6">
        <tr><td><b>Name</b></td><td>${name}</td></tr>
        <tr><td><b>Email</b></td><td>${email}</td></tr>
        <tr><td><b>Phone</b></td><td>${phone}</td></tr>
        <tr><td><b>Message</b></td><td>${message}</td></tr>
      </table>
    `;

    await sendFormEmail({
      subject: "New Contact Form Message",
      html,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("❌ Contact Form Error:", err);
    res.status(500).json({ success: false });
  }
};
