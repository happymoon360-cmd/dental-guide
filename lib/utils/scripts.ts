import type {
  ScriptParams,
  ScriptOutput,
  Language,
  ScenarioTemplatesByLang,
  LanguageDictionary,
  Dictionaries,
} from '@/lib/types';

const scenarioTemplatesByLang: ScenarioTemplatesByLang = {
  ko: {
    'First Visit': {
      full: '첫 방문이라 절차와 준비물을 안내받고 싶습니다.',
      short: '첫 방문 절차 안내 부탁드립니다.',
    },
    'Follow-up': {
      full: '지난 방문 이후 증상이 지속되어 재방문 상담을 받고 싶습니다.',
      short: '재방문 상담 부탁드립니다.',
    },
    'Emergency': {
      full: '응급 상황이라 가능한 빠른 진료 가능 여부를 확인 부탁드립니다.',
      short: '응급 진료 가능 여부 확인 부탁드립니다.',
    },
    'Negotiation': {
      full: '만약 비용 조정이 어렵다면 가능한 대안이나 분할 옵션을 알려주실 수 있을까요?',
      short: '조정이 어렵다면 대안/분할 옵션 확인 부탁드립니다.',
    },
  },
  en: {
    'First Visit': {
      full: 'This is my first visit. Please guide me through steps and what to bring.',
      short: 'First visit steps, please.',
    },
    'Follow-up': {
      full: 'My symptoms continue after the last visit. I\'d like a follow-up consultation.',
      short: 'Follow-up consultation, please.',
    },
    'Emergency': {
      full: 'This is urgent. Please let me know the earliest possible appointment.',
      short: 'Urgent appointment availability, please.',
    },
    'Negotiation': {
      full: 'If adjustment is difficult, could you share alternatives or installment options?',
      short: 'Alternatives/installments if adjustment is difficult.',
    },
  },
  es: {
    'First Visit': {
      full: 'Es mi primera visita. Por favor, indíqueme los pasos y qué llevar.',
      short: 'Pasos para primera visita, por favor.',
    },
    'Follow-up': {
      full: 'Los síntomas continúan desde la última visita. Quiero una consulta de seguimiento.',
      short: 'Consulta de seguimiento, por favor.',
    },
    'Emergency': {
      full: 'Es urgente. Indique la cita más temprana posible.',
      short: 'Disponibilidad urgente, por favor.',
    },
    'Negotiation': {
      full: 'Si no es posible ajustar, ¿puede indicar alternativas o pago en cuotas?',
      short: 'Alternativas/cuotas si no hay ajuste.',
    },
  },
};

