import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Top Section */}
      <div className="footer-content">

        {/* Column 1 - Brand */}
        <div className="footer-col">
          <h2 className="footer-logo">RAHAT DIGITAL'S</h2>
          <p>Your trusted CSC Service Center for all digital and e-governance services.</p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Services */}
        <div className="footer-col">
          <h3>Our Services</h3>
          <ul>
            <li>PAN Card Apply / Update</li>
            <li>Passport Services</li>
            <li>Voter ID Registration</li>
            <li>Job Application Forms</li>
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p>📌 Address: Rahat Digital's Service Center</p>
          <p>📞 Phone: +91 9511749510</p>
          <p>📧 Email: rahatdigitals@gmail.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div 
        className="footer-bottom clickable-footer"
        onClick={() => (window.location.href = "/admin/login")}
      >
        <p>
          © {new Date().getFullYear()} Rahat Digital's — All Rights Reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
