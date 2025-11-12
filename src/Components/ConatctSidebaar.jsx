import { useState } from "react";
import { motion } from "framer-motion";
import whatsapp from "../assets/whatsapp-icon.svg";
import { FaWhatsapp } from "react-icons/fa";
import {
  ArrowLeft,
  ArrowRight,
  LocationEditIcon,
  Mail,
  PhoneCallIcon,
} from "lucide-react";

function ContactSidebar() {
  const [isHoveringWhatsApp, setIsHoveringWhatsApp] = useState(false);
  const [isHoveriglocation, setIsHoveringlocation] = useState(false);
  const [isHoveringCall, setIsHoveringCall] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [radius, setRadius] = useState("8px");
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !phone || !email || !message) {
      setError("⚠ Please fill all fields.");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      setError("⚠ Enter a valid 10-digit phone number.");
      return;
    }

    setError("");
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/fetchdata`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, phone, email, message }),
          credentials: "include",
        }
      );

      if (response.ok) {
        alert("✅ Thank you! We will connect with you shortly.");
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
        setIsFormOpen(false);
      } else {
        setError("⚠ Something went wrong!");
      }
    } catch {
      setError("⚠ Server not reachable!");
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed right-0 z-50 transform transition-all duration-500 bg-black w-10 md:w-12 h-6 flex items-center justify-center rounded-tl-xl ${
          isOpen ? "top-[calc(50%-167px)]" : "top-1/2 -translate-y-1/2 rounded-l-xl"
        }`}
        aria-label="toggle contact sidebar"
      >
        {isOpen ? (
          <ArrowRight size={20} className="text-white text-sm" />
        ) : (
          <ArrowLeft size={20} className="text-white text-sm" />
        )}
      </button>

      {/* Sidebar (keeps w-10 h-56) */}
      <div
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-40 text-white w-10 md:w-12 h-72 flex flex-col justify-between rounded-l-2xl transition-transform duration-500 ease-in-out overflow-visible ${
          isOpen
            ? "translate-x-0 pointer-events-auto"
            : "translate-x-full pointer-events-none opacity-60"
        }`}
      >
        {/* Contact Us (rotated text) */}
        <div
          className="cursor-pointer flex justify-center items-center text-sm font-semibold tracking-wider h-[150%] bg-[#2b5d7c]"
          onMouseEnter={() => setIsFormOpen(true)}
          onMouseLeave={() => setIsFormOpen(false)}
        >
          <span className="transform -rotate-90 origin-center whitespace-nowrap flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span className="text-sm">Contact Us</span>
          </span>
        </div>

        {/* WhatsApp (middle) */}
        <div
          className="relative flex justify-center items-center h-[30%] bg-green-400 cursor-pointer"
          onMouseEnter={() => setIsHoveringWhatsApp(true)}
          onMouseLeave={() => setIsHoveringWhatsApp(false)}
        >
          <a
            href="https://wa.me/918792695400"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-full h-full"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="w-4 h-4" />
          </a>

          {/* WhatsApp slide label (appears to left of sidebar) */}
          <motion.div
            initial={{ x: 8, opacity: 0 }}
            animate={
              isHoveringWhatsApp ? { x: 9, opacity: 1 } : { x: 8, opacity: 0 }
            }
            transition={{ duration: 0.2 }}
            className="absolute right-[calc(100%+8px)] top-1/2 -translate-y-1/2 w-36 p-[7px] rounded-l bg-green-400 text-white text-sm shadow-lg pointer-events-none z-50 text-center"
          >
            WhatsApp
          </motion.div>
        </div>

        {/* Call (bottom) */}
        <div
          className="relative flex justify-center items-center h-[30%] bg-green-400 cursor-pointer"
          onMouseEnter={() => setIsHoveringCall(true)}
          onMouseLeave={() => setIsHoveringCall(false)}
        >
          <a
            href="tel:+918792695400"
            className="flex items-center justify-center w-full h-full"
            aria-label="Call"
          >
            <PhoneCallIcon className="w-4 h-4" />
          </a>

          {/* Call slide label */}
          <motion.div
            initial={{ x: 8, opacity: 0 }}
            animate={
              isHoveringCall ? { x: 9, opacity: 1 } : { x: 8, opacity: 0 }
            }
            transition={{ duration: 0.2 }}
            className="absolute right-[calc(100%+8px)] top-1/2 -translate-y-1/2 w-36 p-[7px] rounded-l bg-green-400 text-white text-sm shadow-lg pointer-events-none z-50 text-center"
          >
            Call Now
          </motion.div>
        </div>
        {/* location (last) */}
        <div
          className="relative flex justify-center items-center h-[30%] bg-green-400 cursor-pointer rounded-bl-xl"
          onMouseEnter={() => {
            setIsHoveringlocation(true);
            setRadius("0px");
          }}
          onMouseLeave={() => {
            setIsHoveringlocation(false);
            setRadius("12px");
          }}
          style={{
            // borderTopLeftRadius: radius,
            borderBottomLeftRadius: radius,
            // borderTopRightRadius: "0px",
            borderBottomRightRadius: "0px",
          }}
        >
          <a
            href="https://maps.app.goo.gl/mVwtMjWRWehAwDnE9?g_st=ipc"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-full h-full"
            aria-label="Location"
          >
            <LocationEditIcon className="w-4 h-4 text-white" />
          </a>
          {/* WhatsApp slide label (appears to left of sidebar) */}
          <motion.div
            initial={{ x: 8, opacity: 0 }}
            animate={
              isHoveriglocation
                ? { x: 9, opacity: 1, radius: 0 }
                : { x: 8, opacity: 0 }
            }
            transition={{ duration: 0.2 }}
            className="absolute right-[calc(100%+8px)] top-1/2 -translate-y-1/2 w-36 p-[8px] rounded-l bg-green-400 text-white text-sm shadow-lg pointer-events-none z-50 text-center"
          >
            Location
          </motion.div>
        </div>
      </div>

      {/* Contact Form (Limited Width, Right Side Only) */}
      <motion.div
        onMouseEnter={() => setIsFormOpen(true)}
        onMouseLeave={() => setIsFormOpen(false)}
        initial={{ x: "110%" }}
        animate={{
          x: isFormOpen && isOpen ? "-2%" : "110%",
          opacity: isFormOpen && isOpen ? 1 : 0,
        }}
        transition={{ type: "tween", duration: 0.35 }}
        className="fixed top-[29%] right-[2.5rem] bg-white rounded-2xl shadow-2xl p-6 w-[28rem] z-20"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-[#2b5d7c]">Contact Form</h2>
          <button
            onClick={() => setIsFormOpen(false)}
            className="text-gray-500 hover:text-red-500"
          >
            ✖
          </button>
        </div>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

          <input
            type="text"
            placeholder="Name*"
            className="border rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-green-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Phone*"
            className="border rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-green-300"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email*"
            className="border rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-green-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <textarea
            placeholder="Message*"
            rows="3"
            className="border rounded-xl px-4 py-2 focus:outline-none focus:ring focus:ring-green-300"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-[#2b5d7c] text-white rounded-full py-2 mt-2 hover:bg-green-800 transition"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </>
  );
}

export default ContactSidebar;
