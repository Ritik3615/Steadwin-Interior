import React from "react";
import Footer from "../../Components/Footer";

function Privicy() {
  return (
    <>
      <div className="text-3xl font-bold text-red-500 p-32 pt-8 pb-0 text-center">
        Terms & Conditions
      </div>
      <div className="px-10 shadow-2xl bg-blue-100 m-20 mt-10 mb-10 p-10 pt-8 rounded-2xl">
        <h1 className="text-xl font-semibold mb-4">General Terms</h1>
        <ul className="list-disc list-inside space-y-2 shadow-2xl p-10 rounded-2xl">
          <li>
            Clients must provide complete and accurate information before the
            start of the project.
          </li>
          <li>Payments should be made on time as per the agreed schedule.</li>
          <li>
            Any delay in payment may lead to suspension or cancellation of
            services.
          </li>
          <li>
            Once a design is approved, major changes will involve extra cost and
            extended timelines.
          </li>
          <li>
            The company will not be responsible for delays caused by external
            factors (material shortage, vendor issues, natural events).
          </li>
          <li>
            Clients should not engage third-party vendors without prior
            approval.
          </li>
          <li>
            Quotations and timelines are subject to change if the scope of work
            is modified.
          </li>
        </ul>

        <h1 className="text-xl font-semibold mt-6 mb-4">
          Confidentiality & Information Use
        </h1>
        <ul className="list-disc list-inside space-y-2 shadow-2xl rounded-2xl p-10">
          <li>
            All client information, drawings, and project details will be kept
            confidential.
          </li>
          <li>
            The company will not share sensitive client data with third parties
            without permission.
          </li>
          <li>
            All designs, concepts, 3D renders, and technical drawings remain the
            company’s intellectual property unless agreed otherwise.
          </li>
          <li>
            Clients should not share or distribute company-provided documents,
            designs, or pricing with others without approval.
          </li>
          <li>
            Project photos may be used for marketing or portfolio purposes, but
            sensitive details will never be disclosed.
          </li>
          <li>
            Any data collected (contact details, requirements, budgets) will
            only be used for service purposes and not misused.
          </li>
          <li>
            The company is not liable for data loss or breaches caused by
            third-party systems or cyberattacks beyond its control.
          </li>
        </ul>
      </div>
        <Footer/>
    </>
  );
}

export default Privicy;
