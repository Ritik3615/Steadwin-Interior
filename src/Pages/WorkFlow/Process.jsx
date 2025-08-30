import React from "react";
import Footer from "../../Components/Footer";

export default function Process() {
  const steps = [
    {
      title: "1. First Interaction / Inquiry",
      points: [
        "Client reaches out via call, website, or referral",
        "Basic requirement discussion (space type, budget, timeline)",
        "Schedule site visit",
      ],
      img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "2. Site Visit & Requirement Gathering",
      points: [
        "Designer visits site",
        "Take measurements & photos",
        "Understand client’s lifestyle, taste, and preferences",
        "Collect references (Pinterest, catalog, previous projects)",
      ],
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "3. Concept & Proposal",
      points: [
        "Prepare mood boards / initial design concept",
        "Share layout options (2D / 3D visuals if possible)",
        "Rough budget estimate shared with client",
      ],
      img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "4. Final Discussion & Agreement",
      points: [
        "Adjust design & budget as per client feedback",
        "Finalize scope of work",
        "Sign agreement / contract",
        "Payment terms defined (milestones or percentage-based)",
      ],
      img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?_gl=1*b31hv*_ga*Nzc5NDg5NzE2LjE3NTU3ODkyNTc.*_ga_8JE65Q40S6*czE3NTY1NTIzMzQkbzE3JGcxJHQxNzU2NTUyMzYwJGozNCRsMCRoMA..",
    },
    {
      title: "5. Detailed Design & Planning",
      points: [
        "Create final 2D/3D renders",
        "Material selection (tiles, laminates, paints, fabrics, etc.)",
        "Share final BOQ (Bill of Quantities)",
        "Final client approval",
      ],
      img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "6. Execution / On-Site Work",
      points: [
        "Site preparation & demolition (if required)",
        "Carpentry, false ceiling, electrical, plumbing, painting",
        "Modular furniture fabrication & installation",
        "Quality checks at every stage",
      ],
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "7. Finishing & Styling",
      points: [
        "Deep cleaning of site",
        "Soft furnishings, décor, and accessories placement",
        "Lighting setup & adjustments",
      ],
      img: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "8. Final Handover",
      points: [
        "Walkthrough with client",
        "Checklist verification (snag list resolution if needed)",
        "Handover keys & documents (warranty, maintenance guide)",
      ],
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="px-28 py-12">
      <h1 className="text-2xl font-bold text-center mb-12">
        Welcome to Steadwin Interior{" "}
        <span className="text-blue-500">Work Flow</span>
      </h1>

      {steps.map((step, idx) => {
        const reverse = idx % 2 === 1; // even idx => image left, odd idx => image right
        return (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mb-16"
          >
            {/* Image */}
            <div className={`order-1 ${reverse ? "md:order-2" : "md:order-1"}`}>
              <img
                src={step.img}
                alt={step.title}
                className="w-full h-64 md:h-80 rounded-2xl shadow object-cover"
              />
            </div>

            {/* Content */}
            <div className={`order-2 ${reverse ? "md:order-1" : "md:order-2"}`}>
              <h2 className="text-xl font-semibold mb-4">{step.title}</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {step.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
      <Footer/>
    </div>
  );
}
