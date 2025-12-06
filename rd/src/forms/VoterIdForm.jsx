import React, { useState } from "react";
import { validateForm } from "./FormValidation";
import "./FormStyles.css";

const VoterIdForm = () => {
  const [fields, setFields] = useState({
    fullName: "",
    dob: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const inputHandler = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const validation = validateForm(fields);

    if (Object.keys(validation).length !== 0) {
      setErrors(validation);
      return;
    }

    setErrors({});
    setLoading(true);

    const response = await fetch(
  "https://rahatdigitals-backend.onrender.com/api/forms/voter-id",
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  }
);


    const data = await response.json();
    setLoading(false);

    if (data.success) {
      setSubmitted(true);
      alert("Voter ID form submitted successfully!");
    } else {
      alert("Error: " + data.error);
    }
  };

  return (
    <form className="form-box" onSubmit={submitHandler}>
      <h2>Voter ID Registration</h2>

      <input name="fullName" placeholder="Full Name" onChange={inputHandler} />
      <span className="error">{errors.fullName}</span>

      <input type="date" name="dob" onChange={inputHandler} />
      <span className="error">{errors.dob}</span>

      <input name="phone" placeholder="Phone Number" onChange={inputHandler} />
      <span className="error">{errors.phone}</span>

      <textarea name="address" placeholder="Full Address" onChange={inputHandler} />
      <span className="error">{errors.address}</span>

      <button type="submit">{loading ? "Submitting..." : "Submit"}</button>

      {submitted && <p className="success-text">Form submitted successfully!</p>}
    </form>
  );
};

export default VoterIdForm;
