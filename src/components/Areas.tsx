import { portfolioData } from "../data/portfolioData";
import { Truck, Cpu, Settings, Award, Layers, Database } from "lucide-react";

const iconMap: Record<string, any> = {
  "Truck": Truck,
  "Cpu": Cpu,
  "Settings": Settings,
  "Award": Award,
  "Layers": Layers,
  "Database": Database
};

export default function Areas() {
  const { areas } = portfolioData;

  return (
    <section
      id="atuacao"
      className="w-full px-6 md:px-16 py-16 md:py-32 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Left column heading and desc */}
        <div className="col-span-12 md:col-span-4 flex flex-col gap-6">
          <h2 className="font-chivo font-extrabold text-[#1b1c1c] text-3xl md:text-5xl tracking-tight leading-none">
            Atuação
          </h2>
          <p className="font-serif text-base md:text-lg text-[#444748] max-w-sm leading-relaxed">
            Atuo na interseção entre operações, tecnologia e desenvolvimento de soluções digitais, utilizando experiência prática para otimizar processos e apoiar decisões.
          </p>
        </div>

        {/* Right column cards grid */}
        <div className="col-span-12 md:col-span-8 mt-8 md:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {areas.map((area, idx) => {
              const IconComp = iconMap[area.iconName] || Truck;
              return (
                <div
                  key={idx}
                  className="border border-[#e3e2e2] p-8 flex flex-col gap-4 bg-white group hover:border-[#1b1c1c] transition-all duration-300"
                >
                  <div className="text-[#1b1c1c] group-hover:scale-105 transition-transform duration-300 mb-2">
                    <IconComp className="w-8 h-8 stroke-[1.2]" />
                  </div>
                  <h3 className="font-chivo font-semibold text-lg text-[#1b1c1c]">
                    {area.title}
                  </h3>
                  <p className="font-serif text-sm text-[#444748] leading-relaxed flex-grow">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
