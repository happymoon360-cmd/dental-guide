export type Language = 'ko' | 'en' | 'es';

export type Procedure =
  | 'Exam/Cleaning'
  | 'Filling (Resin/Amalgam)'
  | 'Root Canal'
  | 'Crown/Restoration'
  | 'Extraction/Implant';

export type PaymentMethod = 'Cash Full Payment' | 'Card Same-Day Payment' | 'Installment Payment';

export type Urgency = 'General' | 'Urgent';

export type Scenario = 'First Visit' | 'Follow-up' | 'Emergency' | 'Negotiation';

export type Budget = 'Minimize' | 'Accept Reasonable';

export type Tone = 'Direct' | 'Polite';

export type Channel = 'In-Person' | 'Phone' | 'SMS';

export interface ScriptParams {
  procedure: Procedure;
  payment: PaymentMethod;
  urgency: Urgency;
  scenario: Scenario;
  budget: Budget;
  tone: Tone;
  channel: Channel;
  isShort: boolean;
  lang: Language;
}

export interface ScriptOutput {
  scriptA: string;
  scriptB: string;
}

export interface ScriptPreset extends ScriptParams {
  id: string;
}

export interface ScenarioTemplates {
  full: string;
  short: string;
}

export interface LanguageDictionary {
  greetA: string;
  greetB: string;
  ask: string;
  askB: string;
  needFast: string;
  needExplain: string;
  payPlan: (payment: string) => string;
  payPlanB: (payment: string) => string;
  budgetLow: string;
  budgetOk: string;
  toneDirect: string;
  tonePolite: string;
  channelPhone: string;
  channelSms: string;
  channelVisit: string;
  askRange: string;
  cashDiscount: string;
  alt: string;
  askPrep: string;
  studentPlan: string;
  stepAlt: string;
  shortAskRange: string;
  shortStudentPlan: string;
  shortBudgetLow: string;
  shortBudgetOk: string;
  labelA: string;
  labelB: string;
}

export interface ScenarioTemplatesByLang {
  [lang: string]: {
    [scenario: string]: ScenarioTemplates;
  };
}

export interface Dictionaries {
  [lang: string]: LanguageDictionary;
}
