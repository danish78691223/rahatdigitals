import React, { useEffect, useState } from "react";
import API from "../../api/axios";
import "./Shop.css";
import { motion } from "framer-motion";

const Shop = () => {
  const [category, setCategory] = useState("ALL");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await API.get("/admin/products");
        setProducts(res.data);
      } catch (err) {
        console.error("❌ Failed to load products:", err);
      }
    };
    loadProducts();
  }, []);

  const categories = ["ALL", "Electronics", "Fashion", "Home", "Other"];

  const filtered =
    category === "ALL"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div className="shop-page">
      <div className="shop-container">

        {/* HEADER */}
        <motion.div
          className="shop-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="shop-title">Rahat Digitals Shop</h1>
          <p className="shop-sub">
            Hand-picked Amazon products • Trusted deals • Best prices
          </p>
        </motion.div>

        {/* FILTERS */}
        <div className="shop-filters">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileTap={{ scale: 0.92 }}
              className={
                category === cat ? "filter-btn active" : "filter-btn"
              }
              onClick={() => setCategory(cat)}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* PRODUCTS */}
        <div className="product-grid">
          {filtered.map((p, index) => (
            <motion.div
              key={p._id}
              className="product-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="img-wrap">
                <img src={p.img} alt={p.title} />
              </div>

              <h3>{p.title}</h3>
              <p className="price">{p.price}</p>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="buy-btn"
              >
                Buy on Amazon →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
