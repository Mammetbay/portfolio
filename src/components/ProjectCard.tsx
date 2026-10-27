'use client';

import React from 'react';
import { ArrowUpRight, ExternalLink, Sparkles, CheckCircle2, GithubIcon } from './Icons';

export type ProjectBadgeType =
  | 'open-source'
  | 'live-production'
  | 'confidential-rd'
  | 'private-commercial';

export interface ProjectData {
  id: string;
  index: string;
  title: string;
  tagline: string;
  role: string;
  category: 'Distributed AI & ML' | 'Mobile & Cross-Platform' | 'B2B SaaS & Systems';
  categoryLabel?: string;
  desc: string;
  architectureNote?: string;
  tags: string[];
  metrics: string[];
  accentColor: '#E4FD97' | '#FF2A5F';
  bentoSpan: string;
  badgeType: ProjectBadgeType;
  badgeLabel: string;
  githubUrl?: string;
  liveUrl?: string;
  liveLabel?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isCrimson = project.accentColor === '#FF2A5F';

  return (
    <article
      className={`project-bento-item ${project.bentoSpan} group relative rounded-2xl ${
        isCrimson ? 'bento-card bento-card-crimson' : 'bento-card'
      } p-6 sm:p-8 flex flex-col justify-between overflow-hidden`}
    >
      {/* Top Architectural Coordinate & Status Bar */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-white/[0.07]">
          <div className="flex items-center gap-2.5">
            <span
              className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                isCrimson
                  ? 'bg-[#FF2A5F]/15 text-[#FF2A5F] border border-[#FF2A5F]/30'
                  : 'bg-[#E4FD97]/15 text-[#E4FD97] border border-[#E4FD97]/30'
              }`}
            >
              SYS.{project.index}
            </span>
            <span className="font-mono text-[11px] text-neutral-400 uppercase tracking-wider">
              {project.categoryLabel || project.category}
            </span>
          </div>

          {/* Status Badge */}
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider border ${
              project.badgeType === 'confidential-rd'
                ? 'bg-[#FF2A5F]/10 text-[#FF2A5F] border-[#FF2A5F]/30 font-semibold'
                : project.badgeType === 'live-production'
                ? 'bg-[#E4FD97]/15 text-[#E4FD97] border-[#E4FD97]/35 font-semibold'
                : project.badgeType === 'open-source'
                ? 'bg-white/[0.06] text-white border-white/[0.15]'
                : 'bg-white/[0.03] text-neutral-300 border-white/[0.08]'
            }`}
          >
            {project.featured && <Sparkles size={11} />}
            <span>{project.badgeLabel}</span>
          </span>
        </div>

        {/* Title & Role */}
        <div className="mb-4">
          <div className="font-mono text-[11px] text-neutral-400 mb-1">
            ROLE // <span className="text-neutral-200">{project.role}</span>
          </div>
          <h3 className="font-display text-2xl sm:text-[1.65rem] font-bold text-white tracking-[-0.025em] leading-snug group-hover:text-[#E4FD97] transition-colors">
            {project.title}
          </h3>
          <p
            className={`font-mono text-xs mt-1 font-medium ${
              isCrimson ? 'text-[#FF2A5F]' : 'text-[#E4FD97]'
            }`}
          >
            {project.tagline}
          </p>
        </div>

        {/* Rich Technical Description */}
        <p className="text-neutral-300 text-sm leading-relaxed font-sans font-normal mb-5">
          {project.desc}
        </p>

        {/* Optional Highlighted Architecture Flow Box */}
        {project.architectureNote && (
          <div className="mb-5 p-3.5 rounded-xl bg-[#111111] border border-white/[0.07] font-mono text-[11px] text-neutral-300 leading-relaxed">
            <span className="text-[#E4FD97] font-bold uppercase block mb-1 text-[10px]">
              ⚡ Architectural Pipeline:
            </span>
            {project.architectureNote}
          </div>
        )}

        {/* Key Verified Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 py-4 border-y border-white/[0.07] mb-5">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 text-xs text-neutral-200 font-mono leading-snug"
              >
                <CheckCircle2
                  size={13}
                  className={`${isCrimson ? 'text-[#FF2A5F]' : 'text-[#E4FD97]'} shrink-0 mt-0.5`}
                />
                <span>{metric}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-white/[0.03] text-neutral-300 border border-white/[0.07]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="pt-5 mt-6 border-t border-white/[0.07] flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {project.badgeType === 'confidential-rd' ? (
            <span className="px-3 py-2 rounded-lg bg-[#FF2A5F]/10 border border-[#FF2A5F]/25 text-[#FF2A5F] font-mono text-xs flex items-center gap-1.5">
              <span>🔒 University Confidential R&amp;D (Private Corpus &amp; Weights)</span>
            </span>
          ) : project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.09] text-neutral-200 hover:text-white transition-all flex items-center gap-1.5 text-xs font-mono border border-white/[0.08]"
            >
              <GithubIcon size={14} />
              <span>
                {project.badgeType === 'private-commercial'
                  ? 'GitHub Profile (Private Repo)'
                  : 'Source Code'}
              </span>
            </a>
          ) : null}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg bg-[#E4FD97] hover:bg-[#effec1] text-[#141414] font-display font-bold transition-all flex items-center gap-1.5 text-xs shadow-md shadow-[#E4FD97]/10"
            >
              <ExternalLink size={13} />
              <span>{project.liveLabel || 'Live Deployment'}</span>
            </a>
          )}
        </div>

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono font-semibold text-[#E4FD97] hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>Inspect Live</span>
            <ArrowUpRight size={14} />
          </a>
        ) : project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono font-semibold text-neutral-400 hover:text-[#E4FD97] flex items-center gap-1 transition-colors"
          >
            <span>Details</span>
            <ArrowUpRight size={14} />
          </a>
        ) : null}
      </div>
    </article>
  );
};

export default ProjectCard;
