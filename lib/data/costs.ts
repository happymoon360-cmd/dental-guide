import type { CostRanges, RegionMultiplier, CostProcedure as Procedure, Region } from '@/lib/types';

export const costRanges: CostRanges = {
  'exam_cleaning': { min: 80, max: 250 },
  'filling': { min: 150, max: 450 },
  'root_canal': { min: 700, max: 1600 },
  'crown': { min: 800, max: 1800 },
  'extraction_implant': { min: 900, max: 3500 },
  'teeth_whitening': { min: 300, max: 800 },
  'dentures_partial': { min: 800, max: 2500 },
  'bridge': { min: 1500, max: 3500 },
  'orthodontics_braces': { min: 3000, max: 8000 },
  'periodontal_treatment': { min: 500, max: 3000 },
  'extraction_only': { min: 75, max: 500 },
  'wisdom_tooth_removal': { min: 150, max: 650 },
  'root_canal_therapy': { min: 150, max: 400 },
  'mri_ct_scan': { min: 200, max: 800 },
};

export const regionMultiplier: RegionMultiplier = {
  'national_average': 1,
  'Northeast (NY, Boston, DC)': 1.25,
  'West Coast (LA, SF, Seattle)': 1.3,
  'Midwest (Chicago, Detroit)': 0.95,
  'South (Texas, Florida)': 0.9,
  'Mountain West (Denver, Phoenix)': 1.0,
};

export const dentalSchoolDiscounts: Record<string, { percentage: string; notes: string }> = {
  'exam_cleaning': { percentage: '40-60%', notes: 'Student supervision, longer appointments' },
  'filling': { percentage: '50-60%', notes: 'Basic procedures, students need practice' },
  'root_canal': { percentage: '40-50%', notes: 'Complex but supervised by faculty' },
  'crown': { percentage: '40-50%', notes: 'Takes longer, multiple visits required' },
  'extraction_implant': { percentage: '30-50%', notes: 'Implants may not be available at all schools' },
  'teeth_whitening': { percentage: '50-70%', notes: 'Professional whitening at discount' },
  'dentures_partial': { percentage: '40-60%', notes: 'Requires multiple visits over weeks' },
  'bridge': { percentage: '40-50%', notes: 'Faculty-supervised crown and bridge work' },
  'orthodontics_braces': { percentage: '30-50%', notes: 'Limited availability, long treatment time' },
  'periodontal_treatment': { percentage: '50-60%', notes: 'Deep cleaning and gum treatment' },
  'extraction_only': { percentage: '50-70%', notes: 'Simple extractions, students need experience' },
  'wisdom_tooth_removal': { percentage: '40-60%', notes: 'Surgical extraction, faculty supervised' },
  'root_canal_therapy': { percentage: '40-50%', notes: 'Root canal therapy by students' },
  'mri_ct_scan': { percentage: '20-30%', notes: 'Limited discount on imaging' },
};

export const savingTips: string[] = [
  'Dental schools: 40-70% cheaper than private practices',
  'Community clinics: Sliding scale based on income',
  'Cash payment: Ask for 5-10% cash discount',
  'CareCredit: 0% APR financing for 6-24 months',
  'Negotiate: Ask for payment plan discounts',
  'Prevention: Regular cleanings prevent expensive treatments',
  'Second opinion: Get multiple quotes for expensive procedures',
  'Insurance alternatives: Discount dental plans (not insurance)',
  'Timing: Get work done at year-end if youve met deductible',
  'Group buying: Some practices offer family discounts',
];

