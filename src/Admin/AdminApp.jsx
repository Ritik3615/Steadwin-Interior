import { Routes, Route, Navigate } from "react-router-dom";
import { sideConfig } from "./SideConfig";
import * as Pages from "./Pages/Pages";
import SideBaar from "./Components/SideBaar";
import Dashboard from "./Pages/Dashboard";
import Sales from "./Pages/Sales";
import Users from "./Pages/Users";

// const pageMapping = {
//   Dashboard: Pages.Dashboard,
//   Parties: Pages.Parties,
//   Items: Pages.Items,
//   Sales: Pages.Sales,
//   "Quotation/Estimate": Pages.Quotation,
//   "Payment in": Pages.Payment,
//   "Sales-Return": Pages.SalesReturn,
//   Purchases: Pages.Purchases,
//   Reports: Pages.Reports,
//   "Cash and Bank": Pages.Cash,
//   "E-Invoicing": Pages.Invoicing,
//   "Automated-Bills": Pages.Bills,
//   Expenses: Pages.Expenses,
//   "POS Billing": Pages.POS,
//   "Staff Attendance and Payroll": Pages.StaffAttendance,
//   "Manage Users": Pages.Users,
//   "Online Orders": Pages.Online,
//   Settings: Pages.Settings,
// };

const AdminApp = ({ user }) => {
  // role fix
  // const role = user?.role || "admin";
  const role = (user?.role || "").toLowerCase();
  const menuItems = sideConfig[role] || []; // agar role galat hua to empty array
  
  
  

  return (
    <div className="flex">
      <div className="fixed">
        <SideBaar
          sideConfig={menuItems}
          userName={user?.name || "Ritik"}
          role={role}
        />
      </div>
      <div className="flex-1 p-6 overflow-y-auto ml-58 ">
        <Routes>
          {/* {menuItems.map((item) => {
            const Component = pageMapping[item.name] || Pages.Dashboard;
            return (
              <Route
                key={item.name}
                path={item.path} // yeh /dashboard, /items, /sales, etc hai
                element={<Component />}
              />
            );
          })} */}
          <Route path="/admin" element={<Navigate to="/dashboard" replace />} />

          {/* ab simple pages */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/users" element={<Users />} />

          {/* fallback */}
          <Route path="*" element={<Dashboard />} />
          {/* <Route path="*" element={<Pages.Sales />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default AdminApp;
