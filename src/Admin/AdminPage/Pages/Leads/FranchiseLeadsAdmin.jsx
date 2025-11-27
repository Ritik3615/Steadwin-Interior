import { useEffect, useMemo, useState } from "react";
import api from "../../../services/api";
import { Pencil, Trash2, Eye, CheckCircle, X, Download, ChevronLeft, ChevronRight, StickyNote } from "lucide-react";

const STATUSES = ["Pending", "In Progress", "Completed", "Rejected", "Followed Up"];
const STATUS_COLORS = {
  Pending: "bg-yellow-100 text-yellow-800 border-yellow-300",
  "In Progress": "bg-blue-100 text-blue-800 border-blue-300",
  Completed: "bg-green-100 text-green-800 border-green-300",
  Rejected: "bg-red-100 text-red-800 border-red-300",
  "Followed Up": "bg-purple-100 text-purple-800 border-purple-300",
};

export default function FranchiseLeadsAdmin() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  // filters & query
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  // sorting
  const [sortKey, setSortKey] = useState("createdAt");
  const [sortDir, setSortDir] = useState("desc");

  // pagination
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // editing
  const [statusEditId, setStatusEditId] = useState(null);
  const [statusDraft, setStatusDraft] = useState("Pending");
  const [notesEditId, setNotesEditId] = useState(null);
  const [notesDraft, setNotesDraft] = useState("");

  // modal
  const [modalLead, setModalLead] = useState(null);

  const fetchAll = async () => {
    try {
      setLoading(true);
      const res = await api.get("/api/franchise");
      const data = Array.isArray(res.data)
        ? res.data.map((r) => ({
            id: r.id,
            title: r.title || "",
            firstName: r.firstName || "",
            lastName: r.lastName || "",
            phone: r.phone || "",
            email: r.email || "",
            state: r.state || "",
            pinCode: r.pinCode || "",
            businessSpace: r.businessSpace || "",
            budget: r.budget || "",
            businessType: r.businessType || "",
            howYouKnow: r.howYouKnow || "",
            status: r.status || "Pending",
            notes: r.notes || "",
            createdAt: r.createdAt || null,
          }))
        : [];
      setRows(data);
    } catch (e) {
      console.error("Fetch franchise leads failed:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  // computed options
  const states = useMemo(() => Array.from(new Set(rows.map((r) => r.state).filter(Boolean))).sort(), [rows]);
  const types = useMemo(() => Array.from(new Set(rows.map((r) => r.businessType).filter(Boolean))).sort(), [rows]);

  // filter + search
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return rows.filter((r) => {
      const name = `${r.firstName} ${r.lastName}`.trim();
      const matchesQ = !q ||
        name.toLowerCase().includes(q) ||
        r.email.toLowerCase().includes(q) ||
        r.phone.toLowerCase().includes(q) ||
        (r.state || '').toLowerCase().includes(q) ||
        (r.businessType || '').toLowerCase().includes(q) ||
        (r.budget || '').toLowerCase().includes(q) ||
        (r.notes || '').toLowerCase().includes(q);

      const matchesStatus = !statusFilter || (r.status || "Pending") === statusFilter;
      const matchesState = !stateFilter || r.state === stateFilter;
      const matchesType = !typeFilter || r.businessType === typeFilter;

      return matchesQ && matchesStatus && matchesState && matchesType;
    });
  }, [rows, search, statusFilter, stateFilter, typeFilter]);

  // sort
  const sorted = useMemo(() => {
    const arr = [...filtered];
    arr.sort((a, b) => {
      const va = a[sortKey];
      const vb = b[sortKey];
      let cmp = 0;
      if (sortKey === "createdAt") {
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

  // pagination
  const total = sorted.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const pageClamped = Math.min(page, totalPages);
  const start = (pageClamped - 1) * pageSize;
  const pageItems = sorted.slice(start, start + pageSize);

  // helpers
  const onHeader = (key) => {
    if (sortKey === key) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const Badge = ({ value }) => (
    <span className={`inline-flex items-center gap-1 border px-2 py-0.5 rounded-full text-xs ${STATUS_COLORS[value] || "bg-gray-100 text-gray-800 border-gray-300"}`}>
      {value || "Pending"}
    </span>
  );

  // actions
  const openStatus = (lead) => { setStatusEditId(lead.id); setStatusDraft(lead.status || "Pending"); };
  const saveStatus = async (id) => {
    try {
      setRows((prev) => prev.map((r) => (r.id === id ? { ...r, status: statusDraft } : r)));
      await api.put(`/api/franchise/${id}/status`, { status: statusDraft });
    } catch (e) {
      console.error("Status update failed:", e);
      fetchAll();
    } finally {
      setStatusEditId(null); setStatusDraft("Pending");
    }
  };

  const openNotes = (lead) => { setNotesEditId(lead.id); setNotesDraft(lead.notes || ""); };
  const saveNotes = async (id) => {
    try {
      setRows((prev) => prev.map((r) => (r.id === id ? { ...r, notes: notesDraft } : r)));
      await api.put(`/api/franchise/${id}/notes`, { notes: notesDraft });
    } catch (e) {
      console.error("Notes update failed:", e);
      fetchAll();
    } finally {
      setNotesEditId(null); setNotesDraft("");
    }
  };

  const quickMark = async (id, value) => {
    try {
      setRows((prev) => prev.map((r) => (r.id === id ? { ...r, status: value } : r)));
      await api.put(`/api/franchise/${id}/status`, { status: value });
    } catch (e) {
      console.error("Quick mark failed:", e);
      fetchAll();
    }
  };

  const remove = async (id) => {
    if (!confirm("Delete this lead?")) return;
    try {
      await api.delete(`/api/franchise/${id}`);
      setRows((prev) => prev.filter((r) => r.id !== id));
    } catch (e) {
      console.error("Delete failed:", e);
    }
  };

  const exportCSV = () => {
    const headers = [
      "id","createdAt","title","firstName","lastName","email","phone","state","pinCode","businessSpace","budget","businessType","howYouKnow","status","notes"
    ];
    const rowsCsv = sorted.map((r) => headers.map((h) => (r[h] ?? "").toString().replaceAll("\n"," ").replaceAll('"','""')));
    const csv = [headers.join(","), ...rowsCsv.map((r) => r.map((c) => `"${c}` + `"`).join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `franchise_leads_${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (loading) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-6 w-full">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Franchise Leads</h1>
        <button onClick={exportCSV} className="flex items-center gap-2 border px-3 py-1.5 rounded-lg hover:bg-gray-50">
          <Download size={16}/> Export CSV
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 mb-4">
        <input className="border rounded-lg px-3 py-2" placeholder="Search name, email, phone, state, type, budget, notes" value={search} onChange={(e)=>{setSearch(e.target.value); setPage(1);}} />
        <select className="border rounded-lg px-3 py-2" value={statusFilter} onChange={(e)=>{setStatusFilter(e.target.value); setPage(1);}}>
          <option value="">All Statuses</option>
          {STATUSES.map((s)=>(<option key={s} value={s}>{s}</option>))}
        </select>
        <select className="border rounded-lg px-3 py-2" value={stateFilter} onChange={(e)=>{setStateFilter(e.target.value); setPage(1);}}>
          <option value="">All States</option>
          {states.map((s)=>(<option key={s} value={s}>{s}</option>))}
        </select>
        <select className="border rounded-lg px-3 py-2" value={typeFilter} onChange={(e)=>{setTypeFilter(e.target.value); setPage(1);}}>
          <option value="">All Business Types</option>
          {types.map((t)=>(<option key={t} value={t}>{t}</option>))}
        </select>
        <button className="border rounded-lg px-3 py-2 hover:bg-gray-50" onClick={()=>{setSearch(""); setStatusFilter(""); setStateFilter(""); setTypeFilter(""); setPage(1);}}>Reset</button>
        <div></div>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 border-b">
            <tr>
              <Th onClick={()=>onHeader("createdAt")} active={sortKey==="createdAt"} dir={sortDir}>Date</Th>
              <Th onClick={()=>onHeader("firstName")} active={sortKey==="firstName"} dir={sortDir}>Name</Th>
              <Th onClick={()=>onHeader("email")} active={sortKey==="email"} dir={sortDir}>Email</Th>
              <Th onClick={()=>onHeader("phone")} active={sortKey==="phone"} dir={sortDir}>Phone</Th>
              <Th onClick={()=>onHeader("state")} active={sortKey==="state"} dir={sortDir}>State</Th>
              <Th onClick={()=>onHeader("businessType")} active={sortKey==="businessType"} dir={sortDir}>Type</Th>
              <Th onClick={()=>onHeader("budget")} active={sortKey==="budget"} dir={sortDir}>Budget</Th>
              <Th>Status</Th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pageItems.map((r)=> (
              <tr key={r.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{r.createdAt ? new Date(r.createdAt).toLocaleString() : "—"}</td>
                <td className="p-3">{[r.title, r.firstName, r.lastName].filter(Boolean).join(" ")}</td>
                <td className="p-3">{r.email}</td>
                <td className="p-3">{r.phone}</td>
                <td className="p-3">{r.state}</td>
                <td className="p-3">{r.businessType}</td>
                <td className="p-3">{r.budget}</td>
                <td className="p-3">
                  {statusEditId === r.id ? (
                    <div className="flex items-center gap-2">
                      <select className="border rounded px-2 py-1" value={statusDraft} onChange={(e)=>setStatusDraft(e.target.value)}>
                        {STATUSES.map((s)=> <option key={s} value={s}>{s}</option>)}
                      </select>
                      <button className="text-green-700" title="Save" onClick={()=>saveStatus(r.id)}><CheckCircle size={18}/></button>
                      <button className="text-gray-600" title="Cancel" onClick={()=>{setStatusEditId(null);}}><X size={16}/></button>
                    </div>
                  ) : (
                    <Badge value={r.status} />
                  )}
                </td>
                <td className="p-3">
                  <div className="flex items-center justify-center gap-3">
                    <button className="text-blue-600" title="Edit Status" onClick={()=>openStatus(r)}><Pencil size={18}/></button>
                    <button className="text-amber-700" title="Notes" onClick={()=>openNotes(r)}><StickyNote size={18}/></button>
                    <button className="text-gray-700" title="View" onClick={()=>setModalLead(r)}><Eye size={18}/></button>
                    <button className="text-green-700 border px-2 py-0.5 rounded" onClick={()=>quickMark(r.id, "Completed")} title="Mark Completed">Done</button>
                    <button className="text-purple-700 border px-2 py-0.5 rounded" onClick={()=>quickMark(r.id, "Followed Up")} title="Mark Followed Up">Followed</button>
                    <button className="text-red-600" title="Delete" onClick={()=>remove(r.id)}><Trash2 size={18}/></button>
                  </div>
                </td>
              </tr>
            ))}
            {pageItems.length === 0 && (
              <tr><td colSpan={9} className="p-6 text-center text-gray-500">No leads found.</td></tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between p-3">
          <div className="text-sm text-gray-600">Showing {total === 0 ? 0 : start + 1}–{Math.min(start + pageSize, total)} of {total}</div>
          <div className="flex items-center gap-3">
            <select className="border rounded px-2 py-1" value={pageSize} onChange={(e)=>{setPageSize(Number(e.target.value)); setPage(1);}}>
              {[10,20,50,100].map(n=> <option key={n} value={n}>{n} / page</option>)}
            </select>
            <button className="border rounded p-1 disabled:opacity-50" disabled={pageClamped<=1} onClick={()=>setPage(p=>Math.max(1,p-1))}><ChevronLeft size={18}/></button>
            <span className="text-sm">Page {pageClamped} / {totalPages}</span>
            <button className="border rounded p-1 disabled:opacity-50" disabled={pageClamped>=totalPages} onClick={()=>setPage(p=>Math.min(totalPages,p+1))}><ChevronRight size={18}/></button>
          </div>
        </div>
      </div>

      {/* Details Modal */}
      {modalLead && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">Lead Details</h3>
              <button onClick={()=>setModalLead(null)} className="text-gray-600 hover:text-black"><X size={18}/></button>
            </div>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <Info label="Created At" value={modalLead.createdAt ? new Date(modalLead.createdAt).toLocaleString() : "—"} />
              <Info label="Name" value={[modalLead.title, modalLead.firstName, modalLead.lastName].filter(Boolean).join(" ")} />
              <Info label="Email" value={modalLead.email} />
              <Info label="Phone" value={modalLead.phone} />
              <Info label="State" value={modalLead.state} />
              <Info label="PIN" value={modalLead.pinCode} />
              <Info label="Business Space" value={modalLead.businessSpace} />
              <Info label="Budget" value={modalLead.budget} />
              <Info label="Business Type" value={modalLead.businessType} />
              <Info label="How You Know" value={modalLead.howYouKnow} />
              <div className="sm:col-span-2 flex items-center gap-2 mt-2">
                <span className="text-xs text-gray-500">Status:</span>
                <span><Badge value={modalLead.status} /></span>
              </div>
              <div className="sm:col-span-2">
                <div className="text-gray-500 text-xs mb-1">Notes</div>
                <div className="border rounded-lg p-3 bg-gray-50 min-h-[72px] whitespace-pre-wrap">{modalLead.notes || "—"}</div>
              </div>
            </div>
            <div className="p-4 border-t flex items-center justify-end gap-2">
              <button className="border px-3 py-1.5 rounded-lg" onClick={()=>setModalLead(null)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Notes inline editor */}
      {notesEditId && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">Edit Notes</h3>
              <button onClick={()=>{setNotesEditId(null); setNotesDraft("");}} className="text-gray-600 hover:text-black"><X size={18}/></button>
            </div>
            <div className="p-4">
              <textarea className="w-full border rounded-lg p-3 min-h-[160px]" value={notesDraft} onChange={(e)=>setNotesDraft(e.target.value)} placeholder="Write internal notes..."/>
            </div>
            <div className="p-4 border-t flex items-center justify-end gap-2">
              <button className="border px-3 py-1.5 rounded-lg" onClick={()=>{setNotesEditId(null); setNotesDraft("");}}>Cancel</button>
              <button className="bg-green-600 text-white px-3 py-1.5 rounded-lg" onClick={()=>saveNotes(notesEditId)}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Th({ children, active, dir, onClick }) {
  return (
    <th className="p-3 cursor-pointer select-none" onClick={onClick} title="Sort">
      <div className="flex items-center gap-2">
        <span>{children}</span>
        {active && <span className="text-xs opacity-60">{dir === "asc" ? "▲" : "▼"}</span>}
      </div>
    </th>
  );
}

function Badge({ value }) {
  return (
    <span className={`inline-flex items-center gap-1 border px-2 py-0.5 rounded-full text-xs ${STATUS_COLORS[value] || "bg-gray-100 text-gray-800 border-gray-300"}`}>
      {value || "Pending"}
    </span>
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
