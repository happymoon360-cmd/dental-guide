import { ArticleSchema, BreadcrumbSchema } from '@/lib/seo/schema-markup';
import { CanonicalUrl } from '@/lib/seo/canonical-url';

interface PageSEOProps {
  title: string;
  description: string;
  pathname: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  datePublished?: string;
  breadcrumbs?: Array<{ name: string; path: string }>;
  noindex?: boolean;
}

/**
 * Page SEO Component
 * Adds canonical URL, schema markup, and meta tags for individual pages
 */
export function PageSEO({
  title,
  description,
  pathname,
  ogType = 'website',
  ogImage = 'https://dental-guide-eta.vercel.app/og-image.png',
  datePublished,
  breadcrumbs,
  noindex = false,
}: PageSEOProps) {
  const canonicalUrl = `https://dental-guide-eta.vercel.app${pathname}`;

  return (
    <>
      <CanonicalUrl url={canonicalUrl} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Schema Markup */}
      {datePublished && (
        <ArticleSchema
          title={title}
          description={description}
          datePublished={datePublished}
          pathname={pathname}
        />
      )}
      {breadcrumbs && <BreadcrumbSchema items={breadcrumbs} />}
    </>
  );
}
