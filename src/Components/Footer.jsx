import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import { Mail, ChevronDown } from "lucide-react";
import steadwinLogo from "../assets/logo.png";
import NewsletterForm from "../Form/NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-[#2d3237] text-white pt-16 pb-10 mt-20">
      {/* ======================================================
            NEWSLETTER FORM
      ====================================================== */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <h2 className="text-yellow-400 text-3xl font-bold mb-3">Newsletter</h2>

        <p className="text-gray-300 max-w-3xl mb-8">
          Subscribe to our newsletter to receive the latest updates, offers and
          news about Steadwin products and services.
        </p>

        {/* FORM ROW */}
        <NewsletterForm />

        {/* CONSENT */}
        <div className="flex items-start gap-3 mt-5 text-gray-300 text-sm leading-relaxed">
          <input type="checkbox" className="w-5 h-5 accent-yellow-400" />
          <p>
            I consent to receiving newsletters from Steadwin and agree to the
            processing of my data as stated in the privacy notice.
          </p>
        </div>
      </div>

      {/* ======================================================
            MAIN FOOTER SECTIONS
      ====================================================== */}
      <div className=" text-center max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-yellow-400">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <Link to="/" className="hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-yellow-400">
                Services
              </Link>
            </li>
            {/* <li><Link to="/projects" className="hover:text-yellow-400">Projects</Link></li> */}
            <li>
              <Link to="/contact" className="hover:text-yellow-400">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-yellow-400">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* COMPANY INFO */}
        {/* <div>
          <h3 className="text-lg font-bold mb-4 text-yellow-400">Who We Are</h3>
          <p className="text-gray-300 leading-relaxed">
            Steadwin Group provides complete interior design, railing systems,  
            modular solutions, architectural fabrication, and home innovation services.
          </p>
        </div> */}

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-yellow-400">Contact</h3>
          <p className="text-gray-300">76, Mylasandra Rd, Suraksha Nagar</p>
          <p className="text-gray-300">Yelenahalli, Begur, Bengaluru</p>
          <p className="text-gray-300">Karnataka, 560068</p>

          <p className="text-gray-300 mt-3">📞 +91 87926 95400</p>
          <p className="text-gray-300">📧 info@steadwin.in</p>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-bold mb-4 text-yellow-400 text-center">
            Follow Us
          </h3>

          <div className="flex flex-row items-center gap-3 text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:text-yellow-400"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="hover:text-yellow-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-yellow-400"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              className="hover:text-yellow-400"
            >
              <FaYoutube />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              className="hover:text-yellow-400"
            >
              <FaPinterestP />
            </a>
          </div>
        </div>
      </div>

      {/* ======================================================
            CENTER LOGO + SOCIAL ROW (ALUMIL STYLE)
      ====================================================== */}
      <div className="flex flex-col items-center py-5">
        <img
          src={steadwinLogo}
          className="w-40 mb-8 rounded-full"
          alt="Steadwin Logo"
        />

        <div className="gap-6 font-bold text-center">
          <h1 className="text-blue-500 text-4xl">STEADWIN GROUP</h1>
          <p className="text-amber-200 text-2xl">Multitask Provider</p>
        </div>
      </div>

      {/* ======================================================
            COPYRIGHT
      ====================================================== */}
      <div className="flex justify-center items-center text-black mt-10 bg-white h-12">
        © {new Date().getFullYear()} Steadwin Group. All Rights Reserved.
      </div>
    </footer>
  );
}
