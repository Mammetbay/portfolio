'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, CornerDownLeft, Trash2 } from './Icons';

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

const initialHistory: CommandOutput[] = [
  {
    command: 'welcome',
    output: (
      <div className="space-y-1 text-neutral-300">
        <p className="text-[#E4FD97] font-semibold font-mono">
          ⚡ Mammetbay Interactive CLI [Version 2.4.0-release]
        </p>
        <p className="text-neutral-400 text-xs font-mono">
          Type <span className="text-white font-bold">help</span> or click the suggestion chips below to explore projects, models, and background.
        </p>
      </div>
    ),
  },
];

const TerminalPlayground: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>(initialHistory);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    let res: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        res = (
          <div className="text-xs space-y-1">
            <p className="text-[#E4FD97] font-semibold mb-1">Available commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 font-mono text-neutral-300">
              <div><span className="text-[#E4FD97] font-bold">whoami</span> - Developer background & bio</div>
              <div><span className="text-[#E4FD97] font-bold">skills</span> - Core tech stack & engineering tools</div>
              <div><span className="text-[#E4FD97] font-bold">projects</span> - Production projects & architectures</div>
              <div><span className="text-[#E4FD97] font-bold">models</span> - FastConformer STT & TTS specifications</div>
              <div><span className="text-[#E4FD97] font-bold">contact</span> - Email, GitHub & Instagram links</div>
              <div><span className="text-[#E4FD97] font-bold">neofetch</span> - System specs & developer profile</div>
              <div><span className="text-[#E4FD97] font-bold">clear</span> - Clear the terminal output</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
      case 'about':
        res = (
          <div className="text-xs space-y-1.5 text-neutral-300 leading-relaxed font-mono">
            <p className="text-white font-semibold">Mammetbay — AI Engineer & Full-Stack Architect</p>
            <p>
              Based in Turkmenistan. Dedicated to solving complex speech recognition and NLP challenges for low-resource languages using native PyTorch and state-of-the-art Conformer architectures.
            </p>
            <p>
              Simultaneously delivers end-to-end full-stack systems with Next.js 16, React Native Expo apps, and resilient microservices.
            </p>
          </div>
        );
        break;

      case 'skills':
        res = (
          <div className="text-xs space-y-2 text-neutral-300 font-mono">
            <div>
              <span className="text-[#E4FD97] font-bold">🧠 AI & Deep Learning:</span>
              <p className="text-neutral-400">PyTorch 2.x, FastConformer CTC, SpecAugment, SentencePiece, TorchCodec, Transformers, LLM RAG pipelines.</p>
            </div>
            <div>
              <span className="text-neutral-100 font-bold">🌐 Frontend & Mobile:</span>
              <p className="text-neutral-400">Next.js 16, React 19, TypeScript, React Native (Expo), Tailwind CSS, Framer Motion.</p>
            </div>
            <div>
              <span className="text-[#FF2A5F] font-bold">⚡ Backend & Systems:</span>
              <p className="text-neutral-400">Python, FastAPI, Node.js, NestJS, PostgreSQL, Supabase, Redis, Docker, Microservices.</p>
            </div>
          </div>
        );
        break;

      case 'models':
      case 'stt':
        res = (
          <div className="text-xs space-y-1.5 text-neutral-300 font-mono">
            <p className="text-[#E4FD97] font-bold">Turkmen FastConformer-style CTC Model:</p>
            <p>• Architecture: 8x Temporal Depthwise Subsampling + 12 FastConformer Blocks</p>
            <p>• Total Parameters: 41,754,049 (Small Preset)</p>
            <p>• Tokenizer: SentencePiece Unigram (1,024 pieces + CTC blank)</p>
            <p>• Audio Pipeline: 16 kHz Log-Mel 80 bins, SpecAugment, HTK Mel filters</p>
            <p>• Verification: 90 unit tests passed, 0 skipped, multi-process DDP verified</p>
          </div>
        );
        break;

      case 'projects':
        res = (
          <div className="text-xs space-y-2 text-neutral-300 font-mono">
            <p className="text-[#E4FD97] font-semibold">Featured Repositories & Deployments:</p>
            <div className="space-y-1">
              <p>1. <span className="text-white font-bold">Turkmen STT</span>: FastConformer CTC Speech Recognizer (PyTorch)</p>
              <p>2. <span className="text-white font-bold">StudyMate AI</span>: React Native + Expo student study companion</p>
              <p>3. <span className="text-white font-bold">Turkmen Neural TTS</span>: Speech synthesis model & interactive web</p>
              <p>4. <span className="text-white font-bold">Music Recommendation Engine</span>: Hybrid filtering engine (FastAPI/Redis)</p>
              <p>5. <span className="text-white font-bold">Taryh Gollanma</span>: Interactive historical guide & education app</p>
            </div>
          </div>
        );
        break;

      case 'contact':
        res = (
          <div className="text-xs space-y-1.5 text-neutral-300 font-mono">
            <p className="text-[#E4FD97] font-semibold">Get in touch with Mammetbay:</p>
            <p>• Email: <a href="mailto:mammetbaydev@gmail.com" className="text-[#FF2A5F] underline">mammetbaydev@gmail.com</a></p>
            <p>• GitHub: <a href="https://github.com/Mammetbay" target="_blank" rel="noreferrer" className="text-[#E4FD97] underline">github.com/Mammetbay</a></p>
            <p>• Instagram: <a href="https://instagram.com/mammetbay_dev" target="_blank" rel="noreferrer" className="text-[#E4FD97] underline">@mammetbay_dev</a></p>
          </div>
        );
        break;

      case 'neofetch':
        res = (
          <div className="text-xs font-mono flex flex-col sm:flex-row gap-4 text-neutral-300 py-1">
            <div className="text-[#E4FD97] font-bold select-none leading-none">
              <pre>{`
   /\\_/\\
  ( o.o )
   > ^ <
  [MB.DEV]
              `}</pre>
            </div>
            <div className="space-y-0.5">
              <p><span className="text-[#E4FD97] font-bold">mammetbay</span>@<span className="text-white">core-engine</span></p>
              <p>-------------------------</p>
              <p><span className="text-neutral-400">OS:</span> Linux / Windows Dual-Stack</p>
              <p><span className="text-neutral-400">Kernel:</span> PyTorch 2.6.0 + CUDA</p>
              <p><span className="text-neutral-400">Framework:</span> Next.js 16 + React 19</p>
              <p><span className="text-neutral-400">Shell:</span> TypeScript 5.8 & Python 3.12</p>
              <p><span className="text-[#E4FD97]">Uptime:</span> 100% Focused</p>
            </div>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      case '':
        res = null;
        break;

      default:
        res = (
          <div className="text-xs text-[#FF2A5F] font-mono">
            Command not recognized: <span className="font-bold">{cmd}</span>. Type <span className="text-white font-bold">help</span> for a list of commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: rawCmd, output: res }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    executeCommand(input);
    setInput('');
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="py-20 px-4 sm:px-6 lg:px-8 w-full max-w-5xl mx-auto"
      id="terminal"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] text-[11px] text-neutral-400 font-mono uppercase tracking-widest border border-white/[0.08] mb-3 backdrop-blur-xl">
          <TerminalIcon size={12} className="text-[#E4FD97]" />
          <span>Console Sandbox</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-[-0.03em]">
          Interactive Terminal
        </h2>
        <p className="text-neutral-400 text-sm max-w-md mt-2 font-normal">
          Direct terminal interface to query architecture specs, models, and background.
        </p>
      </div>

      {/* Terminal Window Box */}
      <div className="w-full rounded-3xl overflow-hidden border border-white/[0.08] border-t-white/[0.14] shadow-2xl shadow-black/80 bg-[#181818]/80 backdrop-blur-2xl">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-white/[0.02] border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
            <span className="text-xs text-neutral-400 font-mono ml-2">guest@mammetbay-dev:~</span>
          </div>

          <button
            onClick={() => setHistory([])}
            className="text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-white/5 active:scale-95 transition-all"
            title="Clear Terminal"
          >
            <Trash2 size={13} />
          </button>
        </div>

        {/* Console Body */}
        <div className="p-5 sm:p-6 font-mono text-xs max-h-[380px] overflow-y-auto space-y-4">
          {history.map((entry, idx) => (
            <div key={idx} className="space-y-1.5">
              {entry.command && (
                <div className="flex items-center gap-2">
                  <span className="text-[#E4FD97] font-semibold">guest@mammetbay:~$</span>
                  <span className="text-white">{entry.command}</span>
                </div>
              )}
              {entry.output && <div className="pl-4">{entry.output}</div>}
            </div>
          ))}

          {/* Prompt Form */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-2">
            <span className="text-[#E4FD97] font-semibold select-none">guest@mammetbay:~$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type 'help', 'skills', 'projects'..."
              className="flex-1 bg-transparent border-none outline-none text-white text-xs font-mono placeholder:text-neutral-600 focus:ring-0"
              autoComplete="off"
              spellCheck="false"
            />
            <button
              type="submit"
              className="p-1 rounded text-neutral-400 hover:text-[#E4FD97] hover:bg-white/5 transition-colors"
              aria-label="Submit command"
            >
              <CornerDownLeft size={13} />
            </button>
          </form>

          <div ref={bottomRef} />
        </div>

        {/* Quick Suggestion Chips (Apple-style translucent segmented buttons) */}
        <div className="px-5 py-3.5 bg-black/30 border-t border-white/[0.06] flex flex-wrap items-center gap-2 text-[11px] font-mono text-neutral-400">
          <span className="text-neutral-500 select-none">Quick queries:</span>
          {['help', 'whoami', 'skills', 'projects', 'models', 'contact', 'neofetch'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 text-neutral-300 hover:text-white border border-white/[0.06] transition-all"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TerminalPlayground;
