import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [property, setProperty] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !phone || !email || !property || !message) {
      setError("⚠ Please fill all fields.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setError("⚠ Enter a valid 10-digit phone number.");
      return;
    }

    if (!agree) {
      setError("⚠ You must agree to the Privacy Policy.");
      return;
    }

    setError("");

    try {
      const response = await fetch("http://localhost:8080/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, property, message }),
      });

      if (response.ok) {
        alert("✅ Thank you! Your request has been submitted.");
        setName("");
        setPhone("");
        setEmail("");
        setAgree(false);
        setProperty("");
        setMessage("");
      } else {
        setError("⚠ Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setError("⚠ Could not connect to server.");
    }
  };

  return (
    <>
      <div className="relative w-full py-16 px-5 md:px-20 bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center rounded-xl"
          style={{
            backgroundImage: "url('/bg-form.jpg')",
            filter: "brightness(0.3)",
          }}
        ></div>

        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Request a Quotation
          </h2>
          <p className="text-sm md:text-base mb-8 text-gray-200">
            At Steadwin, we provide top-quality interior, development, and
            railing services. Fill out the form below, tell us about your
            project, and we’ll provide you with the best quotation tailored to
            your needs.
          </p>

          <div className="bg-gray-800/90 backdrop-blur-md rounded-xl shadow-xl p-8">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {error && (
                <p className="text-red-400 font-medium text-sm text-center">
                  {error}
                </p>
              )}

              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-600 p-2 rounded-lg bg-gray-700 text-white text-sm sm:text-base"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-600 p-2 rounded-lg bg-gray-700 text-white text-sm sm:text-base"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-600 p-2 rounded-lg bg-gray-700 text-white text-sm sm:text-base"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <select
                value={property}
                onChange={(e) => setProperty(e.target.value)}
                className="border border-gray-600 p-2 rounded-lg bg-gray-700 text-white text-sm sm:text-base"
              >
                <option value="">Select Property Type</option>
                <option value="1BHK">1BHK</option>
                <option value="2BHK">2BHK</option>
                <option value="3BHK">3BHK</option>
                <option value="Villa">Villa</option>
                <option value="Commercial">Commercial</option>
              </select>

              <textarea
                placeholder="Write your message here..."
                className="border border-gray-600 p-2 rounded-lg bg-gray-700 text-white text-sm sm:text-base resize-none h-24"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <div className="flex items-center gap-2 text-sm sm:text-base">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={agree}
                  onChange={() => setAgree(!agree)}
                  className="cursor-pointer"
                />
                <label htmlFor="privacy" className="text-gray-300">
                  I agree to the{" "}
                  <Link to="/privacy" className="text-blue-400 hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                className="border p-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition text-sm sm:text-base"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Form;
