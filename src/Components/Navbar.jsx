import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import logo from "../assets/logo.png";
import logo1 from "/logo.svg";


function Navbar() {
  const motionLink=motion(Link);
  const Nav = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <>
      <div className="bg-white h-16 flex items-center shadow-2xl sticky top-0 z-50 ">
        {/* left logo. */}
        <div className="">
          <img
            src={logo}
            alt="logo"
            className="flex items-center justify-center p-2 h-20 rounded-full"
          />
        </div>
        <div className="flex text-xl">
          {" "}
          <Link to="/">Steadwin Group </Link>{" "}
        </div>

        {/* maping the components */}
        <div className="flex-1 flex justify-center gap-10 text-black ">
          {Nav.map((item, index) => (
            <motion.div
              key={index}
              className="flex justify-center items-center cursor-pointer hover:underline text-black"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                // transition={{duration:1 , delay:0.5}}
                whileHover={{ scale: 1.2, duration: 0.1, color: "#155dfc" }}
            >
              <Link
                to={item.path}
                className=""
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                whileHover={{ scale: 1.2, duration: 0.1, color: "#155dfc" }}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          // transition={{duration:1,damping:15, type:"spring"}}
          whileHover={{ scale: 1.2, duration: 0.1 }}
          className=" rounded-full mr-7"
        >
          <button className="p-2 border-2 rounded-full px-4 mr-3 cursor-pointer bg-blue-50 hover:bg-blue-700 hover:text-amber-50">
            Connect US
          </button>
        </motion.div>
      </div>
    </>
  );
}

export default Navbar;
