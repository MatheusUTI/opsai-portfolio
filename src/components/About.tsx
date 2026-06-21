import { portfolioData } from "../data/portfolioData";
import { Hammer } from "lucide-react";

export default function About() {
  const { aboutHeading, aboutText } = portfolioData.personal;

  return (
    <section
      id="sobre"
      className="w-full px-6 md:px-16 py-16 md:py-32 bg-[#ffffff] border-t border-[#e3e2e2]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Section Header */}
        <div className="md:col-span-3 mb-6 md:mb-0 flex flex-col justify-between">
          <h2 className="font-chivo text-2xl md:text-3xl font-extrabold text-[#1b1c1c] uppercase tracking-tight">
            Sobre
          </h2>
          <span className="hidden md:block text-[#c4c7c7] text-4xl">
            <Hammer className="w-10 h-10 stroke-[1.2]" />
          </span>
        </div>

        {/* Content & Image */}
        <div className="md:col-span-9 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Text Content */}
          <div className="flex flex-col gap-6 justify-center order-2 lg:order-1">
            <div className="border-l-2 pl-6 border-[#1b1c1c]">
              <p className="font-serif text-lg md:text-xl text-[#1b1c1c] leading-relaxed font-semibold">
                Anderson Matheus Albuquerque atua como Supervisor Operacional de Logística e desenvolve soluções digitais orientadas à resolução de problemas reais.
              </p>
            </div>
            
            <p className="font-serif text-base text-[#444748] leading-relaxed">
              Sua experiência diária com roteirização, gestão operacional, custos, expedição, coletas e performance logística serve como base para criação de sistemas, automações e metodologias voltadas à eficiência operacional.
            </p>

            <p className="font-serif text-base text-[#444748] leading-relaxed">
              Combinando experiência operacional prática, pensamento analítico e desenvolvimento assistido por Inteligência Artificial, busca transformar processos complexos em soluções simples, escaláveis e aplicáveis ao mundo real.
            </p>

            {/* Quote */}
            <blockquote className="mt-4 p-4 bg-[#fbf9f9] border border-[#e3e2e2]">
              <p className="font-serif text-base md:text-lg text-[#1b1c1c] italic leading-relaxed">
                "Problemas reais exigem soluções reais. A tecnologia só gera valor quando melhora a operação."
              </p>
            </blockquote>
          </div>

          {/* Visual Placeholder */}
          <div className="relative w-full aspect-[3/4] md:aspect-square order-1 lg:order-2 bg-[#efeded] flex items-center justify-center p-2 border border-[#e3e2e2] overflow-hidden group">
            {/* Architectural framing for the photograph */}
            <div className="absolute inset-4 border border-[#c4c7c7] pointer-events-none z-10"></div>
            <img
              className="w-full h-full object-cover opacity-95 transition-all duration-300 group-hover:opacity-100"
              alt="Anderson Matheus Albuquerque - Professional Portrait"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAGHly-0dRMXCAoBCPnDIbazdZYnGqtbmOJqx5NXe8emehhqcRV6TozYG9FkTTgythBCAByFRBqmNAQzZ1bitoz2wroI7b--4zYV6XWMmn_boWBRcSnHn-icn2dOv4SermtfSiIZpciDSC1d9mqXLjKzo31LHl-LZ7Yajdolgg-hpsfMIS8OYULt-TvZLlC2Kvw2K1abrS7DBJPT0rkv-UhDL0SFHrMJz_8EMfvNXVZXcHQvlCgNcgRx8LvSgQoyzNa_ElaWvtznGC"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <span className="font-chivo text-[10px] text-white bg-[#1b1c1c] px-3 py-1 uppercase tracking-wider font-semibold">
                Perfil Profissional
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
