import React from "react";
import { Clock } from "lucide-react";

export default function Journey() {
  const events = [
    {
      year: "2014",
      description: "Início da trajetória profissional na logística, atuando diretamente em operações e distribuição.",
    },
    {
      year: "2025",
      description: "Assume posição de Supervisor Operacional, ampliando atuação em gestão, roteirização, custos e performance operacional.",
    },
    {
      year: "2025",
      description: "Início do desenvolvimento estruturado de soluções digitais voltadas à resolução de problemas operacionais reais.",
    },
    {
      year: "Atual",
      description: "Criação do framework AISDD e desenvolvimento contínuo de sistemas, automações e metodologias assistidas por Inteligência Artificial.",
    },
  ];

  return (
    <section
      id="jornada"
      className="w-full px-6 md:px-16 py-16 md:py-32 bg-[#fbf9f9] border-t border-[#e3e2e2]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Left Column: Title and details */}
        <div className="md:col-span-3 mb-6 md:mb-0 flex flex-col justify-between">
          <div>
            <span className="font-chivo text-xs font-bold text-[#444748] uppercase tracking-widest block mb-2">
              Histórico
            </span>
            <h2 className="font-chivo text-2xl md:text-3xl font-extrabold text-[#1b1c1c] uppercase tracking-tight">
              Jornada Profissional
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[#868382]">
            <Clock className="w-5 h-5 stroke-[1.5]" />
            <span className="text-[10px] font-chivo uppercase tracking-widest font-semibold">
              Evolução Incremental
            </span>
          </div>
        </div>

        {/* Right Column: Timeline Event Cards */}
        <div className="md:col-span-9 flex flex-col">
          <div className="border-l border-[#e3e2e2] ml-4 md:ml-6 pl-8 space-y-12 py-2">
            {events.map((event, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline knot indicator */}
                <span className="absolute -left-[41px] md:-left-[49px] top-1.5 w-4 h-4 bg-[#fbf9f9] border-2 border-[#1b1c1c] scale-100 group-hover:bg-[#1b1c1c] transition-all duration-300"></span>
                
                <div className="space-y-2">
                  <span className="inline-block font-chivo font-black text-2xl md:text-3xl text-[#1b1c1c]">
                    {event.year}
                  </span>
                  <p className="font-serif text-base text-[#444748] leading-relaxed max-w-2xl">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
