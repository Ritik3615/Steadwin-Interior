import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

export default function QuoteRequestForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    message: "",
    agree: false,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const change = (field) => (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((s) => ({ ...s, [field]: value }));
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!form.name || !form.phone || !form.email || !form.serviceType || !form.message) {
      return setError("⚠ Please fill all fields.");
    }

    if (!/^[0-9]{10}$/.test(form.phone)) {
      return setError("⚠ Enter a valid 10-digit phone number.");
    }

    if (!form.agree) {
      return setError("⚠ You must agree to the Privacy Policy.");
    }

    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/quote/sendForm`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            phone: form.phone,
            email: form.email,
            type: form.serviceType, // backend expects this EXACT field
            message: form.message,
          }),
        }
      );

      if (!res.ok) {
        return setError("⚠ Something went wrong. Try again.");
      }

      setSuccess("✅ Thank you! Your request has been submitted.");

      setForm({
        name: "",
        phone: "",
        email: "",
        serviceType: "",
        message: "",
        agree: false,
      });
    } catch (err) {
      console.error(err);
      setError("⚠ Server unreachable. Try again later.");
    }
  };

  return (
    <>
      {/* HEADER */}
      <div className="relative w-full md:pt-40 py-20 px-6 md:px-20 bg-gradient-to-br from-blue-700 via-cyan-500 to-teal-400 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            Request a Free Quotation
          </h2>
          <p className="text-white/90 text-sm md:text-lg mt-4">
            Share your project details — Interiors, Railings, Development or Consultancy.
          </p>
        </div>
      </div>

      {/* FORM SECTION */}
      <div className="relative -mt-20 mb-20 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-10 border border-gray-100">
          {/* STATUS MESSAGES */}
          {error && (
            <p className="text-red-600 text-center mb-4 font-medium">{error}</p>
          )}
          {success && (
            <p className="text-green-600 text-center mb-4 font-medium">{success}</p>
          )}

          {/* FORM */}
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            {/* NAME + PHONE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 p-3 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                value={form.name}
                onChange={change("name")}
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 p-3 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                value={form.phone}
                onChange={change("phone")}
              />
            </div>

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 p-3 rounded-lg text-sm focus:ring-2 focus:ring-cyan-500 outline-none"
              value={form.email}
              onChange={change("email")}
            />

            {/* SERVICE TYPE */}
            <select
              value={form.serviceType}
              onChange={change("serviceType")}
              className="border border-gray-300 p-3 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Service Type</option>
              <option value="Interior">Interior</option>
              <option value="Railing">Railing</option>
              <option value="Developer">Developer</option>
              <option value="Consultancy">Consultancy</option>
            </select>

            {/* MESSAGE */}
            <textarea
              placeholder="Write your message here..."
              className="border border-gray-300 p-3 rounded-lg text-sm h-32 resize-none focus:ring-2 focus:ring-indigo-500 outline-none"
              value={form.message}
              onChange={change("message")}
            />

            {/* AGREEMENT */}
            <div className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                checked={form.agree}
                onChange={change("agree")}
                className="mt-1"
              />
              <label className="text-gray-700">
                I agree to the{" "}
                <Link to="/privacy" className="text-blue-600 underline">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="mt-2 py-3 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 text-white font-semibold rounded-lg transition shadow-lg"
            >
              Submit Request →
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
