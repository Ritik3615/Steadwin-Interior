import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="text-white py-10 px-20 p-28">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-5 rounded-3xl shadow-2xl bg-blue-950">
          {/* Company Info */}
          <div>
            <h2 className="text-white font-bold text-lg mb-3">
              Steadwin Group
            </h2>
            <img
              src="/logo.png"
              alt="Steadwin Group Logo"
              className="rounded-full w-24 h-24 object-cover mb-3"
            />
            <p className="text-sm">
              We design beautiful interiors that inspire and comfort.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-600">
                  About
                </Link>
              </li>
              <li>
                <Link to="/privicy" className="hover:text-blue-600">
                  Term and Condition
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white font-semibold mb-3">Contact Us</h3>
            <p className="text-sm">123, Delhi, India</p>
            <p className="text-sm">+91 9536254385</p>
            <p className="text-sm">info@steadwin.in</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-3">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-black font-bold">
          © 2025 <span className="text-blue-400 font-bold">Steadwin Group</span>
          . All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