const dictionaries: Dictionaries = {
  ko: {
    greetA: '안녕하세요. ',
    greetB: '안녕하세요. ',
    ask: '관련 상담을 요청드립니다.',
    askB: '관련해서 문의드립니다.',
    needFast: '현재 통증이 심해 가능한 빠른 진료가 필요합니다.',
    needExplain: '치료 계획과 비용을 충분히 설명받고 싶습니다.',
    payPlan: (p: string) => `지불 방식은 ${p}로 생각하고 있습니다.`,
    payPlanB: (p: string) => `지불 방식은 ${p}로 진행 가능합니다.`,
    budgetLow: '예산을 최대한 절감하고 싶습니다. 비용을 낮출 수 있는 옵션이 있는지 알고 싶습니다.',
    budgetOk: '합리적인 비용 범위라면 진행 가능합니다.',
    toneDirect: '비용과 대안을 바로 확인하고 싶습니다.',
    tonePolite: '가능하다면 비용 조정이나 대안을 조심스럽게 여쭙고 싶습니다.',
    channelPhone: '전화로 문의드립니다.',
    channelSms: '문자 메시지로 문의드립니다.',
    channelVisit: '방문 상담을 요청드립니다.',
    askRange: '예상 비용 범위와 필요한 검사/시술 항목을 알려주실 수 있을까요?',
    cashDiscount: '현금 또는 당일 결제가 가능하면 할인 적용이 가능한지도 확인 부탁드립니다.',
    alt: '동일한 효과의 더 저렴한 대안이나 단계별 치료 옵션이 있으면 안내 부탁드립니다.',
    askPrep: '진료 전 필요한 검사와 예상 비용 범위를 알려주시면 준비하겠습니다.',
    studentPlan: '학생 진료/멤버십 플랜 등 비용을 낮출 수 있는 방법이 있는지 확인 부탁드립니다.',
    stepAlt: '가능하면 단계별 치료나 대체 옵션을 안내해주실 수 있을까요?',
    shortAskRange: '예상 비용과 가능한 대안을 알려주세요.',
    shortStudentPlan: '학생 진료/멤버십 플랜 또는 단계별 치료 가능 여부 알려주세요.',
    shortBudgetLow: '비용을 낮출 방법이 있을까요?',
    shortBudgetOk: '합리적인 비용이면 진행 가능합니다.',
    labelA: 'A안',
    labelB: 'B안',
  },
  en: {
    greetA: 'Hello. ',
    greetB: 'Hello. ',
    ask: 'I\'d like to request a consultation.',
    askB: 'I have some questions.',
    needFast: 'I\'m in significant pain and need the earliest possible appointment.',
    needExplain: 'I\'d like clear explanation of the treatment plan and costs.',
    payPlan: (p: string) => `I plan to pay by ${p}.`,
    payPlanB: (p: string) => `Payment by ${p} is fine.`,
    budgetLow: 'I need to minimize costs. Are there options to lower the price?',
    budgetOk: 'I can proceed within a reasonable cost range.',
    toneDirect: 'I\'d like to confirm costs and alternatives directly.',
    tonePolite: 'If possible, I\'d like to politely ask about adjustments or alternatives.',
    channelPhone: 'I\'m contacting you by phone.',
    channelSms: 'I\'m contacting you by text message.',
    channelVisit: 'I\'m requesting an in-person consultation.',
    askRange: 'Could you share the expected cost range and needed exams/treatments?',
    cashDiscount: 'If same-day or cash payment is possible, are discounts available?',
    alt: 'If there are lower-cost equivalents or phased options, please advise.',
    askPrep: 'Please share pre-treatment exams and expected costs, and I\'ll prepare.',
    studentPlan: 'Are student clinics/membership plans available to reduce costs?',
    stepAlt: 'If possible, could you advise phased treatment or alternatives?',
    shortAskRange: 'Please share expected costs and available alternatives.',
    shortStudentPlan: 'Student clinic/membership or phased options available?',
    shortBudgetLow: 'Is there any way to reduce costs?',
    shortBudgetOk: 'I can proceed if costs are reasonable.',
    labelA: 'Plan A',
    labelB: 'Plan B',
  },
  es: {
    greetA: 'Hola. ',
    greetB: 'Hola. ',
    ask: 'Quisiera solicitar una consulta.',
    askB: 'Tengo algunas preguntas.',
    needFast: 'Tengo mucho dolor y necesito la cita más temprana posible.',
    needExplain: 'Quiero una explicación clara del plan de tratamiento y los costos.',
    payPlan: (p: string) => `Planeo pagar por ${p}.`,
    payPlanB: (p: string) => `El pago por ${p} está bien.`,
    budgetLow: 'Necesito minimizar costos. ¿Hay opciones para reducir el precio?',
    budgetOk: 'Puedo proceder dentro de un rango de costo razonable.',
    toneDirect: 'Quiero confirmar costos y alternativas directamente.',
    tonePolite: 'Si es posible, me gustaría preguntar con cortesía sobre ajustes o alternativas.',
    channelPhone: 'Me comunico por teléfono.',
    channelSms: 'Me comunico por mensaje de texto.',
    channelVisit: 'Solicito una consulta presencial.',
    askRange: '¿Puede compartir el rango de costos y los exámenes/tratamientos necesarios?',
    cashDiscount: 'Si el pago al contado o el mismo día es posible, ¿hay descuentos?',
    alt: 'Si hay opciones equivalentes de menor costo o tratamiento por fases, infórmeme.',
    askPrep: 'Comparta exámenes previos y costos estimados, y me prepararé.',
    studentPlan: '¿Hay clínicas de estudiantes/planes de membresía para reducir costos?',
    stepAlt: 'Si es posible, ¿puede indicar tratamiento por fases o alternativas?',
    shortAskRange: 'Comparta costos estimados y alternativas disponibles.',
    shortStudentPlan: '¿Clínica de estudiantes/membresía o tratamiento por fases disponible?',
    shortBudgetLow: '¿Hay manera de reducir costos?',
    shortBudgetOk: 'Puedo proceder si los costos son razonables.',
    labelA: 'Plan A',
    labelB: 'Plan B',
  },
};

// Translation maps for English values to Korean/Spanish
const procedureTranslations: Record<Language, Record<string, string>> = {
  ko: {
    'Exam/Cleaning': '검진/스케일링',
    'Filling (Resin/Amalgam)': '충치 치료(레진/아말감)',
    'Root Canal': '신경치료',
    'Crown/Restoration': '크라운/보철',
    'Extraction/Implant': '발치/임플란트',
  },
  en: {
    'Exam/Cleaning': 'Exam/Cleaning',
    'Filling (Resin/Amalgam)': 'Filling (Resin/Amalgam)',
    'Root Canal': 'Root Canal',
    'Crown/Restoration': 'Crown/Restoration',
    'Extraction/Implant': 'Extraction/Implant',
  },
  es: {
    'Exam/Cleaning': 'Examen/Limpieza',
    'Filling (Resin/Amalgam)': 'Empaste (Resina/Amalgama)',
    'Root Canal': 'Conducto Radicular',
    'Crown/Restoration': 'Corona/Prótesis',
    'Extraction/Implant': 'Extracción/Implante',
  },
};

