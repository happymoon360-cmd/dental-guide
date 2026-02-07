# Dental Guide — Post-MVP Implementation Plan

> **Date:** 2026-02-07
> **Status:** MVP complete and deployed at `dental-guide-eta.vercel.app`
> **Stack:** Next.js 14 / React 18 / TypeScript / Tailwind CSS / Zustand / Vercel

---

## Overview

The MVP is feature-complete with 4 core tools (Script Builder, School Finder, Cost Estimator, Emergency Triage), plus blog, feedback, and SEO infrastructure. This plan addresses the gaps discovered during the post-MVP audit — prioritized by user impact and legal risk.

---

## Phase 1 — Critical (Must-Do Before Promotion)

These items address **legal risk** and **data trust** issues. Do not promote the product further until these are resolved.

---

### 1.1 Add Prominent Medical & Legal Disclaimers to Tool Pages

**Why:** The emergency triage page provides specific medical dosages (e.g., "Ibuprofen 400-600mg every 6-8 hours") and ER referral criteria without a visible disclaimer on the page itself. The cost estimator shows price ranges without accuracy caveats. Currently disclaimers only exist in the footer and Terms of Service — most users will never read those.

**Files to modify:**
- `app/emergency-triage/page.tsx`
- `app/cost-estimator/page.tsx`
- `app/script-builder/page.tsx`
- `app/school-finder/page.tsx`

**Implementation:**

1. Create a reusable `DisclaimerBanner` component at `components/ui/disclaimer-banner.tsx`:
   - Yellow/amber background with `AlertTriangle` icon from lucide-react
   - Compact single-line by default, expandable on click for full text
   - Accepts `variant` prop: `"medical"` | `"informational"`
   - Medical variant text: **"This tool is for informational purposes only and does not replace professional dental or medical advice. If you are experiencing a medical emergency, call 911 immediately."**
   - Informational variant text: **"Costs and availability shown are estimates based on publicly available data. Always contact providers directly to verify current pricing and services."**

2. Place the `DisclaimerBanner` at the **top** of each tool page, immediately below the page heading:
   - `emergency-triage/page.tsx` — use `variant="medical"`
   - `cost-estimator/page.tsx` — use `variant="informational"`
   - `script-builder/page.tsx` — use `variant="informational"`
   - `school-finder/page.tsx` — use `variant="informational"`

3. In `app/emergency-triage/page.tsx`, add a secondary red-colored banner above any symptom that has `level: "emergency"` (red level) that says: **"If symptoms are severe or worsening rapidly, go to the nearest emergency room or call 911."**

**Acceptance criteria:**
- Every tool page shows a disclaimer banner without scrolling
- Emergency triage page has an additional ER warning for red-level symptoms
- Banners are visible on mobile without taking excessive space (max 2 lines collapsed)

---

### 1.2 Add Data Source Citations

**Why:** Cost estimates and medical guidance currently have no source attribution. Users (and potential press/partners) have no way to verify the accuracy of the data. This undermines trust.

**Files to modify:**
- `lib/data/costs.ts`
- `lib/data/urgency.ts`
- `app/cost-estimator/page.tsx`
- `app/emergency-triage/page.tsx`

**Implementation:**

1. Add a `sources` array to `lib/data/costs.ts`:
   ```typescript
   export const costSources = [
     {
       name: "American Dental Association — Survey of Dental Fees",
       url: "https://www.ada.org/resources/practice/dental-fees",
       year: 2024,
     },
     {
       name: "FAIR Health Consumer Cost Lookup",
       url: "https://www.fairhealthconsumer.org",
       year: 2025,
     },
     {
       name: "Healthcare Bluebook — Fair Price Estimates",
       url: "https://www.healthcarebluebook.com",
       year: 2025,
     },
   ];
   ```
   **Important:** Only include sources that were actually used to derive the cost data. If the data was estimated without formal sources, be honest and state: "Estimates are based on publicly available pricing data and community reports. These are approximate ranges, not guaranteed prices."

2. Add a `sources` array to `lib/data/urgency.ts`:
   ```typescript
   export const urgencySources = [
     {
       name: "American Dental Association — Dental Emergency Guide",
       url: "https://www.ada.org/resources/research/science-and-research-institute/oral-health-topics/dental-emergencies",
     },
     {
       name: "MedlinePlus — Dental Emergencies",
       url: "https://medlineplus.gov/ency/article/000040.htm",
     },
   ];
   ```

