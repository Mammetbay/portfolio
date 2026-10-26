'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight, Terminal, Cpu, Play, Pause, Activity, GithubIcon } from './Icons';

type ShowcaseTab = 'waveform' | 'architecture' | 'metrics';

const generateInitialBars = () =>
  Array.from({ length: 48 }, (_, i) => {
    const base = Math.sin(i * 0.22) * 0.4 + 0.5;
    return Math.max(0.15, Math.min(0.95, base + (Math.random() * 0.2 - 0.1)));
  });

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState<ShowcaseTab>('waveform');
  const [waveformBars, setWaveformBars] = useState<number[]>(generateInitialBars);

  // Generate realistic dynamic audio waveform levels when playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setWaveformBars((prev) =>
        prev.map((val) => {
          const delta = (Math.random() - 0.5) * 0.25;
          return Math.max(0.12, Math.min(0.96, val + delta));
        })
      );
    }, 120);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Apple-style scroll-driven motion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 120,
    mass: 0.8,
  });

  // Hero header fades and gently floats upward on scroll
  const headerOpacity = useTransform(smoothProgress, [0, 0.35], [1, 0]);
  const headerY = useTransform(smoothProgress, [0, 0.35], [0, -35]);
  const headerScale = useTransform(smoothProgress, [0, 0.35], [1, 0.97]);

  // Showcase card lifts, tilts and scales smoothly into viewport focus
  const cardScale = useTransform(smoothProgress, [0, 0.4], [0.96, 1.01]);
  const cardY = useTransform(smoothProgress, [0, 0.4], [20, -10]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[140vh] flex flex-col items-center justify-start pt-32 sm:pt-40 pb-24 overflow-hidden"
      id="about-me"
    >
      {/* Subtle, restrained specular lighting (Apple style, no cheap neon orbs) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#E4FD97]/[0.06] to-transparent blur-[120px] pointer-events-none -z-10" />

      {/* Editorial Hero Content */}
      <motion.div
        style={{ opacity: headerOpacity, y: headerY, scale: headerScale }}
        className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center select-none"
      >
        {/* Availability Capsule */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-neutral-300 backdrop-blur-xl mb-6 shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#E4FD97] animate-pulse" />
          <span className="font-mono text-[11px] text-neutral-300 tracking-wide">
            Mammetbay — AI & Systems Architect
          </span>
          <span className="text-white/20">•</span>
          <span className="text-[11px] text-[#E4FD97] font-medium">Available</span>
        </motion.div>

        {/* Master Headline with Apple-grade Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.035em] text-white leading-[1.08] max-w-4xl"
        >
          Architecting <span className="text-[#E4FD97]">Speech AI</span> &{' '}
          <br className="hidden sm:inline" />
          High-Performance Systems.
        </motion.h1>

        {/* Crisp, Restrained Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-base sm:text-lg md:text-xl text-neutral-400 max-w-2xl font-normal leading-relaxed tracking-[-0.01em]"
        >
          Building from-scratch <strong className="text-white font-medium">FastConformer ASR</strong> (41.7M params) and neural acoustic speech pipelines for low-resource languages, backed by production Next.js and resilient microservices.
        </motion.p>

        {/* Tactile Action Pills (Spring response on press) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-3.5 mt-8"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-[#E4FD97] text-[#141414] font-semibold text-xs sm:text-sm tracking-tight hover:bg-[#ebffa3] active:scale-[0.97] transition-all flex items-center gap-2 shadow-lg shadow-[#E4FD97]/15"
          >
            <span>Explore Architectures</span>
            <ArrowUpRight size={15} />
          </a>

          <a
            href="#terminal"
            className="px-6 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] active:scale-[0.97] text-neutral-200 border border-white/[0.08] font-medium text-xs sm:text-sm tracking-tight transition-all backdrop-blur-xl flex items-center gap-2"
          >
            <Terminal size={14} className="text-[#E4FD97]" />
            <span>Interactive CLI</span>
          </a>

          <a
            href="https://github.com/Mammetbay"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] active:scale-[0.97] text-neutral-300 hover:text-white border border-white/[0.08] transition-all backdrop-blur-xl"
          >
            <GithubIcon size={16} />
          </a>
        </motion.div>

        {/* Clean Spec Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.32 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[11px] font-mono text-neutral-500 uppercase tracking-wider"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E4FD97]" />
            <span>41.7M FastConformer CTC</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
            <span>119k+ Audio Dataset</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A5F]" />
            <span>PyTorch 2.6 Distributed DDP</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Cinematic Scroll-Driven Showcase Window (Apple Hardware/Studio Style) */}
      <motion.div
        style={{ scale: cardScale, y: cardY }}
        className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 z-10"
      >
        <div className="rounded-3xl bg-[#181818]/80 backdrop-blur-2xl border border-white/[0.08] border-t-white/[0.14] shadow-2xl shadow-black/80 overflow-hidden">
          {/* Studio Console Header */}
          <div className="px-5 sm:px-7 py-4 border-b border-white/[0.06] flex flex-wrap items-center justify-between gap-4 bg-white/[0.01]">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
              <span className="text-xs font-mono font-medium text-neutral-300 ml-2 flex items-center gap-2">
                <Cpu size={13} className="text-[#E4FD97]" />
                FastConformer ASR Engine v2.4
              </span>
            </div>

            {/* Segmented Control Tabs (Apple Style) */}
            <div className="flex items-center bg-black/40 p-1 rounded-xl border border-white/[0.06] text-xs font-mono">
              <button
                onClick={() => setActiveTab('waveform')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  activeTab === 'waveform'
                    ? 'bg-white/[0.1] text-[#E4FD97] font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Acoustic DSP
              </button>
              <button
                onClick={() => setActiveTab('architecture')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  activeTab === 'architecture'
                    ? 'bg-white/[0.1] text-[#E4FD97] font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Architecture
              </button>
              <button
                onClick={() => setActiveTab('metrics')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  activeTab === 'metrics'
                    ? 'bg-white/[0.1] text-[#E4FD97] font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Telemetry
              </button>
            </div>
          </div>

          {/* Interactive Screen Body */}
          <div className="p-6 sm:p-8 min-h-[300px] flex flex-col justify-between">
            {activeTab === 'waveform' && (
              <div className="space-y-6">
                {/* Visualizer Header */}
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                  <div className="flex items-center gap-2">
                    <Activity size={14} className="text-[#E4FD97] animate-pulse" />
                    <span>Real-Time Log-Mel Filterbanks (16 kHz • 80 Channels)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-[#E4FD97]/10 text-[#E4FD97] border border-[#E4FD97]/20 text-[10px]">
                      LIVE DECODER
                    </span>
                  </div>
                </div>

                {/* Animated Audio Spectrum Bars */}
                <div className="h-28 w-full bg-black/40 rounded-2xl p-4 flex items-end justify-between gap-1 border border-white/[0.04] overflow-hidden">
                  {waveformBars.map((height, idx) => (
                    <motion.div
                      key={idx}
                      className="flex-1 rounded-full bg-gradient-to-t from-[#E4FD97] to-[#FF2A5F]"
                      style={{
                        height: `${Math.round(height * 100)}%`,
                        opacity: 0.4 + height * 0.6,
                      }}
                      transition={{ duration: 0.1 }}
                    />
                  ))}
                </div>

                {/* Live Speech Recognition Transcript Simulation */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white transition-all shrink-0 active:scale-95"
                      aria-label="Toggle audio playback"
                    >
                      {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                    </button>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider">
                        Decoded Output (Turkmen CTC)
                      </span>
                      <p className="text-sm font-medium text-white tracking-tight mt-0.5">
                        &ldquo;Salam dünýä, bu FastConformer ses modeliniň hakyky wagt tanyş synagy.&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-neutral-400 shrink-0 border-t sm:border-t-0 sm:border-l border-white/[0.06] pt-2 sm:pt-0 sm:pl-4">
                    <div>
                      <span className="text-neutral-500 block text-[10px]">LATENCY</span>
                      <span className="text-[#E4FD97] font-semibold">8.4 ms</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 block text-[10px]">CONFIDENCE</span>
                      <span className="text-neutral-200 font-semibold">99.4%</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'architecture' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
                  <span className="text-neutral-500 text-[10px] uppercase">01 / Subsampling</span>
                  <div className="my-3">
                    <h4 className="text-white font-bold text-sm">8x Temporal Depthwise</h4>
                    <p className="text-neutral-400 text-[11px] mt-1 leading-relaxed">
                      Reduces 80ms acoustic frame redundancy to accelerate downstream Macaron block throughput.
                    </p>
                  </div>
                  <span className="text-[#E4FD97] text-[11px]">in_ch: 80 → out_ch: 384</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
                  <span className="text-neutral-500 text-[10px] uppercase">02 / Conformer Blocks</span>
                  <div className="my-3">
                    <h4 className="text-white font-bold text-sm">12 Macaron Layers</h4>
                    <p className="text-neutral-400 text-[11px] mt-1 leading-relaxed">
                      Multi-head self-attention with relative sinusoidal positional encodings and depthwise convolutions.
                    </p>
                  </div>
                  <span className="text-[#E4FD97] text-[11px]">d_model: 384, heads: 6</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
                  <span className="text-neutral-500 text-[10px] uppercase">03 / CTC Linear Head</span>
                  <div className="my-3">
                    <h4 className="text-white font-bold text-sm">SentencePiece Unigram</h4>
                    <p className="text-neutral-400 text-[11px] mt-1 leading-relaxed">
                      Vocabulary optimized specifically for low-resource agglutinative Turkmen phoneme frequencies.
                    </p>
                  </div>
                  <span className="text-[#FF2A5F] text-[11px]">vocab_size: 1,025 tokens</span>
                </div>
              </div>
            )}

            {activeTab === 'metrics' && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-neutral-500 text-[10px] uppercase block">Parameters</span>
                  <span className="text-xl sm:text-2xl font-bold text-white mt-1 block">41.7M</span>
                  <span className="text-[#E4FD97] text-[10px]">Small Preset</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-neutral-500 text-[10px] uppercase block">Audio Corpus</span>
                  <span className="text-xl sm:text-2xl font-bold text-white mt-1 block">119,847</span>
                  <span className="text-neutral-400 text-[10px]">Validated Samples</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-neutral-500 text-[10px] uppercase block">Test Pass Rate</span>
                  <span className="text-xl sm:text-2xl font-bold text-[#E4FD97] mt-1 block">90 / 90</span>
                  <span className="text-neutral-400 text-[10px]">0 Failures • 0 Skips</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-neutral-500 text-[10px] uppercase block">Distributed Mode</span>
                  <span className="text-xl sm:text-2xl font-bold text-[#FF2A5F] mt-1 block">PyTorch DDP</span>
                  <span className="text-neutral-400 text-[10px]">Multi-Process Sync</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
