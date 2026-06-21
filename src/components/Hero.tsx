import { portfolioData } from "../data/portfolioData";
import { ArrowRight, Play, Briefcase, ChevronRight, Activity, Cpu } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const { fullName, role, subtitle, tagline } = portfolioData.personal;
  
  // Interactive simulator states to represent operational systems
  const [activeVehicle, setActiveVehicle] = useState(0);
  const [cargoLoad, setCargoLoad] = useState(82);
  const [routeOptimization, setRouteOptimization] = useState(14.8);
  const [activeTab, setActiveTab] = useState<"roteirizacao" | "dados">("roteirizacao");

  // Keep simulated telemetry updated gently over time
  useEffect(() => {
    const interval = setInterval(() => {
      setCargoLoad(prev => {
        const next = prev + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 3);
        return Math.max(70, Math.min(98, next));
      });
      setRouteOptimization(prev => {
        const delta = (Math.random() > 0.5 ? 0.1 : -0.1);
        return parseFloat(Math.max(12.5, Math.min(18.2, prev + delta)).toFixed(1));
      });
      setActiveVehicle(prev => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  const simulatedVehicles = [
    { id: "VEH-01", route: "Campinas ➔ Curitiba", status: "Otimizado por IA", color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { id: "VEH-02", route: "SP-Capital ➔ Rio", status: "Aguardando Carga", color: "text-amber-600 bg-amber-50 border-amber-200" },
    { id: "VEH-03", route: "Santos ➔ Belo Horizonte", status: "Em Trânsito", color: "text-blue-600 bg-blue-50 border-blue-200" },
    { id: "VEH-04", route: "Porto Alegre ➔ Itajaí", status: "Roteirizado", color: "text-indigo-600 bg-indigo-50 border-indigo-200" }
  ];

  return (
    <section
      id="hero-section"
      className="relative min-h-screen pt-32 pb-20 flex items-center bg-radial from-slate-50 via-white to-slate-50 overflow-hidden border-b border-slate-100"
    >
      {/* Decorative Grid Line Patterns (Representing Logistical Coordinates) */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-sky-200/20 blur-[120px] rounded-full" />
        <div className="absolute left-10 bottom-10 w-[300px] h-[300px] bg-emerald-200/20 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Typography and Action Buttons */}
        <div id="hero-intro-column" className="lg:col-span-7 space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-slate-900 text-white rounded-full px-4 py-1.5 text-xs font-mono tracking-wider shadow-sm uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Supervisor Operacional + Dev em IA</span>
          </div>

          <div className="space-y-4">
            <h1
              id="hero-name"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-none"
            >
              {fullName}
            </h1>
            <p
              id="hero-subtitle"
              className="text-xl sm:text-2xl font-semibold text-slate-700 flex flex-wrap items-center gap-x-2.5"
            >
              <span className="text-cyan-700 font-mono text-lg bg-cyan-50 border border-cyan-100 px-3 py-1 rounded">
                {role}
              </span>
              <span className="text-slate-400 text-sm hidden sm:inline">•</span>
              <span className="text-slate-600 sm:text-xl font-medium">{subtitle}</span>
            </p>
          </div>

          <p
            id="hero-tagline"
            className="text-lg text-slate-600 max-w-xl leading-relaxed border-l-4 border-slate-900 pl-4 py-1"
          >
            {tagline}
          </p>

          <div
            id="hero-actions"
            className="flex flex-col sm:flex-row gap-4 pt-4 max-w-md sm:max-w-none"
          >
            <button
              id="hero-btn-projects"
              onClick={() => handleScrollTo("#projetos")}
              className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-2 bg-slate-950 hover:bg-slate-800 text-white font-medium px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
            >
              <span>Ver Projetos</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              id="hero-btn-aisdd"
              onClick={() => handleScrollTo("#aisdd")}
              className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 border border-slate-200"
            >
              <span>Conhecer AISDD</span>
              <Cpu className="w-4 h-4 text-cyan-600" />
            </button>

            <button
              id="hero-btn-contact"
              onClick={() => handleScrollTo("#contato")}
              className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-2 bg-white hover:bg-slate-50 text-slate-700 font-medium px-6 py-3.5 rounded-xl transition-all duration-300 border border-slate-200"
            >
              <span>Contato</span>
            </button>
          </div>

          {/* Quick Real-Time Metas Footer */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200/80 max-w-lg">
            <div>
              <div className="text-2xl font-bold text-slate-900">100%</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">Base Operacional</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">-{routeOptimization}%</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">Tempo de Rota</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">AISDD</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">Metodologia Assistida</div>
            </div>
          </div>
        </div>

        {/* Right Column: Beautiful, Realistic Operational Interface Visualizer (Visual Interativo) */}
        <div id="hero-visual-column" className="lg:col-span-5 relative mt-6 lg:mt-0">
          <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden text-slate-800 font-sans">
            {/* Window Top Bar (Sober System styling) */}
            <div className="bg-slate-950 text-slate-200 px-4 py-3 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                </div>
                <span className="font-mono text-xs text-slate-400 ml-4">ops_ai_engine // live_status</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-mono text-[10px] text-emerald-400">CONNECT SYSTEM</span>
              </div>
            </div>

            {/* Selector tabs */}
            <div className="flex border-b border-slate-100 bg-slate-50/50">
              <button
                onClick={() => setActiveTab("roteirizacao")}
                className={`flex-1 text-center py-2.5 text-xs font-semibold border-r border-slate-100 ${
                  activeTab === "roteirizacao"
                    ? "text-slate-900 bg-white border-b-2 border-slate-900"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                Roteirização Inteligente
              </button>
              <button
                onClick={() => setActiveTab("dados")}
                className={`flex-1 text-center py-2.5 text-xs font-semibold ${
                  activeTab === "dados"
                    ? "text-slate-900 bg-white border-b-2 border-slate-900"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                Análise de Cargas & KPIs
              </button>
            </div>

            {/* Card Content body */}
            <div className="p-6 space-y-6">
              {activeTab === "roteirizacao" ? (
                <>
                  {/* Simulated interactive Route visualization */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs text-slate-500 font-mono">
                      <span>MONITOR DE EXPEDIÇÃO CRÍTICA</span>
                      <span>{simulatedVehicles.length} VEÍCULOS NO MAPA</span>
                    </div>

                    <div className="space-y-2.5">
                      {simulatedVehicles.map((veh, idx) => (
                        <div
                          key={veh.id}
                          onClick={() => setActiveVehicle(idx)}
                          className={`p-3 rounded-lg border text-left transition-all duration-200 cursor-pointer ${
                            activeVehicle === idx
                              ? "bg-slate-950 border-slate-900 text-white shadow-md scale-[1.01]"
                              : "bg-slate-50/80 border-slate-100 hover:bg-slate-50 hover:border-slate-200 text-slate-700"
                          }`}
                        >
                          <div className="flex justify-between items-start mb-1">
                            <span className="font-mono text-xs font-bold">{veh.id}</span>
                            <span
                              className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border ${
                                activeVehicle === idx ? "bg-white/10 border-white/20 text-emerald-300" : veh.color
                              }`}
                            >
                              {veh.status}
                            </span>
                          </div>
                          <p className={`text-xs ${activeVehicle === idx ? "text-slate-200" : "text-slate-800"}`}>
                            {veh.route}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Route Status Summary box */}
                  <div className="bg-slate-50 rounded-lg p-3.5 border border-slate-200/80 flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-8 h-8 rounded bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600">
                        <Activity className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Estimativa Otimizada por IA</p>
                        <p className="text-[10px] text-slate-400">Previsão baseada em custos e prazos operacionais</p>
                      </div>
                    </div>
                    <span className="font-mono font-bold text-cyan-700 bg-cyan-50 px-2 py-1 rounded border border-cyan-100">
                      -{routeOptimization}% tempo
                    </span>
                  </div>
                </>
              ) : (
                <>
                  {/* Interactive Load & KPI Analysis */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50">
                        <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-wider mb-2">
                          Capacidade Média de Frota
                        </span>
                        <div className="flex items-baseline space-x-1.5">
                          <span className="text-3xl font-extrabold text-slate-900 tracking-tight">{cargoLoad}%</span>
                          <span className="text-xs text-emerald-600 font-semibold font-mono">▲ Ótimo</span>
                        </div>
                        {/* Progress bar */}
                        <div className="w-full bg-slate-200 h-1.5 rounded-full mt-3 overflow-hidden">
                          <div
                            className="bg-emerald-500 h-1.5 rounded-full transition-all duration-1000"
                            style={{ width: `${cargoLoad}%` }}
                          />
                        </div>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50">
                        <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-wider mb-2">
                          Automação de SSW & Planilhas
                        </span>
                        <div className="flex items-baseline space-x-1.5">
                          <span className="text-3xl font-extrabold text-slate-900 tracking-tight">12x</span>
                          <span className="text-xs text-cyan-600 font-semibold font-mono">Mais rápido</span>
                        </div>
                        <div className="text-[10px] text-slate-400 mt-3 flex items-center space-x-1">
                          <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full inline-block" />
                          <span>Envio direto de dados</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 bg-slate-950 rounded-xl text-slate-300 font-mono text-xs border border-slate-900 space-y-1.5">
                      <div className="text-slate-400 text-[10px] uppercase mb-1">SCRIPT EXPORT LOG:</div>
                      <div>[OK] Lendo planilhas de faturamento .xlsx...</div>
                      <div>[OK] Cruzando rotas do SSW TMS...</div>
                      <div className="text-emerald-400 flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                        <span>[OK] IA agrupou 47 pedidos em 3 rotas de entrega.</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Absolute Background element decoration */}
          <div className="absolute top-2 right-2 -z-10 w-full h-full bg-cyan-100 rounded-2xl translate-x-2 translate-y-2 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
