import React, { useState, useEffect } from "react";

function OfferSlides() {
  const [image, setImage] = useState(null); // keep the same name

  const slides = [
    { img: "bg-image.png", title: "offer 1", desc: "today on railing", offer: "10% OFF" },
    { img: "image-bg.png", title: "offer 2", desc: "on interior work", offer: "20% OFF" },
    { img: "bg-image.png", title: "offer 3", desc: "for employees", offer: "Special Discount" },
    { img: "image-bg.png", title: "offer 4", desc: "general offer for all", offer: "15% OFF" },
    {
      img: "image-bg.png",
      title: "offer 5",
      desc: "lets begin with whole energy of yours",
      offer: "Mega Deal",
    },
  ];

  useEffect(() => {
    setImage(slides[0]); // set first slide as object
    const interval = setInterval(() => {
      const index = Math.floor(Math.random() * slides.length);
      setImage(slides[index]); // store entire slide object
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!image) return null;

  return (
    <div className="overflow-hidden h-full w-full rounded-3xl shadow-2xl flex justify-center items-center relative">
      <img
        src={image.img}
        alt={image.title}
        className="w-full h-full "
      />

      {/* Overlay text */}
      <div className="absolute bottom-4 left-4 bg-black/50 text-white p-3 rounded-lg">
        <h2 className="text-xl font-bold">{image.title}</h2>
        <p className="text-sm">{image.desc}</p>
        <span className="text-red-400 font-semibold">{image.offer}</span>
      </div>
    </div>
  );
}

export default OfferSlides;
