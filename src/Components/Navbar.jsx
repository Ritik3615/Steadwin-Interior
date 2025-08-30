import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo.png"; // isko rehne de agar logo hai

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);

  const Nav = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Contact", path: "/Contact" },
  ];

  // 🔥 Net se images daal diye
  const profileCategories = [
    {
      name: "Kitchen",
      path: "/profile/kitchen",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Wardrobe",
      path: "/profile/wardrobe",
      img: "https://images.unsplash.com/photo-1600488995722-31c80e1c9f48?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Bedroom",
      path: "/profile/bedroom",
      img: "https://images.unsplash.com/photo-1616594039964-ae9021e74025?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Farmhouse",
      path: "/profile/farmhouse",
      img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <nav className="bg-white shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-12 w-12 rounded-full" />
            <Link to="/" className="text-xl font-bold text-gray-800">
              Steadwin Group
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 text-black">
            {Nav.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, color: "#155dfc" }}
                className="cursor-pointer hover:underline"
              >
                <Link to={item.path}>{item.name}</Link>
              </motion.div>
            ))}

            {/* Company Profile Dropdown */}
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setProfileOpen(true)}
              onMouseLeave={() => setProfileOpen(false)}
            >
              <div className="flex items-center gap-1 hover:text-blue-600 font-medium">
                Company Profile <ChevronDown size={16} />
              </div>
              {profileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-10 left-0 bg-white shadow-xl rounded-xl p-5 grid grid-cols-2 gap-4 w-[400px]"
                >
                  {profileCategories.map((cat, idx) => (
                    <Link
                      key={idx}
                      to={cat.path}
                      className="flex flex-col items-center text-center hover:scale-105 transition-transform"
                    >
                      <img
                        src={cat.img}
                        alt={cat.name}
                        className="h-24 w-full object-cover rounded-lg shadow-md"
                      />
                      <p className="mt-2 text-gray-700 font-medium">
                        {cat.name}
                      </p>
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Blog Dropdown */}
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setBlogOpen(true)}
              onMouseLeave={() => setBlogOpen(false)}
            >
              <div className="flex items-center gap-1 hover:text-blue-600 font-medium">
                Blog <ChevronDown size={16} />
              </div>
              {blogOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-8 left-0 bg-white shadow-lg rounded-xl w-48 p-3 space-y-2"
                >
                  <Link
                    to="/blog/latest"
                    className="block px-3 py-2 rounded-md hover:bg-gray-100"
                  >
                    Latest Blogs
                  </Link>
                  <Link
                    to="/blog/categories"
                    className="block px-3 py-2 rounded-md hover:bg-gray-100"
                  >
                    Categories
                  </Link>
                  <Link
                    to="/blog/write"
                    className="block px-3 py-2 rounded-md hover:bg-gray-100"
                  >
                    Write a Blog
                  </Link>
                </motion.div>
              )}
            </div>
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

          {/* Company Profile in mobile */}
          <div className="space-y-3">
            <p className="font-medium text-gray-700">Company Profile</p>
            <div className="grid grid-cols-2 gap-3">
              {profileCategories.map((cat, idx) => (
                <Link
                  key={idx}
                  to={cat.path}
                  className="flex flex-col items-center text-center"
                  onClick={() => setIsOpen(false)}
                >
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="h-20 w-full object-cover rounded-md"
                  />
                  <p className="text-sm mt-1">{cat.name}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Blog in mobile */}
          <div className="space-y-2">
            <p className="font-medium text-gray-700">Blog</p>
            <div className="pl-4 space-y-2">
              <Link
                to="/blog/latest"
                className="block text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Latest Blogs
              </Link>
              <Link
                to="/blog/categories"
                className="block text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Categories
              </Link>
              <Link
                to="/blog/write"
                className="block text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Write a Blog
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
