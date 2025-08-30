import React, { useRef } from "react";

function Cards() {
  const containerRef = useRef(null);

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
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
    <section className="px-6 md:px-32 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Lets Connect With Your Dream Home
      </h1>

      {/* Card container */}
      <div
        ref={containerRef}
        className="flex gap-5 overflow-x-auto p-4 scrollbar-thin scrollbar-thumb-gray-400"
      >
        {cardData.map((item, index) => (
          <div
            key={index}
            className="border-2 rounded-3xl flex-shrink-0 w-[250px] sm:w-[280px] md:w-1/3 bg-white shadow-md"
          >
            {/* Card Image */}
            <img
              src={item.image}
              alt={item.type}
              className="object-cover w-full h-48 sm:h-60 md:h-72 rounded-t-3xl"
            />

            {/* Card Content */}
            <div className="p-4 text-center">
              <h2 className="font-bold text-amber-700 text-lg">
                Starting At: {item.type}
              </h2>
              <p className="text-gray-700">{item.price}</p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-around gap-2 mt-4">
                <button className="border-2 px-3 py-2 rounded-2xl text-blue-900 hover:bg-blue-50">
                  Book Consultation
                </button>
                <a href="#">
                  <button className="border-2 px-3 py-2 rounded-2xl text-blue-700 hover:bg-blue-50">
                    View Details
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cards;
