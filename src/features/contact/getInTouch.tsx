import { Mail, MapPin, Phone } from "lucide-react";

type Props = {};

export const GetInTouch = (props: Props) => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
      <p className="text-xl mb-8 ">
        Ready to experience the Sparkle Clean difference? Contact us today for a
        free quote!
      </p>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Phone className="w-6 h-6" />
          <span className="text-lg">(555) 123-4567</span>
        </div>
        <div className="flex items-center space-x-3">
          <Mail className="w-6 h-6" />
          <span className="text-lg">info@sparkleclean.com</span>
        </div>
        <div className="flex items-center space-x-3">
          <MapPin className="w-6 h-6" />
          <span className="text-lg">123 Clean Street, Melbourne, VIC 3000</span>
        </div>
      </div>
      <div className="mt-8 p-6 bg-sparkleBlue rounded-lg">
        <h3 className="text-2xl font-bold mb-4 text-white">Business Hours</h3>
        <div className="space-y-2 text-blue-100">
          <p>Monday - Friday: 7am - 8pm</p>
          <p>Saturday: 8am - 6pm</p>
          <p>Sunday: 9am - 5pm</p>
          <p className="text-yellow-300 font-semibold">
            24/7 Emergency Service Available
          </p>
        </div>
      </div>
    </div>
  );
};
