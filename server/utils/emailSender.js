// SEND EMAIL USING WEB3FORMS (no SMTP needed)
const sendFormEmail = async (fields) => {
  try {
    const formData = {
      access_key: process.env.WEB3FORMS_KEY, 
      subject: "New Form Submission - Rahat Digital's",
      from_name: "Rahat Digital's Website",
      ...fields,
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    console.log("Email sent:", result);

  } catch (err) {
    console.error("❌ Web3Forms Email Error:", err);
  }
};
