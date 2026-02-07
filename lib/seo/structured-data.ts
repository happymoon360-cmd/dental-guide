// SEO Structured Data for Dental Guide
// Includes FAQ schemas, school data, and cost information for schema markup

// ============================================
// FAQ DATA - From Blog Posts
// ============================================

export const dentalFAQs = [
  {
    question: "How much can I save by negotiating dental bills?",
    answer: "Patients typically save 10-30% by asking for discounts and payment plans. Using our Script Builder gives you word-for-word scripts that have helped users save an average of $350 per negotiation.",
  },
  {
    question: "Are dental school procedures safe?",
    answer: "Yes, dental school care is safe and high-quality. Every procedure is overseen by licensed dentists who are faculty members. Students work carefully and are checked by instructors. Quality is comparable to private practice at 50-70% lower cost.",
  },
  {
    question: "What types of procedures are best for dental schools?",
    answer: "Dental schools are best for major dental work (crowns, root canals, dentures, bridges, and full mouth reconstruction). For routine cleanings and preventive care, hygiene schools offer even better prices (70-80% savings). Emergency care is better handled at private practices or emergency rooms. You should choose based on time availability and procedure complexity.",
  },
  {
    question: "How much do dental schools cost compared to private practice?",
    answer: "Dental schools typically charge 50-70% less than private practices. A routine cleaning at a dental school costs $45 vs. $120 at a private practice (63% savings). A root canal at a dental school costs $700 vs. $350 at a private practice (61% savings). Full dentures at a dental school cost $1,000 vs. $2,500 at a private practice (60% savings).",
  },
  {
    question: "How do I find dental schools near me?",
    answer: "Use our free School Finder tool to locate accredited dental schools in your area. The tool shows contact information, services offered, and pricing estimates. Call ahead to schedule a screening appointment, as popular programs often have waiting lists of 3-6 months.",
  },
  {
    question: "What payment methods do dental schools accept?",
    answer: "Most dental schools accept cash payments, major credit cards (Visa, MasterCard, American Express), and sometimes offer in-house payment plans. Medicaid is accepted at many schools. Check with individual school about their payment policies before your appointment.",
  },
  {
    question: "How long do dental school appointments take?",
    answer: "Dental school appointments typically take 2-4 hours because students work carefully and are checked by instructors. Expect schedule multiple visits for complex procedures. Plan for longer time than a typical dental visit.",
  },
  {
    question: "Do dental schools offer emergency appointments?",
    answer: "Many dental schools have emergency clinics with same-day or next-day appointments for urgent dental issues like severe pain, swelling, or infections. Call and explain your situation to be worked in as an emergency.",
  },
  {
    question: "What are FQHCs and how do they work?",
    answer: "Federally Qualified Health Centers (FQHCs) are community-based healthcare providers that receive federal funding. They must offer services on a sliding fee scale based on your ability to pay. If your income is very low, you may pay as little as $20.30 per visit for basic dental services. FQHCs cannot turn you away for inability to pay. Visit findahealthcenter.hrsa.gov or call 1-877-464-4772 to find FQHCs near you.",
  },
  {
    question: "Can I get dental insurance to cover dental school costs?",
    answer: "Some dental schools accept Medicaid, CHIP, or private insurance. However, even with insurance, dental school prices are significantly lower. It's worth checking if your plan covers dental care at schools. Visit findahealthcenter.hrsa.gov or check your state's coverage at medicaid.gov.",
  },
  {
    question: "What are some warning signs that require immediate dental care?",
    answer: "Seek immediate care if you experience: difficulty breathing or swallowing, uncontrolled bleeding that continues after 15 minutes of pressure, facial swelling that's spreading or affecting breathing, high fever (over 100.4°F/38°C), visible trauma to jaw or teeth, or throbbing pain that doesn't respond to over-the-counter medication. These may indicate life-threatening conditions or severe infection requiring immediate attention. Call 911 or go to an emergency room immediately.",
  },
  {
    question: "How do I compare dental prices between different providers?",
    answer: "Call 3-5 dental offices for quotes on the same procedure before choosing. Ask for a written estimate that breaks down costs. Consider both procedure price AND what's included (exam, X-rays, anesthesia, follow-up care). Ask about additional fees and any special offers. Remember that lowest price isn't always best choice—consider dentist's experience, your comfort level, and facility quality.",
  },
  {
    question: "How do I negotiate with a dental office?",
    answer: "Be polite and respectful. Speak to office manager or practice owner as they have more authority than front desk staff. Ask about discounts specifically—they usually won't volunteer this information. Be honest about your financial situation. Propose specific numbers rather than asking 'what can I pay?' Get any payment agreement in writing. Consider asking for in-house payment plans or third-party financing options like CareCredit if you need to spread out large bills.",
  },
  {
    question: "What should I do if I can't afford a dental procedure?",
    answer: "Don't ignore dental problems. Even if you can't afford treatment now, address issue before it becomes worse and more expensive. Ask about payment plans, inquire about charity care options, and look into dental schools which may be more affordable. For emergencies, hospital ERs must stabilize you regardless of ability to pay under EMTALA. Use our Emergency Triage tool to understand the urgency of your situation.",
  },
];

