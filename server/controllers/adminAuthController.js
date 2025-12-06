import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import AdminUser from "../models/AdminUser.js";

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });

// REGISTER (one-time to create admin; you can remove after creating initial user)
export const registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existing = await AdminUser.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const admin = await AdminUser.create({ name, email, password: hashed });

    res.json({
      success: true,
      admin: {
        _id: admin._id,
        name: admin.name,
        email: admin.email,
      },
      token: generateToken(admin._id),
    });
  } catch (err) {
    console.error("Register Admin Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};


export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await AdminUser.findOne({ email });
    if (!admin) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    res.json({
      success: true,
      admin: { _id: admin._id, name: admin.name, email: admin.email },
      token: generateToken(admin._id),
    });
  } catch (err) {
    console.error("Login Admin Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
