import React, { useState, useEffect, useRef } from "react";
import Footer from "../../Components/Footer";
import ConsultationForm from "../../Form/ConsultationForm";

function Consultancy() {
  /* ---------------- HERO SLIDER CONFIG ---------------- */
  const heroSlides = [
    "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
    "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    "https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg",
    "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startSlide();
    return () => stopSlide();
  }, []);

  const startSlide = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
      }, 4000);
    }
  };

  const stopSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const nextSlide = () => {
    stopSlide();
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    stopSlide();
    setCurrentIndex((prev) =>
      prev === 0 ? heroSlides.length - 1 : prev - 1
    );
  };

  /* ---------------- PAGE START ---------------- */
  return (
    <>
      {/* ================================================== */}
      {/* ================= SLIDING HERO ==================== */}
      {/* ================================================== */}
      <section
        className="relative h-[100vh] w-full overflow-hidden"
        onMouseEnter={stopSlide}
        onMouseLeave={startSlide}
      >
        {/* Slides */}
        <div
          className="absolute inset-0 flex transition-transform duration-[1200ms] ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className="h-[100vh] w-full flex-shrink-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${slide}')`,
              }}
            ></div>
          ))}
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Text */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center pl-10 md:pl-24">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-xl leading-tight">
            Business Consultancy,
            <br /> Designed for Success.
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mt-6">
            Digital Strategy • Branding • GST Filing • Website Consultation •
            Business Growth • Marketing Solutions
          </p>

          <a
            href="/Quote"
            className="mt-10 inline-block px-12 py-4 bg-gradient-to-r from-blue-600 to-blue-400
              hover:from-blue-500 hover:to-blue-300 text-white text-xl font-semibold 
              rounded-full shadow-[0_5px_25px_rgba(0,0,0,0.5)] 
              hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] transition-transform 
              hover:-translate-y-1 duration-300"
          >
            Book Consultation →
          </a>
        </div>

        {/* Prev/Next Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 text-white bg-white/20 
           hover:bg-white/40 p-3 rounded-full backdrop-blur z-20"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-white bg-white/20 
           hover:bg-white/40 p-3 rounded-full backdrop-blur z-20"
        >
          ❯
        </button>
      </section>

      {/* ================================================== */}
      {/* ================= CORE SERVICES ================== */}
      {/* ================================================== */}
      <section className="px-6 md:px-20 py-20 bg-white">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Core Consultancy Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            ["📊", "Digital Marketing Strategy", "SEO, ads, funnels, branding, digital growth roadmap."],
            ["🧾", "GST & Compliance", "GST filing, MSME, documents, audit support, registrations."],
            ["🌐", "Website Consultation", "UI/UX, structuring, conversion design, tech stack guidance."],
            ["🚀", "Startup Mentorship", "Business model, pitch deck, planning & scaling guidance."],
            ["💼", "Brand Positioning", "Brand voice, identity, market placement, messaging."],
            ["📈", "Business Growth", "Sales system, automation & customer acquisition strategy."],
          ].map(([icon, title, desc], i) => (
            <div
              key={i}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition"
            >
              <div className="text-5xl">{icon}</div>
              <h3 className="text-xl font-bold mt-4">{title}</h3>
              <p className="text-gray-700 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================================================== */}
      {/* ================= INDUSTRIES ====================== */}
      {/* ================================================== */}
      <section className="px-6 md:px-20 py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <h2 className="text-4xl font-bold text-center mb-12">Industries We Serve</h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto text-center">
          {[
            ["🏬", "Small Businesses"],
            ["🏢", "Corporate Offices"],
            ["🛒", "E-commerce"],
            ["🍽️", "Restaurants"],
            ["🎓", "Education"],
            ["🏥", "Healthcare"],
            ["📱", "Tech & IT"],
            ["🏗️", "Construction"],
          ].map(([icon, title], i) => (
            <div
              key={i}
              className="bg-white/10 p-8 rounded-xl shadow-lg backdrop-blur hover:scale-105 transition"
            >
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="text-lg font-semibold">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ================================================== */}
      {/* ================= PROCESS ========================= */}
      {/* ================================================== */}
      <section className="px-6 md:px-20 py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-14 text-gray-900">
          Our Consultation Workflow
        </h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto text-center">
          {[
            ["📝", "Requirement Analysis", "Understanding your business needs & issues."],
            ["📑", "Strategy Blueprint", "Creating a clear, actionable plan."],
            ["⚙️", "Implementation Support", "Helping you execute step-by-step."],
            ["📦", "Monitoring & Growth", "Performance tracking & improvement."],
          ].map(([icon, title, desc], i) => (
            <div
              key={i}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <div className="text-5xl">{icon}</div>
              <h3 className="text-xl font-bold mt-4">{title}</h3>
              <p className="text-gray-600 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================================================== */}
      {/* ================= TESTIMONIALS ==================== */}
      {/* ================================================== */}
      {/* <section className="py-20 bg-gradient-to-br from-blue-100 via-white to-blue-50">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          What Clients Say
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          {[
            ["“Outstanding GST + digital consulting support.”", "Vijay Traders"],
            ["“Revenue grew 3× with their strategy planning.”", "Urban Bite"],
            ["“Perfect team for website + branding + marketing.”", "BluePixel Tech"],
          ].map(([review, name], i) => (
            <div key={i} className="bg-white p-6 shadow-xl rounded-xl">
              <p className="italic text-gray-700">{review}</p>
              <p className="mt-4 font-bold text-gray-900">— {name}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* ================================================== */}
      {/* ================= FINAL CTA ======================== */}
      {/* ================================================== */}
      <section
        className="relative py-24 bg-cover bg-center mb-20"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Grow Your Business?
          </h2>

          <p className="text-xl mb-8">
            Let our expert team help you with planning, strategy, compliance &
            digital transformation.
          </p>

          <a
            href="/Quote"
            className="px-12 py-4 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 
              text-white text-xl font-semibold rounded-full shadow-[0_5px_25px_rgba(0,0,0,0.5)] 
              hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] transition-transform hover:-translate-y-1 duration-300"
          >
            Book Consultation →
          </a>
        </div>
      </section>
      {/* ================= CONSULTATION FORM ======================== */}
        <ConsultationForm/>
      <Footer />
    </>
  );
}

export default Consultancy;
