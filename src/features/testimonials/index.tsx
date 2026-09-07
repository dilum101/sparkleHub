import { CheckCircle, ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ScrollTo } from "../../lib/utils";

const testimonials = [
  {
    name: "Sarah M.", location: "Fitzroy, VIC", rating: 5,
    text: "PRIMEORA did our end-of-lease clean and we got our full bond back without any issues. The property looked better than when we first moved in! The team was punctual, thorough and very professional. I was honestly blown away by how meticulous they were — every corner, every surface, even the inside of the oven. Highly recommend to anyone moving out.",
    highlight: "Got full bond back with zero issues",
    loved: ["On time and professional", "Oven & appliances spotless", "Real estate agent impressed", "Full bond returned"],
    service: "Vacate Cleaning", initials: "SM", propertyType: "2-bedroom apartment",
  },
  {
    name: "James T.", location: "Richmond, VIC", rating: 5,
    text: "I've been booking fortnightly house cleans and couldn't be happier. Always on time, always thorough, and the team is so friendly and easy to deal with. They remember exactly how I like things done and are super reliable. Coming home to a properly clean house every fortnight is honestly one of the best things I've done for my wellbeing.",
    highlight: "Consistent, reliable fortnightly cleans",
    loved: ["Always punctual", "Remembers my preferences", "Incredibly thorough", "Friendly & professional team"],
    service: "Regular House Cleaning", initials: "JT", propertyType: "3-bedroom house",
  },
  {
    name: "Emily R.", location: "Brunswick, VIC", rating: 5,
    text: "Booked a deep clean after moving into a new rental that hadn't been properly cleaned. They went completely above and beyond — inside every cupboard, behind the appliances, the grout between the bathroom tiles. I genuinely didn't think the place could look that good. The transformation was incredible and the price was very reasonable for the amount of work they put in.",
    highlight: "Transformed a neglected rental into a spotless home",
    loved: ["Inside every cupboard", "Grout & tiles scrubbed", "Behind all appliances", "Reasonable pricing"],
    service: "Deep Cleaning", initials: "ER", propertyType: "2-bedroom rental",
  },
  {
    name: "David & Lisa W.", location: "Collingwood, VIC", rating: 5,
    text: "We manage a few rental properties and use PRIMEORA between every tenancy. They are consistently reliable, affordable and the properties always come up absolutely immaculate. The real estate agents are always impressed by the standard of cleanliness. Turnaround time is fast which is crucial for us, and the team always communicates well. We wouldn't use anyone else.",
    highlight: "Our go-to between every tenancy",
    loved: ["Fast turnaround time", "Great communication", "Real estate approved standard", "Consistent quality every time"],
    service: "Vacate Cleaning", initials: "DW", propertyType: "Multiple rental properties",
  },
  {
    name: "Priya K.", location: "St Kilda, VIC", rating: 5,
    text: "I called PRIMEORA for a last-minute clean before family arrived and was amazed they could fit me in the same day. The team arrived right on time, were incredibly thorough and left every room spotless in just a few hours. I was almost embarrassed by how much better the house looked! Flexible, professional, great value — I've already booked them again for a regular clean.",
    highlight: "Same-day booking, amazing result",
    loved: ["Same-day availability", "Arrived right on time", "Every room spotless", "Already rebooked"],
    service: "House Cleaning", initials: "PK", propertyType: "3-bedroom house",
  },
];

