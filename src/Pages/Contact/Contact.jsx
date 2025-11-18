import React from "react";
import Footer from "../../Components/Footer";
import Quote from "../../Form/Quote";
import heroImage from "/Railing/Railing13.jpg";

function Contact() {
  return (
    <>
      {/* Top Banner */}
      <section className="relative h-[40vh] top-20 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contact {" "}
          <span className="text-amber-400">Us</span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative mt-10 px-6 md:px-28 py-16 bg-gray-400 text-black">
        {/* Heading */}
        <div className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get in <span className="text-blue-500">Touch</span>
        </div>

        {/* Info Section */}
        <div className="space-y-6 text-lg text-black mb-16 max-w-3xl mx-auto text-center">
          <p>
            Have questions or want to discuss your next interior project? We’d
            love to hear from you.
          </p>
          <p>
            <strong>📍 Address:</strong> 3rd Floor, Chandapura - Dommasandra Rd, opposite Bethany High, Sarjapura, Kommasandra, Bengaluru, Karnataka 562125
          </p>
          <p>
            <strong>📞 Phone:</strong> +91 8792695400
          </p>
          <p>
            <strong>📧 Email:</strong> info@Steadwin.in
          </p>
        </div>
      </div>

      {/* Imported Form Component */}
      <Quote />
      {/* <Footer /> */}
    </>
  );
}

export default Contact;
