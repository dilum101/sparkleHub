import { Star } from "lucide-react";
import React from "react";

type Props = {};

export const Testimonials = (props: Props) => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Sparkle Clean transformed my home! Their attention to detail is incredible. Highly recommend!",
      service: "Residential Cleaning",
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "We've been using them for our office for 2 years. Always reliable, professional, and thorough.",
      service: "Commercial Cleaning",
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      text: "Best cleaning service I've ever used. They made our post-renovation mess disappear like magic!",
      service: "Post-Construction Cleaning",
    },
  ];
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <div className="font-bold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonial.service}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
