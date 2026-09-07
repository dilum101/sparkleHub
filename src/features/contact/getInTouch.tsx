import { CheckCircle, Clock, Mail, MapPin, Phone } from 'lucide-react';

export const GetInTouch = () => (
  <div>
    <div className="section-badge mb-5">Contact Us</div>
    <h2 className="section-title mb-4">
      Let's Bring Your Home
      <br />
      <span className="text-[#00b5be]">to the Prime Standard</span>
    </h2>
    <p className="text-gray-500 leading-relaxed mb-8">
      Ready to experience the PRIMEORA difference? Fill in the form on the
      right and we'll send you a clear, upfront quote within a few hours — no
      obligation, no hidden fees.
    </p>

    {/* Contact details */}
    <div className="space-y-4 mb-8">
      {[
        {
          icon: <Phone className="w-5 h-5" />,
          label: 'Phone',
          value: '+61 420 214 143',
          href: 'tel:+61420214143',
        },
        {
          icon: <Mail className="w-5 h-5" />,
          label: 'Email',
          value: 'info@primeora.com.au',
          href: 'mailto:info@primeora.com.au',
        },
        {
          icon: <MapPin className="w-5 h-5" />,
          label: 'Service Area',
          value: 'Melbourne Metro & All Surrounds',
          href: '#',
        },
      ].map((c) => (
        <a
          key={c.label}
          href={c.href}
          className="flex items-center gap-4 group"
        >
          <div className="w-12 h-12 rounded-xl bg-[#e0f7f8] text-[#00b5be] flex items-center justify-center flex-shrink-0 group-hover:bg-[#00b5be] group-hover:text-white transition-all duration-300">
            {c.icon}
          </div>
          <div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wide">
              {c.label}
            </div>
            <div className="text-[#1b3a6b] font-semibold">{c.value}</div>
          </div>
        </a>
      ))}
    </div>

    {/* Hours card */}
    <div className="bg-[#1b3a6b] rounded-xl p-6 text-white mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-4 h-4 text-[#00b5be]" />
        <span className="font-bold">Business Hours</span>
      </div>
      <div className="space-y-2">
        {[
          { day: 'Monday – Friday', time: '7:00am – 8:00pm' },
          { day: 'Saturday', time: '8:00am – 6:00pm' },
          { day: 'Sunday', time: '9:00am – 5:00pm' },
        ].map((h) => (
          <div key={h.day} className="flex justify-between text-sm">
            <span className="text-white/80">{h.day}</span>
            <span className="font-medium">{h.time}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#00b5be] animate-pulse" />
        <span className="text-xs font-semibold text-[#00b5be]">
          Same-day bookings available — call us!
        </span>
      </div>
    </div>

    {/* Quick reassurance */}
    <div className="grid grid-cols-2 gap-3">
      {[
        'Bond back guarantee',
        'No lock-in contracts',
        'All products supplied',
        'Police-checked staff',
      ].map((t) => (
        <div key={t} className="flex items-center gap-2 text-sm text-gray-600">
          <CheckCircle className="w-4 h-4 text-[#00b5be] flex-shrink-0" />
          {t}
        </div>
      ))}
    </div>
  </div>
);
