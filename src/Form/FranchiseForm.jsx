import React, { useState } from "react";
// import Footer from "../../Components/Footer";

export default function FranchiseForm() {
  const [form, setForm] = useState({
    title: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    state: "",
    addresh: "",
    pincode: "",
    businessSpace: "",
    budget: "",
    businessType: "",
    howYouKnow: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Franchise Request Submitted!");
  };

  return (
    <>
      <div className="w-full py-16 bg-gray-100">
        <div className="bg-white max-w-5xl mx-auto p-10 rounded-xl shadow-lg">
          <h2 className="text-4xl font-bold text-center mb-10">
            Franchise Application Form
          </h2>

          <form
            onSubmit={handleSubmit}
            className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <select name="title" className="p-3 rounded" onChange={handleChange}>
              <option value="">Title</option>
              <option>Mr</option>
              <option>Ms</option>
              <option>Mrs</option>
            </select>

            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="p-3 rounded"
              onChange={handleChange}
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="p-3 rounded"
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="p-3 rounded"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="p-3 rounded"
              onChange={handleChange}
            />

            <select name="state" className="p-3 rounded" onChange={handleChange}>
              <option value="">Select State</option>
              {[
                "Karnataka",
                "Bihar",
                "Maharashtra",
                "Delhi",
                "UP",
                "Telangana",
                "Kerala",
                "Tamil Nadu",
                "Gujarat",
                "Rajasthan",
              ].map((st) => (
                <option key={st}>{st}</option>
              ))}
            </select>

            <input
              type="text"
              name="addresh"
              placeholder="Full Address"
              className="p-3 rounded"
              onChange={handleChange}
            />

            <input
              name="pincode"
              placeholder="Pincode"
              className="p-3 rounded"
              onChange={handleChange}
            />

            <input
              name="businessSpace"
              placeholder="Business Space (sqft)"
              className="p-3 rounded"
              onChange={handleChange}
            />

            <input
              name="budget"
              placeholder="Your Budget (₹)"
              className="p-3 rounded"
              onChange={handleChange}
            />

            <select
              name="businessType"
              className="p-3 rounded md:col-span-2"
              onChange={handleChange}
            >
              <option value="">Business Type</option>
              <option>New Business</option>
              <option>Existing Fabrication Shop</option>
              <option>Interior / Builder</option>
              <option>Contractor / Architect</option>
            </select>

            <textarea
              name="howYouKnow"
              placeholder="How did you hear about us?"
              className="p-3 rounded md:col-span-2"
              rows="3"
              onChange={handleChange}
            ></textarea>

            <button
              type="submit"
              className="md:col-span-2 bg-blue-600 py-3 rounded text-white font-bold hover:bg-blue-700 transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}
