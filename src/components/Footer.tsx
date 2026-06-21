import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const { fullName } = portfolioData.personal;
  const { github, linkedin, email } = portfolioData.links;

  return (
    <footer
      id="app-footer"
      className="w-full bg-[#fbf9f9] border-t border-[#e3e2e2] text-[#444748]"
    >
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-16 py-12 max-w-7xl mx-auto gap-6">
        
        {/* Brand Logo and Subtitle */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 text-base md:text-lg font-chivo font-extrabold text-[#1b1c1c] uppercase tracking-widest">
            <img src="/public/logo.svg" alt="AA" className="w-5 h-5 object-contain" />
            <span>A. ALBUQUERQUE</span>
          </div>
          <span className="font-chivo text-[9px] md:text-[10px] uppercase tracking-wider text-[#868382] mt-1 font-bold">
            Operational Logistics • Systems • Automation
          </span>
        </div>

        {/* Links */}
        <div className="flex gap-6">
          <a
            className="font-chivo text-xs uppercase font-semibold text-[#444748] hover:text-[#1b1c1c] underline decoration-1"
            href={linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="font-chivo text-xs uppercase font-semibold text-[#444748] hover:text-[#1b1c1c] underline decoration-1"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="font-chivo text-xs uppercase font-semibold text-[#444748] hover:text-[#1b1c1c] underline decoration-1"
            href={email}
          >
            Email
          </a>
        </div>

        {/* Copyright */}
        <div className="font-serif text-xs text-[#868382] text-center md:text-left">
          © {new Date().getFullYear()} {fullName}. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
