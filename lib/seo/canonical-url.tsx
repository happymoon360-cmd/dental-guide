/**
 * Canonical URL Component
 * Adds canonical link tag to prevent duplicate content issues
 */
export function CanonicalUrl({ url }: { url: string }) {
  return <link rel="canonical" href={url} />;
}

/**
 * Generates canonical URL for a given path
 */
export function getCanonicalUrl(path: string): string {
  const baseUrl = 'https://dental-guide-eta.vercel.app';
  return `${baseUrl}${path}`;
}
