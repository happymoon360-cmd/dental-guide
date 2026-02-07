import type { ChecklistItem } from '@/lib/types';

export const checklistItems: ChecklistItem[] = [
  { id: 'check-0', label: 'ID and contact information ready', checked: false },
  { id: 'check-1', label: 'Recent X-ray or dental records', checked: false },
  { id: 'check-2', label: '2-3 possible visit dates', checked: false },
  { id: 'check-3', label: 'Budget limit noted', checked: false },
  { id: 'check-4', label: 'Payment method decided (cash/card/installments)', checked: false },
  { id: 'check-5', label: 'Pain intensity and duration recorded', checked: false },
];

const checklistKey = 'guerillaChecklist';

export function getChecklistState(): Record<string, boolean> {
  if (typeof window === 'undefined') {
    return {};
  }
  try {
    const stored = localStorage.getItem(checklistKey);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Failed to load checklist state:', error);
  }
  return {};
}

export function saveChecklistState(state: Record<string, boolean>): void {
  if (typeof window === 'undefined') {
    return;
  }
  try {
    localStorage.setItem(checklistKey, JSON.stringify(state));
  } catch (error) {
    console.error('Failed to save checklist state:', error);
  }
}

export function initializeChecklist(): ChecklistItem[] {
  const state = getChecklistState();
  return checklistItems.map((item) => ({
    ...item,
    checked: state[item.id] || false,
  }));
}
