import { CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import aboutImg from "../../assets/aboutus.png";
import { ScrollTo } from "../../lib/utils";

const points = [
  "Family-owned Melbourne cleaning business",
  "Passionate about quality from day one",
  "Fully insured & police-checked cleaners",
  "We supply all equipment & eco-products",
  "Flexible scheduling — weekdays & weekends",
  "Bond back guarantee on all vacate cleans",
  "No lock-in contracts — book as needed",
  "100% satisfaction or we make it right",
];

const stats = [
  { n: "100%", l: "Satisfaction Guarantee" },
  { n: "100%", l: "Bond Return Rate" },
  { n: "✓", l: "Fully Insured" },
  { n: "✓", l: "Police Checked" },
];

export const AboutUs = ({}: {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-[#f8fafc]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image + stats */}
          <div className={`transition-all duration-700 ${vis ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="relative">
              <img
                src={aboutImg}
                alt="SparkleHub professional cleaners at work in Melbourne home"
                loading="lazy"
                decoding="async"
                className="w-full h-[480px] object-cover rounded-2xl shadow-xl"
              />
              {/* Floating stat card */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                <div className="grid grid-cols-4 gap-3 text-center">
                  {stats.map((s) => (
                    <div key={s.l}>
                      <div className="text-2xl font-extrabold text-[#00b5be]">{s.n}</div>
                      <div className="text-xs text-gray-500 font-medium leading-tight mt-0.5">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div
            className={`mt-8 lg:mt-0 transition-all duration-700 ${vis ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="section-badge mb-5">About SparkleHub</div>
            <h2 className="section-title mb-5">
              Melbourne's Newest<br />
              <span className="text-[#00b5be]">Home Cleaning Specialists</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              SparkleHub is a family-owned professional cleaning business proudly
              serving Melbourne and its surrounding suburbs. We launched with one
              clear mission — to deliver genuinely high-quality cleaning at a fair
              price, with staff you can actually trust in your home.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Every member of our team is carefully vetted, background-checked and
              trained to our high standards. We use only eco-friendly, non-toxic
              cleaning products that are safe for children, pets and the environment.
            </p>
            <p className="text-gray-600 leading-relaxed mb-7">
              We specialise in residential cleaning, vacate & end-of-lease cleaning,
              and deep cleans. Being new to the industry means we work harder to
              impress — every job gets our absolute best effort, guaranteed.
            </p>

            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#00b5be] mt-0.5 flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <button onClick={() => ScrollTo("contact")} className="btn-primary">
                Get a Free Quote
              </button>
              <button
                onClick={() => ScrollTo("services")}
                className="btn-outline"
              >
                View Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
