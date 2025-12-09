import React, { useEffect, useState, useCallback } from "react";
import API from "../../api/axios";
import "./Admin.css";

const TABS = [
  { label: "PAN Card", type: "PAN" },
  { label: "Voter ID", type: "VOTER" },
  { label: "Passport", type: "PASSPORT" },
  { label: "Job Forms", type: "JOB" },
  { label: "Contact Messages", type: "CONTACT" },
  { label: "Add Products", type: "PRODUCTS" }, // ⭐ NEW TAB
];

const AdminDashboard = () => {
  const [activeType, setActiveType] = useState("PAN");
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(false);

  // Modal
  const [showModal, setShowModal] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);

  // ⭐ Product Form State
  const [product, setProduct] = useState({
    title: "",
    price: "",
    img: "",
    category: "",
    link: "",
  });

  // ⭐ Fetch Forms OR Products
  const fetchForms = useCallback(async () => {
    try {
      setLoading(true);

      let res;

      if (activeType === "CONTACT") {
        res = await API.get("/admin/contact");
      } else if (activeType === "PRODUCTS") {
        res = await API.get("/admin/products"); // ⭐ Fetch products
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

  // ⭐ Add Product Submit Handler
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
      const body = { status: status };

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
      if (activeType === "CONTACT") {
        await API.delete(`/admin/contact/${id}`);
      } else if (activeType === "PRODUCTS") {
        await API.delete(`/admin/products/${id}`);
      } else {
        await API.delete(`/admin/forms/${id}`);
      }

      fetchForms();
    } catch (err) {
      console.error("❌ Delete error:", err);
    }
  };

  // Render Data
  const renderData = (form) => {
    if (activeType === "PRODUCTS") {
      return (
        <div>
          <b>Title:</b> {form.title} <br />
          <b>Price:</b> {form.price} <br />
          <b>Category:</b> {form.category} <br />
          <b>Link:</b> <a href={form.link} target="_blank">Amazon Link</a>
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

    if (activeType === "JOB") {
      return (
        <div>
          <b>Full Name:</b> {form.data.fullName} <br />
          <b>Email:</b> {form.data.email} <br />
          <b>Phone:</b> {form.data.phone} <br />
          <b>Qualification:</b> {form.data.qualification} <br />
          <b>Job Type:</b> {form.data.jobType}
        </div>
      );
    }

    if (activeType === "PAN") {
      return (
        <div>
          <b>Name:</b> {form.data.name} <br />
          <b>DOB:</b> {form.data.dob} <br />
          <b>Phone:</b> {form.data.phone} <br />
          <b>Address:</b> {form.data.address}
        </div>
      );
    }

    if (activeType === "VOTER") {
      return (
        <div>
          <b>Name:</b> {form.data.name} <br />
          <b>Father Name:</b> {form.data.fatherName} <br />
          <b>DOB:</b> {form.data.dob} <br />
          <b>Address:</b> {form.data.address}
        </div>
      );
    }

    if (activeType === "PASSPORT") {
      return (
        <div>
          <b>Name:</b> {form.data.name} <br />
          <b>DOB:</b> {form.data.dob} <br />
          <b>Phone:</b> {form.data.phone} <br />
          <b>Passport Type:</b> {form.data.passportType}
        </div>
      );
    }

    return <pre>{JSON.stringify(form.data, null, 2)}</pre>;
  };

  return (
    <div className="admin-layout">
      {/* Sidebar */}
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

      {/* Main */}
      <main className="admin-main">
        <h2>{TABS.find((t) => t.type === activeType)?.label}</h2>

        {/* ⭐ ADD PRODUCT FORM */}
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

              <input
                type="text"
                placeholder="Category"
                value={product.category}
                onChange={(e) => setProduct({ ...product, category: e.target.value })}
                required
              />

              <input
                type="text"
                placeholder="Amazon Link"
                value={product.link}
                onChange={(e) => setProduct({ ...product, link: e.target.value })}
                required
              />

              <button type="submit">Add Product</button>
            </form>
          </div>
        )}

        {/* TABLE DISPLAY */}
        {activeType !== "PRODUCTS" && loading ? (
          <p>Loading...</p>
        ) : forms.length === 0 ? (
          <p>No submissions yet.</p>
        ) : (
          activeType !== "PRODUCTS" && (
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
                      <button onClick={() => setSelectedForm(f) || setShowModal(true)}>
                        View
                      </button>
                      <button onClick={() => updateStatus(f._id, "processed")}>
                        Processed
                      </button>
                      <button className="danger" onClick={() => deleteForm(f._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
