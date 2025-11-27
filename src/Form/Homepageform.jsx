import React, { useState } from "react";

export default function Homepageform() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      return setError("⚠ Please fill all fields.");
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      return setError("⚠ Enter a valid 10-digit phone number.");
    }

    const payload = { name, email, phone, message };

    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/call/sendForm`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) throw new Error("Failed");

      setSuccess("✔ Request submitted successfully!");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err) {
      setError("⚠ Something went wrong. Try again.");
    }
  };

  return (
    <div className="w-full py-16 px-6 md:px-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
      
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 border border-white/30">

        {/* LEFT TEXT */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold text-[#1a2d4e] mb-4">
            Request A Call Back
          </h2>

          <p className="text-lg text-gray-700 mb-4">
            We help you plan better. From interior solutions to consultancy—
            our experts assist you instantly.
          </p>

          <div className="mt-4 text-gray-600 leading-relaxed">
            <p className="font-semibold text-[#1a2d4e]">Need help?</p>
            <p>
              Leave your details and we’ll reach out shortly with the best guidance.
            </p>
          </div>
        </div>

        {/* FORM CARD */}
        <div className="bg-white/90 shadow-lg rounded-2xl p-8 border border-gray-200">

          {/* Alerts */}
          {error && <p className="text-red-500 mb-4 text-sm font-medium">{error}</p>}
          {success && <p className="text-green-600 mb-4 text-sm font-medium">{success}</p>}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            <input
              type="text"
              placeholder="Your Name *"
              className="border border-gray-300 p-3 rounded-xl text-sm focus:ring-4 focus:ring-blue-200 outline-none shadow-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email Address *"
              className="border border-gray-300 p-3 rounded-xl text-sm focus:ring-4 focus:ring-indigo-200 outline-none shadow-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="text"
              placeholder="Phone Number *"
              className="border border-gray-300 p-3 rounded-xl text-sm focus:ring-4 focus:ring-purple-200 outline-none shadow-sm"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <textarea
              placeholder="Write your message... *"
              rows="4"
              className="border border-gray-300 p-3 rounded-xl text-sm focus:ring-4 focus:ring-pink-200 outline-none shadow-sm resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              type="submit"
              className="mt-2 w-full py-3 text-white text-lg font-semibold rounded-xl 
                bg-gradient-to-r from-blue-600 to-indigo-500 
                hover:from-blue-500 hover:to-indigo-400 
                shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition"
            >
              Submit Now →
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
