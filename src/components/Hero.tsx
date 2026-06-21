import React from "react";
import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  const { linkedin, github } = portfolioData.links;

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="topo"
      className="w-full px-6 md:px-16 pt-32 pb-24 md:py-40 min-h-[90vh] flex items-center max-w-7xl mx-auto relative overflow-hidden animate-fade-in-up"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10 w-full">
        {/* Headline block spanning 10 cols, centered or aligned left */}
        <div className="md:col-span-10 md:col-start-2 text-center md:text-left flex flex-col items-center md:items-start space-y-8">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <img src="/logo.svg" alt="AA Logo" className="w-6 h-6 object-contain" />
              <span className="font-chivo text-xs font-bold tracking-widest text-[#1b1c1c] uppercase bg-[#efeded] px-3 py-1 border border-[#e3e2e2]">
                Anderson Matheus Albuquerque
              </span>
            </div>
            <h1 className="font-chivo font-extrabold text-[#1b1c1c] text-3xl sm:text-5xl md:text-6xl tracking-tighter leading-tight max-w-4xl">
              Supervisor Operacional de Logística &amp; Criador de Soluções Digitais
            </h1>
          </div>

          <p className="font-serif text-lg md:text-xl text-[#2d2e2f] max-w-2xl md:ml-12 border-l-2 border-[#1b1c1c] pl-6 leading-relaxed font-semibold">
            Desenvolvo soluções digitais orientadas por operações reais, unindo logística, automação e desenvolvimento assistido por Inteligência Artificial.
          </p>

          {/* 3 CTAs display */}
          <div className="flex flex-wrap gap-4 md:ml-12 w-full justify-center md:justify-start pt-2">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-6 py-3.5 bg-[#1b1c1c] text-white hover:bg-[#374151] font-bold font-chivo text-xs uppercase transition-all duration-300 tracking-wider hover:-translate-y-0.5 active:translate-y-0"
            >
              LinkedIn
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-6 py-3.5 border-2 border-[#1b1c1c] text-[#1b1c1c] bg-white hover:bg-slate-50 font-bold font-chivo text-xs uppercase transition-all duration-300 tracking-wider hover:-translate-y-0.5 active:translate-y-0"
            >
              GitHub
            </a>
            <a
              onClick={(e) => handleScrollTo(e, "#contato")}
              href="#contato"
              className="inline-flex justify-center items-center px-6 py-3.5 border-2 border-transparent bg-slate-100 text-[#1b1c1c] hover:bg-slate-200 font-bold font-chivo text-xs uppercase transition-all duration-300 tracking-wider hover:-translate-y-0.5 active:translate-y-0"
            >
              Entrar em Contato
            </a>
          </div>
        </div>
      </div>

      {/* Structural Line Grid in Background (Subtle) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 hidden md:grid grid-cols-12 gap-8 px-16 max-w-7xl mx-auto">
        <div className="border-r border-[#e3e2e2] h-full"></div>
        <div className="border-r border-[#e3e2e2] h-full"></div>
        <div className="border-r border-[#e3e2e2] h-full"></div>
        <div className="border-r border-[#e3e2e2] h-full"></div>
        <div className="border-r border-[#e3e2e2] h-full"></div>
        <div className="border-r border-[#e3e2e2] h-full"></div>
        <div className="border-r border-[#e3e2e2] h-full"></div>
        <div className="border-r border-[#e3e2e2] h-full"></div>
        <div className="border-r border-[#e3e2e2] h-full"></div>
        <div className="border-r border-[#e3e2e2] h-full"></div>
        <div className="border-r border-[#e3e2e2] h-full"></div>
        <div className="h-full"></div>
      </div>
    </section>
  );
}
