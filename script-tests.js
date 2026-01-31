const assert = require("node:assert/strict");
const { buildScripts } = require("./scripts");

const baseInput = {
  procedure: "Root Canal",
  payment: "Cash Full Payment",
  urgency: "General",
  budget: "Accept Reasonable",
  tone: "Polite",
  channel: "Phone",
  scenario: "First Visit",
  isShort: false,
};

const cases = [
  {
    name: "First Visit - Full Phrase Included",
    input: { ...baseInput, scenario: "First Visit" },
    expect: ["As this is my first visit, I'd like to receive guidance on procedures and preparation."],
  },
  {
    name: "Follow-up - Follow-up Phrase Included",
    input: { ...baseInput, scenario: "Follow-up" },
    expect: ["I'd like to receive follow-up consultation."],
  },
  {
    name: "Urgent - Urgent Phrase Included",
    input: { ...baseInput, scenario: "Urgent", urgency: "Urgent" },
    expect: ["This is an urgent situation, please check if an early appointment is possible."],
  },
  {
    name: "Refusal Response - Alternative/Installment Phrase Included",
    input: { ...baseInput, scenario: "Refusal Response" },
    expect: ["Could you tell me about alternative options or installment plans?"],
  },
  {
    name: "Short Version - Scenario Summary Included",
    input: { ...baseInput, scenario: "First Visit", isShort: true, channel: "SMS" },
    expect: ["Please guide me through the first visit procedure."],
  },
];

const runCase = (testCase) => {
  const { scriptA, scriptB } = buildScripts(testCase.input);
  const combined = `${scriptA}\n${scriptB}`;
  testCase.expect.forEach((fragment) => {
    assert.ok(combined.includes(fragment), `${testCase.name}: ${fragment}`);
  });
};

cases.forEach(runCase);
console.log(`Tests passed: ${cases.length} cases`);
