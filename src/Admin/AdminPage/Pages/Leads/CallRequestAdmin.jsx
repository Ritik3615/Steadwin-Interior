import { useEffect, useState } from "react";
import api from "../../../services/api";
import { Trash2, Eye, Search } from "lucide-react";

export default function CallRequestAdmin() {
  const [requests, setRequests] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const fetchRequests = async () => {
    try {
      const res = await api.get("/api/call/requestForm");
      setRequests(res.data);
      setFiltered(res.data);
    } catch (err) {
      console.error("Failed to fetch call requests", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  // Search filter
  useEffect(() => {
    const q = search.toLowerCase();
    setFiltered(
      requests.filter(
        (r) =>
          r.name?.toLowerCase().includes(q) ||
          String(r.phone).includes(q) ||
          r.email?.toLowerCase().includes(q)
      )
    );
  }, [search, requests]);

  const deleteRequest = async (id) => {
    if (!confirm("Delete this Call Request?")) return;

    try {
      await api.delete(`/api/call/${id}`);
      fetchRequests();
    } catch (err) {
      console.error(err);
      alert("Failed to delete.");
    }
  };

  if (loading)
    return <div className="p-5 text-lg font-medium">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Call Request Leads</h1>

      {/* Search */}
      <div className="mb-4 flex items-center gap-3 w-full max-w-md border px-3 py-2 rounded-lg shadow-sm">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search by name, phone, email..."
          className="outline-none w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-3">Name</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Email</th>
              <th className="p-3">Message</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-4 text-center text-gray-500">
                  No results found.
                </td>
              </tr>
            ) : (
              filtered.map((item) => (
                <tr
                  className="border-b hover:bg-gray-50 transition"
                  key={item.id}
                >
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.phone}</td>
                  <td className="p-3">{item.email}</td>
                  <td className="p-3 truncate max-w-xs">{item.message}</td>

                  <td className="p-3 flex justify-center gap-4">
                    {/* VIEW */}
                    <button
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => setSelected(item)}
                    >
                      <Eye size={20} />
                    </button>

                    {/* DELETE */}
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => deleteRequest(item.id)}
                    >
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Call Request Details</h2>

            <div className="space-y-2">
              <p>
                <strong>Name:</strong> {selected.name}
              </p>
              <p>
                <strong>Phone:</strong> {selected.phone}
              </p>
              <p>
                <strong>Email:</strong> {selected.email}
              </p>
              <p>
                <strong>Message:</strong>
                <br />
                <span className="text-gray-700">{selected.message}</span>
              </p>
            </div>

            <div className="flex justify-end mt-5">
              <button
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                onClick={() => setSelected(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
