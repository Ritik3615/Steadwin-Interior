import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // react-router-dom use kar
import { motion } from "framer-motion"; // motion/react ki jagah framer-motion

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
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-10 bg-sky-50">
      <h1 className="text-center text-3xl font-bold mb-10">About Us</h1>

      <div className="flex items-center justify-center gap-10 px-10">
        {/* Left side: Image */}
        <motion.img
          key={index}
          src={slide[index].img}
          alt="About"
          className="w-[650px] h-[600px] object-cover rounded-3xl shadow-2xl border-2 border-orange-400"
        //   initial={{ opacity: 0, scale:0.80}}
        //   animate={{ opacity: 1, scale:1 }}
        //   exit={{opacity:0, duration:1}}
          transition={{ duration: 2, ease:"easeInOut",}}
        />

        {/* Right side: Text */}
        <motion.div
          className="w-1/2 space-y-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Services list */}
          <div className="">
            {desc.map((data, i) => (
              <div
                key={i}
                className="p-2 rounded-2xl hover:shadow-xl border-gray-200 transition"
              >
                <h2 className="text-xl font-semibold text-gray-800">
                  {data.Title}
                </h2>
                <p className="pb-2">{data.desc}</p>
                <Link
                  to={data.Link}
                  className="bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 p-2"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>

          {/* About Section */}
          <div className="text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              About Steadwin
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At <span className="font-semibold text-blue-500">Steadwin</span>,
              we deliver interior design, consultancy, development, and railing
              solutions with a focus on quality and customer satisfaction.
            </p>
            <Link to="/About">
              <button className="mt-5 px-6 py-2 bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-semibold rounded-full shadow hover:scale-105 transition">
                View More About Us
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutHome;
