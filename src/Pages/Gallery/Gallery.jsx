import React from "react";
import Footer from "../../Components/Footer";
import Homepageform from "../../Form/Homepageform";

// Image arrays
const stairImages = [
  "/Railing/railing1 (2).jpg",
  "/Railing/railing4.jpg",
  "/Railing/railing5.jpg",
  "/Railing/railing6.jpg",
  "/Railing/railing70.jpg",
  "/Railing/railing6 (2).jpg",
  "/Railing/Railing8.jpg",
  "/Railing/Railing9.jpg",
  "/Railing/Railing10.jpg",
  "/Railing/Railing11.jpg",
  "/Railing/Railing12.jpg",
  "/Railing/Railing13.jpg",
  "/Railing/Railing14.jpg",
  "/Railing/Railing15.jpg",
  "/Railing/Railing16.jpg",
  "/Railing/Railing17.jpg",
  "/Railing/Railing18.jpg",
  "/Railing/Railing19.jpg",
  "/Railing/Railing20.jpg",
  "/Railing/Railing21.jpg",
  "/Railing/Railing22.jpg",
  "/Railing/Railing23.jpg",
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
  "/HAll/Hall12.jpg",
  "/HAll/Hall13.jpg",
  "/HAll/Hall14.jpg",
  "/HAll/Hall15.jpg",
  "/HAll/Hall16.jpg",
  "/HAll/Hall17.jpg",
  "/HAll/Hall18.jpg",
  "/HAll/Hall19.jpg",
  "/HAll/Hall20.jpg",
  "/HAll/Hall21.jpg",
  "/HAll/Hall22.jpg",
  "/HAll/Hall23.jpg",
  "/HAll/Hall24.jpg",
  "/HAll/Hall25.jpg",
  "/HAll/Hall26.jpg",
  "/HAll/Hall27.jpg",
  "/HAll/Hall28.jpg",
  "/HAll/Hall29.jpg",
  "/HAll/Hall30.jpg",
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
  "/Bedroom/bedroom15.jpg",
  "/Bedroom/bedroom16.jpg",
  "/Bedroom/bedroom17.jpg",
  "/Bedroom/bedroom18.jpg",
  "/Bedroom/bedroom19.jpg",
  "/Bedroom/bedroom20.jpg",
  "/Bedroom/bedroom21.jpg",
  "/Bedroom/bedroom22.jpg",
  "/Bedroom/bedroom23.jpg",
  "/Bedroom/bedroom24.jpg",
  "/Bedroom/bedroom25.jpg",
  "/Bedroom/bedroom26.jpg",
  "/Bedroom/bedroom27.jpg",
  "/Bedroom/bedroom28.jpg",
  "/Bedroom/bedroom29.jpg",
  "/Bedroom/bedroom30.jpg",
  "/Bedroom/bedroom31.jpg",
  "/Bedroom/bedroom32.jpg",
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
    <>
      <div className="px-4 md:px-16 py-8 bg-gray-50">
        <div
          className="relative h-[40vh] top-20 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${"/Railing/Railing22.jpg"})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <h1 className="relative text-6xl md:text-4xl font-extrabold text-white text-center drop-shadow-lg">
            Our <span className="text-amber-400 px-2 text-3xl">Gallery</span>
          </h1>
        </div>

        <GallerySection title="Stair Railings" images={stairImages} />
        <GallerySection title="Living Halls" images={hallImages} />
        <GallerySection title="Bedrooms" images={bedroomImages} />
        <GallerySection title="Kitchens" images={kitchenImages} />
      </div>
      <Homepageform/>
      <Footer />
    </>
  );
}

export default Gallery;
