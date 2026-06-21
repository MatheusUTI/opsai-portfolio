import React, { useState } from "react";
import { Check, ChevronRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Sistema de Roteirização / Semi-TMS",
      status: "EM DESENVOLVIMENTO",
      description: "Simplifica a programação diária de frotas logísticas, automatizando o cálculo de rotas regionalizadas e emitindo análises detalhadas de custos.",
      features: [
        "Roteirização integrada passo a passo",
        "Controle analítico de despesas de combustível",
        "Acompanhamento em tempo real de coletas"
      ],
      tags: ["React", "SQLite", "Tailwind CSS"]
    },
    {
      title: "Casa em Dia",
      status: "EVOLUÇÃO CONTÍNUA",
      description: "Aplicativo móvel Android nativo off-line para controle simplificado das manutenções domésticas periódicas, com recorrência inteligente.",
      features: [
        "Lembretes com cálculos recorrentes",
        "Banco de dados local ultraveloz",
        "Agenda de afazeres livre de atritos"
      ],
      tags: ["Kotlin", "Android SDK", "Room DB"]
    },
    {
      title: "AISDD",
      status: "ATIVO",
      description: "Framework metodológico focado no desenvolvimento de especificações rígidas persistentes que orientam o trabalho assistido por LLMs.",
      features: [
        "Diretrizes de handoff entre sessões",
        "Prevenção robusta de alucinações de escopo",
        "Rastreabilidade de decisões de software"
      ],
      tags: ["IA Assistida", "Metodologia", "Markdown"]
    }
  ];

  return (
    <section
      id="projetos"
      className="w-full px-6 md:px-16 py-16 md:py-24 max-w-7xl mx-auto border-t border-gray-200 bg-white"
    >
      <div className="flex flex-col gap-4 mb-16">
        <h2 className="font-display font-black text-black text-3xl md:text-5xl tracking-tight uppercase leading-none">
          Projetos Atuais
        </h2>
        <p className="font-display text-[10px] text-gray-500 uppercase tracking-widest font-black">
          SOLUÇÕES MATURAS & PRAGMÁTICAS
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="border-2 border-black p-8 bg-white flex flex-col justify-between hover:bg-gray-50 transition-colors duration-300 rounded-none relative"
          >
            <div className="space-y-6">
              {/* Status Header */}
              <div className="flex justify-between items-center">
                <span className="font-display text-[9px] text-white bg-black px-2.5 py-1 uppercase tracking-widest font-black">
                  {proj.status}
                </span>
                <span className="font-display text-xs text-gray-400 font-bold">
                  0{idx + 1}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="font-display font-black text-xl text-black uppercase tracking-tight leading-snug">
                  {proj.title}
                </h3>
                <p className="font-sans text-sm text-gray-700 leading-relaxed font-semibold">
                  {proj.description}
                </p>
              </div>

              {/* Features Short Bullet Points */}
              <div className="space-y-2 border-t border-gray-100 pt-4">
                <span className="font-display text-[9px] text-gray-500 uppercase tracking-widest font-black block">
                  Funcionalidades Principais:
                </span>
                <ul className="space-y-1.5">
                  {proj.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs font-semibold text-black">
                      <Check className="w-3.5 h-3.5 text-black stroke-[3.5] mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tags footer */}
            <div className="mt-8 pt-4 border-t border-black/10 flex flex-wrap gap-1.5">
              {proj.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="font-display text-[9px] text-black bg-gray-100 font-black px-2.5 py-1 uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
