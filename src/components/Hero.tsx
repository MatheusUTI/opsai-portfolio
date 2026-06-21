import React from "react";
import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  const { fullName, role, tagline } = portfolioData.personal;

  const keywordTags = [
    "Logística",
    "Automação",
    "Roteirização",
    "Sistemas",
    "AISDD",
    "IA Aplicada",
    "Eficiência Operacional"
  ];

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
      className="w-full px-6 md:px-16 pt-32 pb-20 md:pt-44 md:p-32 max-w-7xl mx-auto relative overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
        {/* Headline block spanning 10 cols, centered or aligned left */}
        <div className="md:col-span-10 md:col-start-2 text-center md:text-left flex flex-col items-center md:items-start space-y-8">
          
          <div className="space-y-3">
            <span className="font-chivo text-xs font-bold tracking-widest text-[#444748] uppercase bg-[#efeded] px-3 py-1 border border-[#e3e2e2]">
              Anderson Matheus Albuquerque
            </span>
            <h1 className="font-chivo font-extrabold text-[#1b1c1c] text-3xl sm:text-5xl md:text-6xl tracking-tighter leading-tight max-w-4xl">
              Supervisor Operacional de Logística e Criador de Soluções Digitais
            </h1>
          </div>

          <p className="font-serif text-base md:text-lg text-[#444748] max-w-2xl md:ml-12 border-l-2 border-[#e3e2e2] pl-6 leading-relaxed">
            Transformo experiência operacional real em sistemas, automações e metodologias para otimizar processos, reduzir custos e apoiar decisões.
          </p>

          {/* Keyword Tags */}
          <div className="flex flex-wrap gap-2.5 justify-center md:justify-start md:ml-12">
            {keywordTags.map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 border border-[#e3e2e2] text-[#444748] font-semibold font-chivo text-[10px] sm:text-xs uppercase tracking-wider bg-white"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 md:ml-12 w-full sm:w-auto pt-2">
            <a
              onClick={(e) => handleScrollTo(e, "#projetos")}
              href="#projetos"
              className="inline-flex justify-center items-center px-8 py-4 bg-[#1b1c1c] text-white hover:bg-slate-800 font-semibold font-chivo text-xs uppercase transition-all duration-300 tracking-wider hover:-translate-y-0.5 active:translate-y-0"
            >
              Ver Projetos
            </a>
            <a
              onClick={(e) => handleScrollTo(e, "#aisdd")}
              href="#aisdd"
              className="inline-flex justify-center items-center px-8 py-4 border border-[#e3e2e2] text-[#1b1c1c] bg-white hover:border-[#1b1c1c] font-semibold font-chivo text-xs uppercase transition-all duration-300 tracking-wider hover:-translate-y-0.5 active:translate-y-0"
            >
              Conhecer AISDD
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
