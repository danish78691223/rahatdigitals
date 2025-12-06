import React, { useEffect, useState, useCallback } from "react";
import API from "../../api/axios";
import "./Admin.css";

const TABS = [
  { label: "PAN Card", type: "PAN" },
  { label: "Voter ID", type: "VOTER" },
  { label: "Passport", type: "PASSPORT" },
  { label: "Job Forms", type: "JOB" },
  { label: "Contact Messages", type: "CONTACT" }, // NEW TAB
];

const AdminDashboard = () => {
  const [activeType, setActiveType] = useState("PAN");
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🟢 useCallback prevents Netlify build errors
  const fetchForms = useCallback(async () => {
    try {
      setLoading(true);

      let res;

      // NEW → Fetch Contact Messages
      if (activeType === "CONTACT") {
        res = await API.get("/admin/contact");
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

  const updateStatus = async (id, status) => {
    try {
      if (activeType === "CONTACT") {
        await API.patch(`/admin/contact/${id}/status`, { status });
      } else {
        await API.patch(`/admin/forms/${id}/status`, { status });
      }

      fetchForms();
    } catch (err) {
      console.error("❌ Update status error:", err);
    }
  };

  const deleteForm = async (id) => {
    if (!window.confirm("Delete this submission?")) return;

    try {
      if (activeType === "CONTACT") {
        await API.delete(`/admin/contact/${id}`);
      } else {
        await API.delete(`/admin/forms/${id}`);
      }

      fetchForms();
    } catch (err) {
      console.error("❌ Delete error:", err);
    }
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

      {/* Main Content */}
      <main className="admin-main">
        <h2>{TABS.find((t) => t.type === activeType)?.label} Submissions</h2>

        {loading ? (
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

                  <td>
                    {/* Show contact messages differently */}
                    {activeType === "CONTACT" ? (
                      <div>
                        <b>Name:</b> {f.name} <br />
                        <b>Email:</b> {f.email} <br />
                        <b>Phone:</b> {f.phone} <br />
                        <b>Message:</b> {f.message}
                      </div>
                    ) : (
                      <pre>{JSON.stringify(f.data, null, 2)}</pre>
                    )}
                  </td>

                  <td>{f.status || "new"}</td>

                  <td>
                    <button onClick={() => updateStatus(f._id, "processed")}>
                      Mark Processed
                    </button>

                    <button className="danger" onClick={() => deleteForm(f._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
