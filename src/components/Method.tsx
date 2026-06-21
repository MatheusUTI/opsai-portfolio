import { portfolioData } from "../data/portfolioData";
import { Sparkles } from "lucide-react";

export default function Method() {
  const { methods } = portfolioData;

  return (
    <section
      id="metodo"
      className="w-full px-6 md:px-16 py-16 md:py-32 max-w-7xl mx-auto border-t border-[#e3e2e2] bg-[#ffffff]"
    >
      {/* Section Header */}
      <div className="flex flex-col gap-6 mb-16">
        <h2 className="font-chivo font-extrabold text-[#1b1c1c] text-3xl md:text-5xl tracking-tight leading-none">
          Método de Trabalho
        </h2>
        <p className="font-serif text-base md:text-lg text-[#2d2e2f] max-w-2xl leading-relaxed font-semibold">
          Tanto no pátio físico quanto na escrita de sistemas, projetos robustos exigem um fluxo de trabalho previsível e focado na resolução rápida de problemas reais.
        </p>
      </div>

      {/* Grid of Worksteps cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {methods.map((step, idx) => (
          <div
            key={idx}
            className="border border-[#e3e2e2] p-8 flex flex-col justify-between gap-6 bg-[#fbf9f9] group hover:border-[#1b1c1c] transition-colors duration-300"
          >
            <div className="space-y-4">
              <span className="font-chivo text-3xl font-black text-[#868382] group-hover:text-[#1b1c1c] transition-colors duration-300 block">
                {step.number}
              </span>
              <h3 className="font-chivo font-semibold text-lg text-[#1b1c1c]">
                {step.title}
              </h3>
              <p className="font-serif text-sm text-[#2d2e2f] leading-relaxed font-semibold">
                {step.description}
              </p>
            </div>

            <div className="border-t border-[#e3e2e2] pt-3 text-[9px] font-chivo uppercase tracking-widest text-[#1b1c1c] font-extrabold">
              Fase {step.number} de Execução
            </div>
          </div>
        ))}
      </div>

      {/* Method Highlight Card */}
      <div className="mt-12 border border-[#e3e2e2] p-6 sm:p-8 bg-white flex flex-col md:flex-row items-center gap-6 justify-between">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-chivo font-semibold border border-[#e3e2e2] text-[#1b1c1c] bg-[#fbf9f9] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engenharia de Processos</span>
          </div>

          <h4 className="font-chivo font-extrabold text-[#1b1c1c] text-lg">
            A especificação rigorosa como âncora absoluta de qualquer sistema.
          </h4>

          <p className="font-serif text-sm text-[#2d2e2f] leading-relaxed font-semibold">
            As ideias precisam ser testadas e documentadas com exatidão matemática. Através de especificações imutáveis de texto simples, Anderson mantém o alinhamento com sistemas internos corporativos, evitando desperdícios e alucinações cognitivas de escopo.
          </p>
        </div>

        <div className="bg-[#1b1c1c] text-white p-6 border border-[#e3e2e2] flex flex-col items-center justify-center min-w-[200px]">
          <p className="font-chivo text-[10px] tracking-widest uppercase text-[#cac6c4] mb-1">PROCESSO CONTROLADO</p>
          <p className="font-chivo font-black text-xl">10x MENOS FALHAS</p>
        </div>
      </div>

    </section>
  );
}
