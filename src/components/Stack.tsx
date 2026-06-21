import { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { Cpu, Server, Laptop, Smartphone, FileSpreadsheet, Layers, Box } from "lucide-react";

export default function Stack() {
  const { stack } = portfolioData;

  // Active filter category
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Tudo", icon: Layers },
    { id: "frontend", label: "Frontend", icon: Laptop },
    { id: "mobile", label: "Mobile", icon: Smartphone },
    { id: "backend", label: "Backend & Dados", icon: Server },
    { id: "logistics", label: "Operação/Planilhas", icon: FileSpreadsheet },
    { id: "tools", label: "IA & Git", icon: Cpu }
  ];

  // Map category code to human readable label & detail notes
  const techDetails: Record<string, string> = {
    "React": "Criação de aplicativos responsivos, rápidos e integrados com APIs.",
    "Vite": "Empacotamento veloz do frontend com carregamento instantâneo no desenvolvimento.",
    "Tailwind CSS": "Estilização avançada com classes utilitárias, garantindo consistência visual.",
    "Supabase": "Banco de dados Postgres serverless seguro para persistência ágil de dados operacionais.",
    "Python": "Scripts de automação, manipulação de arquivos pesados, limpeza de CSV e inteligência artificial.",
    "Kotlin": "Desenvolvimento nativo Android de alta robustez com tipagem estática e segurança de nulos.",
    "Android": "Desenvolvimento focado em coletores de dados e aparelhos móveis para expedição no pátio logístico.",
    "SQLite": "Banco de dados local veloz e embutido para soluções que necessitam rodar sem sinal de internet.",
    "Firebase": "Banco NoSQL em tempo real, notificações push e autenticação robusta para apps de campo.",
    "GitHub": "Controle de versão total das especificações, commits documentados e controle do AISDD.",
    "Excel": "O coração da logística operacional moderna — exportação, cruzamento de matriz de distâncias e tabelas dinâmicas.",
    "CSV": "Interface principal para transporte de dados brutos entre faturamentos corporativos e robôs Python.",
    "SSW": "O mais tradicional TMS das transportadoras brasileiras, de onde se extraem os dados que alimentam os robôs de cálculo.",
    "IA aplicada ao desenvolvimento": "Adoção sistêmica de ferramentas como Copilot e Gemini via AISDD para codificação assertiva."
  };

  const getTechColor = (category: string) => {
    switch (category) {
      case "frontend":
        return "bg-cyan-50 text-cyan-800 border-cyan-200 hover:bg-cyan-100";
      case "mobile":
        return "bg-purple-50 text-purple-800 border-purple-200 hover:bg-purple-100";
      case "backend":
        return "bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100";
      case "logistics":
        return "bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100";
      case "methodology":
      case "tools":
      default:
        return "bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100";
    }
  };

  const filteredStack = activeCategory === "all" 
    ? stack 
    : stack.filter(item => {
        if (activeCategory === "tools" && (item.category === "methodology" || item.category === "tools")) {
          return true;
        }
        return item.category === activeCategory;
      });

  return (
    <section id="stack" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div id="stack-header" className="max-w-2xl mb-16 space-y-3">
          <span className="text-cyan-700 font-mono text-xs uppercase tracking-widest font-semibold block">
            Tecnologias Práticas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Stack & Ferramentas
          </h2>
          <p className="text-slate-650 text-sm sm:text-base leading-relaxed">
            Ferramentas selecionadas com base no seu poder de resolução offline, velocidade de entrega e estabilidade operacional.
          </p>
        </div>

        {/* Filter categories tabs selector */}
        <div id="stack-filter-tabs" className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                id={`stack-filter-btn-${cat.id}`}
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg border text-xs font-semibold font-mono transition-all duration-200 ${
                  isSelected
                    ? "bg-slate-950 text-white border-slate-900 shadow-sm"
                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <IconComponent className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Badges Grid of stack */}
        <div id="stack-badges-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStack.map((item, index) => {
            const detailText = techDetails[item.label] || "Sem notas adicionais disponíveis.";
            const badgeTheme = getTechColor(item.category);

            return (
              <div
                id={`stack-item-card-${index}`}
                key={item.label}
                className="p-5 rounded-xl border border-slate-100 hover:border-slate-350 bg-white/60 hover:bg-slate-50/50 transition-all duration-205 flex flex-col justify-between space-y-3 shadow-inner shadow-slate-50/50"
              >
                <div>
                  <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border uppercase tracking-wider ${badgeTheme}`}>
                    {item.label}
                  </span>
                  
                  <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                    {detailText}
                  </p>
                </div>

                <div className="h-px bg-slate-50 w-full" />
                
                <span className="text-[9px] font-mono uppercase text-slate-400 tracking-widest text-right">
                  STATUS: PRONTO
                </span>
              </div>
            );
          })}
        </div>

        {/* Informative Note */}
        <div id="stack-notes" className="mt-12 bg-slate-950 p-6 rounded-2xl border border-slate-900 text-slate-350 text-xs font-mono flex items-center gap-3">
          <Box className="w-5 h-5 text-emerald-400 flex-shrink-0" />
          <p className="leading-relaxed">
            <strong>Critério de Stack:</strong> Todo o ecossistema foi definido visando compatibilidade com o <strong>AISDD Framework</strong>. Isso garante que copilotos de desenvolvimento possuam vasto conhecimento de sintaxe das classes, reduzindo falsos positivos de digitação de código.
          </p>
        </div>

      </div>
    </section>
  );
}
