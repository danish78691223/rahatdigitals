import React, { useEffect, useState } from "react";
import API from "../../api/axios";
import "./Admin.css";

const TABS = [
  { label: "PAN Card", type: "PAN" },
  { label: "Voter ID", type: "VOTER" },
  { label: "Passport", type: "PASSPORT" },
  { label: "Job Forms", type: "JOB" },
];

const AdminDashboard = () => {
  const [activeType, setActiveType] = useState("PAN");
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchForms = async () => {
    try {
      setLoading(true);
      const res = await API.get(`/admin/forms?type=${activeType}`);
      setForms(res.data);
    } catch (err) {
      console.error("Error fetching forms:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchForms();
    // eslint-disable-next-line
  }, [activeType]);

  const updateStatus = async (id, status) => {
    try {
      await API.patch(`/admin/forms/${id}/status`, { status });
      fetchForms();
    } catch (err) {
      console.error("Status update error:", err);
    }
  };

  const deleteForm = async (id) => {
    if (!window.confirm("Delete this submission?")) return;
    try {
      await API.delete(`/admin/forms/${id}`);
      fetchForms();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>
        {TABS.map((tab) => (
          <button
            key={tab.type}
            className={
              activeType === tab.type ? "sidebar-btn active" : "sidebar-btn"
            }
            onClick={() => setActiveType(tab.type)}
          >
            {tab.label}
          </button>
        ))}
      </aside>

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
                    <pre>{JSON.stringify(f.data, null, 2)}</pre>
                  </td>
                  <td>{f.status}</td>
                  <td>
                    <button
                      onClick={() => updateStatus(f._id, "processed")}
                    >
                      Mark Processed
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
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
