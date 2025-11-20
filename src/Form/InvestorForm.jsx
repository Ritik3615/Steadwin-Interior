import React, { useState } from "react";
import Footer from "../Components/Footer";
import { Mail } from "lucide-react";

/**
 * InvestorForm
 *
 * Props:
 * - endpoint (string, optional): API URL to POST the form JSON to. If omitted, form will open mail client as fallback.
 * - onSuccess (fn, optional): callback called with response data after successful submit.
 *
 * Usage:
 * <InvestorForm endpoint="/api/investors" onSuccess={(data) => console.log(data)} />
 */

export default function InvestorForm({ endpoint, onSuccess }) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    expectedInvestment: "",
    message: "",
    consent: false,
    // honeypot field (should remain empty)
    website: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState("");

  // basic validators
  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    if (!form.email.trim()) {
      e.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email.trim())
    ) {
      e.email = "Enter a valid email address.";
    }
    if (!form.phone.trim()) {
      e.phone = "Phone number is required.";
    } else if (!/^[0-9+\-\s]{7,20}$/.test(form.phone.trim())) {
      e.phone = "Enter a valid phone number.";
    }
    if (!form.company.trim()) e.company = "Company / organization is required.";
    if (!form.expectedInvestment.trim())
      e.expectedInvestment = "Expected investment (approx.) is required.";
    if (!form.consent)
      e.consent =
        "We need your consent to contact you about investor relations.";
    // honeypot should be empty
    if (form.website && form.website.trim().length > 0) {
      e.website = "Bot detected.";
    }
    return e;
  };

  const handleChange = (key) => (e) => {
    const value =
      e && e.target !== undefined
        ? e.target.type === "checkbox"
          ? e.target.checked
          : e.target.value
        : e;
    setForm((s) => ({ ...s, [key]: value }));
    // clear error for this field
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = async (e) => {
    e && e.preventDefault();
    setStatus(null);
    setStatusMessage("");
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Prevent double submit / bots
    setSubmitting(true);

    // Payload to send
    const payload = {
      name: form.fullName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      company: form.company.trim(),
      expectedInvestment: form.expectedInvestment.trim(),
      message: form.message.trim(),
      timestamp: new Date().toISOString(),
      source: "Investor Form - Steadwin Group",
    };

    try {
      if (endpoint) {
        // POST JSON to provided endpoint
        const res = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          const text = await res.text().catch(() => null);
          throw new Error(
            `Server responded ${res.status}${text ? `: ${text}` : ""}`
          );
        }

        const data = await res.json().catch(() => ({}));
        setStatus("success");
        setStatusMessage("Thanks — your investor request has been submitted.");
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
        if (onSuccess) onSuccess(data);
      } else {
        // Fallback: open mail client with prefilled subject/body
        const subject = encodeURIComponent(
          `Investor enquiry — ${payload.name} / ${payload.company}`
        );
        const body = encodeURIComponent(
          [
            `Name: ${payload.name}`,
            `Company: ${payload.company}`,
            `Email: ${payload.email}`,
            `Phone: ${payload.phone}`,
            `Expected Investment: ${payload.expectedInvestment}`,
            `Message: ${payload.message}`,
            "",
            "Submitted via: Investor Form - Steadwin Group",
            `Timestamp: ${payload.timestamp}`,
          ].join("\n")
        );

        // mailto - opens user's mail client
        window.location.href = `mailto:investors@steadwingroup.com?subject=${subject}&body=${body}`;

        setStatus("success");
        setStatusMessage(
          "Mail client opened. If it didn't, please email investors@steadwingroup.com"
        );
      }
    } catch (err) {
      console.error("InvestorForm submit error:", err);
      setStatus("error");
      setStatusMessage(
        "Unable to submit right now. Try again later or contact investors@steadwingroup.com"
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-10 mt-32">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#2b5d7c] mb-2">
          Join Our Growth Journey
        </h2>

        <p className="text-gray-700 mb-6">
          We invite investors who believe in innovation, quality, and
          sustainable business models. Partner with us and be part of a
          transformative vision.
        </p>

        {/* Status */}
        <div aria-live="polite" className="mb-4">
          {status === "success" && (
            <div className="rounded-md bg-green-50 border border-green-200 p-3 text-green-700">
              {statusMessage}
            </div>
          )}
          {status === "error" && (
            <div className="rounded-md bg-red-50 border border-red-200 p-3 text-red-700">
              {statusMessage}
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {/* honeypot - visually hidden */}
          <div style={{ display: "none" }} aria-hidden="true">
            <label>
              Do not fill this if human:
              <input
                name="website"
                value={form.website}
                onChange={(e) => handleChange("website")(e)}
              />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full name */}
            <label className="block">
              <span className="text-sm font-medium text-gray-700">
                Full name
              </span>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange("fullName")}
                placeholder="Your full name"
                className={`mt-1 block w-full rounded-lg border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2b5d7c] ${
                  errors.fullName ? "border-red-300" : "border-gray-200"
                }`}
              />
              {errors.fullName && (
                <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
              )}
            </label>

            {/* Email */}
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange("email")}
                placeholder="you@company.com"
                className={`mt-1 block w-full rounded-lg border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2b5d7c] ${
                  errors.email ? "border-red-300" : "border-gray-200"
                }`}
              />
              {errors.email && (
                <p className="text-xs text-red-600 mt-1">{errors.email}</p>
              )}
            </label>

            {/* Phone */}
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Phone</span>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange("phone")}
                placeholder="+91 98765 43210"
                className={`mt-1 block w-full rounded-lg border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2b5d7c] ${
                  errors.phone ? "border-red-300" : "border-gray-200"
                }`}
              />
              {errors.phone && (
                <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
              )}
            </label>

            {/* Company */}
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Company</span>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange("company")}
                placeholder="Company / Organization"
                className={`mt-1 block w-full rounded-lg border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2b5d7c] ${
                  errors.company ? "border-red-300" : "border-gray-200"
                }`}
              />
              {errors.company && (
                <p className="text-xs text-red-600 mt-1">{errors.company}</p>
              )}
            </label>

            {/* Expected Investment */}
            <label className="block md:col-span-2">
              <span className="text-sm font-medium text-gray-700">
                Expected investment (approx.)
              </span>
              <input
                type="text"
                name="expectedInvestment"
                value={form.expectedInvestment}
                onChange={handleChange("expectedInvestment")}
                placeholder="e.g. ₹5,00,00,000 or $1,000,000"
                className={`mt-1 block w-full rounded-lg border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2b5d7c] ${
                  errors.expectedInvestment
                    ? "border-red-300"
                    : "border-gray-200"
                }`}
              />
              {errors.expectedInvestment && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.expectedInvestment}
                </p>
              )}
            </label>

            {/* Message */}
            <label className="block md:col-span-2">
              <span className="text-sm font-medium text-gray-700">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange("message")}
                rows={5}
                placeholder="Tell us about your interest, timelines or questions..."
                className="mt-1 block w-full rounded-lg border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2b5d7c] border-gray-200"
              />
            </label>

            {/* Consent */}
            <label className="flex items-start gap-3 md:col-span-2">
              <input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={handleChange("consent")}
                className={`mt-1 rounded border-gray-300 text-[#2b5d7c] focus:ring-[#2b5d7c]`}
              />
              <div className="text-sm text-gray-700">
                <div>
                  I agree to be contacted by Steadwin Group about investor
                  relations. (You can unsubscribe at any time.)
                </div>
                {errors.consent && (
                  <p className="text-xs text-red-600 mt-1">{errors.consent}</p>
                )}
              </div>
            </label>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col md:flex-row md:items-center gap-4">
            <button
              type="submit"
              disabled={submitting}
              className={`inline-flex items-center justify-center px-6 py-3 rounded-full text-white font-semibold shadow w-full md:w-auto
      ${
        submitting
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-[#2b5d7c] hover:bg-[#1f445c]"
      }
    `}
            >
              {submitting ? (
                <svg
                  className="animate-spin h-4 w-4 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              ) : null}
              {submitting ? "Submitting…" : "Contact Investor Relations →"}
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
              className="px-4 py-3 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 w-full md:w-auto"
            >
              Reset
            </button>

            <div className="text-sm flex gap-2 justify-center items-center text-gray-500 md:ml-auto w-full md:w-auto text-center md:text-right">
              <Mail className="h-4 w-4 text-red-900"/>{" "}
              <a
                href="mailto:investors@steadwingroup.com"
                className="underline text-blue-800"
              >
                info@Steadwin.in
              </a>
            </div>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
}
