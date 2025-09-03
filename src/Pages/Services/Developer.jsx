import React from "react";
import { motion } from "framer-motion";
import Footer from "../../Components/Footer";

function Developer() {
  return (
    <>
      <div className="w-full">
        {/* Top Heading Section */}
        <div
          className="relative px-20 py-10 h-[250px] flex items-center justify-center bg-cover bg-center rounded-lg mb-16"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/4393919/pexels-photo-4393919.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
          <h1 className="relative text-5xl font-bold text-white text-center drop-shadow-lg">
            Steadwin Developer Services
          </h1>
        </div>

        {/* Introduction */}
        <motion.div
          className="px-20 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-gray-700 max-w-3xl">
            Steadwin Developer Services specializes in real estate and property
            development. We handle residential and commercial projects with
            expertise, turning ideas into modern, sustainable, and high-quality
            buildings. From planning to execution, we ensure every project meets
            the highest standards.
          </p>
        </motion.div>

        {/* Development Process Section */}
        <motion.div
          className="px-20 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Our Development Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-2">Planning & Design</h3>
              <p className="text-gray-600">
                We create comprehensive architectural and construction plans to
                ensure your project’s success.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold mb-2">Construction</h3>
              <p className="text-gray-600">
                Our team manages the entire construction process with quality,
                safety, and efficiency.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl mb-4">🏡</div>
              <h3 className="text-xl font-semibold mb-2">Handover & Support</h3>
              <p className="text-gray-600">
                We ensure smooth project completion, handover, and ongoing
                support for clients.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          className="px-20 mb-16 bg-gray-100 rounded-lg p-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Why Choose Steadwin Developer?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Expertise in residential and commercial projects</li>
            <li>End-to-end property development solutions</li>
            <li>Focus on quality, safety, and sustainability</li>
            <li>Dedicated support from planning to handover</li>
          </ul>
        </motion.div>
      </div>
      <Footer/>
    </>
  );
}

export default Developer;
