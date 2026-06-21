import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

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
    { label: "Projetos", href: "#projetos" },
    { label: "AISDD", href: "#aisdd" },
    { label: "Stack", href: "#stack" },
    { label: "Método", href: "#metodo" },
    { label: "Contato", href: "#contato" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
          ? "bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* LOGO */}
        <a
          id="header-logo-link"
          href="#topo"
          onClick={(e) => handleScrollTo(e, "#topo")}
          className="flex items-center space-x-2.5 font-bold tracking-tight text-slate-900 group"
        >
          <div className="w-8 h-8 rounded-lg bg-slate-950 flex items-center justify-center text-white text-sm font-mono transition-transform duration-300 group-hover:scale-105">
            AM
          </div>
          <span className="text-lg">
            AMA <span className="text-cyan-600 font-normal">| OpsAI Builder</span>
          </span>
        </a>

        {/* DESKTOP NAV */}
        <nav id="desktop-nav" className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              id={`nav-${link.label.toLowerCase()}`}
              key={link.href}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-cyan-600 after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            id="nav-cta-contact"
            href="#contato"
            onClick={(e) => handleScrollTo(e, "#contato")}
            className="flex items-center space-x-1.5 bg-slate-950 text-white hover:bg-slate-800 text-xs font-medium px-4 py-2 rounded-lg transition-colors shadow-sm"
          >
            <span>Contato</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* MOBILE TRIGGER */}
        <button
          id="mobile-nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
          aria-label="Abrir menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        id="mobile-nav-panel"
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 space-y-4 bg-white/95 backdrop-blur-md flex flex-col">
          {navLinks.map((link) => (
            <a
              id={`mobile-nav-${link.label.toLowerCase()}`}
              key={link.href}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-base font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-50 px-3 py-2 rounded-lg transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            id="mobile-nav-cta"
            href="#contato"
            onClick={(e) => handleScrollTo(e, "#contato")}
            className="w-full text-center bg-slate-950 text-white hover:bg-slate-800 font-medium py-3 rounded-lg text-sm transition-colors flex items-center justify-center space-x-2"
          >
            <span>Falar com Anderson</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
