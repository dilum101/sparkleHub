import { CalendarCheck, ClipboardList, Phone, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    icon: <Phone className="w-7 h-7" />,
    step: "01",
    title: "Get in Touch",
    desc: "Call us or fill out our online quote form. Tell us about your property and what you need.",
  },
  {
    icon: <ClipboardList className="w-7 h-7" />,
    step: "02",
    title: "Receive Your Quote",
    desc: "We'll provide a clear, upfront quote with no hidden fees — usually within a few hours.",
  },
  {
    icon: <CalendarCheck className="w-7 h-7" />,
    step: "03",
    title: "Book a Time",
    desc: "Choose a date and time that suits you. We offer flexible scheduling including weekends.",
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    step: "04",
    title: "Enjoy a Spotless Home",
    desc: "Our trained cleaners arrive on time, fully equipped, and leave your home sparkling clean.",
  },
];

export const Process = ({}: {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="process" className="py-20 bg-[#1b3a6b] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#00b5be]/10 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white/10 text-[#00b5be] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" /> How It Works
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Booking a Clean is Easy
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Four simple steps from enquiry to a spotless home.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Connector line — draws in when visible */}
          <div className="absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-white/10 hidden md:block pointer-events-none overflow-hidden">
            {visible && (
              <div className="h-full bg-gradient-to-r from-[#00b5be] via-white/40 to-[#00b5be] draw-line" />
            )}
          </div>

          {steps.map((s, i) => (
            <div
              key={i}
              className={`relative text-center transition-all duration-600 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Number circle */}
              <div className="relative inline-flex items-center justify-center mb-5">
                <div
                  className="w-16 h-16 rounded-full bg-[#00b5be] flex items-center justify-center text-white z-10 relative step-pulse"
                  style={{ animationDelay: `${i * 0.5}s` }}
                >
                  {s.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#1b3a6b] border-2 border-[#00b5be] flex items-center justify-center text-[#00b5be] text-xs font-extrabold">
                  {s.step}
                </div>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
