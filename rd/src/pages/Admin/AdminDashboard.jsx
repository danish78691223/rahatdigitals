import React, { useEffect, useState, useCallback } from "react";
import API from "../../api/axios";
import "./Admin.css";

const TABS = [
  { label: "PAN Card", type: "PAN" },
  { label: "Voter ID", type: "VOTER" },
  { label: "Passport", type: "PASSPORT" },
  { label: "Job Forms", type: "JOB" },
  { label: "Contact Messages", type: "CONTACT" },
  { label: "Add Products", type: "PRODUCTS" },
];

const AdminDashboard = () => {
  const [activeType, setActiveType] = useState("PAN");
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);

  // ⭐ CATEGORY LIST
  const categoriesList = [
    "Electronics",
    "Fashion",
    "Home",
    "Mobile",
    "Computer",
    "Accessories",
    "Other",
  ];

  // ⭐ PRODUCT INPUT STATE
  const [product, setProduct] = useState({
    title: "",
    price: "",
    img: "",
    category: "",
    link: "",
  });

  // Fetch Forms / Products
  const fetchForms = useCallback(async () => {
    try {
      setLoading(true);

      let res;
      if (activeType === "CONTACT") {
        res = await API.get("/admin/contact");
      } else if (activeType === "PRODUCTS") {
        res = await API.get("/admin/products");
      } else {
        res = await API.get(`/admin/forms?type=${activeType}`);
      }

      setForms(res.data);
    } catch (err) {
      console.error("❌ Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  }, [activeType]);

  useEffect(() => {
    fetchForms();
  }, [fetchForms]);

  // ⭐ ADD PRODUCT
  const addProduct = async (e) => {
    e.preventDefault();

    try {
      await API.post("/admin/products", product);
      alert("Product Added Successfully!");

      setProduct({
        title: "",
        price: "",
        img: "",
        category: "",
        link: "",
      });

      fetchForms();
    } catch (error) {
      console.error("❌ Product Add Error:", error);
      alert("Failed to add product");
    }
  };

  // Update Status
  const updateStatus = async (id, status) => {
    try {
      const body = { status };

      if (activeType === "CONTACT") {
        await API.patch(`/admin/contact/${id}/status`, body);
      } else {
        await API.patch(`/admin/forms/${id}/status`, body);
      }

      fetchForms();
    } catch (err) {
      console.error("❌ Update status error:", err);
    }
  };

  // Delete
  const deleteForm = async (id) => {
    if (!window.confirm("Delete this entry?")) return;

    try {
      if (activeType === "PRODUCTS") {
        await API.delete(`/admin/products/${id}`);
      } else if (activeType === "CONTACT") {
        await API.delete(`/admin/contact/${id}`);
      } else {
        await API.delete(`/admin/forms/${id}`);
      }

      fetchForms();
    } catch (err) {
      console.error("❌ Delete error:", err);
    }
  };

  // Render Fields
const renderData = (form) => {
  const d = form.data || {}; 

  if (activeType === "PRODUCTS") {
    return (
      <div>
        <b>{form.title}</b> <br />
        ₹ {form.price} <br />
        Category: {form.category} <br />
        <a href={form.link} target="_blank" rel="noreferrer">Amazon Link</a>
      </div>
    );
  }

  if (activeType === "CONTACT") {
    return (
      <div>
        <b>Name:</b> {form.name} <br />
        <b>Email:</b> {form.email} <br />
        <b>Phone:</b> {form.phone} <br />
        <b>Message:</b> {form.message}
      </div>
    );
  }

  // ⭐ JOB FORMS (use fullName)
  if (activeType === "JOB") {
    return (
      <div>
        <b>Full Name:</b> {d.fullName || "N/A"} <br />
        <b>Email:</b> {d.email || "N/A"} <br />
        <b>Phone:</b> {d.phone || "N/A"} <br />
        <b>Qualification:</b> {d.qualification || "N/A"} <br />
        <b>Job Type:</b> {d.jobType || "N/A"}
      </div>
    );
  }

  // ⭐ PAN CARD (use fullName instead of name)
  if (activeType === "PAN") {
    return (
      <div>
        <b>Name:</b> {d.fullName || "N/A"} <br />
        <b>DOB:</b> {d.dob || "N/A"} <br />
        <b>Phone:</b> {d.phone || "N/A"} <br />
        <b>Address:</b> {d.address || "N/A"}
      </div>
    );
  }

  // ⭐ VOTER ID
  if (activeType === "VOTER") {
    return (
      <div>
        <b>Name:</b> {d.fullName || d.name || "N/A"} <br />
        <b>Father Name:</b> {d.fatherName || "N/A"} <br />
        <b>DOB:</b> {d.dob || "N/A"} <br />
        <b>Address:</b> {d.address || "N/A"}
      </div>
    );
  }

  // ⭐ PASSPORT
  if (activeType === "PASSPORT") {
    return (
      <div>
        <b>Name:</b> {d.fullName || "N/A"} <br />
        <b>DOB:</b> {d.dob || "N/A"} <br />
        <b>Phone:</b> {d.phone || "N/A"} <br />
        <b>Passport Type:</b> {d.passportType || "N/A"}
      </div>
    );
  }

  return <pre>{JSON.stringify(form, null, 2)}</pre>;
};



  return (
    <div className="admin-layout">
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>

        {TABS.map((tab) => (
          <button
            key={tab.type}
            className={activeType === tab.type ? "sidebar-btn active" : "sidebar-btn"}
            onClick={() => setActiveType(tab.type)}
          >
            {tab.label}
          </button>
        ))}
      </aside>

      {/* MAIN */}
      <main className="admin-main">
        <h2>{TABS.find((t) => t.type === activeType)?.label}</h2>

        {/* ---------------------- PRODUCT FORM ---------------------- */}
        {activeType === "PRODUCTS" && (
          <div className="product-form-box">
            <h3>Add New Product</h3>

            <form onSubmit={addProduct} className="product-form">
              <input
                type="text"
                placeholder="Product Title"
                value={product.title}
                onChange={(e) => setProduct({ ...product, title: e.target.value })}
                required
              />

              <input
                type="text"
                placeholder="Price (₹)"
                value={product.price}
                onChange={(e) => setProduct({ ...product, price: e.target.value })}
                required
              />

              <input
                type="text"
                placeholder="Image URL"
                value={product.img}
                onChange={(e) => setProduct({ ...product, img: e.target.value })}
                required
              />

              {/* ⭐ CATEGORY DROPDOWN */}
              <select
                value={product.category}
                onChange={(e) =>
                  setProduct({ ...product, category: e.target.value })
                }
                required
              >
                <option value="">Select Category</option>
                {categoriesList.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Amazon Link"
                value={product.link}
                onChange={(e) => setProduct({ ...product, link: e.target.value })}
                required
              />

              <button type="submit">Add Product</button>
            </form>

            <h3 style={{ marginTop: "30px" }}>Product List</h3>

            {forms.length === 0 ? (
              <p>No products added yet.</p>
            ) : (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Details</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {forms.map((p) => (
                    <tr key={p._id}>
                      <td>
                        <img
                          src={p.img}
                          alt={p.title}
                          style={{ width: "80px", borderRadius: "8px" }}
                        />
                      </td>

                      <td>
                        <b>{p.title}</b> <br />
                        ₹ {p.price} <br />
                        Category: {p.category}
                      </td>

                      <td>
                        <button
                          onClick={() => {
                            setSelectedForm(p);
                            setShowModal(true);
                          }}
                        >
                          Edit
                        </button>

                        <button
                          className="danger"
                          onClick={() => deleteForm(p._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* ---------------------- NON-PRODUCT FORMS ---------------------- */}
        {activeType !== "PRODUCTS" &&
          (loading ? (
            <p>Loading...</p>
          ) : forms.length === 0 ? (
            <p>No submissions yet.</p>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Submitted At</th>
                  <th>Data</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {forms.map((f) => (
                  <tr key={f._id}>
                    <td>{new Date(f.createdAt).toLocaleString()}</td>
                    <td>{renderData(f)}</td>
                    <td>{f.status || "new"}</td>
                    <td>
                      <button
                        onClick={() => {
                          setSelectedForm(f);
                          setShowModal(true);
                        }}
                      >
                        View
                      </button>

                      <button onClick={() => updateStatus(f._id, "processed")}>
                        Processed
                      </button>

                      <button
                        className="danger"
                        onClick={() => deleteForm(f._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
      </main>

      {/* ---------------------- PRODUCT EDIT MODAL ---------------------- */}
      {showModal && selectedForm && activeType === "PRODUCTS" && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Edit Product</h3>

            <input
              type="text"
              value={selectedForm.title}
              onChange={(e) =>
                setSelectedForm({ ...selectedForm, title: e.target.value })
              }
            />

            <input
              type="text"
              value={selectedForm.price}
              onChange={(e) =>
                setSelectedForm({ ...selectedForm, price: e.target.value })
              }
            />

            <input
              type="text"
              value={selectedForm.img}
              onChange={(e) =>
                setSelectedForm({ ...selectedForm, img: e.target.value })
              }
            />

            {/* ⭐ CATEGORY DROPDOWN FOR EDIT */}
            <select
              value={selectedForm.category}
              onChange={(e) =>
                setSelectedForm({
                  ...selectedForm,
                  category: e.target.value,
                })
              }
            >
              {categoriesList.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <input
              type="text"
              value={selectedForm.link}
              onChange={(e) =>
                setSelectedForm({ ...selectedForm, link: e.target.value })
              }
            />

            <button
              onClick={async () => {
                try {
                  await API.put(`/admin/products/${selectedForm._id}`, selectedForm);
                  alert("Product Updated!");
                  setShowModal(false);
                  fetchForms();
                } catch (err) {
                  console.error("❌ Update Error:", err);
                  alert("Failed to update product");
                }
              }}
            >
              Update Product
            </button>

            <button className="danger" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
