import React from "react";
import "./Home.css";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { motion } from "framer-motion";
import { FaIdCard, FaPassport, FaVoteYea, FaBriefcase } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const servicesData = [
  {
    title: "PAN Card Apply / Update",
    desc: "Apply or update your PAN Card quickly.",
    link: "/apply-pan-card",
    icon: <FaIdCard />,
    color: "#0066ff",
  },
  {
    title: "Passport Services",
    desc: "Passport forms, updates and applications.",
    link: "/passport-application",
    icon: <FaPassport />,
    color: "#00a86b",
  },
  {
    title: "Voter ID Registration",
    desc: "Create or update your Voter ID easily.",
    link: "/voter-id",
    icon: <FaVoteYea />,
    color: "#ff9800",
  },
  {
    title: "Job Application Forms",
    desc: "Government and private job form filling.",
    link: "/job-application",
    icon: <FaBriefcase />,
    color: "#8e44ad",
  },
];

const Home = () => {
  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <header className="hero">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <h1>Welcome to Rahat Digital's</h1>
          <p>
            Your trusted CSC Service Center for PAN Card, Passport, Voter ID, Job
            Applications and more.
          </p>

          <motion.a
            href="/services"
            className="hero-btn"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Services
          </motion.a>
        </motion.div>
      </header>

      {/* SERVICES SECTION */}
      <section className="services">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Main Services
        </motion.h2>

        <div className="service-grid">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
