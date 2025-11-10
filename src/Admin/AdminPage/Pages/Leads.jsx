import React, { useState } from "react";
import Papa from "papaparse";

function Leads() {
  const [leads, setLeads] = useState([]);
  const [newLead, setNewLead] = useState({ name: "", email: "", phone: "", status: "New Lead" });

  const statusOptions = ["New Lead", "Meeting Done", "Quotation Given", "Closed"];

  const statusColors = {
    "New Lead": "bg-yellow-300 text-yellow-900",
    "Meeting Done": "bg-blue-300 text-blue-900",
    "Quotation Given": "bg-green-300 text-green-900",
    "Closed": "bg-gray-300 text-gray-900",
  };

  // Handle CSV file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const parsedData = results.data.map((row, idx) => ({
          id: idx + 1 + leads.length,
          name: row.name || "",
          email: row.email || "",
          phone: row.phone || "",
          status: row.status || "New Lead",
        }));
        setLeads((prev) => [...prev, ...parsedData]);
      },
    });
  };

  // Add new lead manually
  const handleAddLead = (e) => {
    e.preventDefault();
    if (!newLead.name || !newLead.email || !newLead.phone) {
      alert("Please fill all fields");
      return;
    }
    setLeads((prev) => [
      ...prev,
      { id: prev.length + 1, ...newLead }
    ]);
    setNewLead({ name: "", email: "", phone: "", status: "New Lead" });
  };

  // Update status
  const handleStatusChange = (id, newStatus) => {
    setLeads((prev) =>
      prev.map((lead) =>
        lead.id === id ? { ...lead, status: newStatus } : lead
      )
    );
  };

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">Leads Management</h1>

      {/* Manual Add Lead Form */}
      <div className="mb-4 flex gap-2 items-center flex-wrap">
        <input
          type="text"
          placeholder="Name"
          value={newLead.name}
          onChange={(e) => setNewLead({ ...newLead, name: e.target.value })}
          className="border px-2 py-1 rounded text-xs"
        />
        <input
          type="email"
          placeholder="Email"
          value={newLead.email}
          onChange={(e) => setNewLead({ ...newLead, email: e.target.value })}
          className="border px-2 py-1 rounded text-xs"
        />
        <input
          type="text"
          placeholder="Phone"
          value={newLead.phone}
          onChange={(e) => setNewLead({ ...newLead, phone: e.target.value })}
          className="border px-2 py-1 rounded text-xs"
        />
        <select
          value={newLead.status}
          onChange={(e) => setNewLead({ ...newLead, status: e.target.value })}
          className="text-xs border rounded px-1 py-0.5"
        >
          {statusOptions.map((status) => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
        <button
          onClick={handleAddLead}
          className="bg-blue-500 text-white px-3 py-1 text-xs rounded hover:bg-blue-600"
        >
          Add Lead
        </button>
      </div>

      {/* CSV Upload */}
      <div className="mb-4">
        <input
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          className="border px-2 py-1 rounded text-xs"
        />
      </div>

      {/* Leads Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border text-xs">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-2 py-1">ID</th>
              <th className="border px-2 py-1">Name</th>
              <th className="border px-2 py-1">Email</th>
              <th className="border px-2 py-1">Phone</th>
              <th className="border px-2 py-1">Status</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id}>
                <td className="border px-2 py-1">{lead.id}</td>
                <td className="border px-2 py-1">{lead.name}</td>
                <td className="border px-2 py-1">{lead.email}</td>
                <td className="border px-2 py-1">{lead.phone}</td>
                <td className="border px-2 py-1">
                  <select
                    value={lead.status}
                    onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                    className={`text-xs border rounded px-1 py-0.5 ${statusColors[lead.status]}`}
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
            {leads.length === 0 && (
              <tr>
                <td className="border px-2 py-1 text-center" colSpan={5}>
                  No leads available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leads;
