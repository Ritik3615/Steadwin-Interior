import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Cards() {
  const cardData = [
    { type: "1BHK", price: "₹ 1,50,000*", image: "/pexels1.jpg" },
    { type: "2BHK", price: "₹ 2,50,000*", image: "/pexels2.jpg" },
    { type: "3BHK", price: "₹ 3,50,000*", image: "/pexels3.jpg" },
    { type: "4BHK", price: "₹ 4,50,000*", image: "/pexels4.jpg" },
  ];

  return (
    <section className="relative w-full px-4">
      {/* Heading */}
      <div>
        <h2 className="text-center md:text-3xl font-extrabold bg-[#2b5d7c] bg-clip-text text-transparent tracking-wide pt-5">
          Explore Our Property Packages
        </h2>
        <span className="block md:w-[465px] w-[250px] h-1 rounded-lg mx-auto mt-3 bg-[#2b5d7c]"></span>
      </div>

      {/* LEFT BUTTON */}
      <button
        onClick={() => {
          const c = document.getElementById("card-slider");
          c.scrollLeft -= c.offsetWidth / 1.2;
        }}
        className="hidden md:block absolute left-16 top-[55%] -translate-y-1/2 bg-white border 
      border-gray-300 p-3 rounded-full shadow-md hover:scale-110 transition z-20"
      >
        <ChevronLeft size={22} />
      </button>

      {/* SCROLLABLE WRAPPER */}
      <div
        id="card-slider"
        className="flex gap-6 overflow-x-auto scroll-smooth py-10
               scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 w-full"
      >
        {cardData.map((item, idx) => (
          <div
            key={idx}
            className="group bg-white border rounded shadow-md 
                   hover:shadow-xl hover:-translate-y-2 transition-all duration-300
                   flex-shrink-0 w-[80%] sm:w-[55%] md:w-[35%] lg:w-[25%]"
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
                <div
                  className="absolute bottom-0 left-0 right-0 bg-black/40 opacity-0 
                group-hover:opacity-100 transition p-4 flex justify-center gap-3"
                >
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

      {/* RIGHT BUTTON */}
      <button
        onClick={() => {
          const c = document.getElementById("card-slider");
          c.scrollLeft += c.offsetWidth / 1.2;
        }}
        className="hidden md:block absolute right-16 top-[55%] -translate-y-1/2 bg-white border 
      border-gray-300 p-3 rounded-full shadow-md hover:scale-110 transition"
      >
        <ChevronRight size={22} />
      </button>
    </section>
  );
}

export default Cards;
