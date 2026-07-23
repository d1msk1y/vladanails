import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-brand-light/90 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-4 md:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex justify-start items-center gap-8 md:gap-12">
        {/* Logo */}
        <a href="#" className="font-serif text-xl md:text-2xl font-bold tracking-wider text-[#B87F75] z-50 shrink-0">
          VLADA
        </a>

        {/* Desktop & Mobile Nav */}
        <nav>
          <ul className="flex items-center gap-4 md:gap-8 text-[10px] md:text-xs uppercase tracking-widest font-medium text-brand-dark/70">
            <li>
              <a href="#services" className="hover:text-[#B87F75] transition-colors whitespace-nowrap">
                Leistungen
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-[#B87F75] transition-colors whitespace-nowrap">
                Galerie
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
