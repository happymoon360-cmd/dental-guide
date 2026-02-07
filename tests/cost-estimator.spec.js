const { test, expect } = require("@playwright/test");

// Helper function to select option from Radix UI dropdown
async function selectRadixOption(page, label, optionText) {
  // Click the trigger to open the dropdown
  await page.getByLabel(label).click();
  // Click the option
  await page.getByRole('option', { name: optionText, exact: true }).click();
}

test.describe("Cost Estimator", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/cost-estimator');
  });

  test("Cost estimation for all procedures", async ({ page }) => {
    // Labels in dropdown vs Expected text in result
    const procedures = [
      { label: 'Checkup', expected: 'Exam/Cleaning' },
      { label: 'Filling', expected: 'Filling' },
      { label: 'Root Canal', expected: 'Root Canal' },
      { label: 'Crown', expected: 'Crown/Restoration' },
      { label: 'Implant', expected: 'Extraction/Implant' }
    ];

    for (const item of procedures) {
      await selectRadixOption(page, 'Treatment', item.label);
      await selectRadixOption(page, 'Location', 'National Average');
      await page.getByRole('button', { name: /Check Cost/i }).click();

      // Check results
      await expect(page.getByText('Estimated Cost')).toBeVisible();
      await expect(page.getByText(/\$\d+ - \$\d+/i)).toBeVisible();
      // Use more specific locator for result card
      await expect(page.locator('.rounded-3xl.bg-blue-50')).toContainText(item.expected);
    }
  });

  test("Cost differences by region", async ({ page }) => {
    await selectRadixOption(page, 'Treatment', 'Root Canal');

    // High Cost Area: 'Northeast (NY, Boston, DC)' -> Label: 'Northeast'
    // Low Cost Area: 'South (Texas, Florida)' -> Label: 'South'

    await selectRadixOption(page, 'Location', 'Northeast');
    await page.getByRole('button', { name: /Check Cost/i }).click();

    let bigCityCostText = await page.getByText(/\$\d+ - \$\d+/i).textContent();
    const bigCityMin = parseInt(bigCityCostText.match(/\$(\d+(?:,\d+)?)/)[1].replace(/,/g, ''));

    // Low cost area
    await selectRadixOption(page, 'Location', 'South');
    await page.getByRole('button', { name: /Check Cost/i }).click();

    let smallCityCostText = await page.getByText(/\$\d+ - \$\d+/i).first().textContent();
    const smallCityMin = parseInt(smallCityCostText.match(/\$(\d+(?:,\d+)?)/)[1].replace(/,/g, ''));

    // Verify High cost > Low cost
    expect(bigCityMin).toBeGreaterThan(smallCityMin);
  });

  test("Cost range format verification", async ({ page }) => {
    await selectRadixOption(page, 'Treatment', 'Filling');
    await selectRadixOption(page, 'Location', 'National Average');
    await page.getByRole('button', { name: /Check Cost/i }).click();

    // Verify format: "$XXX - $XXX"
    await expect(page.getByText(/\$\d+ - \$\d+/i)).toBeVisible();
  });
});
