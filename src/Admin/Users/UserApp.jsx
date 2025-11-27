import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SideBaar from "../Components/SideBaar";
import ConsultationLeads from "../AdminPage/Pages/Leads/ConsultationLeads";
import FranchiseLeadsAdmin from "../AdminPage/Pages/Leads/FranchiseLeadsAdmin";
import InvestorLeadsAdmin from "../AdminPage/Pages/Leads/InvestorLeadsAdmin";
import QuoteRequestAdmin from "../AdminPage/Pages/Leads/QuoteRequestAdmin";
import NewsletterAdmin from "../AdminPage/Pages/Leads/NewsletterAdmin";
import CallRequestAdmin from "../AdminPage/Pages/Leads/CallRequestAdmin";
import Dashboard from "../AdminPage/Dashboard/Dashboard";
import { sideConfig } from "../SideConfig";
import { useAuth } from "../context/Authcontext";


function UserApp() {
  const { user } = useAuth();   // ⭐ ALWAYS read from AuthContext (correct)
    const savedUser = user;
  console.log("Loaded User:", user);

  const role = (savedUser?.role || "USER").toLowerCase();
  const menuItems = sideConfig[role] || [];


  return (
    <div>
      <div className="fixed">
        <SideBaar
          sideConfig={menuItems}
          userName={savedUser?.name || "Guest"}
          role={savedUser?.role}
        />
      </div>
      <div className="flex-1 overflow-y-auto md:ml-[280px] ml-[100px] rounded-l-2xl">
        <Routes>
          <Route
            path="/user"
            element={<Navigate to="/user/dashboard" replace />}
          />
          <Route path="/user/dashboard" element={<Dashboard />} />
          <Route
            path="leads/consultancy-lead"
            element={<ConsultationLeads />}
          />
          <Route path="lead/franchise-lead" element={<FranchiseLeadsAdmin />} />
          <Route path="lead/investor-lead" element={<InvestorLeadsAdmin />} />
          <Route path="lead/quote-request" element={<QuoteRequestAdmin />} />
          <Route path="lead/new-subscriber" element={<NewsletterAdmin />} />
          <Route path="lead/call-request" element={<CallRequestAdmin />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default UserApp;
