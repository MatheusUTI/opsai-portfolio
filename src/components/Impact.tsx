import React from "react";

export default function Impact() {
  const indicators = [
    {
      value: "95%+",
      label: "Meta operacional de performance diária"
    },
    {
      value: "Centenas",
      label: "De entregas planejadas e acompanhadas diariamente"
    },
    {
      value: "10+",
      label: "Rotas regionais sob gestão operacional"
    },
    {
      value: "7+",
      label: "Veículos coordenados diariamente"
    }
  ];

  return (
    <section
      id="impacto"
      className="w-full px-6 md:px-16 py-16 md:py-24 max-w-7xl mx-auto border-t border-gray-200 bg-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
        
        {/* Header Title */}
        <div className="lg:col-span-4 space-y-4">
          <h2 className="font-display font-black text-black text-3xl md:text-5xl tracking-tight uppercase leading-none">
            Impacto Real
          </h2>
          <p className="font-display text-[10px] text-gray-500 uppercase tracking-widest font-black">
            MÉTRICAS DA OPERAÇÃO FISICA
          </p>
          <p className="font-sans text-sm text-gray-700 leading-relaxed font-semibold max-w-xs">
            Resultados consolidados em campo por meio de supervisão ativa de frotas e entrega pontual de fretes.
          </p>
        </div>

        {/* 4 metrics in grid */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {indicators.map((ind, idx) => (
            <div
              key={idx}
              className="border-2 border-black p-8 flex flex-col justify-between bg-white hover:bg-gray-50 transition-colors duration-300 rounded-none"
            >
              <div className="space-y-4">
                <span className="font-display text-4xl md:text-5xl font-black text-black block tracking-tighter">
                  {ind.value}
                </span>
                <div className="w-12 h-1 bg-black"></div>
                <p className="font-sans text-sm md:text-base text-gray-800 leading-relaxed font-bold">
                  {ind.label}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
