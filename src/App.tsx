import { AboutUs } from "./features/aboutus";
import { Contact } from "./features/contact";
import { Footer } from "./features/footer";
import { Hero } from "./features/hero";
import { Services } from "./features/services";
import { Testimonials } from "./features/testimonials";

export default function CleaningWebsite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Why Choose Us */}
      <AboutUs />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
