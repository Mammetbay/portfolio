'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Workflow, CheckCircle2, Cpu, Server, Layers, Terminal } from './Icons';
import { useLanguage } from '@/i18n/LanguageContext';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const stepIconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  '01': Cpu,
  '02': Server,
  '03': Layers,
  '04': Terminal,
};

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.blueprint-card', {
          opacity: 0,
          y: 28,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 82%',
          },
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto z-20"
      id="experience"
    >
      {/* Editorial Asymmetric Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-12 border-b border-white/[0.08]">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#E4FD97] uppercase tracking-widest mb-3">
            <Workflow size={14} className="shrink-0" />
            <span className="break-words">{t.experience.eyebrow}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-[-0.03em] leading-tight break-words">
            {t.experience.title}
          </h2>
        </div>
        <p className="text-neutral-400 text-sm sm:text-base max-w-md leading-relaxed font-sans break-words">
          {t.experience.description}
        </p>
      </div>

      {/* 2x2 Architectural Blueprint Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {t.experience.pillars.map((pillar) => {
          const Icon = stepIconMap[pillar.step] || Cpu;
          const isCrimson = pillar.accent === '#FF2A5F';
          return (
            <div
              key={pillar.step}
              className={`blueprint-card min-w-0 overflow-hidden rounded-2xl ${
                isCrimson ? 'bento-card bento-card-crimson' : 'bento-card'
              } p-5 sm:p-8 flex flex-col justify-between`}
            >
              <div className="min-w-0">
                {/* Top Pillar Header */}
                <div className="flex items-center justify-between gap-3 pb-4 mb-5 border-b border-white/[0.07] min-w-0">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <span
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-display font-extrabold text-sm shrink-0 ${
                        isCrimson
                          ? 'bg-[#FF2A5F]/15 text-[#FF2A5F] border border-[#FF2A5F]/30'
                          : 'bg-[#E4FD97]/15 text-[#E4FD97] border border-[#E4FD97]/30'
                      }`}
                    >
                      {pillar.step}
                    </span>
                    <span className="font-mono text-[10px] sm:text-xs text-neutral-400 tracking-wider break-all sm:break-normal">
                      {pillar.code}
                    </span>
                  </div>
                  <Icon
                    size={18}
                    className={`${isCrimson ? 'text-[#FF2A5F]' : 'text-[#E4FD97]'} shrink-0`}
                  />
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-[-0.02em] break-words">
                  {pillar.title}
                </h3>
                <p
                  className={`font-mono text-xs mt-1 mb-4 break-words ${
                    isCrimson ? 'text-[#FF2A5F]' : 'text-[#E4FD97]'
                  }`}
                >
                  {pillar.subtitle}
                </p>

                <p className="text-neutral-300 text-sm leading-relaxed font-sans mb-5 break-words">
                  {pillar.description}
                </p>

                {/* Dataflow Diagram Strip */}
                <div className="p-3.5 rounded-xl bg-[#111111] border border-white/[0.07] font-mono text-[11px] text-neutral-200 mb-5 overflow-x-auto">
                  <span className="text-[10px] text-neutral-500 uppercase block mb-1">
                    {t.experience.dataflowLabel}
                  </span>
                  <code className="whitespace-pre-wrap sm:whitespace-nowrap break-words">{pillar.diagram}</code>
                </div>
              </div>

              {/* Engineering Principles Checklist */}
              <ul className="space-y-2.5 pt-4 border-t border-white/[0.07] text-xs text-neutral-300 font-mono">
                {pillar.principles.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2
                      size={13}
                      className={`${isCrimson ? 'text-[#FF2A5F]' : 'text-[#E4FD97]'} shrink-0 mt-0.5`}
                    />
                    <span className="break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
