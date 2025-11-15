export default function ProcessSteps() {
  const steps = [
    {
      id: "01",
      title: "CLIENT DISCUSSION",
      desc: "We develop and refine the design, capturing the look, feel and details by creating digital.",
    },
    {
      id: "02",
      title: "STRATEGY",
      desc: "We immerse ourselves in your space, attune ourselves to your needs and listen carefully.",
    },
    {
      id: "03",
      title: "CORE CONCEPT",
      desc: "At the end of this step, we have established the vision, goals, budget and timeline.",
    },
    {
      id: "04",
      title: "TECHNICAL FEASIBILITY",
      desc: "We walk through the feasibility of interior settings that helps you to understand.",
    },
    {
      id: "05",
      title: "EXECUTION",
      desc: "We oversee every aspect as your space takes shape, from demolition to furniture install.",
    },
    {
      id: "06",
      title: "FOLLOW UP",
      desc: "Our extensive experience in construction and project management enable us.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">OUR PROCESS</h2>
        <div className="w-0 h-0 mx-auto mt-2 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-yellow-500"></div>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative bg-gray-200 p-8 rounded shadow-md hover:shadow-lg transition"
          >
            {/* NUMBER BADGE */}
            <div className="absolute -left-6 top-6 bg-yellow-500 text-white font-bold px-4 py-2 rounded">
              {step.id}
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-sm text-gray-700">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
