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
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/fetchdata`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, phone, email, property, message }),
        }
      );

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
      <div className="relative w-full md:pt-40 py-20 px-6 md:px-20 bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Request a Free Quotation
          </h2>
          <p className="text-gray-600 mb-10 text-sm md:text-base max-w-2xl mx-auto">
            Let’s discuss your vision — whether it’s interiors, railing systems,
            or full-scale development. Our experts will get in touch with a
            tailored estimate.
          </p>

          <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              {error && (
                <p className="text-red-500 font-medium text-sm text-center">
                  {error}
                </p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 p-3 rounded-lg text-sm focus:ring-2 focus:ring-[#2b5d7c] outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border border-gray-300 p-3 rounded-lg text-sm focus:ring-2 focus:ring-[#2b5d7c] outline-none"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 p-3 rounded-lg text-sm focus:ring-2 focus:ring-[#2b5d7c] outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <select
                value={property}
                onChange={(e) => setProperty(e.target.value)}
                className="border border-gray-300 p-3 rounded-lg text-sm focus:ring-2 focus:ring-[#2b5d7c] outline-none"
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
                className="border border-gray-300 p-3 rounded-lg text-sm focus:ring-2 focus:ring-[#2b5d7c] outline-none resize-none h-28"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <div className="flex items-start gap-2 text-sm">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={agree}
                  onChange={() => setAgree(!agree)}
                  className="mt-1 cursor-pointer"
                />
                <label htmlFor="privacy" className="text-gray-600">
                  I agree to the{" "}
                  <Link
                    to="/privacy"
                    className="text-[#2b5d7c] hover:underline font-medium"
                  >
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              <button
                type="submit"
                className="mt-4 py-3 rounded-lg bg-[#2b5d7c] hover:bg-[#1f415a] text-white font-semibold transition text-sm"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Form;
