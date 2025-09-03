import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin ,  } from "lucide-react";

function Footer() {
  return (
    <footer className="text-black bg-blue-500 py-12 px-6 md:px-20 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Steadwin Group</h2>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png" // Example logo (replace with yours)
            alt="Steadwin Group Logo"
            className="rounded-full w-20 h-20 object-cover mb-4 shadow-lg"
          />
          <p className="text-gray-300 text-sm leading-relaxed">
            We design beautiful interiors that inspire and comfort. Bringing
            your dream spaces to life.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-amber-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-amber-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/privicy" className="hover:text-amber-400 transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-amber-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-300 text-sm">123, Delhi, India</p>
          <p className="text-gray-300 text-sm mt-1">+91 9536254385</p>
          <p className="text-gray-300 text-sm mt-1">info@steadwin.in</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-5">
            <a href="#" className="hover:text-amber-400 transition text-blue-600">
              <Facebook size={22} />
            </a>
            <a href="#" className="hover:text-amber-400 transition text-pink-800">
              <Instagram size={22} />
            </a>
            <a href="#" className="hover:text-amber-400 transition text-blue-300">
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t bg-white rounded-3xl pb-2 border-gray-700 mt-10 pt-4 text-center text-sm text-black">
        © 2025{" "}
        <span className="text-black font-semibold">Steadwin Group</span>. All
        rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
