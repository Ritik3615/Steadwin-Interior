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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8 py-12">
      {services.map((service, index) => (
        <div
          key={index}
          className="relative group overflow-hidden rounded-lg shadow-lg"
        >
          {/* Service Image */}
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
            <Link
              to={service.path}
              className="border border-white px-6 py-2 text-white text-sm font-semibold hover:bg-white hover:text-black transition"
            >
              VIEW DETAILS
            </Link>
          </div>

          {/* Title */}
          <div className="bg-white py-3 text-center text-gray-800 font-medium">
            {service.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServicesGrid;
