import API from "./axios";

// Generic reusable API handler for all form submissions
const handleFormSubmit = async (endpoint, data) => {
  try {
    const res = await API.post(endpoint, data);

    console.log("📨 Form submitted to:", endpoint);
    console.log("📩 Server Response:", res.data);

    return { success: true, data: res.data };

  } catch (error) {
    console.error("❌ Form submission failed:", error);

    return {
      success: false,
      message:
        error?.response?.data?.error ||
        error?.response?.data?.message ||
        "Something went wrong while submitting the form",
    };
  }
};

// PAN Card
export const submitPanCardForm = (data) =>
  handleFormSubmit("/forms/pan-card", data);

// Voter ID
export const submitVoterIdForm = (data) =>
  handleFormSubmit("/forms/voter-id", data);

// Job Application
export const submitJobForm = (data) =>
  handleFormSubmit("/forms/job", data);

// Passport Application
export const submitPassportForm = (data) =>
  handleFormSubmit("/forms/passport", data);
