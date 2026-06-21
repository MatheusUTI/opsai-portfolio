import React from "react";

export default function About() {
  return (
    <section
      id="sobre"
      className="w-full px-6 md:px-16 py-16 md:py-24 max-w-7xl mx-auto border-t border-gray-200 bg-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
        
        {/* Title */}
        <div className="lg:col-span-4">
          <h2 className="font-display font-black text-black text-3xl md:text-5xl tracking-tight uppercase leading-none">
            Sobre Mim
          </h2>
          <p className="font-display text-[10px] text-gray-500 uppercase tracking-widest font-black mt-2">
            CONTRUÇÃO & TRAJETÓRIA
          </p>
        </div>

        {/* Short Text */}
        <div className="lg:col-span-8 flex flex-col gap-6 text-left">
          <p className="font-sans text-base sm:text-lg md:text-xl text-black leading-relaxed font-semibold">
            Atuo na logística operacional desde 2014, com vivência direta em transportadoras de carga mista, coordenando rotinas de distribuição, roteirização técnica de frotas, gestão de entregas e relacionamento com clientes.
          </p>
          <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed">
            Lidero equipes, padronizo processos e aplico metodologias que aumentam performance e reduzem falhas. Unindo visão operacional, análise de dados e desenvolvimento assistido por IA, crio soluções digitais que simplificam operações e geram impacto mensurável.
          </p>

          <div className="pt-4 flex flex-wrap gap-4 text-xs font-display font-bold tracking-wider text-black">
            <span className="border-l-2 border-black pl-3 py-1 uppercase">LOGÍSTICA INTEGRADA</span>
            <span className="border-l-2 border-black pl-3 py-1 uppercase">LIDERANÇA ATIVA</span>
            <span className="border-l-2 border-black pl-3 py-1 uppercase">AUTOMAÇÃO E IA</span>
          </div>
        </div>

      </div>
    </section>
  );
}
