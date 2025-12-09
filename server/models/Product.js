import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: String, required: true },
    link: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
