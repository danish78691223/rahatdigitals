import React from "react";
import "./PanCard.css";
import PanCardForm from "../../forms/PanCardForm";
import { motion } from "framer-motion";
import panCardImg from "../../assets/images/pancard.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const PanCard = () => {
  return (
    <div className="service-page">
      
      {/* HEADER SECTION */}
      <motion.div
        className="service-header"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.7 }}
      >
        <h1>PAN Card Apply / Update</h1>
        <p className="subtitle">
          Submit your details to apply or update your PAN Card.
        </p>
      </motion.div>

      {/* INFO + IMAGE SECTION */}
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
            PAN (Permanent Account Number) is a 10-character alphanumeric number
            issued by the Income Tax Department of India. It acts as a unique tax
            identity for individuals and entities.
          </p>

          <p>
            PAN is mandatory for income tax filing, opening bank accounts,
            investing in mutual funds, trading securities, and other high-value
            financial transactions.
          </p>

          <p>
            Holding more than one PAN is illegal. PAN can be updated or corrected
            online, and linking PAN with Aadhaar is compulsory for most taxpayers.
          </p>

          <div className="service-points">
            <span>✔ Apply New PAN</span>
            <span>✔ PAN Correction</span>
            <span>✔ e-PAN Available</span>
            <span>✔ Aadhaar Linking</span>
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
          <img src={panCardImg} alt="PAN Card Illustration" />
        </motion.div>

      </div>

      {/* FORM SECTION */}
      <motion.div
        className="form-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3>Fill the Form for More Details</h3>
        <p className="form-note">We will contact you soon.</p>

        <PanCardForm />
      </motion.div>

    </div>
  );
};

export default PanCard;
