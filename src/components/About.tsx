import { portfolioData } from "../data/portfolioData";
import { Hammer, Check } from "lucide-react";

export default function About() {
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
                Anderson Matheus Albuquerque
              </p>
            </div>
            
            <p className="font-serif text-base text-[#2d2e2f] leading-relaxed font-semibold">
              Com mais de uma década de atuação em operações logísticas de transporte e distribuição, adquiri profunda vivência direta na supervisão operacional de equipes de frota própria e terceirizada, controlando de perto rotinas de roteirização técnica, prazos, custos e metas de performance diárias.
            </p>

            <p className="font-serif text-base text-[#2d2e2f] leading-relaxed font-semibold">
              Unindo essa experiência prática em operações físicas à tecnologia, projeto e desenvolvo sistemas, softwares e automações pragmáticas voltadas a problemas reais de logística. Utilizo Inteligência Artificial e especificações digitais estruturadas para acelerar a entrega de soluções robustas que realmente otimizam processos e apoiam decisões.
            </p>

            {/* Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-2 text-[#1b1c1c]">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                <span className="font-chivo text-xs uppercase tracking-wider font-bold">+10 anos em logística</span>
              </div>
              <div className="flex items-center gap-2 text-[#1b1c1c]">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                <span className="font-chivo text-xs uppercase tracking-wider font-bold">Supervisão operacional</span>
              </div>
              <div className="flex items-center gap-2 text-[#1b1c1c]">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                <span className="font-chivo text-xs uppercase tracking-wider font-bold">Arquitetura de soluções digitais</span>
              </div>
              <div className="flex items-center gap-2 text-[#1b1c1c]">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                <span className="font-chivo text-xs uppercase tracking-wider font-bold">Desenvolvimento assistido por IA</span>
              </div>
            </div>
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
              <span className="font-chivo text-[10px] text-white bg-[#1b1c1c] px-3 py-1 uppercase tracking-wider font-bold">
                Perfil Profissional
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
