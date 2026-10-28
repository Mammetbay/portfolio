'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { Terminal, Layers, Code2, Workflow, Sparkles, GithubIcon, ArrowUpRight, BrandLogo } from './Icons';
import { useLanguage } from '@/i18n/LanguageContext';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const { locale, setLocale, t, locales } = useLanguage();

  const navItems = [
    {
      index: '01',
      title: t.nav.items.architectures.title,
      href: '#projects',
      description: t.nav.items.architectures.description,
      icon: Code2,
    },
    {
      index: '02',
      title: t.nav.items.blueprint.title,
      href: '#experience',
      description: t.nav.items.blueprint.description,
      icon: Workflow,
    },
    {
      index: '03',
      title: t.nav.items.stack.title,
      href: '#stack',
      description: t.nav.items.stack.description,
      icon: Layers,
    },
    {
      index: '04',
      title: t.nav.items.terminal.title,
      href: '#terminal',
      description: t.nav.items.terminal.description,
      icon: Terminal,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subtle magnetic hover effect on primary CTA using GSAP
  useEffect(() => {
    const el = ctaRef.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const xTo = gsap.quickTo(el, 'x', { duration: 0.35, ease: 'power3.out' });
      const yTo = gsap.quickTo(el, 'y', { duration: 0.35, ease: 'power3.out' });

      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const relX = e.clientX - (rect.left + rect.width / 2);
        const relY = e.clientY - (rect.top + rect.height / 2);
        xTo(relX * 0.22);
        yTo(relY * 0.22);
      };

      const onLeave = () => {
        xTo(0);
        yTo(0);
      };

      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);

      return () => {
        el.removeEventListener('mousemove', onMove);
        el.removeEventListener('mouseleave', onLeave);
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-2.5' : 'py-4'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 rounded-2xl transition-all duration-300 ${
            scrolled
              ? 'shadow-2xl shadow-black/90 border border-white/[0.1] bg-[#141414]/90 backdrop-blur-2xl'
              : 'bg-[#141414]/60 border border-white/[0.07] backdrop-blur-xl'
          }`}
        >
          {/* Left: Architectural Brand Identity */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3.5 group min-w-0 shrink">
            <BrandLogo className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl group-hover:scale-105 transition-transform shadow-md shadow-black/40 shrink-0" />
            <div className="flex flex-col min-w-0">
              <span className="font-display font-bold text-sm sm:text-base tracking-tight text-white flex items-center gap-1.5 sm:gap-2 leading-none truncate">
                MAMMETBAY
                <span className="hidden sm:inline-block text-[10px] font-mono font-normal px-1.5 py-0.5 rounded bg-white/[0.06] text-[#E4FD97] border border-white/[0.08]">
                  v2.5
                </span>
              </span>
              <span className="hidden sm:block text-[9px] sm:text-[10px] font-mono text-neutral-400 tracking-wider uppercase mt-0.5 sm:max-w-[200px] lg:max-w-none truncate">
                {t.nav.roleSubtitle}
              </span>
            </div>
          </Link>

          {/* Center: Numbered Editorial Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.index}
                  className="relative"
                  onMouseEnter={() => setActiveItem(item.title)}
                  onMouseLeave={() => setActiveItem(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-neutral-300 hover:text-white hover:bg-white/[0.05] transition-all"
                  >
                    <span className="font-mono text-[10px] text-[#E4FD97]/80">{item.index}.</span>
                    <span className="font-sans tracking-tight">{item.title}</span>
                  </Link>

                  {activeItem === item.title && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-64 p-4 rounded-2xl bg-[#1A1A1A] border border-white/[0.12] shadow-2xl shadow-black/90 backdrop-blur-2xl pointer-events-none z-50">
                      <div className="flex items-center justify-between text-xs font-mono text-[#E4FD97] mb-1.5">
                        <span className="flex items-center gap-1.5 font-semibold">
                          <Icon size={13} />
                          {item.title}
                        </span>
                        <span className="text-[10px] text-neutral-500">SEC // {item.index}</span>
                      </div>
                      <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right: Language Switcher, Telemetry & CTA */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* High-Craft Language Switcher Pill Row */}
            <div
              role="group"
              aria-label={t.nav.languageLabel}
              className="flex items-center p-0.5 sm:p-1 rounded-xl bg-white/[0.04] border border-white/[0.08] shrink-0"
            >
              {locales.map((loc) => {
                const isActive = locale === loc.code;
                return (
                  <button
                    key={loc.code}
                    type="button"
                    onClick={() => setLocale(loc.code)}
                    aria-label={`Switch language to ${loc.nativeName}`}
                    aria-pressed={isActive}
                    title={loc.nativeName}
                    className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg font-mono text-[10px] sm:text-[11px] transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#E4FD97] text-[#141414] font-bold shadow-sm'
                        : 'text-neutral-400 hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    {loc.shortLabel}
                  </button>
                );
              })}
            </div>

            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.07] text-[11px] font-mono text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-[#E4FD97] animate-pulse" />
              <span>{t.nav.sysOnline}</span>
            </div>

            <a
              href="https://github.com/Mammetbay"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hidden md:flex p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] text-neutral-300 hover:text-white transition-all border border-white/[0.08]"
            >
              <GithubIcon size={16} />
            </a>

            <Link
              ref={ctaRef}
              href="#contact"
              className="p-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#E4FD97] hover:bg-[#effec1] text-[#141414] text-xs font-display font-bold tracking-tight transition-colors flex items-center gap-1.5 shadow-lg shadow-[#E4FD97]/15 shrink-0"
            >
              <Sparkles size={13} />
              <span className="hidden sm:inline">{t.nav.initiateProject}</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
