import { useState } from "react";
import { portfolioData, Project } from "../data/portfolioData";
import { Hammer, CircleEllipsis, Terminal, BookmarkCheck, Phone, RefreshCw, FileCode, CheckCircle } from "lucide-react";

export default function Projects() {
  const { projects } = portfolioData;

  // Track active project detailed inspect
  const [selectedProjectId, setSelectedProjectId] = useState<string>("semi-tms");

  // Custom mock interactive previews representing the projects "in development"
  const renderProjectDetailPreview = (id: string) => {
    switch (id) {
      case "semi-tms":
        return (
          <div className="bg-slate-950 rounded-xl p-6 text-slate-300 font-mono text-sm space-y-4 border border-slate-900 shadow-inner">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-emerald-400 text-xs font-bold">[SIMULADOR DE IMPORTAÇÃO TMS]</span>
              <span className="text-[10px] text-slate-500">planilha_faturamento_v4.csv</span>
            </div>
            
            <div className="space-y-1.5 text-xs text-slate-400">
              <p className="text-slate-500"># Entrada de dados do SSW:</p>
              <p>ID_ENTREGA, CEP, PESO, CHASSIS_VEICULO, VALOR_DECLARADO</p>
              <p className="text-slate-200">ENT-10029, 13010-001, 1450kg, VOLVO-320, R$ 14.200,00</p>
              <p className="text-slate-200">ENT-10030, 13015-050, 890kg, VOLVO-320, R$ 9.800,00</p>
              <p className="text-slate-200">ENT-10031, 80010-100, 2400kg, SCANIA-R, R$ 45.100,00</p>
            </div>

            <div className="bg-slate-900/80 p-3 rounded border border-slate-800 space-y-1 text-xs">
              <div className="text-emerald-300 font-bold">🎯 PROCESSAMENTO DA IA:</div>
              <p className="text-slate-300">"Agrupando cargas para rota Campinas ➔ Curitiba..."</p>
              <p className="text-slate-300">↳ Veículo VOLVO-320: Capacidade = 83% aproveitada.</p>
              <p className="text-emerald-400">↳ Sugestão: Desviar via Rodovia Regis Bittencourt para evitar pedágio de carga.</p>
            </div>

            <div className="pt-2 flex justify-between items-center text-[11px] text-slate-400 border-t border-slate-800/80">
              <span>Status: <span className="text-amber-500 font-bold">EM DESENVOLVIMENTO</span></span>
              <span className="flex items-center gap-1"><RefreshCw className="w-3 h-3 animate-spin text-cyan-500" /> Algoritmo Roteamento</span>
            </div>
          </div>
        );
      case "casa-em-dia":
        return (
          <div className="bg-slate-950 rounded-xl p-6 text-slate-300 font-mono text-xs space-y-4 border border-slate-900 shadow-inner">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-cyan-300 font-bold">[SCHEMA BANCO LOCAL ROOM (KOTLIN)]</span>
              <span className="text-[10px] text-slate-500">TaskEntity.kt</span>
            </div>
            
            <pre className="text-slate-300 overflow-x-auto text-[11px] leading-relaxed select-all">
{`@Entity(tableName = "tarefas_domesticas")
data class Tarefa(
    @PrimaryKey(autoGenerate = true) val id: Int = 0,
    @ColumnInfo(name = "nome") val nome: String,
    @ColumnInfo(name = "recorrencia_dias") val recorrencia: Int,
    @ColumnInfo(name = "ultima_execucao") val timestamp: Long,
    @ColumnInfo(name = "responsavel") val responsavel: String
)`}
            </pre>

            <div className="bg-slate-900/80 p-3 rounded border border-slate-800 space-y-1 text-xs">
              <div className="text-cyan-300 font-bold">📱 VISUAL DA ROTINA FAMILIAR:</div>
              <p className="text-slate-400">• Lavar filtro de água ➔ <span className="text-emerald-400 font-semibold">(A cada 15 dias)</span> ⏰ Vence hoje</p>
              <p className="text-slate-400">• Revisar caixa de gordura ➔ <span className="text-amber-400 font-semibold">(A cada 90 dias)</span></p>
            </div>

            <div className="pt-2 flex justify-between items-center text-[11px] text-slate-400 border-t border-slate-800/80">
              <span>Status: <span className="text-amber-500 font-bold">EM DESENVOLVIMENTO (KOTLIN/ROOM)</span></span>
            </div>
          </div>
        );
      case "aisdd-framework":
        return (
          <div className="bg-slate-950 rounded-xl p-6 text-slate-300 font-mono text-xs space-y-4 border border-slate-900 shadow-inner">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-indigo-300 font-bold">[AISDD CONTROLLER SPEC]</span>
              <span className="text-[10px] text-slate-500">spec_rules_prompt.md</span>
            </div>

            <div className="space-y-2 text-slate-300">
              <p className="text-indigo-400 font-semibold"># REQUISITOS DE DESIGN ANCORADOS:</p>
              <div className="space-y-1 pl-3 border-l-2 border-indigo-900 text-slate-400 text-[11px]">
                <p>1. Nunca remova seções descritas por markdown anterior.</p>
                <p>2. Escreva as regras de negócios ANTES do código técnico.</p>
                <p>3. Todas as dependências devem possuir correspondência estrita no pack.</p>
              </div>
            </div>

            <div className="bg-slate-900 p-3 rounded border border-slate-800 text-[11px]">
              <span className="text-emerald-400 font-bold block mb-1">✓ REDUÇÃO DE ALUCINAÇÕES OPERACIONAIS:</span>
              <p className="text-slate-400 leading-relaxed">
                Ao invés de passar 10.000 linhas de código para a IA, passamos APENAS a especificação incremental de 1 arquivo e suas dependências. Menor contexto = zero alucinações.
              </p>
            </div>

            <div className="pt-2 flex justify-between items-center text-[11px] text-slate-400 border-t border-slate-800/80">
              <span>Status: <span className="text-amber-500 font-bold">EM DESENVOLVIMENTO (Agnóstico)</span></span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projetos" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div id="projects-header" className="max-w-2xl mb-16 space-y-3">
          <span className="text-cyan-700 font-mono text-xs uppercase tracking-widest font-semibold block">
            Aplicações em Construção
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Projetos em Desenvolvimento
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Nada de mock de mercado financeiro ou clones de redes sociais. Construindo ferramentas autênticas que resolvem demandas de mobilidade do mundo real e produtividade guiada por regras.
          </p>
        </div>

        {/* Master Project Layout Grid */}
        <div id="projects-container" className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: The Cards (7 cols) */}
          <div id="projects-cards" className="lg:col-span-7 space-y-6">
            {projects.map((proj) => {
              const isActive = selectedProjectId === proj.id;
              
              return (
                <div
                  id={`project-card-${proj.id}`}
                  key={proj.id}
                  onClick={() => setSelectedProjectId(proj.id)}
                  className={`p-6 sm:p-8 rounded-2xl border text-left transition-all duration-300 cursor-pointer relative overflow-hidden ${
                    isActive
                      ? "bg-slate-50 border-slate-900 shadow-md ring-1 ring-slate-900"
                      : "bg-white border-slate-200/80 hover:bg-slate-50/50 hover:border-slate-300"
                  }`}
                >
                  {/* Status Ribbon */}
                  <div className="absolute top-4 right-4 flex items-center space-x-1.5 bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase">
                    <CircleEllipsis className="w-3 h-3 animate-pulse" />
                    <span>{proj.status}</span>
                  </div>

                  <div className="space-y-4 max-w-[85%]">
                    {/* Project tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tags.map((tg) => (
                        <span key={tg} className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                          {tg}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-extrabold text-slate-900">
                      {proj.name}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {proj.description}
                    </p>

                    {/* Highlights list */}
                    <div className="space-y-2 pt-2">
                      <p className="text-xs uppercase tracking-wider font-mono font-bold text-slate-400">Recursos-chave:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {proj.highlights.map((hlt) => (
                          <div key={hlt} className="flex items-center space-x-2 text-xs text-slate-700">
                            <BookmarkCheck className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                            <span>{hlt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Active bottom toggle bar for visual aid */}
                  {isActive && (
                    <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-900 font-bold">
                      <span className="text-cyan-600 font-bold">INSPECT INTEGRATION ENGINE ACTIVE</span>
                      <span className="animate-bounce">↓</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Live Simulated Code Panel / Spec Viewer (5 cols) */}
          <div id="projects-terminal-preview" className="lg:col-span-5 flex flex-col justify-between">
            <div className="sticky top-28 space-y-6">
              <div className="space-y-2">
                <span className="text-slate-400 font-mono text-[10px] uppercase block tracking-wider">
                  VISUALIZADOR LOGÍSTICO INTERATIVO
                </span>
                <h4 className="text-lg font-bold text-slate-900">
                  Infraestrutura do {projects.find((p) => p.id === selectedProjectId)?.name}
                </h4>
                <p className="text-xs text-slate-500">
                  Selecione os projetos ao lado para ver uma representação prática do fluxo técnico, dados do banco local e lógicas de roteamento associados à arquitetura operacional real do Anderson.
                </p>
              </div>

              {renderProjectDetailPreview(selectedProjectId)}

              <div className="p-4 bg-cyan-50 rounded-xl border border-cyan-100 flex items-start space-x-3 text-xs text-cyan-800">
                <Terminal className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Por que em desenvolvimento?</strong> Anderson constrói estes sistemas conforme depara-se com gargalos reais de transporte e gestão operacional da sua rotina de supervisão.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
