export { metadata } from './metadata';

import { Header } from '@/components/layout/header';
import { Container } from '@/components/layout/container';

export default function PressPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-6">
        <Container>
          <div className="prose prose-lg max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Press Kit - Media Resources for Dental Guide</h1>
            
             <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to the Dental Guide press kit. Here you&apos;ll find everything you need to cover our story, showcase our impact, and understand our mission.
             </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Quick Facts</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
               <p className="font-semibold text-blue-900 mb-2">Dental Guide at a Glance:</p>
               <ul className="list-disc pl-6 mb-4 space-y-2 text-blue-800">
                  <li><strong>75 dental schools</strong> listed across 38 states + DC + Puerto Rico</li>
                  <li><strong>38 community clinics</strong> in states without dental schools</li>
                  <li><strong>50 US states fully covered</strong> with community health clinics</li>
                  <li><strong>14 treatment types</strong> available in our cost estimator</li>
                  <li><strong>4 free tools</strong> available at dental.guide</li>
                  <li><strong>Free dental scripts</strong> in English and Spanish for negotiation</li>
                  <li><strong>Emergency triage</strong> system for immediate dental emergencies</li>
               </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Company Overview</h2>
            
            <div className="bg-green-50 border-l-4 border-green-600 p-4 my-6">
               <h3 className="text-xl font-bold text-green-900 mb-3">Our Mission</h3>
               <p className="text-green-800">
                  Dental Guide exists to help uninsured and underinsured Americans access quality, affordable dental care. We provide free tools that save users hundreds of dollars on dental bills through:
                  <ul className="list-disc pl-4 space-y-2 text-green-800">
                     <li>Finding dental schools with 50-70% lower costs</li>
                     <li>Generating word-for-word negotiation scripts</li>
                     <li>Comparing treatment costs across providers</li>
                     <li>Providing emergency guidance when pain strikes</li>
                     <li>Educating users about affordable care options</li>
                  </ul>
               </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Boilerplate Description</h2>
            
            <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 my-6">
               <p className="text-gray-700 leading-relaxed mb-4">
                  Dental Guide is a free resource that helps Americans access affordable dental care. Our platform offers four free tools: Script Builder for negotiating dental costs, School Finder to locate 75+ dental schools across the country, Cost Estimator to understand treatment prices, and Emergency Triage for immediate dental issues. All tools are free to use and available at dental.guide, no signup required.
               </p>
               <p className="text-gray-700 leading-relaxed mb-4">
                  Founded in 2026, Dental Guide is growing its impact through educational content and practical tools. We believe that everyone deserves access to quality dental care, regardless of their insurance status or financial situation. By connecting people with affordable dental resources, we help reduce the $140 billion Americans spend annually on preventable dental care and improve overall oral health.
               </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Downloadable Assets</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                 <h3 className="text-xl font-bold text-gray-900 mb-3">Logo Pack</h3>
                 <p className="text-gray-600 mb-2">High-resolution logo files for print and web use.</p>
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
                     <p className="font-semibold text-blue-900 mb-2">Availability:</p>
                     <p className="text-blue-800">Logo pack and brand guidelines are available. Contact us for access.</p>
                  </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                 <h3 className="text-xl font-bold text-gray-900 mb-3">Brand Guidelines</h3>
                 <p className="text-gray-600 mb-2">Typography, colors, and usage guidelines.</p>
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
                     <p className="font-semibold text-blue-900 mb-2">Availability:</p>
                     <p className="text-blue-800">Brand guidelines document is available. Contact us for access.</p>
                  </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                 <h3 className="text-xl font-bold text-gray-900 mb-3">Screenshots</h3>
                 <p className="text-gray-600 mb-2">Product screenshots showcasing our tools.</p>
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
                     <p className="font-semibold text-blue-900 mb-2">Availability:</p>
                      <p className="text-blue-800">Product screenshots are available. Contact us for access.</p>
                   </div>
               </div>
            </div>
         </div>

         <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Media Contact</h2>
            
            <div className="bg-red-50 border-l-4 border-red-600 p-4 my-6">
               <h3 className="text-xl font-bold text-red-900 mb-3">Press Inquiries</h3>
               <p className="text-red-800">
                  For interviews, partnerships, or feature stories.
               </p>
               <div className="mt-4 space-y-2">
                  <p className="font-semibold text-red-900 mb-2">Email:</p>
                  <p className="text-red-800">jun91249@gmail.com</p>
                  <p className="font-semibold text-red-900 mb-2">Response Time:</p>
                  <p className="text-red-800">We respond within 24-48 hours.</p>
               </div>
               <div className="mt-6">
                  <h3 className="text-xl font-bold text-red-900 mb-3">Press Requests</h3>
                  <p className="text-red-800">
                  Include topic, publication date, and preferred contact method.
               </p>
               <div className="bg-red-50 border-l-4 border-red-600 p-4 my-6 mt-4">
                  <p className="font-semibold text-red-900 mb-2">Note:</p>
                  <p className="text-red-800">We prioritize stories that impact our mission of making affordable dental care accessible.
               </p>
               </div>
            </div>

            <div className="mt-12 text-center">
               <div className="inline-flex gap-4 justify-center">
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
