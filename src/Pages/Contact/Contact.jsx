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

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Info Section */}
          <div className="space-y-6 text-lg text-gray-700">
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

          {/* Form Section */}
          <div className="bg-gray-100 shadow-lg rounded-2xl p-6">
            <form className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message"
                  className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 text-white font-semibold py-2 rounded-lg hover:bg-amber-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
