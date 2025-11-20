// ServicesPage.jsx

import React from "react";
import Footer from "../../Components/Footer";
import Homepageform from "../../Form/Homepageform";
import interiorImage from "/HAll/Hall18.jpg"
import RailingImage from "/Railing/Railing18.jpg"
import { Link } from "react-router-dom";

export default function ServicesPage() {
  const headerImage =
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop";

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">

      {/* HERO SECTION (unchanged) */}
      <section
        className="relative h-[40vh] top-20 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Services
          </h1>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="w-full px-6 py-24 max-w-7xl mx-auto space-y-24 mt-10">

        {/* ========= INTERIOR (Image Left) ========= */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src={interiorImage}
            alt="Interior"
            className="rounded-xl shadow-lg w-full object-cover h-80"
          />

          <div>
            <h2 className="text-3xl font-bold">Interior</h2>
            <p className="mt-4 text-gray-600">
              End-to-end interior solutions for homes and commercial spaces,
              including concept, design, execution and handover.
            </p>

            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Full turnkey interior design</li>
              <li>• Modular kitchens & wardrobes</li>
              <li>• Lighting, fixtures & space optimization</li>
            </ul>

            <Link
              to="/Services/Interior"
              className="inline-block mt-6 px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
            >
              More Details
            </Link>
          </div>
        </div>

        {/* ========= RAILING (Content Left) ========= */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold">Railing System</h2>
            <p className="mt-4 text-gray-600">
              Premium railing systems engineered for durability, safety and aesthetics.
            </p>

            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Glass, stainless steel & custom designs</li>
              <li>• Balcony & staircase solutions</li>
              <li>• Precision measurement & installation</li>
            </ul>

            <div className="mt-6 flex gap-4">
              {/* <a
                href="http://localhost:5173/services/railing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
              >
                Visit Railing Site
              </a> */}

              <Link
                to="/Services/Railing"
                className="px-6 py-3 rounded-lg border border-gray-300 text-white bg-indigo-600 hover:bg-indigo-700"
              >
                More Details
              </Link>
            </div>
          </div>

          <img
            src={RailingImage}
            alt="Railing"
            className="order-1 md:order-2 rounded-xl shadow-lg w-full object-cover h-80"
          />
        </div>

        {/* ========= CONSULTANCY (Image Left) ========= */}
        <div className=" grid md:grid-cols-2 gap-10 items-center">

          <img
            src="https://images.pexels.com/photos/5816283/pexels-photo-5816283.jpeg?_gl=1*15xmqk3*_ga*Nzc5NDg5NzE2LjE3NTU3ODkyNTc.*_ga_8JE65Q40S6*czE3NjM0NjE2NDYkbzQwJGcxJHQxNzYzNDYxNjc1JGozMSRsMCRoMA.."
            alt="Consultancy"
            className=" rounded-xl shadow-lg w-full object-cover h-80"
          />

          <div className="">
            <h2 className="text-3xl font-bold">Consultancy</h2>
            <p className="mt-4 text-gray-600">
              Professional advisory for budgeting, vendor selection and project evaluation.
            </p>

            <ul className="mt-4 mb-7 space-y-2 text-gray-700">
              <li>• Feasibility & cost planning</li>
              <li>• Contractor evaluation</li>
              <li>• Compliance & audit review</li>
            </ul>
            
            <Link
              to="/Services/Consultancy"
              className=" mt-6 px-6 py-3 rounded-lg border border-gray-300 text-white bg-indigo-600 hover:bg-indigo-700"
            >
              More Details
            </Link>
          </div>
        </div>

        {/* ========= DEVELOPER (Content Left) ========= */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold">Real Estate Developer</h2>
            <p className="mt-4 text-gray-600">
              From land acquisition to project handover — complete development services.
            </p>

            <ul className="mt-4 space-y-2 mb-7 text-gray-700">
              <li>• Planning & approvals</li>
              <li>• Construction management</li>
              <li>• Post-handover services</li>
            </ul>

            <Link
              to="/Services/Developer" 
              className="px-6 py-3 rounded-lg border border-gray-300 text-white bg-indigo-600 hover:bg-indigo-700"
            >
              More Details
            </Link>
          </div>

          <img
            src="https://images.pexels.com/photos/7061662/pexels-photo-7061662.jpeg?_gl=1*g012gm*_ga*Nzc5NDg5NzE2LjE3NTU3ODkyNTc.*_ga_8JE65Q40S6*czE3NjM0NjE2NDYkbzQwJGcxJHQxNzYzNDYxODMzJGo3JGwwJGgw"
            alt="Developer"
            className="order-1 md:order-2 rounded-xl shadow-lg w-full object-cover h-80"
          />
        </div>

      </section>

      <Homepageform />
      <Footer />
    </main>
  );
}
