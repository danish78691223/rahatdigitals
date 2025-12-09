import React, { useState } from "react";
import "./Aadhar.css";

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
      <div className="service-header">
        <h1>Aadhar Services Inquiry</h1>

        <p>
          Update Aadhaar details, make corrections or download Aadhaar card.
        </p>
        <p>
          Aadhaar is a 12-digit unique identification number issued by UIDAI,
          widely used for KYC, bank account opening, SIM verification, and
          government schemes.
        </p>
        <p>
          Aadhaar is proof of residency, not citizenship. It includes demographic
          and biometric data and can be updated when needed.
        </p>
        <p>
          Linking Aadhaar with PAN, bank accounts, and mobile numbers is often
          mandatory. Keep your Aadhaar-linked mobile number updated for OTP
          services.
        </p>

        <h3>For More Details Fill The Form Below</h3>
        <h2>We Will Contact You Soon</h2>
      </div>

      {/* ⭐ Contact Form Added Here */}
      <div className="aadhar-form-box">
        <h2>Contact Us for Aadhaar Services</h2>

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

          {success && (
            <p style={{ marginTop: "10px", color: "green" }}>{success}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Aadhar;
