import type { UrgencyGuides, Symptom } from '@/lib/types';

export const urgencyGuides: UrgencyGuides = {
  'severe_pain': {
    level: '🔴 Emergency - Treatment recommended within 24 hours',
    action: 'Take pain relievers and visit a dentist as soon as possible.',
    firstAid: 'Salt water rinse: Dissolve 1 teaspoon of salt in 1 cup of warm water and rinse for 30 seconds. Cold compress: Apply an ice pack wrapped in a towel to the cheek for 15 minutes.',
    painRelief: 'Ibuprofen 400-600mg every 6-8 hours after meals. Acetaminophen 500-1000mg every 4-6 hours. Alternating doses possible for severe pain. Avoid aspirin due to bleeding risk.',
    whatToExpect: 'Root canal or extraction may be needed after treating the cause. Treatment time 30-90 minutes. X-ray will identify the exact cause.',
    warning: 'Visit emergency room immediately if experiencing difficulty breathing, difficulty swallowing, fever above 38°C (100.4°F), or swelling spreading to the neck.',
  },
  'facial_swelling': {
    level: '🔴 Emergency - Immediate treatment required',
    action: 'Go to the emergency room immediately if swelling is spreading rapidly or you have difficulty breathing.',
    firstAid: 'Cold compress: Apply ice pack wrapped in a towel for 15 minutes, then rest for 15 minutes. Repeat. Sleep with your head elevated on pillows. Avoid hot compresses.',
    painRelief: 'Ibuprofen 400-600mg every 6-8 hours (helps reduce swelling). Use caution if taking cold medication.',
    whatToExpect: 'Prescription for drainage and antibiotics. Improvement expected in 2-3 days after pus drainage. Follow-up in 1 week.',
    warning: 'Visit emergency room immediately for difficulty breathing, swallowing problems, fever, blurred vision, or changes in consciousness. Infection may spread to brain/airway.',
  },
  'persistent_bleeding': {
    level: '🔴 Emergency - Immediate bleeding control required',
    action: 'Apply firm pressure with clean gauze for 20-30 minutes. If bleeding continues, visit a dentist immediately.',
    firstAid: 'Continuously press the bleeding area with gauze for 20-30 minutes. Do not check frequently. Keep your head tilted forward. Do not rinse with water.',
    painRelief: 'Avoid aspirin (worsens bleeding). Acetaminophen 500-1000mg only may be taken.',
    whatToExpect: 'Prescription of hemostatic agents, sutures, removal of bleeding cause. Takes 30-60 minutes. Blood tests may be required.',
    warning: 'Visit emergency room immediately if bleeding persists after 10-15 minutes of firm pressure, if bleeding is excessive, or if you feel severe dizziness/fatigue.',
  },
  'broken_tooth': {
    level: '🟡 Urgent - Treatment recommended within 72 hours',
    action: 'Save the broken tooth fragment and visit a dentist quickly. Visit is needed even without pain.',
    firstAid: 'Store broken fragment in milk or saline solution. If the edge is sharp, cover with dental wax. Avoid hot and cold foods.',
    painRelief: 'Ibuprofen 400-600mg every 6-8 hours. Severe pain expected if nerve is exposed.',
    whatToExpect: 'X-ray to check nerve/root. For severe cases: crown or root canal. For minor cases: resin filling. 1-2 visits.',
    warning: 'Visit within 24 hours if tooth discoloration, persistent pain, or gum swelling occurs. Emergency if entire tooth is broken.',
  },
  'gum_swelling': {
    level: '🟡 Urgent - Treatment recommended within 48 hours',
    action: 'Visit a dentist promptly if swelling is accompanied by pain.',
    firstAid: 'Salt water rinse 3-4 times daily. Cold compress for 15 minutes, 2-3 times daily. Brush gently. Do not press on the swollen area.',
    painRelief: 'Ibuprofen 400-600mg every 6-8 hours (reduces swelling and pain).',
    whatToExpect: 'Tartar removal and periodontal treatment. If abscess present: drainage. Antibiotics may be prescribed. 1-2 visits.',
    warning: 'Visit immediately for fever, facial swelling, difficulty swallowing, or worsening bad breath. Risk of periodontal abscess.',
  },
  'pain_with_fever': {
    level: '🔴 Emergency - Immediate treatment required',
    action: 'Visit an emergency dentist or emergency room immediately if fever is above 38°C (100.4°F).',
    firstAid: 'Rinse with lukewarm water. Stay hydrated. Rest. Use cold compress to reduce swelling.',
    painRelief: 'Ibuprofen 400-600mg every 6-8 hours (reduces fever and pain). Acetaminophen 500-1000mg may be alternated.',
    whatToExpect: 'Blood tests, antibiotic prescription, abscess drainage, treatment of causative tooth. Hospitalization possible.',
    warning: 'Visit emergency room immediately for fever above 39°C (102.2°F), chills, confusion, or difficulty breathing. Risk of sepsis.',
  },
  'lost_crown_filling': {
    level: '🟢 Routine - Recommended within 1 week',
    action: 'Save the lost crown/filling and visit a dentist soon. Delay may damage the tooth.',
    firstAid: 'Clean the lost crown and store it. Temporary filling material available at pharmacies. Avoid hot/cold foods, hard foods, and sweets.',
    painRelief: 'Acetaminophen 500-1000mg for sensitivity. Ibuprofen may also be used.',
    whatToExpect: 'Crown recementation or remaking. Root canal may be needed if nerve is exposed. 1-2 visits (1-2 weeks if remaking required).',
    warning: 'Visit within 24 hours for severe pain, tooth discoloration, or extreme hot sensitivity. Risk of nerve exposure.',
  },
  'tooth_knocked_out': {
    level: '🔴 Emergency - Golden time: within 30 minutes',
    action: 'Find the tooth, keep it moist, and visit a dentist immediately!',
    firstAid: 'Hold the tooth by the crown only, NOT the root (white part). Rinse with running water without touching the root. Reinsert into socket as quickly as possible. If not possible, store in milk or inside the cheek. Must not dry out!',
    painRelief: 'Ibuprofen 400-600mg. Local anesthesia during reimplantation.',
    whatToExpect: 'Splint attached after reimplantation. Splint for 2-4 weeks. Monitor root resorption. Success rate: 90% within 30 min, 70% within 1 hour, drops sharply after 2 hours.',
    warning: 'For permanent tooth: arrival at dentist within 30 minutes is critical. Reimplantation fails if tooth dries. Keep moist and rush to emergency!',
  },
  'broken_braces_wire': {
    level: '🟡 Urgent - Prompt orthodontist visit',
    action: 'Take immediate action if sharp wire is poking cheek/gums.',
    firstAid: 'Sharp end: Cover with pencil eraser, cotton swab, or dental wax. Protruding wire: Gently push back with cotton swab. Never cut it yourself!',
    painRelief: 'Acetaminophen for area irritation. Salt water rinse for inflammation relief.',
    whatToExpect: 'Wire removal or repositioning. Wax provided. Takes 15-30 minutes. Regular orthodontic schedule maintained.',
    warning: 'Visit immediately if wire pokes gums/cheek/tongue or was swallowed. Emergency room for difficulty swallowing.',
  },
  'object_stuck_teeth': {
    level: '🟡 Urgent - Dental visit if removal needed',
    action: 'Try floss gently, then visit dentist if unsuccessful. Do not force removal.',
    firstAid: 'Use floss gently. Do NOT use toothpicks, pins, or sharp tools. Rinse with water several times. Plastic pick may be used.',
    painRelief: 'Uncomfortable feeling but pain reliever unnecessary. Acetaminophen if gums are irritated.',
    whatToExpect: 'Professional tools for safe removal. Check for gum damage. Takes 15-30 minutes. Interdental brush recommended if teeth are close together.',
    warning: 'Forced removal can damage gums or push object deeper. Visit dentist if not out in 24-48 hours. Visit immediately if swelling/fever/pain worsens.',
  },
  'jaw_pain_cant_open': {
    level: '🟡 Urgent - Treatment recommended within 48 hours',
    action: 'If mouth cannot open or jaw is locked, eat only soft foods.',
    firstAid: 'Avoid hard foods, gum, and excessive mouth opening. Hot compress for 15 minutes, 2-3 times daily. Eat soft foods only. Gentle jaw massage.',
    painRelief: 'Ibuprofen 400-600mg every 6-8 hours (reduces inflammation). Acetaminophen may be alternated.',
    whatToExpect: 'X-ray of jaw joint. Physical therapy, occlusal appliance, muscle relaxants prescribed. Jaw joint surgery possible for severe cases.',
    warning: 'Visit emergency dentist immediately if mouth cannot open at all. Possible dislocation. Quick action needed to prevent permanent damage.',
  },
  'gum_abscess': {
    level: '🟡 Urgent - Treatment recommended within 48 hours',
    action: 'Do not squeeze! Visit dentist quickly. Risk of infection spreading.',
    firstAid: 'Never squeeze! Salt water rinse 3-4 times daily. Cold compress for 15 minutes. Do not press on area. Brush gently.',
    painRelief: 'Ibuprofen 400-600mg every 6-8 hours. Salt water rinse for discomfort relief.',
    whatToExpect: 'Abscess drainage, deep periodontal scaling, antibiotic prescription. Root canal of causative tooth possible. 1-2 visits.',
    warning: 'Visit immediately for fever, facial swelling, lymph node swelling, or difficulty swallowing. Risk of infection spreading if abscess ruptures.',
  },
  'cold_sensitivity': {
    level: '🟢 Routine - Book appointment',
    action: 'Book appointment if you have sensitive teeth. Visit sooner if worsening.',
    firstAid: 'Avoid cold foods on sensitive tooth area. Brush with lukewarm water. Clean between teeth with interdental brush. Use fluoride toothpaste.',
    painRelief: 'Pain reliever unnecessary. Acetaminophen may be taken for severe sensitivity.',
    whatToExpect: 'Diagnosis of sensitive teeth, then treatment. Fluoride varnish, resin filling, or root canal. 1-2 visits.',
    warning: 'Extreme sensitivity to cold water or persistent pain may indicate nerve exposure. Prompt treatment needed. Pain at night is an emergency.',
  },
  'hot_sensitivity': {
    level: '🟡 Urgent - Treatment within 1 week required',
    action: 'Sensitivity to heat indicates nerve inflammation. Visit dentist soon.',
    firstAid: 'Avoid hot food/drinks. Consume only lukewarm or cold foods. Do not chew with the affected tooth.',
    painRelief: 'Ibuprofen 400-600mg every 6-8 hours (reduces inflammation). Acetaminophen may be alternated.',
    whatToExpect: 'Root canal likely needed. X-ray and pulp diagnosis. Pulp may be preserved if inflammation is reversible. 1-3 visits.',
    warning: 'Pain at night or persistent pain after heat sensitivity indicates nerve necrosis progressing. Visit within 24-48 hours essential.',
  },
  'bad_taste_smell': {
    level: '🟢 Routine - Book appointment',
    action: 'Persistent bad taste/smell may indicate infection. Book appointment.',
    firstAid: 'Brush and floss regularly. Clean tongue with tongue scraper. Salt water rinse. Stay hydrated. Quit smoking if applicable.',
    painRelief: 'Pain reliever unnecessary. Ibuprofen if pain is present.',
    whatToExpect: 'Periodontal exam, X-ray for abscess/osteomyelitis. Periodontal treatment or root canal. Cavity removal.',
    warning: 'Visit emergency dentist immediately if bad breath is accompanied by high fever, facial swelling, or difficulty swallowing. Possible abscess/osteomyelitis.',
  },
};

