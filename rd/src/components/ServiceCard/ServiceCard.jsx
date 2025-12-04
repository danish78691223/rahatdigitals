import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ title, desc, link }) => {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{desc}</p>
      <button onClick={() => (window.location.href = link)}>Learn More</button>
    </div>
  );
};

export default ServiceCard;
