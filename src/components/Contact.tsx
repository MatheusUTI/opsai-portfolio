import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { Github, Linkedin, Mail, Copy, Check, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const { github, linkedin, email, emailRaw } = portfolioData.links;
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formSubject, setFormSubject] = useState("");
  const [formMsg, setFormMsg] = useState("");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailRaw);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // fallback
      console.error("Falha ao copiar", err);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) return;
    
    // Purely client-side clean experience
    setFormSent(true);
  };

  return (
    <section id="contato" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Context prompt & CTA channels (5 cols) */}
          <div id="contact-info-column" className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-cyan-700 font-mono text-xs uppercase tracking-widest font-semibold block">
                Fale Comigo
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Vamos trocar uma ideia?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Estou aberto a conexões, colaborações em projetos de código aberto, consultoria de processos ou troca de ideias sobre logística, automação, sistemas internos e desenvolvimento auxiliado por inteligência artificial.
              </p>
            </div>

            {/* Direct Channels Cards */}
            <div className="space-y-4">
              
              {/* Email channel with interactive copy button */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/60 flex items-center justify-between group">
                <div className="flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-mono block">E-MAIL DIRECT</span>
                    <a href={email} className="text-sm font-bold text-slate-900 hover:text-cyan-600 transition-colors">
                      {emailRaw}
                    </a>
                  </div>
                </div>

                <button
                  id="btn-copy-email"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-all shadow-sm"
                  title="Copiar e-mail"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500 animate-pulse" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Social Channels buttons */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  id="link-github-contact"
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 bg-slate-50 hover:bg-slate-100 border border-slate-200/60 hover:border-slate-350 rounded-xl transition-all flex items-center space-x-3 group"
                >
                  <div className="p-2 bg-slate-900 text-white rounded-lg group-hover:bg-slate-800 transition-colors">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-400 font-mono block">REPOSITÓRIO</span>
                    <span className="text-xs font-bold text-slate-900">GitHub</span>
                  </div>
                </a>

                <a
                  id="link-linkedin-contact"
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 bg-slate-50 hover:bg-slate-100 border border-slate-200/60 hover:border-slate-350 rounded-xl transition-all flex items-center space-x-3 group"
                >
                  <div className="p-2 bg-slate-900 text-white rounded-lg group-hover:bg-slate-800 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-400 font-mono block">CONEXÃO</span>
                    <span className="text-xs font-bold text-slate-900">LinkedIn</span>
                  </div>
                </a>
              </div>

            </div>

            {/* Prompt footer info */}
            <div className="text-xs text-slate-400 font-mono">
              <p>📍 Residente: Campinas/SP ou Região Metropolitana</p>
              <p className="mt-1">⚡ Tempo de Resposta: No mesmo dia operacional</p>
            </div>
          </div>

          {/* Right Column: Beautiful simulated Contact Form (7 cols) */}
          <div id="contact-form-column" className="lg:col-span-7">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
              
              {!formSent ? (
                <form id="contact-inner-form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-slate-900">Deixe uma mensagem</h3>
                    <p className="text-xs text-slate-500">
                      Preencha os dados e entrarei em contato para conversarmos sobre sistemas e logística.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700" htmlFor="name">Seu Nome *</label>
                      <input
                        type="text"
                        id="form-name"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="Nome Completo ou Empresa"
                        className="w-full text-sm p-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all text-slate-800"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700" htmlFor="email">Seu E-mail *</label>
                      <input
                        type="email"
                        id="form-email"
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="exemplo@email.com"
                        className="w-full text-sm p-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700" htmlFor="subject">Assunto</label>
                    <input
                      type="text"
                      id="form-subject"
                      value={formSubject}
                      onChange={(e) => setFormSubject(e.target.value)}
                      placeholder="Ex: Novo TMS Roteirizador, automação de Excel..."
                      className="w-full text-sm p-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all text-slate-800"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700" htmlFor="msg">Mensagem *</label>
                    <textarea
                      id="form-msg"
                      rows={4}
                      required
                      value={formMsg}
                      onChange={(e) => setFormMsg(e.target.value)}
                      placeholder="Descreva brevemente o cenário do seu processo operacional ou a proposta de conexão técnica..."
                      className="w-full text-sm p-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all text-slate-800 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="btn-submit-contact"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-slate-950 hover:bg-slate-800 text-white text-sm font-semibold rounded-lg py-3.5 transition-all text-center shadow-lg cursor-pointer"
                  >
                    <span>Enviar Mensagem</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div id="contact-success" className="py-12 text-center space-y-6 max-w-sm mx-auto">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-100">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900">Mensagem Enviada!</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Obrigado por demonstrar interesse, <strong>{formName}</strong>! Retornarei o contato o mais rápido possível no endereço <em>{formEmail}</em>.
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
                    className="inline-block text-xs font-mono font-bold text-cyan-700 hover:text-cyan-950 hover:underline"
                  >
                    Resetar formulário e enviar outra mensagem
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
