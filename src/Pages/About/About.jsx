import React from "react";
import Footer from "../../Components/Footer";
import Homepageform from "../../Form/Homepageform"
import AboutImg from "../../assets/About.jpg";
import interiorImage from "../../assets/bgimage.jpg";

export default function About() {
  return (
    <>
      {/* Top Spacing Section (h-20) */}
      

      {/* Hero Section */}
      <section className="relative h-[40vh] top-20 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${AboutImg})` }}>
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About {" "}
            <span className="text-amber-400">Steadwin Group</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Partner with us to build a future of innovation, sustainability,
            and global excellence.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="relative px-6 md:px-28 py-16 mt-20">

        {/* Mission & Vision Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="p-8 bg-gray-100 rounded-2xl shadow-lg border-l-4 border-amber-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To craft functional, innovative, and elegant spaces while delivering
              unmatched reliability and customer satisfaction across interiors,
              railing systems, consultancy, and development services.
            </p>
          </div>

          <div className="p-8 bg-gray-100 rounded-2xl shadow-lg border-l-4 border-amber-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To become a leading name in modern living solutions—designing
              environments that inspire, empower, and elevate everyday life.
            </p>
          </div>
        </div>

        {/* Intro Section */}
        <div className="text-gray-700 leading-relaxed text-lg mb-16 text-justify">
          <p>
            <strong>Steadwin Group</strong>, established in <strong>2018</strong>,
            began with a mission to redefine the meaning of interior design. Today,
            our expertise spans across <strong>Interior Design</strong>,
            <strong> Railing Systems</strong>, <strong> Consultancy</strong>, and
            <strong> Development Services</strong>, serving residential,
            commercial, and large-scale modern projects.
          </p>

          <p className="mt-4">
            Our philosophy is simple: we do not just build or design—
            <span className="font-medium">
              we create environments that feel alive, meaningful, and future-ready.
            </span>
            Through innovation, transparency, and unwavering commitment, Steadwin
            has earned the trust of hundreds of families and organizations.
          </p>
        </div>

        {/* Interior Design Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <img
            src={interiorImage}
            alt="Interior Design"
            className="rounded-2xl shadow-xl w-full h-64 md:h-72 object-cover"
          />
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">
              Interior Design
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We create luxurious, functional, and timeless interiors. From urban
              apartments to premium villas, we balance aesthetics and utility to
              reflect your lifestyle and vision.
            </p>
          </div>
        </div>

        {/* Railing Systems Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">
              Railing Systems
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Built for durability and elegance, our railing systems elevate
              modern homes, offices, and commercial environments with unmatched
              strength and style.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1200&auto=format&fit=crop"
            alt="Railing System"
            className="rounded-2xl shadow-xl w-full h-64 md:h-72 object-cover"
          />
        </div>

        {/* Consultancy Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
            alt="Consultancy"
            className="rounded-2xl shadow-xl w-full h-64 md:h-72 object-cover"
          />
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">
              Consultancy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our consultancy services bring clarity and direction to every stage
              of your project—budgeting, material selection, spatial planning, and
              execution strategy.
            </p>
          </div>
        </div>

        {/* Developer Services Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">
              Developer Services
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We manage large-scale development projects with precision—
              integrating planning, execution, and quality assurance to bring
              ambitious visions to life.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
            alt="Developer Services"
            className="rounded-2xl shadow-xl w-full h-64 md:h-72 object-cover"
          />
        </div>
      </div>

      <Homepageform/>
      <Footer />
    </>
  );
}
