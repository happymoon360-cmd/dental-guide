export interface Stats {
  scriptGenerations?: number;
  pdfExports?: number;
  schoolSearches?: number;
  dataEdits?: number;
  dataDeletes?: number;
  dataImports?: number;
  dataFinalizes?: number;
  checklistToggles?: number;
  costEstimates?: number;
  schoolSearchWithZip?: number;
  schoolSearchInvalidZip?: number;
  scriptByProcedure?: Record<string, number>;
  scriptByScenario?: Record<string, number>;
  scriptByChannel?: Record<string, number>;
  scriptByLanguage?: Record<string, number>;
  scriptByPayment?: Record<string, number>;
  scriptByUrgency?: Record<string, number>;
  scriptByTone?: Record<string, number>;
  scriptByBudget?: Record<string, number>;
  scriptByLength?: Record<string, number>;
  schoolSearchByState?: Record<string, number>;
  schoolSearchByOnlyComplete?: Record<string, number>;
  checklistByItem?: Record<string, number>;
  costByProcedure?: Record<string, number>;
  costByRegion?: Record<string, number>;
}
