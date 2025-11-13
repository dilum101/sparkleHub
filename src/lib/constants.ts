import { AboutUs } from "../features/aboutus";
import { Contact } from "../features/contact";
import { Footer } from "../features/footer";
import { Hero } from "../features/hero";
import { Services } from "../features/services";
import { Testimonials } from "../features/testimonials";
import type { Section } from "./types";

export const Sections: Section[] = [
  { id: "hero", label: "Hero", component: Hero, topBar: false },
  { id: "services", label: "Services", component: Services, topBar: true },
  { id: "aboutus", label: "About Us", component: AboutUs, topBar: true },
  {
    id: "testimonials",
    label: "Testimonials",
    component: Testimonials,
    topBar: true,
  },
  { id: "contact", label: "Contact", component: Contact, topBar: true },
  { id: "footer", label: "Footer", component: Footer, topBar: false },
];

