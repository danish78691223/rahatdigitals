import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.placeholder.toLowerCase().replace(" ", "")]: e.target.value });
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
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone,
            message: form.message,
          }),
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
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We are here to help you with all digital services</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Have questions or need help with a digital service? Feel free to contact us anytime.</p>

          <div className="info-item">
            <span>📍</span>
            <p>Rahat Digital's, Paranda, Maharashtra</p>
          </div>

          <div className="info-item">
            <span>📞</span>
            <p>+91 9511749510</p>
          </div>

          <div className="info-item">
            <span>📧</span>
            <p>rahatdigitals@gmail.com</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>

          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">{loading ? "Sending..." : "Send Message"}</button>

          {success && <p style={{ marginTop: "10px", color: "green" }}>{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
