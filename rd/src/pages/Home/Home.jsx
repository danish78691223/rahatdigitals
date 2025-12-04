import React from "react";
import "./Home.css";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const Home = () => {
  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to Rahat Digital's</h1>
          <p>
            Your trusted CSC Service Center for PAN Card, Passport, Voter ID, Job Applications and more.
          </p>

          <a href="/services" className="hero-btn">Explore Services</a>
        </div>
      </header>

      {/* SERVICES SECTION */}
      <section className="services">
        <h2>Our Main Services</h2>

        <div className="service-grid">

          <ServiceCard 
            title="PAN Card Apply / Update"
            desc="Apply or update your PAN Card quickly."
            link="/apply-pan-card"
          />

          <ServiceCard 
            title="Passport Services"
            desc="Passport forms, updates and applications."
            link="/passport-services"
          />

          <ServiceCard 
            title="Voter ID Registration"
            desc="Create or update your Voter ID easily."
            link="/voter-id"
          />

          <ServiceCard 
            title="Job Application Forms"
            desc="Government and private job form filling."
            link="/job-application"
          />

        </div>
      </section>

    </div>
  );
};

export default Home;
