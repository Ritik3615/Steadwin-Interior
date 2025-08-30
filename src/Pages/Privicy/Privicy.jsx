import React from "react";
import Footer from "../../Components/Footer";

function Privicy() {
  return (
    <>
      {/* Page Header */}
      <div className="text-4xl font-extrabold text-gray-800 pt-12 pb-6 text-center">
        Terms & Conditions
        <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mt-2 rounded-full"></div>
      </div>

      {/* Content Box */}
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-10 m-8">
        
        {/* General Terms */}
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">
          General Terms
        </h1>
        <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
          <li>Clients must provide complete and accurate information before the start of the project.</li>
          <li>Payments should be made on time as per the agreed schedule.</li>
          <li>Any delay in payment may lead to suspension or cancellation of services.</li>
          <li>Once a design is approved, major changes will involve extra cost and extended timelines.</li>
          <li>The company will not be responsible for delays caused by external factors (material shortage, vendor issues, natural events).</li>
          <li>Clients should not engage third-party vendors without prior approval.</li>
          <li>Quotations and timelines are subject to change if the scope of work is modified.</li>
        </ul>

        {/* Confidentiality */}
        <h1 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Confidentiality & Information Use
        </h1>
        <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
          <li>All client information, drawings, and project details will be kept confidential.</li>
          <li>The company will not share sensitive client data with third parties without permission.</li>
          <li>All designs, concepts, 3D renders, and technical drawings remain the company’s intellectual property unless agreed otherwise.</li>
          <li>Clients should not share or distribute company-provided documents, designs, or pricing with others without approval.</li>
          <li>Project photos may be used for marketing or portfolio purposes, but sensitive details will never be disclosed.</li>
          <li>Any data collected (contact details, requirements, budgets) will only be used for service purposes and not misused.</li>
          <li>The company is not liable for data loss or breaches caused by third-party systems or cyberattacks beyond its control.</li>
        </ul>
      </div>

      <Footer />
    </>
  );
}

export default Privicy;
