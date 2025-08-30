import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // <- router-dom use karo
import { Menu, X } from "lucide-react"; // icons for hamburger/close
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const Nav = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <nav className="bg-white shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left logo */}
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="logo"
              className="h-12 w-12 rounded-full"
            />
            <Link to="/" className="text-xl font-bold text-gray-800">
              Steadwin Group
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 text-black">
            {Nav.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                whileHover={{ scale: 1.1, color: "#155dfc" }}
                className="cursor-pointer hover:underline"
              >
                <Link to={item.path}>{item.name}</Link>
              </motion.div>
            ))}
          </div>

          {/* Connect Button (desktop only) */}
          <div className="hidden md:block">
            <motion.div whileHover={{ scale: 1.1 }}>
              <button className="p-2 border-2 rounded-full px-4 bg-blue-50 hover:bg-blue-700 hover:text-white">
                Connect Us
              </button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 bg-white shadow-lg">
          {Nav.map((item, index) => (
            <motion.div
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-gray-800 text-lg"
            >
              <Link to={item.path} onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            </motion.div>
          ))}
          <motion.div whileHover={{ scale: 1.05 }}>
            <button className="w-full p-2 border-2 rounded-full bg-blue-50 hover:bg-blue-700 hover:text-white">
              Connect Us
            </button>
          </motion.div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
