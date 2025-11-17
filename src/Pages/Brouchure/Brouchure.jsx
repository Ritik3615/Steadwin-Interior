import React from "react";
import portfolip from "../../assets/Steadwin-Portfolio.pdf";
import Railing from "../../assets/Steadwin-Railing-System.pdf";

const headerImage =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop";

const brochures = [
  {
    title: "Portfolio",
    description:
      "Explore our complete portfolio showcasing our interior designs, projects, and innovative solutions. Perfect for understanding our work and vision.",
    file: portfolip,
    buttonColor: "bg-blue-600 hover:bg-blue-700",
  },
  {
    title: "Railing System",
    description:
      "Detailed brochure of our specialized railing systems including design, materials, and installation process. Ideal for architects and builders.",
    file: Railing,
    buttonColor: "bg-green-600 hover:bg-green-700",
  },
];

function Brouchure() {
  return (
    <>
      {/* 🔥 Top Banner */}
      <div
        className="relative h-[40vh] top-20 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Our <span className="text-amber-400 px-2">Brochures</span>
        </h1>
      </div>

      {/* Main Section */}
      <div className="min-h-screen mt-10 bg-gray-100 flex flex-col items-center justify-start py-20 px-4">
        <div className="bg-white rounded-xl p-10 max-w-5xl w-full shadow-lg">
          <p className="text-center text-gray-700 mb-12 text-lg">
            Browse through our brochures to get detailed insights into our
            designs, services, and specialized systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brochures.map((b, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition duration-300"
              >
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  {b.title}
                </h2>
                <p className="text-gray-600 mb-6">{b.description}</p>

                <a
                  href={b.file}
                  download
                  className={`px-5 py-3 rounded-lg text-white font-semibold text-center ${b.buttonColor} transition duration-300`}
                >
                  Download {b.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Brouchure;
