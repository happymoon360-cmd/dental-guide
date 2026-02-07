#!/usr/bin/env tsx

/**
 * Data Freshness Checker
 *
 * Checks dental school and community clinic data for staleness
 * Flags entries older than 180 days or with unverified status
 * Exits with code 1 if >20% of entries are stale
 */

import { readFileSync } from 'fs';
import { join } from 'path';

// Paths to data files
const DATA_DIR = join(process.cwd(), 'lib', 'data');
const SCHOOLS_FILE = join(DATA_DIR, 'schools.ts');
const CLINICS_FILE = join(DATA_DIR, 'community-clinics.ts');

// Constants
const STALE_DAYS = 180;
const STALE_PERCENTAGE_THRESHOLD = 0.2;

// Type definitions matching the actual data structure
interface SchoolEntry {
  name: string;
  lastVerified?: string;
  verificationStatus?: 'verified' | 'unverified' | 'stale';
}

// Extract school entries from TypeScript file
function extractSchoolEntries(content: string): SchoolEntry[] {
  const entries: SchoolEntry[] = [];

  // Find all school objects using regex
  const schoolPattern = /{\s+name:\s*['"]([^'"]+)['"][^}]*lastVerified:\s*['"]?([^'"]*)['"]?,[^}]*verificationStatus:\s*['"]?([^'"]*)['"]?,[^}]*}/g;
  let match;

  while ((match = schoolPattern.exec(content)) !== null) {
    entries.push({
      name: match[1],
      lastVerified: match[2] || undefined,
      verificationStatus: (match[3] as 'verified' | 'unverified' | 'stale') || undefined,
    });
  }

  return entries;
}

// Calculate days since verification
function daysSinceVerification(dateString?: string): number {
  if (!dateString) return Infinity;
  
  try {
    const verifiedDate = new Date(dateString);
    const now = new Date();
    const diffTime = now.getTime() - verifiedDate.getTime();
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  } catch {
    return Infinity;
  }
}

// Check if entry is stale
function isStale(entry: SchoolEntry): boolean {
  const daysOld = daysSinceVerification(entry.lastVerified);
  const isUnverified = entry.verificationStatus === 'unverified';
  const isOld = daysOld > STALE_DAYS;
  
  return isUnverified || isOld;
}

// Format date for display
function formatDate(dateString?: string): string {
  if (!dateString) return 'Never';
  return dateString;
}

// Generate markdown report
function generateReport(entries: SchoolEntry[], source: string): string {
  let report = '';

  // Statistics
  const totalEntries = entries.length;
  const staleEntries = entries.filter(isStale);
  const staleCount = staleEntries.length;
  const stalePercentage = (staleCount / totalEntries) * 100;
  const verifiedCount = entries.filter(e => e.verificationStatus === 'verified').length;
  const unverifiedCount = entries.filter(e => e.verificationStatus === 'unverified').length;

  report += `# Data Freshness Report\n\n`;
  report += `**Generated:** ${new Date().toISOString()}\n\n`;
  report += `**Source:** ${source}\n\n`;
  report += `## Summary\n\n`;
  report += `- **Total Entries:** ${totalEntries}\n`;
  report += `- **Stale Entries:** ${staleCount} (${stalePercentage.toFixed(1)}%)\n`;
  report += `- **Verified:** ${verifiedCount}\n`;
  report += `- **Unverified:** ${unverifiedCount}\n\n`;

  if (stalePercentage > STALE_PERCENTAGE_THRESHOLD * 100) {
    report += `⚠️  **WARNING:** More than ${STALE_PERCENTAGE_THRESHOLD * 100}% of entries are stale!\n\n`;
  }

  report += `## Stale Entries\n\n`;

  if (staleEntries.length > 0) {
    report += '| School | Last Verified | Status |\n';
    report += '|--------|---------------|--------|\n';

    staleEntries.forEach(entry => {
      const status = entry.verificationStatus || 'unknown';
      const verifiedDate = formatDate(entry.lastVerified);
      report += `| ${entry.name} | ${verifiedDate} | ${status} |\n`;
    });
  } else {
    report += `✅ All entries are within the freshness threshold!\n`;
  }

  return report;
}

// Main function
function checkDataFreshness(): number {
  console.log(`Checking data freshness...`);
  console.log(`Schools file: ${SCHOOLS_FILE}`);
  console.log(`Clinics file: ${CLINICS_FILE}`);

  try {
    // Read schools file
    const schoolsContent = readFileSync(SCHOOLS_FILE, 'utf-8');
    const schools = extractSchoolEntries(schoolsContent);
    console.log(`Found ${schools.length} school entries`);

    // Read clinics file
    const clinicsContent = readFileSync(CLINICS_FILE, 'utf-8');
    const clinics = extractSchoolEntries(clinicsContent);
    console.log(`Found ${clinics.length} clinic entries`);

    // Combine all entries
    const allEntries = [...schools, ...clinics];

    // Generate report
    const report = generateReport(allEntries, 'schools.ts + community-clinics.ts');
    console.log('\n' + report);

    // Exit with code 1 if more than threshold is stale
    const totalStale = allEntries.filter(isStale).length;
    const stalePercentage = (totalStale / allEntries.length) * 100;

    if (stalePercentage > STALE_PERCENTAGE_THRESHOLD * 100) {
      console.error(`\n⚠️  ${stalePercentage.toFixed(1)}% of entries are stale (threshold: ${STALE_PERCENTAGE_THRESHOLD * 100}%)\n`);
      return 1;
    }

    console.log('\n✅ Data freshness check passed');
    return 0;
  } catch (error) {
    console.error('Error checking data freshness:', error);
    return 1;
  }
}

// Run if executed directly
if (require.main === module) {
  const exitCode = checkDataFreshness();
  process.exit(exitCode);
}

export { checkDataFreshness, extractSchoolEntries, isStale };
