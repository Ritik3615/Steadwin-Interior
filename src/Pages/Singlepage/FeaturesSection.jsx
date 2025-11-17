import React from "react";
import { CheckCircle, Cpu, Users, Truck, Tag } from "lucide-react";
import ProcessImage from "../../assets/RoundImage.jpg";
import { PiMoonStarsThin } from "react-icons/pi";

const Heading = () => (
  <div>
    <h2 className="text-center md:text-3xl font-extrabold md:mb-3 bg-[#2b5d7c] bg-clip-text text-transparent tracking-wide pt-10">
      Why Choose Us
    </h2>
    <span className="block md:w-[120px] lg:w-[220px] w-[150px] rounded-lg h-1 mx-auto mt-3 bg-[#2b5d7c]"></span>
  </div>
);

export default function FeaturesSection() {
  return (
    <>
      <Heading />

      <div className="w-full bg-amber-100 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 place-items-center">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-16 items-center">
            <FeatureItem
              icon={<CheckCircle className="h-10 w-10 text-white" />}
              title="WARRANTY ON ALL FEATURES"
              desc="We offer comprehensive warranty on all our fixtures and fittings."
            />

            <FeatureItem
              icon={<Cpu className="h-10 w-10 text-white" />}
              title="LATEST TECHNOLOGY"
              desc="We use best-in-class modular fittings with precision-engineered parts."
            />

            <FeatureItem
              icon={<PiMoonStarsThin className="h-10 w-10 text-white" />}
              title="HIGH QUALITY DESIGNS"
              desc="We recommend only the best designs for your space — no compromises."
            />
          </div>

          {/* CENTER CIRCLE */}
          <div className="flex justify-center items-center z-10">
            <div className="h-56 w-56 md:h-72 md:w-72 bg-amber-100 overflow-hidden">
              <img
                src={ProcessImage}
                alt="Center Design"
                className="h-full w-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-16 items-center">
            <FeatureItem
              icon={<Tag className="h-10 w-10 text-white" />}
              title="TRANSPARENT PRICING"
              desc="Clear, upfront pricing with zero hidden charges."
            />

            <FeatureItem
              icon={<Users className="h-10 w-10 text-white" />}
              title="PROFESSIONAL TEAM"
              desc="Skilled experts ensuring top-quality workmanship."
            />

            <FeatureItem
              icon={<Truck className="h-10 w-10 text-white" />}
              title="TIMELY DELIVERY"
              desc="We deliver every project within the committed timeline."
            />
          </div>

        </div>
      </div>
    </>
  );
}

/* Reusable Component */
const FeatureItem = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center text-center max-w-xs">
    <div className="h-20 w-20 bg-orange-500 rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>

    <h3 className="text-xl font-bold">{title}</h3>

    <p className="text-gray-700 text-sm mt-2">{desc}</p>
  </div>
);
