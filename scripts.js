const scenarioTemplatesByLang = {
  ko: {
    "첫 방문": { full: "첫 방문이라 절차와 준비물을 안내받고 싶습니다.", short: "첫 방문 절차 안내 부탁드립니다." },
    재방문: { full: "지난 방문 이후 증상이 지속되어 재방문 상담을 받고 싶습니다.", short: "재방문 상담 부탁드립니다." },
    응급: { full: "응급 상황이라 가능한 빠른 진료 가능 여부를 확인 부탁드립니다.", short: "응급 진료 가능 여부 확인 부탁드립니다." },
    "거절 대응": { full: "만약 비용 조정이 어렵다면 가능한 대안이나 분할 옵션을 알려주실 수 있을까요?", short: "조정이 어렵다면 대안/분할 옵션 확인 부탁드립니다." },
  },
  en: {
    "First Visit": { full: "This is my first visit. Please guide me through steps and what to bring.", short: "First visit steps, please." },
    "Follow-up": { full: "My symptoms continue after the last visit. I'd like a follow-up consultation.", short: "Follow-up consultation, please." },
    "Emergency": { full: "This is urgent. Please let me know the earliest possible appointment.", short: "Urgent appointment availability, please." },
    "Negotiation": { full: "If adjustment is difficult, could you share alternatives or installment options?", short: "Alternatives/installments if adjustment is difficult." },
  },
  es: {
    "First Visit": { full: "Es mi primera visita. Por favor, indíqueme los pasos y qué llevar.", short: "Pasos para primera visita, por favor." },
    "Follow-up": { full: "Los síntomas continúan desde la última visita. Quiero una consulta de seguimiento.", short: "Consulta de seguimiento, por favor." },
    "Emergency": { full: "Es urgente. Indique la cita más temprana posible.", short: "Disponibilidad urgente, por favor." },
    "Negotiation": { full: "Si no es posible ajustar, ¿puede indicar alternativas o pago en cuotas?", short: "Alternativas/cuotas si no hay ajuste." },
  },
};

