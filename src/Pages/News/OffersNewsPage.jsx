// OffersNewsPage.jsx

import React, { useState } from "react";
import Footer from "../../Components/Footer";
import NewsImage from "../../assets/image.jpg";
import Homepageform from "../../Form/Homepageform";

export default function OffersNewsPage() {
  // 👉 Add your images here
  const galleryImages = [
    { id: 1, src: "public/News/offer1.jpg" },
    { id: 2, src: "/News/offer2.jpg" },
    { id: 3, src: "/News/offer3.jpg" },
    { id: 4, src: "/News/offer4.jpg" },
    { id: 5, src: "/News/offer5.jpg" },
    { id: 6, src: "/News/offer6.jpg" },
    { id: 7, src: "/News/offer7.jpg" },
    { id: 8, src: "/News/offer8.jpg" },
    { id: 9, src: "/News/offer9.jpg" },
    { id: 10, src: "/News/offer10.jpg" },
    { id: 11, src: "/News/offer11.jpg" },
    
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans mt-8">

      {/* HERO SECTION */}
      <section
        className="relative h-[40vh] top-20 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${NewsImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Latest News & Offers <span className="text-amber-400"></span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Explore all discounts, festive offers, and exclusive announcements.
          </p>
        </div>
      </section>

      {/* OFFERS SECTION */}
      <section className="mx-auto px-6 py-16 mt-20">

        {/* <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold">Latest News & Offers</h2>
          <p className="mt-2 text-gray-600">
            Seasonal deals, special promotions, and important updates.
          </p>
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              className="w-full overflow-hidden rounded-xl shadow"
            >
              <img
                src={img.src}
                alt="Gallery"
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>

      </section>

      <Homepageform />
      <Footer />
    </main>
  );
}
