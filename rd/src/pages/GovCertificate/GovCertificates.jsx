import React from "react";
import "./GovCertificates.css";

const GovCertificates = () => {
  return (
    <div className="service-page">
      <div className="service-header">
        <h1>Government Certificate Services</h1>
        <p>Apply for various certificates like Income, Caste, Domicile & more.</p>
      </div>

      <div className="cert-box">
        <h2>Available Certificates</h2>

        <ul>
          <li>Income Certificate</li>
          <li>Caste Certificate</li>
          <li>Domicile Certificate</li>
          <li>Non-Creamy Layer Certificate</li>
          <li>Residence Certificate</li>
        </ul>

        <button className="cert-btn">Apply Now</button>
      </div>
    </div>
  );
};

export default GovCertificates;
