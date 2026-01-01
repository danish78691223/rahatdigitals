import React from "react";
import "./Services.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaIdCard,
  FaPassport,
  FaVoteYea,
  FaBriefcase,
  FaFingerprint,
  FaFileAlt,
} from "react-icons/fa";

const Services = () => {
  const navigate = useNavigate();

  const servicesList = [
    {
      title: "PAN Card Apply / Update",
      desc: "Apply for new PAN or update existing details.",
      icon: <FaIdCard />,
      color: "#0066ff",
      link: "/apply-pan-card",
    },
    {
      title: "Passport Services",
      desc: "New passport, renewal & correction assistance.",
      icon: <FaPassport />,
      color: "#00a86b",
      link: "/passport-application",
    },
    {
      title: "Voter ID Services",
      desc: "New Voter ID registration or updates.",
      icon: <FaVoteYea />,
      color: "#ff9800",
      link: "/voter-id",
    },
    {
      title: "Job Application Forms",
      desc: "Government & private job form support.",
      icon: <FaBriefcase />,
      color: "#8e44ad",
      link: "/job-application",
    },
    {
      title: "Aadhaar Services",
      desc: "Aadhaar update, correction & download help.",
      icon: <FaFingerprint />,
      color: "#e91e63",
      link: "/aadhar-services",
    },
    {
      title: "Govt Certificates",
      desc: "Income, Caste, Domicile & other certificates.",
      icon: <FaFileAlt />,
      color: "#0097a7",
      link: "/government-certificates",
    },
  ];

  return (
    <div className="services-page">

      {/* HEADER */}
      <motion.div
        className="service-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Our Services</h1>
        <p>
          Trusted CSC & Digital Seva solutions — fast, secure and reliable.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="services-grid">
        {servicesList.map((service, index) => (
          <motion.div
            key={index}
            className="service-card-modern"
            style={{ "--accent": service.color }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
            onClick={() => navigate(service.link)}
          >
            <div className="icon-wrap">{service.icon}</div>

            <h3>{service.title}</h3>
            <p>{service.desc}</p>

            <span className="cta-text">Explore Service →</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
