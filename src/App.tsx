import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Hero } from './features/hero';
import { NavBar } from './features/navbar';
import { SuburbPage } from './features/suburb';

// Everything below the fold — lazy loaded, only downloaded when needed
const Trust = lazy(() =>
  import('./features/trust').then((m) => ({ default: m.Trust })),
);
const Services = lazy(() =>
  import('./features/services').then((m) => ({ default: m.Services })),
);
const Portfolio = lazy(() =>
  import('./features/portfolio').then((m) => ({ default: m.Portfolio })),
);
const Pricing = lazy(() =>
  import('./features/pricing').then((m) => ({ default: m.Pricing })),
);
const AboutUs = lazy(() =>
  import('./features/aboutus').then((m) => ({ default: m.AboutUs })),
);
const Process = lazy(() =>
  import('./features/process').then((m) => ({ default: m.Process })),
);
const Stats = lazy(() =>
  import('./features/stats').then((m) => ({ default: m.Stats })),
);
const Testimonials = lazy(() =>
  import('./features/testimonials').then((m) => ({ default: m.Testimonials })),
);
const FAQ = lazy(() =>
  import('./features/faq').then((m) => ({ default: m.FAQ })),
);
const Contact = lazy(() =>
  import('./features/contact').then((m) => ({ default: m.Contact })),
);
const Footer = lazy(() =>
  import('./features/footer').then((m) => ({ default: m.Footer })),
);
const CTAStrip = lazy(() =>
  import('./features/cta').then((m) => ({ default: m.CTAStrip })),
);

const Skeleton = ({ dark }: { dark?: boolean }) => (
  <div
    className={`w-full py-24 animate-pulse ${dark ? 'bg-gray-800' : 'bg-white'}`}
  >
    <div className="max-w-7xl mx-auto px-4 space-y-4">
      <div
        className={`h-5 rounded w-1/4 mx-auto ${dark ? 'bg-gray-700' : 'bg-gray-100'}`}
      />
      <div
        className={`h-9 rounded w-1/2 mx-auto ${dark ? 'bg-gray-700' : 'bg-gray-100'}`}
      />
      <div
        className={`h-4 rounded w-1/3 mx-auto ${dark ? 'bg-gray-700' : 'bg-gray-100'}`}
      />
    </div>
  </div>
);

const CTASkeleton = () => <div className="h-24 bg-[#1b3a6b] animate-pulse" />;

const HomePage = () => (
  <div className="min-h-screen bg-white">
    <NavBar />
    <Hero />
    <Suspense fallback={<Skeleton />}>
      <Trust />
    </Suspense>
    <Suspense fallback={<Skeleton />}>
      <Services />
    </Suspense>
    <Suspense fallback={<CTASkeleton />}>
      <CTAStrip
        heading="Ready to book?"
        sub="Same-day cleans available. Call or get a free quote in minutes."
      />
    </Suspense>
    <Suspense fallback={<Skeleton />}>
      <Portfolio />
    </Suspense>
    <Suspense fallback={<Skeleton />}>
      <Pricing />
    </Suspense>
    <Suspense fallback={<Skeleton />}>
      <AboutUs />
    </Suspense>
    <Suspense fallback={<Skeleton dark />}>
      <Process />
    </Suspense>
    <Suspense fallback={<Skeleton />}>
      <Stats />
    </Suspense>
    <Suspense fallback={<Skeleton dark />}>
      <Testimonials />
    </Suspense>
    <Suspense fallback={<CTASkeleton />}>
      <CTAStrip
        heading="Loved what you see?"
        sub="Join hundreds of Melbourne families who trust SparkleHub every week"
        dark
      />
    </Suspense>
    <Suspense fallback={<Skeleton />}>
      <FAQ />
    </Suspense>
    <Suspense fallback={<Skeleton />}>
      <Contact />
    </Suspense>
    <Suspense fallback={<div className="h-40 bg-[#1b3a6b]" />}>
      <Footer />
    </Suspense>
  </div>
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cleaning/:slug" element={<SuburbPage />} />
    </Routes>
  );
}
