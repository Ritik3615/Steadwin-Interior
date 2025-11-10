import React, { useState } from "react";
import axios from "axios";

function AddAccount({ onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    userId: 1, // replace with actual logged-in user ID
    bankName: "",
    accountNumberMasked: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.bankName || !formData.accountNumberMasked) {
      alert("Please fill all fields");
      return;
    }

    // Temporary consentId for testing
    const consentId = `CONSENT-${Math.random().toString(36).substring(2, 10)}`;

    try {
      await axios.post("http://localhost:904/account/link", {
        ...formData,
        consentId,
      });

      alert("Account linked successfully!");
      setFormData({ userId: 1, bankName: "", accountNumberMasked: "" });

      if (onSuccess) onSuccess(); // refresh parent account list
      if (onClose) onClose();     // close the modal
    } catch (error) {
      console.error("Error linking account:", error);
      alert("Failed to link account");
    }
  };

  return (
    <div className="p-5">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-sm">
        <label className="font-semibold">Bank Name</label>
        <input
          type="text"
          name="bankName"
          placeholder="e.g. HDFC Bank"
          value={formData.bankName}
          onChange={handleChange}
          className="border p-2 rounded-md"
          required
        />

        <label className="font-semibold">Account Number (Masked)</label>
        <input
          type="text"
          name="accountNumberMasked"
          placeholder="e.g. XXXX1234"
          value={formData.accountNumberMasked}
          onChange={handleChange}
          className="border p-2 rounded-md"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white rounded-md py-2 mt-2 hover:bg-blue-700"
        >
          Link Account
        </button>
      </form>
    </div>
  );
}

export default AddAccount;
