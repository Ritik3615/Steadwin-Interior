import { Routes, Route, Navigate } from "react-router-dom";
import SideBaar from "../Components/SideBaar";
import { sideConfig } from "../SideConfig";
import Dashboard from "../SubAdmin/Pages/Dashboard";
import Sales from "../Pages/Sales";
import Users from "../Pages/Users";

const SubAdminApp = ({ user }) => {
  const role = (user?.role || "subadmin").toLowerCase();
  const menuItems = sideConfig[role] || [];


  return (
    <div className="flex">
      <div className="fixed">
        <SideBaar sideConfig={menuItems} userName={user?.name || "r"} role={role} />
      </div>

      <div className="flex-1 p-6 overflow-y-auto ml-64">
        <Routes>
          <Route path="/subadmin" element={<Navigate to="/subadmin/dashboard" replace />} />
          <Route path="/subadmin/dashboard" element={<Dashboard />} />
          <Route path="/subadmin/sales" element={<Sales />} />
          <Route path="/subadmin/users" element={<Users/>} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default SubAdminApp;
