import React from "react";
import service from "/service.png";

function Services() {
  return (
    <>
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-7 mb-7 px-6 sm:px-20">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-0 text-center sm:text-left">
          What we Offer?
        </h1>
        <button className="border-2 rounded-full px-6 py-2 border-indigo-400 bg-blue-700 text-white hover:bg-blue-800 transition">
          Get your Quotation
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-20 mb-10">
        {/* Card 1 */}
        <div className="border-2 p-4 rounded-2xl shadow-lg hover:scale-105 transition">
          <div className="flex items-center">
            <img src={service} alt="serviceimg" className="h-8 w-8 mr-3" />
            <h1 className="text-black font-bold text-xl sm:text-2xl">
              Our Services
            </h1>
          </div>
          <div className="mt-3 text-gray-700">
            <p className="py-1">Interior Service starting to end</p>
            <p className="py-1">Steadwin Railing System</p>
            <p className="py-1">Steadwin Consultancy Services</p>
            <p className="py-1">Steadwin Developer</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border-2 p-4 rounded-2xl shadow-lg hover:scale-105 transition">
          <div className="flex items-center">
            <img
              src="/price-service.svg"
              alt="pricesvg"
              className="h-10 w-10 mr-3"
            />
            <h1 className="text-xl sm:text-2xl font-bold">
              Pricing and Charges
            </h1>
          </div>
          <ul className="mt-3 text-gray-700">
            <li className="py-2">
              Flat 10-year warranty¹ - Stay worry-free with our warranty policy
              on modular products.
            </li>
            <li className="py-2">
              Up to 1-year on-site service warranty¹ - Painting, electrical,
              plumbing and more.
            </li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="border-2 p-4 rounded-2xl shadow-lg hover:scale-105 transition">
          <div className="flex items-center">
            <img src="/validity.svg" alt="validity" className="h-10 w-10 mr-3" />
            <h1 className="text-xl sm:text-2xl font-bold">Warranty</h1>
          </div>
          <div className="mt-3 text-gray-700">
            <p className="py-2">
              We provide a 5-year warranty on all plywood supplied and installed
              by our company. Ensures long-lasting durability under normal
              conditions.
            </p>
            <p className="py-2">
              Our waterproofing services come with a 7-year warranty against
              seepage, leakage, or dampness, provided the treated area is not
              tampered with or structurally damaged.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
