import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Sections } from "../../lib/constants";
import { ScrollTo } from "../../lib/utils";

export const NavBar = ({}: {}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [active, setActive]         = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const sections = Array.from(document.querySelectorAll("section[id]")) as HTMLElement[];
      const offset = 100; // navbar height buffer
      let current = sections[0]?.id ?? "hero";
      for (const sec of sections) {
        if (sec.getBoundingClientRect().top <= offset) {
          current = sec.id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // set on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = Sections.filter(({ topBar }) => topBar);

  return (
    <>
      {/* ── Top info bar ── */}
      <div className="bg-[#1b3a6b] text-white text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="text-white/70">Melbourne's Professional Cleaning Specialists</span>
          <div className="flex items-center gap-6">
            <a href="tel:+61420214143" className="flex items-center gap-1.5 text-white/80 hover:text-[#00b5be] transition-colors font-medium">
              <Phone className="w-3 h-3" /> +61 420 214 143
            </a>
            <button
              onClick={() => ScrollTo("contact")}
              className="bg-[#00b5be] hover:bg-[#009aa2] text-white px-4 py-1 rounded-full text-xs font-bold transition-all duration-200"
            >
              Free Quote
            </button>
          </div>
        </div>
      </div>

    <nav className="sticky top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(27, 58, 107, 0.75)"
          : "rgba(255, 255, 255, 0.75)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.15)"
          : "1px solid rgba(0,0,0,0.08)",
        boxShadow: scrolled
          ? "0 4px 30px rgba(0,0,0,0.2)"
          : "0 4px 20px rgba(0,0,0,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3 gap-4">

          {/* Logo */}
          <div className="cursor-pointer flex-shrink-0" onClick={() => ScrollTo("hero")}>
            <img src="src/assets/logo.png" alt="SparkleHub" className="h-12 w-auto object-contain" />
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => ScrollTo(id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-250 ${
                  active === id
                    ? scrolled
                      ? "bg-white/20 text-white"
                      : "bg-[#00b5be]/15 text-[#00b5be]"
                    : scrolled
                      ? "text-white/80 hover:text-white hover:bg-white/15"
                      : "text-gray-600 hover:text-[#1b3a6b] hover:bg-gray-100"
                }`}
              >
                {label}
                {active === id && (
                  <span className={`block h-0.5 rounded-full mt-0.5 mx-auto w-4 transition-all duration-300 ${scrolled ? "bg-[#00b5be]" : "bg-[#00b5be]"}`} />
                )}
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => ScrollTo("contact")}
              className={`relative overflow-hidden text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300 group ${
                scrolled
                  ? "bg-[#00b5be] text-white hover:bg-white hover:text-[#1b3a6b] shadow-md"
                  : "bg-[#1b3a6b] text-white hover:bg-[#00b5be] shadow-md"
              }`}
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
              Get a Free Quote
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              scrolled ? "text-white hover:bg-white/15" : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-350 ease-in-out ${
          mobileOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="mx-3 mb-3 mt-1 rounded-2xl overflow-hidden border"
          style={{
            background: scrolled ? "rgba(27,58,107,0.9)" : "rgba(255,255,255,0.95)",
            borderColor: scrolled ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.08)",
          }}
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => { ScrollTo(id); setMobileOpen(false); }}
                className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  active === id
                    ? "bg-[#00b5be] text-white"
                    : scrolled
                      ? "text-white/70 hover:text-white hover:bg-white/10"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#1b3a6b]"
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${active === id ? "bg-white" : scrolled ? "bg-white/30" : "bg-gray-300"}`} />
                {label}
              </button>
            ))}
            <div className="pt-3 border-t mt-2 space-y-2" style={{ borderColor: scrolled ? "rgba(255,255,255,0.15)" : "#f3f4f6" }}>
              <a
                href="tel:+61420214143"
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 font-semibold text-sm transition-all ${
                  scrolled
                    ? "border-white/20 text-white/70 hover:border-[#00b5be] hover:text-[#00b5be]"
                    : "border-gray-200 text-gray-600 hover:border-[#00b5be] hover:text-[#00b5be]"
                }`}
              >
                <Phone className="w-4 h-4" /> +61 420 214 143
              </a>
              <button
                onClick={() => { ScrollTo("contact"); setMobileOpen(false); }}
                className="bg-[#00b5be] hover:bg-[#1b3a6b] text-white font-bold w-full py-3 rounded-xl transition-all duration-200 text-sm"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};