export function estimateCost(procedure: Procedure, region: Region): string {
  const base = costRanges[procedure];
  if (!base) {
    return 'Cost information not found for this procedure.';
  }

  const multiplier = regionMultiplier[region] ?? 1;
  const min = Math.round(base.min * multiplier);
  const max = Math.round(base.max * multiplier);

  // Procedure labels for display
  const procedureLabels: Record<string, string> = {
    'exam_cleaning': 'Exam/Cleaning',
    'filling': 'Filling',
    'root_canal': 'Root Canal',
    'crown': 'Crown/Restoration',
    'extraction_implant': 'Extraction/Implant',
    'teeth_whitening': 'Teeth Whitening',
    'dentures_partial': 'Dentures/Partial',
    'bridge': 'Bridge',
    'orthodontics_braces': 'Orthodontics (Braces)',
    'periodontal_treatment': 'Periodontal Treatment',
    'extraction_only': 'Extraction Only',
    'wisdom_tooth_removal': 'Wisdom Tooth Removal',
    'root_canal_therapy': 'Root Canal Therapy',
    'mri_ct_scan': 'MRI/CT Scan',
  };

  const displayName = procedureLabels[procedure] || procedure;
  const schoolDiscount = dentalSchoolDiscounts[procedure];

  let output = `${displayName} estimated range: $${min} - $${max}\n\n`;

  if (schoolDiscount) {
    const discountMin = Math.round(min * (1 - parseFloat(schoolDiscount.percentage.split('-')[0]) / 100));
    const discountMax = Math.round(max * (1 - parseFloat(schoolDiscount.percentage.split('-')[1] || schoolDiscount.percentage.split('-')[0]) / 100));
    output += `💰 Dental School Savings: $${discountMin} - $${discountMax} (${schoolDiscount.percentage} off)\n`;
    output += `   Note: ${schoolDiscount.notes}\n\n`;
  }

  output += `💡 Money-Saving Tips:\n`;

  // Add specific tips based on procedure
  if (['root_canal', 'crown', 'extraction_implant', 'bridge', 'orthodontics_braces'].includes(procedure)) {
    output += `   • Consider dental schools for ${schoolDiscount?.percentage || '40-60%'} savings\n`;
    output += `   • Ask about payment plans - many offer 12-24 month financing\n`;
    output += `   • Get 2-3 quotes before committing to expensive procedures\n`;
  } else if (['exam_cleaning', 'filling', 'periodontal_treatment'].includes(procedure)) {
    output += `   • Preventive care saves money long-term\n`;
    output += `   • Community clinics offer sliding scale fees\n`;
    output += `   • Some practices offer cash discounts (5-10%)\n`;
  } else {
    output += `   • ${savingTips[0]}\n`;
    output += `   • ${savingTips[1]}\n`;
    output += `   • ${savingTips[3]}\n`;
  }

  return output;
}

export function getCostContext(procedure: Procedure, region: Region): {
  generalNote: string;
  priceFactors: string[];
  regionalMultiplier: string;
} {
  const multiplier = regionMultiplier[region] ?? 1;
  const multiplierPercent = Math.round((multiplier - 1) * 100);

  const generalNote = 'Actual costs vary based on the complexity of your case, the provider\'s pricing, and your location. Dental school clinics typically charge 40–70% less than private practices for the same procedures.';

  const priceFactors: string[] = [
    'Geographic location',
    'Complexity of the case',
    'Provider type (private practice vs. dental school vs. community clinic)',
    'Whether sedation is needed',
    'Number of visits required',
  ];

  const regionalMultiplier = `${region === 'national_average' ? 'National average' : region}: prices are typically ${multiplierPercent}% ${multiplier > 1 ? 'higher' : multiplier < 1 ? 'lower' : 'equal to'} the national average`;

  return {
    generalNote,
    priceFactors,
    regionalMultiplier,
  };
}


export const procedureOptions = [
  'exam_cleaning',
  'filling',
  'root_canal',
  'crown',
  'extraction_implant',
  'teeth_whitening',
  'dentures_partial',
  'bridge',
  'orthodontics_braces',
  'periodontal_treatment',
  'extraction_only',
  'wisdom_tooth_removal',
  'root_canal_therapy',
  'mri_ct_scan',
] as const;

export const regionOptions = [
  'national_average',
  'Northeast (NY, Boston, DC)',
  'West Coast (LA, SF, Seattle)',
  'Midwest (Chicago, Detroit)',
  'South (Texas, Florida)',
  'Mountain West (Denver, Phoenix)',
] as const;

export const costSources = [
  {
    name: 'American Dental Association — Survey of Dental Fees',
    url: 'https://www.ada.org/resources/practice/dental-fees',
    year: 2024,
  },
  {
    name: 'FAIR Health Consumer Cost Lookup',
    url: 'https://www.fairhealthconsumer.org',
    year: 2025,
  },
  {
    name: 'Healthcare Bluebook — Fair Price Estimates',
    url: 'https://www.healthcarebluebook.com',
    year: 2025,
  },
] as const;

export const costLastReviewed = '2025-02-07';

export const costMethodology = 'Regional multipliers are based on cost-of-living adjustments from BLS data. Dental school discounts are approximate ranges based on educational institution pricing. Actual costs vary significantly based on complexity, provider, and specific circumstances.';
