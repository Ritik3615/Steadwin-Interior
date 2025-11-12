import { Link } from "lucide-react";
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
    <section className="bg-white px-6 md:px-30 py-12">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 border-b-2 border-blue-400 inline-block pb-2">
        LATEST NEWS
      </h2>

      {/* News Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
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
      <Link to="/News" className="flex justify-center mt-12">
        <button className="px-8 py-3 bg-[#1E90FF] text-white font-semibold rounded-md hover:bg-blue-600 transition">
          VIEW ALL UPDATES
        </button>
      </Link>
    </section>
  );
};

export default News;
