import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import formsRoutes from "./routes/formsRoutes.js";
import adminAuthRoutes from "./routes/adminAuthRoutes.js";
import adminFormsRoutes from "./routes/adminFormsRoutes.js";
import { connectDB } from "./db.js";

dotenv.config();

const app = express();
connectDB();

app.use(express.json());

// ✅ CORS FIX FOR NETLIFY + CUSTOM DOMAIN
app.use(
  cors({
    origin: [
      "https://rahatdigitals.in",       // your actual website
      "http://localhost:3000"           // local testing
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

// ROUTES
app.use("/api/forms", formsRoutes);
app.use("/api/admin/auth", adminAuthRoutes);
app.use("/api/admin/forms", adminFormsRoutes);

app.get("/", (req, res) => {
  res.send("Rahat Digital's API is running");
});

// START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
