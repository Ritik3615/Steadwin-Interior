import React, { useState } from "react";

function InteriorShowcase() {
  const [activeSection, setActiveSection] = useState("Hall");

  // Define images manually
  const hallImages = [
    "/HAll/Hall1.jpg",
    "/HAll/Hall2.jpg",
    "/HAll/Hall3.jpg",
    "/HAll/Hall4.jpg",
    "/HAll/Hall5.jpg",
    "/HAll/Hall6.jpg",
    "/HAll/Hall7.jpg",
    "/HAll/Hall8.jpg",
    "/HAll/Hall9.jpg",
    "/HAll/Hall10.jpg",
    "/HAll/Hall11.jpg",
    // add up to 20 or as many as you want
  ];

  const bedroomImages = [
    "/Bedroom/bedroom1.jpg",
    "/Bedroom/bedroom2.jpg",
    "/Bedroom/bedroom3.jpg",
    "/Bedroom/bedroom4.jpg",
    "/Bedroom/bedroom5.jpg",
    "/Bedroom/bedroom6.jpg",
    "/Bedroom/bedroom7.jpg",
    "/Bedroom/bedroom8.jpg",
    "/Bedroom/bedroom9.jpg",
    "/Bedroom/bedroom9.jpg",
    "/Bedroom/bedroom10.jpg",
    "/Bedroom/bedroom11.jpg",
    "/Bedroom/bedroom12.jpg",
    "/Bedroom/bedroom13.jpg",
    "/Bedroom/bedroom14.jpg",
    // add up to 20 or more
  ];

  const kitchenImages = [
    "/Kitchen/kitchen1.jpg",
    "/Kitchen/kitchen2.jpg",
    "/Kitchen/kitchen3.jpg",
    "/Kitchen/kitchen4.jpg",
    "/Kitchen/kitchen5.jpg",
    "/Kitchen/kitchen6.jpg",
    "/Kitchen/kitchen7.jpg",
    "/Kitchen/kitchen8.jpg",
    "/Kitchen/kitchen10.jpg",
    "/Kitchen/kitchen11.jpg",
    "/Kitchen/kitchen12.jpg",
    "/Kitchen/kitchen13.jpg",
    "/Kitchen/kitchen9.jpg",
    // "/Kitchen/kitchen3.jpg",
    // add up to 20 or more
  ];

  // Map sections to images and filters
  const sections = {
    Hall: { images: hallImages, filter: "brightness(85%) contrast(110%)" },
    Bedroom: {
      images: bedroomImages,
      filter: "brightness(75%) contrast(120%)",
    },
    Kitchen: {
      images: kitchenImages,
      filter: "brightness(90%) contrast(105%)",
    },
  };

  const sectionNames = Object.keys(sections);

  return (
    <>
      <div className="my-10 relative mx-10">
        {/* Image */}
        <img
          src="/pexels2.jpg"
          alt="Interior Showcase"
          className="h-[300px] w-full object-cover rounded-lg shadow-lg"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg mb-4">
            Our Interior Showcase
          </h1>
          <p className="text-white text-lg md:text-xl text-center max-w-2xl">
            Explore our best work and experience in interior design. We take
            pride in crafting elegant, modern, and functional spaces that
            reflect your style and comfort.
          </p>
        </div>
      </div>

      <div className="px-10 py-10">
        {/* Section Buttons */}
        <div className="flex justify-center gap-8 mb-8">
          {sectionNames.map((name) => (
            <button
              key={name}
              onClick={() => setActiveSection(name)}
              className={`px-6 py-2 font-semibold rounded-full transition 
              ${
                activeSection === name
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Gallery of active section */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          {sections[activeSection].images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img
                src={img}
                alt={`${activeSection} ${index + 1}`}
                className="w-full h-100 object-cover transform hover:scale-105 transition duration-300"
                style={{ filter: sections[activeSection].filter }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default InteriorShowcase;
