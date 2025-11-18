import React from "react";
import { Building2, BarChart3, Users2, Globe2 } from "lucide-react";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";


const Investors = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-inter">
      {/* Hero Section */}
      <section className="relative h-[40vh] top-20 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${"/Railing/Railing15.jpg"})` }}>
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

      {/* Company Vision */}
      <section className="px-6 md:px-20 py-24 bg-white text-center mt-10">
        <h2 className="text-3xl md:text-5xl font-bold text-[#2b5d7c] mb-8">Our Vision & Mission</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700">
          Steadwin Group is driven by a mission to redefine design, development, and engineering through
          innovation and quality. Our long-term goal is to create scalable, sustainable spaces that
          inspire confidence, improve lives, and set new industry benchmarks.
        </p>
      </section>

      {/* Stats Section */}
      <section className="bg-[#2b5d7c] text-white py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
          <div>
            <Building2 className="mx-auto mb-3 w-10 h-10" />
            <h3 className="text-4xl font-bold">12+</h3>
            <p className="text-gray-200">Years of Excellence</p>
          </div>
          <div>
            <BarChart3 className="mx-auto mb-3 w-10 h-10" />
            <h3 className="text-4xl font-bold">35%</h3>
            <p className="text-gray-200">Average Annual Growth</p>
          </div>
          <div>
            <Users2 className="mx-auto mb-3 w-10 h-10" />
            <h3 className="text-4xl font-bold">200+</h3>
            <p className="text-gray-200">Team Members</p>
          </div>
          <div>
            <Globe2 className="mx-auto mb-3 w-10 h-10" />
            <h3 className="text-4xl font-bold">5+</h3>
            <p className="text-gray-200">Global Partnerships</p>
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="px-6 md:px-20 py-24 bg-gray-100 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#2b5d7c] mb-12">Why Invest in Steadwin Group?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Proven Track Record",
              desc: "Over a decade of successful projects across development, interiors, and infrastructure.",
              img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
            },
            {
              title: "Sustainable Innovation",
              desc: "We combine green practices with modern design, ensuring both environmental and business growth.",
              img: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=800&auto=format&fit=crop",
            },
            {
              title: "Scalable Opportunities",
              desc: "Our expanding portfolio opens investment channels across housing, design, and construction sectors.",
              img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2b5d7c] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 text-center bg-[#2b5d7c] text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Join Our Growth Journey</h2>
          <p className="text-gray-200 mb-10 text-lg">
            We invite investors who believe in innovation, quality, and sustainable business models.
            Partner with us and be part of a transformative vision.
          </p>
          <Link
            to="/InvestorForm"
            className="px-10 py-4 bg-amber-500 text-white font-semibold rounded-full hover:bg-amber-600 transition"
          >
            Contact Investor Relations →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Investors;
