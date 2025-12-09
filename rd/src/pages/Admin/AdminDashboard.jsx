import React, { useEffect, useState, useCallback } from "react";
import API from "../../api/axios";
import "./Admin.css";

const TABS = [
  { label: "PAN Card", type: "PAN" },
  { label: "Voter ID", type: "VOTER" },
  { label: "Passport", type: "PASSPORT" },
  { label: "Job Forms", type: "JOB" },
  { label: "Contact Messages", type: "CONTACT" },
];

const AdminDashboard = () => {
  const [activeType, setActiveType] = useState("PAN");
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(false);

  // Modal
  const [showModal, setShowModal] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);

  // 🔵 Fetch Forms
  const fetchForms = useCallback(async () => {
    try {
      setLoading(true);

      let res;

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

  // 🔵 Update Status
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

  // 🔵 Delete
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

  // 🔵 Format Data Per Form Type
  const renderData = (form) => {
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

                  <td>{renderData(f)}</td>

                  <td>
                    <span
                      style={{
                        color: f.status === "processed" ? "green" : "orange",
                        fontWeight: "bold",
                      }}
                    >
                      {f.status || "new"}
                    </span>
                  </td>

                  <td>
                    <button onClick={() => setSelectedForm(f) || setShowModal(true)}>
                      View Details
                    </button>

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

      {/* 🔵 MODAL POPUP */}
      {showModal && selectedForm && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Submission Details</h3>

            <p><b>Submitted:</b> {new Date(selectedForm.createdAt).toLocaleString()}</p>

            <div className="modal-content">
              {renderData(selectedForm)}
            </div>

            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