export function getUrgencyGuide(symptom: Symptom): string {
  const guide = urgencyGuides[symptom];
  if (!guide) {
    return 'Information not available for this symptom.';
  }

  let response = `${guide.level}\n\n`;
  response += `**⚠️ Immediate Action:** ${guide.action}\n`;

  if (guide.firstAid) {
    response += `\n**🩺 First Aid:**\n${guide.firstAid}\n`;
  }

  if (guide.painRelief) {
    response += `\n**💊 Pain Relief:**\n${guide.painRelief}\n`;
  }

  if (guide.whatToExpect) {
    response += `\n**🏥 What to Expect:**\n${guide.whatToExpect}\n`;
  }

  if (guide.warning) {
    response += `\n⚠️ **Warning:** ${guide.warning}\n`;
  }

  return response;
}

export const symptomOptions = [
  'severe_pain',
  'facial_swelling',
  'persistent_bleeding',
  'broken_tooth',
  'gum_swelling',
  'pain_with_fever',
  'lost_crown_filling',
  'tooth_knocked_out',
  'broken_braces_wire',
  'object_stuck_teeth',
  'jaw_pain_cant_open',
  'gum_abscess',
  'cold_sensitivity',
  'hot_sensitivity',
  'bad_taste_smell',
] as const;

export const urgencySources = [
  {
    name: 'American Dental Association — Dental Emergency Guide',
    url: 'https://www.ada.org/resources/research/science-and-research-institute/oral-health-topics/dental-emergencies',
  },
  {
    name: 'MedlinePlus — Dental Emergencies',
    url: 'https://medlineplus.gov/ency/article/000040.htm',
  },
] as const;

export const urgencyLastReviewed = '2025-02-07';
