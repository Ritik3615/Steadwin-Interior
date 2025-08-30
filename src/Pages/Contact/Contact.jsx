import React from "react";
import Footer from "../../Components/Footer";

function Contact() {
  return (
    <>
      <div className="px-6 md:px-28 py-12">
        {/* Heading */}
        <div className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Get in <span className="text-amber-500">Touch</span>
        </div>

        {/* Info Section */}
        <div className="space-y-6 text-lg text-gray-700 mb-12">
          <p>
            Have questions or want to discuss your next interior project?  
            We’d love to hear from you.
          </p>
          <p>
            <strong>📍 Address:</strong> 123 Steadwin Street, New Delhi, India
          </p>
          <p>
            <strong>📞 Phone:</strong> +91 98765 43210
          </p>
          <p>
            <strong>📧 Email:</strong> contact@steadwin.com
          </p>
        </div>

        {/* Main Contact Form */}
        <div className="bg-gray-100 shadow-lg rounded-2xl p-8 max-w-2xl mx-auto mb-16">
          <form className="space-y-5">
            <div>
              <label className="block mb-1 font-medium">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 text-white font-semibold py-3 rounded-lg hover:bg-amber-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* EXTRA Get in Touch Form */}
        <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-2xl p-10 shadow-xl max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Get in Touch
          </h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <textarea
              rows="5"
              placeholder="Your Message..."
              className="w-full p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-white text-amber-600 font-semibold py-3 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
