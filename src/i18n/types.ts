export type Locale = 'tk' | 'en' | 'ru' | 'tr';

export interface LocaleMeta {
  code: Locale;
  shortLabel: string;
  nativeName: string;
}

export const SUPPORTED_LOCALES: LocaleMeta[] = [
  { code: 'tk', shortLabel: 'TK', nativeName: 'Türkmençe' },
  { code: 'en', shortLabel: 'EN', nativeName: 'English' },
  { code: 'ru', shortLabel: 'RU', nativeName: 'Русский' },
  { code: 'tr', shortLabel: 'TR', nativeName: 'Türkçe' },
];

export type ProjectCategoryKey =
  | 'Distributed AI & ML'
  | 'Mobile & Cross-Platform'
  | 'B2B SaaS & Systems';

export interface TranslatedProject {
  id: string;
  index: string;
  title: string;
  tagline: string;
  role: string;
  category: ProjectCategoryKey;
  categoryLabel: string;
  desc: string;
  architectureNote?: string;
  metrics: string[];
  tags: string[];
  accentColor: '#E4FD97' | '#FF2A5F';
  bentoSpan: string;
  badgeType: 'open-source' | 'live-production' | 'confidential-rd' | 'private-commercial';
  badgeLabel: string;
  githubUrl?: string;
  liveUrl?: string;
  liveLabel?: string;
  featured?: boolean;
}

export interface TranslatedBlueprintPillar {
  step: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  diagram: string;
  principles: string[];
  accent: '#E4FD97' | '#FF2A5F';
}

export interface TranslatedSkillItem {
  name: string;
  level: string;
  usedIn: string;
  description: string;
  highlight?: boolean;
}

export interface TranslatedSkillCategory {
  id: 'ai-data' | 'backend-saas' | 'mobile-frontend';
  code: string;
  title: string;
  skills: TranslatedSkillItem[];
}

export interface TranslationDictionary {
  nav: {
    roleSubtitle: string;
    items: {
      architectures: { title: string; description: string };
      blueprint: { title: string; description: string };
      stack: { title: string; description: string };
      terminal: { title: string; description: string };
    };
    sysOnline: string;
    initiateProject: string;
    languageLabel: string;
    mobileMenu: {
      about: string;
      projects: string;
      experience: string;
      stack: string;
      terminal: string;
      contact: string;
      menu: string;
      close: string;
    };
  };
  hero: {
    eyebrowSys: string;
    eyebrowIdentity: string;
    eyebrowAvailable: string;
    roleHeadline: string;
    leadParagraphPrefix: string;
    leadHighlight1: string;
    leadParagraphMiddle1: string;
    leadHighlight2: string;
    leadParagraphMiddle2: string;
    leadHighlight3: string;
    leadParagraphSuffix: string;
    ctaExplore: string;
    ctaCli: string;
    metrics: {
      systemsLabel: string;
      systemsValue: string;
      systemsSub: string;
      mobileLabel: string;
      mobileValue: string;
      mobileSub: string;
      lifecycleLabel: string;
      lifecycleValue: string;
      lifecycleSub: string;
      rdLabel: string;
      rdValue: string;
      rdSub: string;
    };
    dossier: {
      headerTitle: string;
      verifiedBadge: string;
      identityLabel: string;
      roleSub: string;
      focus1Title: string;
      focus1Tag: string;
      focus1Desc: string;
      focus2Title: string;
      focus2Tag: string;
      focus2Desc: string;
      focus3Title: string;
      focus3Tag: string;
      focus3Desc: string;
      systemsOnline: string;
      browseAll: string;
    };
  };
  projects: {
    eyebrow: string;
    systemsWord: string;
    title: string;
    descriptionPrefix: string;
    descriptionSuffix: string;
    categories: {
      all: string;
      aiMl: string;
      mobile: string;
      saas: string;
    };
    opticsLabel: string;
    presets: {
      liquid: string;
      vortex: string;
      arch: string;
      ribbon: string;
    };
    dragHint: string;
    prevBtn: string;
    nextBtn: string;
    activeSpecLabel: string;
    liveProductionDefault: string;
    privateRdLabel: string;
    githubWaas: string;
    githubProfile: string;
    archFlowLabel: string;
    verifiedMetricsTitle: string;
    posterTelemetryTitle: string;
    posterRolePrefix: string;
    posterClickHint: string;
    items: TranslatedProject[];
  };
  experience: {
    eyebrow: string;
    title: string;
    description: string;
    dataflowLabel: string;
    pillars: TranslatedBlueprintPillar[];
  };
  techStack: {
    eyebrow: string;
    title: string;
    description: string;
    verifiedCountLabel: string;
    deployedInLabel: string;
    categories: TranslatedSkillCategory[];
  };
  terminal: {
    eyebrow: string;
    title: string;
    description: string;
    clearBtn: string;
    quickExecLabel: string;
    inputPlaceholder: string;
    runBtn: string;
    welcomeTitle: string;
    welcomeHintPrefix: string;
    welcomeHintSuffix: string;
    helpTitle: string;
    helpItems: {
      projects: string;
      musicai: string;
      waas: string;
      taryh: string;
      rd: string;
      skills: string;
      whoami: string;
      neofetch: string;
      contact: string;
      clear: string;
    };
    whoamiTitle: string;
    whoamiBody: string;
    musicaiTitle: string;
    musicaiBullets: string[];
    waasTitle: string;
    waasBullets: string[];
    taryhTitle: string;
    taryhBullets: string[];
    rdTitle: string;
    rdBullets: string[];
    projectsHeader: string;
    projectsList: string[];
    skillsAiTitle: string;
    skillsAiBody: string;
    skillsBackendTitle: string;
    skillsBackendBody: string;
    skillsMobileTitle: string;
    skillsMobileBody: string;
    contactTitle: string;
    neofetchRoleLabel: string;
    neofetchRoleValue: string;
    neofetchFlagshipsLabel: string;
    neofetchFlagshipsValue: string;
    neofetchMobileLabel: string;
    neofetchMobileValue: string;
    neofetchDataLabel: string;
    neofetchDataValue: string;
    neofetchStatusLabel: string;
    neofetchStatusValue: string;
    unknownCommandPrefix: string;
    unknownCommandSuffix: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    directEndpointLabel: string;
    copyBtn: string;
    copiedBtn: string;
    googlePlayLabel: string;
    dispatchReadyTitle: string;
    dispatchReadyDesc: string;
    composeNewBtn: string;
    formNameLabel: string;
    formNamePlaceholder: string;
    formEmailLabel: string;
    formEmailPlaceholder: string;
    formDomainLabel: string;
    formDomains: {
      aiMl: string;
      saas: string;
      mobile: string;
      speech: string;
      advisory: string;
    };
    formBriefLabel: string;
    formBriefPlaceholder: string;
    submitBtn: string;
  };
  footer: {
    tagline: string;
    navArchitectures: string;
    navBlueprint: string;
    navMatrix: string;
    navCli: string;
    navContact: string;
    backToTop: string;
    rightsReserved: string;
    typographyNote: string;
  };
}
