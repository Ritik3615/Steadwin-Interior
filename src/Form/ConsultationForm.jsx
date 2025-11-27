import React, { useState } from "react";
import api from "../../src/Admin/services/api"; // IMPORTANT

function ConsultationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      await api.post("/api/consultation/submit", form);
      setStatus("Submitted successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      setStatus("Failed to submit.");
    }
  };

  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400">
      <div className="max-w-4xl mx-auto bg-white/20 backdrop-blur-2xl shadow-2xl p-10 rounded-3xl border border-white/30">

        <h2 className="text-4xl font-extrabold text-white text-center mb-10 drop-shadow-lg">
          Book a Consultation
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div>
            <label className="text-white font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full mt-2 p-3 rounded-xl bg-white/90 border"
            />
          </div>

          <div>
            <label className="text-white font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full mt-2 p-3 rounded-xl bg-white/90 border"
            />
          </div>

          <div>
            <label className="text-white font-semibold">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="+91 XXXXX XXXXX"
              className="w-full mt-2 p-3 rounded-xl bg-white/90 border"
            />
          </div>

          <div>
            <label className="text-white font-semibold">Service Needed</label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="w-full mt-2 p-3 rounded-xl bg-white/90 border"
            >
              <option value="">Select Service</option>
              <option>Digital Marketing</option>
              <option>GST & Compliance</option>
              <option>Website / UI-UX</option>
              <option>Branding</option>
              <option>Startup Consultation</option>
              <option>Business Growth Strategy</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="text-white font-semibold">Your Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Tell us about your project..."
              className="w-full mt-2 p-4 rounded-xl bg-white/90 border"
            ></textarea>
          </div>

          <div className="md:col-span-2 flex flex-col items-center">
            <button
              type="submit"
              className="px-12 py-4 mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xl font-semibold rounded-full"
            >
              Submit Request →
            </button>

            {status && (
              <p className="text-center text-white mt-4 font-semibold">
                {status}
              </p>
            )}
          </div>

        </form>
      </div>
    </section>
  );
}

export default ConsultationForm;
