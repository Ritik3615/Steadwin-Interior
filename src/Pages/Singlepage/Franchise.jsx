import React, { useState } from "react";
import Footer from "../../Components/Footer";

export default function Franchise() {
  const bgImage = "";

  const [form, setForm] = useState({
    title: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    state: "",
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
      <div className="w-full bg-gray-50 text-gray-900">
        {/* HERO SECTION */}
        <div
          className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3760093/pexels-photo-3760093.jpeg?_gl=1*zaa2mq*_ga*Nzc5NDg5NzE2LjE3NTU3ODkyNTc.*_ga_8JE65Q40S6*czE3NjM2MjMxMzckbzQyJGcxJHQxNzYzNjIzMzE5JGo0MiRsMCRoMA..')",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white relative z-10 text-center drop-shadow-lg">
            Become a Franchise Partner
          </h1>
        </div>

        {/* INTRO */}
        <section className="py-12 px-6 md:px-20">
          <h2 className="text-3xl font-bold mb-4">
            Why Our Railing Franchise?
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 max-w-4xl">
            The railing industry is booming — residential, commercial, and
            industrial projects need stainless steel, glass, aluminum, and
            modular railing systems. Our brand gives you premium designs,
            manufacturing support, installation training, and powerful marketing
            systems so you can grow faster with minimum risk.
          </p>
        </section>

        {/* BENEFITS SECTION */}
        <section className="py-12 px-6 md:px-20 bg-white">
          <h2 className="text-3xl font-bold mb-6">What You Get</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Complete Railing Catalog",
              "Installation & Sales Training",
              "Branding + Marketing Tools",
              "High-Profit Margins",
              "Material Supply Support",
              "Exclusive Franchise Pricing",
            ].map((benefit, i) => (
              <div
                key={i}
                className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold">{benefit}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* FRANCHISE MODELS */}

        <section className="py-12 px-6 md:px-20 bg-gray-50">
          <h2 className="text-3xl font-bold mb-6">Franchise Models</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Starter Model",
                desc: "Home-office or small outlet for residential railing projects.",
                price: "₹1.5–3 Lakhs",
              },
              {
                title: "Professional Model",
                desc: "Showroom + office with display stands for modular railing.",
                price: "₹4–7 Lakhs",
              },
              {
                title: "Premium Showroom",
                desc: "Full 400–800 sqft showroom with full railing display setup.",
                price: "₹8–15 Lakhs",
              },
            ].map((m, i) => (
              <div
                key={i}
                className="bg-white border rounded-xl p-6 shadow hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold">{m.title}</h3>
                <p className="text-gray-600 mt-2">{m.desc}</p>
                <p className="mt-4 font-semibold text-blue-600">{m.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-16 px-6 md:px-20 bg-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">
            How It Works
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Submit Franchise Request",
              "Our Team Calls You",
              "Business Space Review",
              "Agreement & Launch",
            ].map((title, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-200 text-center"
              >
                <div className="h-12 w-12 mx-auto flex items-center justify-center rounded-full bg-[#2b5d7c] text-white text-lg font-bold">
                  {i + 1}
                </div>

                <p className="mt-4 text-gray-800 font-medium text-lg">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FORM */}
        <div
          className="w-full py-16 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="bg-white/85 backdrop-blur-md max-w-5xl mx-auto p-10 rounded-xl shadow-lg">
            <h2 className="text-4xl font-bold text-center mb-10">
              Franchise Application Form
            </h2>

            <form
              onSubmit={handleSubmit}
              className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* LEFT SIDE */}
              <select
                name="title"
                className="p-3 rounded text-black"
                onChange={handleChange}
              >
                <option value="">Title</option>
                <option>Mr</option>
                <option>Ms</option>
                <option>Mrs</option>
              </select>

              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="p-3 rounded text-black"
                onChange={handleChange}
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="p-3 rounded text-black"
                onChange={handleChange}
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="p-3 rounded text-black"
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="p-3 rounded text-black"
                onChange={handleChange}
              />

              <select
                name="state"
                className="p-3 rounded text-black"
                onChange={handleChange}
              >
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
                name="pincode"
                placeholder="Pincode"
                className="p-3 rounded text-black"
                onChange={handleChange}
              />

              <input
                name="businessSpace"
                placeholder="Business Space (sqft)"
                className="p-3 rounded text-black"
                onChange={handleChange}
              />

              <input
                name="budget"
                placeholder="Your Budget (₹)"
                className="p-3 rounded text-black"
                onChange={handleChange}
              />

              <select
                name="businessType"
                className="p-3 rounded text-black md:col-span-2"
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
                className="p-3 rounded text-black md:col-span-2"
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
      </div>
      <Footer />
    </>
  );
}
