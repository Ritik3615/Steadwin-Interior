import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Cards() {
  const cardData = [
    { type: "1BHK", price: "₹ 1,50,000", image: "/pexels1.jpg" },
    { type: "2BHK", price: "₹ 2,50,000", image: "/pexels2.jpg" },
    { type: "3BHK", price: "₹ 3,50,000", image: "/pexels3.jpg" },
    { type: "4BHK", price: "₹ 4,50,000", image: "/pexels4.jpg" },
  ];

  const [index, setIndex] = useState(0);

  // Determine how many cards to show based on screen size
  const getVisibleCount = () => {
    if (window.innerWidth >= 1024) return 3; // laptop
    if (window.innerWidth >= 768) return 2;  // tablet
    return 1;                                 // phone
  };

  const visibleCount = getVisibleCount();

  const next = () => {
    if (index < cardData.length - visibleCount) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="relative w-full max-w-[1400px] mx-auto px-4 overflow-hidden">
      {/* Heading */}
      <div>
        <h2 className="text-center md:text-3xl font-extrabold bg-[#2b5d7c] bg-clip-text text-transparent tracking-wide pt-5">
          Explore Our Property Packages
        </h2>
        <span className="block w-[180px] md:w-[350px] h-1 rounded-lg mx-auto mt-3 bg-[#2b5d7c]"></span>
      </div>

      {/* LEFT BUTTON */}
      <button
        onClick={prev}
        disabled={index === 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border 
          border-gray-300 p-3 rounded-full shadow-md hover:scale-110 transition z-20
          disabled:opacity-40"
      >
        <ChevronLeft size={22} />
      </button>

      {/* CARDS SLIDER */}
      <div className="overflow-hidden py-10">
        <div
          className="flex gap-6 transition-transform duration-500"
          style={{ transform: `translateX(-${index * (100 / visibleCount)}%)` }}
        >
          {cardData.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white border rounded flex-shrink-0 shadow-md 
                hover:shadow-xl hover:-translate-y-2 transition-all duration-300
                 md:w-1/2 lg:w-1/3"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.type}
                  className="object-cover w-full h-72 sm:h-80 md:h-96 rounded"
                />

                {/* TAGS */}
                <div className="absolute top-4 left-4 space-y-2">
                  <span className="bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                    {item.type}
                  </span>
                  <span className="bg-amber-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md block">
                    Starting at {item.price}
                  </span>
                </div>

                {/* HOVER BUTTONS */}
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
      </div>

      {/* RIGHT BUTTON */}
      <button
        onClick={next}
        disabled={index >= cardData.length - visibleCount}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white border 
          border-gray-300 p-3 rounded-full shadow-md hover:scale-110 transition
          disabled:opacity-40"
      >
        <ChevronRight size={22} />
      </button>
    </section>
  );
}

export default Cards;