3. Display sources at the bottom of each tool page in a collapsible `<details>` section titled "Data Sources & Methodology":
   - List each source as a clickable link with `target="_blank"` and `rel="noopener noreferrer"`
   - Include a "Last reviewed" date
   - Include the methodology note (e.g., "Regional multipliers are based on cost-of-living adjustments from BLS data")

**Acceptance criteria:**
- Cost estimator page shows data sources at the bottom
- Emergency triage page shows data sources at the bottom
- Sources are real, verifiable URLs (do not fabricate sources)
- Each source section includes a "Last reviewed" date

---

### 1.3 Create `.env.example` File

**Why:** The project uses nodemailer for email (report-issue API) but has no documented environment variables. Any developer or agent trying to run or deploy the project won't know what to configure.

**File to create:** `.env.example` (project root)

**Implementation:**

1. Read the existing `app/api/report-issue/route.ts` to identify all environment variables used
2. Create `.env.example` with all required variables, using placeholder values:
   ```env
   # Email Configuration (used by /api/report-issue)
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   REPORT_EMAIL_TO=admin@example.com

   # Site Configuration
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```
3. Verify `.env.local` and `.env` are in `.gitignore`

**Acceptance criteria:**
- `.env.example` exists with all required variables documented
- Each variable has a comment explaining its purpose
- Sensitive files are confirmed in `.gitignore`

---

## Phase 2 — High Priority (Analytics & Feedback Loop)

These items enable the team to **measure whether the product is working** — without this, you're flying blind.

---

### 2.1 Integrate Real Analytics (Google Analytics 4 or Plausible)

**Why:** Current analytics are localStorage-only. You cannot see how many users visit the site, which tools they use, where they drop off, or where they come from. This makes it impossible to validate the MVP or make data-driven decisions.

