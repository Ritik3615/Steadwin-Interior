import { Routes, Route, Navigate } from "react-router-dom";
import SideBaar from "../Components/SideBaar";
import { sideConfig } from "../SideConfig";
import Dashboard from "../SubAdmin/Pages/Dashboard";
import Sales from "../Pages/Sales";
import Users from "../Pages/Users";
import FranchiseLeadsAdmin from "../AdminPage/Pages/Leads/FranchiseLeadsAdmin";
import InvestorLeadsAdmin from "../AdminPage/Pages/Leads/InvestorLeadsAdmin";
import QuoteRequestAdmin from "../AdminPage/Pages/Leads/QuoteRequestAdmin";
import NewsletterAdmin from "../AdminPage/Pages/Leads/NewsletterAdmin";
import CallRequestAdmin from "../AdminPage/Pages/Leads/CallRequestAdmin";
import ConsultationLeads from "../AdminPage/Pages/Leads/ConsultationLeads";

const SubAdminApp = () => {
  const savedUser = JSON.parse(localStorage.getItem("user"));

  const role = (savedUser?.role || "subadmin").toLowerCase();
  const menuItems = sideConfig[role] || [];

  return (
    <div className="flex">
      <div className="fixed">
        <SideBaar
          sideConfig={menuItems}
          userName={savedUser?.name || "Guest"}
          role={role}
        />
      </div>

      <div className="flex-1 px-6 overflow-y-auto ml-[270px]">
        <Routes>
          <Route path="/subadmin" element={<Navigate to="/subadmin/dashboard" replace />} />
          <Route path="/subadmin/dashboard" element={<Dashboard />} />
          <Route path="/leads/consultancy-lead" element={<ConsultationLeads />} />
          <Route path="/lead/franchise-lead" element={<FranchiseLeadsAdmin />} />
          <Route path="/lead/investor-lead" element={<InvestorLeadsAdmin />} />
          <Route path="/lead/quote-request" element={<QuoteRequestAdmin />} />
          <Route path="/lead/new-subscriber" element={<NewsletterAdmin />} />
          <Route path="/lead/call-request" element={<CallRequestAdmin />} />
          <Route path="/subadmin/sales" element={<Sales />} />
          <Route path="/subadmin/users" element={<Users />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
};


export default SubAdminApp;
