import React from "react";
import "./Passport.css";
import PassportForm from "../../forms/PassportForm";

const Passport = () => {
  return (
    <div className="service-page">
      <div className="service-header">
        <h1>Passport Application Services</h1>
        <p>Apply for a new passport or update/renew your existing passport.</p>
      </div>

      <PassportForm />
    </div>
  );
};

export default Passport;
