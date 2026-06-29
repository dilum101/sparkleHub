import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let cur = 0;
    const step = target / (duration / 16);
    const t = setInterval(() => {
      cur = Math.min(cur + step, target);
      setCount(Math.floor(cur));
      if (cur >= target) clearInterval(t);
    }, 16);
    return () => clearInterval(t);
  }, [start, target, duration]);
  return count;
}

const items = [
  { value: 100, suffix: "%", label: "Satisfaction Guarantee", sub: "We make it right, every time" },
  { value: 100, suffix: "%", label: "Bond Return Rate",       sub: "On all vacate cleaning jobs" },
  { value: 100, suffix: "%", label: "Insured & Vetted",       sub: "Every cleaner, every job" },
  { value: -1,  suffix: "",  label: "Hidden Fees",            sub: "Clear upfront pricing always" },
];

export const Stats = ({}: {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-16 bg-[#00b5be] relative overflow-hidden" ref={ref}>
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((s, i) => {
            const count = useCountUp(s.value, 1800, started);
            return (
              <div
                key={i}
                className={`text-center transition-all duration-600 ${started ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Pulse ring */}
                <div className="relative inline-block mb-2">
                  {started && (
                    <>
                      <div className="absolute inset-0 rounded-full bg-white/20 pulse-ring" style={{ animationDelay: `${i * 0.5}s` }} />
                      <div className="absolute inset-0 rounded-full bg-white/10 pulse-ring" style={{ animationDelay: `${i * 0.5 + 0.6}s` }} />
                    </>
                  )}
                  <div className="text-4xl md:text-5xl font-extrabold text-white relative">
                    {s.value === -1 ? "$0" : `${count}${s.suffix}`}
                  </div>
                </div>
                <div className="text-white font-bold text-base mb-1">{s.label}</div>
                <div className="text-white/70 text-xs">{s.sub}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
