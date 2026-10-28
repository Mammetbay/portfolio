'use client';

import React from 'react';
import { ArrowUp, GithubIcon, InstagramIcon, Play, BrandLogo } from './Icons';
import { useLanguage } from '@/i18n/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#101010] pt-14 pb-24 md:pb-14 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start gap-2.5 min-w-0 max-w-full">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 sm:gap-3">
            <BrandLogo className="w-8 h-8 rounded-xl shadow-md shadow-black/40 shrink-0" />
            <span className="font-display font-bold text-base tracking-tight text-white break-words">
              MAMMETBAY MAMMETBAYEV
            </span>
            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/[0.05] text-neutral-400 border border-white/[0.08] shrink-0">
              ARCH // v2.5
            </span>
          </div>
          <p className="text-xs text-neutral-400 text-center md:text-left max-w-md font-sans break-words">
            {t.footer.tagline}
          </p>
        </div>

        {/* Navigation & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center gap-6 min-w-0 max-w-full">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 text-xs font-mono text-neutral-400">
            <a href="#projects" className="hover:text-[#E4FD97] transition-colors">
              {t.footer.navArchitectures}
            </a>
            <a href="#experience" className="hover:text-[#E4FD97] transition-colors">
              {t.footer.navBlueprint}
            </a>
            <a href="#stack" className="hover:text-[#E4FD97] transition-colors">
              {t.footer.navMatrix}
            </a>
            <a href="#terminal" className="hover:text-[#E4FD97] transition-colors">
              {t.footer.navCli}
            </a>
            <a href="#contact" className="hover:text-[#E4FD97] transition-colors">
              {t.footer.navContact}
            </a>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="https://github.com/Mammetbay"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] text-neutral-300 hover:text-white transition-all border border-white/[0.08]"
              title="GitHub: github.com/Mammetbay"
            >
              <GithubIcon size={15} />
            </a>

            <a
              href="https://instagram.com/mammetbay_dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] text-neutral-300 hover:text-white transition-all border border-white/[0.08]"
              title="Instagram: @mammetbay_dev"
            >
              <InstagramIcon size={15} />
            </a>

            <a
              href="https://play.google.com/store/apps/developer?id=Mammetbayev+M."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Play Developer"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] text-neutral-300 hover:text-white transition-all border border-white/[0.08]"
              title="Google Play Developer: Mammetbayev M."
            >
              <Play size={15} />
            </a>

            <button
              onClick={scrollToTop}
              aria-label={t.footer.backToTop}
              className="p-2.5 rounded-xl bg-[#E4FD97]/10 hover:bg-[#E4FD97] text-[#E4FD97] hover:text-[#141414] transition-all border border-[#E4FD97]/30 cursor-pointer"
              title={t.footer.backToTop}
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* Copyright row */}
      <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-3 font-mono">
        <p className="text-center sm:text-left break-words max-w-full">© {new Date().getFullYear()} Mammetbay Mammetbayev. {t.footer.rightsReserved}</p>
        <p className="text-neutral-400 text-center sm:text-left break-words max-w-full">
          {t.footer.typographyNote}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
