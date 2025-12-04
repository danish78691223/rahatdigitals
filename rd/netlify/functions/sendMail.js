import nodemailer from "nodemailer";

export async function handler(event, context) {
  try {
    const body = JSON.parse(event.body);

    const {
      formType = "New Form Submission",
      fullName,
      email,
      phone,
      dob,
      fatherName,
      qualification,
      jobType,
      address,
    } = body;

    // 🔐 Create email transporter
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.sendinblue.com",
      port: 587,
      auth: {
        user: process.env.BREVO_USER, // your sending email
        pass: process.env.BREVO_KEY,  // your brevo smtp key
      },
    });

    // ---------------------------
    // 📌 Create HTML email template
    // ---------------------------

    const htmlTemplate = `
      <div style="font-family: Arial; padding: 15px; border: 1px solid #ddd; border-radius: 10px;">
        <h2 style="color:#0048ff;">📩 ${formType}</h2>

        ${fullName ? `<p><b>Full Name:</b> ${fullName}</p>` : ""}
        ${email ? `<p><b>Email:</b> ${email}</p>` : ""}
        ${phone ? `<p><b>Phone:</b> ${phone}</p>` : ""}
        ${dob ? `<p><b>Date of Birth:</b> ${dob}</p>` : ""}
        ${fatherName ? `<p><b>Father's Name:</b> ${fatherName}</p>` : ""}
        ${qualification ? `<p><b>Qualification:</b> ${qualification}</p>` : ""}
        ${jobType ? `<p><b>Job Type:</b> ${jobType}</p>` : ""}
        ${address ? `<p><b>Address:</b> ${address}</p>` : ""}

        <br/>
        <p style="font-size:14px;color:#666;">Submitted on Rahat Digitals Web App</p>
      </div>
    `;

    // -----------------------------
    // 📤 Send email to YOU
    // -----------------------------

    await transporter.sendMail({
      from: `"Rahat Digitals Forms" <${process.env.BREVO_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `📝 New Submission: ${formType}`,
      html: htmlTemplate,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Email sent successfully!",
      }),
    };

  } catch (err) {
    console.log("❌ Email error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: err.message,
      }),
    };
  }
}
