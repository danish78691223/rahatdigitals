export const validationRules = {
  email: (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Invalid email address",

  phone: (value) =>
    /^\d{10}$/.test(value) || "Phone number must be 10 digits",

  aadhaar: (value) =>
    /^\d{12}$/.test(value) || "Aadhaar must be 12 digits",

  required: (value) =>
    (value && value.trim() !== "") || "This field is required",
};
