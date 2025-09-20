import { Link } from "react-router-dom";
import { useState } from "react";

function SideBaar({ sideConfig, userName, role }) {
  const [open, setOpen] = useState({});
   const prefix =
    role === "admin" ? "/admin" : role === "subadmin" ? "/subadmin" : "/user";

  return (
    <section className="relative w-64 h-screen bg-blue-900 text-white flex flex-col justify-between">
      {/* top user info */}
      <div className="flex items-center p-4 border-b border-gray-700 sticky">
        <div className="bg-amber-300 rounded-full h-10 w-10 flex items-center justify-center">
          {userName[0]}
        </div>
        <div className="ml-3">
          <div className="font-medium">{userName}</div>
          <div className="text-xs text-gray-400">{role}</div>
        </div>
      </div>

      {/* sidebar menu */}
      <div className="px-2 mt-3 flex-1 overflow-y-auto text-sm">
        {/* General */}
        <div className="text-gray-400 uppercase text-xs px-3 mt-3 mb-1">
          General
        </div>
        {sideConfig
          .filter((item) =>
            [
              "Dashboard",
              "Parties",
              "Items",
              "Sales",
              "Quotation/Estimate",
              "Payment in",
              "Sales-Return",
              "Purchases",
              "Reports",
            ].includes(item.name)
          )
          .map((item) => {
            const Icon = item.icon;
            return (
              <Link
                to={`/Admin${item.path}`}
                key={item.name}
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white hover:text-black transition-colors"
              >
                <Icon size={18} />
                <span>{item.name}</span>
              </Link>
            );
          })}

        {/* Account & Billing */}
        <div className="text-gray-400 uppercase text-xs px-3 mt-4 mb-1">
          Account & Billing
        </div>
        {sideConfig
          .filter((item) =>
            [
              "Cash and Bank",
              "E-Invoicing",
              "Automated-Bills",
              "Expenses",
              "POS Billing",
            ].includes(item.name)
          )
          .map((item) => {
            const Icon = item.icon;
            return (
              <Link
                to={`/Admin${item.path}`}
                key={item.name}
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-red-700 transition-colors"
              >
                <Icon size={18} />
                <span>{item.name}</span>
              </Link>
            );
          })}

        {/* Business Tools */}
        <div className="text-gray-400 uppercase text-xs px-3 mt-4 mb-1">
          Business Tools
        </div>
        {sideConfig
          .filter((item) =>
            [
              "Attendance & Payroll >",
              "Manage Users",
              "Online Orders",
              "Settings",
            ].includes(item.name)
          )
          .map((item) => {
            const Icon = item.icon;

            // agr kisi ka children hai toh drowpdown bnao

            if (item.children) {
              return (
                <div key={item.name}>
                  <button
                    onClick={() =>
                      setOpen((prev) => ({
                        ...prev,
                        [item.name]: !prev[item.name],
                      }))
                    }
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-400 transition-colors w-full text-left"
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </button>

                  {open[item.name] && (
                    <div className="ml-8 mt-1 space-y-1">
                      {item.children.map((child) => {
                        const ChildIcon = child.icon;
                        return (
                          <Link
                            to={`${prefix}${item.child}`}
                            key={child.name}
                            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
                          >
                            <ChildIcon size={16} />
                            <span>{child.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                 to={`${prefix}${item.path}`}
                key={item.name}
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
              >
                <Icon size={18} />
                <span>{item.name}</span>
              </Link>
            );
          })}
      </div>

      {/* footer */}
      <div className="p-4 text-gray-500 text-xs text-center">
        100% Secure | ISO Certified
      </div>
    </section>
  );
}

export default SideBaar;
