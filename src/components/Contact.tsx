import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { Linkedin, Github, Mail, Copy, Check } from "lucide-react";

export default function Contact() {
  const { linkedin, github } = portfolioData.links;
  const rawEmail = "andersonmatheusalbuquerque@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(rawEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contato"
      className="w-full px-6 md:px-16 py-16 md:py-28 max-w-7xl mx-auto border-t border-gray-200 bg-white"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        
        {/* Title */}
        <div className="space-y-4">
          <h2 className="font-display font-black text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase leading-tight">
            Vamos otimizar sua operação com inteligência?
          </h2>
          <p className="font-display text-[10px] text-gray-500 uppercase tracking-widest font-black">
            CANAIS DIRETOS DE SUCESSO
          </p>
        </div>

        <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
          Entre em contato hoje para discutir melhorias de processos logísticos, roteirização técnica inteligente, desenvolvimento de sistemas integrados ou parcerias assistidas por Inteligência Artificial.
        </p>

        {/* 3 Main Buttons as requested */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-4">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 px-6 py-4.5 border-2 border-black bg-black text-white hover:bg-gray-800 font-bold font-display text-xs uppercase tracking-widest transition-all duration-300 rounded-none hover:-translate-y-0.5 active:translate-y-0 w-full"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 px-6 py-4.5 border-2 border-black bg-white text-black hover:bg-gray-50 font-bold font-display text-xs uppercase tracking-widest transition-all duration-300 rounded-none hover:-translate-y-0.5 active:translate-y-0 w-full"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href={`mailto:${rawEmail}`}
            className="flex items-center justify-center gap-2.5 px-6 py-4.5 border-2 border-black bg-white text-black hover:bg-gray-50 font-bold font-display text-xs uppercase tracking-widest transition-all duration-300 rounded-none hover:-translate-y-0.5 active:translate-y-0 w-full"
          >
            <Mail className="w-4 h-4" />
            <span>Enviar E-mail</span>
          </a>
        </div>

        {/* Quick Email Box with Copy Feature */}
        <div className="mt-8 border-t border-gray-100 pt-8 w-full flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50 px-6 py-4 rounded-none border border-gray-200">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-black" />
            <span className="font-mono text-sm text-black font-semibold break-all select-all">
              {rawEmail}
            </span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors duration-200 text-xs font-bold font-display uppercase tracking-wider rounded-none shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                <span>Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar E-mail</span>
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
}
