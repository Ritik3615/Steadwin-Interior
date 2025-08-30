import React from "react";
import Footer from "../../Components/Footer";

function About() {
  return (
    <>
      <div className="px-6 md:px-28 py-12">
        {/* Heading */}
        <div className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          About <span className="text-amber-500">Steadwin Group</span>
        </div>

        {/* Content */}
        <p className="text-gray-700 leading-relaxed text-justify text-lg space-y-4">
          At <strong>Steadwin Group</strong>, we believe every space tells a
          story — a story of lifestyle, personality, and aspirations. With a
          passion for transforming ordinary rooms into extraordinary living
          experiences, we specialize in crafting interiors that blend
          <span className="font-medium"> elegance, functionality, and comfort</span>.
        </p>

        <p className="text-gray-700 leading-relaxed text-justify text-lg mt-4">
          From modern minimalism to timeless classics, our team of expert
          designers works closely with clients to understand their needs and
          deliver solutions tailored to their taste, budget, and lifestyle. We
          don’t just design homes and offices; we design experiences that bring
          joy, warmth, and a sense of belonging.
        </p>

        <p className="text-gray-700 leading-relaxed text-justify text-lg mt-4">
          With years of experience in <strong>residential and commercial
          interiors</strong>, we ensure quality, innovation, and seamless
          execution at every stage — from concept to completion. Our commitment
          lies in creating spaces that inspire, uplift, and truly feel like
          yours.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default About;
