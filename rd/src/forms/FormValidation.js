export const validateForm = (fields) => {
  let errors = {};

  // Basic validation rules for all forms
  Object.keys(fields).forEach((key) => {
    const value = fields[key];

    if (!value || value.trim() === "") {
      errors[key] = `${key.replace(/([A-Z])/g, " $1")} is required`;
    }
  });

  // Email validation
  if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Enter a valid email address";
  }

  // Phone validation
  if (fields.phone && !/^\d{10}$/.test(fields.phone)) {
    errors.phone = "Phone number must be 10 digits";
  }

  // Aadhaar validation for voter/passport if needed
  if (fields.aadhaar && !/^\d{12}$/.test(fields.aadhaar)) {
    errors.aadhaar = "Aadhaar number must be 12 digits";
  }

  return errors;
};