const buildScripts = ({
  procedure,
  payment,
  urgency,
  budget,
  tone,
  channel,
  scenario,
  isShort,
  lang = "en",
}) => {
  const dict = {
    ko: {
      greetA: "안녕하세요. ",
      greetB: "안녕하세요. ",
      ask: "관련 상담을 요청드립니다.",
      askB: "관련해서 문의드립니다.",
      needFast: "현재 통증이 심해 가능한 빠른 진료가 필요합니다.",
      needExplain: "치료 계획과 비용을 충분히 설명받고 싶습니다.",
      payPlan: (p) => `지불 방식은 ${p}로 생각하고 있습니다.`,
      payPlanB: (p) => `지불 방식은 ${p}로 진행 가능합니다.`,
      budgetLow: "예산을 최대한 절감하고 싶습니다. 비용을 낮출 수 있는 옵션이 있는지 알고 싶습니다.",
      budgetOk: "합리적인 비용 범위라면 진행 가능합니다.",
      toneDirect: "비용과 대안을 바로 확인하고 싶습니다.",
      tonePolite: "가능하다면 비용 조정이나 대안을 조심스럽게 여쭙고 싶습니다.",
      channelPhone: "전화로 문의드립니다.",
      channelSms: "문자 메시지로 문의드립니다.",
      channelVisit: "방문 상담을 요청드립니다.",
      askRange: "예상 비용 범위와 필요한 검사/시술 항목을 알려주실 수 있을까요?",
      cashDiscount: "현금 또는 당일 결제가 가능하면 할인 적용이 가능한지도 확인 부탁드립니다.",
      alt: "동일한 효과의 더 저렴한 대안이나 단계별 치료 옵션이 있으면 안내 부탁드립니다.",
      askPrep: "진료 전 필요한 검사와 예상 비용 범위를 알려주시면 준비하겠습니다.",
      studentPlan: "학생 진료/멤버십 플랜 등 비용을 낮출 수 있는 방법이 있는지 확인 부탁드립니다.",
      stepAlt: "가능하면 단계별 치료나 대체 옵션을 안내해주실 수 있을까요?",
      shortAskRange: "예상 비용과 가능한 대안을 알려주세요.",
      shortStudentPlan: "학생 진료/멤버십 플랜 또는 단계별 치료 가능 여부 알려주세요.",
      shortBudgetLow: "비용을 낮출 방법이 있을까요?",
      shortBudgetOk: "합리적인 비용이면 진행 가능합니다.",
      labelA: "A안",
      labelB: "B안",
    },
    en: {
      greetA: "Hello. ",
      greetB: "Hello. ",
      ask: "I'd like to request a consultation.",
      askB: "I have some questions.",
      needFast: "I'm in significant pain and need the earliest possible appointment.",
      needExplain: "I'd like clear explanation of the treatment plan and costs.",
      payPlan: (p) => `I plan to pay by ${p}.`,
      payPlanB: (p) => `Payment by ${p} is fine.`,
      budgetLow: "I need to minimize costs. Are there options to lower the price?",
      budgetOk: "I can proceed within a reasonable cost range.",
      toneDirect: "I'd like to confirm costs and alternatives directly.",
      tonePolite: "If possible, I'd like to politely ask about adjustments or alternatives.",
      channelPhone: "I'm contacting you by phone.",
      channelSms: "I'm contacting you by text message.",
      channelVisit: "I'm requesting an in-person consultation.",
      askRange: "Could you share the expected cost range and needed exams/treatments?",
      cashDiscount: "If same-day or cash payment is possible, are discounts available?",
      alt: "If there are lower-cost equivalents or phased options, please advise.",
      askPrep: "Please share pre-treatment exams and expected costs, and I'll prepare.",
      studentPlan: "Are student clinics/membership plans available to reduce costs?",
      stepAlt: "If possible, could you advise phased treatment or alternatives?",
      shortAskRange: "Please share expected costs and available alternatives.",
      shortStudentPlan: "Student clinic/membership or phased options available?",
      shortBudgetLow: "Is there any way to reduce costs?",
      shortBudgetOk: "I can proceed if costs are reasonable.",
      labelA: "Plan A",
      labelB: "Plan B",
    },
    es: {
      greetA: "Hola. ",
      greetB: "Hola. ",
      ask: "Quisiera solicitar una consulta.",
      askB: "Tengo algunas preguntas.",
      needFast: "Tengo mucho dolor y necesito la cita más temprana posible.",
      needExplain: "Quiero una explicación clara del plan de tratamiento y los costos.",
      payPlan: (p) => `Planeo pagar por ${p}.`,
      payPlanB: (p) => `El pago por ${p} está bien.`,
      budgetLow: "Necesito minimizar costos. ¿Hay opciones para reducir el precio?",
      budgetOk: "Puedo proceder dentro de un rango de costo razonable.",
      toneDirect: "Quiero confirmar costos y alternativas directamente.",
      tonePolite: "Si es posible, me gustaría preguntar con cortesía sobre ajustes o alternativas.",
      channelPhone: "Me comunico por teléfono.",
      channelSms: "Me comunico por mensaje de texto.",
      channelVisit: "Solicito una consulta presencial.",
      askRange: "¿Puede compartir el rango de costos y los exámenes/tratamientos necesarios?",
      cashDiscount: "Si el pago al contado o el mismo día es posible, ¿hay descuentos?",
      alt: "Si hay opciones equivalentes de menor costo o tratamiento por fases, infórmeme.",
      askPrep: "Comparta exámenes previos y costos estimados, y me prepararé.",
      studentPlan: "¿Hay clínicas de estudiantes/planes de membresía para reducir costos?",
      stepAlt: "Si es posible, ¿puede indicar tratamiento por fases o alternativas?",
      shortAskRange: "Comparta costos estimados y alternativas disponibles.",
      shortStudentPlan: "¿Clínica de estudiantes/membresía o tratamiento por fases disponible?",
      shortBudgetLow: "¿Hay manera de reducir costos?",
      shortBudgetOk: "Puedo proceder si los costos son razonables.",
      labelA: "Plan A",
      labelB: "Plan B",
    },
  }[lang] || {};
  const scenarioDict = scenarioTemplatesByLang[lang] || scenarioTemplatesByLang.en;
  const intro = urgency === "Urgent" ? dict.needFast : dict.needExplain;
  const budgetLine = budget === "Minimize" ? dict.budgetLow : dict.budgetOk;
  const toneLine = tone === "Direct" ? dict.toneDirect : dict.tonePolite;
  const channelLine =
    channel === "Phone"
      ? dict.channelPhone
      : channel === "SMS"
      ? dict.channelSms
      : dict.channelVisit;
  const budgetShort = budget === "Minimize" ? dict.shortBudgetLow : dict.shortBudgetOk;
  const scenarioLine = scenarioDict[scenario]?.full || "";
  const scenarioShort = scenarioDict[scenario]?.short || "";
  const shouldShort = isShort || channel === "SMS";

  const scriptAFull = [
    `${dict.greetA}${procedure} ${dict.ask}`,
    channelLine,
    intro,
    scenarioLine,
    dict.payPlan(payment),
    budgetLine,
    toneLine,
    dict.askRange,
    dict.cashDiscount,
    dict.alt,
  ]
    .filter(Boolean)
    .join("\n");

  const scriptAShort = [
    `${dict.greetA}${procedure} ${dict.ask}`,
    scenarioShort,
    dict.payPlan(payment),
    budgetShort,
    dict.shortAskRange,
  ]
    .filter(Boolean)
    .join(" ");

  const scriptBFull = [
    `${dict.greetB}${procedure} ${dict.askB}`,
    channelLine,
    scenarioLine,
    dict.payPlanB(payment),
    budgetLine,
    toneLine,
    dict.askPrep,
    dict.studentPlan,
    dict.stepAlt,
  ]
    .filter(Boolean)
    .join("\n");

  const scriptBShort = [
    `${dict.greetB}${procedure} ${dict.askB}`,
    scenarioShort,
    dict.payPlan(payment),
    budgetShort,
    dict.shortStudentPlan,
  ]
    .filter(Boolean)
    .join(" ");

  return {
    scriptA: shouldShort ? scriptAShort : scriptAFull,
    scriptB: shouldShort ? scriptBShort : scriptBFull,
  };
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { buildScripts };
} else if (typeof window !== "undefined") {
  window.buildScripts = buildScripts;
}

