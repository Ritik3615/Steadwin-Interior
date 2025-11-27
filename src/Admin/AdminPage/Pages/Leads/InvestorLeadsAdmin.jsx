import { useEffect, useMemo, useState } from "react";
import api from "../../../services/api";
import { Trash2, Eye, Download, ChevronLeft, ChevronRight, X } from "lucide-react";

export default function InvestorLeadsAdmin() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // filters
  const [search, setSearch] = useState("");
  const [consentFilter, setConsentFilter] = useState(""); // "", "true", "false"
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
  const [dateFrom, setDateFrom] = useState(""); // yyyy-mm-dd
  const [dateTo, setDateTo] = useState("");

  // sorting
  const [sortKey, setSortKey] = useState("createdAt");
  const [sortDir, setSortDir] = useState("desc");

  // pagination
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // modal
  const [modalRow, setModalRow] = useState(null);

  const fetchAll = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await api.get("/api/investor/all");
      const data = Array.isArray(res.data)
        ? res.data.map((r) => ({
            id: r.id,
            name: r.name || "",
            email: r.email || "",
            phone: r.phone || "",
            company: r.company || "",
            amount: r.amount ?? null,
            expectedInvestment: r.expectedInvestment || "",
            website: r.website || "",
            message: r.message || "",
            consent: !!r.consent,
            createdAt: r.createdAt || null,
          }))
        : [];
      setRows(data);
    } catch (e) {
      console.error("Fetch investor leads failed:", e);
      setError("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  // filter + search
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return rows.filter((r) => {
      const matchesQ = !q ||
        r.name.toLowerCase().includes(q) ||
        r.email.toLowerCase().includes(q) ||
        r.phone.toLowerCase().includes(q) ||
        (r.company || '').toLowerCase().includes(q) ||
        (r.expectedInvestment || '').toLowerCase().includes(q) ||
        (r.website || '').toLowerCase().includes(q) ||
        (r.message || '').toLowerCase().includes(q);

      const matchesConsent = consentFilter === "" ? true : r.consent === (consentFilter === "true");

      const amtOk = (() => {
        const min = minAmount !== "" ? Number(minAmount) : null;
        const max = maxAmount !== "" ? Number(maxAmount) : null;
        const val = r.amount == null ? null : Number(r.amount);
        if (min != null && (val == null || val < min)) return false;
        if (max != null && (val == null || val > max)) return false;
        return true;
      })();

      const dateOk = (() => {
        if (!dateFrom && !dateTo) return true;
        const d = r.createdAt ? new Date(r.createdAt) : null;
        if (!d) return false;
        if (dateFrom) {
          const from = new Date(dateFrom + "T00:00:00");
          if (d < from) return false;
        }
        if (dateTo) {
          const to = new Date(dateTo + "T23:59:59");
          if (d > to) return false;
        }
        return true;
      })();

      return matchesQ && matchesConsent && amtOk && dateOk;
    });
  }, [rows, search, consentFilter, minAmount, maxAmount, dateFrom, dateTo]);

  // sort
  const sorted = useMemo(() => {
    const arr = [...filtered];
    arr.sort((a, b) => {
      const va = a[sortKey];
      const vb = b[sortKey];
      let cmp = 0;
      if (sortKey === "createdAt") {
        cmp = new Date(va || 0) - new Date(vb || 0);
      } else if (sortKey === "amount") {
        cmp = (Number(va) || 0) - (Number(vb) || 0);
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

  const onHeader = (key) => {
    if (sortKey === key) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else { setSortKey(key); setSortDir("asc"); }
  };

  const remove = async (id) => {
    if (!confirm("Delete this investor request?")) return;
    try {
      await api.delete(`/api/investor/${id}`);
      setRows((prev) => prev.filter((r) => r.id !== id));
    } catch (e) {
      console.error("Delete failed:", e);
      alert("Delete failed");
    }
  };

  const exportCSV = () => {
    const headers = [
      "id","createdAt","name","email","phone","company","amount","expectedInvestment","website","consent","message"
    ];
    const rowsCsv = sorted.map((r) => headers.map((h) => {
      const v = r[h];
      const s = (v == null ? "" : String(v)).replaceAll("\n"," ").replaceAll('"','""');
      return `"${s}"`;
    }));
    const csv = [headers.join(","), ...rowsCsv.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `investor_requests_${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (loading) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-6 w-full">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Investor Requests</h1>
        <button onClick={exportCSV} className="flex items-center gap-2 border px-3 py-1.5 rounded-lg hover:bg-gray-50">
          <Download size={16}/> Export CSV
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 mb-4">
        <input className="border rounded-lg px-3 py-2" placeholder="Search name, email, phone, company, website, message" value={search} onChange={(e)=>{setSearch(e.target.value); setPage(1);}} />
        <select className="border rounded-lg px-3 py-2" value={consentFilter} onChange={(e)=>{setConsentFilter(e.target.value); setPage(1);}}>
          <option value="">All Consents</option>
          <option value="true">Consented</option>
          <option value="false">No Consent</option>
        </select>
        <input className="border rounded-lg px-3 py-2" type="number" placeholder="Min Amount" value={minAmount} onChange={(e)=>{setMinAmount(e.target.value); setPage(1);}} />
        <input className="border rounded-lg px-3 py-2" type="number" placeholder="Max Amount" value={maxAmount} onChange={(e)=>{setMaxAmount(e.target.value); setPage(1);}} />
        <input className="border rounded-lg px-3 py-2" type="date" value={dateFrom} onChange={(e)=>{setDateFrom(e.target.value); setPage(1);}} />
        <input className="border rounded-lg px-3 py-2" type="date" value={dateTo} onChange={(e)=>{setDateTo(e.target.value); setPage(1);}} />
        <button className="border rounded-lg px-3 py-2 hover:bg-gray-50" onClick={()=>{setSearch(""); setConsentFilter(""); setMinAmount(""); setMaxAmount(""); setDateFrom(""); setDateTo(""); setPage(1);}}>Reset</button>
      </div>

      {error && <div className="mb-3 text-red-600">{error}</div>}

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 border-b">
            <tr>
              <Th onClick={()=>onHeader("createdAt")} active={sortKey==="createdAt"} dir={sortDir}>Date</Th>
              <Th onClick={()=>onHeader("name")} active={sortKey==="name"} dir={sortDir}>Name</Th>
              <Th onClick={()=>onHeader("email")} active={sortKey==="email"} dir={sortDir}>Email</Th>
              <Th onClick={()=>onHeader("phone")} active={sortKey==="phone"} dir={sortDir}>Phone</Th>
              <Th onClick={()=>onHeader("company")} active={sortKey==="company"} dir={sortDir}>Company</Th>
              <Th onClick={()=>onHeader("amount")} active={sortKey==="amount"} dir={sortDir}>Amount</Th>
              <Th onClick={()=>onHeader("expectedInvestment")} active={sortKey==="expectedInvestment"} dir={sortDir}>Expected</Th>
              <Th onClick={()=>onHeader("consent")} active={sortKey==="consent"} dir={sortDir}>Consent</Th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pageItems.map((r)=> (
              <tr key={r.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{r.createdAt ? new Date(r.createdAt).toLocaleString() : "—"}</td>
                <td className="p-3">{r.name}</td>
                <td className="p-3">{r.email}</td>
                <td className="p-3">{r.phone}</td>
                <td className="p-3">{r.company}</td>
                <td className="p-3">{r.amount != null ? new Intl.NumberFormat().format(r.amount) : "—"}</td>
                <td className="p-3">{r.expectedInvestment}</td>
                <td className="p-3">
                  <span className={`inline-flex items-center gap-1 border px-2 py-0.5 rounded-full text-xs ${r.consent ? "bg-green-100 text-green-800 border-green-300" : "bg-gray-100 text-gray-700 border-gray-300"}`}>
                    {r.consent ? "Consented" : "No"}
                  </span>
                </td>
                <td className="p-3">
                  <div className="flex items-center justify-center gap-3">
                    <button className="text-gray-700" title="View" onClick={()=>setModalRow(r)}><Eye size={18}/></button>
                    <button className="text-red-600" title="Delete" onClick={()=>remove(r.id)}><Trash2 size={18}/></button>
                  </div>
                </td>
              </tr>
            ))}
            {pageItems.length === 0 && (
              <tr><td colSpan={9} className="p-6 text-center text-gray-500">No investor requests found.</td></tr>
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
      {modalRow && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">Investor Details</h3>
              <button onClick={()=>setModalRow(null)} className="text-gray-600 hover:text-black"><X size={18}/></button>
            </div>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <Info label="Submitted" value={modalRow.createdAt ? new Date(modalRow.createdAt).toLocaleString() : "—"} />
              <Info label="Name" value={modalRow.name} />
              <Info label="Email" value={modalRow.email} />
              <Info label="Phone" value={modalRow.phone} />
              <Info label="Company" value={modalRow.company} />
              <Info label="Amount" value={modalRow.amount != null ? new Intl.NumberFormat().format(modalRow.amount) : "—"} />
              <Info label="Expected" value={modalRow.expectedInvestment} />
              <Info label="Website" value={modalRow.website} />
              <div className="sm:col-span-2">
                <div className="text-gray-500 text-xs mb-1">Message</div>
                <div className="border rounded-lg p-3 bg-gray-50 min-h-[72px] whitespace-pre-wrap">{modalRow.message || "—"}</div>
              </div>
              <div className="sm:col-span-2 flex items-center gap-2 mt-2">
                <span className="text-xs text-gray-500">Consent:</span>
                <span className={`inline-flex items-center gap-1 border px-2 py-0.5 rounded-full text-xs ${modalRow.consent ? "bg-green-100 text-green-800 border-green-300" : "bg-gray-100 text-gray-700 border-gray-300"}`}>
                  {modalRow.consent ? "Consented" : "No"}
                </span>
              </div>
            </div>
            <div className="p-4 border-t flex items-center justify-end gap-2">
              <button className="border px-3 py-1.5 rounded-lg" onClick={()=>setModalRow(null)}>Close</button>
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

function Info({ label, value }) {
  return (
    <div>
      <div className="text-gray-500 text-xs mb-1">{label}</div>
      <div className="border rounded-lg p-2 bg-white">{value || "—"}</div>
    </div>
  );
}
