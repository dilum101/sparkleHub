import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  MapPin,
  Phone,
  Sparkles,
  Star,
} from 'lucide-react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSuburb, SUBURBS } from '../../lib/suburbs';

const services = [
  'Regular House Cleaning',
  'Vacate / End of Lease Clean',
  'Deep Cleaning',
  'Move-In Cleaning',
  'Spring Cleaning',
  'After Party / Event Clean',
];

const whyUs = [
  'Police-checked, vetted cleaners',
  '$5M public liability insurance',
  'Eco-friendly, pet-safe products',
  'Bond back guarantee on vacate cleans',
  'All equipment & supplies included',
  'Same-day bookings available',
];

export const SuburbPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const cleanSlug = (slug ?? '').replace(/-melbourne$/, '');
  const suburb = getSuburb(cleanSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!suburb) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <p className="text-2xl font-bold text-gray-700 mb-4">
          Suburb not found
        </p>
        <Link to="/" className="text-[#00b5be] underline">
          Back to home
        </Link>
      </div>
    );
  }

  const title = `Residential Cleaning ${suburb.name} Melbourne`;

  return (
    <>
      {/* SEO meta via document */}
      <MetaTags
        suburb={suburb.name}
        slug={`${cleanSlug}-melbourne`}
        blurb={suburb.blurb}
      />

      <div className="min-h-screen bg-white">
        {/* ── Hero band ── */}
        <div
          className="relative overflow-hidden"
          style={{
            background:
              'linear-gradient(135deg, #0d1f3c 0%, #1b3a6b 60%, #0d3d4d 100%)',
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.05]"
            style={{
              backgroundImage:
                'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(0,181,190,0.15) 0%, transparent 70%)',
              transform: 'translate(30%,-30%)',
            }}
          />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to SparkleHub
            </Link>

            <div className="inline-flex items-center gap-2 bg-[#00b5be]/20 border border-[#00b5be]/30 text-[#00b5be] text-xs font-bold ml-2 px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
              <MapPin className="w-3 h-3" /> {suburb.region} Melbourne
            </div>

            <h1 className="flex flex-col text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
              <span>Residential Cleaning</span>
              <span className="md:whitespace-nowrap">
                <span className="text-[#00b5be]">{suburb.name}</span>, Melbourne
              </span>
            </h1>

            <p className="text-white/75 text-lg max-w-2xl mb-8 leading-relaxed">
              {suburb.blurb} Professional, insured and eco-friendly — with a
              bond back guarantee.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+61420214143"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/25 text-white font-bold px-7 py-3.5 rounded-2xl hover:border-white/50 hover:bg-white/10 transition-all text-sm"
              >
                <Phone className="w-4 h-4" /> Call +61 420 214 143
              </a>
              <Link
                to="/#contact"
                className="btn-primary px-7 py-3.5 text-sm rounded-2xl inline-flex items-center gap-2"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* ── Main content ── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: services + why us */}
            <div className="lg:col-span-2 space-y-12">
              {/* Services */}
              <div>
                <h2 className="text-2xl font-extrabold text-[#1b3a6b] mb-2">
                  Cleaning Services in {suburb.name}
                </h2>
                <p className="text-gray-500 mb-6">
                  We offer the full range of residential cleaning services
                  across {suburb.name} and nearby suburbs including{' '}
                  {suburb.nearby.join(', ')}.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {services.map((s) => (
                    <div
                      key={s}
                      className="flex items-center gap-3 bg-[#f0fbfc] border border-[#b2eef1] rounded-xl px-4 py-3"
                    >
                      <CheckCircle className="w-4 h-4 text-[#00b5be] flex-shrink-0" />
                      <span className="text-sm font-medium text-[#1b3a6b]">
                        {s}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why us */}
              <div>
                <h2 className="text-2xl font-extrabold text-[#1b3a6b] mb-2">
                  Why {suburb.name} Residents Choose SparkleHub
                </h2>
                <p className="text-gray-500 mb-6">
                  We're not just another cleaning company. Here's what sets
                  SparkleHub apart for {suburb.name} homeowners and renters.
                </p>
                <ul className="space-y-3">
                  {whyUs.map((w) => (
                    <li
                      key={w}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#00b5be] flex items-center justify-center flex-shrink-0">
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
                      {w}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Vacate section */}
              <div
                className="rounded-2xl p-7 border border-[#b2eef1]"
                style={{
                  background: 'linear-gradient(145deg, #e0f9fa, #ffffff)',
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-[#00b5be]" />
                  <h3 className="font-extrabold text-[#1b3a6b] text-lg">
                    End of Lease Cleaning in {suburb.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Moving out of a property in {suburb.name}? Our vacate clean is
                  designed to meet real estate agent inspection checklists and
                  get your full bond back. If anything is flagged, we return
                  within 24 hours at no extra cost.
                </p>
                <p className="text-sm font-semibold text-[#00b5be]">
                  Starting from $299 — exact price confirmed upfront.
                </p>
              </div>
            </div>

            {/* Right: sticky quote card */}
            <div className="lg:col-span-1">
              <div className="mt-16 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <div
                  className="p-6"
                  style={{
                    background: 'linear-gradient(135deg, #1b3a6b, #0d3d4d)',
                  }}
                >
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <h3 className="text-white font-extrabold text-xl mb-1">
                    Get a Free Quote
                  </h3>
                  <p className="text-white/65 text-sm">
                    For cleaning in {suburb.name}
                  </p>
                </div>
                <div className="bg-white p-6 space-y-3">
                  <a
                    href="tel:+61420214143"
                    className="flex items-center justify-center gap-2 w-full border-2 border-[#1b3a6b] text-[#1b3a6b] font-bold py-3 rounded-xl text-sm hover:bg-[#1b3a6b] hover:text-white transition-all"
                  >
                    <Phone className="w-4 h-4" /> +61 420 214 143
                  </a>
                  <Link
                    to="/#contact"
                    className="btn-primary w-full flex items-center justify-center gap-2 py-3 text-sm rounded-xl"
                  >
                    Request Quote Online <ArrowRight className="w-4 h-4" />
                  </Link>
                  <p className="text-center text-xs text-gray-400 pt-1">
                    No obligation · Response within 1–2 hours
                  </p>
                </div>
              </div>

              {/* Nearby suburbs */}
              <div className="mt-6 rounded-2xl bg-[#f8fafc] border border-gray-100 p-5">
                <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-3">
                  Also Serving Nearby
                </h4>
                <div className="flex flex-wrap gap-2">
                  {suburb.nearby.map((n) => {
                    const s = SUBURBS.find((s) => s.name === n);
                    return s ? (
                      <Link
                        key={n}
                        to={`/cleaning/${s.slug}-melbourne`}
                        className="text-xs font-semibold text-[#1b3a6b] bg-white border border-gray-200 hover:border-[#00b5be] hover:text-[#00b5be] px-3 py-1.5 rounded-full transition-all"
                      >
                        {n}
                      </Link>
                    ) : (
                      <span
                        key={n}
                        className="text-xs font-semibold text-gray-500 bg-white border border-gray-200 px-3 py-1.5 rounded-full"
                      >
                        {n}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div className="border-t border-gray-100 bg-[#f0fbfc]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <h2 className="text-2xl font-extrabold text-[#1b3a6b] mb-2">
              Ready to book your {suburb.name} clean?
            </h2>
            <p className="text-gray-500 mb-6">
              Same-day bookings available. Call or get an instant quote online.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+61420214143"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#1b3a6b] text-[#1b3a6b] font-bold px-7 py-3.5 rounded-2xl hover:bg-[#1b3a6b] hover:text-white transition-all text-sm"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <Link
                to="/#contact"
                className="btn-primary px-7 py-3.5 text-sm rounded-2xl inline-flex items-center gap-2"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function MetaTags({
  suburb,
  slug,
  blurb,
}: {
  suburb: string;
  slug: string;
  blurb: string;
}) {
  useEffect(() => {
    const title = `House Cleaning ${suburb} Melbourne | SparkleHub`;
    const desc = `${blurb} Professional, insured and eco-friendly cleaning in ${suburb}. Bond back guarantee. Call SparkleHub today.`;
    const canonical = `https://www.sparklehubcleaning.com.au/cleaning/${slug}-melbourne`;

    document.title = title;

    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? 'property' : 'name';
      let el = document.querySelector(
        `meta[${attr}="${name}"]`,
      ) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', desc);
    setMeta('og:title', title, true);
    setMeta('og:description', desc, true);
    setMeta('og:url', canonical, true);

    let link = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonical;

    return () => {
      document.title = 'SparkleHub | Professional House Cleaning Melbourne';
    };
  }, [suburb, slug, blurb]);

  return null;
}
