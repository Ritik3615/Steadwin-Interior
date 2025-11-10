import { useState } from "react";
import { motion } from "framer-motion";
import callsvg from "../assets/phone-call.svg";
import whatsapp from "../assets/whatsapp-icon.svg";
import { ArrowLeft, ArrowRight } from "lucide-react";

function ContactSidebar() {
  const [isHoveringWhatsApp, setIsHoveringWhatsApp] = useState(false);
  const [isHoveringCall, setIsHoveringCall] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
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
        className={`fixed right-0 z-50 transform transition-all duration-500 bg-black w-10 text-white rounded-l hover:bg-green-500 ${
          isOpen ? "top-[30%]" : "top-1/2 -translate-y-1/2"
        }`}
      >
        {isOpen ? (
          <ArrowRight size={26} className="ml-2" />
        ) : (
          <ArrowLeft size={26} className="ml-2" />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-1/2 right-0 z-40 text-white w-10 h-56 pt-6 -translate-y-1/2 flex flex-col justify-between items-center bg-green-500 rounded-l-lg transition-transform duration-500 ease-in-out py-4
        ${
          isOpen
            ? "translate-x-0 pointer-events-auto"
            : "translate-x-full pointer-events-none opacity-60"
        }`}
      >
        {/* Contact Us */}
        <div
          className="cursor-pointer flex justify-center items-center text-sm font-semibold tracking-wider mt-5"
          onMouseEnter={() => setIsFormOpen(true)}
        >
          <span className="rotate-90 whitespace-nowrap rounded">
            Contact Us
          </span>
        </div>

        {/* WhatsApp */}
        <div
          className={`relative flex justify-center items-center transition-all duration-300 mt-4 ${
            isOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <motion.a
            href="https://wa.me/918792695400"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setIsHoveringWhatsApp(true)}
            onMouseLeave={() => setIsHoveringWhatsApp(false)}
          >
            <img src={whatsapp} alt="whatsapp" className="w-5 h-5 text-white mt-8" />
            <motion.span
              initial={false}
              animate={
                isHoveringWhatsApp
                  ? { opacity: 1, x: -10 }
                  : { opacity: 0, x: 40 }
              }
              transition={{ duration: 0.3 }}
              className="absolute left-[-130px] top-1/2 -translate-y-1/2 p-3 w-32 bg-green-600 text-white rounded shadow text-center"
            >
              WhatsApp
            </motion.span>
          </motion.a>
        </div>

        {/* Call */}
        <div
          className={`relative flex justify-center items-center h-1/3 transition-all duration-300 ${
            isOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <motion.a
            href="tel:+918792695400"
            onMouseEnter={() => setIsHoveringCall(true)}
            onMouseLeave={() => setIsHoveringCall(false)}
          >
            <img src={callsvg} alt="callicon" className="w-5 h-5" />
            <motion.span
              initial={false}
              animate={
                isHoveringCall ? { opacity: 1, x: -10 } : { opacity: 0, x: 40 }
              }
              transition={{ duration: 0.3 }}
              className="absolute left-[-130px] top-1/2 -translate-y-1/2 w-32 bg-blue-600 text-white rounded shadow text-center"
            >
              Call Now
            </motion.span>
          </motion.a>
        </div>
      </div>

      {/* Contact Form (Limited Width, Right Side Only) */}
      <motion.div
        onMouseEnter={() => setIsFormOpen(true)}
        onMouseLeave={() => setIsFormOpen(false)}
        initial={{ x: "110%" }}
        animate={{
          x: isFormOpen && isOpen ? "0%" : "110%",
          opacity: isFormOpen && isOpen ? 1 : 0,
        }}
        transition={{ type: "tween", duration: 0.4 }}
        className="fixed  top-[63%] right-[2.5rem] -translate-y-1/2 bg-white rounded-l-2xl shadow-2xl p-6 w-[28rem] z-20"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-green-700">Contact Form</h2>
          <button
            onClick={() => setIsFormOpen(false)}
            className="text-gray-500 hover:text-red-500"
          >
            ✖
          </button>
        </div>

        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
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
            className="bg-green-700 text-white rounded-full py-2 mt-2 hover:bg-green-800 transition"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </>
  );
}

export default ContactSidebar;
