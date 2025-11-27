import { Routes, Route, Navigate } from "react-router-dom";
import { sideConfig } from "../SideConfig";
import SideBaar from "../Components/SideBaar";
import Parties from "../AdminPage/Pages/Parties";
import Reports from "../AdminPage/Pages/Reports";
import Inventry from "./Pages/Item/Inventry";
import Godown from "./Pages/Item/Godown";
import PaymentOut from "./Pages/Purchases/PaymentOut";
import PurchaseInvoice from "./Pages/Purchases/PurchaseInvoice";
import PurchaseOrder from "./Pages/Purchases/PurchaseOrder";
import PurchaseReturn from "./Pages/Purchases/PurchaseReturn";
import ManageUsers from "./Pages/BusinessTools/ManageUsers";
import PaymentIn from "./Pages/Sales/PaymentIn";
import Quotation from "./Pages/Sales/Quotation";
import SalesInvoice from "./Pages/Sales/SalesInvoice";
import SalesReturn from "./Pages/Sales/SalesReturn";
import CashBank from "./Pages/Accounting/CashBank";
import Expenses from "./Pages/Accounting/Expenses";
import Bills from "./Pages/Accounting/Bills";
import Invoicing from "./Pages/Accounting/Invoicing";
import PosBilling from "./Pages/Accounting/PosBilling";
import Attendance from "./Pages/BusinessTools/StaffAttendance/Attendance";
import Payroll from "./Pages/BusinessTools/StaffAttendance/Payroll";
import HrPortal from "./Pages/BusinessTools/HrPortal";
import OnlineOrders from "./Pages/BusinessTools/OnlineOrders";
import Settings from "./Pages/BusinessTools/Settings";
import Dashboard from "./Dashboard/Dashboard";
import ConsultationLeads from "./Pages/Leads/ConsultationLeads";
import FranchiseLeadsAdmin from "./Pages/Leads/FranchiseLeadsAdmin";
import InvestorLeadsAdmin from "./Pages/Leads/InvestorLeadsAdmin";
import QuoteRequestAdmin from "./Pages/Leads/QuoteRequestAdmin";
import CallRequestAdmin from "./Pages/Leads/CallRequestAdmin";
import NewsletterAdmin from "./Pages/Leads/NewsletterAdmin";
import { useAuth } from "../context/Authcontext";

const Adminpageapp = () => {
 const { user } = useAuth();   // ⭐ ALWAYS read from AuthContext (correct)
     const savedUser = user;
   console.log("Loaded User:", user);
 
   const role = (savedUser?.role).toLowerCase();
   const menuItems = sideConfig[role] || [];

  // agar role galat hua to empty array

  return (
    <div className="flex">
      <div className="fixed">
        <SideBaar
          sideConfig={menuItems}
          userName={savedUser?.name || "Guest"}
          role={savedUser?.role}
        />
      </div>
      <div className="flex-1 overflow-y-auto md:ml-[280px] ml-[100px] rounded-l-2xl">
        <Routes>
          <Route path="/admin" element={<Navigate to="/dashboard" replace />} />

          {/* ab simple pages */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/parties" element={<Parties />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/leads/consultancy-lead" element={<ConsultationLeads />} />
          <Route path="/lead/franchise-lead" element={<FranchiseLeadsAdmin />} />
          <Route path="/lead/investor-lead" element={<InvestorLeadsAdmin />} />
          <Route path="/lead/quote-request" element={<QuoteRequestAdmin />} />
          <Route path="/lead/new-subscriber" element={<NewsletterAdmin />} />
          <Route path="/lead/call-request" element={<CallRequestAdmin />} />
          
          <Route path="/items/inventry" element={<Inventry />} />
          <Route path="/items/godown" element={<Godown />} />
          <Route path="/purchases/paymentOut" element={<PaymentOut />} />
          <Route
            path="/purchases/purchaseInvoice"
            element={<PurchaseInvoice />}
          />
          <Route path="/purchases/purchaseOrder" element={<PurchaseOrder />} />
          <Route
            path="/purchases/PurchaseReturn"
            element={<PurchaseReturn />}
          />

          {/* businessTools */}
          <Route path="/users" element={<ManageUsers />} />
          <Route path="/staffattendance/attendance" element={<Attendance />} />
          <Route path="/staffattendance/payroll" element={<Payroll />} />
          <Route path="/Hrportal" element={<HrPortal />} />
          <Route path="/online" element={<OnlineOrders />} />
          <Route path="/settings" element={<Settings />} />

          {/* sales part */}
          <Route path="/sales/payment" element={<PaymentIn />} />
          <Route path="/quotation" element={<Quotation />} />
          <Route path="/sales" element={<SalesInvoice />} />
          <Route path="/sales/salesreturn" element={<SalesReturn />} />

          {/* bank and accounting part */}
          <Route path="/cash" element={<CashBank />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/invoicing" element={<Invoicing />} />
          <Route path="/bills" element={<Bills />} />
          <Route path="/pos" element={<PosBilling />} />

          {/* fallback */}
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default Adminpageapp;
