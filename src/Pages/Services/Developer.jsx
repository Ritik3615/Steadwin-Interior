import React from "react";
import Footer from "../../Components/Footer";

function Developer() {
  return (
    <>
      {/* ============== HERO WITH COLOR GRADIENT ============== */}
      <section
        className="relative h-[100vh] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1134175/pexels-photo-1134175.jpeg?_gl=1*j7bgiv*_ga*Nzc5NDg5NzE2LjE3NTU3ODkyNTc.*_ga_8JE65Q40S6*czE3NjM3MTM5NDkkbzQ1JGcxJHQxNzYzNzE0MDc5JGo1OSRsMCRoMA..')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

        <div className="relative z-20 h-full flex flex-col justify-center pl-10 md:pl-24 text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-xl leading-tight">
            Building Tomorrow,
            <br /> Today.
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mt-6 leading-relaxed">
            Steadwin Developers brings modern architecture, smart planning, and
            sustainable construction for a smarter future.
          </p>

          <a
            href="/Quote"
            className="mt-8 inline-block px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white text-lg font-semibold rounded-full shadow-xl transition"
          >
            Start Your Project →
          </a>
        </div>
      </section>

      {/* ============== WAVE DIVIDER ============== */}
      {/* <div className="relative">
        <svg
          className="absolute -top-10 w-full"
          viewBox="0 0 1440 320"
          fill="#f3f4f6"
        >
          <path d="M0,128L1440,256L1440,320L0,320Z"></path>
        </svg>
      </div> */}

      {/* ============== ABOUT SECTION (with gradient) ============== */}
      <section className="px-6 md:px-20 py-20 bg-gradient-to-br from-gray-100 via-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
            Who We Are
          </h2>

          <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
            Steadwin Developers focuses on smart property development with modern
            architecture, structural durability, and future-proof planning.
            We create residential, commercial, and industrial spaces built to last.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {[
              ["🏙️", "Residential Projects", "Modern apartments, villas & gated communities."],
              ["🏢", "Commercial Buildings", "High-performance commercial towers & offices."],
              ["🌱", "Sustainable Planning", "Eco-friendly materials & smart energy systems."],
            ].map(([icon, title, desc], i) => (
              <div
                key={i}
                className="bg-white shadow-xl rounded-xl p-8 text-center border hover:-translate-y-2 hover:shadow-2xl transition"
              >
                <div className="text-5xl mb-4">{icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                <p className="text-gray-600 mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== FEATURE STRIP ============== */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center px-10">
          {[
            ["7+ Years", "Experience"],
            ["80+ Projects", "Delivered"],
            ["100% Quality", "Assurance"],
            ["24/7 Support", "For Clients"],
          ].map(([big, small], i) => (
            <div key={i}>
              <h3 className="text-4xl font-extrabold">{big}</h3>
              <p className="text-gray-200 text-lg mt-2">{small}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============== DEVELOPMENT PROCESS ============== */}
      <section className="px-6 md:px-20 py-20 bg-white">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-14">
          Our Development Process
        </h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            ["📝", "Planning & Architecture", "Blueprints, concepts, approvals."],
            ["🧱", "Construction", "Structural work, materials & safety."],
            ["🎨", "Interior Finishing", "Design, furnishing & final touch."],
            ["📦", "Handover", "Inspection, documentation & delivery."],
          ].map(([icon, title, desc], i) => (
            <div
              key={i}
              className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition text-center"
            >
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-gray-600 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============== CTA SECTION ============== */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/6890399/pexels-photo-6890399.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Want to Build a Project With Us?
          </h2>
          <p className="text-xl mb-8">
            Let our expert team help shape your vision into a modern landmark.
          </p>

          <a
            href="/Quote"
            className="px-10 py-4 bg-blue-600 text-white rounded-full shadow-xl hover:bg-blue-500 transition text-xl font-semibold"
          >
            Get Free Consultation →
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Developer;
