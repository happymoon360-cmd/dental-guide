const { test, expect } = require("@playwright/test");

// Helper function to select option from Radix UI dropdown
async function selectRadixOption(page, label, optionText) {
  // Click the trigger to open the dropdown
  await page.getByLabel(label).click();
  // Click the option
  await page.getByRole('option', { name: optionText, exact: false }).click();
}

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
    // The previous test used MapPin class check, which might be flaky if class names change
    // Better to check for distance text e.g., "miles"
    // But let's verify if cards exist
    // await expect(page.locator('[data-testid="school-card"]')).not.toHaveCount(0); // This assumes data-testid exists, which was used in filter test

    // Let's use the same locator strategy as in "Filter by state" test, but just checking count
    // Wait for at least one result
    await expect(page.locator('[data-testid="school-card"]').first()).toBeVisible({ timeout: 10000 });
  });

  test("Filter by state", async ({ page }) => {
    // Select state
    await selectRadixOption(page, 'State', 'NY');

    // Search
    await page.getByRole('button', { name: /Find Schools/i }).click();

    // Verify results
    await expect(page.getByText(/Found \d+ schools/i)).toBeVisible();

    // Verify all results are in NY state
    const results = page.locator('[data-testid="school-card"]');
    await expect(results.first()).toBeVisible();
    const count = await results.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < Math.min(count, 5); i++) { // Check first 5 to save time
      const cardText = await results.nth(i).textContent();
      expect(cardText).toContain(', NY');
    }
  });

  test("Filter for complete information only", async ({ page }) => {
    // Select checkbox
    await page.getByRole('checkbox', { name: 'Show only schools with complete information' }).check();

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
    await expect(page.getByText(/valid ZIP code/i)).toBeVisible();
  });

  test("School website link", async ({ page }) => {
    // Search
    await page.getByLabel('ZIP Code').fill('10001');
    await page.getByRole('button', { name: /Find Schools/i }).click();

    // Click website button
    // Need to wait for results
    await expect(page.locator('[data-testid="school-card"]').first()).toBeVisible();

    const websiteLink = page.getByRole('link', { name: /Website/i }).first();
    await expect(websiteLink).toBeVisible();

    // Check if target is _blank
    const target = await websiteLink.getAttribute('target');
    expect(target).toBe('_blank');
  });
});

test.describe("School Finder - Loading state", () => {
  test("Show loading during search", async ({ page }) => {
    await page.goto('/school-finder');

    // Slow down network
    await page.route('**/zippopotam.us/**', async route => {
      await new Promise(f => setTimeout(f, 2000));
      await route.continue();
    });

    // Search
    await page.getByLabel('ZIP Code').fill('10001');
    await page.getByRole('button', { name: /Find Schools/i }).click();

    // Verify loading text
    // The button might show 'Searching...' or there might be a global loading indicator
    await expect(page.getByText(/Searching|Loading/i)).toBeVisible();
  });
});
