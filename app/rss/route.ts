import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://dental-guide-eta.vercel.app';
  const currentDate = new Date().toUTCString();

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Guerilla Dental Guide</title>
    <description>Dental survival tools for the uninsured - negotiation scripts, school finder, cost estimator</description>
    <link>${baseUrl}</link>
    <language>en-us</language>
    <copyright>Copyright ${new Date().getFullYear()} Guerilla Dental Guide</copyright>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <pubDate>${currentDate}</pubDate>
    <ttl>60</ttl>
    <atom:link href="${baseUrl}/rss" rel="self" type="application/rss+xml"/>
    <item>
      <title>How to Find Affordable Dental Care</title>
      <description>Discover proven strategies for finding low-cost dental services in your area, including dental schools, community clinics, and negotiation tactics.</description>
      <link>${baseUrl}/</link>
      <guid>${baseUrl}/affordable-dental-care</guid>
      <pubDate>${currentDate}</pubDate>
      <category>Dental Care</category>
    </item>
    <item>
      <title>Dental School Clinics: Quality Care at Fraction of Cost</title>
      <description>Learn how dental schools provide supervised, high-quality dental treatments at 30-70% lower prices than private practices.</description>
      <link>${baseUrl}/school-finder</link>
      <guid>${baseUrl}/dental-school-guide</guid>
      <pubDate>${currentDate}</pubDate>
      <category>Dental Education</category>
    </item>
    <item>
      <title>How to Negotiate Your Dental Bills</title>
      <description>Step-by-step scripts and strategies for negotiating dental procedure prices, setting up payment plans, and getting discounts.</description>
      <link>${baseUrl}/script-builder</link>
      <guid>${baseUrl}/negotiation-guide</guid>
      <pubDate>${currentDate}</pubDate>
      <category>Financial Health</category>
    </item>
    <item>
      <title>Dental Emergency Triage: What to Do When You Can't Afford Care</title>
      <description>Emergency assessment tools and guidance for handling urgent dental problems when you're uninsured or on a tight budget.</description>
      <link>${baseUrl}/emergency-triage</link>
      <guid>${baseUrl}/emergency-dental-care</guid>
      <pubDate>${currentDate}</pubDate>
      <category>Emergency Care</category>
    </item>
    <item>
      <title>Understanding Dental Procedure Costs</title>
      <description>Comprehensive cost estimator for common dental procedures. Learn fair market prices and avoid overpaying for treatment.</description>
      <link>${baseUrl}/cost-estimator</link>
      <guid>${baseUrl}/dental-cost-guide</guid>
      <pubDate>${currentDate}</pubDate>
      <category>Cost Guide</category>
    </item>
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
