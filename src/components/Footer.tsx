import { portfolioData } from "../data/portfolioData";
import { ArrowUp, Terminal, ShieldAlert } from "lucide-react";

export default function Footer() {
  const { fullName, role, subtitle } = portfolioData.personal;

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer id="app-footer" className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Main info branding (7 cols) */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center space-x-2.5 font-bold tracking-tight text-white">
              <div className="w-8 h-8 rounded-lg bg-white text-slate-950 flex items-center justify-center text-sm font-mono font-bold">
                AM
              </div>
              <span className="text-lg">
                {fullName} <span className="text-slate-700 font-normal">|</span> <span className="text-slate-400 font-mono text-sm tracking-wide bg-slate-900 px-2 py-0.5 rounded border border-slate-800">{role}</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm font-light">
              {subtitle}. Sistemas digitais autênticos construídos para enfrentar desvios e problemas reais de operação.
            </p>
          </div>

          {/* Quick legal stats / badge links (5 cols) */}
          <div className="md:col-span-5 flex flex-col md:items-end justify-between space-y-4">
            <button
              id="footer-scroll-top-btn"
              onClick={handleScrollToTop}
              className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white rounded-lg px-4 py-2.5 text-xs font-mono font-bold transition-all shadow-md group self-start md:self-end"
            >
              <span>Voltar ao Topo</span>
              <ArrowUp className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
            </button>

            <div className="text-[10px] font-mono text-slate-650 flex items-center gap-1.5 justify-start md:justify-end">
              <Terminal className="w-3.5 h-3.5 text-slate-650" />
              <span>AISDD VERSION: 1.0.0-STABLE</span>
            </div>
          </div>

        </div>

        {/* Separator */}
        <div className="h-px bg-slate-900 w-full mb-8" />

        {/* Bottom copyright and legal note */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} {fullName}. Todos os direitos reservados.
          </p>

          <p className="text-[11px] bg-slate-900 px-3 py-1 rounded text-slate-400 border border-slate-800 flex items-center gap-1">
            <ShieldAlert className="w-3 h-3 text-amber-500" />
            <span>Projetos protegidos e listados como "Em desenvolvimento" sob regras de escopo.</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
