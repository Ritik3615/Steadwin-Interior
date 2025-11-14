import { useState, useEffect } from "react";
import { LiaLinkedinIn } from "react-icons/lia";
import { BsInstagram, BsMailbox, BsTwitterX } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { FiMail } from "react-icons/fi";
import { BiPhoneCall } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";

const TopBar = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) setIsHidden(true);
      else setIsHidden(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isHidden ? "h-0 opacity-0" : "Md:h-7 opacity-100"
      }`}
    >
      <div className="text-white hidden md:flex justify-between bg-[#121212] items-center px-12 border-b text-sm md:h-7">
        {/* Left side: mail + phone */}
        <div className="flex gap-8 items-center">
          <a
            href="mailto:info@Steadwin.in"
            className="flex items-center gap-1 font-medium hover:text-blue-300 transition"
          >
            <FiMail
              className="h-5 w-5"
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
            <BiPhoneCall className="h-5 w-5 text-green-600" />
            <span>+91 8792695400</span>
          </a>
        </div>

        {/* Right side: social icons */}
        <div className="flex gap-8 items-center">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LiaLinkedinIn className="h-5 w-5 text-blue-600 hover:text-blue-300 transition" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="h-5 w-5 text-red-500 hover:text-blue-300 transition" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImFacebook className="h-5 w-5 text-blue-500 hover:text-blue-300 transition" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram className="h-5 w-5 text-red-500 hover:text-blue-300 transition" />
          </a>
           <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitterX className="h-5 w-5  hover:text-blue-300 transition" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
