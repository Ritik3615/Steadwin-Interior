import { useState } from "react";
import { Mail, ChevronDown, CheckCircle, AlertCircle } from "lucide-react";

export default function NewsletterForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error
  const [msg, setMsg] = useState("");

  const handleSelect = (value) => {
    setType(value);
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setStatus("error");
      setMsg("Please enter a valid email.");
      return;
    }

    if (!type.trim()) {
      setStatus("error");
      setMsg("Please select a type.");
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/newsletter`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, type }),
        }
      );

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setMsg("Subscribed successfully!");

      setEmail("");
      setType("");
    } catch (err) {
      setStatus("error");
      setMsg("Subscription failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#1f2327] p-6 rounded-xl border border-gray-700">
      <form
        className="w-full grid grid-cols-1 md:grid-cols-3 gap-4"
        onSubmit={handleSubmit}
      >
        {/* EMAIL */}
        <div className="flex items-center gap-3 bg-[#1f2327] border border-gray-600 px-4 py-3 rounded-lg w-full">
          <Mail className="text-yellow-400" />
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent outline-none text-white w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* DROPDOWN */}
        <div className="relative w-full">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between bg-[#1f2327] border border-gray-600 px-4 py-3 rounded-lg cursor-pointer"
          >
            <span className="text-gray-300">
              {type ? type : "Select Type"}
            </span>
            <ChevronDown
              className={`text-gray-300 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {isOpen && (
            <div className="absolute top-full left-0 mt-2 bg-[#1f2327] border border-gray-600 rounded-lg w-full shadow-lg z-50">
              {["Owner", "Architect", "Business", "Designer"].map((item) => (
                <div
                  key={item}
                  onClick={() => handleSelect(item)}
                  className="px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-yellow-400 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* SUBMIT */}
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg px-6 py-3 w-full disabled:opacity-50"
          type="submit"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Subscribe"}
        </button>
      </form>

      {/* STATUS MESSAGE */}
      {status && (
        <div
          className={`mt-4 flex items-center gap-2 text-sm font-medium ${
            status === "success" ? "text-green-400" : "text-red-400"
          }`}
        >
          {status === "success" ? (
            <CheckCircle size={18} />
          ) : (
            <AlertCircle size={18} />
          )}
          {msg}
        </div>
      )}
    </div>
  );
}
