import mongoose from "mongoose";

const contactMessageSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    message: String,
    status: {
      type: String,
      default: "new",
    },
  },
  { timestamps: true }
);

export default mongoose.model("ContactMessage", contactMessageSchema);
