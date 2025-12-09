import React from "react";
import "./JobForms.css";
import JobApplyForm from "../../forms/JobApplyForm";

const JobForms = () => {
  return (
    <div className="service-page">
      <div className="service-header">
        <h1>Job Application Forms and Inquriy</h1>
        <p>Fill the form for Government or Private job applications. And Inquiry</p>
        <p>For most formal jobs, especially government and organized‑sector private jobs, identity and eligibility documents like Aadhaar, PAN, educational certificates, and sometimes caste or income certificates are required during application or joining. Many recruitment processes now happen through online portals where you register, upload documents, and track application status for central or state government positions. Job seekers should be careful to use only official websites or verified portals to avoid scams that demand money in exchange for fake job offers.</p>
        <p>Government employment (like UPSC, SSC, Railways, state public service commissions, etc.) usually has clear rules on age limits, educational requirements, reservation benefits, and selection stages such as exams, interviews, and medical tests. Applicants must follow instructions about document verification carefully, because mismatch in names, dates of birth, or categories can lead to rejection even after clearing exams. Keeping documents like Aadhaar, PAN, and certificates updated and consistent across all records helps avoid such issues.</p>
        <p>Government services such as subsidies, pensions, scholarships, and health schemes are increasingly linked with Aadhaar and bank accounts, and often work through Direct Benefit Transfer (DBT) to reduce middlemen. Many public services are now accessible through digital platforms and apps (for example, DigiLocker, UMANG, Passport Seva, and state service portals), where you can apply, upload documents, and track requests online. Learning to use these official digital channels safely, and not sharing OTPs or login details with others, is important to protect both your identity and your money.</p>
        <h3>Fill The Given Form For More Details</h3>
        <h4> We Will Contact You Soon...</h4>

      </div>

      <JobApplyForm />
    </div>
  );
};

export default JobForms;
