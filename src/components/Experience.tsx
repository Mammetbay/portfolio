'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from './Icons';

interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  highlights: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: 'Lead AI Engineer & Full-Stack Architect',
    organization: 'Independent & Client Ventures',
    period: '2023 — PRESENT',
    location: 'Remote / Hybrid',
    highlights: [
      'Engineered a 41.7M parameter FastConformer CTC speech recognition model from scratch in PyTorch 2.x for low-resource languages, verified across 90 rigorous unit & pipeline tests.',
      'Developed StudyMate AI, a commercial client-only React Native + Expo application with audio transcription, photo OCR, SM-2 spaced repetition, and adapter-based multi-provider AI.',
      'Architected resilient microservices utilizing FastAPI, Redis caching, and Docker with sub-10ms response latency for recommendation and search workloads.',
    ],
    technologies: ['PyTorch 2.x', 'FastConformer', 'React Native', 'Expo', 'Next.js 16', 'FastAPI', 'Redis'],
  },
  {
    role: 'Senior Full-Stack Developer',
    organization: 'Software Solutions & Product Engineering',
    period: '2021 — 2023',
    location: 'Turkmenistan',
    highlights: [
      'Delivered full-cycle enterprise web applications including hospital management systems (Sanly Hassahana) and educational platforms (Taryh Gollanma).',
      'Designed PostgreSQL schemas, complex relational indices, and role-based access control (RBAC) layers ensuring data integrity.',
      'Constructed modular, responsive user interfaces with Next.js, TypeScript, and modern CSS frameworks, improving page load metrics by 40%.',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
  },
  {
    role: 'Machine Learning & Speech Corpus Researcher',
    organization: 'Language Technology Initiatives',
    period: '2020 — 2021',
    location: 'Turkmenistan',
    highlights: [
      'Curated and indexed 119,847+ audio metadata entries and 230 hours of speech data for low-resource speech recognition and TTS acoustic models.',
      'Trained custom SentencePiece Unigram tokenizers (1,024 pieces) and phoneme alignment dictionaries.',
      'Implemented data augmentation pipelines with SpecAugment and HTK Mel filterbanks to boost acoustic model resilience.',
    ],
    technologies: ['Python', 'SentencePiece', 'TorchCodec', 'Audio DSP', 'FFmpeg', 'PyTest'],
  },
];

const Experience: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 w-full max-w-5xl mx-auto z-20" id="experience">
      {/* Header with Scroll-in motion */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center mb-16 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] text-[11px] text-neutral-400 font-mono uppercase tracking-widest border border-white/[0.08] mb-3 backdrop-blur-xl">
          <Briefcase size={12} className="text-[#E4FD97]" />
          <span>Trajectory</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-[-0.03em]">
          Engineering Background
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base max-w-xl mt-3 leading-relaxed font-normal">
          A track record of solving technical bottlenecks across deep learning research and high-scale software engineering.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative border-l border-white/[0.08] ml-4 sm:ml-8 space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.08 * index, ease: [0.22, 1, 0.36, 1] }}
            className="relative pl-6 sm:pl-10 group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-[#141414] border-2 border-[#E4FD97] group-hover:scale-125 transition-transform duration-300" />

            {/* Experience Card */}
            <div className="rounded-3xl bg-[#181818]/70 backdrop-blur-xl p-6 sm:p-8 border border-white/[0.08] hover:border-white/[0.16] transition-colors shadow-xl shadow-black/40">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-[-0.02em]">
                  {exp.role}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] text-neutral-300 border border-white/[0.06] w-fit">
                  <Calendar size={11} className="text-[#E4FD97]" />
                  {exp.period}
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs font-medium text-neutral-400 mb-5 font-mono">
                <span className="text-white font-medium">{exp.organization}</span>
                <span className="text-white/20">•</span>
                <span className="flex items-center gap-1 text-neutral-400">
                  <MapPin size={11} /> {exp.location}
                </span>
              </div>

              {/* Highlights */}
              <ul className="space-y-2.5 mb-6 text-neutral-300 text-xs sm:text-sm leading-relaxed font-normal">
                {exp.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 size={14} className="text-[#E4FD97] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 text-[11px] font-mono rounded-lg bg-white/[0.03] text-neutral-400 border border-white/[0.06]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
