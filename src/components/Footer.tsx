import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const { fullName } = portfolioData.personal;
  const { github, linkedin, email } = portfolioData.links;

  return (
    <footer
      id="app-footer"
      className="w-full bg-white border-t border-gray-200 text-gray-500 font-sans"
    >
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-16 py-12 max-w-7xl mx-auto gap-8">
        
        {/* Brand Logo and Subtitle */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 text-base md:text-lg font-black font-display text-black uppercase tracking-widest">
            <img src="/logo.svg" alt="AA" className="w-5 h-5 object-contain" />
            <span>A. ALBUQUERQUE</span>
          </div>
          <span className="font-display text-[9px] uppercase tracking-widest text-gray-400 mt-1.5 font-black">
            LOGÍSTICA OPERACIONAL • SISTEMAS • IA APLICADA
          </span>
        </div>

        {/* Links */}
        <div className="flex gap-6">
          <a
            className="font-display text-xs uppercase font-bold text-gray-600 hover:text-black transition-colors"
            href={linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="font-display text-xs uppercase font-bold text-gray-600 hover:text-black transition-colors"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="font-display text-xs uppercase font-bold text-gray-600 hover:text-black transition-colors"
            href={email}
            target="_blank"
            rel="noreferrer"
          >
            Email
          </a>
        </div>

        {/* Copyright */}
        <div className="font-display text-[10px] uppercase font-bold text-gray-400 text-center md:text-right">
          © {new Date().getFullYear()} {fullName}.
        </div>

      </div>
    </footer>
  );
}
