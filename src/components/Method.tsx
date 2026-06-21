import { portfolioData } from "../data/portfolioData";
import { Sparkles, Milestone } from "lucide-react";

export default function Method() {
  const { methods } = portfolioData;

  return (
    <section id="metodo" className="py-24 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div id="method-header" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-cyan-700 font-mono text-xs uppercase tracking-widest font-semibold block">
              Processo de Engenharia de Sistemas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Método de Trabalho: Como eu construo soluções
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
              Desenvolver para logística exige rigor matemático e à prova de falhas sob condições críticas de conectividade. Meu processo combina as dores do pátio real com a assertividade técnica.
            </p>
          </div>
          
          <div className="lg:col-span-4 justify-end hidden lg:flex">
            <Milestone className="w-16 h-16 text-slate-300" />
          </div>
        </div>

        {/* Workflow Steps Grid (Bento Style or Staggered List) */}
        <div id="method-steps-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {methods.map((step, idx) => (
            <div
              id={`method-step-${idx}`}
              key={step.number}
              className="bg-white p-8 rounded-2xl border border-slate-150 hover:border-slate-300 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Number bullet badge */}
                <span className="font-mono text-3xl font-black text-slate-200 group-hover:text-cyan-600 transition-colors duration-300 block">
                  {step.number}
                </span>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-slate-950">
                  {step.title}
                </h3>

                <p className="text-slate-650 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom tag decoration */}
              <div className="mt-8 pt-4 border-t border-slate-50 text-[9px] font-mono uppercase text-slate-400 tracking-wider">
                FASE {step.number} DE EXECUÇÃO
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Highlight summary block */}
        <div id="method-highlight-footer" className="mt-16 bg-white border border-slate-200/85 p-8 rounded-2xl lg:flex items-center justify-between shadow-sm relative overflow-hidden">
          <div className="space-y-3 lg:max-w-3xl relative z-10">
            <span className="inline-flex items-center space-x-1 font-mono text-[9px] font-bold text-cyan-700 bg-cyan-50 border border-cyan-200 px-2 py-0.5 rounded uppercase">
              <Sparkles className="w-3 h-3 text-cyan-600" />
              <span>Diferencial OpsAI Builder</span>
            </span>
            <h4 className="text-lg font-bold text-slate-900">
              A IA como aceleradora, a especificação como âncora do sistema.
            </h4>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Planos sem documentação flutuam e geram alucinações de escopo. No meu método, a IA entra como aceleradora de codificação pesada, mas o projeto mantém regras organizacionais, diagramas de arquitetura, estados de arquivos e próximos passos estritamente escritos em documentação persistente de texto simples.
            </p>
          </div>
          <div className="mt-6 lg:mt-0 relative z-10 flex-shrink-0">
            <div className="p-4 bg-slate-950 rounded-lg text-white font-mono text-xs text-center border border-slate-900 shadow-lg">
              <p className="text-slate-400 text-[10px] mb-1">PROJETO CONTROLADO</p>
              <p className="text-emerald-400 font-bold">10x MENOS DEFEITOS</p>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 top-0 w-24 bg-cyan-50/30 translate-x-10 skew-x-12 select-none pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
