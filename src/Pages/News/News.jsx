import { Link } from "react-router-dom"; // ✅ Correct import
import React from "react";

const News = () => {
  const newsData = [
    {
      img: "/ganesh.png",
      title:
        "Premium Aluminium Windows: Engineered for Endurance, Designed for Modern Living",
    },
    {
      img: "/pexels1.jpg",
      title: "TOSTEM TADA 2025, Transformed by Right Work Décor!",
    },
    {
      img: "/ganesh.png",
      title:
        "Aluminium Sliding Doors for Modern Homes – Available at Right Work Décor, Bangalore",
    },
    // {
    //   img: "/pexels1.jpg",
    //   title:
    //     "Innovation You Can See Through – Right Work’s Latest Design Approach",
    // },
  ];

  return (
    <section className="bg-white px-6 md:px-10 py-12">
      {/* Section Heading */}
      <div>
        <h2 className="text-center text-3xl md:text-5xl font-extrabold md:mb-7 bg-[#2b5d7c] bg-clip-text text-transparent tracking-wide mt-20 ">
          Latest News
        </h2>
        <span className="block md:w-[200px] lg:w-[340px] w-[150px] rounded-lg h-1 mx-auto mt-3 bg-[#2b5d7c]"></span>
      </div>

      {/* News Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
        {newsData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 border border-gray-100"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="h-[280px] md:h-[340px] w-full object-cover px-3 "
            />

            {/* Content */}
            <div className="p-5 text-center flex flex-col items-center justify-between h-[180px]">
              <p className="text-gray-700 text-sm md:text-base mb-4 leading-relaxed">
                {item.title}
              </p>
              <button className="px-5 py-2 bg-[#1E90FF] text-white text-sm font-semibold rounded-md hover:bg-blue-600 transition">
                READ MORE
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-12">
        <Link
          to="/News"
          className="inline-block px-10 py-3 bg-gradient-to-r from-[#2b5d7c] to-[#3c8dbc]
               text-white font-semibold rounded-full shadow-lg
               hover:from-[#1f445c] hover:to-[#367fa9] hover:shadow-xl transition-all duration-300"
        >
          VIEW ALL UPDATES
        </Link>
      </div>
    </section>
  );
};

export default News;
