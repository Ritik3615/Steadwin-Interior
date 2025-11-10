import React, { useState } from "react";
import { motion } from "motion/react";
import { Link , useNavigate } from "react-router-dom";
import { Settingsitems } from "../settingsitems";
import { useAuth } from "../context/Authcontext";

function SideBaar({ sideConfig, userName, role }) {
  const {logout} = useAuth();
  const nevigate  = useNavigate();

  const handleLogout = () =>{
    logout();
    nevigate("/login");
  }

  const [openSettings, setOpenSettings] = useState(false);
  const [open, setOpen] = useState({});
  const [overlay, setOverlay] = useState(false); // overlay state
  const prefix =
    role === "admin" ? "/admin" : role === "subadmin" ? "/subadmin" : "/user";

  const config = sideConfig || {
    general: [],
    accounting: [],
    businessTools: [],
  };

  const renderItems = (items) =>
    items.map((item) => {
      const Icon = item.icon;

      if (item.children) {
        return (
          <div key={item.name}>
            {/* Parent Button */}
            <button
              onClick={() =>
                setOpen((prev) => ({ ...prev, [item.name]: !prev[item.name] }))
              }
              className="flex items-center justify-between gap-3 px-3 py-2 rounded-md hover:bg-slate-400 transition-colors w-full text-left"
            >
              <div className="flex items-center gap-3">
                {Icon && <Icon size={18} />}
                <span>{item.name}</span>
              </div>
              <span className="text-sm">{open[item.name] ? "-" : "+"}</span>
            </button>

            {/* Children with smooth slide animation */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ml-8 space-y-1 ${
                open[item.name] ? "max-h-96 mt-1" : "max-h-0"
              }`}
            >
              {item.children.map((child) => {
                const ChildIcon = child.icon;
                return (
                  <Link
                    to={`${prefix}${child.path}`}
                    key={child.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
                  >
                    {ChildIcon && <ChildIcon size={16} />}
                    <span>{child.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      }

      return (
        <Link
          to={`${prefix}${item.path}`}
          key={item.name}
          className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white hover:text-black transition-colors"
        >
          {Icon && <Icon size={18} />}
          <span>{item.name}</span>
        </Link>
      );
    });

  return (
    <>
      {/* Overlay */}
      {overlay && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setOverlay(false)}
        ></div>
      )}

      {/* Sidebar */}
      <section className="fixed left-0 top-0 w-1/6 mx-1 rounded-r-2xl h-screen bg-blue-900 text-white flex flex-col justify-between z-40">
        {/* Top user info */}
        <Link
          to="/admin/settings"
          className="flex items-center p-2 m-2 border-b-2 border-black sticky hover:bg-white hover:text-black rounded-4xl"
          onClick={() =>
            openSettings ? setOpenSettings(false) : setOpenSettings(true)
          }
        >
          <div className="bg-amber-300 rounded-full h-10 w-10 flex items-center justify-center">
            {userName[0]}
          </div>
          <div className="ml-3">
            <div className="font-medium">{userName}</div>
            <div className="text-xs text-gray-300">{role}</div>
          </div>
        </Link>

        {openSettings && (
          <motion.div
            className="fixed inset-0 max-h-1/5 w-1/6 mt-20 ml-1 space-y-1 bg-slate-300 text-black rounded-lg "
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            // exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
          >
            {Settingsitems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  to={item.path}
                  key={item.name}
                  className="flex items-center text-xs gap-2 px-3 py-2 rounded-md hover:bg-blue-500"
                >
                  {Icon && <Icon size={16} />}
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </motion.div>
        )}

        {/* Mobile toggle button */}
        {/* <button
            className="ml-auto text-white md:hidden"
            onClick={() => setOverlay(!overlay)}
          >
            ☰
          </button> */}
        {/* <div className="border">

          </div> */}

        {/* Sidebar menu */}
        <div className="px-2 mt-3 flex-1 overflow-y-auto text-sm">
          <div className="text-gray-300 uppercase text-xs px-3 mt-3 mb-1">
            General
          </div>
          {renderItems(config.general)}

          <div className="text-gray-300 uppercase text-xs px-3 mt-4 mb-1">
            Account & Billing
          </div>
          {renderItems(config.accounting)}

          <div className="text-gray-300 uppercase text-xs px-3 mt-4 mb-1">
            Business Tools
          </div>
          {renderItems(config.businessTools)}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-gray-500 text-xs text-gray-300 space-y-1 text-center pb-3 bg-slate-600 rounded-b-2xl">
          <div className="flex justify-center text-center border-2 m-auto p-1 rounded-lg bg-blue-400 text-white text-xs hover:bg-red-700 w-20">
            <button className=" " onClick={handleLogout}>Logout</button>
          </div>
          <div className=" m-2">
            &copy; 2024 Steadwin Group
          </div>
        </div>
      </section>
    </>
  );
}

export default SideBaar;
