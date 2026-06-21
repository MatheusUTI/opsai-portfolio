import React from "react";
import { portfolioData } from "../data/portfolioData";
import { Check, Layers } from "lucide-react";

export default function AISDDSection() {
  const { github } = portfolioData.links;

  const principles = [
    {
      title: "Documentação como fonte da verdade",
      desc: "Especificações escritas precisas regem o comportamento da automação."
    },
    {
      title: "Continuidade entre sessões",
      desc: "Preservação estrita do contexto entre ciclos sucessivos de desenvolvimento."
    },
    {
      title: "Mudanças incrementais",
      desc: "Evolução modular passo a passo para garantir entregas estáveis."
    },
    {
      title: "Preservação de funcionalidades",
      desc: "Proteção contra degradação de código ou quebras indesejadas de escopo."
    }
  ];

  return (
    <section
      id="aisdd"
      className="w-full px-6 md:px-16 py-16 md:py-24 max-w-7xl mx-auto border-t border-gray-200 bg-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Title Column */}
        <div className="lg:col-span-5 flex flex-col items-start gap-4">
          <div className="p-3 bg-black text-white inline-block rounded-none mb-2">
            <Layers className="w-5 h-5" />
          </div>
          <h2 className="font-display font-black text-black text-3xl md:text-5xl tracking-tight uppercase leading-none">
            AISDD: IA sem perder controle.
          </h2>
          <p className="font-display text-[10px] text-gray-500 uppercase tracking-widest font-black">
            METODOLOGIA OPERACIONAL RÍGIDA
          </p>
          <p className="font-sans text-base text-gray-700 leading-relaxed font-semibold mt-4">
            O AISDD é uma metodologia criada para desenvolvimento assistido por Inteligência Artificial baseada em documentação persistente, continuidade, rastreabilidade e evolução incremental.
          </p>
          <div className="pt-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-6 py-3.5 bg-black text-white hover:bg-gray-800 font-bold font-display text-xs uppercase tracking-widest transition-all duration-300 rounded-none hover:-translate-y-0.5 active:translate-y-0"
            >
              Conhecer Framework
            </a>
          </div>
        </div>

        {/* 4 simple principles in a neat right column list */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {principles.map((p, idx) => (
            <div
              key={idx}
              className="border-2 border-black p-6 bg-white hover:bg-gray-50 transition-colors duration-300 rounded-none flex items-start gap-4"
            >
              <div className="p-1 bg-black text-white rounded-none">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-display font-bold text-sm text-black uppercase tracking-tight">
                  {p.title}
                </h3>
                <p className="font-sans text-xs text-gray-600 leading-relaxed font-semibold">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
