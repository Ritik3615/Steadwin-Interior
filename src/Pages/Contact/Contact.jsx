import React from "react";
import Footer from "../../Components/Footer";
import Form from "../../Components/Form";
 // adjust path according to your project structure

function Contact() {
  return (
    <>
      <div className="px-6 md:px-28 py-16 bg-gray-900 text-white">
        {/* Heading */}
        <div className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get in <span className="text-blue-500">Touch</span>
        </div>

        {/* Info Section */}
        <div className="space-y-6 text-lg text-gray-300 mb-16 max-w-3xl mx-auto text-center">
          <p>
            Have questions or want to discuss your next interior project? We’d
            love to hear from you.
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
      </div>
      {/* Imported Form Component */}
      <Form/>
      <Footer />
    </>
  );
}

export default Contact;
