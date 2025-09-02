import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Cards from "../Card/Cards";
import Services from "../Pages/Services/Services";
import Partners from "../Pages/Partners/Partners";
import Footer from "../Components/Footer";
import AboutHome from "../Pages/AboutHome/AboutHome";

const heroSlides = [
  {
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    title: "Elegant Modern Interiors",
    desc: "Designs that blend functionality with timeless aesthetics for your dream home.",
    link: "/Services/Interior",
  },
  {
    img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1200&auto=format&fit=crop",
    title: "Luxury Living Spaces",
    desc: "Transform your interiors into elegant, cozy, and stylish spaces.",
    link: "/Services/Interior",
  },
  {
    img: "https://images.pexels.com/photos/276551/pexels-photo-276551.jpeg",
    title: "Premium Railing Systems",
    desc: "Durable and stylish railing solutions for home roofs and balconies, ensuring safety with elegance.",
    link: "/Services/Railing",
  },
  {
    img: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    title: "Expert Consultancy Services",
    desc: "Get professional guidance for interiors, architecture, and design — tailored to your vision.",
    link: "Services/Consultancy",
  },
  {
    img: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg",
    title: "Steadwin Developers",
    desc: "Building innovative, sustainable, and modern living spaces with trust and excellence.",
    link: "/about",
  },

  {
    img: "https://images.pexels.com/photos/7166942/pexels-photo-7166942.jpeg",
    title: "Timeless Comfort",
    desc: "Experience interiors that remain elegant and relevant for years.",
    link: "/process",
  },
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const intervalRef = useRef(null);
  const heroRef = useRef(null);

  // Function to start auto-slide
  const startSlide = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
      }, 3000);
    }
  };

  // Function to stop auto-slide
  const stopSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Start auto-slide on mount
  useEffect(() => {
    startSlide();
    return () => stopSlide();
  }, []);

  // Popup timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center"
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
              className="w-full h-[80vh] object-cover flex-shrink-0"
            />
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Dynamic Text */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 md:px-20 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
            {heroSlides[currentIndex].title}
          </h1>
          <p className="text-white text-lg md:text-2xl leading-relaxed max-w-2xl mb-6">
            {heroSlides[currentIndex].desc}
          </p>
          <Link
            to={heroSlides[currentIndex].link}
            className="px-8 py-3 bg-gradient-to-r from-amber-500 to-pink-500 hover:from-amber-600 hover:to-pink-600 text-white text-lg md:text-xl font-semibold rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 duration-300"
          >
            Explore More →
          </Link>
        </div>
      </div>
          {/* About us */}
          <AboutHome/>
      {/* Cards */}
      <Cards />

      {/* Services */}
      <Services />

      {/* Process CTA */}
      <div className="relative w-full py-32 flex flex-col justify-center items-center text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop"
          alt="Workflow Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 drop-shadow-lg">
            Curious About Our Workflow?
          </h2>
          <Link
            to="/Process"
            className="px-10 py-4 bg-gradient-to-r from-amber-500 to-pink-500 hover:from-amber-600 hover:to-pink-600 text-white text-lg md:text-xl font-semibold rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 duration-300"
          >
            Explore Our Workflow →
          </Link>
        </div>
      </div>

      {/* Partners */}
      <Partners />

      {/* Footer */}
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
