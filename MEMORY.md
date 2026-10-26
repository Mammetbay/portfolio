# Portfolio v2 (`mammetbay_dev`) — Project Memory & Delivery Context

> Bu dosya, Mammetbay'in kişisel portfolyo projesinin mimari hafızasıdır. Yeni oturum açıldığında Antigravity CLI veya asistanlar projenin durumunu, yapısını ve tamamlanan adımlarını buradan takip eder.

---

## 1. Proje Genel Bakış & Amacı
- **Sahibi:** Mammetbay (AI / Speech Recognition, Mobile & Full-Stack Systems Engineer)
- **Repo Konumu:** `D:\Workspace\Portfolio v2\mammetbay_dev`
- **Hedef:** Gerçek dünya projelerini (Türkmence Conformer STT/TTS, StudyMate AI, WaaS Multi-Tenant B2B, Remotion Video Pipeline) sergileyen, interaktif terminal ve kod oyun alanı içeren üst düzey bir geliştirici vitrini.

---

## 2. Teknoloji Yığını
- **Framework:** Next.js 16.1.5 (App Router + Turbopack)
- **UI & Dil:** React 19.2.3, TypeScript 5.x
- **Stil & Animasyon:** Tailwind CSS v4, Framer Motion
- **İkonlar:** `src/components/Icons.tsx` (özel SVG ikon kütüphanesi) + Lucide React

---

## 3. Bileşen Mimarisi
```text
src/
├── app/
│   ├── layout.tsx             # Kök layout (fontlar, metadata, karanlık tema gövdesi)
│   ├── page.tsx               # Ana sayfa (Navbar, Hero, Projects, TechStack, Experience, Terminal, Contact, Footer)
│   └── globals.css            # Tailwind v4 tema değişkenleri ve özel animasyonlar
└── components/
    ├── Navbar.tsx             # Masaüstü ve mobil uyumlu navigasyon
    ├── Hero.tsx               # Başlık, rozetler, metrik sayaçları ve CTA
    ├── Projects.tsx           # Proje filtreleme (All, AI/ML, Mobile & Full-Stack, Microservices)
    ├── ProjectCard.tsx        # Proje kartı, etiketler ve GitHub linkleri
    ├── TechStack.tsx          # Yetenekler ve teknoloji rozetleri
    ├── Experience.tsx         # Mühendislik yolculuğu ve deneyim zaman tüneli
    ├── TerminalPlayground.tsx # İnteraktif terminal simülatörü
    ├── ContactSection.tsx     # İletişim formu ve sosyal bağlantılar
    ├── Footer.tsx             # Alt bilgi ve telif alanı
    └── Icons.tsx              # Özel SVG vektör seti
```

---

## 4. Kayıtlı Projeler Listesi (`Projects.tsx`)
1. **Turkmen FastConformer STT:** 41.7M parametreli konuşma tanıma modeli (PyTorch 2.x, DDP).
2. **StudyMate AI Companion:** Çoklu model destekli, SQLite tabanlı akıllı öğrenci asistanı (React Native / Expo).
3. **Turkmen Neural TTS Engine:** Türkmence fonetik hizalamalı nöral ses sentezleme motoru.
4. **Music Recommendation Service:** Redis önbellekli hibrit filtreleme ve radyo motoru (FastAPI / Docker).
5. **Taryh Gollanma Guide:** Tarih ve kültür eğitim platformu.
6. **Sanly Hassahana Healthcare:** Dijital hastane yönetim ve otomasyon portalı.

*(Eklenecek Son Projeler: WaaS B2B Multi-Tenant Platform & Remotion Video Reklam Pipeline).*

---

## 5. Doğrulama Durumu (Build & Test)
- **`npm run build`:** Başarılı (`0 errors`, Turbopack ile derlendi).
- **TypeScript:** `npx tsc --noEmit` hatasız.
