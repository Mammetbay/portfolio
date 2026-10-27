'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Trash2 } from './Icons';
import { useLanguage } from '@/i18n/LanguageContext';

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

const TerminalPlaygroundContent: React.FC = () => {
  const { t } = useLanguage();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>(() => [
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-neutral-300 font-mono">
          <p className="text-[#E4FD97] font-bold">
            {t.terminal.welcomeTitle}
          </p>
          <p className="text-neutral-400 text-xs">
            {t.terminal.welcomeHintPrefix}
            <span className="text-white font-bold">help</span>
            {t.terminal.welcomeHintSuffix}
          </p>
        </div>
      ),
    },
  ]);
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
          <div className="text-xs space-y-1.5 font-mono">
            <p className="text-[#E4FD97] font-bold mb-1">{t.terminal.helpTitle}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-neutral-300">
              <div><span className="text-[#E4FD97] font-bold">projects</span> — {t.terminal.helpItems.projects}</div>
              <div><span className="text-[#E4FD97] font-bold">musicai</span>  — {t.terminal.helpItems.musicai}</div>
              <div><span className="text-[#E4FD97] font-bold">waas</span>     — {t.terminal.helpItems.waas}</div>
              <div><span className="text-[#E4FD97] font-bold">taryh</span>    — {t.terminal.helpItems.taryh}</div>
              <div><span className="text-[#E4FD97] font-bold">rd</span>       — {t.terminal.helpItems.rd}</div>
              <div><span className="text-[#E4FD97] font-bold">skills</span>   — {t.terminal.helpItems.skills}</div>
              <div><span className="text-[#E4FD97] font-bold">whoami</span>   — {t.terminal.helpItems.whoami}</div>
              <div><span className="text-[#E4FD97] font-bold">neofetch</span> — {t.terminal.helpItems.neofetch}</div>
              <div><span className="text-[#E4FD97] font-bold">contact</span>  — {t.terminal.helpItems.contact}</div>
              <div><span className="text-[#E4FD97] font-bold">clear</span>    — {t.terminal.helpItems.clear}</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
      case 'about':
        res = (
          <div className="text-xs space-y-1.5 text-neutral-300 leading-relaxed font-mono">
            <p className="text-white font-bold">{t.terminal.whoamiTitle}</p>
            <p>{t.terminal.whoamiBody}</p>
          </div>
        );
        break;

      case 'musicai':
        res = (
          <div className="text-xs space-y-1.5 text-neutral-300 font-mono">
            <p className="text-[#E4FD97] font-bold">{t.terminal.musicaiTitle}</p>
            {t.terminal.musicaiBullets.map((bullet, idx) => (
              <p key={idx}>{bullet}</p>
            ))}
          </div>
        );
        break;

      case 'waas':
        res = (
          <div className="text-xs space-y-1.5 text-neutral-300 font-mono">
            <p className="text-[#E4FD97] font-bold">{t.terminal.waasTitle}</p>
            {t.terminal.waasBullets.map((bullet, idx) => (
              <p key={idx}>{bullet}</p>
            ))}
            <p className="break-all">
              • Live API:{' '}
              <a
                href="https://waas-api-demo-e67aa57945a7.herokuapp.com/docs"
                target="_blank"
                rel="noreferrer"
                className="text-[#E4FD97] underline break-all"
              >
                https://waas-api-demo-e67aa57945a7.herokuapp.com/docs
              </a>
            </p>
          </div>
        );
        break;

      case 'taryh':
        res = (
          <div className="text-xs space-y-1.5 text-neutral-300 font-mono">
            <p className="text-[#E4FD97] font-bold">{t.terminal.taryhTitle}</p>
            {t.terminal.taryhBullets.map((bullet, idx) => (
              <p key={idx}>{bullet}</p>
            ))}
            <p className="break-all">
              • Live Web:{' '}
              <a
                href="https://taryhgollanma.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="text-[#E4FD97] underline break-all"
              >
                https://taryhgollanma.netlify.app
              </a>
            </p>
            <p className="break-all">
              • Google Play:{' '}
              <a
                href="https://play.google.com/store/apps/developer?id=Mammetbayev+M."
                target="_blank"
                rel="noreferrer"
                className="text-[#E4FD97] underline break-all"
              >
                Google Play Store (Mammetbayev M.)
              </a>
            </p>
          </div>
        );
        break;

      case 'rd':
      case 'models':
      case 'stt':
        res = (
          <div className="text-xs space-y-1.5 text-neutral-300 font-mono">
            <p className="text-[#FF2A5F] font-bold">{t.terminal.rdTitle}</p>
            {t.terminal.rdBullets.map((bullet, idx) => (
              <p key={idx}>{bullet}</p>
            ))}
          </div>
        );
        break;

      case 'projects':
        res = (
          <div className="text-xs space-y-1.5 text-neutral-300 font-mono">
            <p className="text-[#E4FD97] font-bold">{t.terminal.projectsHeader}</p>
            <div className="space-y-1">
              {t.terminal.projectsList.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
          </div>
        );
        break;

      case 'skills':
        res = (
          <div className="text-xs space-y-2 text-neutral-300 font-mono">
            <div>
              <span className="text-[#E4FD97] font-bold">{t.terminal.skillsAiTitle}</span>
              <p className="text-neutral-400">{t.terminal.skillsAiBody}</p>
            </div>
            <div>
              <span className="text-white font-bold">{t.terminal.skillsBackendTitle}</span>
              <p className="text-neutral-400">{t.terminal.skillsBackendBody}</p>
            </div>
            <div>
              <span className="text-[#FF2A5F] font-bold">{t.terminal.skillsMobileTitle}</span>
              <p className="text-neutral-400">{t.terminal.skillsMobileBody}</p>
            </div>
          </div>
        );
        break;

      case 'contact':
        res = (
          <div className="text-xs space-y-1.5 text-neutral-300 font-mono">
            <p className="text-[#E4FD97] font-bold">{t.terminal.contactTitle}</p>
            <p className="break-all">
              • Email:{' '}
              <a href="mailto:mammetbaydev@gmail.com" className="text-[#FF2A5F] underline break-all">
                mammetbaydev@gmail.com
              </a>
            </p>
            <p className="break-all">
              • GitHub:{' '}
              <a
                href="https://github.com/Mammetbay"
                target="_blank"
                rel="noreferrer"
                className="text-[#E4FD97] underline break-all"
              >
                github.com/Mammetbay
              </a>
            </p>
            <p className="break-all">
              • Instagram:{' '}
              <a
                href="https://instagram.com/mammetbay_dev"
                target="_blank"
                rel="noreferrer"
                className="text-[#E4FD97] underline break-all"
              >
                @mammetbay_dev
              </a>
            </p>
            <p className="break-all">
              • Google Play:{' '}
              <a
                href="https://play.google.com/store/apps/developer?id=Mammetbayev+M."
                target="_blank"
                rel="noreferrer"
                className="text-[#E4FD97] underline break-all"
              >
                Mammetbayev M. (Google Play Developer)
              </a>
            </p>
          </div>
        );
        break;

      case 'neofetch':
        res = (
          <div className="text-xs font-mono flex flex-col sm:flex-row gap-4 sm:gap-6 text-neutral-300 py-1 min-w-0">
            <div className="text-[#E4FD97] font-bold select-none leading-tight overflow-x-auto text-[10px] sm:text-xs shrink-0">
              <pre>{`  ╔══════════════╗
  ║  MAMMETBAY   ║
  ║  ARCH // v2  ║
  ╚══════════════╝`}</pre>
            </div>
            <div className="space-y-0.5 min-w-0 break-words">
              <p className="break-words">
                <span className="text-[#E4FD97] font-bold">mammetbay</span>@
                <span className="text-white">systems-architect</span>
              </p>
              <p className="text-neutral-600 truncate">------------------------------------</p>
              <p className="break-words">
                <span className="text-neutral-400">{t.terminal.neofetchRoleLabel}</span>{' '}
                {t.terminal.neofetchRoleValue}
              </p>
              <p className="break-words">
                <span className="text-neutral-400">{t.terminal.neofetchFlagshipsLabel}</span>{' '}
                {t.terminal.neofetchFlagshipsValue}
              </p>
              <p className="break-words">
                <span className="text-neutral-400">{t.terminal.neofetchMobileLabel}</span>{' '}
                {t.terminal.neofetchMobileValue}
              </p>
              <p className="break-words">
                <span className="text-neutral-400">{t.terminal.neofetchDataLabel}</span>{' '}
                {t.terminal.neofetchDataValue}
              </p>
              <p className="break-words">
                <span className="text-[#E4FD97]">{t.terminal.neofetchStatusLabel}</span>{' '}
                {t.terminal.neofetchStatusValue}
              </p>
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
            {t.terminal.unknownCommandPrefix}
            <span className="font-bold">{cmd}</span>
            {t.terminal.unknownCommandSuffix}
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

  const quickCommands = ['projects', 'musicai', 'waas', 'taryh', 'rd', 'skills', 'neofetch', 'contact', 'clear'];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto z-20" id="terminal">
      {/* Editorial Asymmetric Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-10 border-b border-white/[0.08]">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#E4FD97] uppercase tracking-widest mb-3">
            <TerminalIcon size={14} className="shrink-0" />
            <span className="break-words">{t.terminal.eyebrow}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-[-0.03em] leading-tight break-words">
            {t.terminal.title}
          </h2>
        </div>
        <p className="text-neutral-400 text-sm sm:text-base max-w-md leading-relaxed font-sans break-words">
          {t.terminal.description}
        </p>
      </div>

      {/* Terminal Window */}
      <div className="bento-card rounded-2xl overflow-hidden shadow-2xl shadow-black/90 min-w-0 w-full">
        {/* Top Bar */}
        <div className="px-3.5 sm:px-6 py-3 sm:py-3.5 bg-[#161616] border-b border-white/[0.08] flex items-center justify-between gap-2 min-w-0">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF2A5F]/80 shrink-0" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E4FD97]/80 shrink-0" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20 shrink-0" />
            <span className="ml-1 sm:ml-2 text-xs font-mono text-neutral-300 font-medium min-w-0 truncate">
              mammetbay@arch-shell: ~/workspace
            </span>
          </div>

          <button
            onClick={() => setHistory([])}
            className="text-xs font-mono text-neutral-400 hover:text-white flex items-center gap-1.5 px-2.5 py-1 rounded-md hover:bg-white/[0.06] transition-colors shrink-0"
            title={t.terminal.clearBtn}
          >
            <Trash2 size={12} className="shrink-0" />
            <span>{t.terminal.clearBtn}</span>
          </button>
        </div>

        {/* Quick Command Suggestion Chips */}
        <div className="px-3.5 sm:px-6 py-2.5 sm:py-3 bg-[#121212] border-b border-white/[0.06] flex items-center gap-2 overflow-x-auto no-scrollbar w-full max-w-full">
          <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider shrink-0">
            {t.terminal.quickExecLabel}
          </span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] hover:bg-[#E4FD97] text-neutral-300 hover:text-[#141414] hover:font-bold border border-white/[0.07] transition-all shrink-0"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Output Area */}
        <div className="p-4 sm:p-6 h-80 sm:h-96 overflow-y-auto overflow-x-hidden font-mono text-xs sm:text-sm space-y-4 bg-[#0E0E0E]/90 break-words [overflow-wrap:anywhere]">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5 min-w-0">
              <div className="flex items-center gap-2 text-neutral-400 min-w-0 flex-wrap">
                <span className="text-[#E4FD97] font-bold shrink-0">➜</span>
                <span className="text-white font-semibold shrink-0">~</span>
                <span className="text-neutral-200 break-all">{item.command}</span>
              </div>
              {item.output && <div className="pl-3 sm:pl-5 break-words [overflow-wrap:anywhere] min-w-0">{item.output}</div>}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Form */}
        <form
          onSubmit={handleSubmit}
          className="px-3.5 sm:px-6 py-3 sm:py-3.5 bg-[#161616] border-t border-white/[0.08] flex items-center gap-2.5 sm:gap-3 min-w-0"
        >
          <span className="text-[#E4FD97] font-mono font-bold text-sm shrink-0">➜</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.terminal.inputPlaceholder}
            aria-label="Terminal Command Input"
            className="w-full min-w-0 bg-transparent text-white font-mono text-xs sm:text-sm focus:outline-none placeholder:text-neutral-600 truncate"
          />
          <button
            type="submit"
            className="px-3 sm:px-3.5 py-1.5 rounded-lg bg-[#E4FD97] hover:bg-[#effec1] text-[#141414] font-mono font-bold text-xs flex items-center gap-1.5 transition-all shrink-0"
          >
            <span>{t.terminal.runBtn}</span>
            <CornerDownLeft size={12} className="shrink-0" />
          </button>
        </form>
      </div>
    </section>
  );
};

const TerminalPlayground: React.FC = () => {
  const { locale } = useLanguage();
  return <TerminalPlaygroundContent key={locale} />;
};

export default TerminalPlayground;
