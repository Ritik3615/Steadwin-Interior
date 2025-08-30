import React from "react";
import { Link } from "react-router";
import image from "../assets/modernimage.jpg";
import Form from "../Form/Form";
import Cards from "../Card/Cards";
import Services from "../Pages/Services/Services";
import Partners from "../Pages/Partners/Partners";
import Footer from "../Components/Footer";
import Process from "../Pages/WorkFlow/Process";

function Home() {
  return (
    <>
      <div className="hero relative ">
        <img src={image} alt="" className="max-h-6/12 w-full object-cover" />
        <div className="bg-black absolute inset-0 opacity-30"></div>

        <div className="absolute inset-0 z-10 flex justify-center items-top gap-10 p-20">
          <div className="justify-center items-center">
            <h1 className="text-white text-4xl font-bold z-50 m-7 ">
              {" "}
              welcom to Steadwin Group
            </h1>
            <p className="text-white text-2xl">
              At Steadwin, we believe interiors are more than just spaces—they
              reflect your lifestyle, personality, and comfort. Our designs
              blend functionality with aesthetics, creating rooms that feel
              warm, elegant, and timeless.
            </p>
          </div>
          <div className="">
            <Form />
          </div>
        </div>
      </div>
      <Cards />
      <Services />
      <div className="h-40 w-full bg-amber-200 p-32">
        <Link to="/Process" className="text-3xl font-bold text-center"> Here you can see Our Work Flow</Link>
      </div>
      <Partners />
      <Footer />
    </>
  );
}

export default Home;
