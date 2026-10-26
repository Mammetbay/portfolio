'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Copy, Check, Sparkles, GithubIcon, InstagramIcon } from './Icons';

const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'AI / Speech Model Development',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const emailAddress = 'mammetbaydev@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const subject = encodeURIComponent(`[${formData.category}] Inbound Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Mammetbay,\n\nName: ${formData.name}\nEmail: ${formData.email}\nCategory: ${formData.category}\n\nMessage:\n${formData.message}\n`
    );
    window.open(`mailto:${emailAddress}?subject=${subject}&body=${body}`, '_blank');
    setStatus('success');
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="py-20 px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto z-20"
      id="contact"
    >
      {/* Container Card */}
      <div className="relative rounded-[2.5rem] bg-[#181818]/70 backdrop-blur-2xl border border-white/[0.08] border-t-white/[0.14] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl shadow-black/80">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Inquiries & Bio Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] text-[11px] text-neutral-400 font-mono uppercase tracking-widest border border-white/[0.08] w-fit backdrop-blur-xl">
              <Sparkles size={12} className="text-[#E4FD97]" />
              <span>Inquiries</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-[-0.03em] leading-tight">
              Let&apos;s engineer <br />
              something meaningful.
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-normal">
              Whether you need a custom Speech-to-Text / TTS acoustic pipeline, an AI mobile application, or a high-performance full-stack web architecture — I&apos;m here to engineer it.
            </p>

            {/* Quick Email Card */}
            <div className="rounded-2xl bg-white/[0.02] p-4 border border-white/[0.06] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] text-white flex items-center justify-center shrink-0">
                  <Mail size={16} />
                </div>
                <div className="flex flex-col truncate">
                  <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-mono">Direct Contact</span>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-sm font-medium text-white hover:text-[#E4FD97] transition-colors truncate font-mono"
                  >
                    {emailAddress}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="px-3 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 text-xs text-neutral-300 hover:text-white transition-all flex items-center gap-1.5 shrink-0 border border-white/[0.06] font-mono"
                title="Copy Email Address"
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-[#E4FD97]" />
                    <span className="text-[#E4FD97] font-medium">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/Mammetbay"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 text-xs font-medium text-neutral-300 hover:text-white transition-all border border-white/[0.06]"
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
              </a>

              <a
                href="https://instagram.com/mammetbay_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 text-xs font-medium text-neutral-300 hover:text-white transition-all border border-white/[0.06]"
              >
                <InstagramIcon size={14} />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Right Column: Inbound Message Form */}
          <div className="lg:col-span-7 rounded-2xl p-6 sm:p-8 border border-white/[0.06] bg-black/30 backdrop-blur-xl">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-white/[0.08] text-[#E4FD97] flex items-center justify-center text-xl">
                  <Check size={28} />
                </div>
                <h3 className="text-xl font-semibold text-white">Inquiry Prepared</h3>
                <p className="text-neutral-400 text-sm max-w-sm">
                  Your mail client has been opened with your inquiry pre-populated.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-5 py-2 rounded-xl bg-white/[0.06] text-xs font-medium text-white hover:bg-white/[0.1] transition-all border border-white/[0.06]"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Mercer"
                      className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                    Project Scope
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-white/30 transition-colors"
                  >
                    <option value="AI / Speech Model Development">AI / Speech Model Development (STT/TTS)</option>
                    <option value="LLM & Agent Systems">LLM & Multi-Modal Agent Systems</option>
                    <option value="Full-Stack Web Application (Next.js)">Full-Stack Web Application (Next.js)</option>
                    <option value="Mobile App (React Native / Expo)">Mobile App (React Native / Expo)</option>
                    <option value="Consulting / Freelance Opportunity">Consulting / Freelance Opportunity</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, timeline, or engineering challenge..."
                    className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3.5 rounded-full bg-[#E4FD97] hover:bg-[#ebffa3] active:scale-[0.98] text-[#141414] font-semibold text-sm shadow-lg shadow-[#E4FD97]/15 transition-all flex items-center justify-center gap-2"
                >
                  <Send size={14} />
                  <span>Send Inbound Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
