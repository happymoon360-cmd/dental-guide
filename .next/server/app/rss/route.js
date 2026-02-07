"use strict";(()=>{var e={};e.id=575,e.ids=[575],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},7796:(e,t,i)=>{i.r(t),i.d(t,{originalPathname:()=>g,patchFetch:()=>m,requestAsyncStorage:()=>d,routeModule:()=>u,serverHooks:()=>p,staticGenerationAsyncStorage:()=>c});var r={};i.r(r),i.d(r,{GET:()=>l});var a=i(3278),n=i(5002),o=i(4877),s=i(1309);async function l(){let e="https://dental-guide-eta.vercel.app",t=new Date().toUTCString(),i=`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Guerilla Dental Guide</title>
    <description>Dental survival tools for the uninsured - negotiation scripts, school finder, cost estimator</description>
    <link>${e}</link>
    <language>en-us</language>
    <copyright>Copyright ${new Date().getFullYear()} Guerilla Dental Guide</copyright>
    <lastBuildDate>${t}</lastBuildDate>
    <pubDate>${t}</pubDate>
    <ttl>60</ttl>
    <atom:link href="${e}/rss" rel="self" type="application/rss+xml"/>
    <item>
      <title>How to Find Affordable Dental Care</title>
      <description>Discover proven strategies for finding low-cost dental services in your area, including dental schools, community clinics, and negotiation tactics.</description>
      <link>${e}/</link>
      <guid>${e}/affordable-dental-care</guid>
      <pubDate>${t}</pubDate>
      <category>Dental Care</category>
    </item>
    <item>
      <title>Dental School Clinics: Quality Care at Fraction of Cost</title>
      <description>Learn how dental schools provide supervised, high-quality dental treatments at 30-70% lower prices than private practices.</description>
      <link>${e}/school-finder</link>
      <guid>${e}/dental-school-guide</guid>
      <pubDate>${t}</pubDate>
      <category>Dental Education</category>
    </item>
    <item>
      <title>How to Negotiate Your Dental Bills</title>
      <description>Step-by-step scripts and strategies for negotiating dental procedure prices, setting up payment plans, and getting discounts.</description>
      <link>${e}/script-builder</link>
      <guid>${e}/negotiation-guide</guid>
      <pubDate>${t}</pubDate>
      <category>Financial Health</category>
    </item>
    <item>
      <title>Dental Emergency Triage: What to Do When You Can't Afford Care</title>
      <description>Emergency assessment tools and guidance for handling urgent dental problems when you're uninsured or on a tight budget.</description>
      <link>${e}/emergency-triage</link>
      <guid>${e}/emergency-dental-care</guid>
      <pubDate>${t}</pubDate>
      <category>Emergency Care</category>
    </item>
    <item>
      <title>Understanding Dental Procedure Costs</title>
      <description>Comprehensive cost estimator for common dental procedures. Learn fair market prices and avoid overpaying for treatment.</description>
      <link>${e}/cost-estimator</link>
      <guid>${e}/dental-cost-guide</guid>
      <pubDate>${t}</pubDate>
      <category>Cost Guide</category>
    </item>
  </channel>
</rss>`;return new s.NextResponse(i,{status:200,headers:{"Content-Type":"application/xml; charset=utf-8","Cache-Control":"public, max-age=3600, s-maxage=3600"}})}let u=new a.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/rss/route",pathname:"/rss",filename:"route",bundlePath:"app/rss/route"},resolvedPagePath:"/Users/jun/Projects/Dental Guide/app/rss/route.ts",nextConfigOutput:"",userland:r}),{requestAsyncStorage:d,staticGenerationAsyncStorage:c,serverHooks:p}=u,g="/rss/route";function m(){return(0,o.patchFetch)({serverHooks:p,staticGenerationAsyncStorage:c})}}};var t=require("../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),r=t.X(0,[379,833],()=>i(7796));module.exports=r})();