import { Link } from "react-router-dom";
import React from "react";

const News = () => {
  const newsData = [
    {
      img: "/News/newsInterior.jpg",
      title: "Steadwin Group – Landmark Developments & Contracting Excellence",
      desc: "Steadwin Group’s developer division delivers large-scale residential and commercial projects — from planning and contracting to final handover — built to last and designed for real-world use.",
    },
    {
      img: "/News/newInterior.jpg",
      title: "Letest Update 2025 — Steadwin Group Transforms Interiors",
      desc: "Steadwin Group’s interiors team blends functionality with refined aesthetics, delivering efficient, modern interiors for homes and corporate spaces.",
    },
    {
      img: "/News/newsRailing.jpg",
      title: "Aluminium Sliding Doors & Facade Solutions — Steadwin Group",
      desc: "High-performance aluminium systems for sliding doors and façades that improve light, airflow, and longevity — engineered for modern architecture.",
    },
  ];

  return (
    <section className="bg-white">
      {/* Section Heading */}
      <div>
        <h2 className="text-center md:text-3xl font-extrabold md:mb-3 bg-[#2b5d7c] bg-clip-text text-transparent tracking-wide pt-5">
          Latest News & Updates
        </h2>
        <span className="block md:w-[100px] lg:w-[350px] w-[200px] rounded-lg h-1 mx-auto mt-3 bg-[#2b5d7c]"></span>
      </div>

      {/* News Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-10 px-5 md:px-15">
        {newsData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-md overflow-hidden border border-gray-100 hover:-translate-y-2 transition-transform duration-300"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              // className="w-full h-60 md:h-72 object-cover object-center"
            />

            {/* Content */}
            <div className="p-5 text-center flex flex-col items-center justify-between min-h-[210px]">
              <p className="text-gray-800 text-base font-semibold mb-3">
                {item.title}
              </p>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {item.desc}
              </p>

              <button className="px-5 py-2 bg-[#1E90FF] text-white text-sm font-semibold rounded-md hover:bg-blue-600 transition">
                READ MORE
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-12 mb-10">
        <Link
          to="/news"
          className="inline-block px-10 py-3 bg-gradient-to-r from-[#2b5d7c] to-[#3c8dbc]
               text-white font-semibold rounded-full shadow-lg
               hover:from-[#1f445c] hover:to-[#367fa9] hover:shadow-xl transition-all duration-300"
        >
          VIEW ALL UPDATES
        </Link>
      </div>

      {/* Contact Section for Steadwin Group
      <div className="mt-20 bg-[#f5f9fc] py-16 px-6 md:px-20">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-[#2b5d7c] mb-6">
          Contact Steadwin Group
        </h3>
      </div> */}
    </section>
  );
};

export default News;
