import React from "react";
import { Link } from "react-router-dom"; // <- router-dom use karo
import image from "../assets/modernimage.jpg";
import Form from "../Form/Form";
import Cards from "../Card/Cards";
import Services from "../Pages/Services/Services";
import Partners from "../Pages/Partners/Partners";
import Footer from "../Components/Footer";
import Process from "../Pages/WorkFlow/Process";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] flex items-center justify-center">
        <img
          src={image}
          alt="Modern Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  bg-black opacity-40"></div>

        <div className="absolute inset-0 z-10 flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20">
          {/* Hero Text */}
          <div className="max-w-2xl text-center md:text-left">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Welcome to Steadwin Group
            </h1>
            <p className="text-white text-lg md:text-2xl leading-relaxed">
              At Steadwin, we believe interiors are more than just spaces — they
              reflect your lifestyle, personality, and comfort. Our designs
              blend functionality with aesthetics, creating rooms that feel
              warm, elegant, and timeless.
            </p>
          </div>

          {/* Form Section */}
          <div className="w-full max-w-md">
            <Form />
          </div>
        </div>
      </div>

      {/* Cards */}
      <Cards />

      {/* Services */}
      <Services />

      {/* Process CTA */}
      <div className="w-full bg-gradient-to-r from-amber-100 via-amber-200 to-amber-300 py-16 flex flex-col justify-center items-center text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
          Curious About Our Work Flow?
        </h2>

        {/* Poster Image */}
        <img
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop"
          alt="Our Process"
          className="w-4/5 md:w-2/3 lg:w-1/2 h-64 md:h-80 object-cover rounded-2xl shadow-lg mb-8 hover:scale-105 transition-transform duration-300"
        />

        {/* Link Button */}
        <Link
          to="/Process"
          className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white text-lg md:text-xl font-semibold rounded-full shadow-md transition"
        >
          Explore Our Work Flow →
        </Link>
      </div>

      {/* Partners */}
      <Partners />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
