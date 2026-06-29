import { ArrowRight, CheckCircle, Home, KeyRound, Layers, Moon, Sparkles, Wind } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ScrollTo } from "../../lib/utils";

const featured = [
  {
    icon: <Home className="w-8 h-8" />,
    title: "Regular House Cleaning",
    desc: "Keep your home consistently spotless with our scheduled cleaning visits. We handle every room thoroughly so you can focus on what matters most.",
    features: ["Living Areas & Bedrooms", "Kitchen Bench & Sink", "Bathrooms & Toilets", "Vacuuming & Mopping", "Dusting All Surfaces", "Rubbish Removal"],
    badge: "Most Popular",
    accent: "#00b5be",
  },
  {
    icon: <KeyRound className="w-8 h-8" />,
    title: "Vacate / End of Lease",
    desc: "Moving out? Our comprehensive bond cleaning is designed to meet real estate agent standards and give you the best chance of getting your full bond back.",
    features: ["All Rooms Thoroughly Cleaned", "Oven, Stove & Rangehood", "Fridge Interior", "Carpet Steam Clean", "Window Tracks & Sills", "Garage & Balcony"],
    badge: "Bond Guaranteed",
    accent: "#1b3a6b",
  },
];

const others = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Deep Cleaning",
    desc: "A thorough top-to-bottom clean for homes that need extra attention — inside cupboards, skirting boards, grout and all the areas regular cleans miss.",
    features: ["Inside All Cupboards", "Skirting Boards & Vents", "Grout & Tile Scrubbing", "Behind Appliances"],
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Move-In Cleaning",
    desc: "Start fresh in your new home. We sanitise and clean every corner before your furniture arrives so it's truly ready from day one.",
    features: ["Full Sanitisation", "Inside All Appliances", "All Rooms & Hallways", "Bathrooms Disinfected"],
  },
  {
    icon: <Moon className="w-6 h-6" />,
    title: "Spring Cleaning",
    desc: "A seasonal refresh that tackles all the neglected spots — behind furniture, ceiling fans, window tracks and everything in between.",
    features: ["Behind Furniture", "Ceiling Fans & Vents", "Window Tracks & Frames", "Inside Wardrobes"],
  },
  {
    icon: <Wind className="w-6 h-6" />,
    title: "After Party / Event",
    desc: "Restore your home after a gathering. We handle everything from rubbish removal to full floor and kitchen cleaning, quickly and efficiently.",
    features: ["Full Rubbish Removal", "Floor Mopping & Vacuuming", "Kitchen Deep Clean", "Bathroom Reset"],
  },
];

export const Services = ({}: {}) => {
  const headRef = useRef<HTMLDivElement>(null);
  const [headVis, setHeadVis] = useState(false);
  const featRef = useRef<HTMLDivElement>(null);
  const [featVis, setFeatVis] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const [gridVis, setGridVis] = useState(false);

  useEffect(() => {
    const observe = (el: HTMLElement | null, cb: () => void) => {
      if (!el) return;
      const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { cb(); obs.disconnect(); } }, { threshold: 0.15 });
      obs.observe(el);
      return obs;
    };
    const o1 = observe(headRef.current, () => setHeadVis(true));
    const o2 = observe(featRef.current, () => setFeatVis(true));
    const o3 = observe(gridRef.current, () => setGridVis(true));
    return () => { o1?.disconnect(); o2?.disconnect(); o3?.disconnect(); };
  }, []);

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div
          ref={headRef}
          className={`text-center mb-16 transition-all duration-700 ${headVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="section-badge mb-4">What We Offer</div>
          <h2 className="section-title mb-4">Residential Cleaning Services</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            From weekly house cleans to full vacate cleans — every service includes
            eco-friendly products, trained professionals and a satisfaction guarantee.
          </p>
        </div>

        {/* ── Featured Two Cards ── */}
        <div
          ref={featRef}
          className={`grid md:grid-cols-2 gap-6 mb-6 transition-all duration-700 ${featVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {featured.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
              style={{ transitionDelay: `${i * 120}ms`, background: s.accent }}
            >
              {/* Coloured top — icon, badge, title, desc */}
              <div className="relative px-7 pt-7 pb-6 flex-1 overflow-hidden shimmer-card">
                {/* Circle decorations */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10 pointer-events-none" style={{ background: "rgba(255,255,255,0.6)" }} />
                <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-5 pointer-events-none" style={{ background: "rgba(255,255,255,0.6)" }} />

                <div className="relative flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white">
                    {s.icon}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/20 text-white border border-white/30">
                    {s.badge}
                  </span>
                </div>

                <h3 className="relative text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="relative text-white/75 text-sm leading-relaxed">{s.desc}</p>
              </div>

              {/* White bottom — features + CTA */}
              <div className="bg-white px-7 py-6">
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: s.accent }}>What's Included</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 mb-6">
                  {s.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: s.accent }} />
                      {f}
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => ScrollTo("contact")}
                  className="inline-flex items-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-xl text-white transition-all duration-200 hover:opacity-90"
                  style={{ background: s.accent }}
                >
                  Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ── Supporting Four Cards ── */}
        <div
          ref={gridRef}
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-5 transition-all duration-700 ${gridVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "100ms" }}
        >
          {others.map((s, i) => (
            <div
              key={i}
              className="bg-[#f8fafc] border border-gray-100 rounded-2xl p-6 hover:border-[#00b5be] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-[#e0f7f8] text-[#00b5be] flex items-center justify-center mb-4 group-hover:bg-[#00b5be] group-hover:text-white transition-all duration-300">
                {s.icon}
              </div>
              <h3 className="font-bold text-[#1b3a6b] text-base mb-2">{s.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">{s.desc}</p>
              <ul className="space-y-1.5 mb-5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-1.5 text-xs text-gray-600">
                    <CheckCircle className="w-3 h-3 text-[#00b5be] flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => ScrollTo("contact")}
                className="flex items-center gap-1 text-xs font-bold text-[#00b5be] hover:text-[#1b3a6b] transition-colors group/btn"
              >
                Enquire <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA bar ── */}
        <div
          className={`mt-10 bg-[#f0f9fa] border border-[#00b5be]/20 rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-5 transition-all duration-700 ${gridVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "300ms" }}
        >
          <div>
            <p className="font-bold text-[#1b3a6b] text-lg mb-0.5">Not sure which service suits you?</p>
            <p className="text-gray-500 text-sm">Call us or send an enquiry — we'll recommend the right option for your property.</p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <a href="tel:+61420214143" className="inline-flex items-center gap-2 border-2 border-[#1b3a6b] text-[#1b3a6b] font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-[#1b3a6b] hover:text-white transition-all duration-200">
              📞 +61 420 214 143
            </a>
            <button onClick={() => ScrollTo("contact")} className="btn-primary">
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
