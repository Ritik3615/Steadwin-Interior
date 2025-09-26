import React from "react";

function HrPortal() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <div className="flex justify-center space-x-6 border-b bg-white shadow-sm p-4">
        {[
          { name: "HRIS", active: true },
          { name: "Payroll" },
          { name: "Attendance" },
          { name: "Performance" },
          { name: "Operations" },
          { name: "Onboarding" },
          { name: "Recruit" },
        ].map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md font-medium ${
              tab.active
                ? "text-pink-600 border-b-2 border-pink-600"
                : "text-gray-700 hover:text-pink-600"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto py-12 px-6">
        {/* Left Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h4 className="text-pink-600 font-semibold mb-2">
            Manage your HR Information
          </h4>
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Digitize HR data, give power in <br /> the hands of employees
          </h1>
          <p className="text-gray-600 mb-6">
            Employee profiles, company directory, org-chart and more! We make it
            really easy for you to manage HR data with self-service options – on
            web or mobile – which ensures it’s always up-to-date.
          </p>
          <div className="flex space-x-6 text-pink-600 font-medium">
            <span>📊 Automated reports</span>
            <span>⭐ Customize data fields</span>
          </div>
        </div>

        {/* Right Card */}
        <div className="lg:w-1/2 bg-white shadow-lg border rounded-lg p-6 w-full max-w-md">
          <div className="mb-4">
            <label className="block font-medium mb-1">
              Input field #1: Name
            </label>
            <input
              type="text"
              placeholder="Social Security Number"
              className="w-full border rounded px-3 py-2 mb-2"
            />
            <div className="flex justify-between items-center text-gray-500 text-sm">
              <span>Input value type</span>
              <span className="italic">Required</span>
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">
              Expiry date field: Name
            </label>
            <input
              type="text"
              placeholder="SSID Expiry Date"
              className="w-full border rounded px-3 py-2 mb-2"
            />
            <div className="flex justify-between items-center text-gray-500 text-sm">
              <span>Input value type</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HrPortal;
