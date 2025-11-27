import { useEffect, useState } from "react";
import { Trash2, Search } from "lucide-react";
import api from "../../../services/api"; // your axios instance

export default function NewsletterAdmin() {
  const [list, setList] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("ALL");
  const [loading, setLoading] = useState(true);

  // Fetch all newsletter subscribers
  const fetchData = async () => {
    try {
      const res = await api.get("api/newsletter");
      setList(res.data);
      setFiltered(res.data);
    } catch (err) {
      console.error("Failed fetch:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Search + filter
  useEffect(() => {
    let data = [...list];

    if (search.trim()) {
      data = data.filter((i) =>
        i.email.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (typeFilter !== "ALL") {
      data = data.filter((i) => i.type === typeFilter);
    }

    setFiltered(data);
  }, [search, typeFilter, list]);

  const deleteItem = async (id) => {
    if (!confirm("Delete this subscriber?")) return;

    try {
      await api.delete(`/api/newsletter/${id}`);
      fetchData();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  if (loading) return <div className="p-5">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Newsletter Subscribers</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Search */}
        <div className="flex items-center gap-2 border px-3 py-2 rounded-lg shadow-sm w-full md:w-1/2">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search email..."
            className="w-full outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Filter by type */}
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="border px-3 py-2 rounded-lg shadow-sm"
        >
          <option value="ALL">All Types</option>
          <option value="Home">Home</option>
          <option value="Footer">Footer</option>
          <option value="Blog">Blog</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b text-left">
              <th className="p-3">Email</th>
              <th className="p-3">Type</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center py-6 text-gray-500">
                  No subscribers found.
                </td>
              </tr>
            )}

            {filtered.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{item.email}</td>
                <td className="p-3">{item.type}</td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
