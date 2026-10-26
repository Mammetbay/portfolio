'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, CheckCircle2, Workflow, Server, BrainIcon } from './Icons';

interface SkillItem {
  name: string;
  level: string;
  description: string;
  highlight?: boolean;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.FC<{ size?: number; className?: string }>;
  accentColor: string;
  badgeBg: string;
  skills: SkillItem[];
}

const categories: SkillCategory[] = [
  {
    id: 'ai-ml',
    title: 'AI, Speech & Deep Learning',
    icon: BrainIcon,
    accentColor: 'text-[#E4FD97]',
    badgeBg: 'bg-[#E4FD97]/10 text-[#E4FD97] border-[#E4FD97]/25',
    skills: [
      { name: 'PyTorch 2.x', level: 'Advanced / Core', description: 'Custom neural architectures, autograd, TorchCodec & MPS/CUDA pipelines', highlight: true },
      { name: 'FastConformer CTC', level: 'Specialist', description: '8x temporal subsampling, 12-block depthwise Conformer modeling', highlight: true },
      { name: 'SentencePiece', level: 'Production', description: 'Unigram tokenization and vocabulary engineering for low-resource languages' },
      { name: 'Audio DSP & SpecAugment', level: 'Production', description: 'HTK Mel filterbanks, 16kHz audio normalization, time-frequency masking' },
      { name: 'LLM Orchestration & RAG', level: 'Advanced', description: 'Multi-provider adapter architectures, prompt engineering, local embeddings' },
      { name: 'Distributed Training (DDP)', level: 'Advanced', description: 'Multi-process CPU/GPU gradient synchronization and checkpointing' },
    ],
  },
  {
    id: 'frontend-mobile',
    title: 'Frontend & Mobile Engineering',
    icon: Layers,
    accentColor: 'text-neutral-100',
    badgeBg: 'bg-white/10 text-white border-white/20',
    skills: [
      { name: 'Next.js 16 (App Router)', level: 'Advanced / Core', description: 'Turbopack, Server Components, Streaming SSR, and SEO optimization', highlight: true },
      { name: 'React 19 & TypeScript', level: 'Expert', description: 'Strict type safety, custom hooks, reactive architectures, and performance' },
      { name: 'React Native & Expo', level: 'Advanced', description: 'Cross-platform mobile apps with Expo Router, expo-audio, and local persistence', highlight: true },
      { name: 'Tailwind CSS & Styling', level: 'Expert', description: 'Responsive design systems, micro-interactions, dark glassmorphism' },
      { name: 'Framer Motion', level: 'Proficient', description: 'Physics-based animations, layout transitions, and interactive UI gestures' },
      { name: 'State & Caching', level: 'Advanced', description: 'Context API, React Query, optimistic updates, and offline sync' },
    ],
  },
  {
    id: 'backend-infra',
    title: 'Backend, Databases & Cloud',
    icon: Server,
    accentColor: 'text-[#FF2A5F]',
    badgeBg: 'bg-[#FF2A5F]/10 text-[#FF2A5F] border-[#FF2A5F]/25',
    skills: [
      { name: 'Python 3.12 & FastAPI', level: 'Expert / Core', description: 'Asynchronous microservices, high-throughput model inference endpoints', highlight: true },
      { name: 'Node.js & NestJS', level: 'Advanced', description: 'Modular backend architectures, REST/GraphQL APIs, dependency injection' },
      { name: 'PostgreSQL & Supabase', level: 'Advanced', description: 'Complex relational schemas, migrations, indexing, and authentication' },
      { name: 'SQLite (expo-sqlite)', level: 'Advanced', description: 'Local-first embedded database engines with versioned schema migrations' },
      { name: 'Redis Caching', level: 'Proficient', description: 'Sub-10ms latency query caching and distributed task queues' },
      { name: 'Docker & Containerization', level: 'Advanced', description: 'Multi-stage builds, reproducibility, and cloud deployments' },
    ],
  },
];

const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ai-ml');

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto z-20" id="stack">
      {/* Header with Scroll-in motion */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center mb-12 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] text-[11px] text-neutral-400 font-mono uppercase tracking-widest border border-white/[0.08] mb-3 backdrop-blur-xl">
          <Workflow size={12} className="text-[#E4FD97]" />
          <span>Core Capabilities</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-[-0.03em]">
          Technical Ecosystem
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed font-normal">
          From deep learning model construction and audio DSP to production-grade mobile and full-stack architectures.
        </p>

        {/* Segmented Controls */}
        <div className="flex flex-wrap items-center justify-center gap-1 mt-8 bg-black/40 p-1 rounded-2xl border border-white/[0.06] backdrop-blur-xl">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all active:scale-95 ${
                  isActive
                    ? 'bg-white/[0.1] text-white font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Icon size={14} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Skills Grid */}
      {categories.map((cat) => {
        if (cat.id !== activeCategory) return null;

        return (
          <div
            key={cat.id}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300"
          >
            {cat.skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.04 * index }}
                whileHover={{ y: -3 }}
                className="rounded-3xl bg-[#181818]/70 backdrop-blur-xl p-6 border border-white/[0.08] hover:border-white/[0.16] transition-colors flex flex-col justify-between shadow-xl shadow-black/40"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-semibold text-white tracking-tight">
                      {skill.name}
                    </h3>
                    <span
                      className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${
                        skill.highlight
                          ? 'bg-[#E4FD97]/10 text-[#E4FD97] border-[#E4FD97]/25 font-semibold'
                          : 'bg-white/[0.04] text-neutral-400 border-white/[0.06]'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-normal">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-neutral-500 font-mono">
                  <span className="flex items-center gap-1.5 text-neutral-400">
                    <CheckCircle2 size={12} className="text-[#E4FD97]" /> Production Verified
                  </span>
                  <span className="text-[11px] text-neutral-400">99%+ uptime</span>
                </div>
              </motion.div>
            ))}
          </div>
        );
      })}
    </section>
  );
};

export default TechStack;
