'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { ProjectData } from './ProjectCard';
import { Sparkles } from './Icons';

const projectsList: ProjectData[] = [
  {
    id: 'turkmen-stt',
    title: 'Turkmen FastConformer STT',
    tagline: '41.7M Parameter Speech Recognition Model',
    category: 'AI / Machine Learning',
    desc: 'From-scratch PyTorch 2.x implementation of a FastConformer-style CTC speech-recognition model for the Turkmen language. Features 8x temporal depthwise subsampling, 12 Macaron blocks, SpecAugment, and a 1,024-piece SentencePiece Unigram tokenizer with verified DDP distributed training.',
    metrics: [
      '41,754,049 parameters (Small Preset)',
      '119,847 audio metadata samples indexed',
      '90/90 Unit & Pipeline Tests passed with 0 skipped',
    ],
    tags: ['PyTorch 2.x', 'Speech-to-Text', 'FastConformer', 'SentencePiece', 'SpecAugment', 'DDP'],
    gradient: '',
    accentColor: '#E4FD97',
    githubUrl: 'https://github.com/Mammetbay/TurkmenStt',
    featured: true,
  },
  {
    id: 'studymate-ai',
    title: 'StudyMate AI Companion',
    tagline: 'Multi-Modal Student Assistant with Local SQLite',
    category: 'Mobile & Full-Stack',
    desc: 'Commercial-grade mobile application built with React Native and Expo Router. Automatically transcribes audio lectures, extracts text from notes via vision models, produces smart summaries, and schedules flashcards using SM-2-lite spaced repetition.',
    metrics: [
      'Local-first SQLite with versioned migrations',
      'Multi-provider adapter (OpenAI, Gemini, Groq)',
      'Spaced Repetition (SM-2) memory scheduling',
    ],
    tags: ['React Native', 'Expo Router', 'TypeScript', 'SQLite', 'Spaced Repetition', 'Vision OCR'],
    gradient: '',
    accentColor: '#FF2A5F',
    githubUrl: 'https://github.com/Mammetbay',
    featured: true,
  },
  {
    id: 'turkmen-tts',
    title: 'Turkmen Neural TTS Engine',
    tagline: 'Neural Acoustic Speech Synthesis Pipeline',
    category: 'AI / Machine Learning',
    desc: 'End-to-end speech synthesis pipeline customized for Turkmen phonetics and grammar. Transforms text inputs into clean audio streams with custom phoneme normalization, audio vocoder synthesis, and a live web testing workbench.',
    metrics: [
      '230h curated audio training dataset',
      'FastAPI low-latency inference backend',
      'Custom Turkmen phoneme alignment dictionary',
    ],
    tags: ['Python', 'Neural TTS', 'FastAPI', 'Audio DSP', 'Next.js', 'PyTorch'],
    gradient: '',
    accentColor: '#E4FD97',
    githubUrl: 'https://github.com/Mammetbay',
    featured: true,
  },
  {
    id: 'music-rec',
    title: 'Music Recommendation Service',
    tagline: 'High-Throughput Collaborative Filtering Engine',
    category: 'Microservices & Systems',
    desc: 'Intelligent recommendation service combining hybrid collaborative and content-based filtering algorithms. Containerized with Docker and optimized with Redis caching for sub-10ms query responses.',
    metrics: [
      'Sub-10ms response latency with Redis',
      'Containerized Docker microservice architecture',
      'Comprehensive PyTest evaluation coverage',
    ],
    tags: ['Python', 'FastAPI', 'Redis', 'Docker', 'Machine Learning', 'PyTest'],
    gradient: '',
    accentColor: '#FF2A5F',
    githubUrl: 'https://github.com/Mammetbay',
    featured: false,
  },
  {
    id: 'taryh-gollanma',
    title: 'Taryh Gollanma Guide',
    tagline: 'Interactive Historical Educational Platform',
    category: 'Mobile & Full-Stack',
    desc: 'Interactive historical guide and cultural education application. Provides chronological timeline navigation, multimedia archives, offline searchable databases, and integrated knowledge testing.',
    metrics: [
      'Responsive Web & Mobile client experience',
      'Extensive multimedia historical archive',
      'Fast client-side full-text search',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Mobile First'],
    gradient: '',
    accentColor: '#E4FD97',
    githubUrl: 'https://github.com/Mammetbay',
    featured: false,
  },
  {
    id: 'sanly-hassahana',
    title: 'Sanly Hassahana Healthcare',
    tagline: 'Enterprise Digital Hospital Management Portal',
    category: 'Microservices & Systems',
    desc: 'Comprehensive medical facility automation suite. Unifies patient record workflows, appointment booking queues, department schedule management, and automated diagnostic summaries.',
    metrics: [
      'Role-based access control (RBAC)',
      'Relational medical schemas with PostgreSQL',
      'Optimized Next.js full-stack architecture',
    ],
    tags: ['Next.js', 'PostgreSQL', 'TypeScript', 'Node.js', 'REST APIs'],
    gradient: '',
    accentColor: '#FF2A5F',
    githubUrl: 'https://github.com/Mammetbay',
    featured: false,
  },
];

type CategoryFilter = 'All' | 'AI / Machine Learning' | 'Mobile & Full-Stack' | 'Microservices & Systems';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsList
    : projectsList.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto z-20" id="projects">
      {/* Section Header with Scroll-in motion */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center mb-12 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] text-[11px] text-neutral-400 font-mono uppercase tracking-widest border border-white/[0.08] mb-3 backdrop-blur-xl">
          <Sparkles size={12} className="text-[#E4FD97]" />
          <span>Selected Works</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-[-0.03em]">
          Engineered Systems & Models
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed font-normal">
          Rigorous implementations spanning PyTorch deep learning research, cross-platform mobile apps, and distributed web microservices.
        </p>

        {/* Apple-style Segmented Control Filter */}
        <div className="flex flex-wrap items-center justify-center gap-1 mt-8 bg-black/40 p-1 rounded-2xl border border-white/[0.06] backdrop-blur-xl">
          {(['All', 'AI / Machine Learning', 'Mobile & Full-Stack', 'Microservices & Systems'] as CategoryFilter[]).map(
            (category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all active:scale-95 ${
                  activeCategory === category
                    ? 'bg-white/[0.1] text-white font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {category}
              </button>
            )
          )}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