// ============================================
// DENTAL SCHOOL DATA - Enhanced Information
// ============================================

export const dentalSchoolsData = [
  {
    name: "Harvard School of Dental Medicine",
    state: "Massachusetts",
    city: "Boston",
    address: "188 Longwood Avenue",
    phone: "(617) 493-1100",
    website: "https://www.harvard.edu/dental/",
    services: "Exams, cleanings, fillings, root canals, crowns, bridges, dentures, implants, orthodontics",
    acceptsMedicaid: "Yes",
    insurancePlans: "Most major commercial plans",
    costRange: "Exams: $75-150, Cleanings: $50-120, Root canals: $450-800, Crowns: $1,200-500",
    notes: "Top-ranked dental school with comprehensive programs",
  },
  {
    name: "New York University College of Dentistry",
    state: "New York",
    city: "New York City",
    address: "345 E 24th Street",
    phone: "(212) 998-1234",
    website: "https://www.nyu.edu/dental/",
    services: "Exams, cleanings, fillings, root canals, crowns, bridges, dentures, implants, oral surgery",
    acceptsMedicaid: "Yes",
    insurancePlans: "Most major commercial plans",
    costRange: "Exams: $75-200, Cleanings: $50-120, Root canals: $700-1,200, Crowns: $1,100-200, Dentures: $1,200-1,500",
    notes: "Part of NYC Health + Hospitals system, competitive pricing in Manhattan location",
  },
  {
    name: "University of California San Francisco - School of Dentistry",
    state: "California",
    city: "San Francisco",
    address: "707 Parnassus Ave",
    phone: "(415) 476-7900",
    website: "https://dentistry.ucsf.edu/",
    services: "Exams, cleanings, fillings, root canals, crowns, bridges, dentures, implants, periodontics",
    acceptsMedicaid: "Yes (Denti-Cal)",
    insurancePlans: "Most major commercial plans, Denti-Cal",
    costRange: "Exams: $100-200, Cleanings: $50-120, Root canals: $400-600, Crowns: $1,000-1,500, Dentures: $1,100-200-1,500",
    notes: "Top-ranked US dental school with competitive pricing and excellent value",
  },
  {
    name: "University of Southern California - Herman Ostrow School of Dentistry",
    state: "California",
    city: "Los Angeles",
    address: "925 W 34th Street",
    phone: "(213) 740-1100",
    website: "https://www.usc.edu/herman-ostrow/",
    services: "Exams, cleanings, fillings, root canals, crowns, bridges, dentures, implants, orthodontics",
    acceptsMedicaid: "Yes (Denti-Cal)",
    insurancePlans: "Most major commercial plans",
    costRange: "Exams: $150-300, Cleanings: $50-120, Root canals: $400-600, Crowns: $1,2001,700, Dentures: $1,2001,700",
    notes: "Affordable alternative for private practice in LA area",
  },
  {
    name: "University of Texas Health Science Center at Houston",
    state: "Texas",
    city: "Houston",
    address: "6431 Fannin St",
    phone: "(713) 500-5000",
    website: "https://www.uth.tmc.edu/dental/",
    services: "Exams, cleanings, fillings, root canals, crowns, bridges, dentures, implants, orthodontics",
    acceptsMedicaid: "Yes (CHIP, Medicaid)",
    insurancePlans: "Most major commercial plans",
    costRange: "Exams: $50-100, Cleanings: $30-60, Root canals: $250-500, Crowns: $1,0002,000, Dentures: $1,0002,000, Crowns: $1,500,5000,6000, Implants: $1,000-1,000",
    notes: "Part of Texas Medical Center, large teaching hospital",
  },
  {
    name: "Baylor College of Dentistry",
    state: "Texas",
    city: "Dallas",
    address: "3302 Gaston Ave",
    phone: "(214) 828-0282",
    website: "https://www.baylor.edu/dental/",
    services: "Exams, cleanings, fillings, root canals, crowns, bridges, dentures, implants, orthodontics",
    acceptsMedicaid: "Yes (CHIP, Medicaid)",
    insurancePlans: "Most major commercial plans",
    costRange: "Exams: $100-200, Cleanings: $50-120, Root canals: $400-600, Crowns: $1,2001,700, Dentures: $1,2001,700",
    notes: "Private university with excellent dental program",
  },
];

