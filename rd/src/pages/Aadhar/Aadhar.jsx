import React, { useState } from "react";
import "./Aadhar.css";
import { motion } from "framer-motion";
import aadharImg from "../../assets/images/aadhar.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Aadhar = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const res = await fetch(
        "https://rahatdigitals-backend.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();
      setLoading(false);

      if (data.success) {
        setSuccess("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setSuccess("Failed to send message.");
      }
    } catch (error) {
      console.error("❌ Contact Error:", error);
      setSuccess("Error sending message.");
      setLoading(false);
    }
  };

  return (
    <div className="service-page">

      {/* HEADER */}
      <motion.div
        className="service-header"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.7 }}
      >
        <h1>Aadhaar Services</h1>
        <p className="subtitle">
          Update Aadhaar details, make corrections or download Aadhaar card.
        </p>
      </motion.div>

      {/* INFO + IMAGE */}
      <div className="service-info">

        {/* TEXT */}
        <motion.div
          className="service-text"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            Aadhaar is a 12-digit unique identification number issued by UIDAI
            and is widely used for KYC, banking, SIM verification, and accessing
            government services.
          </p>

          <p>
            Aadhaar acts as proof of residency, not citizenship. It contains
            demographic and biometric information that can be updated when
            required.
          </p>

          <p>
            Linking Aadhaar with PAN, bank accounts, and mobile numbers is often
            mandatory. Keeping your Aadhaar-linked mobile number active is
            important for OTP-based services.
          </p>

          <div className="service-points">
            <span>✔ Aadhaar Update</span>
            <span>✔ Name / Address Correction</span>
            <span>✔ Mobile Linking</span>
            <span>✔ e-Aadhaar Download</span>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="service-image"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={aadharImg} alt="Aadhaar Services Illustration" />
        </motion.div>

      </div>

      {/* FORM */}
      <motion.div
        className="form-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3>For More Details Fill the Form Below</h3>
        <p className="form-note">We will contact you soon.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && <p className="success-msg">{success}</p>}
        </form>
      </motion.div>

    </div>
  );
};

export default Aadhar;
