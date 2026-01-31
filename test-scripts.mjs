// Simple test script to verify script generation
import { buildScripts } from '../lib/utils/scripts';

console.log('=== ENGLISH SCRIPT TEST ===\n');

const englishResult = buildScripts({
  procedure: '신경치료',
  payment: '현금 일시불',
  urgency: '급함',
  scenario: '첫 방문',
  budget: '최대한 낮추고 싶음',
  tone: '정중형',
  channel: '방문',
  isShort: false,
  lang: 'en',
});

console.log('OPTION A (English):');
console.log(englishResult.scriptA);
console.log('\n' + '-'.repeat(50) + '\n');
console.log('OPTION B (English):');
console.log(englishResult.scriptB);

console.log('\n\n=== SPANISH SCRIPT TEST ===\n');

const spanishResult = buildScripts({
  procedure: '검진/스케일링',
  payment: '당일 카드 일시불',
  urgency: '일반',
  scenario: '재방문',
  budget: '합리적이면 수용',
  tone: '직접형',
  channel: '전화',
  isShort: false,
  lang: 'es',
});

console.log('OPTION A (Spanish):');
console.log(spanishResult.scriptA);
console.log('\n' + '-'.repeat(50) + '\n');
console.log('OPTION B (Spanish):');
console.log(spanishResult.scriptB);
