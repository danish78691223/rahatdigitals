import React, { useState } from "react";
import { validateForm } from "./FormValidation";
import "./FormStyles.css";

const JobApplyForm = () => {
  const [fields, setFields] = useState({
    fullName: "",
    email: "",
    phone: "",
    qualification: "",
    jobType: "",
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

    // 🔥 Send via Netlify
    const response = await fetch("/.netlify/functions/sendMail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formType: "Job Application Form",
        ...fields,
      }),
    });

    const data = await response.json();
    setLoading(false);

    if (data.success) {
      setSubmitted(true);
      alert("Job application submitted!");
    } else {
      alert("Error: " + data.error);
    }
  };

  return (
    <form className="form-box" onSubmit={submitHandler}>
      <h2>Job Application Form</h2>

      <input type="text" name="fullName" placeholder="Full Name" onChange={inputHandler} />
      <span className="error">{errors.fullName}</span>

      <input type="email" name="email" placeholder="Email Address" onChange={inputHandler} />
      <span className="error">{errors.email}</span>

      <input type="text" name="phone" placeholder="Phone Number" onChange={inputHandler} />
      <span className="error">{errors.phone}</span>

      <input type="text" name="qualification" placeholder="Highest Qualification" onChange={inputHandler} />
      <span className="error">{errors.qualification}</span>

      <input type="text" name="jobType" placeholder="Job Type (Govt/Private)" onChange={inputHandler} />
      <span className="error">{errors.jobType}</span>

      <button type="submit">{loading ? "Submitting..." : "Submit"}</button>
      {submitted && <p className="success-text">Form submitted successfully!</p>}
    </form>
  );
};

export default JobApplyForm;
