import React from "react";
import Footer from "../../Components/Footer";


function Consultancy() {
  return (
    <>
      <div className="w-full">
        {/* Top Heading Section */}
        <div
          className="relative px-20 py-10 h-[250px] flex items-center justify-center bg-cover bg-center rounded-lg mb-16"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
          <h1 className="relative text-5xl font-bold text-white text-center drop-shadow-lg">
            Steadwin Consultancy
          </h1>
        </div>

        {/* Introduction */}
        <div className="px-20 mb-12">
          <p className="text-lg text-gray-700 max-w-3xl">
            At Steadwin Consultancy, we provide professional guidance and expert
            solutions to help you transform your spaces and projects. Our team
            brings years of experience to ensure that every decision aligns with
            your goals and vision.
          </p>
        </div>

        {/* Process Section */}
        <div className="px-20 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition duration-300">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2">
                Initial Consultation
              </h3>
              <p className="text-gray-600">
                We understand your needs, goals, and vision to provide tailored
                advice.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition duration-300">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">
                Planning & Strategy
              </h3>
              <p className="text-gray-600">
                Our experts create a detailed plan, offering design solutions
                and cost-effective strategies.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition duration-300">
              <div className="text-5xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold mb-2">Execution Support</h3>
              <p className="text-gray-600">
                We assist you throughout implementation, ensuring smooth project
                execution and superior results.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="px-20 mb-16 bg-gray-100 rounded-lg p-10">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Why Choose Steadwin?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Expert guidance from experienced professionals</li>
            <li>Tailored solutions for your unique needs</li>
            <li>End-to-end support from planning to execution</li>
            <li>Commitment to quality and client satisfaction</li>
          </ul>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Consultancy;
