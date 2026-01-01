import React from "react";
import "./VoterId.css";
import VoterIdForm from "../../forms/VoterIdForm";
import { motion } from "framer-motion";
import voterImg from "../../assets/images/voterid.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const VoterId = () => {
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
        <h1>Voter ID Registration / Update</h1>
        <p className="subtitle">
          Fill the form to create or update your Voter ID.
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
            The Indian Voter ID card, officially known as the Elector’s Photo
            Identity Card (EPIC), is issued by the Election Commission of India
            to citizens aged 18 years and above.
          </p>

          <p>
            It is primarily used to verify identity at polling stations during
            elections and is also widely accepted as proof of identity, age,
            and address for various services.
          </p>

          <p>
            Voter details can be updated for address changes, name corrections,
            or constituency transfers to ensure accurate electoral records.
          </p>

          <div className="service-points">
            <span>✔ New Voter ID</span>
            <span>✔ Address Update</span>
            <span>✔ Name Correction</span>
            <span>✔ Electoral Roll Check</span>
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
          <img src={voterImg} alt="Voter ID Illustration" />
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
        <h3>Fill the Form for More Details</h3>
        <p className="form-note">We will contact you soon.</p>

        <VoterIdForm />
      </motion.div>

    </div>
  );
};

export default VoterId;
