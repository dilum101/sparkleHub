import { Sparkles } from "lucide-react";
import React from "react";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">Sparkle Clean</span>
            </div>
            <p className="text-gray-400">
              Professional cleaning services for homes and businesses. Making
              spaces sparkle since 2014.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#services" className="hover:text-white">
                  Residential Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  Commercial Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  Carpet Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  Window Washing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <p className="text-gray-400 mb-4">
              Follow us on social media for cleaning tips and special offers!
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition">
                <span className="sr-only">Facebook</span>
                <span className="text-xl">f</span>
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition">
                <span className="sr-only">Instagram</span>
                <span className="text-xl">📷</span>
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition">
                <span className="sr-only">Twitter</span>
                <span className="text-xl">🐦</span>
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 Sparkle Clean. All rights reserved. | Privacy Policy |
            Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};