const hasWindow = typeof window !== "undefined" && typeof document !== "undefined";
const statsKey = "guerillaStats";
const readStats = () =>
  hasWindow ? JSON.parse(localStorage.getItem(statsKey) || "{}") : {};
const writeStats = (stats) => {
  if (!hasWindow) return;
  localStorage.setItem(statsKey, JSON.stringify(stats));
};
const statsOutput = hasWindow ? document.getElementById("statsOutput") : null;

const bumpBucket = (stats, bucketKey, valueKey) => {
  if (!valueKey) return;
  const bucket = stats[bucketKey] || {};
  bucket[valueKey] = (bucket[valueKey] || 0) + 1;
  stats[bucketKey] = bucket;
};

const renderStats = (stats = readStats()) => {
  if (!hasWindow || !statsOutput) return;
  const hasStats = Object.keys(stats).length > 0;
  if (!hasStats) {
    statsOutput.innerHTML =
      '<div class="school"><strong>No records yet.</strong></div>';
    return;
  }
  const formatBucket = (title, bucket, limit = 5) => {
    const entries = Object.entries(bucket || {})
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit);
    if (entries.length === 0) return "";
    return `
      <div class="school">
        <strong>${title}</strong>
        ${entries.map(([key, value]) => `<span>${key}: ${value} times</span>`).join("")}
      </div>
    `;
  };

  const summary = `
    <div class="school">
      <strong>Summary</strong>
      <span>Scripts generated ${stats.scriptGenerations || 0} times</span>
      <span>PDF exports ${stats.pdfExports || 0} times</span>
      <span>Dental school searches ${stats.schoolSearches || 0} times</span>
      <span>Data edits ${stats.dataEdits || 0} times</span>
      <span>Checklist toggles ${stats.checklistToggles || 0} times</span>
      <span>Cost estimates ${stats.costEstimates || 0} times</span>
    </div>
  `;

  const blocks = [
    summary,
    formatBucket("Scripts by Procedure", stats.scriptByProcedure),
    formatBucket("Scripts by Scenario", stats.scriptByScenario),
    formatBucket("Scripts by Channel", stats.scriptByChannel),
    formatBucket("Scripts by Language", stats.scriptByLanguage),
    formatBucket("Scripts by Payment", stats.scriptByPayment),
    formatBucket("Scripts by Urgency", stats.scriptByUrgency),
    formatBucket("Scripts by Tone", stats.scriptByTone),
    formatBucket("Scripts by Budget", stats.scriptByBudget),
    formatBucket("Scripts by Length", stats.scriptByLength),
    formatBucket("Search by State", stats.schoolSearchByState),
    formatBucket("Search by Filter", stats.schoolSearchByOnlyComplete),
    formatBucket("Checklist by Item", stats.checklistByItem),
    formatBucket("Cost by Procedure", stats.costByProcedure),
    formatBucket("Cost by Region", stats.costByRegion),
  ].filter(Boolean);

  statsOutput.innerHTML = blocks.join("");
};

const bumpStat = (key) => {
   if (!hasWindow) return;
  const stats = readStats();
  stats[key] = (stats[key] || 0) + 1;
  writeStats(stats);
  renderStats(stats);
};

