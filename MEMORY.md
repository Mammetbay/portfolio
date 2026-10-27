# MEMORY.md — Architectural Context & Systems Ledger

> This document maintains persistent architectural memory for the portfolio repository of Mammetbay Mammetbayev (`mammetbay_dev`). Autonomous agents and developers refer to this ledger to understand system state, engineering invariants, and completed milestones.

---

## 1. Project Overview & Identity
- **Principal Architect:** Mammetbay Mammetbayev
- **Professional Title:** Software Architect & AI Systems Engineer
- **Canonical Production URL:** `https://mammetbay.dev`
- **Geographic Base:** Turkmenistan (TM) & Global Remote
- **Contact Endpoint:** `mammetbaydev@gmail.com`
- **Verified Official Links:**
  - GitHub: `https://github.com/Mammetbay`
  - Instagram: `https://instagram.com/mammetbay_dev`
  - Google Play Developer Page: `https://play.google.com/store/apps/developer?id=Mammetbayev+M.`

---

## 2. Visual & Shader Architecture
- **Design Philosophy:** Dark Minimal Engineering & Editorial Precision.
- **Hero Background (`src/components/ui/GradientASCII.tsx`):**
  - Custom WebGL2 ASCII fragment shader (`shape="horizon"`).
  - Dynamic canvas creation on mount to prevent WebGL context loss during React 19 StrictMode remount cycles.
  - Interactive cursor ripple effects, mouse velocity tracking, and smooth luminance thresholds.
- **Interactive Project Deck (`src/components/ui/FlexCarousel.tsx`):**
  - 3D optical projection carousel powered by `ogl` (WebGL2).
  - Four lens presets: Liquid Lens, Vortex, Arch, and Ribbon.
  - Synchronized with an **Active System Specification Deck** providing instant technical telemetry for the selected architecture.
- **Color Palette:**
  - Base Surfaces: `#0E0E0E`, `#121212`, `#141414`, `#161616`
  - Citrus Lime Accent: `#E4FD97`
  - Signal Crimson Accent: `#FF2A5F`
  - Glass Borders: `border border-white/10 bg-white/[0.02] backdrop-blur-md`

---

## 3. Typography & Core Technology Stack
- **3-Layer Typography Scale (Google Fonts):**
  - **Display Headlines (`--font-display`):** `Bricolage Grotesque` (500, 600, 700, 800) with Latin & Latin-Extended subsets.
  - **Interface & Body (`--font-sans`):** `Plus Jakarta Sans` (400, 500, 600, 700) with Latin, Latin-Extended & Cyrillic-Extended subsets.
  - **Technical Data & CLI (`--font-mono`):** `JetBrains Mono` (400, 500, 600, 700) with Latin, Latin-Extended & Cyrillic subsets.
- **Framework & Core Libraries:** Next.js 16.1.5 (App Router + Turbopack), React 19.2.3, TypeScript 5.x.
- **Animation & Motion:** GSAP 3.15 (`ScrollTrigger`, `quickTo` magnetic hover, accessible `prefers-reduced-motion` fallbacks), Framer Motion, Tailwind CSS v4.

---

## 4. Ledger of the 10 Production Systems
1. **MusicAI — Distributed Audio Profiler & Recommendation Engine (`SYS.01`):** Co-engineered with 3-engineer core team (Mammetbay as Lead Architect). 13 ONNX models (`:8001`), in-memory signed URL streaming, Kafka event bus, ClickHouse batch ALS, Valkey real-time session cache, Qdrant vector search, and PostgreSQL. Solves cold-start from song #1.
2. **WaaS — B2B Multi-Tenant Platform & Storefront Engine (`SYS.02`):** NestJS v11 + Fastify + PostgreSQL `Schema-per-Tenant` isolation (`tenant_<subdomain>`), `AsyncLocalStorage` tenant context, automated versioned DDL migrations, React 19 storefront simulator, and live Heroku Swagger API.
3. **Taryh Gollanma — Cross-Platform Historical Encyclopedia (`SYS.03`):** 8,000+ organic Google Play downloads (v1.1.2) and live web portal (`taryhgollanma.netlify.app`). React Native + Expo Router with strategic battle cartography, rare archive photos, and offline local bookmarks.
4. **StudyMate AI — Multi-Modal Student Companion (`SYS.04`):** Open-source (MIT) mobile study assistant with Whisper STT lecture recording, Vision OCR document scanning, SM-2 Lite spaced repetition, and multi-provider LLM adapter.
5. **TurkanaKafe — Hospitality Management Ecosystem (`SYS.05`):** 3 synchronized codebases: NestJS v11 API, Next.js storefront, and React Native mobile application (`v1.0.1`) with Socket.io real-time order state.
6. **Neural ASR & Acoustic TTS Pipeline (`SYS.06`):** Confidential university speech AI research. 41.7M parameter FastConformer CTC (8x depthwise subsampling) and 230-hour curated acoustic TTS pipeline implemented in native PyTorch 2.x.
7. **Google Flow + Remotion Ad Video Pipeline (`SYS.07`):** 7-stage automated commercial video pipeline converting `brief.json` into beat-synchronized Remotion 9:16 and billboard ads with WAV DSP beat detection.
8. **AI Photo Studio SaaS Platform (`SYS.08`):** Mobile-first generative photography SaaS preserving facial identity across hundreds of curated scenes using a 4-photo reference workflow.
9. **OSAI — Japanese Speaking AI Partner (`SYS.09`):** Real-time English-Japanese voice dialogue mobile app and pronunciation coach with low-latency LLM error analysis.
10. **OwnSpeedtest CLI (`SYS.10`):** Zero-dependency Node.js 18+ network diagnostic tool benchmarking TCP/TLS latency, jitter, and throughput against Cloudflare and custom endpoints.

---

## 5. Internationalization (i18n) & GEO Architecture
- **Supported Locales:**
  - `tk`: Turkmen (Türkmençe — Default)
  - `en`: English
  - `ru`: Russian (Русский)
  - `tr`: Turkish (Türkçe)
- **Architecture:** Client-side `LanguageProvider` (`src/i18n/LanguageContext.tsx`) with strict dictionary interfaces (`src/i18n/types.ts`) and zero layout shifts.
- **Generative Engine Optimization (GEO):** `public/llms.txt` delivers a structured semantic document for AI search engines (Perplexity, ChatGPT, Claude, Google Gemini).
- **Structured Data:** `JsonLdSchema.tsx` outputs Schema.org `@graph` with `Person`, `WebSite`, `ProfilePage`, and `ItemList` (10 software applications).
- **Search Metadata:** Canonical alternates across all 4 locales in `sitemap.ts` and crawler-friendly rules in `robots.ts`.
