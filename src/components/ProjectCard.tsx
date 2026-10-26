'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Sparkles, CheckCircle2, GithubIcon } from './Icons';

export interface ProjectData {
  id: string;
  title: string;
  tagline: string;
  category: 'AI / Machine Learning' | 'Mobile & Full-Stack' | 'Microservices & Systems';
  desc: string;
  tags: string[];
  metrics: string[];
  gradient: string;
  accentColor: string;
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: ProjectData;
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay: 0.06 * (index % 3),
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      className="group relative rounded-3xl bg-[#181818]/70 backdrop-blur-xl border border-white/[0.08] hover:border-white/[0.18] p-6 sm:p-7 flex flex-col justify-between transition-colors shadow-xl shadow-black/40 overflow-hidden"
    >
      {/* Subtle Apple-style top specular highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent pointer-events-none" />

      {/* Top Header: Category & Featured Status */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-white/[0.04] text-neutral-400 border border-white/[0.06]">
            {project.category}
          </span>
          {project.featured && (
            <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#E4FD97]/10 text-[#E4FD97] border border-[#E4FD97]/25">
              <Sparkles size={11} /> Featured
            </span>
          )}
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-[-0.02em] group-hover:text-[#E4FD97] transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-neutral-400 font-mono mt-1">
            {project.tagline}
          </p>
        </div>

        <p className="text-neutral-300 text-sm leading-relaxed font-normal">
          {project.desc}
        </p>

        {/* Telemetry Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="space-y-1.5 py-3 border-y border-white/[0.06] my-1">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300 font-mono">
                <CheckCircle2 size={12} className="text-[#E4FD97] shrink-0" />
                <span>{metric}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 text-[11px] font-mono rounded-lg bg-white/[0.03] text-neutral-400 border border-white/[0.06]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="pt-5 flex items-center justify-between border-t border-white/[0.06] mt-6">
        <div className="flex items-center gap-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 text-neutral-300 hover:text-white transition-all flex items-center gap-1.5 text-xs font-medium border border-white/[0.06]"
            title="View Source on GitHub"
          >
            <GithubIcon size={14} />
            <span>Source</span>
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 text-neutral-300 hover:text-white transition-all flex items-center gap-1.5 text-xs font-medium border border-white/[0.06]"
              title="Live Application"
            >
              <ExternalLink size={14} />
              <span>Live</span>
            </a>
          )}
        </div>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-[#E4FD97] hover:text-white flex items-center gap-1 transition-colors font-mono group/link"
        >
          <span>Architecture</span>
          <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
