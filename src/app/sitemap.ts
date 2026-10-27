import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mammetbay.dev';
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          tk: baseUrl,
          en: baseUrl,
          ru: baseUrl,
          tr: baseUrl,
        },
      },
    },
  ];
}