const paymentTranslations: Record<Language, Record<string, string>> = {
  ko: {
    'Cash Full Payment': '현금 일시불',
    'Card Same-Day Payment': '당일 카드 일시불',
    'Installment Payment': '분할 지불',
  },
  en: {
    'Cash Full Payment': 'Cash Full Payment',
    'Card Same-Day Payment': 'Card Same-Day Payment',
    'Installment Payment': 'Installment Payment',
  },
  es: {
    'Cash Full Payment': 'Pago Completo en Efectivo',
    'Card Same-Day Payment': 'Pago de Tarjeta el Mismo Día',
    'Installment Payment': 'Pago a Plazos',
  },
};

export function buildScripts(params: ScriptParams): ScriptOutput {
  const {
    procedure,
    payment,
    urgency,
    scenario,
    budget,
    tone,
    channel,
    isShort,
    lang = 'en',
  } = params;

  const dict = dictionaries[lang] || dictionaries.ko;
  const scenarioDict = scenarioTemplatesByLang[lang] || scenarioTemplatesByLang.ko;

  // Translate procedure and payment for the target language
  const translatedProcedure = procedureTranslations[lang]?.[procedure] || procedure;
  const translatedPayment = paymentTranslations[lang]?.[payment] || payment;

  const intro = urgency === 'Urgent' ? dict.needFast : dict.needExplain;
  const budgetLine =
    budget === 'Minimize' ? dict.budgetLow : dict.budgetOk;
  const toneLine = tone === 'Direct' ? dict.toneDirect : dict.tonePolite;
  const channelLine =
    channel === 'Phone'
      ? dict.channelPhone
      : channel === 'SMS'
      ? dict.channelSms
      : dict.channelVisit;
  const budgetShort =
    budget === 'Minimize' ? dict.shortBudgetLow : dict.shortBudgetOk;
  const scenarioLine = scenarioDict[scenario]?.full || '';
  const scenarioShort = scenarioDict[scenario]?.short || '';
  const shouldShort = isShort || channel === 'SMS';

  const scriptAFull = [
    `${dict.greetA}${translatedProcedure} ${dict.ask}`,
    channelLine,
    intro,
    scenarioLine,
    dict.payPlan(translatedPayment),
    budgetLine,
    toneLine,
    dict.askRange,
    dict.cashDiscount,
    dict.alt,
  ]
    .filter(Boolean)
    .join('\n');

  const scriptAShort = [
    `${dict.greetA}${translatedProcedure} ${dict.ask}`,
    scenarioShort,
    dict.payPlan(translatedPayment),
    budgetShort,
    dict.shortAskRange,
  ]
    .filter(Boolean)
    .join(' ');

  const scriptBFull = [
    `${dict.greetB}${translatedProcedure} ${dict.askB}`,
    channelLine,
    scenarioLine,
    dict.payPlanB(translatedPayment),
    budgetLine,
    toneLine,
    dict.askPrep,
    dict.studentPlan,
    dict.stepAlt,
  ]
    .filter(Boolean)
    .join('\n');

  const scriptBShort = [
    `${dict.greetB}${translatedProcedure} ${dict.askB}`,
    scenarioShort,
    dict.payPlan(translatedPayment),
    budgetShort,
    dict.shortStudentPlan,
  ]
    .filter(Boolean)
    .join(' ');

  return {
    scriptA: shouldShort ? scriptAShort : scriptAFull,
    scriptB: shouldShort ? scriptBShort : scriptBFull,
  };
}

export const procedureOptions = [
  'Exam/Cleaning',
  'Filling (Resin/Amalgam)',
  'Root Canal',
  'Crown/Restoration',
  'Extraction/Implant',
] as const;

export const paymentOptions = [
  'Cash Full Payment',
  'Card Same-Day Payment',
  'Installment Payment',
] as const;

export const urgencyOptions = ['General', 'Urgent'] as const;

export const scenarioOptions = ['First Visit', 'Follow-up', 'Emergency', 'Negotiation'] as const;

export const budgetOptions = ['Minimize', 'Accept Reasonable'] as const;

export const toneOptions = ['Direct', 'Polite'] as const;

export const channelOptions = ['In-Person', 'Phone', 'SMS'] as const;

export const languageOptions = [
  { value: 'en' as Language, label: 'English' },
  { value: 'es' as Language, label: 'Español' },
];
