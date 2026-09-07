import { Award, Clock, Leaf, Shield, Star, ThumbsUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ScrollTo } from "../../lib/utils";

const items = [
  {
    num: "01",
    icon: <Award className="w-6 h-6" />,
    title: "Trained & Vetted Staff",
    desc: "Every cleaner is background-checked, insured and trained to our standard before setting foot in your home.",
    accent: "#00b5be",
    light: "#e0f9fa",
    mid: "#b2eef1",
  },
  {
    num: "02",
    icon: <Shield className="w-6 h-6" />,
    title: "100% Satisfaction Guarantee",
    desc: "Not happy? We'll return within 24 hours and fix it completely free. No arguments, no hassle.",
    accent: "#1b3a6b",
    light: "#e8eef8",
    mid: "#c5d3ea",
  },
  {
    num: "03",
    icon: <ThumbsUp className="w-6 h-6" />,
    title: "Upfront, Honest Pricing",
    desc: "You get a firm quote before we start. Zero hidden fees, zero surprises — what we quote is what you pay.",
    accent: "#0891b2",
    light: "#e0f4fb",
    mid: "#b3e4f5",
  },
  {
    num: "04",
    icon: <Leaf className="w-6 h-6" />,
    title: "Eco-Friendly Products",
    desc: "Non-toxic, environmentally safe products on every clean — safe for your kids, your pets and the planet.",
    accent: "#059669",
    light: "#dcfaf0",
    mid: "#a7f0d4",
  },
  {
    num: "05",
    icon: <Clock className="w-6 h-6" />,
    title: "Flexible Scheduling",
    desc: "Weekdays, weekends, same-day — we work around your life, not the other way around.",
    accent: "#7c3aed",
    light: "#f0ebff",
    mid: "#d8ccf7",
  },
  {
    num: "06",
    icon: <Star className="w-6 h-6" />,
    title: "Consistent Quality",
    desc: "We treat every home like it's our own. The same high standard, every single clean, every single time.",
    accent: "#e97316",
    light: "#fff3e5",
    mid: "#fdd9b5",
  },
];

export const Trust = ({}: {}) => {
  const headRef = useRef<HTMLDivElement>(null);
  const [headVis, setHeadVis] = useState(false);
  const itemsRef = useRef<HTMLDivElement>(null);
  const [itemsVis, setItemsVis] = useState(false);

  useEffect(() => {
    const obs = (el: HTMLElement | null, cb: () => void) => {
      if (!el) return;
      const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { cb(); o.disconnect(); } }, { threshold: 0.1 });
      o.observe(el);
      return o;
    };
    const o1 = obs(headRef.current, () => setHeadVis(true));
    const o2 = obs(itemsRef.current, () => setItemsVis(true));
    return () => { o1?.disconnect(); o2?.disconnect(); };
  }, []);

  return (
    <section
      id="trust"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f0fbfc 0%, #edf3fc 50%, #f5f0ff 100%)" }}
    >
      {/* Soft colour blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,181,190,0.12) 0%, transparent 70%)" }} />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 70%)" }} />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(5,150,105,0.08) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <div
          ref={headRef}
          className={`text-center mb-16 transition-all duration-700 ${headVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="inline-flex items-center gap-2 bg-[#00b5be]/10 border border-[#00b5be]/25 text-[#00b5be] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
            <Star className="w-3.5 h-3.5 fill-current" /> Why PRIMEORA
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1b3a6b] mb-4 leading-tight">
            Six reasons Melbourne families{" "}
            <span className="relative inline-block">
              choose us
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-[#00b5be]" />
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            We're not just cleaners — we're your reliable home-care partner.
          </p>
        </div>

        {/* ── Cards ── */}
        <div ref={itemsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-default ${itemsVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{
                transitionDelay: `${i * 80}ms`,
                transitionDuration: "600ms",
                background: `linear-gradient(145deg, ${item.light} 0%, #ffffff 55%)`,
                border: `1.5px solid ${item.mid}`,
              }}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl transition-all duration-300 group-hover:h-1"
                style={{ background: item.accent }} />

              {/* Big watermark number */}
              <div
                className="absolute -bottom-3 -right-1 text-[6.5rem] font-black leading-none select-none pointer-events-none"
                style={{ color: item.accent, opacity: 0.07 }}
              >
                {item.num}
              </div>

              <div className="relative z-10 p-7">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-5 shadow-md icon-bob"
                  style={{
                    background: item.accent,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: `${2.8 + i * 0.2}s`,
                  }}
                >
                  {item.icon}
                </div>

                {/* Number tag */}
                <div
                  className="inline-block text-xs font-extrabold uppercase tracking-widest mb-2 px-2 py-0.5 rounded-md"
                  style={{ background: item.light, color: item.accent }}
                >
                  {item.num}
                </div>

                <h3 className="font-bold text-[#1b3a6b] text-lg mb-2 leading-tight">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div
          className={`mt-12 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-700 ${itemsVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{
            transitionDelay: "600ms",
            background: "linear-gradient(120deg, #1b3a6b 0%, #2a5298 100%)",
          }}
        >
          <div>
            <p className="text-white font-bold text-xl mb-1">Ready to experience the PRIMEORA difference?</p>
            <p className="text-white/80 text-sm">Join Melbourne families who trust us with their homes every week.</p>
          </div>
          <button
            onClick={() => ScrollTo("contact")}
            className="flex-shrink-0 bg-[#00b5be] hover:bg-[#009aa2] text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg btn-glow"
          >
            Get a Free Quote
          </button>
        </div>

      </div>
    </section>
  );
};
