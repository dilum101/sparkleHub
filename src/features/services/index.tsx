import { Building2, CheckCircle, Home, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Props = {};

export const Services = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: <Home className="w-12 h-12 text-blue-600" />,
      title: "Residential Cleaning",
      description:
        "Professional home cleaning services tailored to your needs. From regular maintenance to deep cleaning.",
      features: [
        "Deep Cleaning",
        "Regular Maintenance",
        "Move In/Out",
        "Spring Cleaning",
      ],
      startingPrice: "Starting at $99",
    },
    {
      icon: <Building2 className="w-12 h-12 text-blue-600" />,
      title: "Commercial Cleaning",
      description:
        "Keep your business spotless with our comprehensive commercial cleaning solutions.",
      features: [
        "Office Cleaning",
        "Retail Spaces",
        "Medical Facilities",
        "Restaurants",
      ],
      startingPrice: "Starting at $199",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-blue-600" />,
      title: "Specialized Services",
      description:
        "Expert cleaning for specific needs including carpet, window, and post-construction cleaning.",
      features: [
        "Carpet Cleaning",
        "Window Washing",
        "Post-Construction",
        "Event Cleanup",
      ],
      startingPrice: "Contact Sales for free quotes",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 " ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            From sparkling homes to spotless offices, we deliver exceptional
            cleaning solutions that save you time and give you peace of mind.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                bg-white border-2 border-gray-200 rounded-xl p-8 
                hover:shadow-xl hover:border-blue-200 transition-all
                animate-fade-in-side delay-${index}
                ${isVisible ? "visible" : ""}
              `}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 w-full bg-blue-50 text-blue-600 px-6 py-3 rounded-lg font-semibold text-center">
                {service.startingPrice}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
