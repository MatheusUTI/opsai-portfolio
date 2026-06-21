import { portfolioData } from "../data/portfolioData";
import { CheckCircle2, ShieldAlert, Award, Truck, Shield, Target } from "lucide-react";

export default function About() {
  const { aboutHeading, aboutText } = portfolioData.personal;

  // Split aboutText into paragraphs by double newlines for proper JSX rendering
  const paragraphs = aboutText.split("\n\n");

  const coreFocusValues = [
    {
      title: "Pragmatismo na Operação",
      description: "Sistemas desenhados para quem está sob a pressão do relógio no pátio e na estrada.",
      icon: Target
    },
    {
      title: "Foco Absoluto em Custos",
      description: "Automação e tecnologia para frear despesas de diárias, horas extras e combustível.",
      icon: Shield
    },
    {
      title: "Desenvolvimento com IA",
      description: "Agilidade pelo método AISDD para escrever códigos estáveis e focados sem reinventar a roda.",
      icon: Truck
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Context Card & Logistics Credentials */}
          <div id="about-visual" className="lg:col-span-5 space-y-6 order-last lg:order-first">
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-6 relative shadow-sm">
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">
                PERFIL OPERACIONAL & DEV
              </span>

              <div id="author-quote" className="space-y-4">
                <blockquote className="text-slate-800 italic font-medium text-lg leading-relaxed">
                  "O melhor software operacional é aquele que entende a dor do supervisor que precisa liberar 30 carretas sob pressão de horário sem cometer erros de custo."
                </blockquote>
                <p className="text-sm font-mono font-semibold text-slate-600">— Anderson M. Albuquerque</p>
              </div>

              <div className="border-t border-slate-200/80 pt-6 space-y-4">
                <div className="flex items-start space-x-3 text-sm text-slate-700">
                  <div className="w-5 h-5 rounded bg-slate-900 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-mono mt-0.5">
                    1
                  </div>
                  <p><strong>Decisão sob pressão:</strong> Entendimento profundo dos prazos rigorosos de e-commerce e transporte.</p>
                </div>

                <div className="flex items-start space-x-3 text-sm text-slate-700">
                  <div className="w-5 h-5 rounded bg-slate-900 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-mono mt-0.5">
                    2
                  </div>
                  <p><strong>Cultura data-driven:</strong> Integração ativa entre planilhas operacionais e bancos de dados SQLite/Supabase.</p>
                </div>
              </div>

              {/* Decorative side accent badge */}
              <div className="absolute -top-3 -right-3 bg-emerald-50 text-emerald-700 font-mono text-[10px] font-bold px-3 py-1 rounded-full border border-emerald-200 uppercase">
                Chão de Pátio
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Biography */}
          <div id="about-narrative" className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-cyan-700 font-mono text-xs uppercase tracking-widest font-semibold block">
                Sobre Anderson
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {aboutHeading}
              </h2>
            </div>

            <div className="text-slate-600 text-base leading-relaxed space-y-6">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Quick Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              {coreFocusValues.map((val) => {
                const IconComp = val.icon;
                return (
                  <div key={val.title} className="space-y-2 border-t border-slate-100 pt-4">
                    <div className="flex items-center space-x-2">
                      <div className="p-1 rounded bg-cyan-50 text-cyan-600">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <h4 className="font-semibold text-slate-900 text-sm">{val.title}</h4>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">{val.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
