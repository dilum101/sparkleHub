import { ChevronDown, ChevronUp, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ScrollTo } from "../../lib/utils";

const faqs = [
  {
    q: "Do you bring your own cleaning supplies and equipment?",
    a: "Yes, absolutely! We arrive fully equipped with all professional-grade, eco-friendly cleaning products and tools. You don't need to supply anything — just let us in and we take care of the rest.",
  },
  {
    q: "Do you offer a bond back guarantee for vacate cleans?",
    a: "Yes. We specialise in end-of-lease cleans designed to meet real estate agent inspection standards. If anything is flagged on the inspection report, we will return within 24 hours to re-clean those specific areas at no extra cost to you.",
  },
  {
    q: "How do I get a quote and how quickly will I receive it?",
    a: "Simply fill in our online quote form or give us a call. We'll ask a few quick questions about your property (bedrooms, bathrooms, property size) and provide you with a clear, upfront price — usually within 1–2 hours.",
  },
  {
    q: "Are your cleaners police-checked and insured?",
    a: "Yes. Every SparkleHub cleaner holds a current police check and we carry full public liability insurance. Your home, valuables and peace of mind are always protected.",
  },
  {
    q: "Can I book a same-day or last-minute clean?",
    a: "We do our best to accommodate short-notice and same-day bookings subject to availability. Give us a call as early as possible and we'll confirm the earliest slot we can offer.",
  },
  {
    q: "What areas in Melbourne do you service?",
    a: "We service Melbourne CBD and all surrounding suburbs. Contact us with your postcode and we'll quickly confirm whether we cover your area — most Melbourne metro areas are included.",
  },
  {
    q: "What is your cancellation or rescheduling policy?",
    a: "We understand life happens. We ask for at least 24 hours notice for cancellations or rescheduling where possible. Please contact us as soon as you know and we'll do our best to accommodate you.",
  },
  {
    q: "Do I need to be home during the clean?",
    a: "No, you don't need to be home. Many of our clients provide us with a key or door code. Your home is in safe hands with our fully vetted, insured team.",
  },
];

export const FAQ = ({}: {}) => {
  const [open, setOpen] = useState<number | null>(0);
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="faq" className="py-20 bg-[#f0f9fa]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-14">
          {/* Left: header + CTA */}
          <div className={`transition-all duration-700 ${vis ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="section-badge mb-5">FAQ</div>
            <h2 className="section-title mb-5">
              Common Questions
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Everything you need to know before booking. Can't find your answer?
              Get in touch — we're happy to help.
            </p>
            <div className="space-y-4">
              <a
                href="tel:+61420214143"
                className="flex items-center gap-3 bg-white border border-gray-200 hover:border-[#00b5be] rounded-xl p-4 group transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[#e0f7f8] text-[#00b5be] flex items-center justify-center group-hover:bg-[#00b5be] group-hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wide">Call Us Directly</div>
                  <div className="font-bold text-[#1b3a6b]">+61 420 214 143</div>
                </div>
              </a>
              <button
                onClick={() => ScrollTo("contact")}
                className="btn-primary w-full justify-center"
              >
                Send Us a Message
              </button>
            </div>

            {/* Quick trust list */}
            <div className="mt-8 bg-white rounded-xl border border-gray-100 p-5">
              <p className="text-xs font-bold text-[#1b3a6b] uppercase tracking-widest mb-3">Quick Facts</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "No lock-in contracts",
                  "All equipment supplied",
                  "Eco-friendly products",
                  "Police-checked cleaners",
                  "Fully insured team",
                  "24hr re-clean guarantee",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00b5be] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: accordion */}
          <div
            className={`lg:col-span-2 transition-all duration-700 ${vis ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${open === i ? "border-[#00b5be] shadow-sm" : "border-gray-200 hover:border-gray-300"}`}>
                  <button
                    className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span className={`font-semibold text-sm pr-4 ${open === i ? "text-[#00b5be]" : "text-[#1b3a6b]"}`}>{faq.q}</span>
                    {open === i
                      ? <ChevronUp className="w-5 h-5 text-[#00b5be] flex-shrink-0" />
                      : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
                  </button>
                  {open === i && (
                    <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4 accordion-content">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
