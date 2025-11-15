import { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    name: "Consultancy Services",
    image: "/HAll/Hall23.jpg",
    path: "/Services/Consultancy",
    desc: "Professional consultancy for your All Dreams and Projects.",
  },
  {
    name: "Developer",
    image: "/Railing/Railing12.jpg",
    path: "/Services/Developer",
    desc: "Expert development services for residential and commercial projects.",
  },
  {
    name: "Interior",
    image: "/HAll/Hall23.jpg",
    path: "/Services/Interior",
    desc: "Transforming spaces with innovative interior design solutions.",
  },
  {
    name: "Railing",
    image: "/Railing/Railing22.jpg",
    path: "/Services/Railing",
    desc: "Durable and stylish railing solutions for safety and aesthetics.",
  },
];

export default function ServicesGrid() {
  const [activeIndex, setActiveIndex] = useState(null);

  const activateCard = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const handleKey = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      activateCard(index);
    }
  };

  return (
    <>
      <div>
        <h2 className="text-center md:text-3xl font-extrabold md:mb-3 bg-[#2b5d7c] bg-clip-text text-transparent tracking-wide pt-10">
          Our Services
        </h2>
        <span className="block md:w-[100px] lg:w-[200px] w-[150px] rounded-lg h-1 mx-auto mt-3 bg-[#2b5d7c]"></span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-10 gap-5 px-9 md:px-15 py-10 bg-blue-100">
        {services.map((service, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              tabIndex={0} // ⬅ KEYBOARD SUPPORT
              onClick={() => activateCard(index)}
              onKeyDown={(e) => handleKey(e, index)} // ⬅ ENTER/SPACE SUPPORT
              className="
                relative group overflow-hidden rounded-xl shadow-lg transition-all duration-500 
                hover:shadow-2xl cursor-pointer 
                focus:outline-none focus:ring-4 focus:ring-blue-500
              "
            >
              <img
                src={service.image}
                alt={service.name}
                className={`w-full h-56 object-cover transition-all duration-700
                  ${isActive ? "scale-110 brightness-75" : "group-hover:scale-110 group-hover:brightness-75"}
                `}
              />

              {/* OVERLAY */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent
                  flex flex-col items-center justify-center px-4 text-center transition-opacity duration-500
                  ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                `}
              >
                <p className="text-white text-sm mb-4 leading-relaxed">
                  {service.desc}
                </p>

                <Link
                  to={service.path}
                  onClick={(e) => e.stopPropagation()}
                  className="border border-white px-6 py-2 text-white text-sm font-semibold rounded-md hover:bg-white hover:text-black transition-all duration-300"
                >
                  VIEW DETAILS
                </Link>
              </div>

              <div className="bg-white py-3 text-center text-gray-800 font-semibold text-lg">
                {service.name}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
