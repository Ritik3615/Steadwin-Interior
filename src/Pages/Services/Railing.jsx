import Footer from "../../Components/Footer";

function Railing() {
  const stairImages = [
    "/Railing/railing1 (2).jpg",
    "/Railing/railing4.jpg",
    "/Railing/railing5.jpg",
    "/Railing/railing6.jpg",
    "/Railing/railing7.jpg",
    "/Railing/railing6 (2).jpg",
   
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative px-20 py-10 mb-12">
        <img
          src="/Railing2.jpg"
          alt="Railing"
          className="w-full h-[300px] scale-100 rounded-4xl object-cover"
        />
        <h1 className="absolute inset-0 flex justify-center items-center text-center text-4xl md:text-5xl text-white font-bold drop-shadow-lg">
          Our Best Services for Railing
        </h1>
      </div>

      {/* Professional Description */}
      <div className="px-20 mb-10">
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-lg p-8 max-w-5xl mx-auto">
          <p className="text-lg text-gray-800 mb-4">
            At Steadwin, we provide top-notch railing solutions for residential and commercial projects. 
            Our expert team ensures exceptional craftsmanship, durability, and modern elegance in every railing we design and install.
          </p>
          <p className="text-lg text-gray-800">
            From stair railings to balcony and rooftop railings, our services combine safety, style, and functionality. 
            Each project is customized to match the aesthetics of your space while maintaining the highest standards of quality.
          </p>
        </div>
      </div>

      {/* Showcase Heading */}
      <div className="px-20 mb-6">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
          Our Railing Showcase
        </h2>
      </div>

      {/* Images Grid */}
      <div className="px-20 pb-10 grid grid-cols-2 md:grid-cols-2 gap-4">
        {stairImages.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <img
              src={img}
              alt={`railing ${index + 1}`}
              className="w-full h-96 object-cover transform hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Railing;
