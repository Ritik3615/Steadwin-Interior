import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Cards() {
  const containerRef = useRef(null);

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 350, behavior: "smooth" });
  };

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -350, behavior: "smooth" });
  };

  const cardData = [
    { type: "1BHK", price: "₹ 1,50,000", image: "/pexels1.jpg" },
    { type: "2BHK", price: "₹ 2,50,000", image: "/pexels2.jpg" },
    { type: "3BHK", price: "₹ 3,50,000", image: "/pexels3.jpg" },
    { type: "4BHK", price: "₹ 4,50,000", image: "/pexels4.jpg" },
  ];

  return (
    <section className="relative w-full max-w-[1400px] mx-auto px-4">
      {/* Heading */}
      <div>
        <h2 className="text-center md:text-3xl font-extrabold bg-[#2b5d7c] bg-clip-text text-transparent tracking-wide pt-5">
          Explore Our Property Packages
        </h2>
        <span className="block w-[180px] md:w-[350px] h-1 rounded-lg mx-auto mt-3 bg-[#2b5d7c]"></span>
      </div>

      {/* Left Scroll Button */}
      <button
        onClick={scrollLeft}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 p-3 rounded-full shadow-md hover:scale-110 transition z-20"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Cards Container */}
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide py-10"
      >
        {cardData.map((item, index) => (
          <div
            key={index}
            className="group bg-white border rounded-3xl w-[260px] sm:w-[300px] md:w-[330px] flex-shrink-0 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.type}
                className="object-cover w-full h-72 sm:h-80 md:h-96 rounded-3xl"
              />

              {/* Badge */}
              <div className="absolute top-4 left-4 space-y-2">
                <span className="bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                  {item.type}
                </span>
                <span className="bg-amber-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md block">
                  Starting at {item.price}
                </span>
              </div>

              {/* Hover Buttons */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 bg-black/40 opacity-0 group-hover:opacity-100 transition p-4 flex justify-center gap-3">
                  <button className="border-2 px-4 py-2 rounded-2xl text-blue-900 bg-white hover:bg-blue-50 transition">
                    Book Consultation
                  </button>
                  <button className="border-2 px-4 py-2 rounded-2xl text-white bg-blue-600 hover:bg-blue-700 transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={scrollRight}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 p-3 rounded-full shadow-md hover:scale-110 transition"
      >
        <ChevronRight size={22} />
      </button>
    </section>
  );
}

export default Cards;
