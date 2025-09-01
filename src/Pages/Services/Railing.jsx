import { useState } from "react";
import { motion } from "motion/react";
// import Railing1 from ""

function Railing() {
  const Place = ["Stair", "Roof", "Baalkoni"];
  const [active, setActive] = useState("Stair");
  return (
    <>
      <div className="px-20 py-10 ">
        <img src="/public/Railing1.jpg" alt="Railingimg"  className="w-full h-[300px] relative -z-50 scale-100 rounded-4xl"/>
        <h1 className="absolute inset-60 object-cover text-center text-4xl text-white font-bold scale-3d hover:text-black">Our Best showcase Services For Railing</h1>
      </div>

      {/* Item to be place in right side with map and motion */}
      <div className="flex justify-end gap-10 pr-20 ">
        {Place.map((index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className="relative px-2 rounded-4xl"
          >
            {index}
            {active === index &&(
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 -bottom-1 bg-amber-700 h-1 rounded-full"
                transition={{type:"spring", stiffness:400, damping:30}}
              />
            )}
          </button>
        ))}
      </div>
    </>
  );
}

export default Railing;
