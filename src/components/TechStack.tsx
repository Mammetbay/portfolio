'use client';

import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layers, CheckCircle2, Server, BrainIcon } from './Icons';
import { useLanguage } from '@/i18n/LanguageContext';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CATEGORY_ICONS: Record<string, React.FC<{ size?: number; className?: string }>> = {
  'ai-data': BrainIcon,
  'backend-saas': Server,
  'mobile-frontend': Layers,
};

const TechStack: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('ai-data');
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          grid.querySelectorAll('.tech-matrix-card'),
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.05,
            ease: 'power2.out',
          }
        );
      });
    }, grid);

    return () => ctx.revert();
  }, [activeCategory]);

  const categories = t.techStack.categories;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto z-20" id="stack">
      {/* Editorial Asymmetric Header */}
      <div className="pb-6 mb-8 border-b border-white/[0.08] space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#E4FD97] uppercase tracking-widest mb-2.5">
              <Layers size={14} className="shrink-0" />
              <span className="break-words">{t.techStack.eyebrow}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-[-0.03em] leading-tight break-words">
              {t.techStack.title}
            </h2>
          </div>

          <p className="text-neutral-400 text-sm sm:text-base max-w-md leading-relaxed font-sans lg:text-right break-words">
            {t.techStack.description}
          </p>
        </div>

        {/* Full-Width Category Switcher Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-1.5 bg-[#181818] p-1.5 rounded-xl border border-white/[0.08] w-full sm:w-fit">
            {categories.map((cat) => {
              const Icon = CATEGORY_ICONS[cat.id] || Layers;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center justify-center sm:justify-start gap-2 px-3.5 py-2.5 sm:py-2 rounded-lg text-xs font-mono transition-all ${
                    isActive
                      ? 'bg-[#E4FD97] text-[#141414] font-bold shadow-sm'
                      : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <Icon size={13} className="shrink-0" />
                  <span className="truncate">{cat.title}</span>
                </button>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-2 font-mono text-[11px] text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E4FD97]" />
            <span>{t.techStack.verifiedCountLabel}</span>
          </div>
        </div>
      </div>

      {/* Skills Matrix Grid */}
      {categories.map((cat) => {
        if (cat.id !== activeCategory) return null;

        return (
          <div
            key={cat.id}
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {cat.skills.map((skill, index) => (
              <div
                key={index}
                className="tech-matrix-card bento-card rounded-2xl min-w-0 p-5 sm:p-6 flex flex-col justify-between"
              >
                <div className="min-w-0">
                  <div className="flex items-start justify-between gap-2.5 pb-3 mb-3 border-b border-white/[0.07] min-w-0">
                    <h3 className="font-display text-base sm:text-lg font-bold text-white tracking-tight break-words">
                      {skill.name}
                    </h3>
                    <span
                      className={`text-[10px] font-mono px-2.5 py-0.5 rounded border shrink-0 ${
                        skill.highlight
                          ? 'bg-[#E4FD97]/15 text-[#E4FD97] border-[#E4FD97]/30 font-semibold'
                          : 'bg-white/[0.04] text-neutral-300 border-white/[0.08]'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-sans mb-4 break-words">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-1 min-w-0 text-[11px] font-mono">
                  <span className="flex items-center gap-1.5 text-[#E4FD97] shrink-0">
                    <CheckCircle2 size={12} className="shrink-0" />
                    <span>{t.techStack.deployedInLabel}</span>
                  </span>
                  <span className="text-neutral-300 truncate max-w-full sm:max-w-[65%] text-left sm:text-right">
                    {skill.usedIn}
                  </span>
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </section>
  );
};

export default TechStack;
