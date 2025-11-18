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
    <section className="bg-white py-16 overflow-hidden">
      <div className="px-6 text-center">
        {/* Heading */}
        <div>
        <h2 className="text-center md:text-3xl font-extrabold md:mb-3 bg-[#2b5d7c] bg-clip-text text-transparent tracking-wide">
          Our Trusted Partners
        </h2>
        <span className="block md:w-[150px] lg:w-[320px] w-[100px] rounded-lg h-1 mx-auto mt-3 bg-[#2b5d7c] mb-5"></span>
      </div>
        <p className="text-gray-600 mt-2">
          Winning collaborations that produce winning designs.
        </p>

        {/* Continuous Slider */}
        <div className="relative mt-10 overflow-hidden">
          <div className="flex animate-marquee gap-12">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[160px] bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-transform duration-300 p-4"
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
      </div>
    </section>
  );
};

export default Partners;
