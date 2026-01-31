'use client';

import { OrganizationSchema, FAQSchema, WebSiteSchema } from '@/lib/seo/schema-markup';

/**
 * SEO Schema Component
 * Includes all relevant schema markup for the site
 */
export function SchemaMarkup() {
  return (
    <>
      <OrganizationSchema />
      <FAQSchema />
      <WebSiteSchema />
    </>
  );
}
