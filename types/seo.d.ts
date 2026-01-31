// SEO and Schema Markup Type Definitions

export interface JSON_LD {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

export interface FAQItem {
  '@type': 'Question';
  name: string;
  acceptedAnswer: {
    '@type': 'Answer';
    text: string;
  };
}

export interface RSSFeed {
  title: string;
  description: string;
  link: string;
  language: string;
  copyright: string;
  lastBuildDate: string;
  pubDate: string;
  ttl: number;
  items: RSSItem[];
}

export interface RSSItem {
  title: string;
  description: string;
  link: string;
  guid: string;
  pubDate: string;
  category: string;
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface ArticleSchemaProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  pathname: string;
}

export interface MetaTags {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
  noindex?: boolean;
  nofollow?: boolean;
}
