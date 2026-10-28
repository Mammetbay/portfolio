import type { Metadata } from 'next';
import { Bricolage_Grotesque, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/i18n/LanguageContext';
import JsonLdSchema from '@/components/JsonLdSchema';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-display',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext', 'cyrillic-ext'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mammetbay.dev'),
  title: {
    default: 'Mammetbay Mammetbayev — Software Architect & AI Systems Engineer',
    template: '%s | Mammetbay Mammetbayev',
  },
  description:
    'Architectural portfolio of Mammetbay Mammetbayev. Architecting distributed AI & recommendation microservices, multi-tenant B2B SaaS platforms, cross-platform mobile apps (8,000+ users), and neural speech AI research.',
  keywords: [
    'Mammetbay Mammetbayev',
    'Mämmetbaý Mämmetbaýew',
    'Мамметбай Мамметбаев',
    'Mammetbay',
    'Software Architect',
    'AI Systems Engineer',
    'Ýazgylar we Ulgamlar Binagäri',
    'Архитектор ПО',
    'Инженер ИИ',
    'Yazılım Mimarı',
    'Distributed AI Systems',
    'Audio ML',
    'MusicAI',
    'ONNX Runtime',
    'Multi-Tenant B2B SaaS',
    'WaaS',
    'Taryh Gollanma',
    'StudyMate AI',
    'TurkanaKafe',
    'NestJS',
    'Next.js 16',
    'React Native',
    'Expo',
    'PyTorch',
    'FastConformer CTC',
    'Neural TTS',
    'Turkmenistan',
    'Ashgabat',
  ],
  authors: [{ name: 'Mammetbay Mammetbayev', url: 'https://mammetbay.dev' }],
  creator: 'Mammetbay Mammetbayev',
  publisher: 'Mammetbay Mammetbayev',
  alternates: {
    canonical: 'https://mammetbay.dev',
    languages: {
      tk: 'https://mammetbay.dev',
      en: 'https://mammetbay.dev',
      ru: 'https://mammetbay.dev',
      tr: 'https://mammetbay.dev',
      'x-default': 'https://mammetbay.dev',
    },
  },
  icons: {
    icon: [
      { url: '/logo.svg', type: 'image/svg+xml' },
      { url: '/logo.jpg', type: 'image/jpeg' },
    ],
    shortcut: ['/logo.svg'],
    apple: [{ url: '/logo.jpg', type: 'image/jpeg' }],
  },
  openGraph: {
    title: 'Mammetbay Mammetbayev — Software Architect & AI Systems Engineer',
    description:
      'Architectural portfolio of Mammetbay Mammetbayev. Architecting distributed AI & recommendation microservices, multi-tenant B2B SaaS platforms, and mobile ecosystems.',
    url: 'https://mammetbay.dev',
    siteName: 'Mammetbay Mammetbayev Portfolio',
    locale: 'tk_TM',
    alternateLocale: ['en_US', 'ru_RU', 'tr_TR'],
    type: 'website',
    images: [
      {
        url: '/logo-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Mammetbay Mammetbayev — Software Architect & AI Systems Engineer (mammetbay.dev)',
      },
      {
        url: '/logo.jpg',
        width: 1024,
        height: 1024,
        alt: 'mammetbay.dev Official Brand Emblem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mammetbay Mammetbayev — Software Architect & AI Systems Engineer',
    description:
      'Architectural portfolio of Mammetbay Mammetbayev. Distributed AI, multi-tenant SaaS, and cross-platform mobile systems.',
    creator: '@mammetbay_dev',
    images: ['/logo-banner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'TM',
    'geo.placename': 'Turkmenistan',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tk"
      suppressHydrationWarning
      className={`dark ${bricolage.variable} ${jakarta.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans bg-[#141414] text-[#F5F5F5] selection:bg-[#E4FD97] selection:text-[#141414] overflow-y-scroll overflow-x-hidden antialiased">
        <JsonLdSchema />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
