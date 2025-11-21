import React, { useState, memo } from "react";
import Footer from "../../Components/Footer";

const GalleryGrid = memo(({ images }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {images.map((img, index) => (
      <div key={index} className="overflow-hidden rounded-xl">
        <img
          src={img}
          alt={`Railing ${index + 1}`}
          loading="lazy"
          className="w-full h-80 object-cover hover:scale-105 transition duration-300"
        />
      </div>
    ))}
  </div>
));

function Railing() {
  const [activeSection, setActiveSection] = useState("Stair Railings");

  const sections = {
    "Stair Railings": [
      "/Railing/railing1 (2).jpg",
      "/Railing/railing4.jpg",
      "/Railing/railing5.jpg",
      "/Railing/railing6.jpg",
      "/Railing/railing6 (2).jpg",
    ],
    "Balcony Railings": [
      "/Railing/Railing17.jpg",
      "/Railing/Railing12.jpg",
      "/Railing/Railing15.jpg",
    ],
    "Rooftop Railings": [
      "/Railing/Railing18.jpg",
      "/Railing/Railing20.jpg",
    ],
  };

  const sectionNames = Object.keys(sections);

  return (
    <>
      {/* =============== HERO SECTION (FULL SCREEN) =============== */}
      <section
        className="relative h-[100vh] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/Railing/Railing17.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-xl">
            Premium Railing Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mt-4">
            Modern • Durable • Safe — Crafted with precision for your home & business.
          </p>
        </div>
      </section>

      {/* =============== ABOUT =============== */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            About Our Railing Work
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Steadwin, we design and fabricate high-quality railings that combine safety,
            durability, and modern aesthetics. Every railing is custom-built with precision.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Whether it’s staircases, balconies, terraces, or industrial spaces — our
            craftsmanship ensures long-lasting performance.
          </p>
        </div>
      </section>

      {/* =============== SERVICES =============== */}
      <section className="px-6 md:px-20 py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Railing Services We Offer
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Stair Railings",
            "Balcony Railings",
            "Glass Railings",
            "Steel Fabrication",
            "Rooftop Railings",
            "Custom Designs",
          ].map((title, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-gray-700 mt-2">
                Premium quality materials & expert finishing.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =============== HIGHLIGHTS =============== */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Why Our Railings Stand Out</h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            ["Premium Steel Quality", "Long-lasting rust-free strength."],
            ["Perfect Welding Finish", "High precision MIG/TIG welding."],
            ["Modern Designs", "Minimal, luxury & custom patterns."],
            ["Budget Friendly", "Affordable to premium options."],
          ].map(([title, desc], i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-gray-600 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =============== WORKFLOW =============== */}
      <section className="px-6 md:px-20 py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12">Our Workflow</h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            "Measurement & Planning",
            "Design Finalization",
            "Fabrication Process",
            "Installation & Handover",
          ].map((step, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition text-center">
              <div className="h-12 w-12 mx-auto bg-blue-600 text-white flex items-center justify-center rounded-full font-bold text-xl">
                {i + 1}
              </div>
              <p className="mt-4 font-medium">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =============== CATEGORY BUTTONS =============== */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Explore by Category</h2>

        <div className="flex justify-center flex-wrap gap-6 mb-12">
          {sectionNames.map((name) => (
            <button
              key={name}
              onClick={() => setActiveSection(name)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeSection === name
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          <GalleryGrid images={sections[activeSection]} />
        </div>
      </section>

      {/* =============== CTA =============== */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/Railing/railing6.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-3xl mx-auto text-center text-white px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Need a Strong & Stylish Railing?
          </h2>
          <p className="text-xl mb-8">
            Our experts are ready to design the perfect railing for your space.
          </p>

          <a
            href="/Quote"
            className="px-8 py-3 bg-blue-600 text-white text-xl rounded-full shadow-xl hover:bg-blue-700 transition"
          >
            Book Free Consultation →
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Railing;
