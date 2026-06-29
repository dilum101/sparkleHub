import { ArrowRight, MoveHorizontal } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { ScrollTo } from "../../lib/utils";

// Before / After pairs
import beforeA from "../../assets/before.jpeg";
import afterA  from "../../assets/after.jpeg";
import beforeB from "../../assets/before1.jpeg";
import afterB  from "../../assets/after1.jpeg";
import beforeC from "../../assets/before2.jpeg";
import afterC  from "../../assets/after2.jpeg";

// Gallery photos
import galleryA from "../../assets/PHOTO-2026-05-20-01-01-14.jpg";
import galleryB from "../../assets/PHOTO-2026-06-13-18-18-51.jpg";
import galleryC from "../../assets/B0962881-9969-4D82-97A4-B901C8B565BB_4_5005_c.jpeg";
import galleryD from "../../assets/E5CEA577-9AF4-461F-81A5-05B78094747C_4_5005_c.jpeg";

const pairs = [
  { before: beforeA, after: afterA, label: "Office Carpet Clean" },
  { before: beforeB, after: afterB, label: "Post-Fitout Carpet" },
  { before: beforeC, after: afterC, label: "Construction Debris Clean" },
];

const gallery = [
  { src: galleryA, alt: "Freshly cleaned polished timber floor",          label: "Timber Floor" },
  { src: galleryB, alt: "Lobby marble floor scrubbed and polished",       label: "Lobby Floor Polish" },
  { src: galleryC, alt: "Spotless kitchen floor tiles after vacate clean", label: "Kitchen Floor" },
  { src: galleryD, alt: "Empty property living room after full clean",     label: "Vacate Clean" },
];

/* ── Before/After drag slider ── */
function BeforeAfterSlider({ before, after, label }: { before: string; after: string; label: string }) {
  const [pos, setPos] = useState(50); // percent
  const dragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePos = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - left) / width) * 100));
    setPos(pct);
  }, []);

  const onMouseMove = useCallback((e: MouseEvent) => { if (dragging.current) updatePos(e.clientX); }, [updatePos]);
  const onMouseUp   = useCallback(() => { dragging.current = false; }, []);
  const onTouchMove = useCallback((e: TouchEvent) => { if (dragging.current) updatePos(e.touches[0].clientX); }, [updatePos]);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup",   onMouseUp);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend",  onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup",   onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend",  onMouseUp);
    };
  }, [onMouseMove, onMouseUp, onTouchMove]);

  return (
    <div className="rounded-2xl overflow-hidden shadow-lg group">
      {/* Label bar */}
      <div className="bg-[#1b3a6b] px-4 py-2.5 flex items-center justify-between">
        <span className="text-white text-xs font-bold uppercase tracking-widest">{label}</span>
        <div className="flex items-center gap-1.5 text-white/75 text-xs">
          <MoveHorizontal className="w-3.5 h-3.5" /> drag to compare
        </div>
      </div>

      {/* Slider container */}
      <div
        ref={containerRef}
        className="relative select-none cursor-col-resize"
        style={{ aspectRatio: "4/3" }}
        onMouseDown={(e) => { dragging.current = true; updatePos(e.clientX); }}
        onTouchStart={(e) => { dragging.current = true; updatePos(e.touches[0].clientX); }}
      >
          {/* After (base layer — always full width) */}
        <img src={after} alt="After clean" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />

        {/* Before (clipped to the left portion using clip-path) */}
        <img
          src={before}
          alt="Before clean"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        />

        {/* BEFORE label */}
        <div className="absolute top-3 left-3 bg-black/60 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full pointer-events-none">
          Before
        </div>
        {/* AFTER label */}
        <div className="absolute top-3 right-3 bg-[#00b5be]/90 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full pointer-events-none">
          After
        </div>

        {/* Divider line */}
        <div
          className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.5)] pointer-events-none"
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
  const headRef  = useRef<HTMLDivElement>(null);
  const [headVis, setHeadVis]  = useState(false);
  const baRef    = useRef<HTMLDivElement>(null);
  const [baVis, setBaVis]      = useState(false);
  const galRef   = useRef<HTMLDivElement>(null);
  const [galVis, setGalVis]    = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const observe = (el: HTMLElement | null, cb: () => void) => {
      if (!el) return;
      const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { cb(); obs.disconnect(); } }, { threshold: 0.1 });
      obs.observe(el);
      return obs;
    };
    const o1 = observe(headRef.current,  () => setHeadVis(true));
    const o2 = observe(baRef.current,    () => setBaVis(true));
    const o3 = observe(galRef.current,   () => setGalVis(true));
    return () => { o1?.disconnect(); o2?.disconnect(); o3?.disconnect(); };
  }, []);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight" && lightbox !== null) setLightbox((lightbox + 1) % gallery.length);
      if (e.key === "ArrowLeft"  && lightbox !== null) setLightbox((lightbox - 1 + gallery.length) % gallery.length);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [lightbox]);

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
            Drag the sliders below to see the transformation — every job is a before and after
            we're proud to show.
          </p>
        </div>

        {/* ── Before / After sliders ── */}
        <div
          ref={baRef}
          className={`grid md:grid-cols-3 gap-5 mb-14 transition-all duration-700 ${baVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {pairs.map((p, i) => (
            <div key={i} style={{ transitionDelay: `${i * 100}ms` }}>
              <BeforeAfterSlider before={p.before} after={p.after} label={p.label} />
            </div>
          ))}
        </div>

        {/* ── Gallery ── */}
        <div
          ref={galRef}
          className={`transition-all duration-700 ${galVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h3 className="text-[#1b3a6b] font-bold text-lg mb-5">More from Our Projects</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((g, i) => (
              <div
                key={i}
                onClick={() => setLightbox(i)}
                className="relative rounded-xl overflow-hidden cursor-pointer group bg-gray-100"
                style={{ aspectRatio: "4/3", transitionDelay: `${i * 60}ms` }}
              >
                <img src={g.src} alt={g.alt} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b3a6b]/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-white text-xs font-bold">{g.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className={`mt-10 text-center transition-all duration-700 ${galVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: "400ms" }}>
          <p className="text-gray-500 mb-5 text-sm">Want results like these for your property?</p>
          <button onClick={() => ScrollTo("contact")} className="btn-primary">
            Get a Free Quote <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={gallery[lightbox].src} alt={gallery[lightbox].alt} className="w-full max-h-[80vh] object-contain rounded-xl" />
            <p className="text-center text-white/70 text-sm mt-3">{gallery[lightbox].label}</p>
            <button onClick={() => setLightbox((lightbox - 1 + gallery.length) % gallery.length)} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white/70 hover:text-white text-4xl font-light">‹</button>
            <button onClick={() => setLightbox((lightbox + 1) % gallery.length)} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white/70 hover:text-white text-4xl font-light">›</button>
            <button onClick={() => setLightbox(null)} className="absolute -top-10 right-0 text-white/70 hover:text-white text-2xl">✕</button>
          </div>
        </div>
      )}
    </section>
  );
};
