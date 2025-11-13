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

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
  ];

  const handleSearch = (query) => setSearchQuery(query);

  return (
    <nav className="bg-white shadow-2xl w-full fixed top-0 z-50">
      {/* Top Blue Line */}
      <div className="h-7 text-white hidden md:flex justify-between bg-[#2b5d7c] items-center px-12 border-b text-sm">
        {/* Left side: mail + phone */}
        <div className="flex gap-6 items-center">
          <a
            href="mailto:info@Steadwin.in"
            className="flex items-center gap-1 font-medium hover:text-blue-300 transition"
          >
            {/* <span>Mail:</span> */}
            <Mail
              className="h-4 w-4"
              style={{
                stroke: "url(#grad1)",
              }}
            />

            <svg width="0" height="0">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff5f6d" />
                  <stop offset="100%" stopColor="#ffc371" />
                </linearGradient>
              </defs>
            </svg>

            <span>info@Steadwin.in</span>
          </a>

          <a
            href="tel:+918792695400"
            className="flex items-center gap-2 font-medium hover:text-blue-300 transition"
          >
            {/* <span>Phone:</span> */}
            <PhoneForwardedIcon className="h-4 w-4 text-green-600" />
            <span>+91 8792695400</span>
          </a>
        </div>

        {/* Right side: social icons */}
        <div className="flex gap-3 items-center">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-4 w-4 text-blue-600 hover:text-blue-300 transition" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube className="h-4 w-4 text-red-950 hover:text-blue-300 transition" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="h-4 w-4 text-blue-900 hover:text-blue-300 transition" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="h-4 w-4 text-red-500 hover:text-blue-300 transition" />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between h-20 w-full px-8">
        {/* ---------- LEFT SECTION ---------- */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src={logo} alt="logo" className="h-12 w-12 rounded-full" />
          </Link>
          <Link to="/" className="text-3xl font-bold text-gray-800">
            <span className="text-[#2b5d7c]">STEAD</span>
            <span>WIN</span>
          </Link>
        </div>

        {/* ---------- CENTER SECTION ---------- */}
        <div className="hidden md:flex items-center space-x-8 text-black">
          {Nav.filter((item) => !item.hidden && item.name !== "").map(
            (item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, color: "#2b5d7c" }}
                className="cursor-pointer hover:underline"
              >
                <Link to={item.path}>{item.name}</Link>
              </motion.div>
            )
          )}
        </div>

        {/* ---------- RIGHT SECTION ---------- */}
        <div className="hidden md:flex">
          <Link
            to="/frenchises"
            className="bg-[#2b5d7c] text-white font-medium px-6 py-2 rounded-3xl hover:bg-[#1f445c] transition"
          >
            Frenchises
          </Link>
        </div>

        {/* ---------- MOBILE MENU BUTTON ---------- */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ---------- MOBILE DROPDOWN ---------- */}
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

          {/* Frenchises Button in Mobile */}
          {/* <Link
            to="/frenchises"
            onClick={() => setIsOpen(false)}
            className="block bg-[#2b5d7c] text-white text-center px-4 py-2 rounded-3xl shadow hover:bg-[#1f445c] transition"
          >
            Frenchises
          </Link> */}

          {/* Services Dropdown */}
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

          {/* Search Bar in Mobile */}
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
            <Search size={18} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>

          {/* Login Button */}
          {/* <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="block bg-blue-600 text-white text-center px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition"
          >
            Login
          </Link> */}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
