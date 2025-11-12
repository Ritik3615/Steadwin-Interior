import React from "react";

// Image arrays
const stairImages = [
  "/Railing/railing1 (2).jpg",
  "/Railing/railing4.jpg",
  "/Railing/railing5.jpg",
  "/Railing/railing6.jpg",
  "/Railing/railing7.jpg",
  "/Railing/railing6 (2).jpg",
];

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
  "/Bedroom/bedroom10.jpg",
  "/Bedroom/bedroom11.jpg",
  "/Bedroom/bedroom12.jpg",
  "/Bedroom/bedroom13.jpg",
  "/Bedroom/bedroom14.jpg",
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
  "/Kitchen/kitchen9.jpg",
  "/Kitchen/kitchen10.jpg",
  "/Kitchen/kitchen11.jpg",
  "/Kitchen/kitchen12.jpg",
  "/Kitchen/kitchen13.jpg",
];

function GallerySection({ title, images }) {
  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={img}
              alt={`${title} ${index + 1}`}
              className="w-full h-60 object-cover transform hover:scale-105 hover:-scale-z-150 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <div className="px-4 md:px-16 py-8 bg-gray-50">
      <div
        className="relative bg-cover bg-center h-[40vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg">
          Our<span className="text-amber-400 px-3">Gallary</span>
        </h1>
      </div>

      <GallerySection title="Stair Railings" images={stairImages} />
      <GallerySection title="Living Halls" images={hallImages} />
      <GallerySection title="Bedrooms" images={bedroomImages} />
      <GallerySection title="Kitchens" images={kitchenImages} />
    </div>
  );
}

export default Gallery;
