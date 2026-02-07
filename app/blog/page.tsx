import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { blogPosts, getFeaturedPosts } from '@/lib/blog/posts';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dental Care Blog - Money-Saving Tips & Resources',
  description: 'Expert guides on finding affordable dental care, negotiating bills, and accessing free clinics. Learn how to save money on dental work without insurance.',
  keywords: ['dental blog', 'affordable dental tips', 'dental cost savings', 'free dental care guide', 'dental insurance alternatives'],
  openGraph: {
    type: 'website',
    url: 'https://dental-guide-eta.vercel.app/blog',
    title: 'Dental Care Blog - Money-Saving Tips & Resources',
    description: 'Expert guides on finding affordable dental care, negotiating bills, and accessing free clinics.',
    images: [
      {
        url: 'https://dental-guide-eta.vercel.app/og-blog.png',
        width: 1200,
        height: 630,
        alt: 'Dental Guide Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental Care Blog - Money-Saving Tips & Resources',
    description: 'Expert guides on finding affordable dental care, negotiating bills, and accessing free clinics.',
    images: ['https://dental-guide-eta.vercel.app/og-blog.png'],
  },
  alternates: {
    canonical: 'https://dental-guide-eta.vercel.app/blog',
  },
};

const categories = [
  'All',
  'Money-Saving Tips',
  'Resources',
  'Cost Comparison',
  'Emergency Care',
  'Comprehensive Guide',
];

export default function BlogPage() {
  const featuredPosts = getFeaturedPosts();
  const allPosts = blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-blue-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="flex justify-center">
              <div className="bg-blue-100 p-3 rounded-2xl">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Dental Care Blog
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Expert guides to help you find affordable dental care, negotiate bills, and access free clinics.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                Featured Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <Card className="h-full hover:shadow-lg transition-shadow group cursor-pointer border-2 hover:border-blue-300">
                      <CardHeader>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {post.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                            {post.category}
                          </span>
                          <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              All Articles
            </h2>
            <div className="space-y-6">
              {allPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <article className="group block p-6 rounded-2xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                            {post.category}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="h-3.5 w-3.5 mr-1" />
                            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-3.5 w-3.5 mr-1" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {post.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-xs text-gray-500">
                              #{tag.replace(/\s+/g, '')}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ArrowRight className="h-6 w-6 text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-8" />
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Ready to Take Action?
            </h2>
            <p className="text-lg text-gray-600">
              Use our free tools to find affordable dental care, generate negotiation scripts, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/script-builder">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Generate Negotiation Script
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/school-finder">
                <Button size="lg" variant="outline">
                  Find Dental Schools
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
