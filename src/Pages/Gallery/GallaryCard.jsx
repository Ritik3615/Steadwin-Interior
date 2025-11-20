import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryItems = [
  { title: "Best consultancy services", imageUrl: "/Bedroom/GallaryConsultancy.jpg" },
  { title: "Luxury Sliding Windows", imageUrl: "/HAll/Developers.jpg" },
  { title: "Innovative Home Designs", imageUrl: "/HAll/Hall23.jpg" },
  { title: "Innovative Railing Systems", imageUrl: "/HAll/Hall10.jpg" },
  { imageUrl: "/Bedroom/bedroom7.jpg" },
  { imageUrl: "/Railing/Railing11.jpg" },
  { imageUrl: "/HAll/Hall12.jpg" },
  { imageUrl: "/Bedroom/bedroom9.jpg" },
  { imageUrl: "/Railing/Railing15.jpg" },
  { imageUrl: "/HAll/Hall14.jpg" },
];

// Card Component
function GalleryCardItem({ title, imageUrl }) {
  return (
    <div className="relative min-w-[350px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
      <img src={imageUrl} className="w-full h-[350px] object-cover" />
      <div className="absolute top-0 left-0 bg-[#2b5d7c]/80 text-white text-xs font-semibold px-3 py-1 rounded-br-lg">
        Steadwin
      </div>
    </div>
  );
}

export default function GalleryCard() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-gray-50 py-4 relative mt-24">

      {/* Left Button */}
      <button
        onClick={scrollLeft}
        className="hidden md:block absolute top-[45%] left-16 -translate-y-1/2 z-20 bg-black/60 hover:bg-black text-white p-3 rounded-full transition"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className="hidden md:block absolute top-[45%] right-16 -translate-y-1/2 z-20 bg-black/60 hover:bg-black text-white p-3 rounded-full transition"
      >
        <ChevronRight size={22} />
      </button>

      {/* Header */}
      <div className="px-6 md:px-12 lg:px-20 mb-10 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold text-[#2b5d7c]">Our Gallery</h1>
        <div className="w-32 h-1 bg-[#2b5d7c] mt-2 rounded"></div>
      </div>

      {/* Manual Scroll Slider */}
      <div
        ref={sliderRef}
        className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar px-6 md:px-12 lg:px-20 p-6"
      >
        {galleryItems.map((item, index) => (
          <GalleryCardItem key={index} {...item} />
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-12 mb-10">
        <Link
          to="/Gallery"
          className="inline-block px-10 py-3 bg-gradient-to-r from-[#2b5d7c] to-[#3c8dbc]
                     text-white font-semibold rounded-full shadow-lg
                     hover:from-[#1f445c] hover:to-[#367fa9] hover:shadow-xl transition-all duration-300"
        >
          VIEW ALL
        </Link>
      </div>
    </section>
  );
}
