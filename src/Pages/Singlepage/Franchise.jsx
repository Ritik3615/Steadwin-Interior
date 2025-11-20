import React from "react";
import { Link } from "react-router-dom";
import FranchiseForm from "../../Form/FranchiseForm";
import Footer from "../../Components/Footer"

export default function FranchisePage() {
  return (
    <>
      {/* HERO */}
      <div
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3760093/pexels-photo-3760093.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="text-5xl md:text-6xl text-center font-extrabold text-white relative z-10">
          Become a Franchise{" "}
            <span className="text-amber-400">Partner</span>
        </h1>
      </div>

      {/* INTRO */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-4">Why Our Railing Franchise?</h2>
        <p className="text-lg text-gray-700 max-w-4xl">
          The railing industry is booming — residential, commercial, and
          industrial projects need stainless steel, glass, and modular railing
          systems. Our brand gives you premium designs, installation training,
          and strong marketing support for low-risk growth.
        </p>
      </section>

      {/* BENEFITS */}
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
              className="bg-gray-100 p-6 rounded-xl shadow-sm border text-center"
            >
              <h3 className="text-lg font-semibold">{benefit}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* MODELS */}
      <section className="py-12 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6">Franchise Models</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Starter Model",
              desc: "Small outlet for residential railing projects.",
              price: "₹1.5–3 Lakhs",
            },
            {
              title: "Professional Model",
              desc: "Showroom + office with railing displays.",
              price: "₹4–7 Lakhs",
            },
            {
              title: "Premium Showroom",
              desc: "400–800 sqft showroom with full display setup.",
              price: "₹8–15 Lakhs",
            },
          ].map((m, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl p-6 shadow-sm"
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
        <h2 className="text-3xl font-bold mb-10 text-gray-900">How It Works</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {[
            "Submit Franchise Request",
            "Our Team Calls You",
            "Business Space Review",
            "Agreement & Launch",
          ].map((title, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-xl border shadow-sm text-center"
            >
              <div className="h-12 w-12 mx-auto bg-blue-700 text-white flex items-center justify-center rounded-full text-lg font-bold">
                {i + 1}
              </div>

              <p className="mt-4 text-gray-800 font-medium">{title}</p>
            </div>
          ))}
        </div>

        <FranchiseForm/>
      </section>

      <Footer />
    </>
  );
}
