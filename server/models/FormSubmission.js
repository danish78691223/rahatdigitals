import mongoose from "mongoose";

const formSubmissionSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["PAN", "VOTER", "JOB", "PASSPORT"],
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "processed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("FormSubmission", formSubmissionSchema);
