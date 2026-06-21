import { useState } from "react";
import { portfolioData, AISDDDoc } from "../data/portfolioData";
import { FileText, Terminal, Layers } from "lucide-react";

export default function AISDDSection() {
  const { heading, description, documents } = portfolioData.aisdd;
  
  // State for active document to view sample data
  const [activeDocName, setActiveDocName] = useState<string>("PROJECT_RULES");

  // Editorial defined principles from the user's template
  const principles = [
    {
      num: "01",
      title: "Documentação como fonte da verdade",
      desc: "A especificação escrita precede a execução. Nenhum código existe sem sua justificativa arquitetural pré-definida no plano mestre."
    },
    {
      num: "02",
      title: "Mudanças incrementais",
      desc: "Evolução contínua através de deltas precisos. Evita-se a reescrita total em favor de ajustes cirúrgicos validados passo a passo."
    },
    {
      num: "03",
      title: "Continuidade entre sessões",
      desc: "O contexto é preservado rigorosamente, garantindo que a inteligência assistente e o desenvolvedor mantenham o alinhamento através do tempo."
    },
    {
      num: "04",
      title: "Rastreabilidade",
      desc: "Cada linha de código gerada ou alterada possui um fio condutor claro até a decisão de design original que a originou."
    },
    {
      num: "05",
      title: "Redução de alucinações",
      desc: "Contenção estrita através de limites contextuais, focando a geração de soluções estritamente dentro dos parâmetros validados."
    },
    {
      num: "06",
      title: "Preservação de funcionalidades",
      desc: "A integridade estrutural é primária. Novas implementações não devem degradar a estabilidade do ecossistema existente."
    }
  ];

  const documentTemplates: Record<string, { purpose: string; format: string; sample: string }> = {
    PROJECT_RULES: {
      purpose: "Contratos de código imutáveis que a IA deve respeitar para não quebrar a arquitetura.",
      format: "YAML / Markdown rules list",
      sample: `# PROJECT_RULES
rules:
  - use_functional_components_only: true
  - framework: React 18+ with Vite
  - no_direct_state_mutations: true
  - file_naming_convention: CamelCase for components`
    },
    PRODUCT_SPEC: {
      purpose: "Mapeamento simplificado do que o produto é, público-alvo e limites de escopo.",
      format: "Markdown functional description",
      sample: `# PRODUCT_SPEC
## 1. Visão Geral
- Resolver a roteirização de 30 veículos com diárias otimizadas.
## 2. Limites de Escopo
- Sem integrações complexas desnecessárias.`
    },
    ARCHITECTURE: {
      purpose: "Define onde os dados entram, como são armazenados e as conexões entre APIs.",
      format: "YAML / Mermaid schema",
      sample: `# ARCHITECTURE
data_flow:
  client: Vite + React SPA
  state_management: React Context`
    },
    CURRENT_STATE: {
      purpose: "Registro vivo de quais arquivos existem, o que funciona e o que está quebrado.",
      format: "Markdown checklist status",
      sample: `# CURRENT_STATE
- [x] Rota de importação de CSV [OK]
- [x] Tela de listagem de motoristas [OK]
- [ ] Integração com mapa roteado [PENDENTE]`
    },
    NEXT_TASK: {
      purpose: "A descrição cirúrgica, passo a passo, do próximo incremento único a ser executado.",
      format: "Markdown single instruction",
      sample: `# NEXT_TASK
Objetivo: Implementar o modal de confirmação de exclusão da rota.
Arquivos afetados: RouteCard.tsx, ConfirmModal.tsx`
    },
    ACCEPTANCE_CHECKS: {
      purpose: "Critérios de aceitação explícitos que definem o sucesso ou fracasso da tarefa.",
      format: "Checklist criteria",
      sample: `# ACCEPTANCE_CHECKS
- [ ] O botão 'Deletar' abre o modal de aviso.
- [ ] Pressionar 'Cancelar' fecha o modal sem deletar os dados.`
    },
    DECISIONS_LOG: {
      purpose: "Log imutável de decisões técnicas relevantes para impedir revisões cíclicas.",
      format: "Chronological text details",
      sample: `# DECISIONS_LOG
- 2026-06-15: Optamos por SQLite local ao invés de Firebase no app Casa em Dia.`
    },
    HANDOFF: {
      purpose: "Nota de transição escrita para a próxima sessão de IA indicando onde continuar.",
      format: "Executive state summary",
      sample: `# HANDOFF
Paramos no desenvolvimento de validação de CPF. O arquivo RouteValidator.ts está pré-codado.`
    },
    KNOWN_ISSUES: {
      purpose: "Mapeamento ativo de bugs conhecidos que não devem ser ignorados pela IA.",
      format: "Bug reports list",
      sample: `# KNOWN_ISSUES
- Estouro de memória temporária ao importar planilhas maiores que 10MB.`
    },
    FILE_INDEX: {
      purpose: "Dicionário de arquivos e suas responsabilidades estruturais.",
      format: "Index dictionary",
      sample: `# FILE_INDEX
- /src/components/Header.tsx: Barra de navegação e menu mobile`
    },
    TEST_CHECKLIST: {
      purpose: "Roteiro de validações manuais necessárias para rodar antes de subir.",
      format: "Manual testing steps",
      sample: `# TEST_CHECKLIST
1. Clicar em importar planilha sem dados e verificar se surge alerta vermelho.`
    }
  };

  const selectedDocInfo = documentTemplates[activeDocName] || {
    purpose: "Documentação persistente para controle de qualidade estruturado com IA.",
    format: "Ficheiro texto de especificação",
    sample: `# ${activeDocName}\nExemplo ilustrativo de especificação.`
  };

  return (
    <section
      id="aisdd"
      className="w-full px-6 md:px-16 py-16 md:py-32 max-w-7xl mx-auto border-t border-[#e3e2e2] bg-[#fbf9f9]"
    >
      {/* AISDD Section Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-[#e3e2e2] pb-16 md:pb-24">
        
        {/* Sticky Context Left */}
        <div className="col-span-12 md:col-span-5 flex flex-col gap-6 md:sticky md:top-32">
          <h1 className="font-chivo font-extrabold text-[#1b1c1c] text-3xl md:text-5xl tracking-tighter leading-none">
            {heading}
          </h1>
          <p className="font-serif text-base md:text-lg text-[#444748] leading-relaxed max-w-md">
            {description}
          </p>
          <div className="w-16 h-px bg-[#1b1c1c] mt-4"></div>
        </div>

        {/* Principles Grid Right */}
        <div className="col-span-12 md:col-span-7 flex flex-col mt-8 md:mt-0">
          <h2 className="font-chivo text-xs font-bold text-[#444748] mb-6 uppercase tracking-widest">
            Princípios Fundamentais
          </h2>
          <div className="flex flex-col border-t border-[#e3e2e2]">
            {principles.map((pr) => (
              <div
                key={pr.num}
                className="flex flex-col md:flex-row gap-4 md:gap-8 py-6 border-b border-[#e3e2e2] group hover:bg-[#efeded]/30 transition-colors duration-300 px-4 -mx-4 cursor-default"
              >
                <span className="font-chivo text-xs font-semibold text-[#cac6c4] group-hover:text-[#1b1c1c] transition-colors mt-0.5">
                  {pr.num}
                </span>
                <div>
                  <h3 className="font-chivo font-semibold text-lg text-[#1b1c1c] mb-2">
                    {pr.title}
                  </h3>
                  <p className="font-serif text-sm text-[#444748] leading-relaxed">
                    {pr.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Interactive Explorer Section (Full responsive grid) */}
      <div className="pt-16 md:pt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Document Selection buttons (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="font-chivo font-bold text-lg text-[#1b1c1c] flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-600" />
            Estrutura de 11 Envelopes Documentais
          </h3>
          <p className="font-serif text-sm text-[#444748] leading-relaxed">
            Selecione uma peça da nossa arquitetura documental para inspecionar seu template e propósito tático diretamente na máquina de estados à direita.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {documents.map((doc: AISDDDoc) => {
              const isActive = activeDocName === doc.name;
              return (
                <button
                  key={doc.name}
                  onClick={() => setActiveDocName(doc.name)}
                  className={`p-4 text-left border transition-all duration-300 ${
                    isActive
                      ? "bg-[#1b1c1c] text-white border-[#1b1c1c]"
                      : "bg-white text-[#1b1c1c] border-[#e3e2e2] hover:border-[#1b1c1c]"
                  }`}
                >
                  <div className="font-chivo text-xs font-bold tracking-tight mb-1">
                    {doc.name}.md
                  </div>
                  <p className={`font-serif text-[11px] leading-snug line-clamp-2 ${isActive ? "text-[#e6e2df]" : "text-[#444748]"}`}>
                    {doc.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Live sandboxed text analyzer (5 cols) */}
        <div className="lg:col-span-5">
          <div className="bg-[#1c1b1b] text-white border border-[#e3e2e2] overflow-hidden font-mono">
            
            {/* Header tab */}
            <div className="bg-[#1c1b1a] px-4 py-3 flex justify-between items-center border-b border-zinc-800 text-xs text-zinc-400">
              <span className="flex items-center gap-2 font-mono">
                <span className="w-2 h-2 bg-emerald-400" />
                <span>{activeDocName}.md</span>
              </span>
              <span className="text-[10px] bg-zinc-900 text-cyan-300 border border-zinc-800 px-2 py-0.5 font-bold uppercase tracking-wider">
                {selectedDocInfo.format}
              </span>
            </div>

            {/* Sandbox content panel */}
            <div className="p-5 space-y-4">
              <div>
                <span className="font-chivo text-[10px] uppercase tracking-wider text-zinc-400 block mb-1">
                  PROPÓSITO ARQUITETURAL:
                </span>
                <p className="font-serif text-xs text-[#efeded] leading-relaxed">
                  {selectedDocInfo.purpose}
                </p>
              </div>

              <div className="h-px bg-zinc-800" />

              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 block mb-2">
                  CONTEÚDO DA ESPECIFICAÇÃO:
                </span>
                <pre className="p-3 bg-black text-emerald-400 overflow-x-auto text-[10.5px] leading-relaxed select-all border border-zinc-900 max-h-56">
                  {selectedDocInfo.sample}
                </pre>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
