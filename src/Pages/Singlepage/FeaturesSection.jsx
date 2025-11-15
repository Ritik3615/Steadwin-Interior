import React from "react";
import { CheckCircle, Cpu, Users, Truck, Tag } from "lucide-react";
import ProcessImage from "../../assets/ProcessImage.jpg";
import { PiMoonStarsThin } from "react-icons/pi";

const Heading = () => (
  <div className="text-center text-3xl font-extrabold text-[#2b5d7c] mb-10">
    Why Choose Us
  </div>
);

export default function FeaturesSection() {
  return (
    <>
      <Heading />

      <div className="w-full bg-amber-100 py-16 flex justify-center px-15">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12 px-6">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-16 items-center md:items-start">

            <FeatureItem
              icon={<CheckCircle className="h-10 w-10 text-white" />}
              title="TRANSPARENT PRICING"
              desc="Clear, upfront pricing with no hidden costs."
            />

            <FeatureItem
              icon={<Cpu className="h-10 w-10 text-white" />}
              title="PROFESSIONAL TEAM"
              desc="Skilled professionals ensuring high-quality work."
            />

            <FeatureItem
              icon={<PiMoonStarsThin className="h-10 w-10 text-white" />}
              title="TIMELY DELIVERY"
              desc="Guaranteed on-time delivery for every project."
            />

          </div>

          {/* CENTER CIRCLE */}
          <div className="flex justify-center items-center">
            <div className="md:h-80 md:w-80  h-40 w-40 bg-[#0093E9] rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={ProcessImage}
                alt="Center Furniture"
                className=" object-contain"
              />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-16 items-center md:items-start">

            <FeatureItem
              icon={<Tag className="h-10 w-10 text-white" />}
              title="TRANSPARENT PRICING"
              desc="Clear, upfront pricing with no hidden costs."
            />

            <FeatureItem
              icon={<Users className="h-10 w-10 text-white" />}
              title="PROFESSIONAL TEAM"
              desc="Skilled professionals ensuring high-quality work."
            />

            <FeatureItem
              icon={<Truck className="h-10 w-10 text-white" />}
              title="TIMELY DELIVERY"
              desc="Guaranteed on-time delivery for every project."
            />

          </div>

        </div>
      </div>
    </>
  );
}

/* Reusable Component */
const FeatureItem = ({ icon, title, desc }) => (
  <div className="flex items-start gap-4 max-w-xs">
    <div className="h-20 w-20 bg-orange-500 rounded-full flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-700 text-sm mt-2">{desc}</p>
    </div>
  </div>
);
