import Product from "../models/Product.js";

// ADD PRODUCT
export const addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();

    res.json({ success: true, message: "Product added", product });
  } catch (err) {
    console.error("❌ Add Product Error:", err);
    res.status(500).json({ success: false, error: "Failed to add product" });
  }
};

// GET ALL PRODUCTS
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    console.error("❌ Get Products Error:", err);
    res.status(500).json({ success: false, error: "Failed to fetch products" });
  }
};

// DELETE PRODUCT
export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Product deleted" });
  } catch (err) {
    console.error("❌ Delete Product Error:", err);
    res.status(500).json({ success: false, error: "Failed to delete product" });
  }
};
