import { Facebook, Mail, MapPin, Phone } from 'lucide-react';
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
  { label: 'FAQ', id: 'faq' },
  { label: 'Contact', id: 'contact' },
];

export const Footer = () => (
  <footer id="footer" className="bg-[#0d1f3c] text-white">
    {/* Main */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="cursor-pointer mb-5" onClick={() => ScrollTo('hero')}>
            <img
              src="src/assets/logo.png"
              alt="SparkleHub"
              className="h-14 w-auto object-contain brightness-0 invert"
            />
          </div>
          <p className="text-white/75 text-sm leading-relaxed mb-6">
            Melbourne's trusted residential cleaning specialists. Reliable,
            affordable and satisfaction guaranteed.
          </p>
          <div className="space-y-2">
            <a
              href="tel:+61420214143"
              className="flex items-center gap-2.5 text-sm text-white/80 hover:text-[#00b5be] transition-colors"
            >
              <Phone className="w-4 h-4" /> +61 420 214 143
            </a>
            <a
              href="mailto:info@sparklehubcleaning.com.au"
              className="flex items-center gap-2.5 text-sm text-white/80 hover:text-[#00b5be] transition-colors"
            >
              <Mail className="w-4 h-4" /> info@sparklehubcleaning.com.au
            </a>
            <div className="flex items-center gap-2.5 text-sm text-white/80">
              <MapPin className="w-4 h-4" /> Melbourne, VIC
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-sm uppercase tracking-widest text-white/65 mb-5">
            Services
          </h3>
          <ul className="space-y-2.5">
            {serviceLinks.map((s) => (
              <li key={s}>
                <button
                  onClick={() => ScrollTo('services')}
                  className="text-sm text-white/80 hover:text-[#00b5be] transition-colors text-left"
                >
                  {s}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold text-sm uppercase tracking-widest text-white/65 mb-5">
            Company
          </h3>
          <ul className="space-y-2.5">
            {companyLinks.map((c) => (
              <li key={c.label}>
                <button
                  onClick={() => ScrollTo(c.id)}
                  className="text-sm text-white/80 hover:text-[#00b5be] transition-colors text-left"
                >
                  {c.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA + Social */}
        <div>
          <h3 className="font-bold text-sm uppercase tracking-widest text-white/65 mb-5">
            Get in Touch
          </h3>
          <p className="text-sm text-white/75 mb-5 leading-relaxed">
            Ready for a spotless home? Get a free, no-obligation quote today.
          </p>
          <button
            onClick={() => ScrollTo('contact')}
            className="btn-primary w-full justify-center mb-6"
          >
            Get a Free Quote
          </button>

          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61591028807593"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#00b5be] flex items-center justify-center text-white/80 hover:text-white transition-all duration-300"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-white/65">
          © {new Date().getFullYear()} SparkleHub Professional Cleaning. All
          rights reserved.
        </p>
        <div className="flex gap-5 text-xs text-white/65">
          <span className="hover:text-white/80 cursor-pointer transition-colors">
            Privacy Policy
          </span>
          <span className="hover:text-white/80 cursor-pointer transition-colors">
            Terms of Service
          </span>
        </div>
      </div>
    </div>
  </footer>
);
