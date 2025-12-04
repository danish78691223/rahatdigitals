import React, { useState } from "react";
import { validateForm } from "./FormValidation";
import "./FormStyles.css";

const PanCardForm = () => {
  const [fields, setFields] = useState({
    fullName: "",
    fatherName: "",
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

    // 🔥 Netlify function
    const response = await fetch("/.netlify/functions/sendMail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formType: "PAN Card Application",
        ...fields,
      }),
    });

    const data = await response.json();
    setLoading(false);

    if (data.success) {
      setSubmitted(true);
      alert("PAN Card request submitted successfully!");
    } else {
      alert("Error: " + data.error);
    }
  };

  return (
    <div className="form-container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>PAN Card Application</h2>

        <input name="fullName" placeholder="Full Name" onChange={handleInput} />
        <span className="error">{errors.fullName}</span>

        <input name="fatherName" placeholder="Father's Name" onChange={handleInput} />
        <span className="error">{errors.fatherName}</span>

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
    </div>
  );
};

export default PanCardForm;
