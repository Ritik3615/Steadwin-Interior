import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Cards() {
  const containerRef = useRef(null);

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const cardData = [
    {
      type: "1BHK",
      price: "₹ 1,50,000",
      image: "/pexels1.jpg",
    },
    {
      type: "2BHK",
      price: "₹ 2,50,000",
      image: "/pexels2.jpg",
    },
    {
      type: "3BHK",
      price: "₹ 3,50,000",
      image: "/pexels3.jpg",
    },
    {
      type: "4BHK",
      price: "₹ 4,50,000",
      image: "/pexels4.jpg",
    },
  ];

  return (
    <section className="relative px-6 md:px-20 py-12 bg-gradient-to-b from-white via-gray-50 to-white">
      <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-800">
        Let’s Connect With Your Dream Home
      </h1>

      {/* Left Scroll Button */}
      <button
        onClick={scrollLeft}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 bg-white border-2 border-gray-200 p-3 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition"
      >
        <ChevronLeft size={24} className="text-gray-700" />
      </button>

      {/* Cards Container */}
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-2"
      >
        {cardData.map((item, index) => (
          <div
            key={index}
            className="group border rounded-3xl flex-shrink-0 w-[270px] sm:w-[300px] md:w-[340px] bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative"
          >
            {/* Card Image */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.type}
                className="object-cover w-full h-80 sm:h-96 rounded-3xl"
              />

              {/* Badge Overlay (Type + Price) */}
              <div className="absolute top-4 left-4 space-y-2">
                <span className="bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                  {item.type}
                </span>
                <span className="bg-amber-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md block">
                  Starting at {item.price}
                </span>
              </div>

              {/* Hover Overlay - Buttons at Bottom */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 bg-black/40 opacity-0 group-hover:opacity-100 transition p-4 flex justify-center gap-3">
                  <button className="border-2 px-4 py-2 rounded-2xl text-blue-900 font-medium bg-white hover:bg-blue-50 transition">
                    Book Consultation
                  </button>
                  <a href="#">
                    <button className="border-2 px-4 py-2 rounded-2xl text-white bg-blue-600 hover:bg-blue-700 transition">
                      View Details
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={scrollRight}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 bg-white border-2 border-gray-200 p-3 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition"
      >
        <ChevronRight size={24} className="text-gray-700" />
      </button>
    </section>
  );
}

export default Cards;
