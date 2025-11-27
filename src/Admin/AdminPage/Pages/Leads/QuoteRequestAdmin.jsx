import { useEffect, useMemo, useState } from "react";
import api from "../../../services/api";
import { Eye, Trash2, Pencil, X } from "lucide-react";

export default function QuoteRequestAdmin() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Search + Filters
  const [search, setSearch] = useState("");

  // Pagination
  const [page, setPage] = useState(1);
  const pageSize = 10;

  // View Modal
  const [viewData, setViewData] = useState(null);

  // Edit Modal
  const [editData, setEditData] = useState(null);

  // Fetch all
  const fetchAll = async () => {
    try {
      const res = await api.get("/api/quote/quoteForm");
      setQuotes(res.data);
    } catch (err) {
      console.error("Fetch quote requests failed:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  // SEARCH & FILTER
  const filteredQuotes = useMemo(() => {
    return quotes.filter((q) => {
      const target = `${q.fullName || ""} ${q.email || ""} ${q.phone || ""} ${q.projectType || ""}`.toLowerCase();
      return target.includes(search.toLowerCase());
    });
  }, [quotes, search]);

  // PAGINATION
  const paginatedQuotes = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredQuotes.slice(start, start + pageSize);
  }, [filteredQuotes, page]);

  const totalPages = Math.ceil(filteredQuotes.length / pageSize);

  // DELETE
  const deleteQuote = async (id) => {
    if (!confirm("Delete this Quote Request?")) return;

    try {
      await api.delete(`/api/quote/${id}`);
      fetchAll();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  // EDIT SAVE
  const saveEdit = async () => {
    try {
      await api.put(`/api/quote/${editData.id}`, editData);
      setEditData(null);
      fetchAll();
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl font-bold mb-4">Quote Requests</h1>

      {/* Search */}
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search by name, email, phone..."
          className="border rounded px-3 py-2 w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* TABLE */}
      <div className="bg-white shadow rounded-lg p-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b text-center bg-gray-50 font-semibold">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Project Type</th>
              <th className="p-3">Message</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {paginatedQuotes.map((q) => (
              <tr key={q.id} className="border-b text-center hover:bg-gray-50">
                <td className="p-3">{q.name}</td>
                <td className="p-3">{q.email}</td>
                <td className="p-3">{q.phone}</td>
                <td className="p-3">{q.type}</td>
                <td className="p-3">{q.message}</td>

                <td className="p-3 flex gap-3 justify-center">
                  <button
                    className="text-gray-700"
                    onClick={() => setViewData(q)}
                  >
                    <Eye size={20} />
                  </button>

                  <button
                    className="text-blue-600"
                    onClick={() => setEditData({ ...q })}
                  >
                    <Pencil size={20} />
                  </button>

                  <button
                    className="text-red-600"
                    onClick={() => deleteQuote(q.id)}
                  >
                    <Trash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Previous
          </button>

          <p>
            Page {page} of {totalPages}
          </p>

          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      {/* VIEW MODAL */}
      {viewData && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[400px] shadow-xl relative">
            <button
              className="absolute top-3 right-3"
              onClick={() => setViewData(null)}
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-bold mb-3">Quote Details</h2>
            <div className="space-y-2">
              {Object.entries(viewData).map(([key, value]) => (
                <p key={key} className="text-sm">
                  <strong>{key}</strong>: {String(value)}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* EDIT MODAL */}
      {editData && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[420px] shadow-xl relative">
            <button
              className="absolute top-3 right-3"
              onClick={() => setEditData(null)}
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-bold mb-4">Edit Quote</h2>

            <div className="flex flex-col gap-3">
              <input
                className="border px-3 py-2 rounded"
                value={editData.fullName}
                onChange={(e) =>
                  setEditData((s) => ({ ...s, fullName: e.target.value }))
                }
              />

              <input
                className="border px-3 py-2 rounded"
                value={editData.email}
                onChange={(e) =>
                  setEditData((s) => ({ ...s, email: e.target.value }))
                }
              />

              <input
                className="border px-3 py-2 rounded"
                value={editData.phone}
                onChange={(e) =>
                  setEditData((s) => ({ ...s, phone: e.target.value }))
                }
              />

              <input
                className="border px-3 py-2 rounded"
                value={editData.projectType}
                onChange={(e) =>
                  setEditData((s) => ({ ...s, projectType: e.target.value }))
                }
              />

              <button
                className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
                onClick={saveEdit}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
