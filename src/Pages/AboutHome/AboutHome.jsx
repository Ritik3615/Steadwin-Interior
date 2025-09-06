import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const slide = [{ img: "/img1.jpg" },];

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
    <div className="w-full py-12 md:py-16 px-5 md:px-20 bg-sky-50">
      {/* Heading */}
      <motion.h1
        className="text-center text-3xl md:text-5xl font-extrabold md:mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Us
        <span className="block w-24 h-1 mx-auto mt-3 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full"></span>
      </motion.h1>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 px-2 md:px-10">
        {/* Left side: Image */}
        <div className="relative w-full lg:w-[650px] h-[300px] md:h-[500px] flex justify-center mb-8 lg:mb-0">
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
          className="w-full lg:w-1/2 space-y-6 md:space-y-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Services list */}
          

          {/* About Section */}
          <div className="text-left mt-4 md:mt-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
              About Steadwin
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              At <span className="font-semibold text-blue-500">Steadwin</span>,
              we deliver interior design, consultancy, development, and railing
              solutions with a focus on quality and customer satisfaction.
            </p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est commodi pariatur, amet natus non eveniet dolore ratione accusantium veniam eos distinctio autem, accusamus sapiente quam tempore ullam. Aspernatur facilis excepturi in rerum ut sit omnis temporibus ea, voluptas dolorum ipsa, fugit dolores. Vero, maxime? Optio consequatur quaerat magni dolore repellendus fugit vitae debitis vel natus rem odit sed esse quia a laudantium dignissimos consequuntur itaque, quasi quidem necessitatibus. Reiciendis, perspiciatis vitae soluta quidem molestiae placeat sit rem, at doloribus repellat et animi optio, tenetur nostrum saepe aut provident! Dicta at, temporibus possimus facere quia tempore explicabo obcaecati ratione exercitationem eligendi.</p>
            <Link to="/About">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 15px rgba(59,130,246,0.6)",
                }}
                className="mt-4 md:mt-6 px-6 md:px-7 py-2 md:py-3 bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-semibold rounded-full shadow-lg"
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
