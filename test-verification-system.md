# Dental Guide - Manual Testing Guide

## Data Verification System - Test Cases

**Last Updated:** 2025-02-05
**Test Environment:** Local development (localhost:3000)

---

## Quick Start Test Checklist

- [ ] 1. School Finder page loads with verification badges
- [ ] 2. "Report Issue" button opens dialog
- [ ] 3. Email API sends test report
- [ ] 4. Verification script runs successfully
- [ ] 5. Fixed URLs work (Texas Tech, Lyon College)
- [ ] 6. GitHub Actions workflow is valid

---

## Test 1: School Finder - Verification Badges Display

### Purpose
Verify that verification status badges appear on school cards

### Steps
1. Start dev server: `npm run dev`
2. Navigate to: http://localhost:3000/school-finder
3. Look at school cards

### Expected Results
- [ ] Schools show colored verification badge:
  - 🟢 **Green**: "Verified" (37 schools)
  - 🟡 **Yellow**: "Unverified" (43 schools)
- [ ] Last verified date shows: "Last checked: Feb 5, 2025"
- [ ] Badge is clearly visible on each card

### Test Data Points
Check these specific schools:
| School | Expected Status | Badge Color |
|--------|----------------|-------------|
| NYU College of Dentistry | Verified | Green |
| Rutgers School of Dental Medicine | Verified | Green |
| Lyon College School of Dental Medicine | Verified | Green |
| (Any school without "Contact verified" in notes) | Unverified | Yellow |

### Screenshot Location
Take screenshot of: School cards showing badges

---

## Test 2: Report Issue Dialog

### Purpose
Verify users can report data issues

### Steps
1. Go to: http://localhost:3000/school-finder
2. Click on any school's **"Report Issue"** button
3. Dialog opens with form

### Expected Results
- [ ] Dialog opens smoothly
- [ ] Form shows:
  - Issue type dropdown (Website down, Wrong phone, Wrong address, Pricing changed, Other)
  - Description textarea
  - Email input (optional)
  - Submit button
- [ ] Cancel button closes dialog
- [ ] Form validates (required fields)

### Test Case 2A: Submit Report

#### Steps
1. Select issue type: "Website down"
2. Enter description: "Test report - website returns 404"
3. Enter email: your test email
4. Click Submit

#### Expected Results
- [ ] Shows loading state
- [ ] Shows success message: "Report submitted successfully"
- [ ] Email received at: jun91249@gmail.com
  - Subject contains school name
  - Body contains issue type, description, reporter email
- [ ] Dialog closes automatically

#### Test Email Content Check
```
To: jun91249@gmail.com
Subject: Dental Guide - Issue Report for [School Name]
Body:
- School: [School Name]
- Website: [URL]
- Issue Type: Website down
- Description: Test report - website returns 404
- Reported by: [your email]
- Timestamp: [current time]
```

---

## Test 3: Fixed URLs Verification

### Purpose
Verify broken URLs were fixed

### Test 3A: Texas Tech (Fixed)

#### Steps
1. Find "Texas Tech University Health Sciences Center El Paso-Hunt School of Dentistry"
2. Click website link

#### Expected Results
- [ ] URL is: `https://ttuhscep.edu/sdm/`
- [ ] Website loads successfully
- [ ] Shows "Woody L. Hunt School of Dental Medicine"
- [ ] No 404 error

### Test 3B: Lyon College (Fixed)

#### Steps
1. Find "Lyon College School of Dental Medicine"
2. Click website link

#### Expected Results
- [ ] URL is: `https://lyoninstitute.com/`
- [ ] Website loads successfully
- [ ] Shows "Lyon College Institute of Health Sciences"
- [ ] No 404 error

### Test 3C: Verify Notes Updated

#### Steps
1. Check Texas Tech notes field
2. Check Lyon College notes field

#### Expected Results
- [ ] Texas Tech notes: Contains "Updated URL Feb 2025"
- [ ] Lyon College notes: Contains "Updated URL Feb 2025"

---

## Test 4: Verification Script

### Purpose
Test the automated website checker

### Steps
1. Open terminal
2. Run: `node scripts/verify-websites.js`
3. Wait for completion (takes ~2-3 minutes)

### Expected Results
- [ ] Script starts: "Checking 80 dental school websites..."
- [ ] Shows progress: "Processing batch X/16..."
- [ ] Each school shows:
  - ✓ Name: 200 (active) - for working sites
  - → Name: 301 (redirect) - for redirecting sites
  - ✗ Name: 404 (not_found) - for broken sites
- [ ] Final summary shows:
  ```
  Total websites checked: 80
  ✓ Active: ~64
  → Redirects: ~12
  ✗ Not Found: 0
  ⚠ Errors: 0
  ```
