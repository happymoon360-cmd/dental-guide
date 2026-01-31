import type { JSON_LD } from '@/types/seo';

/**
 * Generates Organization Schema Markup
 */
export function OrganizationSchema() {
  const schema: JSON_LD = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Guerilla Dental Guide',
    url: 'https://dental.guide',
    logo: 'https://dental.guide/logo.png',
    description: 'Dental survival tools for the uninsured - negotiation scripts, school finder, and cost estimator',
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Generates FAQ Schema Markup
 */
export function FAQSchema() {
  const schema: JSON_LD = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I find affordable dental care?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can find affordable dental care through several options: 1) Dental school clinics offer services at 30-70% lower prices, 2) Community health centers charge on a sliding scale based on income, 3) Free clinics organized by dental associations, 4) Negotiating directly with dentists for discounts or payment plans. Use our School Finder tool to locate accredited dental schools near you.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I negotiate my dental bills?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, dental bills are often negotiable. Many dentists offer discounts for cash payments (typically 5-10% off), payment plans, or reduced rates for financial hardship. Be honest about your financial situation, ask for a cash discount, inquire about payment plans, and compare prices with other local providers. Use our Script Builder to create personalized negotiation scripts.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do dental schools offer cheaper treatment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, dental school clinics provide treatment at significantly reduced costs, typically 30-70% less than private practices. Procedures are performed by supervised dental students, ensuring quality care. Common treatments available include cleanings, fillings, root canals, crowns, and dentures. Use our School Finder to locate accredited programs in your area.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if I have a dental emergency but no money?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For dental emergencies without insurance or funds: 1) Use our Emergency Triage tool to assess urgency, 2) Contact dental schools - they often have emergency clinics, 3) Look for community health centers with emergency slots, 4) Ask about charity care or compassionate assistance, 5) Negotiate upfront payment discounts, 6) Consider CareCredit or other financing options for essential care.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much do dental procedures cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dental costs vary widely by location and provider. Average prices: Basic cleaning $75-$200, filling $150-$400, root canal $700-$1500, extraction $75-$600, crown $800-$1500, dentures $600-$3000. Always get multiple quotes and ask for itemized cost breakdowns. Use our Cost Estimator tool to check fair market prices in your zip code.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are there free dental clinics?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Free dental clinics exist through various organizations: Mission of Mercy, Remote Area Medical, state dental association foundations, and community health centers. These clinics typically serve uninsured/low-income patients and are staffed by volunteer dentists. Availability varies by location and events are often scheduled periodically. Check with your local health department for upcoming free clinics.',
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

/**
 * Generates Article Schema for blog/content pages
 */
export function ArticleSchema(props: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  pathname: string;
}) {
  const { title, description, datePublished, dateModified, authorName, pathname } = props;

  const schema: JSON_LD = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: 'https://dental.guide/og-image.png',
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: authorName || 'Guerilla Dental Guide',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Guerilla Dental Guide',
      logo: {
        '@type': 'ImageObject',
        url: 'https://dental.guide/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://dental.guide${pathname}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Generates Breadcrumb Schema
 */
export function BreadcrumbSchema(props: {
  items: Array<{ name: string; path: string }>;
}) {
  const { items } = props;

  const schema: JSON_LD = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://dental.guide${item.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Generates WebSite Schema with SearchAction
 */
export function WebSiteSchema() {
  const schema: JSON_LD = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Guerilla Dental Guide',
    url: 'https://dental.guide',
    description: 'Dental survival tools for the uninsured',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://dental.guide/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
