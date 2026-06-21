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
    { label: "Jornada", href: "#jornada" },
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
          ? "bg-[#fbf9f9]/95 backdrop-blur-md border-b border-[#e3e2e2] py-4"
          : "bg-[#fbf9f9]/80 backdrop-blur-sm py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex justify-between items-center">
        {/* LOGO */}
        <a
          id="header-logo-link"
          href="#"
          onClick={(e) => handleScrollTo(e, "#root")}
          className="flex items-center gap-2 text-base md:text-lg font-extrabold font-chivo tracking-widest text-[#1b1c1c] uppercase"
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
              className="text-[#444748] font-semibold tracking-widest font-chivo text-xs uppercase hover:text-[#1b1c1c] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <button
          id="nav-cta-contact"
          onClick={(e) => handleScrollTo(e, "#contato")}
          className="hidden md:block px-6 py-3 border border-[#1b1c1c] text-[#1b1c1c] font-semibold tracking-wider font-chivo text-xs uppercase hover:bg-[#1b1c1c] hover:text-[#fbf9f9] transition-all duration-300 scale-100 active:scale-95"
        >
          Vamos Conversar
        </button>

        {/* MOBILE TRIGGER */}
        <button
          id="mobile-nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#1b1c1c] hover:opacity-80 transition-opacity"
          aria-label="Abrir menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        id="mobile-nav-panel"
        className={`md:hidden absolute top-full left-0 w-full bg-[#fbf9f9] border-b border-[#e3e2e2] transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 space-y-4 bg-[#fbf9f9] flex flex-col">
          {navLinks.map((link) => (
            <a
              id={`mobile-nav-${link.label.toLowerCase()}`}
              key={link.href}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-[#444748] font-bold font-chivo text-sm uppercase tracking-wide px-3 py-2 hover:bg-[#efeded] hover:text-[#1b1c1c] transition-all"
            >
              {link.label}
            </a>
          ))}
          <button
            id="mobile-nav-cta"
            onClick={(e) => handleScrollTo(e, "#contato")}
            className="w-full text-center border border-[#1b1c1c] text-[#1b1c1c] font-semibold font-chivo text-xs uppercase py-3 hover:bg-[#1b1c1c] hover:text-[#fbf9f9] transition-colors flex items-center justify-center"
          >
            Falar com A. Albuquerque
          </button>
        </div>
      </div>
    </header>
  );
}
