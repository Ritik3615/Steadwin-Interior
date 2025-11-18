import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import RailingHero from "../assets/RailingHero.jpg";
import InteriorSlide from "../assets/InteriorSlide.jpg";
import Cards from "../Card/Cards";
import Services from "../Pages/Services/Services";
import Partners from "../Pages/Partners/Partners";
import Footer from "../Components/Footer";
import AboutHome from "../Pages/AboutHome/AboutHome";
import News from "../Pages/News/News";
import ContactSidebar from "./ConatctSidebaar";
import ServicesGrid from "../Pages/OurService/OurService";
import GalleryCard from "../Pages/Gallery/GallaryCard";
import FeaturesSection from "../Pages/Singlepage/FeaturesSection";
import StatsSection from "../Pages/Singlepage/StatsSection";
import Homepageform from "../Form/Homepageform";
import ProcessSteps from "../Pages/WorkFlow/ProcessSteps";

const heroSlides = [
  {
    img: InteriorSlide,
    title: "Elegant Modern Interiors",
    desc: "Designs that blend functionality with timeless aesthetics for your dream home.",
    link: "/Services/Interior",
    botton:"Connect with experts",
  },
  {
    img: RailingHero,
    title: "Premium Railing Systems",
    desc: "Durable and stylish railing solutions for home roofs and balconies, ensuring safety with elegance.",
    link: "/Services/Railing",
    botton:"Here is Letest railing Designs",
  },
  {
    img: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    title: "Expert Consultancy Services",
    desc: "Get professional guidance for interiors, architecture, and design — tailored to your vision.",
    link: "Services/Consultancy",
    botton:"Connect us For Letest update",
  },
  {
    img: "/Railing/Railing12.jpg",
    title: "Trusted Development Solutions",
    desc: "Building innovative, sustainable, and modern living spaces with trust and excellence.",
    link: "/about",
    botton:"Build with US",
  },
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const intervalRef = useRef(null);
  const heroRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Auto-slide
  const startSlide = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
      }, 3000);
    }
  };
  const stopSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startSlide();
    return () => stopSlide();
  }, []);

  useEffect(() => {
    const checkScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      if (scrollPos >= pageHeight * 0.3) setShowScrollTop(true);
      else setShowScrollTop(false);
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const nextSlide = () => {
    stopSlide();
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    stopSlide();
    setCurrentIndex((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  return (
    <>
      {/* HERO SECTION (no padding) */}
      <div
        ref={heroRef}
        className="relative w-full h-[96vh] overflow-hidden flex items-center justify-center"
        onMouseEnter={stopSlide}
        onMouseLeave={startSlide}
      >
        {/* Sliding Images */}
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {heroSlides.map((slide, index) => (
            <img
              key={index}
              src={slide.img}
              alt={`Slide ${index + 1}`}
              className="w-full h-[100vh] object-cover flex-shrink-0"
            />
          ))}
        </div>

        {/* Overlay */}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* LEFT BUTTON */}
        {/* LEFT BUTTON */}
        <button
          onClick={prevSlide}
          className="absolute hidden md:block left-[50px] z-20 top-1/2 -translate-y-1/2 bg-white/40 
             hover:bg-white/80 text-black p-3 rounded-full backdrop-blur 
             transition shadow-lg"
        >
          ❮
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={nextSlide}
          className="absolute hidden md:block right-[50px] z-20 top-1/2 -translate-y-1/2 bg-white/40 
             hover:bg-white/80 text-black p-3 rounded-full backdrop-blur 
             transition shadow-lg"
        >
          ❯
        </button>

        {/* Text */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 md:px-20 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
            {heroSlides[currentIndex].title}
          </h1>
          <p className="text-white text-lg md:text-2xl leading-relaxed max-w-2xl mb-6">
            {heroSlides[currentIndex].desc}
          </p>
          <Link
            to={heroSlides[currentIndex].link}
            className="px-8 py-3 bg-[#2b5d7c] hover:bg-[#1b93de] text-white text-lg md:text-xl font-semibold rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 duration-300"
          >
            {heroSlides.map((Slide,index) => (
              <span key={index}>
                {index === currentIndex && Slide.botton}
              </span>
            ))}
          </Link>
        </div>
      </div>

      {/* COMPANY INTRO (inside padding) */}
      <div className="relative px-6 md:px-20 -mt-28 z-20">
        <div className="bg-white w-full md:w-3/4 mx-auto rounded-lg shadow-lg p-8 text-center">
          <h1 className="mb-4 text-2xl text-[#2b5d7c] font-serif font-bold">
            Steadwin Group
          </h1>
          <p className="mb-6 text-gray-700">
            At <span className="font-bold text-[#2b5d7c]">STEADWIN GROUP</span>,
            we specialize in development, interior design, consultancy, and
            railing systems — creating spaces that blend innovation, quality,
            and style.
            <Link to="/About" className="text-[#2b5d7c]">
              {" "}
              ...read more
            </Link>
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              to="/Services"
              className="border p-3 px-6 bg-[#2b5d7c] hover:bg-blue-400 hover:scale-y-105 text-white rounded"
            >
              View Services
            </Link>
            <Link
              to="/Quote"
              className="border p-3 px-6 bg-gray-600 hover:bg-black hover:scale-y-105 text-white rounded"
            >
              Send Enquiry
            </Link>
          </div>
        </div>
      </div>

      {/* SIDEBAR */}
      <ContactSidebar />

      {/* CONTENT SECTIONS — all with consistent padding */}
      <div className="space-y-10 mt-10">
        <ServicesGrid />
        <AboutHome />
        <Cards />
        <Services />
        <FeaturesSection />
        <StatsSection />
        <ProcessSteps/>

        {/* Process CTA */}
        {/* <div className="relative rounded-2xl py-32 flex flex-col justify-center items-center text-center overflow-hidden mx-15 bg-gray-400">
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop"
            alt="Workflow Background"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 flex flex-col items-center px-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 drop-shadow-lg">
              Curious About Our Workflow?
            </h2>
            <Link
              to="/Process"
              className="px-10 py-4 bg-gradient-to-r from-blue-500 to-slate-500 hover:from-amber-600 hover:to-pink-600 text-white text-lg md:text-xl font-semibold rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 duration-300"
            >
              Explore Our Workflow →
            </Link>
          </div>
        </div> */}

        {/* News & Partners */}
        <News />
        <GalleryCard />
        <Partners />
        <Homepageform/>
      </div>

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-10 right-8 bg-[#e41010] text-white p-3 rounded-2xl 
               shadow-xl hover:bg-[#3608c2] transition z-50"
        >
          ↑
        </button>
      )}

      {/* FOOTER (no padding adjustment) */}

      <Footer />

      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-11/12 md:w-1/2 relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Let us know what you are looking for
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <textarea
                rows="4"
                placeholder="Let us know what you need..."
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
