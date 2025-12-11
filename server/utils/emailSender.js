import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const WEB3_URL = "https://api.web3forms.com/submit";

/**
 * Sends email through Web3Forms API
 * @param {string} subject
 * @param {object} fields
 */
const sendFormEmail = async (subject, fields) => {
  try {
    const formData = {
      access_key: process.env.WEB3FORMS_ACCESS_KEY, // REQUIRED
      subject,
      ...fields,
    };

    const response = await axios.post(WEB3_URL, formData);

    console.log("📨 Email API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Email Sending Error (Web3Forms):", error.response?.data || error);
  }
};

export default sendFormEmail;
