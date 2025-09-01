import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const Nav = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Contact", path: "/Contact" },
    { name: "Latest News", path: "/news" },
    { name: "Admin", path: "/Admin", hidden: true },
    { name: "Subadmin", path: "/subadmin", hidden: true },
  ];  

  const serviceCategories = [
    { name: "Steadwin Interior", path: "Services/Interior" },
    { name: "Steadwin Railing", path: "services/railing" },
    { name: "Steadwin Developer", path: "/services/developer" },
    { name: "Steadwin Consultancy", path: "/services/consultancy" },
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }
    const results = Nav.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        (!item.hidden && item.name.toLowerCase().includes(query.toLowerCase()))
    );
    setSearchResults(results);
  };

  return (
    <nav className="bg-white shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-12 w-12 rounded-full" />
            <Link to="/" className="text-xl font-bold text-gray-800">
              <span className="text-blue-700">STEAD</span>WIN
            </Link>
          </div>

          {/* Center Nav (Desktop Only) */}
          <div className="hidden md:flex items-center space-x-8 text-black">
            {Nav.filter((item) => !item.hidden && item.name !== "Latest News").map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, color: "#155dfc" }}
                className="cursor-pointer hover:underline"
              >
                <Link to={item.path}>{item.name}</Link>
              </motion.div>
            ))}

            {/* Services Dropdown */}
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setServiceOpen(true)}
              onMouseLeave={() => setServiceOpen(false)}
            >
              <div className="flex items-center gap-1 hover:text-blue-600 font-medium">
                Services <ChevronDown size={16} />
              </div>
              {serviceOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  
                  className="absolute top-10 left-0 bg-white shadow-xl rounded-xl p-3 w-56 space-y-2"
                >
                  {serviceCategories.map((srv, idx) => (
                    <Link
                      key={idx}
                      to={srv.path}
                      className="block px-3 py-2 rounded-md hover:bg-gray-100"
                    >
                      {srv.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Search Bar */}
            <div className="relative">
              <div className="flex items-center bg-gray-100 rounded-lg px-3 py-1">
                <Search size={18} className="text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="bg-transparent outline-none text-sm w-40"
                />
              </div>
              {searchResults.length > 0 && (
                <div className="absolute top-10 left-0 bg-white shadow-lg rounded-lg w-48 p-2 z-50">
                  {searchResults.map((res, idx) => (
                    <Link
                      key={idx}
                      to={res.path}
                      className="block px-3 py-1 text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                      {res.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Latest News */}
            <Link
              to="/news"
              className="cursor-pointer hover:text-blue-600 font-medium"
            >
              Latest News
            </Link>
          </div>

          {/* Right Button (Desktop Only) */}
          <div className="hidden md:flex">
            <Link
              to="/quote"
              className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition"
            >
              Get Your Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 space-y-4">
          {Nav.filter((item) => !item.hidden).map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-blue-600 font-medium"
            >
              {item.name}
            </Link>
          ))}

          {/* Services */}
          <div className="space-y-2">
            <div className="font-medium text-gray-800">Services</div>
            {serviceCategories.map((srv, idx) => (
              <Link
                key={idx}
                to={srv.path}
                onClick={() => setIsOpen(false)}
                className="block pl-3 text-gray-600 hover:text-blue-600"
              >
                {srv.name}
              </Link>
            ))}
          </div>

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

          {/* Latest News */}
          <Link
            to="/news"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-blue-600 font-medium"
          >
            Latest News
          </Link>

          {/* Quote button */}
          <Link
            to="/quote"
            onClick={() => setIsOpen(false)}
            className="block bg-blue-600 text-white text-center px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition"
          >
            Get Your Quote
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
