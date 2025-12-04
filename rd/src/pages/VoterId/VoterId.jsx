import React from "react";
import "./VoterId.css";
import VoterIdForm from "../../forms/VoterIdForm";

const VoterId = () => {
  return (
    <div className="service-page">
      <div className="service-header">
        <h1>Voter ID Registration</h1>
        <p>Fill the form to create or update your Voter ID.</p>
      </div>

      <VoterIdForm />
    </div>
  );
};

export default VoterId;
