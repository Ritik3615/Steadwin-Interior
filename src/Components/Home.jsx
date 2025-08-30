import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cards from "../Card/Cards";
import Services from "../Pages/Services/Services";
import Partners from "../Pages/Partners/Partners";
import Footer from "../Components/Footer";

// Hero images array (6 total)
const heroImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop", // interior 1
  "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1200&auto=format&fit=crop", // interior 2
  "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg", // interior 3
  "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg", // interior 4
  "https://images.pexels.com/photos/29702284/pexels-photo-29702284.jpeg", // interior 5
  "https://images.pexels.com/photos/7166942/pexels-photo-7166942.jpeg", // interior 6
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  // Auto change images every 3 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Show popup after 5 sec
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center">
        {/* Sliding Images */}
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {heroImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Interior ${index + 1}`}
              className="w-full h-[80vh] object-cover flex-shrink-0"
            />
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Text */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 md:px-20 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
            Welcome to Steadwin Group
          </h1>
          <p className="text-white text-lg md:text-2xl leading-relaxed max-w-2xl">
            At Steadwin, we believe interiors are more than just spaces — they
            reflect your lifestyle, personality, and comfort. Our designs blend
            functionality with aesthetics, creating rooms that feel warm,
            elegant, and timeless.
          </p>
        </div>
      </div>

      {/* Cards */}
      <Cards />

      {/* Services */}
      <Services />

      {/* Process CTA */}
      <div className="relative w-full py-32 flex flex-col justify-center items-center text-center overflow-hidden">
        {/* Full Background Image */}
        <img
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop"
          alt="Workflow Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
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
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl"
            >
              &times;
            </button>

            {/* Form Content */}
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
