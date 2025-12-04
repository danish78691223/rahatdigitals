import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">

      {/* HERO BANNER */}
      <div className="about-hero">
        <h1>About Rahat Digital's</h1>
        <p>Your Trusted CSC & Digital Service Center</p>
      </div>

      {/* WHO WE ARE */}
      <section className="about-section">
        <div className="about-left">
          <h2>Who We Are</h2>
          <p>
            Rahat Digital‘s is a trusted CSC (Common Service Center) providing
            fast, secure and reliable government & digital services.
            From PAN card to passport, voter ID to job applications,
            we aim to make every digital process simpler and more accessible
            for everyone.
          </p>
          <p>
            With years of experience and a commitment to customer satisfaction,
            we serve individuals with accuracy, transparency, and trust.
          </p>
        </div>

        <div className="about-right">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
            alt="Rahat Digitals"
          />
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mission-vision">
        <div className="mv-box">
          <h3>🎯 Our Mission</h3>
          <p>
            To provide seamless digital and e-governance services
            with transparency, trust and efficiency to every citizen.
          </p>
        </div>

        <div className="mv-box">
          <h3>👁️ Our Vision</h3>
          <p>
            To become the most reliable and customer-friendly digital service
            provider in the region by simplifying government processes.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-choose">
        <h2>Why Choose Rahat Digital's?</h2>

        <div className="why-grid">
          <div className="why-card">
            <span>⚡</span>
            <h3>Fast Service</h3>
            <p>Quick processing and instant updates without delays.</p>
          </div>

          <div className="why-card">
            <span>🔒</span>
            <h3>Safe & Secure</h3>
            <p>Your data is handled with full privacy and security.</p>
          </div>

          <div className="why-card">
            <span>📄</span>
            <h3>All Services at One Place</h3>
            <p>PAN, Passport, Voter ID, Applications & more.</p>
          </div>

          <div className="why-card">
            <span>🤝</span>
            <h3>Trusted Support</h3>
            <p>We believe in transparency and customer satisfaction.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
