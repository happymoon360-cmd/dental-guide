export interface ChecklistItem {
  id: string;
  label: string;
  checked: boolean;
}

export type ChecklistState = {
  [id: string]: boolean;
};
