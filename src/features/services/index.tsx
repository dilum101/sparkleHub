import {
  ArrowRight,
  CheckCircle,
  Home,
  KeyRound,
  Layers,
  Moon,
  Sparkles,
  Wind,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import imgAfterParty from '../../assets/services/afterpartyclean.png';
import imgDeep from '../../assets/services/deepclean.png';
import imgMovein from '../../assets/services/movein.png';
import imgRegular from '../../assets/services/regualrHouseClean.png';
import imgSpring from '../../assets/services/springclean.png';
import imgVacate from '../../assets/services/vacate-endoflease.png';
import { ScrollTo } from '../../lib/utils';

const featured = [
  {
    icon: <Home className="w-7 h-7" />,
    title: 'Regular House Cleaning',
    desc: 'Keep your home consistently spotless with our scheduled cleaning visits. We handle every room thoroughly so you can focus on what matters most.',
    features: [
      'Living Areas & Bedrooms',
      'Kitchen Bench & Sink',
      'Bathrooms & Toilets',
      'Vacuuming & Mopping',
      'Dusting All Surfaces',
      'Rubbish Removal',
    ],
    badge: 'Most Popular',
    accent: '#00b5be',
    img: imgRegular,
  },
  {
    icon: <KeyRound className="w-7 h-7" />,
    title: 'Vacate / End of Lease',
    desc: 'Moving out? Our comprehensive bond cleaning meets real estate agent standards and gives you the best chance of getting your full bond back.',
    features: [
      'All Rooms Thoroughly Cleaned',
      'Oven, Stove & Rangehood',
      'Fridge Interior',
      'Carpet Steam Clean',
      'Window Tracks & Sills',
      'Garage & Balcony',
    ],
    badge: 'Bond Guaranteed',
    accent: '#1b3a6b',
    img: imgVacate,
  },
];

const others = [
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: 'Deep Cleaning',
    desc: 'A top-to-bottom intensive clean tackling all the areas regular cleans miss — inside cupboards, skirting boards, grout and behind appliances.',
    features: [
      'Inside All Cupboards',
      'Skirting Boards & Vents',
      'Grout & Tile Scrubbing',
      'Behind Appliances',
    ],
    img: imgDeep,
    color: '#0891b2',
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: 'Move-In Cleaning',
    desc: "Start fresh in your new home. We sanitise and clean every corner before your furniture arrives so it's truly ready from day one.",
    features: [
      'Full Sanitisation',
      'Inside All Appliances',
      'All Rooms & Hallways',
      'Bathrooms Disinfected',
    ],
    img: imgMovein,
    color: '#059669',
  },
  {
    icon: <Moon className="w-5 h-5" />,
    title: 'Spring Cleaning',
    desc: 'A seasonal refresh that tackles all the neglected spots — behind furniture, ceiling fans, window tracks and everything in between.',
    features: [
      'Behind Furniture',
      'Ceiling Fans & Vents',
      'Window Tracks & Frames',
      'Inside Wardrobes',
    ],
    img: imgSpring,
    color: '#7c3aed',
  },
  {
    icon: <Wind className="w-5 h-5" />,
    title: 'After Party / Event',
    desc: 'Restore your home after a gathering — rubbish removal, full floor and kitchen cleaning, quickly and efficiently.',
    features: [
      'Full Rubbish Removal',
      'Floor Mopping & Vacuuming',
      'Kitchen Deep Clean',
      'Bathroom Reset',
    ],
    img: imgAfterParty,
    color: '#e97316',
  },
];

function useVisible(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, vis };
}

export const Services = () => {
  const head = useVisible();
  const feat = useVisible();
  const grid = useVisible();

  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div
          ref={head.ref}
          className={`text-center mb-16 transition-all duration-700 ${head.vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="section-badge mb-4">What We Offer</div>
          <h2 className="section-title mb-4">Residential Cleaning Services</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            From weekly house cleans to full vacate cleans — eco-friendly
            products, trained professionals and a satisfaction guarantee.
          </p>
        </div>

        {/* ── Featured Two Cards ── */}
        <div ref={feat.ref} className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((s, i) => (
            <div
              key={i}
              className={`group relative rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col isolate ${feat.vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                transitionDelay: `${i * 150}ms`,
                transitionDuration: '600ms',
              }}
            >
              {/* Image strip with overlay */}
              <div className="relative h-56 overflow-hidden rounded-t-3xl flex-shrink-0">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, ${s.accent}ee 0%, ${s.accent}88 40%, transparent 100%)`,
                  }}
                />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30">
                    {s.badge}
                  </span>
                </div>

                {/* Icon */}
                <div className="absolute top-4 right-4 w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white">
                  {s.icon}
                </div>

                {/* Title on image */}
                <div className="absolute bottom-4 left-5 right-5">
                  <h3 className="text-xl font-extrabold text-white drop-shadow-md">
                    {s.title}
                  </h3>
                </div>
              </div>

              {/* White content area */}
              <div className="bg-white px-6 py-5 flex flex-col flex-1 rounded-b-3xl overflow-hidden">
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {s.desc}
                </p>

                <p
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: s.accent }}
                >
                  What's Included
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                  {s.features.map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle
                        className="w-3.5 h-3.5 flex-shrink-0"
                        style={{ color: s.accent }}
                      />
                      {f}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => ScrollTo('contact')}
                  className="mt-auto inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-xl text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-md group/btn"
                  style={{ background: s.accent }}
                >
                  Get a Quote{' '}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ── Supporting Four Cards ── */}
        <div
          ref={grid.ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {others.map((s, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl border border-gray-100 bg-white hover:shadow-xl transition-all duration-400 hover:-translate-y-1.5 flex flex-col isolate ${grid.vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                transitionDelay: `${i * 100}ms`,
                transitionDuration: '600ms',
              }}
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden rounded-t-2xl flex-shrink-0">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to top, ${s.color}cc 0%, transparent 60%)`,
                  }}
                />

                {/* Icon pill */}
                <div className="absolute bottom-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-sm bg-white/15 border border-white/25 text-white">
                  {s.icon}
                  <span className="text-xs font-bold">{s.title}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <p className="text-gray-500 text-xs leading-relaxed mb-4">
                  {s.desc}
                </p>
                <ul className="space-y-1.5 mb-5 flex-1">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-1.5 text-xs text-gray-600"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: s.color }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => ScrollTo('contact')}
                  className="mt-auto flex items-center gap-1 text-xs font-bold transition-colors group/btn"
                  style={{ color: s.color }}
                >
                  Enquire Now{' '}
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* Coloured bottom accent line */}
              <div
                className="h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out"
                style={{ background: s.color }}
              />
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div
          className={`mt-10 rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-5 transition-all duration-700 border border-[#00b5be]/20 ${grid.vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{
            background: 'linear-gradient(135deg, #f0fbfc 0%, #edf3fc 100%)',
            transitionDelay: '450ms',
          }}
        >
          <div>
            <p className="font-bold text-[#1b3a6b] text-lg mb-0.5">
              Not sure which service suits you?
            </p>
            <p className="text-gray-500 text-sm">
              Call us or send an enquiry — we'll recommend the right option for
              your property.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <a
              href="tel:+61420214143"
              className="inline-flex items-center gap-2 border-2 border-[#1b3a6b] text-[#1b3a6b] font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-[#1b3a6b] hover:text-white transition-all duration-200"
            >
              +61 420 214 143
            </a>
            <button onClick={() => ScrollTo('contact')} className="btn-primary">
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