**Recommended approach:** Use [Plausible Analytics](https://plausible.io) (privacy-friendly, no cookie banner needed, aligns with the project's privacy-first stance) OR Google Analytics 4 if the team prefers a free option.

**Files to modify:**
- `app/layout.tsx` — add analytics script
- `lib/utils/analytics.ts` — extend with external tracking
- `app/privacy/page.tsx` — update privacy policy

**Implementation (Plausible option):**

1. Add the Plausible script to `app/layout.tsx` inside `<head>`:
   ```html
   <script defer data-domain="dental-guide-eta.vercel.app" src="https://plausible.io/js/script.js"></script>
   ```
   Use `next/script` component with `strategy="afterInteractive"` for proper Next.js integration.

2. Add a `NEXT_PUBLIC_ANALYTICS_DOMAIN` env var to `.env.example` so the domain is configurable.

3. Create a wrapper in `lib/utils/analytics.ts` that sends custom events to Plausible alongside the existing localStorage tracking:
   ```typescript
   export function trackEvent(type: string, metadata?: Record<string, unknown>) {
     // Existing localStorage tracking (keep as-is)
     saveEventToLocalStorage(type, metadata);

     // External analytics (Plausible custom events)
     if (typeof window !== 'undefined' && (window as any).plausible) {
       (window as any).plausible(type, { props: metadata });
     }
   }
   ```

4. Track these key events (most should already be tracked locally — just ensure they propagate):
   - `script_generated` — with procedure, language, channel
   - `school_search` — with state, zip (first 3 digits only for privacy)
   - `cost_estimate` — with procedure, region
   - `emergency_triage_viewed` — with symptom type
   - `copy_script` — when user copies a generated script
   - `school_website_click` — when user clicks through to a school's website

5. Update `app/privacy/page.tsx` to mention the external analytics tool:
   - If Plausible: "We use Plausible Analytics, a privacy-friendly analytics tool that does not use cookies and does not collect personal data."
   - If GA4: Add appropriate cookie consent banner and update privacy policy accordingly.

**Implementation (GA4 option):**

1. Install `@next/third-parties`:
   ```bash
   npm install @next/third-parties
   ```

2. Add to `app/layout.tsx`:
   ```typescript
   import { GoogleAnalytics } from '@next/third-parties/google';
   // In the component: <GoogleAnalytics gaId="G-XXXXXXXXXX" />
   ```

3. Add `NEXT_PUBLIC_GA_ID` to `.env.example`.

4. Use `gtag('event', ...)` in the analytics wrapper for custom events.

5. A cookie consent banner will be needed — create `components/ui/cookie-consent.tsx` using localStorage to remember the user's choice.

**Acceptance criteria:**
- Page views are tracked on an external dashboard
- Custom events (script generation, school search, cost estimate, triage view) appear in the analytics dashboard
- Privacy policy is updated to reflect the analytics tool used
- No personally identifiable information (PII) is sent to analytics

---

### 2.2 Add User Feedback Collection Points

**Why:** A `/feedback` page exists but requires users to actively navigate there. Most users won't do that. In-context feedback (after using a tool) captures reactions when they're most relevant.

**Files to modify:**
- `app/script-builder/page.tsx`
- `app/school-finder/page.tsx`
- `app/cost-estimator/page.tsx`
- `app/emergency-triage/page.tsx`

**File to create:**
- `components/ui/feedback-prompt.tsx`

**Implementation:**

1. Create `components/ui/feedback-prompt.tsx`:
   - Shows after a user completes a tool action (generates a script, searches for a school, views a cost estimate, or views triage guidance)
   - Simple thumbs up/down or 1-5 star rating
   - Optional one-line text input ("How can we improve this?")
   - Dismissable, remembers dismissal in localStorage (don't show again for 7 days)
   - Submits to localStorage analytics AND external analytics as a custom event
   - Props: `toolName: string`, `onSubmit: (rating: number, comment?: string) => void`

2. Integrate into each tool page:
   - **Script Builder:** Show after script is generated (below the script output)
   - **School Finder:** Show after search results are displayed
   - **Cost Estimator:** Show after cost breakdown is displayed
   - **Emergency Triage:** Show after guidance is displayed (be sensitive — don't prompt during emergencies; only show for green/yellow level symptoms)

3. Track feedback events:
   ```typescript
   trackEvent('feedback_submitted', {
     tool: 'script_builder',
     rating: 4,
     hasComment: true,
   });
   ```

**Acceptance criteria:**
- Feedback prompt appears after tool usage on all 4 tool pages
- Feedback is persisted in localStorage and sent to external analytics
- Prompt does not appear for red-level emergency triage results
- Prompt can be dismissed and respects the 7-day cooldown
- Prompt does not interfere with the primary tool UI

---

## Phase 3 — Medium Priority (Data Quality & Freshness)

These items address the static data problem — ensuring the information stays accurate over time.

---

### 3.1 Add Data Freshness Indicators to School Finder

**Why:** School data (phone numbers, websites, program availability) changes. The `verificationStatus` and `lastVerified` fields exist in the data model but are not meaningfully surfaced to users. Users deserve to know how fresh the data is.

**Files to modify:**
- `components/features/school-finder/SchoolList.tsx` (or equivalent component displaying school cards)
- `lib/data/schools.ts`
- `lib/data/community-clinics.ts`

**Implementation:**

1. Display `lastVerified` date on each school card as a subtle text line:
   - If verified within 90 days: green text — "Verified [date]"
   - If verified 90-180 days ago: yellow text — "Last checked [date]"
   - If older than 180 days or never verified: gray text — "Not recently verified — please confirm details with the school"

2. Add a subtle info tooltip or text near the top of search results:
   - "School information is periodically verified. Always call ahead to confirm availability, pricing, and appointment requirements."

3. Sort results to prefer recently verified schools (as a secondary sort after distance):
   - If two schools are equidistant, show the more recently verified one first

4. Update the `Report Issue` dialog to include a "Data is outdated" option in the issue type dropdown if not already present.

**Acceptance criteria:**
- Every school card shows its verification freshness
- Color coding is consistent and accessible (not relying on color alone — include text labels)
- Recently verified schools rank slightly higher in results

---

### 3.2 Add Cost Estimate Accuracy Context

**Why:** The cost estimator shows a min-max range but doesn't explain what drives the variation or how accurate the estimates are. Users may misinterpret a range like "$300–$1,500" without context.

**Files to modify:**
- `app/cost-estimator/page.tsx`
- `lib/data/costs.ts`

**Implementation:**

1. Below each cost estimate result, add contextual notes:
   - "Actual costs vary based on the complexity of your case, the provider's pricing, and your location."
   - "Dental school clinics typically charge 40–70% less than private practices for the same procedures."
   - For specific procedures, add relevant notes (e.g., for root canal: "Front teeth are typically less expensive than molars.")

2. Add a "What affects the price?" expandable section with factors:
   - Geographic location (already shown via regional multiplier)
   - Complexity of the case
   - Provider type (private practice vs. dental school vs. community clinic)
   - Whether sedation is needed
   - Number of visits required

3. Show the regional multiplier transparently:
   - e.g., "Northeast region: prices are typically ~25% higher than the national average"

**Acceptance criteria:**
- Each cost estimate includes contextual explanation
- Regional multiplier is shown transparently
- Users understand that these are estimates, not quotes

---

### 3.3 Implement Automated Data Staleness Alerts

**Why:** Without a process to flag stale data, school information will silently decay. This creates a system that surfaces when data needs attention.

**Files to create:**
- `scripts/check-data-freshness.ts`

**Files to modify:**
- `package.json` (add script)

**Implementation:**

1. Create `scripts/check-data-freshness.ts` — a Node.js script that:
   - Reads all entries from `lib/data/schools.ts` and `lib/data/community-clinics.ts`
   - Flags any entry where `lastVerified` is older than 180 days
   - Flags any entry with `verificationStatus: "unverified"`
   - Outputs a markdown report to stdout with:
     - Total entries, verified count, stale count, unverified count
     - List of stale/unverified entries with school name, state, and last verified date
   - Exits with code 1 if more than 20% of entries are stale (can be used in CI)

2. Add to `package.json`:
   ```json
   "scripts": {
     "check:data": "npx tsx scripts/check-data-freshness.ts"
   }
   ```

3. The script should be runnable independently (no Next.js dependency) — just reads the TypeScript data files and reports.

**Acceptance criteria:**
- `npm run check:data` produces a readable staleness report
- Script exits with non-zero code when data is significantly stale
- Report includes actionable information (which schools, how stale)

---

## Phase 4 — Low Priority (Polish & Growth)

These items improve the user experience and prepare for growth, but are not urgent.

---

### 4.1 Remove or Consolidate Non-Essential Pages

**Why:** Press page, blog (with limited content), and analytics dashboard add surface area without proportional value at this stage. They dilute focus from the 4 core tools.

**Recommended actions:**

1. **Press page (`app/press/`):** Keep but simplify. Remove from main navigation. Accessible via footer link only. It's useful if someone finds the product, but doesn't need navigation prominence.

2. **Analytics dashboard (`/analytics`):** This is an internal tool. Remove from footer links visible to users. If needed, access it directly via URL.

3. **Blog:** Keep but deprioritize. Ensure existing posts are accurate. Do not invest in new content until core tools are validated with real users.

**Files to modify:**
- `components/layout/Header.tsx` — remove Press from main nav (keep Blog if desired for SEO)
- `components/layout/Footer.tsx` — remove Analytics link, move Press to footer

**Acceptance criteria:**
- Main navigation has at most 6 items (4 tools + About + Blog)
- Press is accessible via footer only
- Analytics dashboard is not linked from any public UI element

---

### 4.2 Improve Mobile Bottom Navigation

**Why:** The bottom navigation currently shows 8 items which is too many for mobile. Best practice is 4-5 items max in a mobile bottom nav.

**Files to modify:**
- `components/layout/Header.tsx`

**Implementation:**

1. Reduce mobile bottom nav to 5 items:
   - Script Builder (FileText)
   - Schools (GraduationCap)
   - Costs (DollarSign)
   - Emergency (AlertTriangle)
   - More (Menu icon) — opens a slide-up sheet with remaining links

2. The "More" menu should contain:
   - Blog
   - About
   - Feedback
   - Press (if kept)

3. Use Radix UI Dialog or a simple slide-up animation (framer-motion) for the "More" menu.

**Acceptance criteria:**
- Mobile bottom nav shows exactly 5 items
- "More" menu provides access to all other pages
- Touch targets remain at least 44x44px
- Active page indicator works correctly

---

### 4.3 Add Print-Friendly Styles for Scripts and Checklists

**Why:** Users in the target demographic (uninsured, low-income) may want to print scripts or checklists to bring to their dental appointments. Currently, printing these pages produces poor results.

**Files to modify:**
- `app/globals.css` (or equivalent global stylesheet)
- `app/script-builder/page.tsx`

**Implementation:**

1. Add `@media print` styles to the global CSS:
   ```css
   @media print {
     /* Hide navigation, footer, feedback prompts, and disclaimers */
     header, footer, .feedback-prompt, .no-print { display: none !important; }

     /* Ensure script output is full-width */
     .script-output { width: 100%; max-width: none; }

     /* Ensure readable font sizes */
     body { font-size: 12pt; color: black; background: white; }

     /* Avoid page breaks inside script cards */
     .script-card { break-inside: avoid; }
   }
   ```

2. Add a "Print" button next to the existing "Copy" button on the Script Builder output:
   - Uses `window.print()` on click
   - Icon: `Printer` from lucide-react

**Acceptance criteria:**
- Printing the script builder page produces a clean, readable printout
- Navigation and non-essential UI elements are hidden when printing
- Script text is not cut off by page breaks

---

### 4.4 Add Structured Error Handling for External API Calls

**Why:** The geolocation module (`lib/utils/geolocation.ts`) calls external APIs (zippopotam.us, nominatim.openstreetmap.org) but error handling could be more user-friendly. When these APIs fail, users should see a helpful message rather than a silent failure.

**Files to modify:**
- `lib/utils/geolocation.ts`
- `components/features/school-finder/SchoolSearchForm.tsx` (or equivalent)

**Implementation:**

1. In `geolocation.ts`, ensure all fetch calls have:
   - A timeout (5 seconds max)
   - Graceful fallback when API is unreachable (use state-level approximate coordinates as fallback)
   - Clear error types: `"network_error"` | `"invalid_zip"` | `"api_unavailable"`

2. In the School Finder UI, show user-friendly messages:
   - Network error: "Could not determine your location. Try searching by state instead."
   - Invalid ZIP: "Please enter a valid 5-digit US ZIP code."
   - API unavailable: "Location service is temporarily unavailable. Showing results filtered by state."

3. When the ZIP API fails, automatically fall back to state-based filtering if the user has selected a state.

**Acceptance criteria:**
- School Finder never shows a blank/broken state when APIs fail
- User sees actionable error messages
- State-based fallback works when ZIP geolocation fails

---

## Phase 5 — Future Considerations (Do Not Implement Now)

These are noted for future planning but should **not** be started until Phases 1-3 are complete and analytics data confirms user engagement.

| Item | Notes |
|------|-------|
| **LLM-powered script generation** | Replace template-based scripts with GPT-4/Claude API for more natural, personalized output. Requires backend proxy for API key protection. Only pursue if script builder sees significant usage. |
| **PWA / Offline support** | Service worker for offline access. Useful for users with unreliable internet. Requires careful cache invalidation strategy for data updates. |
| **Community features** | User-submitted tips, experiences, reviews. Requires authentication, moderation, and database (Supabase/Firebase). Only pursue if there's clear demand. |
| **Dental insurance marketplace comparison** | Compare insurance plans, discount dental plans, and Medicaid eligibility. Requires significant data sourcing and maintenance. |
| **Provider reviews / ratings** | User-submitted reviews of dental schools and clinics. Requires moderation infrastructure. |

---

## Implementation Order Summary

```
Phase 1 (Critical — do first):
  1.1  Disclaimer banners on tool pages
  1.2  Data source citations
  1.3  .env.example file

Phase 2 (High — do immediately after Phase 1):
  2.1  External analytics integration
  2.2  In-context feedback collection

Phase 3 (Medium — do within 2 weeks):
  3.1  Data freshness indicators
  3.2  Cost estimate accuracy context
  3.3  Automated data staleness script

Phase 4 (Low — do when time permits):
  4.1  Navigation consolidation
  4.2  Mobile bottom nav improvement
  4.3  Print-friendly styles
  4.4  Geolocation error handling
```

---

## File Reference Map

Quick reference for agents implementing these tasks:

| Area | Key Files |
|------|-----------|
| Layout & Nav | `app/layout.tsx`, `components/layout/Header.tsx`, `components/layout/Footer.tsx` |
| Script Builder | `app/script-builder/page.tsx`, `components/features/script-builder/`, `lib/stores/script-store.ts`, `lib/utils/scripts.ts` |
| School Finder | `app/school-finder/page.tsx`, `components/features/school-finder/`, `lib/stores/school-store.ts`, `lib/data/schools.ts`, `lib/data/community-clinics.ts` |
| Cost Estimator | `app/cost-estimator/page.tsx`, `lib/data/costs.ts` |
| Emergency Triage | `app/emergency-triage/page.tsx`, `lib/data/urgency.ts` |
| Analytics | `lib/utils/analytics.ts`, `lib/stores/stats-store.ts` |
| Geolocation | `lib/utils/geolocation.ts` |
| API Routes | `app/api/report-issue/route.ts` |
| UI Components | `components/ui/` |
| Styles | `app/globals.css`, `tailwind.config.ts` |
| Tests (E2E) | `tests/e2e/*.spec.js`, `playwright.config.ts` |
| Tests (Unit) | `tests/unit/*.test.ts`, `vitest.config.ts` |
| Config | `next.config.js`, `package.json`, `tsconfig.json` |
| Legal | `app/privacy/page.tsx`, `app/terms/page.tsx` |
