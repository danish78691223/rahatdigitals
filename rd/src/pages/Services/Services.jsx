import React from "react";
import "./Services.css";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const servicesList = [
    {
      title: "PAN Card Apply / Update Inquiry",
      desc: "Apply for a new PAN card or update existing information.",
      icon: "📇",
      link: "/apply-pan-card",
    },
    {
      title: "Passport Services Inquiry",
      desc: "Passport application, renewal, and correction support.",
      icon: "🛂",
      link: "/passport-application",
    },
    {
      title: "Voter ID Apply / Update Inquiry",
      desc: "Create new Voter ID or update address/details.",
      icon: "🗳️",
      link: "/voter-id",
    },
    {
      title: "Job Application Forms Inquiry",
      desc: "Government and private job form filling assistance.",
      icon: "📄",
      link: "/job-application",
    },
    {
      title: "Aadhar Related Services Inquiry",
      desc: "Support for Aadhar updates, corrections, and downloads.",
      icon: "🆔",
      link: "/aadhar-services",
    },
    {
      title: "Government Certificates Inquiry",
      desc: "Income, Caste, Domicile and other certificate form services.",
      icon: "📑",
      link: "/government-certificates",
    },
  ];

  return (
    <div className="services-page">

      {/* Header */}
      <div className="service-header">
        <h1>Our Services</h1>
        <p>We provide a wide range of CSC and Digital Seva services.</p>
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        {servicesList.map((service, index) => (
          <div className="service-box" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>

            <button
              className="service-btn"
              onClick={() => navigate(service.link)}
            >
              Learn More
            </button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
