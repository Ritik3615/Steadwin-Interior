import React from "react";

const partners = [
  { name: "Jaquar", logo: "/jaguar.jpg" },
  { name: "Saint-Gobain", logo: "/saint-gobain.jpg" },
  { name: "CenturyPly", logo: "/century-ply.jpg" },
  { name: "Bosch", logo: "/bosch-desktop.jpg" },
  { name: "Siemens", logo: "/siemens.jpg" },
  { name: "Hettich", logo: "/hettich.jpg" },
  { name: "Greenlam", logo: "/greenlam.jpg" },
  { name: "Samsung", logo: "/samsung.jpg" },
];

const Partners = () => {
  return (
    <section className="bg-gradient-to-r from-amber-50 via-gray-50 to-amber-100 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Our Trusted Partners
        </h2>
        <p className="text-gray-600 mt-2">
          Winning collaborations that produce winning designs.
        </p>

        {/* Logos Grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-transform duration-300 hover:scale-105 p-4"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
