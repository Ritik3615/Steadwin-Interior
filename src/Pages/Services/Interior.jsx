import React, { useState, memo } from "react";
import Footer from "../../Components/Footer";

// Memoized Gallery Grid
const GalleryGrid = memo(({ images, filter, activeSection }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {images.map((img, index) => (
      <div key={index} className="overflow-hidden rounded-xl shadow-md">
        <img
          src={img}
          alt={`${activeSection} ${index + 1}`}
          loading="lazy"
          className="w-full h-80 object-cover hover:scale-105 transition duration-300"
          style={{ filter }}
        />
      </div>
    ))}
  </div>
));

function InteriorShowcase() {
  const [activeSection, setActiveSection] = useState("Hall");

  const sections = {
    Hall: {
      images: [
        "/HAll/Hall1.jpg",
        "/HAll/Hall2.jpg",
        "/HAll/Hall3.jpg",
        "/HAll/Hall4.jpg",
        "/HAll/Hall5.jpg",
        "/HAll/Hall6.jpg",
        "/HAll/Hall7.jpg",
        "/HAll/Hall8.jpg",
        "/HAll/Hall9.jpg",
        "/HAll/Hall10.jpg",
        "/HAll/Hall11.jpg",
      ],
      filter: "brightness(85%) contrast(110%)",
    },
    Bedroom: {
      images: [
        "/Bedroom/bedroom1.jpg",
        "/Bedroom/bedroom2.jpg",
        "/Bedroom/bedroom3.jpg",
        "/Bedroom/bedroom4.jpg",
        "/Bedroom/bedroom5.jpg",
        "/Bedroom/bedroom6.jpg",
        "/Bedroom/bedroom7.jpg",
        "/Bedroom/bedroom8.jpg",
        "/Bedroom/bedroom9.jpg",
        "/Bedroom/bedroom10.jpg",
        "/Bedroom/bedroom11.jpg",
        "/Bedroom/bedroom12.jpg",
        "/Bedroom/bedroom13.jpg",
        "/Bedroom/bedroom14.jpg",
      ],
      filter: "brightness(75%) contrast(120%)",
    },
    Kitchen: {
      images: [
        "/Kitchen/kitchen1.jpg",
        "/Kitchen/kitchen2.jpg",
        "/Kitchen/kitchen3.jpg",
        "/Kitchen/kitchen4.jpg",
        "/Kitchen/kitchen5.jpg",
        "/Kitchen/kitchen6.jpg",
        "/Kitchen/kitchen7.jpg",
        "/Kitchen/kitchen8.jpg",
        "/Kitchen/kitchen9.jpg",
        "/Kitchen/kitchen10.jpg",
        "/Kitchen/kitchen11.jpg",
        "/Kitchen/kitchen12.jpg",
        "/Kitchen/kitchen13.jpg",
      ],
      filter: "brightness(90%) contrast(105%)",
    },
  };

  const sectionNames = Object.keys(sections);

  return (
    <>
      {/* HERO (Full Screen) */}
      <section
        className="relative h-[100vh] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/pexels2.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Interior Showcase
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mt-4">
            Discover elegant, modern, and functional interior spaces.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="px-6 md:px-20 py-16 bg-gradient-to-r from-[#f0f7ff] to-[#e8f0fa]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#2b5d7c] mb-6">About Our Interiors</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We combine luxury, precision, and modern aesthetics to create interior spaces
            that feel elegant and comfortable.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Every design is a blend of premium materials, creativity, and
            functionality.
          </p>
        </div>
      </section>

      {/* SERVICES WE OFFER */}
      <section className="px-6 md:px-20 py-16 bg-[#f9fafb]">
        <h2 className="text-4xl font-bold text-center text-[#2b5d7c] mb-12">
          Our Interior Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Modular Kitchens",
            "Bedroom Interiors",
            "Hall & Living Area",
            "False Ceiling Work",
            "Wardrobes & Storage",
            "Full Home Interiors",
          ].map((title, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl border border-blue-50 transition"
            >
              <h3 className="text-xl font-semibold text-[#2b5d7c]">{title}</h3>
              <p className="text-gray-600 mt-2">Stylish, durable, and modern designs.</p>
            </div>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="px-6 md:px-20 py-16 bg-gradient-to-br from-white to-blue-50/30">
        <h2 className="text-4xl font-bold text-center text-[#2b5d7c] mb-12">
          Interior Highlights
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            ["Premium Materials", "Quality plywood, laminates & hardware."],
            ["Precise Execution", "Modular finish & clean detailing."],
            ["Theme Concepts", "Modern, luxury, minimalist, contemporary."],
            ["Budget Flexibility", "Affordable to premium solutions."],
          ].map(([title, desc], i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold text-[#2b5d7c]">{title}</h3>
              <p className="text-gray-600 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-6 md:px-20 py-16 bg-[#f1f5f9]">
        <h2 className="text-4xl font-bold text-center text-[#2b5d7c] mb-12">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "10+ Years Expertise",
            "Dedicated Designers",
            "3D Visualizations",
            "On-Time Delivery",
            "Premium Finish",
            "Customer Support",
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition text-center"
            >
              <h3 className="text-xl font-semibold text-[#2b5d7c]">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="px-6 md:px-20 py-16 bg-gradient-to-tr from-white to-gray-100">
        <h2 className="text-4xl font-bold text-center text-[#2b5d7c] mb-12">
          Our Workflow
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            "Requirement Understanding",
            "Concept & 3D Designing",
            "Material Finalization",
            "Execution & Handover",
          ].map((step, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition text-center"
            >
              <div className="h-12 w-12 bg-blue-600 text-white mx-auto flex items-center justify-center rounded-full text-xl font-bold">
                {i + 1}
              </div>
              <p className="mt-4 font-medium text-gray-800">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORY BUTTONS */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-[#2b5d7c] mb-8">
          Explore by Category
        </h2>

        <div className="flex justify-center flex-wrap gap-6 mb-12">
          {sectionNames.map((name) => (
            <button
              key={name}
              onClick={() => setActiveSection(name)}
              className={`px-6 py-2 rounded-full text-lg font-semibold transition 
              ${
                activeSection === name
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        {/* GALLERY */}
        <div className="max-w-6xl mx-auto">
          <GalleryGrid
            images={sections[activeSection].images}
            filter={sections[activeSection].filter}
            activeSection={activeSection}
          />
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/HAll/Hall5.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Design Your Dream Home?
          </h2>
          <p className="text-xl mb-8">
            Our expert team will bring your imagination to life.
          </p>
          <a
            href="/Quote"
            className="px-10 py-3 bg-blue-600 text-white text-xl rounded-full shadow-xl hover:bg-blue-700 transition"
          >
            Book Free Consultation →
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default InteriorShowcase;
