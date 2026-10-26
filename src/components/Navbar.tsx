'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Terminal, Layers, Code2, Briefcase, Sparkles, GithubIcon } from './Icons';

interface NavItem {
  title: string;
  href: string;
  description: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  {
    title: 'Projects',
    href: '#projects',
    description: 'Speech AI, LLM systems & distributed architectures',
    icon: Code2,
  },
  {
    title: 'Stack',
    href: '#stack',
    description: 'PyTorch 2.x, Next.js, FastConformer & mobile engines',
    icon: Layers,
  },
  {
    title: 'Experience',
    href: '#experience',
    description: 'Engineering leadership & commercial deployments',
    icon: Briefcase,
  },
  {
    title: 'Terminal',
    href: '#terminal',
    description: 'Interactive CLI sandbox for instant evaluation',
    icon: Terminal,
  },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${
            scrolled
              ? 'shadow-2xl shadow-black/80 border border-white/[0.08] border-t-white/[0.14] backdrop-blur-2xl bg-[#141414]/75'
              : 'bg-[#141414]/40 border border-white/[0.06] backdrop-blur-xl'
          }`}
        >
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 group active:scale-95 transition-transform">
            <div className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center font-bold text-xs text-white group-hover:border-[#E4FD97]/60 group-hover:text-[#E4FD97] transition-all">
              MB
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-white flex items-center gap-2">
                Mammetbay
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="#about-me"
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/[0.05] active:scale-95 transition-all"
            >
              About
            </Link>

            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="relative group"
                  onMouseEnter={() => setActiveItem(item.title)}
                  onMouseLeave={() => setActiveItem(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/[0.05] active:scale-95 transition-all"
                  >
                    <span>{item.title}</span>
                  </Link>

                  {/* Dropdown preview tooltip on hover */}
                  {activeItem === item.title && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 p-3.5 rounded-2xl bg-[#181818]/90 border border-white/[0.1] shadow-2xl shadow-black/80 backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-150 pointer-events-none">
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#E4FD97] mb-1">
                        <Icon size={13} />
                        <span>{item.title}</span>
                      </div>
                      <p className="text-[11px] text-neutral-400 leading-snug">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action & Links */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Status indicator capsule */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E4FD97] animate-pulse" />
              <span>Available for Hire</span>
            </div>

            <a
              href="https://github.com/Mammetbay"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 text-neutral-300 hover:text-white transition-all border border-white/[0.06]"
            >
              <GithubIcon size={15} />
            </a>

            {/* Apple-style Tactile CTA */}
            <Link
              href="#contact"
              className="px-4 py-2 rounded-full bg-[#E4FD97] hover:bg-[#ebffa3] active:scale-[0.96] text-[#141414] text-xs font-semibold tracking-tight transition-all flex items-center gap-1.5 shadow-md shadow-[#E4FD97]/10"
            >
              <Sparkles size={12} />
              <span>Let&apos;s Talk</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
