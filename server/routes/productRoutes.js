import express from "express";
import {
  addProduct,
  getProducts,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

// /api/admin/products
router.post("/", addProduct);     // Add product
router.get("/", getProducts);      // Get all products
router.delete("/:id", deleteProduct);  // Delete product
router.put("/:id", updateProduct);

export default router;
