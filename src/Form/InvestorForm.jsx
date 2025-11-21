import React, { useState } from "react";
import Footer from "../Components/Footer";
import { Mail } from "lucide-react";

export default function InvestorForm({ endpoint, onSuccess }) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    expectedInvestment: "",
    message: "",
    consent: false,
    website: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email))
      e.email = "Invalid email.";

    if (!form.phone.trim()) e.phone = "Phone is required.";
    if (!form.company.trim()) e.company = "Company is required.";
    if (!form.expectedInvestment.trim())
      e.expectedInvestment = "Expected investment is required.";

    if (!form.consent)
      e.consent = "Please allow us to contact you.";

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
      name: form.fullName,
      email: form.email,
      phone: form.phone,
      company: form.company,
      expectedInvestment: form.expectedInvestment,
      message: form.message,
      timestamp: new Date().toISOString(),
      source: "Investor Form - Steadwin Group",
    };

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error("Server error");

        setStatus("success");
        setStatusMessage("Your investor request has been submitted!");
      } else {
        const subject = encodeURIComponent(
          `Investor enquiry — ${payload.name} / ${payload.company}`
        );
        const body = encodeURIComponent(
          Object.entries(payload)
            .map(([k, v]) => `${k}: ${v}`)
            .join("\n")
        );

        window.location.href = `mailto:investors@steadwingroup.com?subject=${subject}&body=${body}`;
        setStatus("success");
        setStatusMessage(
          "Mail client opened. If it didn’t, email investors@steadwingroup.com"
        );
      }

      setForm({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        expectedInvestment: "",
        message: "",
        consent: false,
        website: "",
      });

      if (onSuccess) onSuccess(payload);
    } catch (err) {
      setStatus("error");
      setStatusMessage("Couldn't submit. Try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* PAGE HEADER */}
      <section className="h-[45vh] relative bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 flex items-center justify-center px-6 mt-10 md:mt-20">
        <div className="absolute inset-0 bg-black/30"></div>

        <h1 className="relative text-white text-4xl md:text-6xl font-extrabold drop-shadow-xl text-center">
          Investor Relations
        </h1>
      </section>

      {/* FORM CARD */}
      <section className="max-w-4xl mx-auto -mt-20 mb-16">
        <div className="bg-white/40 backdrop-blur-2xl border border-white/40 shadow-2xl rounded-3xl p-8 md:p-12">

          {/* Title */}
          <h2 className="text-3xl font-bold text-[#123e57] mb-4">
            Partner With Steadwin
          </h2>
          <p className="text-gray-700 mb-8">
            Share your interest, and we will connect with you for investment
            opportunities & partnerships.
          </p>

          {/* Status Alerts */}
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

          {/* FORM START */}
          <form onSubmit={handleSubmit}>

            <div className="grid md:grid-cols-2 gap-6">

              {/* FULL NAME */}
              <div>
                <label className="text-gray-800 font-semibold">Full Name</label>
                <input
                  type="text"
                  value={form.fullName}
                  onChange={handleChange("fullName")}
                  placeholder="Enter full name"
                  className={`mt-2 w-full p-3 rounded-xl bg-white/80 border ${
                    errors.fullName ? "border-red-400" : "border-gray-300"
                  } shadow focus:ring-4 focus:ring-blue-300`}
                />
                {errors.fullName && (
                  <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-gray-800 font-semibold">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  placeholder="you@example.com"
                  className={`mt-2 w-full p-3 rounded-xl bg-white/80 border ${
                    errors.email ? "border-red-400" : "border-gray-300"
                  } shadow focus:ring-4 focus:ring-cyan-300`}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email}</p>
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
                  className={`mt-2 w-full p-3 rounded-xl bg-white/80 border ${
                    errors.phone ? "border-red-400" : "border-gray-300"
                  } shadow focus:ring-4 focus:ring-purple-300`}
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* COMPANY */}
              <div>
                <label className="text-gray-800 font-semibold">Company</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={handleChange("company")}
                  placeholder="Your organization"
                  className={`mt-2 w-full p-3 rounded-xl bg-white/80 border ${
                    errors.company ? "border-red-400" : "border-gray-300"
                  } shadow focus:ring-4 focus:ring-amber-300`}
                />
                {errors.company && (
                  <p className="text-red-600 text-sm mt-1">{errors.company}</p>
                )}
              </div>

              {/* EXPECTED INVESTMENT */}
              <div className="md:col-span-2">
                <label className="text-gray-800 font-semibold">
                  Expected Investment
                </label>
                <input
                  type="text"
                  value={form.expectedInvestment}
                  onChange={handleChange("expectedInvestment")}
                  placeholder="e.g ₹10,00,000"
                  className={`mt-2 w-full p-3 rounded-xl bg-white/80 border ${
                    errors.expectedInvestment ? "border-red-400" : "border-gray-300"
                  } shadow focus:ring-4 focus:ring-teal-300`}
                />
                {errors.expectedInvestment && (
                  <p className="text-red-600 text-sm mt-1">
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
                  I agree to be contacted by Steadwin Group regarding investor opportunities.
                </span>
              </label>

              {errors.consent && (
                <p className="text-red-600 text-sm -mt-3 md:col-span-2">
                  {errors.consent}
                </p>
              )}
            </div>

            {/* SUBMIT BUTTON */}
            <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
              <button
                type="submit"
                disabled={submitting}
                className={`px-10 py-4 rounded-full text-lg font-semibold shadow-xl text-white transition transform hover:-translate-y-1
                  ${
                    submitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400"
                  }
                `}
              >
                {submitting ? "Submitting..." : "Submit Investment Inquiry →"}
              </button>

              <button
                type="button"
                onClick={() =>
                  setForm({
                    fullName: "",
                    email: "",
                    phone: "",
                    company: "",
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
