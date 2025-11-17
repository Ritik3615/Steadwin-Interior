import { useEffect, useRef, useState } from "react";

const statsData = [
  { label: "Projects Undertaking", value: 800 },
  { label: "Years of Experience", value: 15 },
  { label: "Permanent Workforce", value: 20 },
  { label: "Projects Undertaking", value: 1000 },
];

export default function StatsSection() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(statsData.map(() => 0));

  // Detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Count-up animation
  useEffect(() => {
    if (!isVisible) return;

    const duration = 1500; // ms
    const frameRate = 60;
    const totalFrames = Math.round((duration / 1000) * frameRate);

    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      setCounts(() =>
        statsData.map((item) =>
          Math.round((item.value * frame) / totalFrames)
        )
      );

      if (frame === totalFrames) clearInterval(interval);
    }, duration / totalFrames);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div className="w-full flex justify-center py-10 md:px-15 px-5">
      <div
        ref={ref}
        className="w-full bg-white rounded-xl border-[3px] border-orange-400 px-10 py-12 shadow-sm"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 text-center gap-10">
          {statsData.map((item, i) => (
            <div key={i}>
              <div className="text-5xl font-extrabold text-[#0093E9]">
                {counts[i]}
                <span className="text-orange-400">+</span>
              </div>
              <div className="text-gray-700 mt-2 text-lg">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
