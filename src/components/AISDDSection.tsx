import { portfolioData } from "../data/portfolioData";
import { Layers, CheckCircle2 } from "lucide-react";

export default function AISDDSection() {
  const { github } = portfolioData.links;

  const principles = [
    {
      title: "Documentação como fonte de verdade",
      desc: "A especificação escrita precede toda execução. O código segue estritamente as definições preestabelecidas."
    },
    {
      title: "Continuidade entre sessões",
      desc: "O contexto do projeto é herdado e preservado a cada ciclo de desenvolvimento sem perdas informacionais."
    },
    {
      title: "Mudanças incrementais",
      desc: "Evolução do software por meio de pequenas tarefas validadas, mitigando erros secundários inesperados."
    },
    {
      title: "Preservação de funcionalidades",
      desc: "Validação rigorosa que garante que novos incrementos nunca degradem ou quebrem o código estável."
    }
  ];

  return (
    <section
      id="aisdd"
      className="w-full px-6 md:px-16 py-16 md:py-32 max-w-7xl mx-auto border-t border-[#e3e2e2] bg-[#fbf9f9]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">
        
        {/* Left Column: Title and Metadescription */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#efeded] text-[#1b1c1c] border border-[#e3e2e2] font-chivo text-xs font-bold uppercase tracking-widest">
            <Layers className="w-4 h-4" />
            <span>Processo Técnico</span>
          </div>

          <h2 className="font-chivo font-extrabold text-[#1b1c1c] text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
            AISDD — Desenvolvimento com IA sem perder o controle
          </h2>

          <p className="font-serif text-base md:text-lg text-[#2d2e2f] leading-relaxed font-semibold">
            O AISDD é uma metodologia criada para desenvolvimento assistido por Inteligência Artificial baseada em documentação persistente, continuidade, rastreabilidade e evolução incremental.
          </p>

          <div className="pt-2">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-8 py-4 bg-[#1b1c1c] text-white hover:bg-slate-800 font-bold font-chivo text-xs uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              Conhecer Framework
            </a>
          </div>
        </div>

        {/* Right Column: Only 4 Core Principles */}
        <div className="lg:col-span-7 space-y-4">
          <h2 className="font-chivo text-xs font-bold text-[#2d2e2f] uppercase tracking-widest mb-4">
            Princípios Operacionais
          </h2>

          <div className="grid grid-cols-1 gap-4">
            {principles.map((pr, idx) => (
              <div
                key={idx}
                className="border border-[#e3e2e2] p-6 bg-white flex items-start gap-4 hover:border-[#1b1c1c] transition-all duration-300"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[3.5]" />
                <div className="space-y-1">
                  <h3 className="font-chivo font-bold text-base text-[#1b1c1c]">
                    {pr.title}
                  </h3>
                  <p className="font-serif text-sm text-[#2d2e2f] leading-relaxed font-semibold">
                    {pr.desc}
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
