import React from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = ({ title, desc, link, icon, color }) => {
  return (
    <div className="service-card" style={{ "--accent": color }}>
      <div className="service-icon">{icon}</div>

      <h3>{title}</h3>
      <p>{desc}</p>

      <Link to={link} className="service-btn">
        Learn More →
      </Link>
    </div>
  );
};

export default ServiceCard;
