import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { Copy, Check, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const { github, linkedin, email, emailRaw } = portfolioData.links;
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formSubject, setFormSubject] = useState("");
  const [formMsg, setFormMsg] = useState("");

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(emailRaw);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Falha ao copiar", err);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) return;
    setFormSent(true);
  };

  return (
    <section
      id="contato"
      className="w-full px-6 md:px-16 py-16 md:py-32 max-w-7xl mx-auto border-t border-[#e3e2e2]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Direct channels and descriptions (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div>
            <span className="font-chivo text-xs font-bold text-[#2d2e2f] uppercase tracking-widest block mb-3">
              Próximos Passos
            </span>
            <h2 className="font-chivo font-extrabold text-[#1b1c1c] text-3xl md:text-5xl tracking-tighter leading-none mb-6">
              Vamos Conversar
            </h2>
            <p className="font-serif text-base text-[#2d2e2f] leading-relaxed max-w-md font-bold">
              Interessado em discutir operações, automação, arquitetura de soluções ou desenvolvimento orientado por especificações?
            </p>
          </div>

          {/* Social and Contact Links with Editorial styling */}
          <div className="flex flex-col border-t border-[#e3e2e2] pt-6 gap-6">
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col border-b border-transparent hover:border-[#1b1c1c] pb-2 transition-all duration-300"
            >
              <span className="font-chivo text-[10px] uppercase text-[#2d2e2f] group-hover:text-black transition-colors font-bold">
                Conexão Profissional
              </span>
              <span className="font-chivo font-bold text-xl text-[#1b1c1c] mt-1">LinkedIn</span>
            </a>

            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col border-b border-transparent hover:border-[#1b1c1c] pb-2 transition-all duration-300"
            >
              <span className="font-chivo text-[10px] uppercase text-[#2d2e2f] group-hover:text-black transition-colors font-bold">
                Repositórios & Código
              </span>
              <span className="font-chivo font-bold text-xl text-[#1b1c1c] mt-1">GitHub</span>
            </a>

            <div className="group flex flex-col border-b border-transparent pb-2 transition-all duration-300">
              <span className="font-chivo text-[10px] uppercase text-[#2d2e2f] block font-bold">
                Comunicação Direta
              </span>
              <div className="flex items-center justify-between mt-1">
                <a href={email} className="font-chivo font-bold text-xl text-[#1b1c1c] hover:underline">
                  Email
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-chivo font-bold border border-[#e3e2e2] text-[#2d2e2f] hover:border-[#1b1c1c] hover:text-[#1b1c1c] transition-colors bg-white uppercase tracking-wider"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copiar Endereço</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: High-end interactive Editorial Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="border border-[#e3e2e2] bg-white p-6 sm:p-8">
            {!formSent ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-chivo font-semibold text-lg text-[#1b1c1c] mb-1">
                    Deixe uma Mensagem
                  </h3>
                  <p className="font-serif text-sm text-[#2d2e2f] leading-relaxed font-semibold">
                    Preencha o formulário e Anderson responderá no mesmo dia operacional.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-chivo text-xs font-semibold text-[#1b1c1c] uppercase tracking-wider" htmlFor="name">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="Ex: Nome Completo"
                      className="text-sm p-3 border border-[#e3e2e2] bg-white focus:outline-none focus:border-[#1b1c1c] text-[#1b1c1c] placeholder:text-[#cac6c4] font-serif"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-chivo text-xs font-semibold text-[#1b1c1c] uppercase tracking-wider" htmlFor="email">
                      Seu E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="Ex: exemplo@email.com"
                      className="text-sm p-3 border border-[#e3e2e2] bg-white focus:outline-none focus:border-[#1b1c1c] text-[#1b1c1c] placeholder:text-[#cac6c4] font-serif"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-chivo text-xs font-semibold text-[#1b1c1c] uppercase tracking-wider" htmlFor="subject">
                    Assunto
                  </label>
                  <input
                    type="text"
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                    placeholder="Ex: Roteirização de Carga, Automação"
                    className="text-sm p-3 border border-[#e3e2e2] bg-white focus:outline-none focus:border-[#1b1c1c] text-[#1b1c1c] placeholder:text-[#cac6c4] font-serif"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-chivo text-xs font-semibold text-[#1b1c1c] uppercase tracking-wider" htmlFor="message">
                    Mensagem *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formMsg}
                    onChange={(e) => setFormMsg(e.target.value)}
                    placeholder="Escreva brevemente sobre seus objetivos..."
                    className="text-sm p-3 border border-[#e3e2e2] bg-white focus:outline-none focus:border-[#1b1c1c] text-[#1b1c1c] placeholder:text-[#cac6c4] font-serif resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1b1c1c] text-white py-3.5 uppercase font-chivo font-semibold tracking-wider text-xs hover:bg-slate-800 transition-colors hover:-translate-y-0.5 active:translate-y-0 duration-300"
                >
                  <span>Enviar Mensagem</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-6 max-w-md mx-auto">
                <div className="w-16 h-16 bg-[#efeded] text-[#1b1c1c] flex items-center justify-center mx-auto border border-[#e3e2e2]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-chivo font-bold text-xl text-[#1b1c1c]">Mensagem Enviada!</h3>
                  <p className="font-serif text-sm text-[#2d2e2f] leading-relaxed font-semibold">
                    Obrigado pelo seu contato, <strong>{formName}</strong>. A mensagem de assunto <em>"{formSubject || "Geral"}"</em> foi gravada com sucesso!
                  </p>
                </div>
                <button
                  onClick={() => {
                    setFormSent(false);
                    setFormName("");
                    setFormEmail("");
                    setFormSubject("");
                    setFormMsg("");
                  }}
                  className="text-xs font-chivo font-bold text-cyan-800 hover:text-black uppercase tracking-wider hover:underline"
                >
                  Preencher Novamente
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
