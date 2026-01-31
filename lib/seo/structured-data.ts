/**
 * FAQ data for various pages
 * This module provides reusable FAQ content for schema markup
 */

export const FAQ_DATA = {
  homepage: [
    {
      question: 'How do I find affordable dental care?',
      answer:
        'You can find affordable dental care through several options: 1) Dental school clinics offer services at 30-70% lower prices, 2) Community health centers charge on a sliding scale based on income, 3) Free clinics organized by dental associations, 4) Negotiating directly with dentists for discounts or payment plans. Use our School Finder tool to locate accredited dental schools near you.',
    },
    {
      question: 'Can I negotiate my dental bills?',
      answer:
        'Yes, dental bills are often negotiable. Many dentists offer discounts for cash payments (typically 5-10% off), payment plans, or reduced rates for financial hardship. Be honest about your financial situation, ask for a cash discount, inquire about payment plans, and compare prices with other local providers. Use our Script Builder to create personalized negotiation scripts.',
    },
    {
      question: 'What if I have a dental emergency but no money?',
      answer:
        'For dental emergencies without insurance or funds: 1) Use our Emergency Triage tool to assess urgency, 2) Contact dental schools - they often have emergency clinics, 3) Look for community health centers with emergency slots, 4) Ask about charity care or compassionate assistance, 5) Negotiate upfront payment discounts, 6) Consider CareCredit or other financing options for essential care.',
    },
  ],
  schools: [
    {
      question: 'Are dental school clinics safe?',
      answer:
        'Yes, dental school clinics are safe and provide quality care. All procedures are performed by dental students under close supervision of experienced licensed dentists and faculty members. The work is checked at every step, ensuring high standards of care while students gain valuable experience.',
    },
    {
      question: 'How much can I save at a dental school?',
      answer:
        'Dental school clinics typically charge 30-70% less than private practices. For example, a cleaning that might cost $150 at a private dentist could cost $45-100 at a dental school. Complex procedures like root canals or crowns offer even greater savings, potentially saving you hundreds or thousands of dollars.',
    },
    {
      question: 'What procedures do dental schools offer?',
      answer:
        'Most dental schools offer a comprehensive range of services including cleanings, fillings, root canals, crowns, bridges, dentures, implants, and even cosmetic procedures. However, availability may vary by school and semester, so it\'s best to contact the school directly to confirm they offer the specific treatment you need.',
    },
  ],
  costs: [
    {
      question: 'Why do dental prices vary so much?',
      answer:
        'Dental prices vary based on location (urban vs rural), dentist experience, overhead costs, materials used, and procedure complexity. A crown in New York City might cost $2,000 while the same procedure in a rural area could be $800. Always get multiple quotes and ask for itemized cost breakdowns to compare effectively.',
    },
    {
      question: 'What is the average cost of common dental procedures?',
      answer:
        'Average costs vary by location: Basic cleaning $75-$200, filling $150-$400, root canal $700-$1500, extraction $75-$600, crown $800-$1500, dentures $600-$3000. Use our Cost Estimator tool to check fair market prices in your specific zip code before agreeing to any treatment.',
    },
    {
      question: 'How can I avoid overpaying for dental care?',
      answer:
        'To avoid overpaying: 1) Use our Cost Estimator to check fair prices in your area, 2) Get 2-3 written quotes from different dentists, 3) Ask about cheaper alternatives (e.g., amalgam vs composite fillings), 4) Negotiate for cash discounts or payment plans, 5) Consider dental schools for major procedures, 6) Ask for itemized bills to understand what you\'re paying for.',
    },
  ],
  emergency: [
    {
      question: 'What counts as a dental emergency?',
      answer:
        'Dental emergencies typically include: severe toothache with swelling, bleeding that won\'t stop, knocked-out tooth (within 30 minutes), loose tooth in adults, traumatic injury to face/jaw, signs of infection (fever, facial swelling, difficulty breathing/swallowing). Pain alone doesn\'t always constitute an emergency - use our Triage tool to assess your situation.',
    },
    {
      question: 'Where can I get emergency dental care with no money?',
      answer:
        'Options for emergency dental care without funds: 1) Hospital emergency rooms (they can stabilize but don\'t provide dental treatment), 2) Dental school emergency clinics, 3) Community health centers with emergency slots, 4) Free clinics (call 2-1-1 for referrals), 5) Negotiate payment plans before treatment, 6) CareCredit or other financing options.',
    },
    {
      question: 'How can I manage severe tooth pain at home?',
      answer:
        'For temporary tooth pain relief: 1) Rinse with warm salt water, 2) Use over-the-counter pain relievers (ibuprofen, acetaminophen), 3) Apply clove oil to the affected area, 4) Use a cold compress on your cheek, 5) Avoid very hot/cold foods, 6) Keep your head elevated while sleeping. Remember: these are temporary measures. You still need to see a dentist as soon as possible.',
    },
  ],
};

export type FAQCategory = keyof typeof FAQ_DATA;

export interface FAQItem {
  question: string;
  answer: string;
}
