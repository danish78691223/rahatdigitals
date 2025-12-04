import React from "react";
import "./PanCard.css";
import PanCardForm from "../../forms/PanCardForm";

const PanCard = () => {
  return (
    <div className="service-page">
      <div className="service-header">
        <h1>PAN Card Apply / Update</h1>
        <p>Submit your details to apply or update your PAN Card.</p>
      </div>

      <PanCardForm />
    </div>
  );
};

export default PanCard;
