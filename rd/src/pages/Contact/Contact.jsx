import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">

      {/* HERO */}
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We are here to help you with all digital services</p>
      </div>

      {/* MAIN SECTION */}
      <div className="contact-container">

        {/* LEFT INFO SECTION */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Have questions or need help with a digital service?
            Feel free to contact us anytime.
          </p>

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

        {/* CONTACT FORM */}
        <form className="contact-form">
          <h2>Send Us a Message</h2>

          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Phone Number" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
