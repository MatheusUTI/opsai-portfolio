import React from "react";
import { Eye, Truck, Users, Cpu } from "lucide-react";

export default function Areas() {
  const cards = [
    {
      title: "Visão Operacional",
      desc: "Entendimento prático de fretes, expedição, coletas e produtividade de armazéns.",
      icon: Eye
    },
    {
      title: "Roteirização Técnica",
      desc: "Planejamento inteligente de frotas e distribuição urbana otimizando percursos.",
      icon: Truck
    },
    {
      title: "Liderança de Equipes",
      desc: "Coordenação de motoristas, ajudantes e operadores com foco em performance e prazos.",
      icon: Users
    },
    {
      title: "Soluções Digitais",
      desc: "Criação de aplicativos, automações e scripts que otimizam tarefas analíticas diárias.",
      icon: Cpu
    }
  ];

  return (
    <section
      id="atuacao"
      className="w-full px-6 md:px-16 py-16 md:py-24 max-w-7xl mx-auto border-t border-gray-200 bg-white"
    >
      <div className="flex flex-col gap-4 mb-16">
        <h2 className="font-display font-black text-black text-3xl md:text-5xl tracking-tight uppercase leading-none">
          Atuação de Impacto
        </h2>
        <p className="font-display text-[10px] text-gray-500 uppercase tracking-widest font-black">
          COMPETÊNCIAS MENSURÁVEIS DO SETOR
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="border-2 border-black p-6 flex flex-col justify-between gap-6 hover:bg-gray-50 transition-colors duration-300 rounded-none bg-white"
            >
              <div className="space-y-4">
                <div className="p-3.5 bg-black text-white inline-block rounded-none">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-black uppercase tracking-tight">
                  {card.title}
                </h3>
                <p className="font-sans text-sm text-gray-700 leading-relaxed font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
