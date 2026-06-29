import { AboutUs } from "../features/aboutus";
import { Contact } from "../features/contact";
import { FAQ } from "../features/faq";
import { Footer } from "../features/footer";
import { Hero } from "../features/hero";
import { Portfolio } from "../features/portfolio";
import { Pricing } from "../features/pricing";
import { Process } from "../features/process";
import { Services } from "../features/services";
import { Stats } from "../features/stats";
import { Testimonials } from "../features/testimonials";
import { Trust } from "../features/trust";
import type { Section } from "./types";

export const Sections: Section[] = [
  { id: "hero",         label: "Home",         component: Hero,         topBar: false },
  { id: "trust",        label: "Trust",        component: Trust,        topBar: false },
  { id: "services",     label: "Services",     component: Services,     topBar: true  },
  { id: "portfolio",    label: "Our Work",     component: Portfolio,    topBar: true  },
  { id: "pricing",      label: "Pricing",      component: Pricing,      topBar: true  },
  { id: "about",        label: "About Us",     component: AboutUs,      topBar: true  },
  { id: "process",      label: "How It Works", component: Process,      topBar: true  },
  { id: "stats",        label: "Stats",        component: Stats,        topBar: false },
  { id: "testimonials", label: "Testimonials", component: Testimonials, topBar: true  },
  { id: "faq",          label: "FAQ",          component: FAQ,          topBar: true  },
  { id: "contact",      label: "Contact",      component: Contact,      topBar: true  },
  { id: "footer",       label: "Footer",       component: Footer,       topBar: false },
];
