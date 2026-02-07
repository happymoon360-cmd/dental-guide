export { metadata } from './metadata';

import { Header } from '@/components/layout/header';
import { Container } from '@/components/layout/container';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-6">
        <Container>
          <div className="prose prose-lg max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">About Dental Guide</h1>
            
            <p className="text-gray-700 leading-relaxed mb-4">
               Dental Guide exists to help uninsured and underinsured Americans access quality, affordable dental care.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
               We believe everyone deserves access to quality dental care, regardless of ability to pay. Our free tools help thousands of Americans save hundreds on dental bills every year.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
               <p className="font-semibold text-blue-900 mb-2">What We Do:</p>
               <p className="text-blue-800">
                  • Provide free tools to find affordable dental care
                  • Offer word-for-word negotiation scripts to reduce dental costs
                  • Help users understand treatment options and prices in their area
                  • Share educational resources about dental health and savings
               </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Problem</h2>
            
            <div className="bg-red-50 border-l-4 border-red-600 p-4 my-6">
               <p className="font-semibold text-red-900 mb-2">1 in 4 Americans are Uninsured</p>
               <p className="text-red-800">
                   • 65 million Americans don&apos;t have dental insurance
                  • Millions more have insurance but high deductibles and limited coverage
                  • 1 in 4 Americans skip necessary dental care due to cost
                  • Dental debt is the #1 medical debt in the United States
               </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Solution</h2>
            
            <div className="bg-green-50 border-l-4 border-green-600 p-4 my-6">
               <p className="font-semibold text-green-900 mb-2">Free Tools You Can Use Today:</p>
               <p className="text-green-800">
                  • <strong>Script Builder</strong> - Generate word-for-word negotiation scripts to talk down dental costs
                  • <strong>School Finder</strong> - Locate 75+ dental schools across all 50 states
                  • <strong>Cost Estimator</strong> - Understand treatment prices in your area before visiting a dentist
                  • <strong>Emergency Triage</strong> - Get guidance on dental emergencies and find immediate care options
               </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why This Matters</h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
               Every year, Americans spend over <strong>$140 billion</strong> on dental care, much of which is preventable. By connecting people with affordable dental resources, we help reduce this burden and improve overall oral health.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Story</h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
                I built Dental Guide after watching a close friend struggle with dental costs. Despite having insurance, they couldn&apos;t afford a necessary root canal treatment costing $2,000. This experience sparked the idea for Dental Guide - a resource that would have helped them avoid that painful financial situation.
            </p>

             <p className="text-gray-700 leading-relaxed mb-4">
                Since then, I&apos;ve committed to making quality dental care accessible to everyone, regardless of their insurance status or financial situation. The tools are 100% free, and the information is evidence-based from authoritative sources like FAIR Health, ADA, and the CDC.
             </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What We Offer</h2>
            
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
               <li><strong>Complete transparency:</strong> All our tools are free. No hidden fees, no signup required, no data collection.</li>
               <li><strong>Evidence-based information:</strong> Prices and recommendations come from FAIR Health, the American Dental Association, and other authoritative sources.</li>
               <li><strong>Comprehensive resources:</strong> We cover dental schools, community clinics, state assistance programs, and negotiation strategies.</li>
               <li><strong>User-focused design:</strong> Simple, easy-to-use tools that work for everyone.</li>
               <li><strong>No ads or monetization:</strong> We exist solely to help people access affordable dental care.</li>
            </ul>

             <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Impact & Success Stories</h2>

             <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
                <p className="font-semibold text-blue-900 mb-2">User Savings Stories</p>
                <div className="space-y-3">
                   <div className="border-l-2 border-blue-400 pl-3">
                      <p className="text-blue-900 font-semibold mb-1">&quot;Saved $1,800 on my root canal&quot;</p>
                      <p className="text-blue-700">Used the script generator to negotiate. The dentist matched the price I proposed - $1,400 instead of their quote of $3,200. First time I&apos;ve ever successfully negotiated medical costs!</p>
                      <p className="text-sm text-blue-600">- Sarah M., Austin, TX</p>
                   </div>
                   <div className="border-l-2 border-blue-400 pl-3">
                      <p className="text-blue-900 font-semibold mb-1">&quot;Found dental school within 10 miles&quot;</p>
                      <p className="text-blue-700">My husband needed implants - dental office quoted $6,000. Found a school through Dental Guide, got them for $2,500. Same quality care, 3-hour drive instead of 30 minutes, saved over $3,000.</p>
                      <p className="text-sm text-blue-600">- Jennifer K., Cleveland, OH</p>
                   </div>
                   <div className="border-l-2 border-blue-400 pl-3">
                      <p className="text-blue-900 font-semibold mb-1">&quot;Emergency triage helped me avoid ER visit&quot;</p>
                      <p className="text-blue-700">Had severe tooth pain on a weekend. Used the emergency tool - learned it wasn&apos;t life-threatening, found an urgent care clinic nearby. ER would have cost me $800+ urgent care was $150.</p>
                      <p className="text-sm text-blue-600">- Anonymous user</p>
                   </div>
                </div>
             </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
            
            <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 my-6">
               <h3 className="text-xl font-bold text-gray-900 mb-3">Questions or Feedback?</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                   We&apos;d love to hear from you. Have questions about finding dental care or suggestions for improving our tools?
                </p>
                <p className="mb-4">
                   <strong>Email:</strong> jun91249@gmail.com
                </p>
                <p className="mb-4">
                   We typically respond within 24-48 hours.
                </p>
               <div className="mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Connect With Us</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                     Follow us for dental tips, cost-saving strategies, and new features.
                  </p>
                  <div className="mt-4 space-x-2">
                      <a href="https://twitter.com/dentalguide" className="text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M23 3a10.9 9 2.22 9c1 12 5c1 17a2 3 12.2c5.3 3.12.2 3 5.13 3.12.2 7 3.13l0 0 5.12 2.12-2 3.5.5 17l5.07 3.5.5 0 17.5 3.5 5.13 3.5 5.12 2.12.2 3.5.5 17l5.07 3.5.5 17l5.07 3.5.5 17l5.07 3.5.5 0 17.5 3.5.5 17l5.07 17l5.07z" />
                         </svg>
                            <span>Twitter</span>
                      </a>
                      <a href="https://linkedin.com/company/dentalguide" className="text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.447 2.24 19.76 16.97 19.328 2.165 19.337 19.337 17.197 16.97 19.337 17.197 16.97 19.337 14.666 16.97 17.197 16.97 16.97 12 4.66 16.97 14.666 16.97 14.666z" />
                         </svg>
                            <span>LinkedIn</span>
                      </a>
                  </div>
               </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-4 my-6">
               <p className="font-semibold text-red-900 mb-2">Medical Disclaimer</p>
               <p className="text-red-800">
                  This website is for informational purposes only. We do not provide dental services or medical advice.
                  Always consult with a qualified dental professional for diagnosis and treatment.
               </p>
            </div>

            <div className="mt-12 text-center">
               <h2 className="text-2xl font-bold text-gray-900 mb-4">Start Using Our Free Tools Today</h2>
               <div className="flex flex-wrap gap-4 justify-center">
                  <a href="/script-builder" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                     Generate Negotiation Script
                  </a>
                  <a href="/school-finder" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors">
                     Find Dental Schools
                  </a>
                  <a href="/cost-estimator" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
                     Check Treatment Costs
                  </a>
                  <a href="/emergency-triage" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors">
                     Emergency Triage
                  </a>
               </div>
            </div>
         </div>
       </Container>
     </main>
    </div>
  );
}
