import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const slide = [{ img: "/company-image.jpg" }];

function AboutHome() {
  const desc = [
    {
      Title: "Interior",
      desc: "We are providing best services for interior",
      Link: "/Services/Interior",
    },
    {
      Title: "Consultancy",
      desc: "We are providing expert consultancy services",
      Link: "/Services/Consultancy",
    },
    {
      Title: "Developer",
      desc: "We are providing professional developer solutions",
      Link: "/Services/Developer",
    },
    {
      Title: "Railing",
      desc: "We are providing high-quality railing services",
      Link: "/Services/Railing",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slide.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Heading */}
      <div>
        <h2 className="text-center md:text-3xl font-extrabold md:mb-3 bg-[#2b5d7c] bg-clip-text text-transparent tracking-wide">
          About Our Organization
        </h2>
        <span className="block md:w-[100px] lg:w-[350px] w-[200px] rounded-lg h-1 mx-auto mt-3 bg-[#2b5d7c] mb-5"></span>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-10 md:px-12 py-10 bg-gray-50">
        {/* Left side: Image */}
        <div className="relative w-full lg:w-[650px] h-[350px] md:h-[500px]">
          <motion.img
            src={slide[index].img}
            alt="About Organization"
            className="w-full h-full object-cover rounded-lg shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Right side: Content */}
        <motion.div
          className="w-full lg:w-1/2 space-y-8 text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-wide">
            About Our <span className="text-blue-500">Organization</span>
          </h2>

          {/* Subheading */}
          <p className="text-gray-700 text-sm md:text-base">
            About{" "}
            <span className="font-semibold text-gray-900">
              Steadwin India Private Limited
            </span>
          </p>

          <p className="italic text-gray-500 text-sm md:text-base">
            “Want a premium space connect us”
          </p>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Steadwin India Private Limited is a pioneering entity dedicated to
            providing superior quality interior and architectural solutions that
            precisely meet our customers’ diverse requirements. Our team focuses
            on functionality, innovation, and aesthetic design that ensures
            every project delivers excellence.
            <Link
              to="/About"
              className="text-blue-500 font-semibold hover:underline ml-1"
            >
              Read More
            </Link>
          </p>

          {/* Icon + Services Count */}
          {/* <div className="flex flex-col items-center justify-center pt-8">
            <div className="bg-white rounded-full shadow-xl p-4">
              <img
                src="/factory-icon.svg"
                alt="Factory Icon"
                className="w-10 h-10"
              />
            </div>
            <p className="text-blue-600 font-bold text-2xl mt-3">19</p>
            <p className="text-gray-600 font-medium text-sm">
              Services Available
            </p>
          </div> */}
        </motion.div>
      </div>
    </div>
  );
}

export default AboutHome;
