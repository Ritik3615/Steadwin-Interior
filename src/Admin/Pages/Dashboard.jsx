import React from "react";

function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-800">
        Welcome to Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-2xl p-6">
          <h2 className="text-sm text-gray-500">Total Sales</h2>
          <p className="text-2xl font-bold text-blue-600">₹45,000</p>
        </div>
        <div className="bg-white shadow rounded-2xl p-6">
          <h2 className="text-sm text-gray-500">Total Orders</h2>
          <p className="text-2xl font-bold text-green-600">120</p>
        </div>
        <div className="bg-white shadow rounded-2xl p-6">
          <h2 className="text-sm text-gray-500">Customers</h2>
          <p className="text-2xl font-bold text-purple-600">89</p>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Sales</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-sm">
              <th className="p-2">Date</th>
              <th className="p-2">Customer</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2">17 Sep 2025</td>
              <td className="p-2">Rohit Sharma</td>
              <td className="p-2">₹2,500</td>
              <td className="p-2 text-green-600 font-medium">Paid</td>
            </tr>
            <tr className="border-t">
              <td className="p-2">16 Sep 2025</td>
              <td className="p-2">Virat Kohli</td>
              <td className="p-2">₹5,000</td>
              <td className="p-2 text-yellow-600 font-medium">Pending</td>
            </tr>
            <tr className="border-t">
              <td className="p-2">15 Sep 2025</td>
              <td className="p-2">MS Dhoni</td>
              <td className="p-2">₹1,800</td>
              <td className="p-2 text-green-600 font-medium">Paid</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
