import FormSubmission from "../models/FormSubmission.js";

export const getFormsByType = async (req, res) => {
  try {
    const { type } = req.query; // PAN / VOTER / JOB / PASSPORT

    const filter = type ? { type } : {};
    const forms = await FormSubmission.find(filter)
      .sort({ createdAt: -1 });

    res.json(forms);
  } catch (err) {
    console.error("Get Forms Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateFormStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // pending / processed

    const updated = await FormSubmission.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    console.error("Update Status Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteForm = async (req, res) => {
  try {
    const { id } = req.params;
    await FormSubmission.findByIdAndDelete(id);
    res.json({ success: true });
  } catch (err) {
    console.error("Delete Form Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
