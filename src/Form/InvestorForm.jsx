import React, { useState } from "react";
import axios from "axios";
import Footer from "../Components/Footer";
import { Mail } from "lucide-react";

export default function InvestorForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    amount: "",
    expectedInvestment: "",
    message: "",
    consent: false,
    website: "", // honeypot bot trap
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  const validate = () => {
    const e = {};

    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email))
      e.email = "Invalid email format.";

    if (!form.phone.trim()) e.phone = "Phone is required.";
    if (!form.company.trim()) e.company = "Company is required.";

    if (!form.amount.trim()) e.amount = "Investment amount is required.";

    if (!form.expectedInvestment.trim())
      e.expectedInvestment = "Expected investment is required.";

    if (!form.consent) e.consent = "Please allow us to contact you.";
    if (form.website.length > 0) e.website = "Bot detected.";

    return e;
  };

  const handleChange = (key) => (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setForm((s) => ({ ...s, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setSubmitting(true);
    setStatus(null);

    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      company: form.company,
      amount: Number(form.amount),
      expectedInvestment: form.expectedInvestment,
      message: form.message,
      consent: form.consent,
      website: form.website, // honeypot
    };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/investor/submit`,
        payload
      );

      setStatus("success");
      setStatusMessage("Your investor request has been submitted!");

      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        amount: "",
        expectedInvestment: "",
        message: "",
        consent: false,
        website: "",
      });
    } catch (err) {
      setStatus("error");
      setStatusMessage("Failed to submit. Try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = (field, extra = "") =>
    `mt-2 w-full p-3 rounded-xl bg-white/80 border ${
      errors[field] ? "border-red-400" : "border-gray-300"
    } shadow focus:ring-4 ${extra}`;

  return (
    <>
      {/* HEADER */}
      <section className="h-[45vh] relative bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 flex items-center justify-center px-6 mt-10 md:mt-20">
        <div className="absolute inset-0 bg-black/30"></div>

        <h1 className="relative text-white text-4xl md:text-6xl font-extrabold drop-shadow-xl text-center">
          Investor Relations
        </h1>
      </section>

      {/* FORM */}
      <section className="max-w-4xl mx-auto -mt-20 mb-16">
        <div className="bg-white/40 backdrop-blur-2xl border border-white/40 shadow-2xl rounded-3xl p-8 md:p-12">

          <h2 className="text-3xl font-bold text-[#123e57] mb-4">
            Partner With Steadwin
          </h2>
          <p className="text-gray-700 mb-8">
            Share your interest, and we will connect with you for investment
            opportunities & partnerships.
          </p>

          {/* Alerts */}
          {status === "success" && (
            <div className="bg-green-100 border border-green-300 text-green-700 p-3 rounded-lg mb-4">
              {statusMessage}
            </div>
          )}

          {status === "error" && (
            <div className="bg-red-100 border border-red-300 text-red-700 p-3 rounded-lg mb-4">
              {statusMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="grid md:grid-cols-2 gap-6">

              {/* NAME */}
              <div>
                <label className="text-gray-800 font-semibold">Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={handleChange("name")}
                  placeholder="Enter name"
                  className={inputClass("name", "focus:ring-blue-300")}
                />
                {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-gray-800 font-semibold">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  placeholder="you@example.com"
                  className={inputClass("email", "focus:ring-cyan-300")}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm">{errors.email}</p>
                )}
              </div>

              {/* PHONE */}
              <div>
                <label className="text-gray-800 font-semibold">Phone</label>
                <input
                  type="text"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  placeholder="+91 XXXXX XXXXX"
                  className={inputClass("phone", "focus:ring-purple-300")}
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm">{errors.phone}</p>
                )}
              </div>

              {/* COMPANY */}
              <div>
                <label className="text-gray-800 font-semibold">Company</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={handleChange("company")}
                  placeholder="Your company"
                  className={inputClass("company", "focus:ring-amber-300")}
                />
                {errors.company && (
                  <p className="text-red-600 text-sm">{errors.company}</p>
                )}
              </div>

              {/* INVESTMENT AMOUNT */}
              <div>
                <label className="text-gray-800 font-semibold">
                  Investment Amount (₹)
                </label>
                <input
                  type="number"
                  value={form.amount}
                  onChange={handleChange("amount")}
                  placeholder="e.g 1000000"
                  className={inputClass("amount", "focus:ring-teal-300")}
                />
                {errors.amount && (
                  <p className="text-red-600 text-sm">{errors.amount}</p>
                )}
              </div>

              {/* EXPECTED INVESTMENT */}
              <div>
                <label className="text-gray-800 font-semibold">
                  Expected Investment
                </label>
                <input
                  type="text"
                  value={form.expectedInvestment}
                  onChange={handleChange("expectedInvestment")}
                  placeholder="e.g ₹10,00,000"
                  className={inputClass(
                    "expectedInvestment",
                    "focus:ring-teal-300"
                  )}
                />
                {errors.expectedInvestment && (
                  <p className="text-red-600 text-sm">
                    {errors.expectedInvestment}
                  </p>
                )}
              </div>

              {/* MESSAGE */}
              <div className="md:col-span-2">
                <label className="text-gray-800 font-semibold">Message</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={handleChange("message")}
                  placeholder="Tell us about your interest..."
                  className="mt-2 w-full p-4 rounded-xl bg-white/80 border border-gray-300 shadow focus:ring-4 focus:ring-indigo-300"
                />
              </div>

              {/* CONSENT */}
              <label className="flex items-start space-x-3 md:col-span-2">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={handleChange("consent")}
                  className="mt-1 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-400"
                />
                <span className="text-gray-700 text-sm">
                  I agree to be contacted by Steadwin Group for investor
                  opportunities.
                </span>
              </label>

              {errors.consent && (
                <p className="text-red-600 text-sm -mt-3 md:col-span-2">
                  {errors.consent}
                </p>
              )}
            </div>

            {/* SUBMIT */}
            <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
              <button
                type="submit"
                disabled={submitting}
                className={`px-10 py-4 rounded-full text-lg font-semibold shadow-xl text-white transition transform hover:-translate-y-1
                ${
                  submitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400"
                }`}
              >
                {submitting ? "Submitting..." : "Submit Investment Inquiry →"}
              </button>

              <button
                type="button"
                onClick={() =>
                  setForm({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    amount: "",
                    expectedInvestment: "",
                    message: "",
                    consent: false,
                    website: "",
                  })
                }
                className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Reset
              </button>

              <div className="text-sm flex gap-2 items-center text-gray-600 md:ml-auto">
                <Mail size={18} />
                <a href="mailto:info@Steadwin.in" className="underline">
                  info@Steadwin.in
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
