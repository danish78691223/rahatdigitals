import express from "express";
import {
  submitPanCardForm,
  submitVoterIdForm,
  submitJobForm,
  submitPassportForm,
} from "../controllers/formsController.js";

const router = express.Router();

router.post("/pan-card", submitPanCardForm);
router.post("/voter-id", submitVoterIdForm);
router.post("/job", submitJobForm);
router.post("/passport", submitPassportForm);

export default router;
