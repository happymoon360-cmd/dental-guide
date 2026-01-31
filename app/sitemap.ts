import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dental.guide';

  // Main pages
  const routes = [
    '',
    '/script-builder',
    '/school-finder',
    '/cost-estimator',
    '/emergency-triage',
    '/feedback',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.9,
  }));

  return routes;
}
