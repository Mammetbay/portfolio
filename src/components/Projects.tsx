'use client';

import React, { useState, useMemo } from 'react';
import FlexCarousel, { type FlexCarouselItem } from './ui/FlexCarousel';
import {
  Code2,
  ArrowUpRight,
  GithubIcon,
  Lock,
  CheckCircle2,
  Cpu,
  Globe,
} from './Icons';
import { useLanguage } from '@/i18n/LanguageContext';
import type { TranslatedProject, ProjectCategoryKey } from '@/i18n/types';

function escapeXml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function wrapSvgLines(text: string, maxChars: number, maxLines: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = '';

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length <= maxChars) {
      current = candidate;
    } else {
      if (current) lines.push(current);
      current = word;
      if (lines.length >= maxLines - 1) break;
    }
  }
  if (current && lines.length < maxLines) {
    lines.push(current);
  }
  return lines;
}

interface PosterLocalizationContext {
  posterTelemetryTitle: string;
  posterRolePrefix: string;
  posterClickHint: string;
}

/**
 * Generates a high-contrast architectural poster card SVG data-URI (800x1040)
 * for WebGL2 <FlexCarousel /> rendering with dynamic multi-language text.
 */
function createProjectPosterDataUri(
  project: TranslatedProject,
  localization: PosterLocalizationContext
): string {
  const accent = project.accentColor === '#FF2A5F' ? '#FF2A5F' : '#E4FD97';
  const secondary = project.accentColor === '#FF2A5F' ? '#E4FD97' : '#FF2A5F';
  const shortTitle = project.title.split('—')[0].trim();
  const subHeadline = project.title.includes('—')
    ? project.title.split('—')[1].trim()
    : project.tagline;

  const titleLines = wrapSvgLines(shortTitle, 20, 2);
  const subLines = wrapSvgLines(subHeadline, 34, 2);
  const metric1 = wrapSvgLines(project.metrics[0] || '', 42, 2);
  const metric2 = wrapSvgLines(project.metrics[1] || '', 42, 2);
  const topTags = project.tags.slice(0, 4);

  // Unique architectural schematic artwork per category
  const schematicSvg =
    project.category === 'Distributed AI & ML'
      ? `
        <g opacity="0.9">
          <circle cx="400" cy="430" r="108" fill="none" stroke="${accent}" stroke-width="1.5" stroke-opacity="0.35" stroke-dasharray="6 6" />
          <circle cx="400" cy="430" r="72" fill="none" stroke="${accent}" stroke-width="2" stroke-opacity="0.6" />
          <circle cx="400" cy="430" r="28" fill="${accent}" fill-opacity="0.18" stroke="${accent}" stroke-width="2" />
          <path d="M 140 430 Q 205 350 270 430 T 400 430 T 530 430 T 660 430" fill="none" stroke="${accent}" stroke-width="3" stroke-opacity="0.85" />
          <path d="M 140 430 Q 205 500 270 430 T 400 430 T 530 430 T 660 430" fill="none" stroke="${secondary}" stroke-width="2" stroke-opacity="0.55" />
          <circle cx="220" cy="392" r="6" fill="${accent}" />
          <circle cx="310" cy="458" r="6" fill="${secondary}" />
          <circle cx="490" cy="396" r="6" fill="${accent}" />
          <circle cx="585" cy="452" r="6" fill="${secondary}" />
        </g>
      `
      : project.category === 'Mobile & Cross-Platform'
      ? `
        <g opacity="0.92">
          <rect x="315" y="325" width="170" height="210" rx="22" fill="#141414" stroke="${accent}" stroke-width="2.5" />
          <rect x="365" y="340" width="70" height="6" rx="3" fill="${accent}" fill-opacity="0.5" />
          <rect x="335" y="362" width="130" height="52" rx="10" fill="${accent}" fill-opacity="0.12" stroke="${accent}" stroke-width="1.2" stroke-opacity="0.45" />
          <rect x="335" y="426" width="60" height="44" rx="8" fill="#1F1F1F" stroke="#ffffff" stroke-opacity="0.2" />
          <rect x="405" y="426" width="60" height="44" rx="8" fill="#1F1F1F" stroke="${secondary}" stroke-opacity="0.5" />
          <path d="M 175 395 L 295 395" stroke="${accent}" stroke-width="2" stroke-dasharray="5 5" />
          <path d="M 505 455 L 625 455" stroke="${secondary}" stroke-width="2" stroke-dasharray="5 5" />
          <circle cx="175" cy="395" r="8" fill="${accent}" />
          <circle cx="625" cy="455" r="8" fill="${secondary}" />
        </g>
      `
      : `
        <g opacity="0.92">
          <rect x="210" y="335" width="380" height="50" rx="10" fill="#151515" stroke="${accent}" stroke-width="2" />
          <rect x="210" y="405" width="180" height="50" rx="10" fill="#151515" stroke="${accent}" stroke-width="1.5" stroke-opacity="0.65" />
          <rect x="410" y="405" width="180" height="50" rx="10" fill="#151515" stroke="${secondary}" stroke-width="1.5" stroke-opacity="0.65" />
          <rect x="210" y="475" width="380" height="50" rx="10" fill="${accent}" fill-opacity="0.12" stroke="${accent}" stroke-width="1.8" />
          <line x1="300" y1="385" x2="300" y2="405" stroke="${accent}" stroke-width="2" />
          <line x1="500" y1="385" x2="500" y2="405" stroke="${secondary}" stroke-width="2" />
          <line x1="300" y1="455" x2="300" y2="475" stroke="${accent}" stroke-width="2" />
          <line x1="500" y1="455" x2="500" y2="475" stroke="${secondary}" stroke-width="2" />
        </g>
      `;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1040" width="800" height="1040">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#1D1D1D" />
        <stop offset="50%" stop-color="#131313" />
        <stop offset="100%" stop-color="#0B0B0B" />
      </linearGradient>
      <radialGradient id="glow" cx="0.8" cy="0.18" r="0.65">
        <stop offset="0%" stop-color="${accent}" stop-opacity="0.22" />
        <stop offset="60%" stop-color="${accent}" stop-opacity="0.04" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0" />
      </radialGradient>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" stroke-width="1" stroke-opacity="0.04" />
      </pattern>
    </defs>

    <!-- Base Card Surface -->
    <rect width="800" height="1040" rx="36" fill="url(#bg)" />
    <rect width="800" height="1040" rx="36" fill="url(#grid)" />
    <rect width="800" height="1040" rx="36" fill="url(#glow)" />
    <rect x="3" y="3" width="794" height="1034" rx="34" fill="none" stroke="${accent}" stroke-width="2" stroke-opacity="0.38" />

    <!-- Top Telemetry Header -->
    <rect x="48" y="46" width="136" height="42" rx="10" fill="${accent}" fill-opacity="0.14" stroke="${accent}" stroke-width="1.5" stroke-opacity="0.55" />
    <text x="116" y="73" text-anchor="middle" fill="${accent}" font-family="monospace" font-size="20" font-weight="700" letter-spacing="2">SYS.${escapeXml(project.index)}</text>

    <rect x="460" y="46" width="292" height="42" rx="10" fill="#181818" stroke="#ffffff" stroke-width="1" stroke-opacity="0.15" />
    <circle cx="484" cy="67" r="5" fill="${accent}" />
    <text x="500" y="72" fill="#e5e5e5" font-family="monospace" font-size="14" font-weight="600" letter-spacing="1">${escapeXml(project.badgeLabel.toUpperCase())}</text>

    <!-- Title & Subtitle Block -->
    <text x="48" y="154" fill="#ffffff" font-family="sans-serif" font-size="44" font-weight="800" letter-spacing="-1">${escapeXml(titleLines[0] || '')}</text>
    ${
      titleLines[1]
        ? `<text x="48" y="204" fill="#ffffff" font-family="sans-serif" font-size="44" font-weight="800" letter-spacing="-1">${escapeXml(titleLines[1])}</text>`
        : ''
    }

    <text x="48" y="${titleLines[1] ? 246 : 204}" fill="${accent}" font-family="monospace" font-size="18" font-weight="600">${escapeXml(subLines[0] || '')}</text>
    ${
      subLines[1]
        ? `<text x="48" y="${titleLines[1] ? 272 : 230}" fill="#a3a3a3" font-family="monospace" font-size="17" font-weight="500">${escapeXml(subLines[1])}</text>`
        : ''
    }

    <!-- Center Architectural Schematic Viewport -->
    <rect x="48" y="305" width="704" height="250" rx="22" fill="#0E0E0E" fill-opacity="0.85" stroke="#ffffff" stroke-width="1.2" stroke-opacity="0.1" />
    <text x="72" y="336" fill="#737373" font-family="monospace" font-size="13" letter-spacing="2">ARCH_SCHEMATIC // ${escapeXml((project.categoryLabel || project.category).toUpperCase())}</text>
    ${schematicSvg}

    <!-- Key Verified Engineering Metrics -->
    <text x="48" y="600" fill="#a3a3a3" font-family="monospace" font-size="14" font-weight="700" letter-spacing="2">${escapeXml(localization.posterTelemetryTitle)}</text>

    <rect x="48" y="618" width="704" height="96" rx="16" fill="#171717" stroke="#ffffff" stroke-width="1" stroke-opacity="0.1" />
    <circle cx="78" cy="654" r="6" fill="${accent}" />
    <text x="98" y="660" fill="#f5f5f5" font-family="sans-serif" font-size="20" font-weight="600">${escapeXml(metric1[0] || '')}</text>
    ${
      metric1[1]
        ? `<text x="98" y="688" fill="#bdbdbd" font-family="sans-serif" font-size="18" font-weight="500">${escapeXml(metric1[1])}</text>`
        : ''
    }

    <rect x="48" y="730" width="704" height="96" rx="16" fill="#171717" stroke="#ffffff" stroke-width="1" stroke-opacity="0.1" />
    <circle cx="78" cy="766" r="6" fill="${secondary}" />
    <text x="98" y="772" fill="#f5f5f5" font-family="sans-serif" font-size="20" font-weight="600">${escapeXml(metric2[0] || '')}</text>
    ${
      metric2[1]
        ? `<text x="98" y="800" fill="#bdbdbd" font-family="sans-serif" font-size="18" font-weight="500">${escapeXml(metric2[1])}</text>`
        : ''
    }

    <!-- Tech Stack Footer Pills -->
    <g transform="translate(48, 862)">
      ${topTags
        .map((tag, idx) => {
          const xOffset = idx * 174;
          const label = tag.length > 16 ? `${tag.slice(0, 15)}…` : tag;
          return `
            <rect x="${xOffset}" y="0" width="162" height="44" rx="10" fill="#1E1E1E" stroke="${accent}" stroke-width="1" stroke-opacity="0.35" />
            <text x="${xOffset + 81}" y="28" text-anchor="middle" fill="#e5e5e5" font-family="monospace" font-size="14" font-weight="600">${escapeXml(label)}</text>
          `;
        })
        .join('')}
    </g>

    <!-- Bottom Role Bar -->
    <line x1="48" y1="942" x2="752" y2="942" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1" />
    <text x="48" y="982" fill="#8a8a8a" font-family="monospace" font-size="15">${escapeXml(localization.posterRolePrefix)} <tspan fill="#ffffff" font-weight="700">${escapeXml(project.role)}</tspan></text>
    <text x="752" y="982" text-anchor="end" fill="${accent}" font-family="monospace" font-size="14" font-weight="700">${escapeXml(localization.posterClickHint)}</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

type CategoryFilter = 'All' | ProjectCategoryKey;
type LensPreset = 'liquid' | 'vortex' | 'arch' | 'ribbon';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [activePreset, setActivePreset] = useState<LensPreset>('liquid');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const { t } = useLanguage();

  const projectsList = t.projects.items;

  const categoryFilters: { key: CategoryFilter; label: string }[] = useMemo(
    () => [
      { key: 'All', label: t.projects.categories.all },
      { key: 'Distributed AI & ML', label: t.projects.categories.aiMl },
      { key: 'Mobile & Cross-Platform', label: t.projects.categories.mobile },
      { key: 'B2B SaaS & Systems', label: t.projects.categories.saas },
    ],
    [t.projects.categories]
  );

  const lensPresets: { id: LensPreset; label: string }[] = useMemo(
    () => [
      { id: 'liquid', label: t.projects.presets.liquid },
      { id: 'vortex', label: t.projects.presets.vortex },
      { id: 'arch', label: t.projects.presets.arch },
      { id: 'ribbon', label: t.projects.presets.ribbon },
    ],
    [t.projects.presets]
  );

  const filteredProjects = useMemo(
    () =>
      activeCategory === 'All'
        ? projectsList
        : projectsList.filter((p) => p.category === activeCategory),
    [activeCategory, projectsList]
  );

  const carouselItems: FlexCarouselItem[] = useMemo(
    () =>
      filteredProjects.map((project) => ({
        src: createProjectPosterDataUri(project, {
          posterTelemetryTitle: t.projects.posterTelemetryTitle,
          posterRolePrefix: t.projects.posterRolePrefix,
          posterClickHint: t.projects.posterClickHint,
        }),
        alt: `${project.title} — ${project.tagline}`,
        title: `SYS.${project.index} // ${project.title.split('—')[0].trim()}`,
        subtitle: project.tagline,
      })),
    [filteredProjects, t.projects.posterTelemetryTitle, t.projects.posterRolePrefix, t.projects.posterClickHint]
  );

  const safeIndex =
    selectedIndex >= 0 && selectedIndex < filteredProjects.length ? selectedIndex : 0;
  const activeProject = filteredProjects[safeIndex] || filteredProjects[0];

  const handleCategoryChange = (cat: CategoryFilter) => {
    setActiveCategory(cat);
    setSelectedIndex(0);
  };

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto z-20"
      id="projects"
    >
      {/* Editorial Asymmetric Section Header */}
      <div className="pb-6 mb-6 border-b border-white/[0.08] space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#E4FD97] uppercase tracking-widest mb-2.5">
              <Code2 size={14} className="shrink-0" />
              <span className="break-words">
                {t.projects.eyebrow} ({projectsList.length} {t.projects.systemsWord})
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-5xl font-extrabold text-white tracking-[-0.03em] leading-tight break-words">
              {t.projects.title}
            </h2>
          </div>

          <p className="text-neutral-400 text-sm sm:text-base max-w-md leading-relaxed font-sans lg:text-right break-words">
            {t.projects.descriptionPrefix}
            <span className="text-[#E4FD97] font-mono text-xs">FlexCarousel</span>
            {t.projects.descriptionSuffix}
          </p>
        </div>

        {/* Category Filter Controls & Optics Selector Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
          <div className="flex flex-wrap items-center gap-1.5 bg-[#181818] p-1.5 rounded-xl border border-white/[0.08] w-full sm:w-fit">
            {categoryFilters.map((cat) => {
              const active = activeCategory === cat.key;
              const count =
                cat.key === 'All'
                  ? projectsList.length
                  : projectsList.filter((p) => p.category === cat.key).length;
              return (
                <button
                  key={cat.key}
                  onClick={() => handleCategoryChange(cat.key)}
                  className={`px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg text-[11px] sm:text-xs font-mono transition-all flex items-center gap-1.5 ${
                    active
                      ? 'bg-[#E4FD97] text-[#141414] font-bold shadow-sm'
                      : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded ${
                      active
                        ? 'bg-[#141414]/15 text-[#141414]'
                        : 'bg-white/[0.06] text-neutral-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Lens Preset Selector */}
          <div className="flex flex-wrap items-center gap-1 bg-[#161616] p-1.5 rounded-xl border border-white/[0.08] font-mono text-[10px] sm:text-[11px] w-full sm:w-fit justify-between sm:justify-start">
            <span className="px-2 text-neutral-500 hidden sm:inline">{t.projects.opticsLabel}</span>
            {lensPresets.map((preset) => (
              <button
                key={preset.id}
                onClick={() => setActivePreset(preset.id)}
                className={`px-2 sm:px-2.5 py-1 rounded-lg transition-all ${
                  activePreset === preset.id
                    ? 'bg-white/[0.12] text-[#E4FD97] font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Quick System Jump Strip */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2 mb-4 w-full max-w-full">
        {filteredProjects.map((proj, idx) => {
          const isCurrent = idx === safeIndex;
          return (
            <button
              key={proj.id}
              onClick={() => setSelectedIndex(idx)}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all shrink-0 border whitespace-nowrap ${
                isCurrent
                  ? 'bg-[#E4FD97] text-[#141414] border-[#E4FD97] font-bold shadow-md shadow-[#E4FD97]/15'
                  : 'bg-[#181818] text-neutral-400 border-white/[0.07] hover:text-white hover:border-white/20'
              }`}
            >
              SYS.{proj.index} — {proj.title.split('—')[0].trim()}
            </button>
          );
        })}
      </div>

      {/* React Bits <FlexCarousel /> WebGL2 Interactive Stage */}
      <div className="relative w-full h-[430px] sm:h-[560px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.09] bg-[#101010] shadow-2xl shadow-black/90">
        {/* Subtle Ambient Backdrop inside Carousel Stage */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(228,253,151,0.08)_0%,rgba(20,20,20,0)_68%)]"
        />

        <FlexCarousel
          items={carouselItems}
          preset={activePreset}
          intro="rise"
          cardHeight={0.62}
          gap={16}
          radius={20}
          squeeze={0.2}
          focusOnClick
          captions
          captureWheel={false}
          activeIndex={safeIndex}
          onChange={(index) => setSelectedIndex(index)}
        />

        {/* Prev / Next Navigation Overlay Buttons */}
        <div className="pointer-events-none absolute inset-x-3 sm:inset-x-4 top-3 sm:top-4 flex items-center justify-between z-10">
          <div className="pointer-events-auto hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#141414]/85 border border-white/[0.1] backdrop-blur-md font-mono text-[11px] text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-[#E4FD97]" />
            <span>{t.projects.dragHint}</span>
          </div>

          <div className="pointer-events-auto w-full md:w-auto flex items-center justify-between md:justify-end gap-2">
            <button
              type="button"
              onClick={() =>
                setSelectedIndex(
                  (safeIndex - 1 + filteredProjects.length) % filteredProjects.length
                )
              }
              className="px-3 py-1.5 rounded-xl bg-[#141414]/85 hover:bg-[#E4FD97] text-neutral-200 hover:text-[#141414] border border-white/[0.12] font-mono text-[11px] sm:text-xs font-bold transition-all backdrop-blur-md"
              aria-label="Previous system"
            >
              {t.projects.prevBtn}
            </button>
            <button
              type="button"
              onClick={() => setSelectedIndex((safeIndex + 1) % filteredProjects.length)}
              className="px-3 py-1.5 rounded-xl bg-[#141414]/85 hover:bg-[#E4FD97] text-neutral-200 hover:text-[#141414] border border-white/[0.12] font-mono text-[11px] sm:text-xs font-bold transition-all backdrop-blur-md"
              aria-label="Next system"
            >
              {t.projects.nextBtn}
            </button>
          </div>
        </div>
      </div>

      {/* Synchronized Active System Architecture Specification Deck */}
      {activeProject && (
        <div className="mt-6 bento-card rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 border border-white/[0.1] bg-[#161616]/95 shadow-2xl relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[120px] opacity-20"
            style={{ background: activeProject.accentColor }}
          />

          {/* Top Coordinate & Status Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-white/[0.08]">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 max-w-full">
              <span className="px-3 py-1 rounded-lg bg-[#E4FD97]/15 text-[#E4FD97] border border-[#E4FD97]/35 font-mono text-xs font-bold break-words">
                SYS.{activeProject.index} {'//'} {t.projects.activeSpecLabel}
              </span>
              <span className="font-mono text-xs text-neutral-400 break-words">
                {activeProject.categoryLabel || activeProject.category}
              </span>
              <span className="text-neutral-600 hidden sm:inline">•</span>
              <span className="font-mono text-xs text-white font-semibold break-words">
                {activeProject.role}
              </span>
            </div>

            {/* Action / Deployment Links */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 max-w-full">
              {activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-[#E4FD97] hover:bg-[#effec1] text-[#141414] font-display text-xs font-bold transition-all shadow-lg shadow-[#E4FD97]/15 max-w-full break-words whitespace-normal text-left"
                >
                  <Globe size={14} className="shrink-0" />
                  <span className="break-words">{activeProject.liveLabel || t.projects.liveProductionDefault}</span>
                  <ArrowUpRight size={14} className="shrink-0" />
                </a>
              )}

              {activeProject.badgeType === 'confidential-rd' ? (
                <span className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-[#FF2A5F]/15 text-[#FF2A5F] border border-[#FF2A5F]/35 font-mono text-xs font-semibold max-w-full break-words whitespace-normal text-left">
                  <Lock size={13} className="shrink-0" />
                  <span className="break-words">{t.projects.privateRdLabel}</span>
                </span>
              ) : (
                activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-neutral-200 hover:text-white border border-white/[0.1] font-mono text-xs transition-all max-w-full break-words whitespace-normal text-left"
                  >
                    <GithubIcon size={14} className="shrink-0" />
                    <span className="break-words">
                      {activeProject.githubUrl.includes('waas-api')
                        ? t.projects.githubWaas
                        : t.projects.githubProfile}
                    </span>
                    <ArrowUpRight size={13} className="shrink-0" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* 12-Col Specification Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Left 7 Cols: Title, Description & Architecture Flow */}
            <div className="lg:col-span-7 min-w-0 w-full space-y-4 sm:space-y-5">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight break-words">
                  {activeProject.title}
                </h3>
                <p className="font-mono text-xs sm:text-sm text-[#E4FD97] mt-1.5 break-words">
                  {activeProject.tagline}
                </p>
              </div>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-sans break-words">
                {activeProject.desc}
              </p>

              {activeProject.architectureNote && (
                <div className="p-3.5 sm:p-4 rounded-2xl bg-[#111111] border border-white/[0.08] font-mono text-xs text-neutral-300 leading-relaxed break-words overflow-x-auto">
                  <div className="flex items-center gap-1.5 text-[#E4FD97] text-[10px] uppercase tracking-wider mb-1.5 font-bold">
                    <Cpu size={13} className="shrink-0" />
                    <span>{t.projects.archFlowLabel}</span>
                  </div>
                  {activeProject.architectureNote}
                </div>
              )}

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                {activeProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[10px] sm:text-[11px] font-mono bg-white/[0.04] text-neutral-200 border border-white/[0.08] break-words"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right 5 Cols: Verified Engineering Telemetry Cards */}
            <div className="lg:col-span-5 min-w-0 w-full bg-[#111111] rounded-2xl p-4 sm:p-5 border border-white/[0.08]">
              <div className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 mb-3.5 flex items-center justify-between">
                <span>{t.projects.verifiedMetricsTitle}</span>
                <span className="text-[#E4FD97]">SYS.{activeProject.index}</span>
              </div>
              <ul className="space-y-2 sm:space-y-2.5">
                {activeProject.metrics.map((metric, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl bg-[#181818] border border-white/[0.06] text-xs sm:text-sm text-neutral-200 leading-snug break-words"
                  >
                    <CheckCircle2
                      size={15}
                      className="text-[#E4FD97] shrink-0 mt-0.5"
                    />
                    <span className="break-words">{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
