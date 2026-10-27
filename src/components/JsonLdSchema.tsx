import React from 'react';

export default function JsonLdSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://mammetbay.dev/#person',
        name: 'Mammetbay Mammetbayev',
        alternateName: [
          'Mämmetbaý Mämmetbaýew',
          'Мамметбай Мамметбаев',
          'Mammetbay',
        ],
        jobTitle: 'Software Architect & AI Systems Engineer',
        description:
          'Software Architect & AI Systems Engineer specializing in distributed AI systems, multi-tenant B2B SaaS platforms, cross-platform mobile engineering, and neural speech AI.',
        url: 'https://mammetbay.dev',
        email: 'mailto:mammetbaydev@gmail.com',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'TM',
          addressRegion: 'Turkmenistan',
        },
        sameAs: [
          'https://github.com/Mammetbay',
          'https://instagram.com/mammetbay_dev',
          'https://play.google.com/store/apps/developer?id=Mammetbayev+M.',
        ],
        knowsLanguage: ['tk', 'en', 'ru', 'tr'],
        knowsAbout: [
          'Distributed AI Systems',
          'Audio ML',
          'ONNX Runtime',
          'Multi-Tenant B2B SaaS',
          'NestJS',
          'Next.js',
          'React Native',
          'Expo',
          'Speech Recognition ASR & Neural TTS',
          'Apache Kafka',
          'ClickHouse',
          'Qdrant Vector DB',
          'Valkey',
          'PostgreSQL',
          'FastConformer CTC',
          'Remotion Programmatic Video',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://mammetbay.dev/#website',
        url: 'https://mammetbay.dev',
        name: 'Mammetbay Mammetbayev — Software Architect & AI Systems Engineer',
        description:
          'Architectural portfolio and system specifications of Mammetbay Mammetbayev. Featuring 10 production systems across distributed AI, multi-tenant SaaS, and cross-platform mobile.',
        inLanguage: ['tk', 'en', 'ru', 'tr'],
        publisher: {
          '@id': 'https://mammetbay.dev/#person',
        },
      },
      {
        '@type': 'ProfilePage',
        '@id': 'https://mammetbay.dev/#profilepage',
        url: 'https://mammetbay.dev',
        mainEntity: {
          '@id': 'https://mammetbay.dev/#person',
        },
      },
      {
        '@type': 'ItemList',
        '@id': 'https://mammetbay.dev/#projects',
        name: 'Engineered Systems & Architectures by Mammetbay Mammetbayev',
        numberOfItems: 10,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@type': 'SoftwareApplication',
              name: 'MusicAI — Distributed Audio Profiler & Recommendation Engine',
              applicationCategory: 'MultimediaApplication',
              operatingSystem: 'Linux (Docker Compose)',
              url: 'https://mammetbay.dev/#music-ai',
              description:
                '13-Model ONNX acoustic analysis, vector search, Kafka event bus, and ClickHouse ALS collaborative filtering recommendation microservices.',
              author: {
                '@id': 'https://mammetbay.dev/#person',
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@type': 'WebApplication',
              name: 'WaaS — B2B Multi-Tenant Platform & Storefront Engine',
              applicationCategory: 'BusinessApplication',
              url: 'https://waas-api-demo-e67aa57945a7.herokuapp.com/docs',
              description:
                'Managed Website-as-a-Service with strict PostgreSQL Schema-per-Tenant isolation, AsyncLocalStorage tenancy, and React 19 storefront simulator.',
              author: {
                '@id': 'https://mammetbay.dev/#person',
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 3,
            item: {
              '@type': 'MobileApplication',
              name: 'Taryh Gollanma — Cross-Platform Historical Encyclopedia',
              applicationCategory: 'EducationApplication',
              operatingSystem: 'Android, iOS, Web',
              url: 'https://taryhgollanma.netlify.app',
              sameAs: [
                'https://taryhgollanma.netlify.app',
                'https://play.google.com/store/apps/developer?id=Mammetbayev+M.',
              ],
              description:
                'Cross-platform digital heritage encyclopedia with 8,000+ organic Play Store downloads, battle cartography, rare archival photography, and offline bookmarks.',
              author: {
                '@id': 'https://mammetbay.dev/#person',
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 4,
            item: {
              '@type': 'MobileApplication',
              name: 'StudyMate AI — Multi-Modal Student Companion',
              applicationCategory: 'EducationApplication',
              operatingSystem: 'Android, iOS',
              url: 'https://github.com/Mammetbay',
              description:
                'Open-source, local-first mobile study assistant with Whisper STT lecture recording, Vision OCR notes parsing, and SM-2 spaced repetition.',
              author: {
                '@id': 'https://mammetbay.dev/#person',
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 5,
            item: {
              '@type': 'SoftwareApplication',
              name: 'TurkanaKafe — Full-Stack Hospitality Ecosystem',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Android, Web, Linux',
              url: 'https://mammetbay.dev/#turkana-kafe',
              description:
                '3-tier restaurant ordering and operations ecosystem uniting NestJS v11 API, Next.js storefront, and React Native mobile application.',
              author: {
                '@id': 'https://mammetbay.dev/#person',
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 6,
            item: {
              '@type': 'SoftwareApplication',
              name: 'Neural ASR & Acoustic TTS Pipeline',
              applicationCategory: 'ScientificApplication',
              url: 'https://mammetbay.dev/#university-speech-rd',
              description:
                'Confidential university R&D engineering 41.7M parameter FastConformer CTC recognizer and 230-hour neural TTS speech synthesis pipeline.',
              author: {
                '@id': 'https://mammetbay.dev/#person',
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 7,
            item: {
              '@type': 'SoftwareApplication',
              name: 'Google Flow + Remotion Ad Video Pipeline',
              applicationCategory: 'MultimediaApplication',
              url: 'https://mammetbay.dev/#remotion-ad-pipeline',
              description:
                '7-stage programmatic commercial video production pipeline converting brief.json into beat-synchronized Remotion 9:16 and billboard ads.',
              author: {
                '@id': 'https://mammetbay.dev/#person',
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 8,
            item: {
              '@type': 'WebApplication',
              name: 'AI Photo Studio SaaS Platform',
              applicationCategory: 'MultimediaApplication',
              url: 'https://mammetbay.dev/#ai-photo-saas',
              description:
                'Mobile-first SaaS architecture generating identity-preserving studio portraits across hundreds of styles with credit ledger and prompt studio.',
              author: {
                '@id': 'https://mammetbay.dev/#person',
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 9,
            item: {
              '@type': 'MobileApplication',
              name: 'OSAI — Japanese Speaking AI Partner',
              applicationCategory: 'EducationApplication',
              url: 'https://mammetbay.dev/#japanese-speaking-ai',
              description:
                'Real-time English-Japanese voice dialogue mobile application and pronunciation coach powered by Expo Speech and NestJS AI backend.',
              author: {
                '@id': 'https://mammetbay.dev/#person',
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 10,
            item: {
              '@type': 'SoftwareApplication',
              name: 'OwnSpeedtest — Zero-Dependency Network CLI',
              applicationCategory: 'UtilitiesApplication',
              url: 'https://github.com/Mammetbay',
              description:
                'Zero-dependency network diagnostic CLI built strictly with native Node.js built-ins to measure TCP/TLS latency, jitter, and throughput.',
              author: {
                '@id': 'https://mammetbay.dev/#person',
              },
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
