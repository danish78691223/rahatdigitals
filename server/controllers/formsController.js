import sendFormEmail from "../utils/emailSender.js";
import FormSubmission from "../models/FormSubmission.js";

/* UTILITY: Build HTML Template for Emails */
const buildHtml = (title, fields) => {
  return `
    <h2>${title}</h2>
    <p>You have received a new submission from Rahat Digital's website.</p>
    <table border="1" cellpadding="6" cellspacing="0">
      ${Object.entries(fields)
        .map(([key, value]) => `<tr><td><b>${key}</b></td><td>${value || ""}</td></tr>`)
        .join("")}
    </table>
  `;
};

/* -------------------- PAN CARD -------------------- */
export const submitPanCardForm = async (req, res) => {
  console.log("📥 PAN CARD FORM RECEIVED:", req.body);

  try {
    await FormSubmission.create({ type: "PAN", data: req.body });

    const html = buildHtml("PAN Card Application", req.body);

    await sendFormEmail("New PAN Card Application", {
      html,
      ...req.body,
    });

    res.json({ success: true, message: "PAN form submitted." });
  } catch (err) {
    console.error("❌ PAN Controller Error:", err);
    res.status(500).json({ success: false });
  }
};

/* -------------------- VOTER ID -------------------- */
export const submitVoterIdForm = async (req, res) => {
  console.log("📥 VOTER ID FORM RECEIVED:", req.body);

  try {
    await FormSubmission.create({ type: "VOTER", data: req.body });

    const html = buildHtml("Voter ID Application", req.body);

    await sendFormEmail("New Voter ID Application", {
      html,
      ...req.body,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("❌ Voter Controller Error:", err);
    res.status(500).json({ success: false });
  }
};

/* -------------------- JOB FORM -------------------- */
export const submitJobForm = async (req, res) => {
  console.log("📥 JOB FORM RECEIVED:", req.body);

  try {
    await FormSubmission.create({ type: "JOB", data: req.body });

    const html = buildHtml("Job Application Form", req.body);

    await sendFormEmail("New Job Application", {
      html,
      ...req.body,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("❌ Job Controller Error:", err);
    res.status(500).json({ success: false });
  }
};

/* -------------------- PASSPORT -------------------- */
export const submitPassportForm = async (req, res) => {
  console.log("📥 PASSPORT FORM RECEIVED:", req.body);

  try {
    await FormSubmission.create({ type: "PASSPORT", data: req.body });

    const html = buildHtml("Passport Application Form", req.body);

    await sendFormEmail("New Passport Application", {
      html,
      ...req.body,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("❌ Passport Controller Error:", err);
    res.status(500).json({ success: false });
  }
};

/* -------------------- CONTACT FORM -------------------- */
export const submitContactForm = async (req, res) => {
  console.log("📥 CONTACT FORM RECEIVED:", req.body);

  try {
    await FormSubmission.create({ type: "CONTACT", data: req.body });

    const html = buildHtml("Contact Inquiry Message", req.body);

    await sendFormEmail("New Contact Inquiry", {
      html,
      ...req.body,
    });

    res.json({ success: true, message: "Message sent." });
  } catch (err) {
    console.error("❌ Contact Controller Error:", err);
    res.status(500).json({ success: false });
  }
};
