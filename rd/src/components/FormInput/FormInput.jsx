import React from "react";
import "./FormInput.css";

const FormInput = ({ label, error, ...inputProps }) => {
  return (
    <div className="form-input-wrapper">
      <label>{label}</label>
      <input {...inputProps} className={error ? "input-error" : ""} />
      {error && <p className="input-error-text">{error}</p>}
    </div>
  );
};

export default FormInput;
