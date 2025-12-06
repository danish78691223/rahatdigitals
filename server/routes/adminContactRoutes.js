import express from "express";
import ContactMessage from "../models/ContactMessage.js";
import { protectAdmin } from "../middleware/adminAuthMiddleware.js";

const router = express.Router();

// Get all contact messages
router.get("/", protectAdmin, async (req, res) => {
  const messages = await ContactMessage.find().sort({ createdAt: -1 });
  res.json(messages);
});

// Update status
router.patch("/:id/status", protectAdmin, async (req, res) => {
  const { status } = req.body;
  await ContactMessage.findByIdAndUpdate(req.params.id, { status });
  res.json({ success: true });
});

// Delete message
router.delete("/:id", protectAdmin, async (req, res) => {
  await ContactMessage.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

export default router;
