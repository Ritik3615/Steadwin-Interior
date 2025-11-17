import { i } from "motion/react-client";
import React from "react";
import { useState } from "react";

function Homepageform() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !message || !name || !phone) {
      alert("Please fill all fields");
      return;
    }

    console.log(email, message,phone,name);

    setEmail("");
    setMessage("");
    setName("");
    setPhone("");

    alert("✅ Thank you! Your request has been submitted.");
  };
  return (
    <>
      <div className="relative w-full md:px-15 px-5">
        {/* <img
          src={bgimage}
          alt="bgimage"
          className="w-full md:h-[500px] h-screen object-cover px-16 rounded-lg"
        />
        <div className="absolute md:h[500px] bg-black opacity-10"></div> */}
        <div className="grid grid-flow-row md:grid-cols-2 px-5 md:px-20 py-22 gap-4 bg-gray-300 rounded">
          <div className="md:p-10 px-2 ">
            <div className="mb-5 text-3xl text-[#172761] font-bold">
              <h2>Request A Call Back</h2>
            </div>
            <div className="">
              <h3 className="mb-5 text-lg">
                We are here For Your Perfect plan
              </h3>
              <p className="mb-5">Just Pin Us</p>
              <span>
                <p>
                  Have any questions? or need further information, please do not
                  hesitate to contact us. Our team is always ready to assist you
                  with your goal.
                </p>
              </span>
            </div>
          </div>
          <div className="">
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Enter Name*"
                  className="w-full border p-3 mb-5"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Enter Email*"
                  className="w-full border p-3 mb-5"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Enter Phone*"
                  className="w-full border p-3 mb-5"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Write Your Message"
                  className="w-full border p-3 mb-5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-[#172761] text-white px-5 py-3 rounded hover:bg-green-300"
                >
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepageform;
