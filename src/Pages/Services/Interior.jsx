import React, { useState } from "react";
import { motion } from "framer-motion";

function Interior() {
  const [active, setActive] = useState("Hall");
  const items = ["Hall", "Bedroom", "Kitchen"];
  return (
    <>
      <div
        className="h-[200px] w-full bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?_gl=1*ynni2t*_ga*Nzc5NDg5NzE2LjE3NTU3ODkyNTc.*_ga_8JE65Q40S6*czE3NTY3MDYyMTkkbzIxJGcxJHQxNzU2NzA2MjI0JGo1NSRsMCRoMA..')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between h-full">
          {/* Heading Center */}
          <div className="flex justify-center pt-20">
            <h1 className="text-5xl font-bold text-white drop-shadow-lg">
              Interior Design Showcase
            </h1>
          </div>

          {/* Components bottom flex */}
        </div>
      </div>
      <div className="flex justify-end gap-10 px-20 py-10 text-black text-2xl relative">
        {items.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className="relative pb-2"
          >
            {item}
            {active === item && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 -bottom-1 h-1 bg-blue-500 rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </>
  );
}

export default Interior;
