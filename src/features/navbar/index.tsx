import { Menu, X, ReceiptText } from "lucide-react";
import { useState } from "react";
import Button from "../../componets/Button";
import { Sections } from "../../lib/constants";
import { ScrollTo } from "../../lib/utils";

type Props = {};

export const NavBar = ({}: Props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50 border-b border-sparkleBlue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center space-x-2 hover:cursor-pointer"
            onClick={() => ScrollTo("hero")}
          >
            <img src="src/assets/logo.png" alt="logo" className="w-40 h-10 " />
          </div>

          <div className="hidden md:flex space-x-8">
            {Sections.map(
              ({ id, label, topBar }) =>
                topBar && (
                  <div
                    key={id}
                    className="text-gray-700 hover:text-sparkleBlue animated_underline transition text-lg hover:cursor-pointer"
                    onClick={() => ScrollTo(id)}
                  >
                    {label}
                  </div>
                )
            )}
          </div>

          <Button rounded={"lg"} onClick={() => ScrollTo("contact")}>
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
            {Sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => {
                  ScrollTo(id);
                  setMobileMenuOpen(false); // Close menu after click
                }}
                className="block w-full text-left text-gray-700 hover:bg-sparkleBlue px-3 py-2 rounded"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
