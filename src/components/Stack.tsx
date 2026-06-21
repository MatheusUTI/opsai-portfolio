import { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { BookOpen } from "lucide-react";

export default function Stack() {
  const { stack } = portfolioData;

  // Active filter category
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Tudo" },
    { id: "frontend", label: "Frontend" },
    { id: "mobile", label: "Mobile" },
    { id: "backend", label: "Backend & Dados" },
    { id: "logistics", label: "Operação/Planilhas" },
    { id: "tools", label: "IA & Ferramentas" }
  ];

  const techDetails: Record<string, string> = {
    "React": "Criação de aplicativos operacionais rápidos e interfaces limpas baseadas em componentes funcionais.",
    "Vite": "Compilação veloz do ecossistema de frontend, garantindo desenvolvimento instantâneo.",
    "Tailwind CSS": "Adoção de padrões de estilização pragmáticos por classes utilitárias sem sobrecarga de arquivos CSS.",
    "Supabase": "Banco de dados Postgres robusto para persistência segura de dados de frota e expedidores.",
    "Python": "Desenvolvimento de rotinas para limpeza de CSV, parse automatizado e inteligência artificial aplicada.",
    "Kotlin": "Codificação estável nativa focada em coletores de dados móveis sob o método AISDD.",
    "Android": "Integração direcionada aos dispositivos e scanners de transporte utilizados no chão de fábrica.",
    "SQLite": "Banco offline local de alta performance, mantendo operações ativas sem rede cabeada.",
    "Firebase": "Banco de dados sincronizado em tempo real com excelente infraestrutura de alertas locais.",
    "GitHub": "Rastreabilidade completa de especificações, logs de decisões e auditorias de código assistido.",
    "Excel": "Intercâmbio de dados essenciais em pátios logísticos, cruzamento de matrizes de fretes e cubagens.",
    "CSV": "Padrão leve de intercâmbio de dados entre faturamentos estáticos corporativos e sistemas web.",
    "SSW": "O sistema TMS predominante na logística brasileira, servindo como fonte de dados brutos de rotas.",
    "IA aplicada ao desenvolvimento": "Adoção sistêmica de LLMs estruturadas por regras estritas para aumentar a vazão de código testado."
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
    <section
      id="stack"
      className="w-full px-6 md:px-16 py-16 md:py-32 max-w-7xl mx-auto border-t border-[#e3e2e2] bg-[#fbf9f9]"
    >
      {/* Section Header */}
      <div className="flex flex-col gap-6 mb-12">
        <h2 className="font-chivo font-extrabold text-[#1b1c1c] text-3xl md:text-5xl tracking-tight leading-none">
          Tecnologias Práticas
        </h2>
        <p className="font-serif text-base md:text-lg text-[#444748] max-w-2xl leading-relaxed">
          O ecossistema técnico do Anderson foca na velocidade de entrega, funcionamento offline robusto e emparelhamento eficiente com a inteligência artificial.
        </p>
      </div>

      {/* Modern minimal filters */}
      <div className="flex flex-wrap gap-3 mb-12 border-b border-[#e3e2e2] pb-6">
        {categories.map((cat) => {
          const isSelected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 font-chivo text-xs font-semibold uppercase tracking-wider transition-all duration-200 border ${
                isSelected
                  ? "bg-[#1b1c1c] text-white border-[#1b1c1c]"
                  : "bg-white text-[#444748] border-[#e3e2e2] hover:border-[#1b1c1c]"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid of stack item cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStack.map((item, idx) => {
          const description = techDetails[item.label] || "Sem notas adicionais disponíveis.";
          return (
            <div
              key={idx}
              className="border border-[#e3e2e2] p-6 bg-white flex flex-col justify-between gap-4 hover:border-[#1b1c1c] transition-colors duration-300"
            >
              <div className="space-y-3">
                <span className="inline-block px-3 py-1 bg-[#efeded] text-[#1b1c1c] font-chivo text-[10px] font-bold uppercase tracking-wider">
                  {item.label}
                </span>
                <p className="font-serif text-sm text-[#444748] leading-relaxed">
                  {description}
                </p>
              </div>

              <div className="border-t border-[#efeded] pt-3 flex justify-between items-center text-[9px] font-chivo uppercase tracking-wider text-[#cac6c4]">
                <span>Status: Ativo</span>
                <span>AISDD Ok</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Conceptual Footer Card */}
      <div className="mt-12 border border-[#e3e2e2] p-6 bg-white flex flex-col md:flex-row items-center gap-4">
        <BookOpen className="w-6 h-6 text-[#1b1c1c] flex-shrink-0" />
        <p className="font-serif text-sm text-[#444748] leading-relaxed">
          <strong>Critério de Seleção:</strong> Todas as ferramentas escolhidas seguem as restrições de arquitetura estipuladas no <strong>AISDD Framework</strong>, facilitando revisões seguras e o desenvolvimento de soluções robustas de tecnologia de campo.
        </p>
      </div>

    </section>
  );
}
