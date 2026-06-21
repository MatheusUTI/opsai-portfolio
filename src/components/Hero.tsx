import React from "react";

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="topo"
      className="w-full px-6 md:px-16 pt-32 pb-16 md:pt-44 md:pb-28 max-w-7xl mx-auto bg-white animate-fade-in-up"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          
          <div className="space-y-4">
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-black text-black tracking-tighter uppercase leading-none">
              A. Albuquerque
            </h1>
            <p className="font-display text-lg sm:text-xl md:text-2xl font-extrabold text-black uppercase tracking-wider leading-tight">
              Supervisor Operacional de Logística <br className="hidden sm:block" />
              e Criador de Soluções Digitais
            </p>
          </div>

          <p className="font-sans text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
            Transformo a complexidade operacional em processos inteligentes, soluções digitais e resultados mensuráveis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
            <button
              onClick={(e) => handleScrollTo(e, "#projetos")}
              className="px-8 py-4 bg-black text-white hover:bg-gray-800 font-bold font-display text-xs uppercase tracking-widest transition-all duration-300 rounded-none hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              Ver Projetos
            </button>
            <button
              onClick={(e) => handleScrollTo(e, "#contato")}
              className="px-8 py-4 border-2 border-black bg-white text-black hover:bg-gray-50 font-bold font-display text-xs uppercase tracking-widest transition-all duration-300 rounded-none hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              Vamos Conversar
            </button>
          </div>
        </div>

        {/* Right Column: Professional Portrait as requested */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="w-full max-w-sm aspect-[3/4] md:aspect-[4/5] bg-gray-100 border-2 border-black relative overflow-hidden group">
            {/* Minimalist Grid overlay */}
            <div className="absolute inset-4 border border-black/10 pointer-events-none z-10"></div>
            <img
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              alt="A. Albuquerque - Professional Portrait"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAGHly-0dRMXCAoBCPnDIbazdZYnGqtbmOJqx5NXe8emehhqcRV6TozYG9FkTTgythBCAByFRBqmNAQzZ1bitoz2wroI7b--4zYV6XWMmn_boWBRcSnHn-icn2dOv4SermtfSiIZpciDSC1d9mqXLjKzo31LHl-LZ7Yajdolgg-hpsfMIS8OYULt-TvZLlC2Kvw2K1abrS7DBJPT0rkv-UhDL0SFHrMJz_8EMfvNXVZXcHQvlCgNcgRx8LvSgQoyzNa_ElaWvtznGC"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 z-20">
              <span className="font-display text-[9px] text-white bg-black px-2.5 py-1 uppercase tracking-widest font-black">
                STITCH DESIGN SYSTEM
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
