export interface School {
  name: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  website: string;
  notes?: string;
  hidden?: boolean;
}

export interface SchoolWithDistance extends School {
  distanceMiles?: number;
}

export interface SchoolLocation {
  lat: number;
  lon: number;
}

export interface SchoolOverride {
  city?: string;
  state?: string;
  zip?: string;
  phone?: string;
  website?: string;
  notes?: string;
  hidden?: boolean;
}

export interface SchoolReviewStatus {
  missingFields: string[];
  missingCore: string[];
  missingContact: string[];
  isDuplicate: boolean;
  isUnidentifiable: boolean;
  severity: 'unidentifiable' | 'missing_core' | 'missing_contact' | 'complete';
  action: 'cleanup_candidate' | 'needs_review' | 'normal';
}

export interface VerificationReport {
  total: number;
  complete: number;
  incomplete: number;
  missingCore: number;
  missingContact: number;
  unidentifiable: number;
  duplicates: number;
  hiddenCount: number;
  errorRate: number;
}

export interface SchoolBackupEntry {
  timestamp: string;
  reason: string;
  data: School[];
}

export interface ChangeLogEntry {
  timestamp: string;
  action: 'edit' | 'delete' | 'finalize' | 'import';
  name?: string;
  reason?: string;
  missing?: string[];
  report?: VerificationReport;
}

export interface SchoolSearchParams {
  zip?: string;
  state?: string;
  onlyComplete?: boolean;
}
