'use client';

import React from 'react';
import { ArrowUp, GithubIcon, InstagramIcon } from './Icons';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#111111] py-14 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-white text-xs font-semibold">
              MB
            </div>
            <span className="font-semibold text-sm tracking-tight text-white">
              Mammetbay
            </span>
          </div>
          <p className="text-xs text-neutral-400 text-center md:text-left max-w-sm font-normal">
            AI Engineer & Systems Architect. Developing Speech Recognition, Neural Audio Pipelines, and high-performance applications.
          </p>
        </div>

        {/* Navigation & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex items-center gap-4 text-xs font-medium text-neutral-400">
            <a href="#about-me" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#stack" className="hover:text-white transition-colors">Stack</a>
            <a href="#terminal" className="hover:text-white transition-colors">Terminal</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/Mammetbay"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 text-neutral-300 hover:text-white transition-all border border-white/[0.06]"
            >
              <GithubIcon size={14} />
            </a>

            <a
              href="https://instagram.com/mammetbay_dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 text-neutral-300 hover:text-white transition-all border border-white/[0.06]"
            >
              <InstagramIcon size={14} />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 text-neutral-300 hover:text-white transition-all border border-white/[0.06]"
              title="Back to Top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Copyright row */}
      <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-3 font-mono">
        <p>© {new Date().getFullYear()} Mammetbay. All rights reserved.</p>
        <p className="flex items-center gap-1 text-neutral-400">
          <span>Architected with PyTorch, Next.js & TypeScript</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
