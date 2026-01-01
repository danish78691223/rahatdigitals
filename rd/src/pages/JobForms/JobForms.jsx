import React from "react";
import "./JobForms.css";
import JobApplyForm from "../../forms/JobApplyForm";
import { motion } from "framer-motion";
import jobImg from "../../assets/images/job.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const JobForms = () => {
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
        <h1>Job Application Forms & Inquiry</h1>
        <p className="subtitle">
          Apply for Government or Private job applications with guidance.
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
            For most government and organized-sector private jobs, documents
            such as Aadhaar, PAN, educational certificates, and other eligibility
            proofs are required during application or joining.
          </p>

          <p>
            Government job recruitment (UPSC, SSC, Railways, State PSC, etc.)
            follows strict rules regarding age limits, qualifications,
            reservation, and multi-stage selection processes.
          </p>

          <p>
            Online portals are commonly used for registration, document upload,
            fee payment, and application tracking. Using verified and official
            portals is essential to avoid job-related scams.
          </p>

          <div className="service-points">
            <span>✔ Government Job Forms</span>
            <span>✔ Private Job Applications</span>
            <span>✔ Document Verification</span>
            <span>✔ Online Form Assistance</span>
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
          <img src={jobImg} alt="Job Application Illustration" />
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

        <JobApplyForm />
      </motion.div>

    </div>
  );
};

export default JobForms;
