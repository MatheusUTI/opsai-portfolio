import { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { Check, Terminal, RefreshCw, ChevronDown, ChevronUp } from "lucide-react";

export default function Projects() {
  const { projects } = portfolioData;

  // Track expanded terminal states for each project
  const [expandedTerminals, setExpandedTerminals] = useState<Record<string, boolean>>({
    "semi-tms": false,
    "casa-em-dia": false,
    "aisdd-framework": false,
  });

  const toggleTerminal = (id: string) => {
    setExpandedTerminals((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getTerminalContent = (id: string) => {
    switch (id) {
      case "semi-tms":
        return (
          <div className="bg-[#1c1b1b] p-5 text-[#efeded] font-mono text-xs space-y-4 border border-[#e3e2e2] mt-4">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5">
              <span className="text-emerald-400 font-bold">[SIMULADOR DE IMPORTAÇÃO TMS]</span>
              <span className="text-[10px] text-[#868382]">planilha_faturamento_v4.csv</span>
            </div>
            
            <div className="space-y-1.5 text-[#e6e2df]">
              <p className="text-[#868382]"># Entrada de dados do SSW:</p>
              <p>ID_ENTREGA, CEP, PESO, CHASSIS_VEICULO, VALOR_DECLARADO</p>
              <p className="text-zinc-400">ENT-10029, 13010-001, 1450kg, VOLVO-320, R$ 14.200,00</p>
              <p className="text-zinc-400">ENT-10030, 13015-050, 890kg, VOLVO-320, R$ 9.800,00</p>
              <p className="text-zinc-400">ENT-10031, 80010-100, 2400kg, SCANIA-R, R$ 45.100,00</p>
            </div>

            <div className="bg-[#1c1b1a] p-3 border border-zinc-800 space-y-1">
              <div className="text-emerald-300 font-bold">🎯 PROCESSAMENTO DA IA:</div>
              <p className="text-zinc-300">"Agrupando cargas para rota Campinas ➔ Curitiba..."</p>
              <p className="text-zinc-300">↳ Veículo VOLVO-320: Capacidade = 83% aproveitada.</p>
              <p className="text-emerald-400">↳ Sugestão: Desviar via Rodovia Regis Bittencourt para evitar pedágio de carga.</p>
            </div>

            <div className="pt-2 flex justify-between items-center text-[10px] text-[#cac6c4] border-t border-zinc-900">
              <span className="flex items-center gap-1.5"><RefreshCw className="w-3.5 h-3.5 animate-spin text-cyan-500" /> Algoritmo Roteamento Ativo</span>
              <span>Status: <span className="text-amber-500 font-bold">EM DESENVOLVIMENTO</span></span>
            </div>
          </div>
        );
      case "casa-em-dia":
        return (
          <div className="bg-[#1c1b1b] p-5 text-[#efeded] font-mono text-xs space-y-4 border border-[#e3e2e2] mt-4">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5">
              <span className="text-cyan-300 font-bold">[SCHEMA BANCO LOCAL ROOM (KOTLIN)]</span>
              <span className="text-[10px] text-[#868382]">TaskEntity.kt</span>
            </div>
            
            <pre className="text-zinc-400 overflow-x-auto text-[11px] leading-relaxed select-all">
{`@Entity(tableName = "tarefas_domesticas")
data class Tarefa(
    @PrimaryKey(autoGenerate = true) val id: Int = 0,
    @ColumnInfo(name = "nome") val nome: String,
    @ColumnInfo(name = "recorrencia_dias") val recorrencia: Int,
    @ColumnInfo(name = "ultima_execucao") val timestamp: Long,
    @ColumnInfo(name = "responsavel") val responsavel: String
)`}
            </pre>

            <div className="bg-[#1c1b1a] p-3 border border-zinc-800 space-y-1">
              <div className="text-cyan-300 font-bold">📱 VISUAL DA ROTINA FAMILIAR:</div>
              <p className="text-zinc-400">• Lavar filtro de água ➔ <span className="text-emerald-400 font-semibold">(A cada 15 dias)</span> ⏰ Vence hoje</p>
              <p className="text-zinc-400">• Revisar caixa de gordura ➔ <span className="text-amber-400 font-semibold">(A cada 90 dias)</span></p>
            </div>

            <div className="pt-2 flex justify-between items-center text-[10px] text-[#cac6c4] border-t border-zinc-900">
              <span>Status: <span className="text-amber-500 font-bold">EM DESENVOLVIMENTO (KOTLIN/ROOM)</span></span>
            </div>
          </div>
        );
      case "aisdd-framework":
        return (
          <div className="bg-[#1c1b1b] p-5 text-[#efeded] font-mono text-xs space-y-4 border border-[#e3e2e2] mt-4">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5">
              <span className="text-indigo-300 font-bold">[AISDD CONTROLLER SPEC]</span>
              <span className="text-[10px] text-[#868382]">spec_rules_prompt.md</span>
            </div>

            <div className="space-y-2 text-[#e6e2df]">
              <p className="text-indigo-400 font-semibold"># REQUISITOS DE DESIGN ANCORADOS:</p>
              <div className="space-y-1 pl-3 border-l border-indigo-900 text-[#cac6c4] text-[11px]">
                <p>1. Nunca remova seções descritas por markdown anterior.</p>
                <p>2. Escreva as regras de negócios ANTES do código técnico.</p>
                <p>3. Todas as dependências devem possuir correspondência estrita no pack.</p>
              </div>
            </div>

            <div className="bg-[#1c1b1a] p-3 border border-zinc-800 text-[11px]">
              <span className="text-emerald-400 font-bold block mb-1">✓ REDUÇÃO DE ALUCINAÇÕES OPERACIONAIS:</span>
              <p className="text-zinc-400 leading-relaxed">
                Ao invés de passar 10.000 linhas de código para a IA, passamos APENAS a especificação incremental de 1 arquivo e suas dependências. Menor contexto = zero alucinações.
              </p>
            </div>

            <div className="pt-2 flex justify-between items-center text-[10px] text-[#cac6c4] border-t border-zinc-900">
              <span>Status: <span className="text-amber-500 font-bold">EM DESENVOLVIMENTO (Agnóstico)</span></span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="projetos"
      className="w-full px-6 md:px-16 py-16 md:py-32 max-w-7xl mx-auto border-t border-[#e3e2e2]"
    >
      <div className="flex flex-col gap-6 mb-16 md:mb-24">
        <h2 className="font-chivo font-extrabold text-[#1b1c1c] text-3xl md:text-5xl tracking-tight text-center md:text-left">
          Projetos em Destaque
        </h2>
        <p className="font-serif text-base md:text-lg text-[#444748] max-w-2xl leading-relaxed">
          Tanto na logística de expedição física quanto no desenvolvimento em IA, o foco do Anderson está em soluções que resolvem gargalos de forma limpa e pragmática.
        </p>
      </div>

      <div className="flex flex-col gap-16 md:gap-24">
        
        {/* Project 1: Sistema de Roteirização / Semi-TMS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="font-chivo text-[10px] text-[#444748] bg-[#e3e2e2] px-3 py-1 uppercase tracking-wide font-semibold">
                EM DESENVOLVIMENTO
              </span>
            </div>
            
            <h3 className="font-chivo font-bold text-2xl md:text-3xl text-[#1b1c1c]">
              Sistema de Roteirização / Semi-TMS
            </h3>
            
            <p className="font-serif text-base text-[#444748] leading-relaxed mt-2">
              Sistema para apoiar roteirização operacional, controle de entregas, coletas, custos, performance e programação diária de veículos.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <h4 className="font-chivo text-xs text-[#1b1c1c] font-bold uppercase tracking-wider border-b border-[#e3e2e2] pb-1.5">
                Features Principais
              </h4>
              <ul className="flex flex-col gap-2 font-serif text-sm text-[#444748]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Algoritmo de roteirização dinâmico</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Rastreamento e programação diária</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Análise e precificação de custos de frete</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="font-chivo text-[10px] text-[#444748] border border-[#e3e2e2] px-2.5 py-1 uppercase tracking-wider">Node.js</span>
              <span className="font-chivo text-[10px] text-[#444748] border border-[#e3e2e2] px-2.5 py-1 uppercase tracking-wider">PostgreSQL</span>
              <span className="font-chivo text-[10px] text-[#444748] border border-[#e3e2e2] px-2.5 py-1 uppercase tracking-wider">Google Maps API</span>
            </div>

            {/* Terminal toggle */}
            <div className="mt-4">
              <button
                onClick={() => toggleTerminal("semi-tms")}
                className="flex items-center gap-1.5 text-xs font-chivo font-bold text-cyan-800 hover:text-black transition-colors"
              >
                <Terminal className="w-4 h-4 text-cyan-600" />
                <span>{expandedTerminals["semi-tms"] ? "Ocultar Monitor Técnico" : "Inspecionar Integração Ativa"}</span>
                {expandedTerminals["semi-tms"] ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </button>
              {expandedTerminals["semi-tms"] && getTerminalContent("semi-tms")}
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 mt-4 md:mt-0">
            <div className="w-full aspect-[4/3] bg-[#e9e8e7] border border-[#e3e2e2] flex items-center justify-center overflow-hidden">
              <img
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 hover:scale-[1.01]"
                alt="Logistics Dashboard UI visualization"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKOixfGa0ku9Bs7R1_iSs-tSEnYEavXt_OsxMMn-i5BSPEfnixSxjDP3fUBEPY9bFHSjOHZEKP3DRQpk5k10Lfov6O_8CU0eytu_3GIM9aKpQPpII5yvCJktkcneDPAaGLLrOqVk_n-W4Oi3_6jQSYCWrEjbZ_R_VeTqhZhXvYQBLP2ELN7n-m0jMwLmoVPSiMf2y12UO6EImBjPqRJdA8qSSrK0YWR_QRrgTvnZlq9D7vTVgwXgI26N2brqJxygnOlD82AGE0mlOj"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-[#e3e2e2]" />

        {/* Project 2: Casa em Dia */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="col-span-12 md:col-span-7 order-2 md:order-1 mt-4 md:mt-0">
            <div className="w-full aspect-[4/3] bg-[#e9e8e7] border border-[#e3e2e2] flex items-center justify-center overflow-hidden">
              <img
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 hover:scale-[1.01]"
                alt="Casa em Dia Mobile UI Layout"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAed0zxYOL9bOI63g3sTLBuZh-4uDb9Xc-lrsmHxEP8lmKkiBCm5Yf92082YUzdWrpyluJiP2RN86fG6TgVL5vKV6UHuL11BUHPgpdDS5dgYAMJ-rT4qRCaCmXlMsaDErGm_vqMeguisJnoT5aUplSHQ9lVfzN37rjOvxQDZMjse3eT7axj1R789CFhWwGSPDUiXjp7NWZP4t6Z2496syl-XXe8si2ull9B_ly0BANoSAsZ1Zn9E9SXiglXIkx4xbEZ35ObsSkoq333"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 order-1 md:order-2 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="font-chivo text-[10px] text-[#444748] bg-[#e3e2e2] px-3 py-1 uppercase tracking-wide font-semibold">
                EM DESENVOLVIMENTO
              </span>
            </div>

            <h3 className="font-chivo font-bold text-2xl md:text-3xl text-[#1b1c1c]">
              Casa em Dia
            </h3>

            <p className="font-serif text-base text-[#444748] leading-relaxed mt-2">
              Aplicativo Android para organização doméstica, lembretes recorrentes, histórico de tarefas e controle simples da rotina familiar.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <h4 className="font-chivo text-xs text-[#1b1c1c] font-bold uppercase tracking-wider border-b border-[#e3e2e2] pb-1.5">
                Features Principais
              </h4>
              <ul className="flex flex-col gap-2 font-serif text-sm text-[#444748]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Histórico integrado de tarefas realizadas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Configuração de recorrências personalizadas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Armazenamento SQLite local robusto</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="font-chivo text-[10px] text-[#444748] border border-[#e3e2e2] px-2.5 py-1 uppercase tracking-wider">Kotlin</span>
              <span className="font-chivo text-[10px] text-[#444748] border border-[#e3e2e2] px-2.5 py-1 uppercase tracking-wider">Android SDK</span>
              <span className="font-chivo text-[10px] text-[#444748] border border-[#e3e2e2] px-2.5 py-1 uppercase tracking-wider">SQLite / Room</span>
            </div>

            {/* Terminal toggle */}
            <div className="mt-4">
              <button
                onClick={() => toggleTerminal("casa-em-dia")}
                className="flex items-center gap-1.5 text-xs font-chivo font-bold text-cyan-800 hover:text-black transition-colors"
              >
                <Terminal className="w-4 h-4 text-cyan-600" />
                <span>{expandedTerminals["casa-em-dia"] ? "Ocultar Schema Local" : "Visualizar Schema Room (Kotlin)"}</span>
                {expandedTerminals["casa-em-dia"] ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </button>
              {expandedTerminals["casa-em-dia"] && getTerminalContent("casa-em-dia")}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-[#e3e2e2]" />

        {/* Project 3: AISDD Framework */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="font-chivo text-[10px] text-[#444748] bg-[#e3e2e2] px-3 py-1 uppercase tracking-wide font-semibold">
                DESENVOLVIMENTO CONTÍNUO
              </span>
            </div>

            <h3 className="font-chivo font-bold text-2xl md:text-3xl text-[#1b1c1c]">
              AISDD Framework
            </h3>

            <p className="font-serif text-base text-[#444748] leading-relaxed mt-2">
              Framework metodológico para especificação e documentação estruturada que orienta o desenvolvimento assistido por Inteligência Artificial.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <h4 className="font-chivo text-xs text-[#1b1c1c] font-bold uppercase tracking-wider border-b border-[#e3e2e2] pb-1.5">
                Features Principais
              </h4>
              <ul className="flex flex-col gap-2 font-serif text-sm text-[#444748]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>11 envelopes documentais persistentes</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Tratamento ativo contra alucinações de IA</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Rastreabilidade cirúrgica do fluxo técnico</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="font-chivo text-[10px] text-[#444748] border border-[#e3e2e2] px-2.5 py-1 uppercase tracking-wider">Metodologia</span>
              <span className="font-chivo text-[10px] text-[#444748] border border-[#e3e2e2] px-2.5 py-1 uppercase tracking-wider">Markdown Spec</span>
              <span className="font-chivo text-[10px] text-[#444748] border border-[#e3e2e2] px-2.5 py-1 uppercase tracking-wider">AI Operations</span>
            </div>

            {/* Terminal toggle */}
            <div className="mt-4">
              <button
                onClick={() => toggleTerminal("aisdd-framework")}
                className="flex items-center gap-1.5 text-xs font-chivo font-bold text-cyan-800 hover:text-black transition-colors"
              >
                <Terminal className="w-4 h-4 text-cyan-600" />
                <span>{expandedTerminals["aisdd-framework"] ? "Ocultar Especificações" : "Inspecionar Prompt Controller"}</span>
                {expandedTerminals["aisdd-framework"] ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </button>
              {expandedTerminals["aisdd-framework"] && getTerminalContent("aisdd-framework")}
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 mt-4 md:mt-0">
            <div className="w-full aspect-[4/3] bg-[#e9e8e7] border border-[#e3e2e2] flex items-center justify-center p-8 overflow-hidden">
              {/* Abstract Representation for Framework */}
              <div className="w-full h-full border border-[#e3e2e2] relative flex flex-col bg-[#fbf9f9]">
                <div className="border-b border-[#e3e2e2] p-4 flex justify-between items-center bg-[#fbf9f9]">
                  <span className="font-chivo text-[10px] font-bold uppercase tracking-widest text-[#1b1c1c]">AISDD.config</span>
                  <span className="text-xs font-mono text-[#868382]">[PROMPT CONTROLLER]</span>
                </div>
                <div className="p-8 flex-grow flex flex-col gap-4 bg-[#fbf9f9] justify-center">
                  <div className="h-2 w-1/3 bg-[#e3e2e2]"></div>
                  <div className="h-2 w-1/2 bg-[#e3e2e2]"></div>
                  <div className="h-2 w-1/4 bg-[#e3e2e2]"></div>
                  <div className="h-2 w-2/3 bg-[#e3e2e2] mt-4"></div>
                  <div className="h-2 w-1/3 bg-[#e3e2e2]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
