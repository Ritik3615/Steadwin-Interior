import React, { useRef } from "react";
import pexels1 from "/pexels1.jpg";

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
      image:
        "/pexels2.jpg",
    },
    {
      type: "3BHK",
      price: "₹ 3,50,000",
      image:
        "/pexels3.jpg",
    },
    {
      type: "4BHK",
      price: "₹ 4,50,000",
      image:
        "/pexels4.jpg",
    },
  ];
  return (
    <>
      {/* section1 for cards */}
      <section className="p-32 pt-7 pb-7 ">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Lets Connect With Your Dream Home
        </h1>
        <div className="flex gap-5 overflow-x-scroll p-7 scrollbar-thin scrollbar-thumb-gray-400">
          {cardData.map((Name, index) => (
            <div
              key={index}
              className="border-2 rounded-3xl w-full overflow-x-hidden md:w-1/3 flex-shrink-0 p-0"
            >
              <img
                src={Name.image}
                alt={Name.type}
                className="object-cover h-96 "
              />
              <div className="mt-2 flex justify-center">
                <h2 className="font-bold text-amber-700">
                  Starting At: {Name.type}
                </h2>
                <p className="ml-2"> {Name.price}</p>
              </div>
              <div className="flex justify-around p-2 ">
                <button className="border-2 p-2 cursor-pointer rounded-2xl text-blue-900">
                  {" "}
                  Book Consaltation
                </button>
                <a href="">
                  <button className="text-blue-700 p-2 border-2 cursor-pointer rounded-2xl">
                    View more in Details
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Cards;