export const Testimonials = ({}: {}) => {
  const [current, setCurrent] = useState(0);
  // visible is what's actually rendered; fading tracks opacity
  const [visible, setVisible] = useState(0);
  const [fading, setFading] = useState(false);
  const busy = useRef(false);
  const ref  = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const go = (idx: number) => {
    if (busy.current || idx === current) return;
    busy.current = true;
    // Phase 1: fade out
    setFading(true);
    setTimeout(() => {
      // Phase 2: swap content while invisible
      setCurrent(idx);
      setVisible(idx);
      // Phase 3: fade back in
      setFading(false);
      setTimeout(() => { busy.current = false; }, 500);
    }, 320);
  };

  const prev = () => go((current - 1 + testimonials.length) % testimonials.length);
  const next = () => go((current + 1) % testimonials.length);

  const t = testimonials[visible];

  return (
    <section id="testimonials" className="py-20 bg-[#1b3a6b] relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#00b5be]/10 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="inline-flex items-center gap-2 bg-white/10 text-[#00b5be] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            <Star className="w-3.5 h-3.5 fill-current" /> Client Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">What Our Clients Say</h2>
          <p className="text-white/80 text-lg">See what our Melbourne clients are saying</p>
        </div>

        <div
          className={`grid lg:grid-cols-3 gap-8 transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "200ms" }}
        >
          {/* ── Main card with smooth crossfade ── */}
          <div className="lg:col-span-2">
            <div
              className="bg-white rounded-2xl overflow-hidden h-full flex flex-col"
              style={{
                opacity: fading ? 0 : 1,
                transform: fading ? "translateY(8px)" : "translateY(0)",
                transition: "opacity 320ms cubic-bezier(0.4,0,0.2,1), transform 320ms cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              {/* Header */}
              <div className="bg-[#f0f9fa] px-8 py-5 flex items-center justify-between border-b border-[#e0f7f8]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#1b3a6b] flex items-center justify-center text-white font-bold text-sm">{t.initials}</div>
                  <div>
                    <div className="font-bold text-[#1b3a6b]">{t.name}</div>
                    <div className="text-gray-400 text-sm">{t.location} · {t.propertyType}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex gap-0.5 justify-end mb-1">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />)}
                  </div>
                  <span className="bg-[#00b5be] text-white text-xs font-semibold px-3 py-1 rounded-full">{t.service}</span>
                </div>
              </div>

              {/* Highlight */}
              <div className="bg-[#1b3a6b] px-8 py-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#00b5be] flex-shrink-0" />
                <span className="text-white text-sm font-semibold">{t.highlight}</span>
              </div>

              {/* Quote */}
              <div className="px-8 py-6 flex-1 relative">
                <Quote className="w-10 h-10 text-[#e0f7f8] absolute top-4 right-6" />
                <blockquote className="text-gray-600 text-base leading-relaxed italic">"{t.text}"</blockquote>
              </div>

              {/* What they loved */}
              <div className="px-8 pb-7">
                <p className="text-xs font-bold text-[#1b3a6b] uppercase tracking-widest mb-3">What They Loved</p>
                <div className="grid grid-cols-2 gap-2">
                  {t.loved.map((l) => (
                    <div key={l} className="flex items-center gap-2 bg-[#f0f9fa] rounded-lg px-3 py-2 text-sm text-gray-700">
                      <CheckCircle className="w-3.5 h-3.5 text-[#00b5be] flex-shrink-0" />{l}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <div className="flex flex-col gap-4">
            {testimonials.filter((_, i) => i !== current).slice(0, 3).map((tt) => (
              <button
                key={tt.initials}
                onClick={() => go(testimonials.indexOf(tt))}
                className="bg-white/10 hover:bg-white/20 border border-white/15 text-left rounded-xl p-4 transition-all duration-200"
              >
                <div className="flex gap-0.5 mb-2">
                  {[...Array(tt.rating)].map((_, si) => <Star key={si} className="w-3.5 h-3.5 text-yellow-400 fill-current" />)}
                </div>
                <p className="text-white/80 text-xs leading-relaxed line-clamp-3 mb-2 italic">"{tt.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#00b5be] flex items-center justify-center text-white text-xs font-bold">{tt.initials[0]}</div>
                  <span className="text-white/80 text-xs">{tt.name} · {tt.location}</span>
                </div>
              </button>
            ))}

            {/* Dots + arrows */}
            <div className="flex items-center justify-between mt-auto pt-2">
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2.5 bg-[#00b5be]" : "w-2.5 h-2.5 bg-white/30 hover:bg-white/50"}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={prev} className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button onClick={next} className="w-10 h-10 rounded-lg bg-[#00b5be] hover:bg-[#009aa2] flex items-center justify-center text-white transition-all">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA strip */}
        <div
          className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-6 py-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" aria-hidden />)}
            </div>
            <span className="text-sm font-semibold text-white">100% Satisfaction Guarantee</span>
            <span className="text-white/75 text-sm">· Every single clean</span>
          </div>
          <button onClick={() => ScrollTo("contact")} className="btn-primary btn-glow">
            Book Your Clean Today <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
