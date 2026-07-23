import { useState, useEffect } from "react";

type NavbarProps = {
  currentPath: string;
  onNavigate: (path: string) => void;
};

export function Navbar({ currentPath, onNavigate }: NavbarProps) {
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
      className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}
    >
      <div className="site-header__inner">
        <a
          href="/"
          className="site-brand"
          onClick={(event) => {
            event.preventDefault();
            onNavigate("/");
          }}
        >
          VLADA
        </a>

        <nav>
          <ul className="site-nav__list">
            <li>
              <a href="#services" className="site-nav__link">
                Leistungen
              </a>
            </li>
            <li>
              <a
                href="/gallery"
                className={`site-nav__link ${currentPath === "/gallery" ? "site-nav__link--active" : ""}`}
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate("/gallery");
                }}
              >
                Galerie
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
