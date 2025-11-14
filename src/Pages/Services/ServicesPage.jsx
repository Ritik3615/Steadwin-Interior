// ServicesPage.jsx
// Place this file in your Vite + React project, e.g. src/components/ServicesPage.jsx
// Requires Tailwind CSS already set up in the project.

import React from "react";
import Footer from "../../Components/Footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen  bg-gray-50 text-gray-800 font-sans pt-20">
      {/* <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-500 rounded-md flex items-center justify-center text-white font-bold">S</div>
            <div>
              <h1 className="text-xl font-semibold">Steadwin Group</h1>
              <p className="text-sm text-gray-500">Interior • Railing • Consultancy • Real-estate</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <a href="#interior" className="hover:text-indigo-600">Interior</a>
            <a href="#railing" className="hover:text-indigo-600">Railing</a>
            <a href="#consultancy" className="hover:text-indigo-600">Consultancy</a>
            <a href="#developer" className="hover:text-indigo-600">Real Estate</a>
          </nav>
        </div>
      </header> */}

      <section className="w-full px-6 py-12">
        <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop"
          alt="Investor Relations"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Invest in the Future with <span className="text-amber-400">Steadwin Group</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Partner with us to build a future of innovation, sustainability, and global excellence.
          </p>
        </div>
      </section>

        <div className="grid gap-8 md:grid-cols-2">
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
              spaces — concept, 3D visuals, project management and final
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

          {/* Railing Section - includes backlink to dummy site */}
          <article id="railing" className="bg-white rounded-2xl shadow p-6">
            <header className="flex items-start justify-between">
              <h3 className="text-xl font-bold">Railing System</h3>
              <span className="text-sm text-gray-500">
                Stainless • Glass • Custom
              </span>
            </header>
            <p className="mt-4 text-gray-600">
              Dedicated division for high-quality railing systems — engineered
              for safety, durability and aesthetics.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>• Balcony & Stair railings</li>
              <li>• Powder-coated & stainless finishes</li>
              <li>• On-site measurement & installation</li>
            </ul>

            <div className="mt-6 flex gap-3">
              {/* Backlink to the dummy external railing site as requested */}
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
              Note: external link above points to the dummy domain{" "}
              <code>www.railing.com</code>.
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
              vendor evaluation and compliance advisory.
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

          {/* Real Estate Developer Section */}
          <article id="developer" className="bg-white rounded-2xl shadow p-6">
            <header className="flex items-start justify-between">
              <h3 className="text-xl font-bold">Real Estate Developer</h3>
              <span className="text-sm text-gray-500">
                Residential & Commercial
              </span>
            </header>
            <p className="mt-4 text-gray-600">
              Development arm handling small to mid-size residential and
              commercial projects — from land acquisition to handover.
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

        {/* <section id="contact" className="mt-12 bg-white rounded-2xl p-6 shadow">
          <h4 className="text-lg font-semibold">Contact / Enquiries</h4>
          <p className="mt-2 text-sm text-gray-600">
            For demo purposes, use the contact details below or wire this form
            to your CRM.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="text-sm">
              <p className="font-medium">Phone</p>
              <p className="text-gray-600">+91 90352 79309</p>
            </div>
            <div className="text-sm">
              <p className="font-medium">Email</p>
              <p className="text-gray-600">info@steadwin.in</p>
            </div>
            <div className="text-sm">
              <p className="font-medium">Location</p>
              <p className="text-gray-600">Bangalore, India</p>
            </div>
          </div>
        </section> */}
      </section>

      {/* <footer className="mt-12 bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center text-sm text-gray-500">
          <div>© {new Date().getFullYear()} Steadwin Group</div>
          <div className="space-x-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer> */}
      <Footer/>
    </main>
  );
}
