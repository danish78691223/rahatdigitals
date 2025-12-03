import express from "express";
import {
  registerAdmin,
  loginAdmin,
} from "../controllers/adminAuthController.js";

const router = express.Router();

// You can use this once to create initial admin user,
// then optionally disable or protect it.
router.post("/register", registerAdmin);

router.post("/login", loginAdmin);

export default router;
