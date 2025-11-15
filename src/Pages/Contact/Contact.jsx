import React from "react";
import Footer from "../../Components/Footer";
import Form from "../../Components/Form";

function Contact() {
  return (
    <>
      {/* Top Banner */}
      <div
        className="relative bg-cover bg-center h-20 md:h-28 flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative text-xl md:text-4xl font-extrabold text-white text-center drop-shadow-lg">
          Contact <span className="text-blue-500 px-2">Us</span>
        </h1>
      </div>

      {/* Main Content */}
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
            <strong>📍 Address:</strong> 76 , Mylasandra Rd, Suraksha Nagar ,
            Yelenahalli , Begur , Bengaluru , Karnataka , 560068
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
      <Form />
      <Footer />
    </>
  );
}

export default Contact;
