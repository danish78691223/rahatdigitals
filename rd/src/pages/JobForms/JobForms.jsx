import React from "react";
import "./JobForms.css";
import JobApplyForm from "../../forms/JobApplyForm";

const JobForms = () => {
  return (
    <div className="service-page">
      <div className="service-header">
        <h1>Job Application Forms</h1>
        <p>Fill the form for Government or Private job applications.</p>
      </div>

      <JobApplyForm />
    </div>
  );
};

export default JobForms;
