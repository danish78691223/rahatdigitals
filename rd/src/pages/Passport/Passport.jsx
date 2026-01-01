import React from "react";
import "./Passport.css";
import PassportForm from "../../forms/PassportForm";
import { motion } from "framer-motion";
import passportImg from "../../assets/images/passport.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Passport = () => {
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
        <h1>Passport Apply / New / Renewal</h1>
        <p className="subtitle">
          Apply for a new passport or update / renew your existing passport.
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
            An Indian passport is an official travel document issued by the
            Government of India that certifies the identity and nationality of an
            Indian citizen for international travel.
          </p>

          <p>
            Passports are issued by the Ministry of External Affairs through the
            Passport Seva system. The application process includes online form
            submission, fee payment, appointment at a PSK, and police
            verification in most cases.
          </p>

          <p>
            Passports generally have a validity of 10 years for adults and 5
            years for minors. Timely renewal is essential to avoid travel
            restrictions and visa issues.
          </p>

          <div className="service-points">
            <span>✔ New Passport</span>
            <span>✔ Passport Renewal</span>
            <span>✔ Reissue / Update</span>
            <span>✔ Tatkal Guidance</span>
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
          <img src={passportImg} alt="Indian Passport Illustration" />
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

        <PassportForm />
      </motion.div>

    </div>
  );
};

export default Passport;
