import { portfolioData } from "../data/portfolioData";
import { Truck, Layers, DollarSign, Cpu, Database, Compass, LucideIcon } from "lucide-react";

// Helper mapper for Lucide Icons
const iconMap: Record<string, LucideIcon> = {
  Truck: Truck,
  Layers: Layers,
  DollarSign: DollarSign,
  Cpu: Cpu,
  Database: Database,
  Compass: Compass,
};

export default function Areas() {
  const { areas } = portfolioData;

  return (
    <section id="areas-atuacao" className="py-24 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div id="areas-header" className="max-w-2xl mb-16 space-y-3">
          <span className="text-cyan-700 font-mono text-xs uppercase tracking-widest font-semibold block">
            Competências Práticas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Áreas de Atuação
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Intersecção direta entre fluxo de materiais diário e inteligência de software. Soluções focadas no ganho real de tempo, redução de retrabalho e controle absoluto de custos.
          </p>
        </div>

        {/* Grid of Cards */}
        <div id="areas-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => {
            const IconComponent = iconMap[area.iconName] || Compass;

            return (
              <div
                id={`area-card-${index}`}
                key={area.title}
                className="group bg-white p-8 rounded-xl border border-slate-200/80 hover:border-slate-350 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-lg bg-slate-950 text-white flex items-center justify-center transition-colors duration-300 group-hover:bg-cyan-600">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  {/* Card Info */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-950 transition-colors duration-200">
                    {area.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>OPERATIONAL ENGINE</span>
                  <span className="text-cyan-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    ➔
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight footer */}
        <div className="mt-12 bg-slate-950 text-slate-200 rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between border border-slate-900 shadow-lg">
          <div className="mb-4 md:mb-0 space-y-1">
            <h4 className="font-mono text-sm font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full inline-block" />
              SISTEMAS SOB MEDIDA, SEM CÓDIGO INÚTIL
            </h4>
            <p className="text-xs text-slate-400">Filtro no que realmente move carretas, diminui faltas de carga e melhora a margem operacional.</p>
          </div>
          <a
            href="#contato"
            className="px-4 py-2 bg-white text-slate-950 hover:bg-slate-100 text-xs font-bold font-mono rounded transition-colors uppercase"
          >
            Acelerar Projeto ➔
          </a>
        </div>

      </div>
    </section>
  );
}
