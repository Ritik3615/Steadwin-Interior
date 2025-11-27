import React from "react";
import Adminpageapp from "./AdminPage/Adminpageapp";
import SubAdminApp from "./SubAdmin/SubAdminApp";
import { useAuth } from "../Admin/context/Authcontext";
import UserApp from "./Users/UserApp";

function AdminApp() {
  const { user } = useAuth();   // Always pull from context

  // BLOCK 1: No user loaded yet
  if (!user) return null;

  // BLOCK 2: User has no role yet (rare, async load)
  if (!user.role) return null;

  // BLOCK 3: Render correct app
  if (user.role === "ADMIN") return <Adminpageapp />;
  if (user.role === "SUBADMIN") return <SubAdminApp />;
  if (user.role === "USER") return <UserApp />;


  // BLOCK 4: Fallback (stops weird states)
  return <div>Unauthorized</div>;
}

export default AdminApp;
