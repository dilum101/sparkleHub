import { CheckCircle, Clock, Sparkles, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Props = {};

export const AboutUs = ({}: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section id="about" className="py-20 relative" ref={sectionRef}>
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: 'url(" src/assets/aboutus.png")',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/30  to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose Sparkle Clean?
          </h2>
          <p className="text-xl text-gray-700">
            We go above and beyond to exceed your expectations
          </p>
        </div>
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <div
            className={`bg-white p-6 rounded-xl shadow-md text-center animate-opacity delay-1 ${
              isVisible ? "visible" : ""
            }`}
          >
            <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Flexible Scheduling
            </h3>
            <p className="text-gray-600">
              Book services at times that work for you
            </p>
          </div>
          <div
            className={`bg-white p-6 rounded-xl shadow-md text-center animate-opacity delay-2 ${
              isVisible ? "visible" : ""
            }`}
          >
            <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Quality Guaranteed
            </h3>
            <p className="text-gray-600">
              100% satisfaction or we'll make it right
            </p>
          </div>
          <div
            className={`bg-white p-6 rounded-xl shadow-md text-center animate-opacity delay-3 ${
              isVisible ? "visible" : ""
            }`}
          >
            <Star className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Trained Professionals
            </h3>
            <p className="text-gray-600">
              Experienced, vetted, and insured team
            </p>
          </div>
          <div
            className={`bg-white p-6 rounded-xl shadow-md text-center animate-opacity delay-4 ${
              isVisible ? "visible" : ""
            }`}
          >
            <Sparkles className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Eco-Friendly
            </h3>
            <p className="text-gray-600">Safe, green cleaning products</p>
          </div>
        </div>
      </div>
    </section>
  );
};