const recordScriptUsage = (values) => {
  if (!hasWindow) return;
  const stats = readStats();
  stats.scriptGenerations = (stats.scriptGenerations || 0) + 1;
  bumpBucket(stats, "scriptByProcedure", values.procedure);
  bumpBucket(stats, "scriptByScenario", values.scenario);
  bumpBucket(stats, "scriptByChannel", values.channel);
  bumpBucket(stats, "scriptByLanguage", values.lang || "en");
  bumpBucket(stats, "scriptByPayment", values.payment);
  bumpBucket(stats, "scriptByUrgency", values.urgency);
  bumpBucket(stats, "scriptByTone", values.tone);
  bumpBucket(stats, "scriptByBudget", values.budget);
  bumpBucket(stats, "scriptByLength", values.isShort ? "short" : "standard");
  writeStats(stats);
  renderStats(stats);
};

const recordSchoolSearch = ({
  zipProvided,
  state,
  onlyComplete,
  invalidZip,
}) => {
  if (!hasWindow) return;
  const stats = readStats();
  stats.schoolSearches = (stats.schoolSearches || 0) + 1;
  if (zipProvided) {
    stats.schoolSearchWithZip = (stats.schoolSearchWithZip || 0) + 1;
  }
  if (invalidZip) {
    stats.schoolSearchInvalidZip = (stats.schoolSearchInvalidZip || 0) + 1;
  }
  bumpBucket(stats, "schoolSearchByState", state || "all");
  bumpBucket(
    stats,
    "schoolSearchByOnlyComplete",
    onlyComplete ? "complete_only" : "all"
  );
  writeStats(stats);
  renderStats(stats);
};

const recordDataChange = (type) => {
  if (!hasWindow) return;
  const stats = readStats();
  if (type === "edit") stats.dataEdits = (stats.dataEdits || 0) + 1;
  if (type === "delete") stats.dataDeletes = (stats.dataDeletes || 0) + 1;
  if (type === "import") stats.dataImports = (stats.dataImports || 0) + 1;
  if (type === "finalize") stats.dataFinalizes = (stats.dataFinalizes || 0) + 1;
  writeStats(stats);
  renderStats(stats);
};

if (hasWindow) {
  document.getElementById("exportScriptPdf")?.addEventListener("click", () => {
  if (!window.lastGeneratedScripts) return;
  const checklistItems = Array.from(
    document.querySelectorAll("#checklist input[type='checkbox']")
  )
    .map((input) => {
      const label = input.parentElement?.textContent?.trim() || "";
      const mark = input.checked ? "☑" : "☐";
      return label ? `${mark} ${label}` : "";
    })
    .filter(Boolean)
    .join("\n");
  const content = `
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Guerilla Dental Guide Scripts</title>
        <style>
          body { font-family: system-ui, -apple-system, sans-serif; padding: 24px; }
          h1 { margin: 0 0 12px; }
          .block { margin-top: 16px; white-space: pre-line; }
        </style>
      </head>
      <body>
        <h1>Scripts</h1>
        <div><strong>A</strong></div>
        <div class="block">${window.lastGeneratedScripts.scriptA.replaceAll("<br />", "\n")}</div>
        <div style="margin-top:12px;"><strong>B</strong></div>
        <div class="block">${window.lastGeneratedScripts.scriptB.replaceAll("<br />", "\n")}</div>
        ${
          checklistItems
            ? `<div style="margin-top:16px;"><strong>Checklist</strong></div><div class="block">${checklistItems}</div>`
            : ""
        }
        <script>window.print()</script>
      </body>
    </html>
  `;
  const win = window.open("", "_blank");
  if (!win) return;
  win.document.open();
  win.document.write(content);
  win.document.close();
    bumpStat("pdfExports");
  });

  document.getElementById("resetStats")?.addEventListener("click", () => {
    writeStats({});
    renderStats({});
  });
}

if (hasWindow) {
  window.recordScriptUsage = recordScriptUsage;
  window.recordSchoolSearch = recordSchoolSearch;
  window.recordDataChange = recordDataChange;
  window.renderStats = renderStats;
  window.recordChecklistToggle = (label) => {
    if (!hasWindow) return;
    const stats = readStats();
    stats.checklistToggles = (stats.checklistToggles || 0) + 1;
    bumpBucket(stats, "checklistByItem", label || "unknown");
    writeStats(stats);
    renderStats(stats);
  };
  window.recordCostEstimate = (procedure, region) => {
    if (!hasWindow) return;
    const stats = readStats();
    stats.costEstimates = (stats.costEstimates || 0) + 1;
    bumpBucket(stats, "costByProcedure", procedure || "unknown");
    bumpBucket(stats, "costByRegion", region || "unknown");
    writeStats(stats);
    renderStats(stats);
  };
}

if (hasWindow) {
  renderStats();
}