- [ ] Creates `verification-report.json` file
- [ ] Exit code 0 (success)

### Verify Report File

#### Steps
1. Open: `verification-report.json`
2. Check structure

#### Expected Results
```json
{
  "timestamp": "2025-02-05T...",
  "total": 80,
  "active": 64,
  "redirect": 12,
  "notFound": 0,
  "error": 0,
  "results": [
    {
      "name": "Rutgers School of Dental Medicine",
      "website": "https://sdm.rutgers.edu",
      "status": 200,
      "statusText": "active",
      "timestamp": "..."
    }
    // ... 79 more entries
  ]
}
```

---

## Test 5: GitHub Actions Workflow

### Purpose
Verify automated weekly checks are configured

### Steps
1. Open: `.github/workflows/verify-websites.yml`
2. Review configuration

### Expected Results
- [ ] File exists and is valid YAML
- [ ] Schedule: `0 2 * * 0` (Sundays at 2 AM UTC)
- [ ] Runs on: `ubuntu-latest`
- [ ] Steps include:
  - Checkout code
  - Setup Node.js
  - Install dependencies
  - Run verification script
  - Create issue if broken sites found

### Test Workflow Syntax

#### Steps
1. Go to GitHub repository
2. Click "Actions" tab
3. Look for "Weekly Website Verification" workflow

#### Expected Results
- [ ] Workflow appears in list
- [ ] No syntax errors shown
- [ ] Can manually trigger with "Run workflow" button

---

## Test 6: Type Safety & Build

### Purpose
Verify TypeScript compiles without errors

### Steps
1. Run: `npm run build`
2. Check output

### Expected Results
- [ ] Build completes successfully
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] Output shows:
  ```
  ✓ Compiled successfully
  ✓ Linting and checking validity of types
  ✓ Generating static pages
  ```

---

## Test 7: Mobile Responsiveness

### Purpose
Verify features work on mobile devices

### Steps
1. Open Chrome DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Select "iPhone 12 Pro" or similar
4. Navigate to school-finder

### Expected Results
- [ ] Verification badges are visible
- [ ] "Report Issue" button is tappable
- [ ] Dialog fits on screen
- [ ] Form inputs are usable
- [ ] No horizontal scrolling

---

## Test 8: Edge Cases

### Test 8A: Report Issue Without Email

#### Steps
1. Open Report Issue dialog
2. Fill description only (leave email empty)
3. Submit

#### Expected Results
- [ ] Form submits successfully
- [ ] Email shows "Not provided" in received email

### Test 8B: Cancel Report

#### Steps
1. Open Report Issue dialog
2. Fill some fields
3. Click Cancel

#### Expected Results
- [ ] Dialog closes
- [ ] No email sent
- [ ] Form resets

### Test 8C: Rapid Multiple Reports

#### Steps
1. Open Report Issue dialog
2. Submit report
3. Immediately open another report
4. Submit again

#### Expected Results
- [ ] Both reports sent successfully
- [ ] No race conditions
- [ ] Both emails received

---

## Pre-Deployment Final Checklist

Before deploying to production, verify:

- [ ] All 80 schools have `lastVerified` field
- [ ] All 80 schools have `verificationStatus` field
- [ ] Texas Tech URL updated to `ttuhscep.edu/sdm/`
- [ ] Lyon College URL updated to `lyoninstitute.com/`
- [ ] Report Issue emails go to jun91249@gmail.com
- [ ] Verification script runs without errors
- [ ] GitHub Actions workflow is valid
- [ ] Build passes (`npm run build`)
- [ ] Tested on mobile device
- [ ] No console errors in browser

---

## Bug Report Template

If you find issues during testing, document them:

```markdown
## Bug: [Brief description]

**Test Case:** [Which test above]
**Environment:** [Local/Staging/Production]
**Browser:** [Chrome/Firefox/Safari/etc]
**Steps to Reproduce:**
1. Step one
2. Step two
3. ...

**Expected:** [What should happen]
**Actual:** [What actually happens]
**Screenshot:** [Attach if applicable]
**Console Errors:** [Copy any errors]
```

---

## Test Results Log

| Date | Tester | Tests Passed | Tests Failed | Notes |
|------|--------|--------------|--------------|-------|
| 2025-02-05 | [Your Name] | [X]/8 | [Y]/8 | [Notes] |

---

## Quick Commands Reference

```bash
# Start dev server
npm run dev

# Run verification script
node scripts/verify-websites.js

# Build for production
npm run build

# Check TypeScript
npx tsc --noEmit

# Run linter
npm run lint
```

---

**End of Test Document**
