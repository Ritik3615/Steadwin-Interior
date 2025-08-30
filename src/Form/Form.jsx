import { useState } from "react";
import { Link } from "react-router-dom";

function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !email) {
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
    alert("✅ Thank you! We will connect with you shortly.");

    setName("");
    setPhone("");
    setEmail("");
    setAgree(false);
  };

  return (
    <div className="w-[90%] sm:w-[80%] md:w-[400px] border rounded-lg shadow-lg bg-white p-6 mx-auto">
      <h2 className="mb-4 text-xl sm:text-2xl font-bold text-center text-gray-800">
        Get Your Quotation
      </h2>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {error && <p className="text-red-600 font-medium text-sm">{error}</p>}

        <input
          type="text"
          placeholder="Good Name"
          className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Phone"
          className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Privacy Agreement */}
        <div className="flex items-center gap-2 text-sm sm:text-base">
          <input
            type="checkbox"
            id="privacy"
            checked={agree}
            onChange={() => setAgree(!agree)}
            className="cursor-pointer"
          />
          <label htmlFor="privacy" className="text-gray-700">
            I agree to the{" "}
            <Link to="/Privicy" className="text-blue-600 hover:underline">
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
  );
}

export default Form;