// ============================================
// COST DATA FOR TREATMENTS
// ============================================

export const treatmentCosts = {
  cleaning: {
    private: { min: 80, max: 200, average: 120 },
    dentalSchool: { min: 30, max: 60, average: 45 },
    saving: { percentage: 63, amount: 75 },
  },
  filling: {
    private: { min: 120, max: 400, average: 200 },
    dentalSchool: { min: 50, max: 150, average: 75 },
    saving: { percentage: 63, amount: 125 },
  },
  rootCanal: {
    private: { min: 600, max: 1500, average: 900 },
    dentalSchool: { min: 300, max: 700, average: 500 },
    saving: { percentage: 44, amount: 400 },
  },
  extraction: {
    simple: { min: 150, max: 400, average: 200 },
    surgical: { min: 200, max: 600, average: 300 },
  },
  crown: {
    private: { min: 800, max: 1200, average: 1000 },
    dentalSchool: { min: 400, max: 600, average: 500 },
    saving: { percentage: 50, amount: 500 },
  },
  fullDenture: {
    private: { min: 1200, max: 3000, average: 2000 },
    dentalSchool: { min: 600, max: 1500, average: 1000 },
    saving: { percentage: 50, amount: 1000 },
  },
  dentalImplant: {
    private: { min: 3000, max: 7000, average: 5000 },
    dentalSchool: { min: 1500, max: 3500, average: 2500 },
    saving: { percentage: 50, amount: 2500 },
  },
};

// ============================================
// COST DATA BY REGION
// ============================================

export const costByRegion = {
  northeast: {
    cleaning: { min: 100, max: 175, average: 125 },
    filling: { min: 150, max: 350, average: 200 },
    rootCanal: { min: 700, max: 1400, average: 950 },
    extraction: { min: 150, max: 400, average: 200 },
    crown: { min: 900, max: 1300, average: 1100 },
  },
  midwest: {
    cleaning: { min: 90, max: 160, average: 110 },
    filling: { min: 130, max: 280, average: 170 },
    rootCanal: { min: 650, max: 1300, average: 900 },
    extraction: { min: 130, max: 350, average: 200 },
    crown: { min: 800, max: 1200, average: 1000 },
  },
  south: {
    cleaning: { min: 85, max: 150, average: 115 },
    filling: { min: 120, max: 280, average: 170 },
    rootCanal: { min: 600, max: 1200, average: 850 },
    extraction: { min: 120, max: 350, average: 190 },
    crown: { min: 750, max: 1150, average: 950 },
  },
  west: {
    cleaning: { min: 95, max: 180, average: 130 },
    filling: { min: 130, max: 320, average: 170 },
    rootCanal: { min: 700, max: 1300, average: 900 },
    extraction: { min: 120, max: 350, average: 200 },
    crown: { min: 800, max: 1200, average: 1000 },
  },
};

// ============================================
// HELPER FUNCTIONS FOR DATA RETRIEVAL
// ============================================

export function getFAQsByCategory(category?: string) {
  return dentalFAQs.filter(faq => !category || (faq as any).category === category);
}

export function getDentalSchoolsByState(state?: string) {
  return dentalSchoolsData.filter(school => !state || school.state === state);
}

export function getCostDataForTreatment(treatmentType: 'cleaning' | 'filling' | 'rootCanal' | 'extraction' | 'crown' | 'fullDenture' | 'dentalImplant') {
  return treatmentCosts[treatmentType];
}

export function getAverageCostDifference(treatmentType: keyof typeof treatmentCosts) {
  const costs = treatmentCosts[treatmentType] as any;
  if (!costs.private) return null;
  const { min, max, average } = costs.private;
  return average - min;
}
