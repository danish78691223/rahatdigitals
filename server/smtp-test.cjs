require("net").connect(587, "smtp.gmail.com", () =>
  console.log("Connected to Gmail SMTP")
);
