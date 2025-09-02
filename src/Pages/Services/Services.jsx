import React from "react";
import service from "/service.png";

function Services() {
  return (
    <section className="relative bg-gradient-to-r from-gray-50 to-gray-100 py-16">
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 px-6 sm:px-20">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-gray-900 text-center sm:text-left">
            What we Offer?
          </h1>
          <button className="mt-4 sm:mt-0 rounded-xl px-6 py-3 bg-orange-500 text-white font-medium hover:bg-orange-600 shadow-md transition">
            Get your Quotation
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-20">
          {/* Card 1 */}
          <div className="border p-6 rounded-2xl shadow-md bg-white hover:shadow-xl hover:shadow-orange-200/40 hover:scale-105 transition duration-300">
            <div className="flex items-center">
              <div className="bg-orange-100 p-3 rounded-xl mr-3">
                <img src={service} alt="serviceimg" className="h-6 w-6" />
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                Our Services
              </h1>
            </div>
            <div className="mt-3 text-gray-600 leading-relaxed">
              <p className="py-1">Interior Service starting to end</p>
              <p className="py-1">Steadwin Railing System</p>
              <p className="py-1">Steadwin Consultancy Services</p>
              <p className="py-1">Steadwin Developer</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border p-6 rounded-2xl shadow-md bg-white hover:shadow-xl hover:shadow-orange-200/40 hover:scale-105 transition duration-300">
            <div className="flex items-center">
              <div className="bg-orange-100 p-3 rounded-xl mr-3">
                <img
                  src="/price-service.svg"
                  alt="pricesvg"
                  className="h-6 w-6"
                />
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                Pricing & Charges
              </h1>
            </div>
            <ul className="mt-3 text-gray-600 leading-relaxed">
              <li className="py-2">
                Flat 10-year warranty¹ – Stay worry-free with our warranty policy
                on modular products.
              </li>
              <li className="py-2">
                Up to 1-year on-site service warranty¹ – Painting, electrical,
                plumbing and more.
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="border p-6 rounded-2xl shadow-md bg-white hover:shadow-xl hover:shadow-orange-200/40 hover:scale-105 transition duration-300">
            <div className="flex items-center">
              <div className="bg-orange-100 p-3 rounded-xl mr-3">
                <img src="/validity.svg" alt="validity" className="h-6 w-6" />
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                Warranty
              </h1>
            </div>
            <div className="mt-3 text-gray-600 leading-relaxed">
              <p className="py-2">
                We provide a 5-year warranty on all plywood supplied and
                installed by our company. Ensures long-lasting durability under
                normal conditions.
              </p>
              <p className="py-2">
                Our waterproofing services come with a 7-year warranty against
                seepage, leakage, or dampness, provided the treated area is not
                tampered with or structurally damaged.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
