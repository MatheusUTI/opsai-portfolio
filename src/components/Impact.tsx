import React from "react";
import { TrendingUp } from "lucide-react";

export default function Impact() {
  const indicators = [
    {
      value: "95%+",
      label: "Performance operacional média",
    },
    {
      value: "10+",
      label: "Rotas regionais sob gestão",
    },
    {
      value: "7+",
      label: "Veículos coordenados diariamente",
    },
    {
      value: "Centenas",
      label: "De entregas acompanhadas diariamente",
    },
  ];

  return (
    <section
      id="impacto"
      className="w-full px-6 md:px-16 py-16 md:py-32 bg-[#ffffff] border-t border-[#e3e2e2]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Heading */}
        <div className="md:col-span-3 flex flex-col justify-between h-auto gap-4">
          <div>
            <span className="font-chivo text-xs font-bold text-[#2d2e2f] uppercase tracking-widest block mb-2">
              Performance
            </span>
            <h2 className="font-chivo text-2xl md:text-3xl font-extrabold text-[#1b1c1c] uppercase tracking-tight">
              Impacto Operacional
            </h2>
            <p className="font-serif text-sm text-[#2d2e2f] mt-4 leading-relaxed max-w-xs font-semibold">
              Experiência prática aplicada diariamente em operações logísticas reais para atingir resultados consistentes.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[#868382] mt-6">
            <TrendingUp className="w-5 h-5 stroke-[1.5]" />
            <span className="text-[10px] font-chivo uppercase tracking-widest font-bold">
              Resultados de Campo
            </span>
          </div>
        </div>

        {/* Right Column: Key Indicators Grid */}
        <div className="md:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {indicators.map((ind, idx) => (
              <div
                key={idx}
                className="border border-[#e3e2e2] p-8 flex flex-col justify-between gap-6 bg-[#fbf9f9] group hover:border-[#1b1c1c] transition-colors duration-300"
              >
                <div>
                  <span className="font-chivo text-4xl md:text-5xl font-black text-[#1b1c1c] block tracking-tighter">
                    {ind.value}
                  </span>
                  <div className="w-12 h-[2px] bg-[#1b1c1c] mt-4 mb-4"></div>
                </div>
                
                <p className="font-serif text-sm md:text-base text-[#1b1c1c] leading-relaxed font-bold">
                  {ind.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
