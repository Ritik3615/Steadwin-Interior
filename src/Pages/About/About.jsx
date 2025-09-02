import React from "react";
import Footer from "../../Components/Footer";

function About() {
  return (
    <>
      {/* Hero Section with Background */}
      <div
        className="relative bg-cover bg-center h-[40vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg">
          About <span className="text-amber-400">Steadwin Group</span>
        </h1>
      </div>

      {/* Main Content */}
      <div className="px-6 md:px-28 py-12">
        {/* Intro Section */}
        <div className="text-gray-700 leading-relaxed text-justify text-lg mb-12">
          <p>
            <strong>Steadwin Group</strong> was founded in <strong>2018</strong> with
            a vision to transform spaces into experiences. Starting our journey
            with <span className="font-medium">Interior Design</span>, we have now
            expanded our expertise into <span className="font-medium">Railing Systems</span>,{" "}
            <span className="font-medium">Consultancy</span>, and{" "}
            <span className="font-medium">Development Services</span>.
          </p>
          <p className="mt-4">
            From crafting modern, elegant homes to providing professional consultancy
            for large-scale projects, our mission has always been to deliver
            quality, innovation, and trust. Over the years, we’ve built not just
            spaces, but long-lasting relationships with our clients.
          </p>
        </div>

        {/* Interior Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb9?q=80&w=1200&auto=format&fit=crop"
            alt="Interior Design"
            className="rounded-2xl shadow-xl w-full h-64 md:h-72 object-cover"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Interior Design
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our interior design services are focused on creating elegant,
              functional, and timeless spaces. From modern apartments to luxury
              villas, we blend aesthetics with practicality to match every
              lifestyle and budget.
            </p>
          </div>
        </div>

        {/* Railing System Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Railing Systems
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our premium railing systems combine durability and style,
              delivering safety without compromising on aesthetics. Perfect for
              modern homes, offices, and commercial spaces.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1200&auto=format&fit=crop"
            alt="Railing System"
            className="rounded-2xl shadow-xl w-full h-64 md:h-72 object-cover"
          />
        </div>

        {/* Consultancy Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
            alt="Consultancy"
            className="rounded-2xl shadow-xl w-full h-64 md:h-72 object-cover"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Consultancy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              With years of expertise in the industry, we provide end-to-end
              consultancy for residential and commercial projects. From design
              guidance to material selection and execution strategies, our
              consultancy ensures your project is on the right track.
            </p>
          </div>
        </div>

        {/* Developer Services Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Developer Services
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our developer services cover project management, planning, and
              execution for large-scale ventures. With a focus on transparency
              and innovation, we help developers bring their visions to life.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
            alt="Developer Services"
            className="rounded-2xl shadow-xl w-full h-64 md:h-72 object-cover"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
