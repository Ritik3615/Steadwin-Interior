import React from "react";
import service from "/service.png";

function Services() {
  return (
    <>
      <div className="flex  justify-between mt-7 mb-7 pl-32 pr-32">
        <h1 className="text-4xl font-bold">What we Offer?</h1>
        <button className="border-2 rounded-4xl pl-6 pr-6 border-y-indigo-400 bg-blue-700 text-white">
          get your quates
        </button>
      </div>
      <div className="border-2px grid grid-cols-3 h-[500px] m-32 mt-0 mb-5 justify-top items-top gap-5 space-x-5 shadow-2xl">
        <div className="border-2 p-2 rounded-2xl shadow-2xl shadow-blue-400 hover:scale-y-105">
          <div className="flex">
            <img src={service} alt="serviceimg" className="h-8 w-8 m-3" />
            <h1 className="text-black font-bold text-2xl p-3 pl-0">
              Our Services
            </h1>
          </div>
          <div className="p-3">
            <p className="p-3">Interior Service starting to end</p>
            <p className="p-3">Steadwin Railing System</p>
            <p className="p-3">Steadwin Consultancy Services</p>
            <p className="p-3">Steadwin devloper</p>
          </div>
        </div>
        <div className="border-2 p-2 rounded-2xl shadow-blue-400 hover:scale-y-105">
          <div className="Pricing p-3 pb-0 flex">
            <img
              src="/price-service.svg"
              alt="pricesvg"
              className="h-10 w-10 m-3"
            />
            <h1 className="text-2xl font-bold p-3 pl-0">Pricing and charges</h1>
          </div>
          <div>
            <ul className="p-3 pt-0">
              <li className="p-3">
                Flat 10-year warranty¹ - Stay worry-free with our warranty
                policy on modular products.
              </li>
              <li className="p-3">
                Up to 1-year on-site service warranty¹ - Warranty on on-site
                services such as painting, electrical, plumbing and more.
              </li>
            </ul>
          </div>
        </div>
        <div className="border-2 p-2 rounded-2xl">
          <div className="flex">
            <img
              src="/validity.svg"
              alt="validity"
              className="h-10 w-10 m-3 text-sky-300"
            />
            <h1 className="p-3 pl-0 text-2xl font-bold">Warranty</h1>
          </div>
          <div className="p-3">
            <p className="p-3">
              We provide a 5-year warranty on all plywood supplied and installed
              by our company. Ensures long-lasting durability when
              used under normal conditions. Damage caused by fire, water
              leakage, chemical exposure, or misuse is not covered under this
              warranty.
            </p>
            <p className="p-3">
              Our waterproofing services come with a 7-year warranty against
              seepage, leakage, or dampness, provided the treated area is not
              tampered with or structurally damaged. This warranty remains valid
              only when the work has been carried out and maintained as per our
              professional guidelines.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
