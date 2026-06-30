import {
  ArrowRight,
  CheckCircle,
  Clock,
  Phone,
  Shield,
  ThumbsUp,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import heroImg from '../../assets/heronew.png';
import { ScrollTo } from '../../lib/utils';

const SERVICE_MAP: Record<string, string> = {
  'Regular House Cleaning': 'house',
  'Vacate / End of Lease': 'vacate',
  'Deep Cleaning': 'deep',
  'Move-In Cleaning': 'movein',
  'Spring Cleaning': 'spring',
  'After Party / Event': 'event',
};

export const Hero = ({}: {}) => {
  const [vis, setVis] = useState(false);
  const [panel, setPanel] = useState({
    service: '',
    name: '',
    phone: '',
    suburb: '',
  });
  useEffect(() => {
    const t = setTimeout(() => setVis(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleQuote = () => {
    window.dispatchEvent(
      new CustomEvent('prefillQuote', {
        detail: {
          name: panel.name,
          phone: panel.phone,
          suburb: panel.suburb,
          service: SERVICE_MAP[panel.service] ?? '',
        },
      }),
    );
    ScrollTo('contact');
  };

  const trust = [
    { icon: <Shield className="w-4 h-4" />, text: 'Fully Insured & Verified' },
    { icon: <ThumbsUp className="w-4 h-4" />, text: 'Bond Back Guarantee' },
    {
      icon: <Clock className="w-4 h-4" />,
      text: 'Same-Day Bookings Available',
    },
  ];

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ minHeight: '92vh' }}
    >
      {/* Full-bleed background image — person positioned to right so panel covers face */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('${heroImg}')`,
          backgroundPosition: '72% 20%',
        }}
      />

      {/* Layered gradient — strong left, fading right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(100deg, rgba(13,31,60,0.97) 0%, rgba(27,58,107,0.92) 35%, rgba(27,58,107,0.75) 60%, rgba(0,181,190,0.35) 100%)',
        }}
      />

      {/* Diagonal teal accent stripe */}
      <div
        className="absolute inset-y-0 right-0 w-1/2 hidden lg:block pointer-events-none"
        style={{
          background:
            'linear-gradient(120deg, transparent 40%, rgba(0,181,190,0.08) 100%)',
        }}
      />

      {/* Floating orbs */}
      {(
        [
          { w: 90, top: '12%', left: '8%', delay: '0s', dur: '7s' },
          { w: 140, top: '65%', left: '72%', delay: '1.2s', dur: '9s' },
          { w: 65, top: '38%', left: '55%', delay: '2.4s', dur: '6s' },
          { w: 110, top: '78%', left: '18%', delay: '0.8s', dur: '8s' },
          { w: 75, top: '22%', left: '82%', delay: '3s', dur: '10s' },
          { w: 50, top: '55%', left: '38%', delay: '1.6s', dur: '7.5s' },
        ] as const
      ).map((o, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none orb-float"
          style={{
            width: o.w,
            height: o.w,
            top: o.top,
            left: o.left,
            animationDelay: o.delay,
            animationDuration: o.dur,
            background:
              'radial-gradient(circle, rgba(0,181,190,0.35), transparent 70%)',
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center pt-16 pb-28">
        <div className="grid lg:grid-cols-5 gap-10 items-start w-full">
          {/* ── LEFT TEXT COLUMN (3/5) ── */}
          <div className="lg:col-span-3">
            {/* Location pill */}
            <div
              className={`inline-flex items-center gap-2 mb-6 bg-[#00b5be]/20 border border-[#00b5be]/50 text-[#7ee8ef] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest transition-all duration-600 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <span className="w-2 h-2 rounded-full bg-[#00b5be] animate-pulse" />
              Serving All Melbourne Suburbs
            </div>

            {/* Headline */}
            <h1
              className={`text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '120ms' }}
            >
              A Cleaner Home
              <br />
              <span className="text-[#00b5be]">Starts Here.</span>
            </h1>

            {/* Sub-headline */}
            <p
              className={`text-lg md:text-xl text-white/75 leading-relaxed mb-8 max-w-xl transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '220ms' }}
            >
              SparkleHub delivers professional house cleaning, vacate cleaning
              and deep cleaning across Melbourne — reliable, affordable and
              always on time.
            </p>

            {/* Trust badges */}
            <div
              className={`flex flex-wrap gap-3 mb-9 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '320ms' }}
            >
              {trust.map((t) => (
                <div
                  key={t.text}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 text-white/90 text-sm px-4 py-2 rounded-lg"
                >
                  <span className="text-[#00b5be]">{t.icon}</span>
                  {t.text}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div
              className={`flex flex-wrap gap-4 mb-12 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '400ms' }}
            >
              <button
                onClick={() => ScrollTo('contact')}
                className="btn-primary text-base px-8 py-4 btn-glow"
              >
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="tel:+61420214143"
                className="flex items-center gap-2.5 bg-white text-[#1b3a6b] font-bold text-base px-8 py-4 rounded-lg hover:bg-[#e0f7f8] hover:text-[#00b5be] transition-all duration-300 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </div>

            {/* Stats row */}
            <div
              className={`grid grid-cols-3 gap-4 pt-8 border-t border-white/10 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '500ms' }}
            >
              {[
                { n: '100%', l: 'Satisfaction Rate' },
                { n: 'Bond', l: 'Back Guaranteed' },
                { n: 'Same Day', l: 'Bookings Available' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-3xl md:text-4xl font-extrabold text-[#00b5be]">
                    {s.n}
                  </div>
                  <div className="text-white text-xs font-semibold uppercase tracking-wider mt-0.5 drop-shadow-sm">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT BOOKING PANEL (2/5) ── */}
          <div
            className={`lg:col-span-2 hidden lg:block transition-all duration-900 ${vis ? 'opacity-90 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-95'}`}
            style={{ transitionDelay: '350ms' }}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl overflow-hidden"
              style={{ backdropFilter: 'blur(8px)' }}
            >
              {/* Panel header */}
              <div className="bg-[#1b3a6b] px-6 py-5">
                <p className="text-[#00b5be] text-xs font-bold uppercase tracking-widest mb-1">
                  Free Quote — No Obligation
                </p>
                <h3 className="text-white text-xl font-extrabold">
                  Book a Clean Today
                </h3>
              </div>

              {/* Quick-quote form */}
              <div className="px-6 py-6 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                    Service Type
                  </label>
                  <select
                    value={panel.service}
                    onChange={(e) =>
                      setPanel((p) => ({ ...p, service: e.target.value }))
                    }
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:border-[#00b5be] focus:ring-2 focus:ring-[#00b5be]/20"
                  >
                    <option value="">Select a service...</option>
                    <option>Regular House Cleaning</option>
                    <option>Vacate / End of Lease</option>
                    <option>Deep Cleaning</option>
                    <option>Move-In Cleaning</option>
                    <option>Spring Cleaning</option>
                    <option>After Party / Event</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      value={panel.name}
                      onChange={(e) =>
                        setPanel((p) => ({ ...p, name: e.target.value }))
                      }
                      placeholder="Jane Smith"
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00b5be] focus:ring-2 focus:ring-[#00b5be]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={panel.phone}
                      onChange={(e) =>
                        setPanel((p) => ({ ...p, phone: e.target.value }))
                      }
                      placeholder="04XX XXX XXX"
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00b5be] focus:ring-2 focus:ring-[#00b5be]/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                    Suburb
                  </label>
                  <input
                    type="text"
                    value={panel.suburb}
                    onChange={(e) =>
                      setPanel((p) => ({ ...p, suburb: e.target.value }))
                    }
                    placeholder="e.g. Richmond, Fitzroy..."
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00b5be] focus:ring-2 focus:ring-[#00b5be]/20"
                  />
                </div>
                <button
                  onClick={handleQuote}
                  className="btn-primary w-full justify-center py-3"
                >
                  Get My Free Quote <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Social proof footer */}
              <div className="px-6 pb-5 flex items-center gap-3 border-t border-gray-100 pt-4">
                <CheckCircle className="w-4 h-4 text-[#00b5be] flex-shrink-0" />
                <span className="text-xs text-gray-500 font-medium">
                  <strong className="text-gray-700">
                    100% satisfaction guarantee
                  </strong>{' '}
                  — we make it right
                </span>
              </div>

              {/* Checkmarks */}
              <div className="bg-[#f8fafc] px-6 py-4 grid grid-cols-2 gap-2">
                {[
                  'No lock-in contracts',
                  'Eco-friendly products',
                  'Police-checked staff',
                  'Bond back guarantee',
                ].map((t) => (
                  <div
                    key={t}
                    className="flex items-center gap-1.5 text-xs text-gray-600"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#00b5be] flex-shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
