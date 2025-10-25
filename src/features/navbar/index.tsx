import { Menu, X, ReceiptText } from "lucide-react";
import { useState } from "react";
import Button from "../../componets/Button";

type Props = {};

export const NavBar = (props: Props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pages = ["Home", "Services", "About", "Testimonials", "Contact"];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <img src="src/assets/logo.png" alt="logo" className="w-40 h-10 " />
          </div>

          <div className="hidden md:flex space-x-8">
            {pages.map((service) => (
              <a
                href="#home"
                className="text-gray-700 hover:text-sparkleBlue transition  text-lg"
              >
                {service}
              </a>
            ))}
          </div>

          <Button rounded={"lg"}>
            <span className="flex gap-2">
              <ReceiptText className="hidden md:inline" /> Get Quote
            </span>
          </Button>

          <Button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-3">
            {pages.map((services) => (
              <a
                href="#home"
                className="block text-gray-700 hover:bg-sparkleBlue"
              >
                {services}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
