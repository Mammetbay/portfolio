'use client';

import React, { useState } from 'react';
import { Mail, Send, Copy, Check, Sparkles, GithubIcon, InstagramIcon, Play } from './Icons';
import { useLanguage } from '@/i18n/LanguageContext';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: t.contact.formDomains.aiMl,
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

    const subject = encodeURIComponent(`[${formData.category}] Architecture Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Mammetbay,\n\nName: ${formData.name}\nEmail: ${formData.email}\nScope: ${formData.category}\n\nMessage:\n${formData.message}\n`
    );
    window.open(`mailto:${emailAddress}?subject=${subject}&body=${body}`, '_blank');
    setStatus('success');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto z-20" id="contact">
      <div className="bento-card rounded-2xl p-5 sm:p-10 lg:p-14 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 min-w-0 flex flex-col gap-5 sm:gap-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#E4FD97] uppercase tracking-widest">
              <Sparkles size={14} className="shrink-0" />
              <span className="break-words">{t.contact.eyebrow}</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-[-0.03em] leading-tight break-words">
              {t.contact.title}
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-sans break-words">
              {t.contact.description}
            </p>

            {/* Direct Email Box */}
            <div className="rounded-xl bg-[#121212] p-3.5 sm:p-4 border border-white/[0.08] flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 min-w-0">
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 overflow-hidden">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#E4FD97]/15 text-[#E4FD97] border border-[#E4FD97]/30 flex items-center justify-center shrink-0">
                  <Mail size={16} />
                </div>
                <div className="flex flex-col min-w-0 truncate">
                  <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-mono truncate">
                    {t.contact.directEndpointLabel}
                  </span>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-xs sm:text-sm font-medium text-white hover:text-[#E4FD97] transition-colors truncate font-mono"
                  >
                    {emailAddress}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="px-3 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs text-neutral-200 hover:text-white transition-all flex items-center gap-1.5 shrink-0 border border-white/[0.08] font-mono cursor-pointer"
                title={t.contact.copyBtn}
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-[#E4FD97]" />
                    <span className="text-[#E4FD97] font-bold">{t.contact.copiedBtn}</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>{t.contact.copyBtn}</span>
                  </>
                )}
              </button>
            </div>

            {/* Social & Verified Profile Links */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-1">
              <a
                href="https://github.com/Mammetbay"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] text-xs font-mono text-neutral-200 hover:text-white transition-all border border-white/[0.08] break-all sm:break-normal"
              >
                <GithubIcon size={14} className="shrink-0" />
                <span>github.com/Mammetbay</span>
              </a>

              <a
                href="https://instagram.com/mammetbay_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] text-xs font-mono text-neutral-200 hover:text-white transition-all border border-white/[0.08]"
              >
                <InstagramIcon size={14} className="shrink-0" />
                <span>@mammetbay_dev</span>
              </a>

              <a
                href="https://play.google.com/store/apps/developer?id=Mammetbayev+M."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] text-xs font-mono text-neutral-200 hover:text-white transition-all border border-white/[0.08]"
                title="Google Play Developer: Mammetbayev M."
              >
                <Play size={13} className="text-[#E4FD97] shrink-0" />
                <span>{t.contact.googlePlayLabel}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 min-w-0 w-full rounded-2xl p-4 sm:p-8 border border-white/[0.08] bg-[#121212]">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#E4FD97]/15 text-[#E4FD97] border border-[#E4FD97]/30 flex items-center justify-center">
                  <Check size={28} />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  {t.contact.dispatchReadyTitle}
                </h3>
                <p className="text-neutral-400 text-sm max-w-sm font-sans">
                  {t.contact.dispatchReadyDesc}
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-5 py-2.5 rounded-xl bg-white/[0.06] text-xs font-mono text-white hover:bg-white/[0.1] transition-all border border-white/[0.08]"
                >
                  {t.contact.composeNewBtn}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5 min-w-0">
                    <label className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                      {t.contact.formNameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.formNamePlaceholder}
                      className="w-full min-w-0 px-4 py-3 rounded-xl bg-[#181818] border border-white/[0.08] text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#E4FD97]/50 transition-colors font-sans"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 min-w-0">
                    <label className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                      {t.contact.formEmailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contact.formEmailPlaceholder}
                      className="w-full min-w-0 px-4 py-3 rounded-xl bg-[#181818] border border-white/[0.08] text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#E4FD97]/50 transition-colors font-sans"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 min-w-0">
                  <label className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                    {t.contact.formDomainLabel}
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full max-w-full min-w-0 truncate px-4 py-3 rounded-xl bg-[#181818] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-[#E4FD97]/50 transition-colors font-sans"
                  >
                    <option value={t.contact.formDomains.aiMl}>
                      {t.contact.formDomains.aiMl}
                    </option>
                    <option value={t.contact.formDomains.saas}>
                      {t.contact.formDomains.saas}
                    </option>
                    <option value={t.contact.formDomains.mobile}>
                      {t.contact.formDomains.mobile}
                    </option>
                    <option value={t.contact.formDomains.speech}>
                      {t.contact.formDomains.speech}
                    </option>
                    <option value={t.contact.formDomains.advisory}>
                      {t.contact.formDomains.advisory}
                    </option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5 min-w-0">
                  <label className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                    {t.contact.formBriefLabel}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.formBriefPlaceholder}
                    className="w-full min-w-0 px-4 py-3 rounded-xl bg-[#181818] border border-white/[0.08] text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#E4FD97]/50 transition-colors resize-none font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full py-3.5 px-6 rounded-xl bg-[#E4FD97] hover:bg-[#effec1] text-[#141414] font-display font-bold text-sm tracking-tight transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#E4FD97]/15 cursor-pointer"
                >
                  <Send size={15} />
                  <span>{t.contact.submitBtn}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
