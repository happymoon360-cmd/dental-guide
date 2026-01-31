# Dental Guide - Testing Guide & Procedures

## Table of Contents
1. [Development Environment Setup](#1-development-environment-setup)
2. [Local Testing Procedures](#2-local-testing-procedures)
3. [Page-by-Page Test Cases](#3-page-by-page-test-cases)
4. [Responsive Design Testing](#4-responsive-design-testing)
5. [Cross-Browser Testing](#5-cross-browser-testing)
6. [Automated Testing](#6-automated-testing)
7. [Pre-Deployment Checklist](#7-pre-deployment-checklist)

---

## 1. Development Environment Setup

### 1.1 Prerequisites
```bash
# Check Node.js version (should be 18+)
node --version

# Check npm version
npm --version
```

### 1.2 Initial Setup
```bash
# Navigate to project directory
cd "/Users/heoseogjun/Projects/Dental Guide"

# Install dependencies
npm install

# Start development server
npm run dev
```

### 1.3 Verify Server is Running
```bash
# Check if server is running on port 3000
lsof -i :3000

# Expected output:
# COMMAND   PID       USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
# node    <PID> heoseogjun   13u  IPv6 0x...      0t0  TCP *:hbci (LISTEN)
```

### 1.4 Access the Application
```
Open browser: http://localhost:3000
```

---

## 2. Local Testing Procedures

### 2.1 Manual Testing Workflow

#### Step 1: Clear Cache & Restart
```bash
# Stop any running dev servers
pkill -f "next dev"

# Clear Next.js cache
rm -rf .next

# Restart dev server
npm run dev
```

#### Step 2: Browser Setup
1. Open Chrome/Edge/Safari
2. Open Developer Tools (`F12` or `Cmd+Option+I`)
3. **IMPORTANT**: Check "Disable cache" in Network tab
4. Refresh page (`Cmd+Shift+R` or `Ctrl+Shift+R`)

#### Step 3: Console Error Check
```javascript
// Open Console tab in DevTools
// Look for:
- Red error messages
- Yellow warnings
- Failed network requests (status code 4xx, 5xx)
```

### 2.2 Testing Methodology

#### Smoke Testing (Quick Check)
- Load homepage
- Navigate to each main page
- Verify no console errors
- Check all buttons are clickable

#### Functional Testing (Detailed)
- Test each feature with various inputs
- Verify form validation
- Check error handling
- Test edge cases

#### Regression Testing
- Re-test after code changes
- Verify previous bugs are fixed
- Ensure no new issues introduced

---

## 3. Page-by-Page Test Cases

### 3.1 Homepage (`/`)

#### Test Cases:

| # | Test Case | Expected Result | Status |
|---|-----------|----------------|--------|
| H1 | Page loads without errors | Homepage displays with hero section | ☐ |
| H2 | Hero section visible | "Dental Care Without Breaking the Bank" heading visible | ☐ |
| H3 | Benefits displayed | 4 benefit items with checkmarks visible | ☐ |
| H4 | "Get Started Free" button works | Clicking redirects to `/script-builder` | ☐ |
| H5 | Tools section visible | 4 tool cards displayed (Script, Schools, Costs, Emergency) | ☐ |
| H6 | Tool cards clickable | Each card navigates to correct page | ☐ |
| H7 | "How It Works" section visible | 3 steps displayed with numbered circles | ☐ |
| H8 | Final CTA visible | "Ready to Take Control?" section with button | ☐ |
| H9 | Mobile responsive | Bottom navigation visible on mobile | ☐ |
| H10 | Desktop navigation | Top navigation visible on desktop | ☐ |

#### Testing Steps:
```bash
1. Navigate to http://localhost:3000
2. Check console for errors (should be none)
3. Verify hero section loads
4. Click each tool card
5. Verify correct navigation
6. Resize browser window (desktop → mobile)
7. Check navigation changes
```

### 3.2 Script Builder (`/script-builder`)

#### Test Cases:

| # | Test Case | Test Data | Expected Result | Status |
|---|-----------|-----------|----------------|--------|
| S1 | Form loads | - | All 8 fields displayed correctly | ☐ |
| S2 | Treatment selection | Select "Root Canal" | Value updates in store | ☐ |
| S3 | Payment selection | Select "Cash" | Value updates in store | ☐ |
| S4 | Urgency selection | Select "Urgent" | 🚨 icon displayed | ☐ |
| S5 | Visit Type selection | Select "First Visit" | Value updates in store | ☐ |
| S6 | Tone selection | Select "Direct" | Value updates in store | ☐ |
| S7 | Contact selection | Select "Phone" | Value updates in store | ☐ |
| S8 | Language selection | Select "English" | Scripts generate in English | ☐ |
| S9 | Language selection | Select "Español" | Scripts generate in Spanish | ☐ |
| S10 | Short version checkbox | Check/Uncheck | Toggles between full/short scripts | ☐ |
| S11 | Generate button | Click with valid data | Two scripts (Option A & B) displayed | ☐ |
| S12 | Copy button - Script A | Click "Copy" | Script copied to clipboard | ☐ |
| S13 | Copy button - Script B | Click "Copy" | Script copied to clipboard | ☐ |
| S14 | Script content | English + Root Canal | Procedure name in English ("Root Canal") | ☐ |
| S15 | Script content | Spanish + Root Canal | Procedure name in Spanish ("Conducto Radicular") | ☐ |
| S16 | Script format | Check generated script | All selected fields reflected in script | ☐ |
| S17 | Mobile layout | View on mobile | Form responsive, buttons tappable | ☐ |

#### Detailed Test Script:
```bash
1. Navigate to http://localhost:3000/script-builder

2. Test English Script Generation:
   - Treatment: Root Canal
   - Payment: Cash
   - Urgency: 🚨 Urgent
   - Visit Type: First Visit
   - Tone: Direct
   - Contact: Phone
   - Language: English
   - [ ] Uncheck "Short version"
   - Click "Generate Scripts"
   - Verify: Two scripts displayed
   - Verify: "Root Canal" appears in scripts (not "신경치료")
   - Click "Copy" on Script A
   - Paste in text editor to verify

3. Test Spanish Script Generation:
   - Language: Español
   - Click "Generate Scripts"
   - Verify: Scripts in Spanish
   - Verify: "Conducto Radicular" appears (not "Root Canal")

4. Test Short Version:
   - Check "Short version (for text messages)"
   - Click "Generate Scripts"
   - Verify: Shorter, single-line scripts

5. Test All Combinations:
   - Repeat for each treatment type (5 total)
   - Repeat for each payment method (3 total)
   - Repeat for each visit type (4 total)
```

### 3.3 School Finder (`/school-finder`)

#### Test Cases:

| # | Test Case | Test Data | Expected Result | Status |
|---|-----------|-----------|----------------|--------|
| SC1 | Page loads | - | Form loads, no "ALL" value error | ☐ |
| SC2 | ZIP code input | Enter "10001" | Value stored in store | ☐ |
| SC3 | ZIP code validation | Enter "ABC" | Form accepts (validated on search) | ☐ |
| SC4 | State selection | Select "California" | Filter shows only CA schools | ☐ |
| SC5 | State selection | Select "All States" | All 71 schools shown | ☐ |
| SC6 | Completeness filter | Check "Show only complete info" | Only schools with full data shown | ☐ |
| SC7 | Search button | Click with valid ZIP | Loading indicator appears | ☐ |
| SC8 | Search results | ZIP "10001" | Schools sorted by distance | ☐ |
| SC9 | Distance calculation | Compare 2 schools | Closer school shows smaller distance | ☐ |
| SC10 | Invalid ZIP | Enter "99999" | Error message displayed | ☐ |
| SC11 | Empty results | ZIP in area with no schools | "No results" message | ☐ |
| SC12 | School card display | Check result card | Name, city, state, distance shown | ☐ |
| SC13 | Mobile layout | View on mobile | Form and results responsive | ☐ |

#### Detailed Test Script:
```bash
1. Navigate to http://localhost:3000/school-finder

2. Test Basic Search:
   - Enter ZIP: 10001 (New York)
   - Select State: "All States"
   - Click "Find Schools"
   - Verify: Loading appears
   - Verify: Results sorted by distance
   - Verify: Each school shows distance

3. Test State Filter:
   - Select State: "California"
   - Click "Find Schools"
   - Verify: Only CA schools shown
   - Verify: School.state === "California"

4. Test Invalid ZIP:
   - Enter ZIP: ABC
   - Click "Find Schools"
   - Verify: Error message "유효한 우편번호를 입력해주세요."

5. Test Completeness Filter:
   - Check "Show only complete info"
   - Click "Find Schools"
   - Verify: Schools with missing phone/website hidden

6. Test ZIP Accuracy:
   - Enter ZIP: 90210 (Beverly Hills, CA)
   - Click "Find Schools"
   - Verify: USC (Los Angeles) is closest
   - Distance should be < 20 miles
```

### 3.4 Cost Calculator (`/cost-estimator`)

#### Test Cases:

| # | Test Case | Test Data | Expected Result | Status |
|---|-----------|-----------|----------------|--------|
| C1 | Page loads | - | Form loads correctly | ☐ |
| C2 | Treatment selection | Select "Root Canal" | Label shows "Root Canal" | ☐ |
| C3 | Location selection | Select "Big City" | Label shows "Big City" | ☐ |
| C4 | Calculate button | Click with valid data | Cost estimate displayed | ☐ |
| C5 | Cost range display | Root Canal + National Avg | Reasonable range shown | ☐ |
| C6 | Regional multiplier | Big City vs Small City | Big City shows higher cost | ☐ |
| C7 | All treatments | Test each of 5 options | Each shows unique range | ☐ |
| C8 | Output format | Check result card | Blue header, clear text | ☐ |

#### Detailed Test Script:
```bash
1. Navigate to http://localhost:3000/cost-estimator

2. Test Cost Calculation:
   - Treatment: Root Canal
   - Location: National Average
   - Click "Check Cost"
   - Verify: Result card appears
   - Verify: Cost range is reasonable ($500-$2000)

3. Test Regional Differences:
   - Treatment: Checkup
   - Location: Big City
   - Note the cost range
   - Change: Location to Small City
   - Click "Check Cost"
   - Verify: Small City cost <= Big City cost

4. Test All Treatments:
   For each treatment:
   - Exam/Cleaning
   - Filling
   - Root Canal
   - Crown
   - Implant

   Verify:
   - Implant > Crown > Root Canal > Filling > Checkup
```

### 3.5 Emergency Guide (`/emergency-triage`)

#### Test Cases:

| # | Test Case | Test Data | Expected Result | Status |
|---|-----------|-----------|----------------|--------|
| E1 | Page loads | - | Form loads correctly | ☐ |
| E2 | Symptom selection | Select "Severe Pain" | Correct label displayed | ☐ |
| E3 | Check button | Click with selection | Guide displayed | ☐ |
| E4 | Urgent symptoms | Severe Pain, Face Swollen | "Visit within 24 hours" guidance | ☐ |
| E5 | Less urgent | Broken Tooth | Less urgent guidance | ☐ |
| E6 | All symptoms | Test each of 6 options | Each shows appropriate guidance | ☐ |

#### Detailed Test Script:
```bash
1. Navigate to http://localhost:3000/emergency-triage

2. Test Urgent Symptoms:
   - Select: "Severe Pain"
   - Click "Check What To Do"
   - Verify: Guidance says "Visit within 24 hours" or similar urgent language

3. Test All Symptoms:
   For each symptom:
   - Severe Pain
   - Face Swollen
   - Bleeding Won't Stop
   - Broken Tooth
   - Gum Swollen
   - Pain + Fever

   Verify:
   - Each shows guidance
   - Urgent symptoms recommend faster action
```

---

## 4. Responsive Design Testing

### 4.1 Viewport Testing

#### Desktop (1920x1080)
```bash
1. Open Chrome DevTools (F12)
2. Click Device Toolbar (Ctrl+Shift+M / Cmd+Shift+M)
3. Select "Responsive" mode
4. Set dimensions: 1920 x 1080
5. Verify:
   - Top navigation visible
   - 4 tool cards in single row
   - Adequate whitespace
   - No horizontal scrollbar
```

#### Tablet (768x1024)
```bash
1. Set dimensions: 768 x 1024
2. Verify:
   - Top navigation visible
   - Tool cards in 2x2 grid
   - Form fields stack appropriately
   - Text readable (16px+)
```

#### Mobile (375x667 - iPhone SE)
```bash
1. Set dimensions: 375 x 667
2. Verify:
   - Bottom navigation visible (fixed at bottom)
   - Top navigation hidden
   - Single column layout
   - Buttons are tappable (min 44x44px)
   - No horizontal scroll
   - Text readable without zoom
```

### 4.2 Orientation Testing

#### Landscape Mode
```bash
1. Rotate device to landscape (e.g., 667 x 375)
2. Verify:
   - Content not cut off
   - Bottom navigation still accessible
   - Forms usable
```

### 4.3 Touch Target Testing

#### Minimum Touch Targets
```javascript
// Use Chrome DevTools to measure:
// All buttons: >= 44px x 44px
// Form inputs: >= 44px height
// Navigation icons: >= 48px x 48px

// In DevTools Console:
document.querySelectorAll('button').forEach(btn => {
  const rect = btn.getBoundingClientRect();
  console.log(`${rect.width}x${rect.height}`);
});
```

---

## 5. Cross-Browser Testing

### 5.1 Browser Matrix

| Browser | Version | Status | Priority |
|---------|---------|--------|----------|
| Chrome | Latest | ☐ | P0 |
| Safari | Latest (macOS/iOS) | ☐ | P0 |
| Firefox | Latest | ☐ | P1 |
| Edge | Latest | ☐ | P1 |
| Samsung Internet | Latest | ☐ | P2 |

### 5.2 Testing Steps per Browser

```bash
For each browser:
1. Clear browser cache
2. Navigate to http://localhost:3000
3. Run smoke tests (all pages load)
4. Test one key feature (e.g., Script Builder)
5. Check responsive design (mobile mode)
6. Verify no console errors
7. Note any visual differences
```

### 5.3 Known Browser Issues

#### Safari (iOS)
- Bottom navigation may need `-webkit-overflow-scrolling: touch`
- Test on real device if possible

#### Firefox
- Check scroll behavior
- Verify flexbox/grid layouts match Chrome

---

## 6. Automated Testing

### 6.1 Unit Tests

#### Setup
```bash
# Install test dependencies (if not installed)
npm install -D vitest @vitest/ui jsdom
```

#### Run Unit Tests
```bash
# Run all tests
npm test

# Run with UI
npm run test:ui

# Run specific file
npx vitest tests/unit/scripts.test.ts
```

#### Test Files Structure
```
tests/
├── unit/
│   ├── scripts.test.ts      # Script generation logic
│   ├── geolocation.test.ts  # Distance calculations
│   └── costs.test.ts        # Cost estimation
└── e2e/
    ├── script-builder.spec.ts
    ├── school-finder.spec.ts
    └── navigation.spec.ts
```

### 6.2 E2E Testing with Playwright

#### Setup
```bash
# Install Playwright
npm install -D @playwright/test

# Install browsers
npx playwright install
```

#### Run E2E Tests
```bash
# Run all E2E tests
npm run test:e2e

# Run with UI
npx playwright test --ui

# Run specific test
npx playwright test tests/e2e/script-builder.spec.ts
```

#### Example E2E Test
```typescript
// tests/e2e/script-builder.spec.ts
import { test, expect } from '@playwright/test';

test('generates English scripts', async ({ page }) => {
  await page.goto('/script-builder');

  // Select options
  await page.selectOption('select', 'Root Canal');
  await page.selectOption('[name="payment"]', 'Cash');
  await page.selectOption('[name="language"]', 'English');

  // Generate
  await page.click('button:has-text("Generate Scripts")');

  // Verify
  await expect(page.locator('.script-card')).toHaveCount(2);
  await expect(page.locator('text=Root Canal')).toBeVisible();
});

test('copies script to clipboard', async ({ page }) => {
  await page.goto('/script-builder');
  // ... generate script ...

  // Click copy
  await page.click('button:has-text("Copy")');

  // Verify feedback
  await expect(page.locator('text=Copied!')).toBeVisible();
});
```

---

## 7. Pre-Deployment Checklist

### 7.1 Code Quality

- [ ] No TypeScript errors (`npx tsc --noEmit`)
- [ ] No ESLint warnings (`npm run lint`)
- [ ] All tests passing (`npm test`)
- [ ] No console errors on any page
- [ ] No broken images or 404s
- [ ] All links work

### 7.2 Performance

- [ ] Lighthouse score > 90 for Performance
- [ ] Lighthouse score > 90 for Accessibility
- [ ] Lighthouse score > 90 for Best Practices
- [ ] Initial load < 3 seconds
- [ ] No layout shifts (CLS < 0.1)

### 7.3 Content

- [ ] All text in English (no Korean UI text)
- [ ] All labels translated correctly
- [ ] Script generation works for English and Spanish
- [ ] No placeholder text ("Lorem ipsum")
- [ ] Contact information accurate

### 7.4 Responsive Design

- [ ] Tested on mobile (375px width)
- [ ] Tested on tablet (768px width)
- [ ] Tested on desktop (1920px width)
- [ ] Bottom navigation works on mobile
- [ ] No horizontal scrollbars
- [ ] Touch targets >= 44px

### 7.5 Cross-Browser

- [ ] Tested in Chrome
- [ ] Tested in Safari (desktop + iOS)
- [ ] Tested in Firefox
- [ ] Tested in Edge
- [ ] No browser-specific bugs

### 7.6 Accessibility

- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Color contrast ratios met (WCAG AA)
- [ ] Focus indicators visible
- [ ] Alt text on images
- [ ] ARIA labels on interactive elements

### 7.7 Security

- [ ] No sensitive data in localStorage
- [ ] No hardcoded API keys
- [ ] HTTPS ready
- [ ] No console.log in production
- [ ] Error handling doesn't leak info

### 7.8 SEO

- [ ] Meta tags present
- [ ] Open Graph tags
- [ ] Structured data (JSON-LD)
- [ ] Sitemap generated
- [ ] robots.txt configured
- [ ] Semantic HTML

---

## Quick Test Commands

```bash
# Full test suite
npm test                 # Unit tests
npm run test:e2e        # E2E tests
npm run lint            # Linting
npx tsc --noEmit        # Type check

# Quick smoke test
pkill -f "next dev"
rm -rf .next
npm run dev

# Then in browser:
# 1. http://localhost:3000
# 2. Test each page
# 3. Check console
```

---

## Bug Reporting Template

```markdown
## Bug Report

### Description
[Brief description of the issue]

### Steps to Reproduce
1. Go to...
2. Click on...
3. See error

### Expected Behavior
[What should happen]

### Actual Behavior
[What actually happened]

### Environment
- Browser: [Chrome/Safari/etc]
- Device: [Desktop/Mobile/Tablet]
- Screen Size: [e.g., 1920x1080]
- URL: [page where bug occurs]

### Screenshots
[Attach screenshots if applicable]

### Console Errors
[Paste any console errors]
```

---

## Notes

- Always test with fresh browser cache
- Test on real mobile devices when possible
- Keep test documentation updated as features change
- Document any browser-specific workarounds
- Maintain a list of known issues for next release
