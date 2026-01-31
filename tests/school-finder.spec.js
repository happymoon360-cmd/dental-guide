const { test, expect } = require("@playwright/test");

test.describe("School Finder", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/school-finder');
  });

  test("Search schools by ZIP code", async ({ page }) => {
    // Enter ZIP code
    await page.getByLabel('ZIP Code').fill('10001');

    // Click search button
    await page.getByRole('button', { name: /Find Schools/i }).click();

    // Verify results
    await expect(page.getByText(/Found \d+ schools/i)).toBeVisible();

    // Verify schools with calculated distances
    const distances = await page.locator('[class*="MapPin"]').count();
    expect(distances).toBeGreaterThan(0);
  });

  test("Filter by state", async ({ page }) => {
    // Select state
    await page.getByLabel('State').selectOption('NY');

    // Search
    await page.getByRole('button', { name: /Find Schools/i }).click();

    // Verify results
    await expect(page.getByText(/Found \d+ schools/i)).toBeVisible();

    // Verify all results are in NY state
    const results = page.locator('[data-testid="school-card"]');
    const count = await results.count();
    for (let i = 0; i < count; i++) {
      const cardText = await results.nth(i).textContent();
      expect(cardText).toContain(', NY');
    }
  });

  test("Filter for complete information only", async ({ page }) => {
    // Select checkbox
    await page.getByLabel('Show only complete info').check();

    // Search
    await page.getByRole('button', { name: /Find Schools/i }).click();

    // Verify all results have complete information
    const incomplete = page.getByText('Some Information Missing');
    await expect(incomplete).not.toBeVisible();
  });

  test("Error handling for invalid ZIP code", async ({ page }) => {
    // Enter invalid ZIP code
    await page.getByLabel('ZIP Code').fill('00000');

    // Search
    await page.getByRole('button', { name: /Find Schools/i }).click();

    // Verify error message
    await expect(page.getByText(/Please enter a valid ZIP code/i)).toBeVisible();
  });

  test("School website link", async ({ page }) => {
    // Search
    await page.getByLabel('ZIP Code').fill('10001');
    await page.getByRole('button', { name: /Find Schools/i }).click();

    // Click website button
    await page.getByRole('link', { name: /Website/i }).first().click();

    // Verify opens in new tab
    const pages = await page.context().pages();
    expect(pages.length).toBe(2);
  });
});

test.describe("School Finder - Loading state", () => {
  test("Show loading during search", async ({ page }) => {
    await page.goto('/school-finder');

    // Slow down network
    await page.route('**/zippopotam.us/**', route => {
      setTimeout(() => route.continue(), 2000);
    });

    // Search
    await page.getByLabel('ZIP Code').fill('10001');
    await page.getByRole('button', { name: /Find Schools/i }).click();

    // Verify loading text
    await expect(page.getByText('Searching...')).toBeVisible();
  });
});
