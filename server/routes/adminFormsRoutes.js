import express from "express";
import {
  getFormsByType,
  updateFormStatus,
  deleteForm,
} from "../controllers/adminFormsController.js";
import { protectAdmin } from "../middleware/adminAuthMiddleware.js";

const router = express.Router();

// All routes here are protected
router.get("/", protectAdmin, getFormsByType);
router.patch("/:id/status", protectAdmin, updateFormStatus);
router.delete("/:id", protectAdmin, deleteForm);

export default router;
