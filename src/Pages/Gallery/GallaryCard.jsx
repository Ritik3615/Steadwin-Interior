import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryItems = [
  {
    title: "Luxury Sliding Windows",
    subtitle: "The perfect blend of durability and style for modern homes.",
    imageUrl:
      "https://placehold.co/400x400/f1f5f9/1e293b?text=Window+Product+1",
  },
  {
    title: "Japanese Engineering",
    subtitle: "Revolutionary housing solutions now available.",
    imageUrl:
      "https://placehold.co/600x400/0f172a/f1f5f9?text=Modern+Facade+2",
  },
  {
    title: "Sleek Modern Doors",
    subtitle: "Experience the future of seamless living and elegance.",
    imageUrl:
      "https://placehold.co/400x400/cbd5e1/1e293b?text=Exterior+View+3",
  },
];

function Gallery({ title, subtitle, imageUrl }) {
  return (
    <div className="relative w-full rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.src =
            "https://placehold.co/400x400/94a3b8/ffffff?text=Image+Missing";
        }}
      />

      <div className="absolute top-0 left-0 bg-slate-800/80 text-white text-xs font-semibold px-3 py-1 rounded-br-lg">
        TOSTEM
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
  return (
    <section className=" bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-semibold text-slate-800">
              Our Gallery
            </h1>
            <div className="w-12 h-1 bg-blue-600 mt-2 rounded"></div>
          </div>

          {/* Arrows */}
          <div className="flex space-x-2">
            <button className="p-3 bg-slate-800 text-white rounded hover:bg-slate-600 transition">
              <ChevronLeft size={20} />
            </button>
            <button className="p-3 bg-slate-800 text-white rounded hover:bg-slate-600 transition">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <Gallery key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
