import React from "react";
import "./Aadhar.css";

const Aadhar = () => {
  return (
    <div className="service-page">
      <div className="service-header">
        <h1>Aadhar Services</h1>
        <p>Update Aadhaar details, make corrections or download Aadhaar card.</p>
      </div>

      <div className="aadhar-box">
        <h2>Available Aadhar Services</h2>
        <ul>
          <li>Update Address</li>
          <li>Correct Name / DOB / Gender</li>
          <li>Download e-Aadhar</li>
          <li>Mobile Number Update</li>
          <li>Biometric Update</li>
        </ul>

        <button className="aadhar-btn">Start Service</button>
      </div>
    </div>
  );
};

export default Aadhar;
