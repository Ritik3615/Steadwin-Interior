import { useState } from "react";
import { Mail, ChevronDown } from "lucide-react";

export default function NewsletterForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("");

  const handleSelect = (value) => {
    setType(value);
    setIsOpen(false);
  };

  return (
    <div className="w-full bg-[#1f2327] p-6 rounded-xl border border-gray-700">
      <form className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* EMAIL */}
        <div className="flex items-center gap-3 bg-[#1f2327] border border-gray-600 px-4 py-3 rounded-lg w-full">
          <Mail className="text-yellow-400" />
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent outline-none text-white w-full"
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
            <ChevronDown className="text-gray-300" />
          </div>

          {/* Dropdown Options */}
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
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg px-6 py-3 w-full" type="submit">
          Subscribe
        </button>
      </form>
    </div>
  );
}
