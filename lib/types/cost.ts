export type CostProcedure =
  | 'exam_cleaning'
  | 'filling'
  | 'root_canal'
  | 'crown'
  | 'extraction_implant'
  | 'teeth_whitening'
  | 'dentures_partial'
  | 'bridge'
  | 'orthodontics_braces'
  | 'periodontal_treatment'
  | 'extraction_only'
  | 'wisdom_tooth_removal'
  | 'root_canal_therapy'
  | 'mri_ct_scan';

export type Region =
  | 'national_average'
  | 'Northeast (NY, Boston, DC)'
  | 'West Coast (LA, SF, Seattle)'
  | 'Midwest (Chicago, Detroit)'
  | 'South (Texas, Florida)'
  | 'Mountain West (Denver, Phoenix)';

export interface CostRange {
  min: number;
  max: number;
}

export interface CostRanges {
  [procedure: string]: CostRange;
}

export interface RegionMultiplier {
  [region: string]: number;
}
