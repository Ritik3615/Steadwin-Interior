import React from "react";
import portfolip from "../../assets/Steadwin-Portfolio.pdf";
import Railing from "../../assets/Steadwin-Railing-System.pdf";

// Optional: You can replace this with your own background image
const backgroundImage = "https://images.unsplash.com/photo-1581091215361-5001fc64e67f?auto=format&fit=crop&w=1600&q=80";

const brochures = [
  {
    title: "Portfolio",
    description:
      "Explore our complete portfolio showcasing our interior designs, projects, and innovative solutions. Perfect for understanding our work and vision.",
    file: portfolip,
    color: "blue",
  },
  {
    title: "Railing System",
    description:
      "Detailed brochure of our specialized railing systems including design, materials, and installation process. Ideal for architects and builders.",
    file: Railing,
    color: "green",
  },
  // Add more brochures here
];

function Brouchure() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-start py-20 px-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-white/80 backdrop-blur-md rounded-xl p-10 max-w-5xl w-full shadow-lg">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-6">
          Our Brochures
        </h1>
        <p className="text-center text-gray-700 mb-12 text-lg">
          Browse through our brochures to get detailed insights into our projects and specialized systems. Click the download buttons below to save PDFs for offline viewing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {brochures.map((brochure, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition duration-300"
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                {brochure.title}
              </h2>
              <p className="text-gray-600 mb-6">{brochure.description}</p>
              <a
                href={brochure.file}
                download
                className={`px-5 py-3 rounded-lg text-white font-semibold text-center bg-${brochure.color}-600 hover:bg-${brochure.color}-700 transition duration-300`}
              >
                <button>Download {brochure.title}</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brouchure;
