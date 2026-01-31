export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content?: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

export interface BlogMetadata {
  title: string;
  description: string;
  ogImage?: string;
}
