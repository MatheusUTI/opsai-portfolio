import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Sobre", href: "#sobre" },
    { label: "Impacto", href: "#impacto" },
    { label: "Atuação", href: "#atuacao" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 py-3"
          : "bg-white/90 backdrop-blur-sm border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex justify-between items-center">
        {/* LOGO */}
        <a
          id="header-logo-link"
          href="#"
          onClick={(e) => handleScrollTo(e, "#root")}
          className="flex items-center gap-2.5 text-base md:text-lg font-black font-display tracking-widest text-black uppercase"
        >
          <img src="/logo.svg" alt="AA" className="w-5 h-5 object-contain" />
          <span>A. ALBUQUERQUE</span>
        </a>

        {/* DESKTOP NAV */}
        <nav id="desktop-nav" className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              id={`nav-${link.label.toLowerCase()}`}
              key={link.href}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-gray-600 font-bold tracking-widest font-display text-xs uppercase hover:text-black transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <button
          id="nav-cta-contact"
          onClick={(e) => handleScrollTo(e, "#contato")}
          className="hidden md:block px-6 py-2.5 border-2 border-black bg-white text-black font-black tracking-widest font-display text-xs uppercase hover:bg-black hover:text-white transition-all duration-300 rounded-none active:scale-95"
        >
          Vamos Conversar
        </button>

        {/* MOBILE TRIGGER */}
        <button
          id="mobile-nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-black hover:opacity-80 transition-opacity"
          aria-label="Abrir menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        id="mobile-nav-panel"
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 space-y-4 bg-white flex flex-col">
          {navLinks.map((link) => (
            <a
              id={`mobile-nav-${link.label.toLowerCase()}`}
              key={link.href}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-gray-600 font-black font-display text-xs uppercase tracking-widest px-3 py-2.5 hover:bg-gray-50 hover:text-black transition-all"
            >
              {link.label}
            </a>
          ))}
          <button
            id="mobile-nav-cta"
            onClick={(e) => handleScrollTo(e, "#contato")}
            className="w-full text-center border-2 border-black bg-white text-black font-black font-display text-xs uppercase py-3 hover:bg-black hover:text-white transition-colors flex items-center justify-center rounded-none"
          >
            Vamos Conversar
          </button>
        </div>
      </div>
    </header>
  );
}
