import { ArrowRight, Phone } from 'lucide-react';
import { ScrollTo } from '../../lib/utils';

interface CTAStripProps {
  heading?: string;
  sub?: string;
  dark?: boolean;
}

export const CTAStrip = ({
  heading = 'Need a cleaner today?',
  sub = 'Same-day bookings available across Melbourne. Call or get a free quote online.',
  dark = false,
}: CTAStripProps) => (
  <div
    className="relative overflow-hidden"
    style={{
      background: dark
        ? 'linear-gradient(120deg, #0d1f3c 0%, #1b3a6b 100%)'
        : 'linear-gradient(120deg, #1b3a6b 0%, #2a5298 100%)',
    }}
  >
    {/* Subtle dot pattern */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.06]"
      style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <p className="text-white font-bold text-xl md:text-2xl mb-1">
          {heading}
        </p>
        <p className="text-white/50 text-sm">{sub}</p>
      </div>
      <div className="flex flex-wrap gap-3 flex-shrink-0">
        <a
          href="tel:+61420214143"
          className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-200"
        >
          <Phone className="w-4 h-4" /> +61 420 214 143
        </a>
        <button
          onClick={() => ScrollTo('contact')}
          className="btn-primary btn-glow"
        >
          Get a Free Quote <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
);
