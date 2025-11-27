import { useEffect, useMemo, useState } from "react";
import api from "../../../services/api";
import { Pencil, Trash2, Eye, CheckCircle, X, Download, ChevronLeft, ChevronRight } from "lucide-react";

const STATUS_COLORS = {
  Pending: "bg-yellow-100 text-yellow-800 border-yellow-300",
  "In Progress": "bg-blue-100 text-blue-800 border-blue-300",
  Completed: "bg-green-100 text-green-800 border-green-300",
  "Followed Up": "bg-purple-100 text-purple-800 border-purple-300",
};

const STATUSES = ["Pending", "In Progress", "Completed", "Followed Up"];

export default function ConsultationLeads() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  // UI state
  const [search, setSearch] = useState("");
  const [serviceFilter, setServiceFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const [sortKey, setSortKey] = useState("timestamp");
  const [sortDir, setSortDir] = useState("desc"); // asc | desc

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [statusEditId, setStatusEditId] = useState(null);
  const [statusDraft, setStatusDraft] = useState("");

  const [modalLead, setModalLead] = useState(null);

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const res = await api.get("/api/consultation");
      // Normalize minimal fields to avoid undefined
      const data = Array.isArray(res.data)
        ? res.data.map((r) => ({
            id: r.id,
            name: r.name || "",
            email: r.email || "",
            phone: r.phone || "",
            service: r.service || "",
            message: r.message || "",
            status: r.status || "Pending",
            timestamp: r.timestamp || null,
          }))
        : [];
      setLeads(data);
    } catch (e) {
      console.error("Error fetching leads:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // Derived lists
  const services = useMemo(() => {
    const set = new Set(leads.map((l) => l.service).filter(Boolean));
    return Array.from(set).sort();
  }, [leads]);

  // Filtering
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return leads.filter((l) => {
      const matchesSearch = !q
        || l.name?.toLowerCase().includes(q)
        || l.email?.toLowerCase().includes(q)
        || l.phone?.toLowerCase().includes(q)
        || l.service?.toLowerCase().includes(q)
        || l.message?.toLowerCase().includes(q);

      const matchesService = !serviceFilter || l.service === serviceFilter;
      const matchesStatus = !statusFilter || (l.status || "Pending") === statusFilter;

      // Date range (assuming ISO or parseable timestamp string)
      let inRange = true;
      if (dateFrom) {
        inRange = inRange && new Date(l.timestamp || 0) >= new Date(dateFrom);
      }
      if (dateTo) {
        // include the whole day
        const end = new Date(dateTo);
        end.setHours(23, 59, 59, 999);
        inRange = inRange && new Date(l.timestamp || 0) <= end;
      }

      return matchesSearch && matchesService && matchesStatus && inRange;
    });
  }, [leads, search, serviceFilter, statusFilter, dateFrom, dateTo]);

  // Sorting
  const sorted = useMemo(() => {
    const arr = [...filtered];
    arr.sort((a, b) => {
      const va = a[sortKey];
      const vb = b[sortKey];

      let cmp = 0;
      if (sortKey === "timestamp") {
        cmp = new Date(va || 0) - new Date(vb || 0);
      } else {
        const sa = (va ?? "").toString().toLowerCase();
        const sb = (vb ?? "").toString().toLowerCase();
        cmp = sa.localeCompare(sb, undefined, { numeric: true });
      }
      return sortDir === "asc" ? cmp : -cmp;
    });
    return arr;
  }, [filtered, sortKey, sortDir]);

  // Pagination
  const total = sorted.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const pageClamped = Math.min(page, totalPages);
  const start = (pageClamped - 1) * pageSize;
  const pageItems = sorted.slice(start, start + pageSize);

  const onHeaderClick = (key) => {
    if (sortKey === key) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  // Status update
  const openStatusEdit = (lead) => {
    setStatusEditId(lead.id);
    setStatusDraft(lead.status || "Pending");
  };

  const saveStatus = async (id) => {
    try {
      // optimistic update
      setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status: statusDraft } : l)));
      await api.put(`/api/consultation/${id}/status`, { status: statusDraft });
    } catch (e) {
      console.error("Error updating status:", e);
      // refetch to be safe
      fetchLeads();
    } finally {
      setStatusEditId(null);
      setStatusDraft("");
    }
  };

  const markQuick = async (id, value) => {
    try {
      setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status: value } : l)));
      await api.put(`/api/consultation/${id}/status`, { status: value });
    } catch (e) {
      console.error("Error quick-mark:", e);
      fetchLeads();
    }
  };

  const deleteLead = async (id) => {
    if (!confirm("Delete this lead?")) return;
    try {
      await api.delete(`/api/consultation/${id}`);
      setLeads((prev) => prev.filter((l) => l.id !== id));
    } catch (e) {
      console.error("Error deleting:", e);
    }
  };

  // Export CSV (Excel can open CSV)
  const exportCSV = () => {
    const headers = ["id","name","email","phone","service","status","timestamp","message"]; 
    const rows = sorted.map((l) => headers.map((h) => (l[h] ?? "").toString().replaceAll("\n", " ").replaceAll('"', '""')));
    const csv = [headers.join(","), ...rows.map((r) => r.map((c) => `"${c}"`).join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `consultation_leads_${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const Badge = ({ value }) => (
    <span className={`inline-flex items-center gap-1 border px-2 py-0.5 rounded-full text-xs ${STATUS_COLORS[value] || "bg-gray-100 text-gray-800 border-gray-300"}`}>
      {value || "Pending"}
    </span>
  );

  const HeaderCell = ({ col, label }) => (
    <th
      className="p-3 cursor-pointer select-none"
      onClick={() => onHeaderClick(col)}
      title="Sort"
    >
      <div className="flex items-center gap-2">
        <span>{label}</span>
        {sortKey === col && (
          <span className="text-xs opacity-60">{sortDir === "asc" ? "▲" : "▼"}</span>
        )}
      </div>
    </th>
  );

  if (loading) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-6 w-full">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Consultation Leads</h1>
        <button onClick={exportCSV} className="flex items-center gap-2 border px-3 py-1.5 rounded-lg hover:bg-gray-50">
          <Download size={16} /> Export CSV
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 mb-4">
        <input
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          placeholder="Search name, email, phone, service, message"
          className="border rounded-lg px-3 py-2"
        />
        <select value={serviceFilter} onChange={(e) => { setServiceFilter(e.target.value); setPage(1); }} className="border rounded-lg px-3 py-2">
          <option value="">All Services</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <select value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }} className="border rounded-lg px-3 py-2">
          <option value="">All Statuses</option>
          {STATUSES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <input type="date" value={dateFrom} onChange={(e) => { setDateFrom(e.target.value); setPage(1); }} className="border rounded-lg px-3 py-2" />
        <input type="date" value={dateTo} onChange={(e) => { setDateTo(e.target.value); setPage(1); }} className="border rounded-lg px-3 py-2" />
        <button onClick={() => { setSearch(""); setServiceFilter(""); setStatusFilter(""); setDateFrom(""); setDateTo(""); setPage(1); }} className="border rounded-lg px-3 py-2 hover:bg-gray-50">Reset</button>
      </div>

      <div className="bg-white shadow rounded-lg p-0 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 border-b">
            <tr>
              <HeaderCell col="name" label="Name" />
              <HeaderCell col="email" label="Email" />
              <HeaderCell col="phone" label="Phone" />
              <HeaderCell col="service" label="Service" />
              <HeaderCell col="timestamp" label="Timestamp" />
              <HeaderCell col="status" label="Status" />
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pageItems.map((lead) => (
              <tr key={lead.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{lead.name}</td>
                <td className="p-3">{lead.email}</td>
                <td className="p-3">{lead.phone}</td>
                <td className="p-3">{lead.service}</td>
                <td className="p-3">{lead.timestamp ? new Date(lead.timestamp).toLocaleString() : "—"}</td>
                <td className="p-3">
                  {statusEditId === lead.id ? (
                    <div className="flex items-center gap-2">
                      <select className="border rounded px-2 py-1" value={statusDraft} onChange={(e) => setStatusDraft(e.target.value)}>
                        {STATUSES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <button onClick={() => saveStatus(lead.id)} className="text-green-600" title="Save">
                        <CheckCircle size={20} />
                      </button>
                      <button onClick={() => { setStatusEditId(null); setStatusDraft(""); }} className="text-gray-500" title="Cancel">
                        <X size={18} />
                      </button>
                    </div>
                  ) : (
                    <Badge value={lead.status || "Pending"} />
                  )}
                </td>
                <td className="p-3">
                  <div className="flex items-center justify-center gap-3">
                    <button className="text-blue-600" title="Edit status" onClick={() => openStatusEdit(lead)}>
                      <Pencil size={18} />
                    </button>
                    <button className="text-red-600" title="Delete" onClick={() => deleteLead(lead.id)}>
                      <Trash2 size={18} />
                    </button>
                    <button className="text-gray-700" title="View" onClick={() => setModalLead(lead)}>
                      <Eye size={18} />
                    </button>
                    <button className="text-green-700 border px-2 py-0.5 rounded" title="Mark Completed" onClick={() => markQuick(lead.id, "Completed")}>Done</button>
                    <button className="text-purple-700 border px-2 py-0.5 rounded" title="Mark Followed Up" onClick={() => markQuick(lead.id, "Followed Up")}>Followed</button>
                  </div>
                </td>
              </tr>
            ))}
            {pageItems.length === 0 && (
              <tr>
                <td colSpan={7} className="p-6 text-center text-gray-500">No leads found.</td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination bar */}
        <div className="flex items-center justify-between p-3">
          <div className="text-sm text-gray-600">
            Showing {total === 0 ? 0 : start + 1}–{Math.min(start + pageSize, total)} of {total}
          </div>
          <div className="flex items-center gap-3">
            <select
              className="border rounded px-2 py-1"
              value={pageSize}
              onChange={(e) => { setPageSize(Number(e.target.value)); setPage(1); }}
            >
              {[10, 20, 50, 100].map((n) => <option key={n} value={n}>{n} / page</option>)}
            </select>
            <button className="border rounded p-1 disabled:opacity-50" disabled={pageClamped <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))}>
              <ChevronLeft size={18} />
            </button>
            <span className="text-sm">Page {pageClamped} / {totalPages}</span>
            <button className="border rounded p-1 disabled:opacity-50" disabled={pageClamped >= totalPages} onClick={() => setPage((p) => Math.min(totalPages, p + 1))}>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Details modal */}
      {modalLead && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">Lead Details</h3>
              <button onClick={() => setModalLead(null)} className="text-gray-500 hover:text-black"><X size={18} /></button>
            </div>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <Info label="Name" value={modalLead.name} />
              <Info label="Email" value={modalLead.email} />
              <Info label="Phone" value={modalLead.phone} />
              <Info label="Service" value={modalLead.service} />
              <Info label="Timestamp" value={modalLead.timestamp ? new Date(modalLead.timestamp).toLocaleString() : "—"} />
              <div className="sm:col-span-2">
                <div className="text-gray-500 text-xs mb-1">Message</div>
                <div className="border rounded-lg p-3 bg-gray-50 min-h-[72px] whitespace-pre-wrap">{modalLead.message || "—"}</div>
              </div>
              <div className="sm:col-span-2 flex items-center gap-2 mt-2">
                <span className="text-xs text-gray-500">Status:</span>
                <Badge value={modalLead.status || "Pending"} />
              </div>
            </div>
            <div className="p-4 border-t flex items-center justify-end gap-2">
              <button className="border px-3 py-1.5 rounded-lg" onClick={() => setModalLead(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <div className="text-gray-500 text-xs mb-1">{label}</div>
      <div className="border rounded-lg p-2 bg-white">{value || "—"}</div>
    </div>
  );
}
