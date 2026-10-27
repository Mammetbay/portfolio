'use client';

import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GradientASCII from './ui/GradientASCII';
import {
  ArrowUpRight,
  Terminal,
  Cpu,
  Activity,
  GithubIcon,
  CheckCircle2,
} from './Icons';
import { useLanguage } from '@/i18n/LanguageContext';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const HERO_ASCII_COLORS = ['#1b260c', '#4f6b18', '#9ec738', '#E4FD97', '#f7ffe0'];

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const primaryBtnRef = useRef<HTMLAnchorElement>(null);
  const consoleRef = useRef<HTMLDivElement>(null);
  const [pulseTick, setPulseTick] = useState<number>(0);
  const { t } = useLanguage();

  // Live telemetry subtle pulse
  useEffect(() => {
    const timer = setInterval(() => {
      setPulseTick((prev) => (prev + 1) % 100);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  // GSAP Entrance & ScrollTrigger Choreography
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Staggered editorial entrance
        gsap.from('.hero-reveal', {
          opacity: 0,
          y: 28,
          duration: 0.75,
          stagger: 0.09,
          ease: 'power3.out',
        });

        // Metric counter strip reveal
        gsap.from('.hero-metric-card', {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.07,
          delay: 0.35,
          ease: 'power2.out',
        });

        // Console 3D perspective lift on scroll
        if (consoleRef.current) {
          gsap.fromTo(
            consoleRef.current,
            { y: 18, scale: 0.985 },
            {
              y: -12,
              scale: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: consoleRef.current,
                start: 'top 85%',
                end: 'bottom 30%',
                scrub: 0.6,
              },
            }
          );
        }

        // Magnetic primary CTA
        const btn = primaryBtnRef.current;
        if (btn) {
          const xTo = gsap.quickTo(btn, 'x', { duration: 0.35, ease: 'power3.out' });
          const yTo = gsap.quickTo(btn, 'y', { duration: 0.35, ease: 'power3.out' });

          const onMove = (e: MouseEvent) => {
            const rect = btn.getBoundingClientRect();
            const relX = e.clientX - (rect.left + rect.width / 2);
            const relY = e.clientY - (rect.top + rect.height / 2);
            xTo(relX * 0.2);
            yTo(relY * 0.2);
          };
          const onLeave = () => {
            xTo(0);
            yTo(0);
          };

          btn.addEventListener('mousemove', onMove);
          btn.addEventListener('mouseleave', onLeave);
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about-me"
      className="relative w-full overflow-hidden border-b border-white/[0.07]"
    >
      {/* Interactive React Bits <GradientASCII /> WebGL2 Background */}
      <div className="absolute inset-0 z-0">
        <GradientASCII
          colors={HERO_ASCII_COLORS}
          shape="horizon"
          characters=" =+xX0S8#@"
          cellSize={18}
          density={0.82}
          glyphOpacity={0.9}
          gradientOpacity={0.85}
          glow={0.35}
          flicker={0.2}
          softness={0.5}
          flow={0.55}
          speed={0.95}
          grain={0.08}
          mouseInteraction={true}
          scrambleRadius={0.12}
          clickEffect="wave"
          intro={true}
          fontFamily='"JetBrains Mono", "Geist Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'
        />
        {/* Subtle bottom transition into #141414 page background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#141414]/25 via-transparent to-[#141414]"
        />
      </div>

      {/* Foreground Content Container */}
      <div className="relative z-10 pt-24 sm:pt-36 pb-12 sm:pb-24 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
        {/* Top Coordinate Eyebrow Bar */}
        <div className="hero-reveal flex flex-wrap items-center justify-between gap-2.5 pb-4 sm:pb-5 mb-6 sm:mb-8 border-b border-white/[0.12] font-mono text-[10px] sm:text-[11px]">
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 max-w-full">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-[#141414]/85 text-[#E4FD97] border border-[#E4FD97]/35 font-semibold backdrop-blur-md shadow-lg shadow-black/50 break-words">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E4FD97] animate-ping shrink-0" />
              <span>{t.hero.eyebrowSys}</span>
            </span>
            <span className="hidden md:inline-flex items-center px-3.5 py-1.5 rounded-lg bg-[#141414]/85 text-white border border-white/[0.14] font-medium backdrop-blur-md shadow-lg shadow-black/50">
              {t.hero.eyebrowIdentity}
            </span>
          </div>
          <div className="flex items-center">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg bg-[#141414]/85 text-[#E4FD97] border border-[#E4FD97]/30 font-semibold backdrop-blur-md shadow-lg shadow-black/50 break-words">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E4FD97] shrink-0" />
              <span>{t.hero.eyebrowAvailable}</span>
            </span>
          </div>
        </div>

        {/* Main Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left Column (7 cols): Personal Identity & Architectural Manifesto */}
          <div className="lg:col-span-7 min-w-0 w-full flex flex-col items-start text-left">
            <h1 className="hero-reveal font-display text-3xl sm:text-5xl xl:text-[4.25rem] font-extrabold tracking-[-0.035em] text-white leading-[1.04] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] break-words w-full">
              Mammetbay{' '}
              <span className="text-[#E4FD97] underline decoration-[#E4FD97]/35 decoration-2 underline-offset-8">
                Mammetbayev
              </span>
              <span className="block text-xl sm:text-3xl xl:text-[2.35rem] text-neutral-100 font-bold mt-3 sm:mt-4 tracking-[-0.025em] leading-[1.18] break-words">
                {t.hero.roleHeadline}
              </span>
            </h1>

            <p className="hero-reveal mt-5 sm:mt-6 text-sm sm:text-lg text-neutral-200 max-w-2xl leading-relaxed font-sans font-normal drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] break-words">
              {t.hero.leadParagraphPrefix}
              <strong className="text-white font-semibold">
                {t.hero.leadHighlight1}
              </strong>
              {t.hero.leadParagraphMiddle1}
              <strong className="text-white font-semibold">{t.hero.leadHighlight2}</strong>
              {t.hero.leadParagraphMiddle2}
              <strong className="text-white font-semibold">
                {t.hero.leadHighlight3}
              </strong>
              {t.hero.leadParagraphSuffix}
            </p>

            {/* Action Row */}
            <div className="hero-reveal flex flex-wrap items-center gap-2.5 sm:gap-3.5 mt-6 sm:mt-8 w-full">
              <a
                ref={primaryBtnRef}
                href="#projects"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#E4FD97] hover:bg-[#effec1] text-[#141414] font-display font-bold text-sm tracking-tight transition-colors flex items-center justify-center text-center gap-2.5 shadow-xl shadow-[#E4FD97]/20"
              >
                <span>{t.hero.ctaExplore}</span>
                <ArrowUpRight size={16} />
              </a>

              <a
                href="#terminal"
                className="flex-1 sm:flex-initial justify-center px-4 sm:px-5 py-3.5 rounded-xl bg-[#141414]/85 hover:bg-[#1F1F1F] text-neutral-100 border border-white/[0.15] font-mono text-xs sm:text-sm transition-all flex items-center gap-2 backdrop-blur-md"
              >
                <Terminal size={15} className="text-[#E4FD97] shrink-0" />
                <span className="truncate">{t.hero.ctaCli}</span>
              </a>

              <a
                href="https://github.com/Mammetbay"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial justify-center px-4 py-3.5 rounded-xl bg-[#141414]/75 hover:bg-white/[0.1] text-neutral-200 hover:text-white border border-white/[0.12] font-mono text-xs transition-all flex items-center gap-2 backdrop-blur-md"
              >
                <GithubIcon size={15} className="shrink-0" />
                <span>@Mammetbay</span>
              </a>
            </div>

            {/* 4 High-Level Impact Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 w-full mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/[0.12]">
              <div className="hero-metric-card min-w-0 overflow-hidden p-3 sm:p-3.5 rounded-xl bg-[#141414]/85 border border-white/[0.1] backdrop-blur-md">
                <div className="font-mono text-[9px] sm:text-[10px] text-neutral-400 uppercase truncate">{t.hero.metrics.systemsLabel}</div>
                <div className="font-display text-lg sm:text-2xl font-extrabold text-[#E4FD97] mt-1 break-words leading-tight">{t.hero.metrics.systemsValue}</div>
                <div className="font-mono text-[10px] sm:text-[11px] text-neutral-300 mt-0.5 truncate">{t.hero.metrics.systemsSub}</div>
              </div>

              <div className="hero-metric-card min-w-0 overflow-hidden p-3 sm:p-3.5 rounded-xl bg-[#141414]/85 border border-white/[0.1] backdrop-blur-md">
                <div className="font-mono text-[9px] sm:text-[10px] text-neutral-400 uppercase truncate">{t.hero.metrics.mobileLabel}</div>
                <div className="font-display text-lg sm:text-2xl font-extrabold text-white mt-1 break-words leading-tight">{t.hero.metrics.mobileValue}</div>
                <div className="font-mono text-[10px] sm:text-[11px] text-neutral-300 mt-0.5 truncate">{t.hero.metrics.mobileSub}</div>
              </div>

              <div className="hero-metric-card min-w-0 overflow-hidden p-3 sm:p-3.5 rounded-xl bg-[#141414]/85 border border-white/[0.1] backdrop-blur-md">
                <div className="font-mono text-[9px] sm:text-[10px] text-neutral-400 uppercase truncate">{t.hero.metrics.lifecycleLabel}</div>
                <div className="font-display text-lg sm:text-2xl font-extrabold text-white mt-1 break-words leading-tight">{t.hero.metrics.lifecycleValue}</div>
                <div className="font-mono text-[10px] sm:text-[11px] text-neutral-300 mt-0.5 truncate">{t.hero.metrics.lifecycleSub}</div>
              </div>

              <div className="hero-metric-card min-w-0 overflow-hidden p-3 sm:p-3.5 rounded-xl bg-[#141414]/85 border border-white/[0.1] backdrop-blur-md">
                <div className="font-mono text-[9px] sm:text-[10px] text-neutral-400 uppercase truncate">{t.hero.metrics.rdLabel}</div>
                <div className="font-display text-lg sm:text-2xl font-extrabold text-[#FF2A5F] mt-1 break-words leading-tight">{t.hero.metrics.rdValue}</div>
                <div className="font-mono text-[10px] sm:text-[11px] text-neutral-300 mt-0.5 truncate">{t.hero.metrics.rdSub}</div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Architect Identity & Engineering Focus Dossier */}
          <div ref={consoleRef} className="lg:col-span-5 min-w-0 w-full">
            <div className="bento-card rounded-2xl overflow-hidden shadow-2xl shadow-black/95 border border-white/[0.12] bg-[#141414]/90 backdrop-blur-xl">
              {/* Dossier Header Bar */}
              <div className="px-4 py-3 sm:py-3.5 bg-[#161616]/95 border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF2A5F]/80 shrink-0" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E4FD97]/80 shrink-0" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/25 shrink-0" />
                  <span className="ml-1 sm:ml-2 font-mono text-[11px] text-neutral-300 font-semibold flex items-center gap-1.5 min-w-0 truncate">
                    <Cpu size={13} className="text-[#E4FD97] shrink-0" />
                    <span className="truncate">{t.hero.dossier.headerTitle}</span>
                  </span>
                </div>

                <span className="px-2.5 py-1 rounded-md bg-[#E4FD97]/15 text-[#E4FD97] font-mono text-[10px] font-bold border border-[#E4FD97]/30 shrink-0">
                  {t.hero.dossier.verifiedBadge}
                </span>
              </div>

              {/* Dossier Body */}
              <div className="p-4 sm:p-6 bg-dot-matrix min-h-[370px] flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5">
                    <div className="min-w-0">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#E4FD97] block">
                        {t.hero.dossier.identityLabel}
                      </span>
                      <h2 className="font-display text-lg sm:text-xl font-bold text-white mt-0.5 truncate">
                        Mammetbay Mammetbayev
                      </h2>
                      <p className="font-mono text-[10px] sm:text-[11px] text-neutral-400 mt-0.5 break-words">
                        {t.hero.dossier.roleSub}
                      </p>
                    </div>
                  </div>

                  {/* Core Focus Areas */}
                  <div className="space-y-2.5 font-mono text-xs">
                    <div className="p-3 rounded-xl bg-[#141414]/95 border border-white/[0.08]">
                      <div className="flex flex-wrap items-start justify-between gap-1 text-[#E4FD97] mb-1">
                        <span className="font-bold flex items-center gap-1.5 break-words">
                          <CheckCircle2 size={13} className="text-[#E4FD97] shrink-0 mt-0.5" />
                          <span>{t.hero.dossier.focus1Title}</span>
                        </span>
                        <span className="text-[10px] text-neutral-400 shrink-0">{t.hero.dossier.focus1Tag}</span>
                      </div>
                      <p className="text-[11px] text-neutral-300 leading-relaxed font-sans break-words">
                        {t.hero.dossier.focus1Desc}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#141414]/95 border border-white/[0.08]">
                      <div className="flex flex-wrap items-start justify-between gap-1 text-white mb-1">
                        <span className="font-bold flex items-center gap-1.5 break-words">
                          <CheckCircle2 size={13} className="text-[#E4FD97] shrink-0 mt-0.5" />
                          <span>{t.hero.dossier.focus2Title}</span>
                        </span>
                        <span className="text-[10px] text-[#E4FD97] shrink-0">{t.hero.dossier.focus2Tag}</span>
                      </div>
                      <p className="text-[11px] text-neutral-300 leading-relaxed font-sans break-words">
                        {t.hero.dossier.focus2Desc}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#141414]/95 border border-white/[0.08]">
                      <div className="flex flex-wrap items-start justify-between gap-1 text-[#FF2A5F] mb-1">
                        <span className="font-bold flex items-center gap-1.5 break-words">
                          <CheckCircle2 size={13} className="text-[#FF2A5F] shrink-0 mt-0.5" />
                          <span>{t.hero.dossier.focus3Title}</span>
                        </span>
                        <span className="text-[10px] text-neutral-400 shrink-0">{t.hero.dossier.focus3Tag}</span>
                      </div>
                      <p className="text-[11px] text-neutral-300 leading-relaxed font-sans break-words">
                        {t.hero.dossier.focus3Desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Dossier Footer */}
                <div className="mt-4 pt-3 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <Activity size={12} className="text-[#E4FD97] shrink-0" />
                    <span>{t.hero.dossier.systemsOnline} ({98 + (pulseTick % 2)}.9% SYNC)</span>
                  </span>
                  <a
                    href="#projects"
                    className="text-[#E4FD97] hover:underline flex items-center gap-1 font-semibold shrink-0"
                  >
                    <span>{t.hero.dossier.browseAll}</span>
                    <ArrowUpRight size={11} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
