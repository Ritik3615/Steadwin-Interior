import React, { useState } from "react";
import AddItem from "../inventorySetting/AddItem";

function Inventry() {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-6">
      {/* Page Heading */}
      <h1 className="text-2xl font-bold mb-6">Inventory Management</h1>

      {/* Search + Options */}
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Search items..."
          className="border p-2 rounded w-1/3"
        />
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          + Add Item
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 h-1/2 max-w-1/3 bg-white shadow-lg p-4 m-auto rounded-2xl">
          <div className="flex justify-end ">
            <button onClick={() => setOpen(false)} className="text-xl font-bold hover:text-red-600">
              ✕
            </button>
          </div>
          <AddItem />
        </div>
      )}
      {/* Table */}
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2 border">S.No</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Quantity</th>
            <th className="p-2 border">Buying Price</th>
            <th className="p-2 border">Selling Price</th>
            <th className="p-2 border">Availability</th>
          </tr>
        </thead>
        <tbody>
          {/* Data will come from backend */}
          <tr>
            <td className="p-2 border text-center" colSpan="6">
              No data available
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Inventry;
