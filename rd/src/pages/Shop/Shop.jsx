import React, { useEffect, useState } from "react";
import API from "../../api/axios";
import "./Shop.css";

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
      <h1 className="shop-title">Rahat Digitals Shop</h1>
      <p className="shop-sub">
        Buy Best Amazon Products Through Our Affiliate Store
      </p>

      {/* Filters */}
      <div className="shop-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={category === cat ? "filter-btn active" : "filter-btn"}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="product-grid">
        {filtered.map((p) => (
          <div className="product-card" key={p._id}>
            <img src={p.img} alt={p.title} />
            <h3>{p.title}</h3>
            <p className="price">{p.price}</p>

            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="buy-btn"
            >
              Buy on Amazon
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
