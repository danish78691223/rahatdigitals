import React, { useState } from "react";
import { validateForm } from "./FormValidation";
import "./FormStyles.css";

const PassportForm = () => {
  const [fields, setFields] = useState({
    fullName: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInput = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validation = validateForm(fields);
    if (Object.keys(validation).length !== 0) {
      setErrors(validation);
      return;
    }

    setErrors({});
    setLoading(true);

    const response = await fetch(
  "https://rahatdigitals-backend.onrender.com/api/forms/passport",
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
      alert("Passport application submitted successfully!");
    } else {
      alert("Error: " + data.error);
    }
  };

  return (
    <form className="form-box" onSubmit={handleSubmit}>
      <h2>Passport Application Form</h2>

      <input name="fullName" placeholder="Full Name" onChange={handleInput} />
      <span className="error">{errors.fullName}</span>

      <input type="date" name="dob" onChange={handleInput} />
      <span className="error">{errors.dob}</span>

      <input name="email" placeholder="Email" onChange={handleInput} />
      <span className="error">{errors.email}</span>

      <input name="phone" placeholder="Phone Number" onChange={handleInput} />
      <span className="error">{errors.phone}</span>

      <textarea name="address" placeholder="Full Address" onChange={handleInput} />
      <span className="error">{errors.address}</span>

      <button type="submit">{loading ? "Submitting..." : "Submit"}</button>

      {submitted && <p className="success-text">Form submitted successfully!</p>}
    </form>
  );
};

export default PassportForm;
