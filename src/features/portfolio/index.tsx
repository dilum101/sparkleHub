import { ArrowRight, MoveHorizontal } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ScrollTo } from "../../lib/utils";

import before1 from "../../assets/ourwork/opt/before1.jpg";
import after1  from "../../assets/ourwork/opt/after1.jpg";
import before2 from "../../assets/ourwork/opt/before2.jpg";
import after2  from "../../assets/ourwork/opt/after2.jpg";
import before3 from "../../assets/ourwork/opt/before3.jpg";
import after3  from "../../assets/ourwork/opt/after3.jpg";
import before4 from "../../assets/ourwork/opt/before4.jpg";
import after4  from "../../assets/ourwork/opt/after4.jpg";
import before5 from "../../assets/ourwork/opt/before5.jpg";
import after5  from "../../assets/ourwork/opt/after5.jpg";
import before6 from "../../assets/ourwork/opt/before6.jpg";
import after6  from "../../assets/ourwork/opt/after6.jpg";

const pairs = [
  { before: before1, after: after1, label: "Kitchen Deep Clean" },
  { before: before2, after: after2, label: "Bathroom Detail" },
  { before: before3, after: after3, label: "Vacate Clean" },
  { before: before4, after: after4, label: "Living Area" },
  { before: before5, after: after5, label: "Deep Clean" },
  { before: before6, after: after6, label: "After Party Clean" },
];

/* ── Before/After drag slider ── */
function BeforeAfterSlider({ before, after, label }: { before: string; after: string; label: string }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - left) / width) * 100)));
  };

  return (
    <div className="rounded-2xl overflow-hidden shadow-lg select-none">
      {/* Label bar */}
      <div className="bg-[#1b3a6b] px-4 py-2.5 flex items-center justify-between">
        <span className="text-white text-xs font-bold uppercase tracking-widest">{label}</span>
        <div className="flex items-center gap-1.5 text-white/70 text-xs">
          <MoveHorizontal className="w-3.5 h-3.5" /> drag to compare
        </div>
      </div>

      {/* Slider container — pointer events handle both mouse & touch */}
      <div
        ref={containerRef}
        className="relative cursor-col-resize touch-none"
        style={{ aspectRatio: "4/3" }}
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          dragging.current = true;
          updatePos(e.clientX);
        }}
        onPointerMove={(e) => {
          if (dragging.current) updatePos(e.clientX);
        }}
        onPointerUp={() => { dragging.current = false; }}
        onPointerCancel={() => { dragging.current = false; }}
      >
        {/* After — base layer */}
        <img src={after} alt="After clean" loading="lazy" decoding="async" fetchPriority="low"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none" />

        {/* Before — clipped to left */}
        <img src={before} alt="Before clean" loading="lazy" decoding="async" fetchPriority="low"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} />

        {/* Labels */}
        <div className="absolute top-3 left-3 bg-black/60 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full pointer-events-none">
          Before
        </div>
        <div className="absolute top-3 right-3 bg-[#00b5be]/90 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full pointer-events-none">
          After
        </div>

        {/* Divider line */}
        <div
          className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.4)] pointer-events-none"
          style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
        />

        {/* Drag handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center pointer-events-none z-10 border-2 border-[#00b5be]"
          style={{ left: `${pos}%` }}
        >
          <MoveHorizontal className="w-4 h-4 text-[#1b3a6b]" />
        </div>
      </div>
    </div>
  );
}

/* ── Main section ── */
export const Portfolio = ({}: {}) => {
  const headRef = useRef<HTMLDivElement>(null);
  const [headVis, setHeadVis] = useState(false);
  const baRef = useRef<HTMLDivElement>(null);
  const [baVis, setBaVis] = useState(false);

  useEffect(() => {
    const observe = (el: HTMLElement | null, cb: () => void) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { cb(); obs.disconnect(); } },
        { threshold: 0.1 }
      );
      obs.observe(el);
      return obs;
    };
    const o1 = observe(headRef.current, () => setHeadVis(true));
    const o2 = observe(baRef.current,   () => setBaVis(true));
    return () => { o1?.disconnect(); o2?.disconnect(); };
  }, []);

  return (
    <section id="portfolio" className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div
          ref={headRef}
          className={`text-center mb-14 transition-all duration-700 ${headVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="section-badge mb-4">Our Work</div>
          <h2 className="section-title mb-4">Real Cleans. Real Results.</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Drag the sliders to see the transformation — every job is a before and after we're proud to show.
          </p>
        </div>

        {/* ── Before / After sliders ── */}
        <div
          ref={baRef}
          className={`grid md:grid-cols-3 gap-5 mb-10 transition-all duration-700 ${baVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {pairs.map((p, i) => (
            <div
              key={i}
              className="transition-all duration-700"
              style={{ transitionDelay: `${i * 80}ms`, opacity: baVis ? 1 : 0, transform: baVis ? "none" : "translateY(24px)" }}
            >
              <BeforeAfterSlider before={p.before} after={p.after} label={p.label} />
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div
          className={`text-center transition-all duration-700 ${baVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "500ms" }}
        >
          <p className="text-gray-500 mb-5 text-sm">Want results like these for your property?</p>
          <button onClick={() => ScrollTo("contact")} className="btn-primary">
            Get a Free Quote <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
