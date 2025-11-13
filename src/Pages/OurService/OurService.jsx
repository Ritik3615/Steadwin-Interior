import { Link } from "react-router-dom";

const services = [
  {
    name: "Consultancy Services",
    image: "/Homeimage/consultancy.jpeg",
    path: "/Services/Consultancy",
  },
  {
    name: "Developer",
    image: "/Homeimage/Developer.jpg",
    path: "/Services/Developer",
  },
  {
    name: "Interior",
    image: "/Homeimage/interior.jpg",
    path: "/Services/Interior",
  },
  {
    name: "Railing",
    image: "/Homeimage/Railing.jpg",
    path: "/Services/Railing",
  },
];

function ServicesGrid() {
  return (
    <>
      <div>
        <h2 className="text-center text-3xl md:text-5xl font-extrabold md:mb-7 bg-[#2b5d7c] bg-clip-text text-transparent tracking-wide pt-20">
          Our Services
        </h2>
        <span className="block md:w-[200px] lg:w-[340px] w-[150px] rounded-lg h-1 mx-auto mt-3 bg-[#2b5d7c]"></span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 px-8 py-10 0verflow-hidden">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl"
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-56 object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:brightness-75"
            />

            {/* Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent
              opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center px-4 text-center"
            >
              <p className="text-white text-sm mb-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <Link
                to={service.path}
                className="border border-white px-6 py-2 text-white text-sm font-semibold rounded-md hover:bg-white hover:text-black transition-all duration-300"
              >
                VIEW DETAILS
              </Link>
            </div>

            {/* Title */}
            <div className="bg-white py-3 text-center text-gray-800 font-semibold text-lg">
              {service.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ServicesGrid;
