import React from "react";

function Attendance({ attendanceData }) {
  // attendanceData will come from backend
  // Example:
  // [
  //   { id: 1, name: "John Doe", date: "26/09/2025", checkIn: "09:00 AM", checkOut: "06:00 PM", status: "Present" },
  //   { id: 2, name: "Jane Smith", date: "26/09/2025", checkIn: "09:30 AM", checkOut: "05:30 PM", status: "Late" },
  // ]

  return (
    <div className="p-6">
      {/* Page Heading */}
      <h1 className="text-2xl font-bold mb-6">Attendance</h1>

      {/* Search/Filter Bar */}
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Search employee..."
          className="border p-2 rounded w-1/3"
        />
        <input
          type="date"
          className="border p-2 rounded"
        />
      </div>

      {/* Attendance Table */}
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2 border">S.No</th>
            <th className="p-2 border">Employee Name</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Check-In</th>
            <th className="p-2 border">Check-Out</th>
            <th className="p-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData?.length > 0 ? (
            attendanceData.map((record, index) => (
              <tr key={record.id} className="hover:bg-gray-50">
                <td className="p-2 border">{index + 1}</td>
                <td className="p-2 border">{record.name}</td>
                <td className="p-2 border">{record.date}</td>
                <td className="p-2 border">{record.checkIn}</td>
                <td className="p-2 border">{record.checkOut}</td>
                <td className="p-2 border">
                  {record.status === "Present" && (
                    <span className="text-green-600 font-semibold">{record.status}</span>
                  )}
                  {record.status === "Absent" && (
                    <span className="text-red-600 font-semibold">{record.status}</span>
                  )}
                  {record.status === "Late" && (
                    <span className="text-yellow-600 font-semibold">{record.status}</span>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="p-2 border text-center" colSpan="6">
                No attendance records available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Attendance;
