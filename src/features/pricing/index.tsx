import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ScrollTo } from "../../lib/utils";

const plans = [
  {
    name: "Regular House Clean",
    from: "$120",
    badge: null,
    color: "#0891b2",
    light: "#e0f4fb",
    mid: "#b3e4f5",
    desc: "Perfect for ongoing home maintenance. Keep your home consistently spotless.",
    includes: [
      "All bedrooms & living areas",
      "Kitchen benches & appliances",
      "Bathrooms & toilets",
      "Vacuuming & mopping",
      "Dusting all surfaces",
      "Rubbish removal",
    ],
  },
  {
    name: "Vacate / End of Lease",
    from: "$299",
    badge: "Most Booked",
    color: "#00b5be",
    light: "#e0f9fa",
    mid: "#b2eef1",
    featured: true,
    desc: "Designed to meet real estate agent standards and get your full bond back.",
    includes: [
      "All rooms thoroughly cleaned",
      "Oven, stove & rangehood",
      "Fridge interior",
      "Window tracks & sills",
      "Carpet steam clean",
      "Garage & balcony",
    ],
  },
  {
    name: "Deep Cleaning",
    from: "$250",
    badge: null,
    color: "#7c3aed",
    light: "#f0ebff",
    mid: "#d8ccf7",
    desc: "A top-to-bottom intensive clean for homes that need serious attention.",
    includes: [
      "Inside all cupboards",
      "Skirting boards & vents",
      "Grout & tile scrubbing",
      "Behind appliances",
      "Window tracks",
      "Full bathroom detail",
    ],
  },
];

export const Pricing = ({}: {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle bg pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(circle, #1b3a6b 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="section-badge mb-5">Transparent Pricing</div>
          <h2 className="section-title mb-4">
            Clear prices,{" "}
            <span className="relative inline-block">
              no surprises
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-[#00b5be]" />
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Every quote is personalised to your property. Starting prices below — final price confirmed before we start.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${p.featured ? "ring-2 shadow-2xl" : "shadow-md hover:shadow-xl"}`}
              style={{
                transitionDelay: `${i * 100}ms`,
                background: `linear-gradient(145deg, ${p.light} 0%, #ffffff 55%)`,
                border: `1.5px solid ${p.mid}`,
                ...(p.featured ? { ringColor: p.color } : {}),
              }}
            >
              {/* Top bar */}
              <div className="h-1 w-full" style={{ background: p.color }} />

              {p.badge && (
                <div className="absolute top-4 right-4">
                  <span className="flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full text-white shadow-md"
                    style={{ background: p.color }}>
                    <Star className="w-3 h-3 fill-current" /> {p.badge}
                  </span>
                </div>
              )}

              <div className="p-7 flex flex-col flex-1">
                {/* From price */}
                <div className="mb-4">
                  <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: p.color }}>Starting from</div>
                  <div className="flex items-end gap-1">
                    <span className="text-5xl font-extrabold text-[#1b3a6b] tracking-tight">{p.from}</span>
                    <span className="text-gray-400 text-sm pb-2">+ GST</span>
                  </div>
                </div>

                <h3 className="font-bold text-[#1b3a6b] text-lg mb-2">{p.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{p.desc}</p>

                {/* Includes */}
                <div className="mb-1">
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: p.color }}>What's Included</p>
                  <ul className="space-y-2">
                    {p.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: p.color }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button
                  onClick={() => ScrollTo("contact")}
                  className="mt-auto pt-6 w-full flex items-center justify-center gap-2 font-bold text-sm py-3 rounded-xl text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-md group"
                  style={{ background: p.color, marginTop: "auto" }}
                >
                  Get a Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className={`text-center transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "400ms" }}>
          <p className="text-gray-400 text-sm">
            Final price depends on property size, condition and add-ons. &nbsp;
            <button onClick={() => ScrollTo("contact")} className="text-[#00b5be] font-semibold hover:underline">
              Request your exact quote →
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};
