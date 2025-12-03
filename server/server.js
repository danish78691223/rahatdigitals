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
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
  })
);

app.use("/api/forms", formsRoutes);          // public forms
app.use("/api/admin/auth", adminAuthRoutes); // login/register
app.use("/api/admin/forms", adminFormsRoutes); // protected admin forms

app.get("/", (req, res) => {
  res.send("Rahat Digital's API is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
