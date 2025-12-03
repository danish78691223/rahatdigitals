import { sendFormEmail } from "../utils/emailSender.js";
import FormSubmission from "../models/FormSubmission.js";

const buildHtml = (title, fields) => {
  return `
    <h2>${title}</h2>
    <p>You have received a new submission from Rahat Digital's website.</p>
    <table border="1" cellpadding="6" cellspacing="0">
      ${Object.entries(fields)
        .map(
          ([key, value]) =>
            `<tr><td><b>${key}</b></td><td>${value || ""}</td></tr>`
        )
        .join("")}
    </table>
  `;
};

export const submitPanCardForm = async (req, res) => {
  console.log("📥 PAN CARD FORM RECEIVED:", req.body);

  try {
    // Save to Mongo
    await FormSubmission.create({
      type: "PAN",
      data: req.body,
    });

    const html = buildHtml("PAN Card Application", req.body);
    await sendFormEmail({ subject: "New PAN Card Application", html });

    res.json({ success: true, message: "PAN card form submitted." });
  } catch (err) {
    console.error("❌ PAN Controller Error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};

export const submitVoterIdForm = async (req, res) => {
  console.log("📥 VOTER ID FORM RECEIVED:", req.body);

  try {
    await FormSubmission.create({
      type: "VOTER",
      data: req.body,
    });

    const html = buildHtml("Voter ID Application", req.body);
    await sendFormEmail({ subject: "New Voter ID Application", html });

    res.json({ success: true });
  } catch (err) {
    console.error("❌ Voter Controller Error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};

export const submitJobForm = async (req, res) => {
  console.log("📥 JOB FORM RECEIVED:", req.body);

  try {
    await FormSubmission.create({
      type: "JOB",
      data: req.body,
    });

    const html = buildHtml("Job Application Form", req.body);
    await sendFormEmail({ subject: "New Job Application", html });

    res.json({ success: true });
  } catch (err) {
    console.error("❌ Job Controller Error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};

export const submitPassportForm = async (req, res) => {
  console.log("📥 PASSPORT FORM RECEIVED:", req.body);

  try {
    await FormSubmission.create({
      type: "PASSPORT",
      data: req.body,
    });

    const html = buildHtml("Passport Application Form", req.body);
    await sendFormEmail({ subject: "New Passport Application", html });

    res.json({ success: true });
  } catch (err) {
    console.error("❌ Passport Controller Error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};
