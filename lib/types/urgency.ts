export type Symptom =
  | 'severe_pain'
  | 'facial_swelling'
  | 'persistent_bleeding'
  | 'broken_tooth'
  | 'gum_swelling'
  | 'pain_with_fever'
  | 'lost_crown_filling'
  | 'tooth_knocked_out'
  | 'broken_braces_wire'
  | 'object_stuck_teeth'
  | 'jaw_pain_cant_open'
  | 'gum_abscess'
  | 'cold_sensitivity'
  | 'hot_sensitivity'
  | 'bad_taste_smell';

export interface UrgencyGuide {
  level: string;        // Emergency level
  action: string;        // What to do immediately
  firstAid?: string;     // Home remedies
  painRelief?: string;   // OTC medication guidance
  whatToExpect?: string; // At the dentist
  warning?: string;      // Red flags
}

export interface UrgencyGuides {
  [symptom: string]: UrgencyGuide;
}
