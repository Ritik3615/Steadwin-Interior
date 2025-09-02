import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const slide = [{ img: "/img1.jpg" }, { img: "/Railing2.jpg" }];

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
    <div className="w-full py-16 bg-sky-50">
      {/* Heading */}
      <motion.h1
        className="text-center text-5xl font-extrabold mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Us
        <span className="block w-24 h-1 mx-auto mt-3 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full"></span>
      </motion.h1>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 px-10">
        {/* Left side: Image */}
        <div className="relative w-[650px] h-[500px] flex justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={slide[index].img}
              alt="About"
              className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-blue-200"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </AnimatePresence>
        </div>

        {/* Right side: Text */}
        <motion.div
          className="w-full lg:w-1/2 space-y-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Services list */}
          <div className="grid sm:grid-cols-2 gap-5">
            {desc.map((data, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl border border-gray-200 bg-white shadow hover:shadow-2xl hover:-translate-y-1 transition"
              >
                <h2 className="text-xl font-semibold text-gray-800">
                  {data.Title}
                </h2>
                <p className="pb-3 text-gray-600">{data.desc}</p>
                <Link
                  to={data.Link}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm rounded-lg hover:scale-105 transition px-4 py-2 inline-block"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>

          {/* About Section */}
          <div className="text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              About Steadwin
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At <span className="font-semibold text-blue-500">Steadwin</span>,
              we deliver interior design, consultancy, development, and railing
              solutions with a focus on quality and customer satisfaction.
            </p>
            <Link to="/About">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 15px rgba(59,130,246,0.6)",
                }}
                className="mt-6 px-7 py-3 bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-semibold rounded-full shadow-lg"
              >
                View More About Us
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutHome;
