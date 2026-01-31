# SEO Implementation Guide

This document outlines all SEO elements implemented on the Dental Guide website.

## Technical SEO Files

### 1. robots.txt
**Location:** `public/robots.txt`
- Allows all crawlers
- Disallows API routes
- Disables analytics tracking
- Links to sitemap

### 2. Sitemap
**Locations:**
- `public/sitemap.xml` - Static sitemap
- `app/sitemap.ts` - Dynamic Next.js sitemap generation

**Included Pages:**
- Home page (priority 1.0)
- Script Builder (priority 0.9)
- School Finder (priority 0.9)
- Cost Estimator (priority 0.9)
- Emergency Triage (priority 0.9)
- Feedback (priority 0.5)

### 3. RSS Feed
**Location:** `app/rss/route.ts`
- Dynamic RSS feed at `/rss.xml`
- Includes main tools and guides
- Updated with latest content

## Schema Markup

### Organization Schema
```typescript
<OrganizationSchema />
```
- Organization name and details
- Logo and contact information
- Linked from root layout

### FAQ Schema
```typescript
<FAQSchema />
```
Covers common questions:
- How to find affordable dental care
- Can I negotiate dental bills
- Do dental schools offer cheaper treatment
- What to do for dental emergencies
- How much do dental procedures cost

### Article Schema
```typescript
<ArticleSchema
  title="Page Title"
  description="Page Description"
  datePublished="2025-01-31"
  pathname="/page-path"
/>
```
For blog posts and guide content

### Breadcrumb Schema
```typescript
<BreadcrumbSchema
  items={[
    { name: 'Home', path: '/' },
    { name: 'Tool Name', path: '/tool' },
  ]}
/>
```

### WebSite Schema
```typescript
<WebSiteSchema />
```
Includes search action functionality

## Canonical URLs

All pages include canonical URLs:
```typescript
export const metadata = {
  alternates: {
    canonical: 'https://dental.guide/page-path',
  },
};
```

## Page Metadata

Each page has optimized metadata:
- **Title** - SEO-friendly, includes keywords
- **Description** - Compelling, under 160 characters
- **Keywords** - Relevant search terms
- **Open Graph** - Social sharing optimization
- **Twitter Cards** - Twitter sharing

### Metadata Files:
- `app/script-builder/metadata.ts`
- `app/school-finder/metadata.ts`
- `app/cost-estimator/metadata.ts`
- `app/emergency-triage/metadata.ts`

## Additional SEO Files

### manifest.json
Progressive Web App manifest for mobile optimization

### browserconfig.xml
Windows/Edge browser tile configuration

### .htaccess
Apache server configuration:
- Gzip compression
- Caching headers
- HTTPS redirect
- www to non-www redirect

### ads.txt
Placeholder for Google AdSense (when ready)

### humans.txt
Human-readable site information

## Usage Examples

### Adding Schema to a Page

```tsx
import { SchemaMarkup, BreadcrumbSchema } from '@/components/seo/schema-markup';

export default function Page() {
  return (
    <>
      <SchemaMarkup />
      <BreadcrumbSchema items={[...]} />
      {/* Page content */}
    </>
  );
}
```

### Adding Custom FAQ Schema

```tsx
import { FAQSchema } from '@/lib/seo/schema-markup';

export function CustomFAQ() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Your question?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your answer.',
        },
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
```

## Testing SEO

### Google Rich Results Test
https://search.google.com/test/rich-results

### Schema Markup Validator
https://validator.schema.org/

### Google Search Console
Submit sitemap: https://www.google.com/search-console/

### Lighthouse SEO Audit
Run in Chrome DevTools: Lighthouse → SEO

## Best Practices Implemented

1. **Semantic HTML** - Proper heading hierarchy
2. **Meta Descriptions** - Unique for each page
3. **Alt Text** - On all images
4. **Internal Linking** - Between related pages
5. **Mobile-First** - Responsive design
6. **Page Speed** - Optimized assets, Next.js optimization
7. **HTTPS** - Secure connection
8. **Clean URLs** - No file extensions, readable paths
9. **404 Page** - Custom error handling
10. **XML Sitemap** - Auto-updating

## Next Steps

1. Add Open Graph images (`/og-image.png`)
2. Create favicon set (multiple sizes)
3. Add structured language tags (`hreflang`)
4. Implement JSON-LD for reviews
5. Add product schema for dental tools
6. Create blog section with Article schema
7. Set up Google Analytics
8. Submit to search engines

## Resources

- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Schema.org](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [Next.js Metadata Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
