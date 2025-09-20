import React from "react";

function StaffAttendance() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-800">
        Staff Attendance & Payroll
      </h1>
      <p className="text-gray-600">
        Monitor daily attendance and manage staff payroll efficiently
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-2xl p-6">
          <h2 className="text-sm text-gray-500">Total Staff</h2>
          <p className="text-2xl font-bold text-blue-600">25</p>
        </div>
        <div className="bg-white shadow rounded-2xl p-6">
          <h2 className="text-sm text-gray-500">Present Today</h2>
          <p className="text-2xl font-bold text-green-600">22</p>
        </div>
        <div className="bg-white shadow rounded-2xl p-6">
          <h2 className="text-sm text-gray-500">Absent Today</h2>
          <p className="text-2xl font-bold text-red-600">3</p>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-lg font-semibold mb-4">Today’s Attendance</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-sm">
              <th className="p-2">Employee</th>
              <th className="p-2">Role</th>
              <th className="p-2">Check-In</th>
              <th className="p-2">Check-Out</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2">Ritik Kumar</td>
              <td className="p-2">Manager</td>
              <td className="p-2">09:05 AM</td>
              <td className="p-2">—</td>
              <td className="p-2 text-green-600 font-medium">Present</td>
            </tr>
            <tr className="border-t">
              <td className="p-2">Aman Verma</td>
              <td className="p-2">Sales Executive</td>
              <td className="p-2">09:30 AM</td>
              <td className="p-2">—</td>
              <td className="p-2 text-green-600 font-medium">Present</td>
            </tr>
            <tr className="border-t">
              <td className="p-2">Rohit Sharma</td>
              <td className="p-2">Accountant</td>
              <td className="p-2">—</td>
              <td className="p-2">—</td>
              <td className="p-2 text-red-600 font-medium">Absent</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StaffAttendance;
