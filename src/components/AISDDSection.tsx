import { useState } from "react";
import { portfolioData, AISDDDoc } from "../data/portfolioData";
import { BookOpen, CheckSquare, Layers, AlertTriangle, FileCode, CheckCircle2, ChevronRight, HelpCircle } from "lucide-react";

export default function AISDDSection() {
  const { heading, description, quote, principles, documents } = portfolioData.aisdd;
  
  // State for active document to view sample data
  const [activeDocName, setActiveDocName] = useState<string>("PROJECT_RULES");

  // Sample templates corresponding to AISDD files
  const documentTemplates: Record<string, { purpose: string; format: string; sample: string }> = {
    PROJECT_RULES: {
      purpose: "Contratos de código imutáveis que a IA deve respeitar para não quebrar a arquitetura.",
      format: "YAML / Markdown rules list",
      sample: `# PROJECT_RULES
rules:
  - use_functional_components_only: true
  - framework: React (v19) + TailwindCSS
  - no_direct_state_mutations: true
  - file_naming_convention: CamelCase for components
  - import_standards: named inputs from 'lucide-react'`
    },
    PRODUCT_SPEC: {
      purpose: "Mapeamento simplificado do que o produto é, público-alvo e limites de escopo.",
      format: "Markdown functional description",
      sample: `# PRODUCT_SPEC
## 1. Visão Geral
- Resolver a roteirização de 30 veículos com diárias otimizadas.
## 2. Fora de Escopo
- Integração bancária direta e emissão de notas fiscais.`
    },
    ARCHITECTURE: {
      purpose: "Define onde os dados entram, como são armazenados e as conexões entre APIs.",
      format: "YAML / Mermaid schema",
      sample: `# ARCHITECTURE
data_flow:
  client: Vite + React 19 Single Page App
  local_storage: SQLite (mobile) / Browser Cache (web)
  state_management: React Context`
    },
    CURRENT_STATE: {
      purpose: "Registro vivo de quais arquivos existem, o que funciona e o que está quebrado.",
      format: "Markdown checklist status",
      sample: `# CURRENT_STATE
- [x] Rota de importação de CSV [OK]
- [x] Tela de listagem de motoristas [OK]
- [ ] Integração com mapa roteado [PENDENTE]
- [ ] Cálculo de estimativa de pedágio [CONSTRUÇÃO]`
    },
    NEXT_TASK: {
      purpose: "A descrição cirúrgica, passo a passo, do próximo incremento único a ser executado.",
      format: "Markdown single instruction",
      sample: `# NEXT_TASK
Objetivo: Implementar o modal de confirmação de exclusão da rota.
Arquivos afetados: RouteCard.tsx, ConfirmModal.tsx
Instruções: Criar estado 'showConfirm' booleano.`
    },
    ACCEPTANCE_CHECKS: {
      purpose: "Critérios de aceitação explícitos que definem o sucesso ou fracasso da tarefa.",
      format: "Checklist criteria",
      sample: `# ACCEPTANCE_CHECKS
- [ ] O botão 'Deletar' abre o modal de aviso.
- [ ] Pressionar 'Cancelar' fecha o modal sem deletar os dados.
- [ ] Confirmar limpa o estado de rota ativa e limpa o localStorage.`
    },
    DECISIONS_LOG: {
      purpose: "Log imutável de decisões técnicas relevantes para impedir revisões cíclicas.",
      format: "Chronological text details",
      sample: `# DECISIONS_LOG
- 2026-06-15: Optamos por SQLite local ao invés de Firebase no app Casa em Dia para manter 100% de funcionamento offline.`
    },
    HANDOFF: {
      purpose: "Nota de transição escrita para a próxima sessão de IA indicando onde continuar.",
      format: "Executive state summary",
      sample: `# HANDOFF
Paramos no desenvolvimento de validação de CPF. O arquivo RouteValidator.ts está pré-codado. Falta conectar na rotina de envio principal.`
    },
    KNOWN_ISSUES: {
      purpose: "Mapeamento ativo de bugs conhecidos que não devem ser ignorados pela IA.",
      format: "Bug reports list",
      sample: `# KNOWN_ISSUES
- Estouro de memória temporária ao importar planilhas maiores que 10MB no dispositivo de teste mais antigo.`
    },
    FILE_INDEX: {
      purpose: "Dicionário de arquivos e suas responsabilidades estruturais.",
      format: "Index dictionary",
      sample: `# FILE_INDEX
- /src/components/Header.tsx: Barra de navegação e menu mobile
- /src/components/Hero.tsx: Apresentação principal e simulações`
    },
    TEST_CHECKLIST: {
      purpose: "Roteiro de validações manuais necessárias para rodar antes de subir.",
      format: "Manual testing steps",
      sample: `# TEST_CHECKLIST
1. Clicar em importar planilha sem dados e verificar se surge alerta vermelho de erro estrutural de faturamento.`
    }
  };

  const selectedDocInfo = documentTemplates[activeDocName] || {
    purpose: "Documentação persistente para controle de qualidade estruturado com IA.",
    format: "Ficheiro texto de especificação",
    sample: `# ${activeDocName}\nExemplo ilustrativo de especificação base do Anderson.`
  };

  return (
    <section id="aisdd" className="py-24 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Header */}
        <div id="aisdd-header" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-emerald-600 font-mono text-xs uppercase tracking-widest font-semibold block">
              Metodologia de Engenharia Própria
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {heading}
            </h2>
            <p className="text-slate-650 text-base leading-relaxed">
              {description}
            </p>
          </div>
          
          <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm space-y-4">
            <div className="inline-flex p-2 rounded bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <p className="text-sm font-medium text-slate-700 italic">
              "{quote}"
            </p>
            <div className="h-px bg-slate-100" />
            <div className="flex gap-2 items-center text-[10px] font-mono text-slate-400">
              <span>AISDD SPEC COMPLIANT</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>SINGLE-VIEW SCOPE</span>
            </div>
          </div>
        </div>

        {/* Section Interactive Showcase */}
        <div id="aisdd-interactive-deck" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Document selection buttons (7 cols) */}
          <div id="aisdd-docs-grid-panel" className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-600" />
              Os 11 Documentos do Framework
            </h3>
            
            <p className="text-xs text-slate-500">
              Clique em qualquer componente para carregar seu modelo de dados no visualizador tático à direita:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {documents.map((doc: AISDDDoc) => {
                const isActive = activeDocName === doc.name;
                return (
                  <button
                    id={`aisdd-doc-btn-${doc.name}`}
                    key={doc.name}
                    onClick={() => setActiveDocName(doc.name)}
                    className={`p-4 rounded-xl text-left border transition-all duration-200 ${
                      isActive
                        ? "bg-slate-950 text-white border-slate-900 shadow-md font-semibold scale-102"
                        : "bg-white text-slate-800 border-slate-200/80 hover:bg-slate-50 hover:border-slate-350"
                    }`}
                  >
                    <div className="font-mono text-xs mb-1 block tracking-tight">
                      {doc.name}
                    </div>
                    <p className={`text-[11px] leading-snug line-clamp-2 ${isActive ? "text-slate-300" : "text-slate-500"}`}>
                      {doc.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Doc detailed sandbox view (5 cols) */}
          <div id="aisdd-sandbox-panel" className="lg:col-span-5">
            <div className="bg-slate-900 text-slate-200 rounded-xl border border-slate-800 shadow-xl overflow-hidden font-mono">
              <div className="bg-slate-950 px-4 py-3 flex justify-between items-center border-b border-slate-800 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{activeDocName}.md</span>
                </span>
                <span className="text-[10px] bg-cyan-950 text-cyan-300 border border-cyan-900/60 px-2 py-0.5 rounded">
                  {selectedDocInfo.format}
                </span>
              </div>
              
              <div className="p-5 space-y-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 block mb-1">
                    OBJETIVO DO ENVELOPE:
                  </span>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {selectedDocInfo.purpose}
                  </p>
                </div>

                <div className="h-px bg-slate-800" />

                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 block mb-2">
                    CONTEÚDO DA ESPECIFICAÇÃO:
                  </span>
                  <pre className="p-3 bg-slate-950 rounded text-slate-300 overflow-x-auto text-[10px] leading-relaxed max-h-56 select-all border border-slate-800/80">
                    {selectedDocInfo.sample}
                  </pre>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* The 10 Principles List Section */}
        <div id="aisdd-principles" className="mt-20 pt-16 border-t border-slate-100">
          <div className="max-w-2xl mb-12 space-y-2">
            <h3 className="text-xl font-extrabold text-slate-900">
              Princípios Fundamentais do Framework
            </h3>
            <p className="text-sm text-slate-500">
              Diretrizes mecânicas que tornam o desenvolvimento estável e à prova de desvios cognitivos temporários em projetos guiados por IA:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p, index) => (
              <div
                id={`principle-card-${index}`}
                key={p.title}
                className="bg-white p-6 rounded-xl border border-slate-100 hover:border-slate-300 transition-all duration-200 space-y-2 flex flex-col justify-start"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-slate-50 text-slate-900 border border-slate-200 flex items-center justify-center font-mono text-[10px] font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">{p.title}</h4>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed pl-9">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
