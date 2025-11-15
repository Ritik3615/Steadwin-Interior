// ServicesPage.jsx

import React from "react";
import Footer from "../../Components/Footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">

      {/* HERO SECTION */}
      <section className="relative h-[70vh] w-full mt-20 flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop"
          alt="Investor Relations"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Invest in the Future with{" "}
            <span className="text-amber-400">Steadwin Group</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Partner with us to build a future of innovation, sustainability,
            and global excellence.
          </p>
        </div>
      </section>

      {/* CONTENT GRID */}
      <section className="w-full px-6 py-16 max-w-7xl mx-auto">

        <div className="grid gap-10 md:grid-cols-2">

          {/* Interior Section */}
          <article id="interior" className="bg-white rounded-2xl shadow p-6">
            <header className="flex items-start justify-between">
              <h3 className="text-xl font-bold">Interior</h3>
              <span className="text-sm text-gray-500">
                Design • Fit-outs • Execution
              </span>
            </header>

            <p className="mt-4 text-gray-600">
              End-to-end interior solutions for residential and commercial
              spaces — concept, 3D visuals, project management, and final
              handover.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>• Turnkey designs</li>
              <li>• Modular kitchens & wardrobes</li>
              <li>• Lighting and fixtures</li>
            </ul>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-50"
              >
                Get Interior Quote
              </a>
            </div>
          </article>

          {/* Railing Section */}
          <article id="railing" className="bg-white rounded-2xl shadow p-6">
            <header className="flex items-start justify-between">
              <h3 className="text-xl font-bold">Railing System</h3>
              <span className="text-sm text-gray-500">
                Stainless • Glass • Custom
              </span>
            </header>

            <p className="mt-4 text-gray-600">
              Dedicated division for high-quality railing systems — engineered
              for safety, durability, and aesthetics.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>• Balcony & Stair railings</li>
              <li>• Powder-coated & stainless finishes</li>
              <li>• On-site measurement & installation</li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a
                href="https://shopify-clone-247.preview.emergentagent.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-lg bg-indigo-600 text-white hover:opacity-95"
              >
                Visit Railing Site
              </a>

              <a
                href="#contact"
                className="inline-block px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Request Railing Quote
              </a>
            </div>

            <p className="mt-4 text-xs text-gray-400">
              Note: external link above points to dummy domain.
            </p>
          </article>

          {/* Consultancy Section */}
          <article id="consultancy" className="bg-white rounded-2xl shadow p-6">
            <header className="flex items-start justify-between">
              <h3 className="text-xl font-bold">Consultancy</h3>
              <span className="text-sm text-gray-500">Project Advisory</span>
            </header>

            <p className="mt-4 text-gray-600">
              We provide consultancy for project feasibility, cost estimation,
              vendor evaluation, and compliance advisory.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>• Feasibility & budgeting</li>
              <li>• Contractor selection</li>
              <li>• Compliance & safety audits</li>
            </ul>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-50"
              >
                Talk to a Consultant
              </a>
            </div>
          </article>

          {/* Developer Section */}
          <article id="developer" className="bg-white rounded-2xl shadow p-6">
            <header className="flex items-start justify-between">
              <h3 className="text-xl font-bold">Real Estate Developer</h3>
              <span className="text-sm text-gray-500">
                Residential & Commercial
              </span>
            </header>

            <p className="mt-4 text-gray-600">
              Development arm handling residential and commercial projects —
              from land acquisition to handover.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>• Project planning & approvals</li>
              <li>• Construction management</li>
              <li>• Post-handover support</li>
            </ul>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-50"
              >
                Explore Projects
              </a>
            </div>
          </article>

        </div>
      </section>

      <Footer />
    </main>
  );
}
