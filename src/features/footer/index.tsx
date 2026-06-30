import { Facebook, Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SUBURBS } from '../../lib/suburbs';
import { ScrollTo } from '../../lib/utils';

const serviceLinks = [
  'Regular House Cleaning',
  'Vacate / End of Lease',
  'Deep Cleaning',
  'Move-In Cleaning',
  'Spring Cleaning',
  'After Party / Event',
];

const companyLinks = [
  { label: 'About Us', id: 'about' },
  { label: 'Our Services', id: 'services' },
  { label: 'How It Works', id: 'process' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Contact', id: 'contact' },
];

const extraSuburbs = [
  'Melbourne CBD',
  'Windsor',
  'Balwyn',
  'Kew',
  'Croydon',
  'Templestowe',
  'Thornbury',
  'Heidelberg',
  'Bundoora',
  'Williamstown',
  'Newport',
  'Altona',
  'Hoppers Crossing',
  'Mornington',
  'Cheltenham',
  'Bentleigh',
  'Moorabbin',
  'Clayton',
  'Springvale',
  'Cranbourne',
  'Pakenham',
  'Berwick',
  'Officer',
];

const allSuburbs = [
  ...SUBURBS.map((s) => ({
    name: s.name,
    href: `/cleaning/${s.slug}-melbourne`,
  })),
  ...extraSuburbs.map((name) => ({ name, href: null })),
];

export const Footer = () => (
  <footer
    id="footer"
    className="relative overflow-hidden"
    style={{
      background:
        'linear-gradient(160deg, #0a1628 0%, #0d1f3c 50%, #0a1628 100%)',
    }}
  >
    {/* Large decorative orbs */}
    <div
      className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
      style={{
        background:
          'radial-gradient(circle, rgba(0,181,190,0.07) 0%, transparent 65%)',
        transform: 'translate(20%, -20%)',
      }}
    />
    <div
      className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
      style={{
        background:
          'radial-gradient(circle, rgba(27,58,107,0.5) 0%, transparent 70%)',
        transform: 'translate(-20%, 20%)',
      }}
    />
    <div
      className="absolute top-1/2 left-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
      style={{
        background:
          'radial-gradient(ellipse, rgba(0,181,190,0.04) 0%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
      }}
    />

    {/* ── Hero CTA band ── */}
    <div className="relative border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-[#00b5be]/15 border border-[#00b5be]/25 text-[#00b5be] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            <Sparkles className="w-3 h-3" /> Melbourne's Cleaning Specialists
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 leading-tight">
            Ready for a spotless home?
          </h2>
          <p className="text-white/50 text-base max-w-lg">
            Join hundreds of Melbourne families who trust SparkleHub every week
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <a
            href="tel:+61420214143"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white/80 hover:text-white hover:border-white/40 font-semibold text-sm px-6 py-3.5 rounded-2xl transition-all duration-200 backdrop-blur-sm"
          >
            <Phone className="w-4 h-4" /> +61 420 214 143
          </a>
          <button
            onClick={() => ScrollTo('contact')}
            className="btn-primary btn-glow px-8 py-3.5 text-sm font-bold rounded-2xl"
          >
            Get a Free Quote
          </button>
        </div>
      </div>
    </div>

    {/* ── Main grid ── */}
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12">
        {/* Brand — spans 4 cols */}
        <div className="lg:col-span-4">
          <div className="cursor-pointer mb-5" onClick={() => ScrollTo('hero')}>
            <img
              src="src/assets/logo.png"
              alt="SparkleHub"
              className="h-10 w-auto object-contain brightness-0 invert max-w-[160px]"
            />
          </div>
          <p className="text-white/50 text-sm leading-relaxed mb-7 max-w-xs">
            Melbourne's trusted residential cleaning specialists. Reliable,
            insured, eco-friendly, and satisfaction guaranteed.
          </p>

          {/* Contact pills */}
          <div className="space-y-2.5">
            <a
              href="tel:+61420214143"
              className="flex items-center gap-3 group"
            >
              <span
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(0,181,190,0.2), rgba(0,181,190,0.08))',
                  border: '1px solid rgba(0,181,190,0.2)',
                }}
              >
                <Phone className="w-3.5 h-3.5 text-[#00b5be]" />
              </span>
              <span className="text-sm text-white/60 group-hover:text-white transition-colors">
                +61 420 214 143
              </span>
            </a>
            <a
              href="mailto:info@sparklehubcleaning.com.au"
              className="flex items-center gap-3 group"
            >
              <span
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(0,181,190,0.2), rgba(0,181,190,0.08))',
                  border: '1px solid rgba(0,181,190,0.2)',
                }}
              >
                <Mail className="w-3.5 h-3.5 text-[#00b5be]" />
              </span>
              <span className="text-sm text-white/60 group-hover:text-white transition-colors">
                info@sparklehubcleaning.com.au
              </span>
            </a>
            <div className="flex items-center gap-3">
              <span
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(0,181,190,0.2), rgba(0,181,190,0.08))',
                  border: '1px solid rgba(0,181,190,0.2)',
                }}
              >
                <MapPin className="w-3.5 h-3.5 text-[#00b5be]" />
              </span>
              <span className="text-sm text-white/60">
                Melbourne, VIC — All Suburbs
              </span>
            </div>
          </div>

          {/* Social */}
          <div className="mt-7">
            <a
              href="https://www.facebook.com/profile.php?id=61591028807593"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex items-center gap-2.5 text-sm text-white/50 hover:text-white transition-all duration-200 group"
            >
              <span className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-[#00b5be]/50 group-hover:bg-[#00b5be]/10 transition-all duration-200">
                <Facebook className="w-4 h-4" />
              </span>
              Follow us on Facebook
            </a>
          </div>
        </div>

        {/* Services — 2 cols */}
        <div className="lg:col-span-2">
          <h3 className="font-bold text-xs uppercase tracking-[0.15em] text-white mb-6 flex items-center gap-2">
            <span className="w-4 h-px bg-[#00b5be]/50" /> Services
          </h3>
          <ul className="space-y-2.5">
            {serviceLinks.map((s) => (
              <li key={s}>
                <button
                  onClick={() => ScrollTo('services')}
                  className="text-sm text-white/80 hover:text-[#00b5be] transition-colors text-left group flex items-center gap-2"
                >
                  <span className="w-0 group-hover:w-2.5 h-px bg-[#00b5be] transition-all duration-200 flex-shrink-0" />
                  {s}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Company — 2 cols */}
        <div className="lg:col-span-2">
          <h3 className="font-bold text-xs uppercase tracking-[0.15em] text-white mb-6 flex items-center gap-2">
            <span className="w-4 h-px bg-[#00b5be]/50" /> Company
          </h3>
          <ul className="space-y-2.5">
            {companyLinks.map((c) => (
              <li key={c.label}>
                <button
                  onClick={() => ScrollTo(c.id)}
                  className="text-sm text-white/80 hover:text-[#00b5be] transition-colors text-left group flex items-center gap-2"
                >
                  <span className="w-0 group-hover:w-2.5 h-px bg-[#00b5be] transition-all duration-200 flex-shrink-0" />
                  {c.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Guarantees card — 4 cols */}
        <div className="lg:col-span-4">
          <h3 className="font-bold text-xs uppercase tracking-[0.15em] text-white mb-6 flex items-center gap-2">
            <span className="w-4 h-px bg-[#00b5be]/50" /> Our Promise
          </h3>
          <div
            className="rounded-2xl p-6 space-y-4"
            style={{
              background:
                'linear-gradient(145deg, rgba(0,181,190,0.08) 0%, rgba(255,255,255,0.03) 100%)',
              border: '1px solid rgba(0,181,190,0.15)',
            }}
          >
            {[
              {
                label: '100% Satisfaction Guarantee',
                sub: 'We make it right or return free',
              },
              {
                label: 'Bond Back Guarantee',
                sub: 'Full refund for re-clean if needed',
              },
              { label: 'No Hidden Fees', sub: 'Upfront pricing, always' },
              {
                label: 'Eco-Friendly Products',
                sub: 'Safe for kids, pets & the planet',
              },
            ].map((g, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#00b5be] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-2.5 h-2.5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <div className="text-white text-sm font-semibold">
                    {g.label}
                  </div>
                  <div className="text-white/40 text-xs mt-0.5">{g.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* ── Suburb belt ── */}
    <div className="border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-xs font-bold uppercase tracking-widest text-white mb-4">
          Areas We Service
        </p>
        <div className="flex flex-wrap gap-x-3 gap-y-1.5">
          {allSuburbs.map((s, i) =>
            s.href ? (
              <Link
                key={s.name}
                to={s.href}
                className="text-xs text-white hover:text-[#00b5be] transition-colors"
              >
                {s.name}
                {i < allSuburbs.length - 1 && (
                  <span className="text-white/20 ml-3">·</span>
                )}
              </Link>
            ) : (
              <span key={s.name} className="text-xs text-white cursor-default">
                {s.name}
                {i < allSuburbs.length - 1 && (
                  <span className="text-white/20 ml-3">·</span>
                )}
              </span>
            ),
          )}
        </div>
      </div>
    </div>

    {/* ── Bottom bar ── */}
    <div className="border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-white/25">
          © {new Date().getFullYear()} SparkleHub Professional Cleaning. All
          rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-white/25">
          <span className="hover:text-white/50 cursor-pointer transition-colors">
            Privacy Policy
          </span>
          <span className="hover:text-white/50 cursor-pointer transition-colors">
            Terms of Service
          </span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-5">
        <p className="text-[11px] text-white/20 text-center">
          SparkleHub is a cleaning services company. We do not hold a Labour Hire Licence and do not provide labour hire services.
        </p>
      </div>
    </div>
  </footer>
);
