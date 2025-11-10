import React, { useState } from "react";

function DateRangeDropdown() {
  const [selectedRange, setSelectedRange] = useState("today");

  const formatDate = (date) =>
    date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  const ranges = [
    {
      label: "Today",
      getRange: () => {
        const today = new Date();
        return { start: today, end: today };
      },
    },
    {
      label: "Yesterday",
      getRange: () => {
        const d = new Date();
        d.setDate(d.getDate() - 1);
        return { start: d, end: d };
      },
    },
    {
      label: "This Week",
      getRange: () => {
        const today = new Date();
        const first = new Date(today);
        first.setDate(today.getDate() - today.getDay() + 1);
        const last = new Date(first);
        last.setDate(first.getDate() + 6);
        return { start: first, end: last };
      },
    },
    {
      label: "Last Week",
      getRange: () => {
        const today = new Date();
        const first = new Date(today);
        first.setDate(today.getDate() - today.getDay() - 6);
        const last = new Date(first);
        last.setDate(first.getDate() + 6);
        return { start: first, end: last };
      },
    },
    {
      label: "Last 7 Days",
      getRange: () => {
        const today = new Date();
        const start = new Date(today);
        start.setDate(today.getDate() - 6);
        return { start, end: today };
      },
    },
    {
      label: "This Month",
      getRange: () => {
        const today = new Date();
        const start = new Date(today.getFullYear(), today.getMonth(), 1);
        const end = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        return { start, end };
      },
    },
    {
      label: "Previous Month",
      getRange: () => {
        const today = new Date();
        const start = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        const end = new Date(today.getFullYear(), today.getMonth(), 0);
        return { start, end };
      },
    },
    {
      label: "Last 30 Days",
      getRange: () => {
        const today = new Date();
        const start = new Date(today);
        start.setDate(today.getDate() - 29);
        return { start, end: today };
      },
    },
    {
      label: "This Quarter",
      getRange: () => {
        const today = new Date();
        const q = Math.floor(today.getMonth() / 3);
        const start = new Date(today.getFullYear(), q * 3, 1);
        const end = new Date(today.getFullYear(), q * 3 + 3, 0);
        return { start, end };
      },
    },
    {
      label: "Previous Quarter",
      getRange: () => {
        const today = new Date();
        const q = Math.floor(today.getMonth() / 3);
        const start = new Date(today.getFullYear(), (q - 1) * 3, 1);
        const end = new Date(today.getFullYear(), q * 3, 0);
        return { start, end };
      },
    },
    {
      label: "Current Fiscal Year",
      getRange: () => {
        const today = new Date();
        const start = new Date(today.getFullYear(), 3, 1);
        const end = new Date(today.getFullYear() + 1, 2, 31);
        return { start, end };
      },
    },
  ];

  const handleChange = (e) => {
    const selected = ranges.find((r) => r.label === e.target.value);
    if (!selected) return;

    const { start, end } = selected.getRange();
    const payload = {
      label: selected.label,
      startDate: start.toISOString().split("T")[0],
      endDate: end.toISOString().split("T")[0],
    };

    // Update state
    setSelectedRange({ ...payload });

    // Example POST action
    console.log("POST payload onChange:", payload);
    // fetch("/api/save-date-range", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
  };

  return (
    <div className="p-3 border rounded w-96">
      <label htmlFor="dateRange" className="block mb-2 font-semibold">
        Select Date Range
      </label>
      <select
        id="dateRange"
        onChange={handleChange}
        className="border p-2 rounded w-full"
        defaultValue=""
      >
        <option value="" disabled>
          -- Choose --
        </option>
        {ranges.map((r) => {
          const { start, end } = r.getRange();
          return (
            <option key={r.label} value={r.label}>
              {r.label} ({formatDate(start)} to {formatDate(end)})
            </option>
          );
        })}
      </select>

      {selectedRange && (
        <div className="mt-3 p-2 border rounded bg-blue-50">
          <strong>Selected:</strong> {selectedRange.label} <br />
          <strong>From:</strong> {selectedRange.startDate} <strong>To:</strong>{" "}
          {selectedRange.endDate}
        </div>
      )}
    </div>
  );
}

export default DateRangeDropdown;
