import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Hall20 from "/HAll/Developers.jpg";
import Railing10 from "/Railing/Railing10.jpg";
import Bedroom32 from "/Bedroom/GallaryConsultancy.jpg";

const galleryItems = [
  {
    title: "Best consultancy services",
    subtitle: "Expert advice for all your needs.",
    imageUrl: Bedroom32,
  },
  {
    title: "Luxury Sliding Windows",
    subtitle: "The perfect blend of durability and style for modern homes.",
    imageUrl: Hall20,
  },
  {
    title: "Innovative Home Designs",
    subtitle: "Transforming spaces with cutting-edge architecture.",
    imageUrl: "/HAll/Hall23.jpg",
  },
  {
    title: "Innovative Railing Systems",
    subtitle: "Revolutionary housing solutions now available.",
    imageUrl: Railing10,
  },
];

function Gallery({ title, subtitle, imageUrl }) {
  return (
    <div className="relative min-w-[280px] md:min-w-[350px] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-56 object-cover"
        onError={(e) => {
          e.target.src =
            "https://placehold.co/400x400/94a3b8/ffffff?text=Image+Missing";
        }}
      />

      <div className="absolute top-0 left-0 bg-slate-800/80 text-white text-xs font-semibold px-3 py-1 rounded-br-lg">
        Steadwin
      </div>

      <div className="absolute inset-0 flex items-center justify-start p-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-3 max-w-xs">
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          <p className="text-xs text-gray-700 mt-1">{subtitle}</p>
        </div>
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
    <section className="bg-gray-50 p-6 px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-semibold text-slate-800">
              Our Gallery
            </h1>
            <div className="w-38 h-1 bg-blue-600 mt-2 rounded"></div>
          </div>

          {/* Arrows */}
          <div className="flex space-x-2">
            <button
              onClick={scrollLeft}
              className="p-3 bg-slate-800 text-white rounded hover:bg-slate-600 transition"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={scrollRight}
              className="p-3 bg-slate-800 text-white rounded hover:bg-slate-600 transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
        >
          {galleryItems.map((item, i) => (
            <Gallery key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
