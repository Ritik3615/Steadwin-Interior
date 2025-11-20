import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Search,
  Mail,
  PhoneForwardedIcon,
  Linkedin,
  Youtube,
  Facebook,
  Instagram,
} from "lucide-react";
import logo from "../assets/logo.png";
import TopBar from "../Pages/Singlepage/Topbaar";
import { MdExpandCircleDown } from "react-icons/md";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [serviceHover, setServiceHover] = useState(false); // <--- ADDED

  const Nav = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Services", path: "/Services" },
    { name: "Latest News", path: "/news" },
    { name: "Gallery", path: "/Gallery" },
    { name: "Investors", path: "/investors" },
    { name: "Brouchure", path: "/Brouchure" },
    { name: "Contact", path: "/Contact" },
    { name: "Admin", path: "/Admin", hidden: true },
    { name: "Subadmin", path: "/subadmin", hidden: true },
  ];

  const serviceCategories = [
    { name: "Consultancy", path: "/services/consultancy" },
    { name: "Developer", path: "/services/developer" },
    { name: "Interior", path: "/Services/Interior" },
    { name: "Railing", path: "/services/railing" },
    // { name: "view All", path: "/services" },
  ];

  const handleSearch = (query) => setSearchQuery(query);

  return (
    <nav className="bg-white shadow-2xl w-full fixed top-0 z-50">
      {/* Top Blue Line */}
      <TopBar />

      <div className="flex items-center justify-between h-20 w-full px-8">
        {/* LEFT */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src={logo} alt="logo" className="h-12 w-12 rounded-full" />
          </Link>
          <Link to="/" className="text-3xl font-bold text-gray-800">
            <span className="text-[#2b5d7c]">STEAD</span>
            <span>WIN</span>
          </Link>
        </div>

        {/* CENTER */}
        <div className="hidden md:flex items-center space-x-8 text-black relative">
          {Nav.filter((item) => !item.hidden).map((item, index) => {
            if (item.name === "Services") {
              return (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setServiceHover(true)}
                  onMouseLeave={() => setServiceHover(false)}
                >
                  <div className="flex items-center gap-1 cursor-pointer">
                    <span className="hover:underline hover:text-[#2b5d7c]">
                      Services
                    </span>

                    {/* Arrow */}
                    <motion.span
                      initial={{ rotate: 0 }}
                      animate={{ rotate: serviceHover ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-sm"
                    >
                      <MdExpandCircleDown/>
                    </motion.span>
                  </div>

                  {/* DROPDOWN */}
                  {serviceHover && (
                    <div
                      className="absolute left-0 top-full bg-white shadow-xl 
                      rounded-lg w-44 py-2 z-50"
                    >
                      {serviceCategories.map((srv, idx) => (
                        <Link
                          key={idx}
                          to={srv.path}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#2b5d7c] hover:underline"
                        >
                          {srv.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, color: "#2b5d7c" }}
                className="cursor-pointer hover:underline"
              >
                <Link to={item.path}>{item.name}</Link>
              </motion.div>
            );
          })}
        </div>

        {/* RIGHT */}
        <div className="hidden md:flex">
          <Link
            to="/Franchise"
            className="bg-[#2b5d7c] text-white font-medium px-6 py-2 rounded-3xl hover:bg-[#1f445c] transition"
          >
            Frenchises
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ---------- MOBILE MENU ---------- */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 space-y-4">
          {Nav.filter((item) => !item.hidden).map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-[#2b5d7c] font-medium"
            >
              {item.name}
            </Link>
          ))}

          <Link
            to="/Franchise"
            onClick={() => setIsOpen(false)}
            className="block bg-[#2b5d7c] text-white text-center px-4 py-2 rounded-3xl shadow hover:bg-[#1f445c] transition"
          >
            Frenchises
          </Link>

          {/* <div className="space-y-2">
            <div className="font-medium text-gray-800">Services</div>
            {serviceCategories.map((srv, idx) => (
              <Link
                key={idx}
                to={srv.path}
                onClick={() => setIsOpen(false)}
                className="block pl-3 text-gray-600 hover:text-[#2b5d7c]"
              >
                {srv.name}
              </Link>
            ))}
          </div> */}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
