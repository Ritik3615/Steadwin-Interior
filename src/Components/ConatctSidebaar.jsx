import { useState } from "react";
import { motion } from "framer-motion";
import callsvg from "../assets/phone-call.svg";
import whatsapp from "../assets/whatsapp-icon.svg";

function ContactSidebar() {
  const [isHoveringWhatsApp, setIsHoveringWhatsApp] = useState(false);
  const [isHoveringCall, setIsHoveringCall] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // form states
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
      const response = await fetch("http://localhost:8080/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, message }),
      });

      if (response.ok) {
        alert("✅ Thank you! We will connect with you shortly.");
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
        setIsOpen(false); // form close ho jaye submit ke baad
      } else {
        setError("⚠ Something went wrong!");
      }
    } catch (error) {
      setError("⚠ Server not reachable!");
    }
  };

  return (
    <>
      {/* Sidebar */}
      <div className="text-stone-100 right-0 justify-center items-center top-1/3 z-10 w-12 fixed space-y-2 p-1 flex flex-col bg-green-700 rounded-2xl">
        {/* Contact toggle */}
        <motion.a
          className="text-white bg-blue-700 p-3 mb-7 rounded-2xl cursor-pointer"
          initial={{ rotate: -90 }}
          onClick={() => setIsOpen(true)}
        >
          Contact
        </motion.a>

        {/* WhatsApp */}
        <div className="relative p-2">
          <motion.a
            href="https://wa.me/918792695400"
            target="_blank"
            className="block"
            onMouseEnter={() => setIsHoveringWhatsApp(true)}
            onMouseLeave={() => setIsHoveringWhatsApp(false)}
          >
            <img src={whatsapp} alt="whatsapp" />
            <motion.span
              initial={false}
              animate={
                isHoveringWhatsApp
                  ? { opacity: 1, x: -10, pointerEvents: "auto" }
                  : { opacity: 0, x: 40, pointerEvents: "none" }
              }
              transition={{ duration: 0.3 }}
              className="absolute left-[-130px] top-1/2 -translate-y-1/2 p-3 w-32 bg-green-400 text-white rounded shadow text-center"
            >
              WhatsApp
            </motion.span>
          </motion.a>
        </div>

        {/* Call */}
        <div className="relative p-2">
          <motion.a
            href="tel:+918792695400"
            className="block"
            onMouseEnter={() => setIsHoveringCall(true)}
            onMouseLeave={() => setIsHoveringCall(false)}
          >
            <img src={callsvg} alt="callicon" className="text-green-700" />
            <motion.span
              initial={false}
              animate={
                isHoveringCall
                  ? { opacity: 1, x: -10, pointerEvents: "auto" }
                  : { opacity: 0, x: 40, pointerEvents: "none" }
              }
              transition={{ duration: 0.3 }}
              className="absolute left-[-130px] top-1/2 -translate-y-1/2 p-3 w-32 bg-blue-400 text-white rounded shadow text-center"
            >
              Call Now
            </motion.span>
          </motion.a>
        </div>
      </div>

      {/* Sliding Contact Form Panel */}
      <div
        className={`fixed top-1/3 right-0 z-20 bg-white shadow-xl rounded-l-2xl p-6 w-80 transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-blue-900">
            Contact Form
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-red-500"
          >
            ✖
          </button>
        </div>

        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          {error && (
            <p className="text-red-500 text-sm font-medium">{error}</p>
          )}

          <input
            type="text"
            placeholder="Name*"
            className="border rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Phone*"
            className="border rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email*"
            className="border rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <textarea
            placeholder="Message*"
            rows="3"
            className="border rounded-xl px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-blue-900 text-white rounded-full py-2 mt-2 hover:bg-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactSidebar;
