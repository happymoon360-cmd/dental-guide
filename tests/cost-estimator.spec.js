const { test, expect } = require("@playwright/test");

test.describe("Cost Estimator", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/cost-estimator');
  });

  test("Cost estimation for all procedures", async ({ page }) => {
    const procedures = ['Exam/Cleaning', 'Filling', 'Root Canal', 'Crown', 'Implant'];

    for (const procedure of procedures) {
      await page.goto('/cost-estimator');
      await page.getByLabel('Treatment').selectOption(procedure);
      await page.getByLabel('Location').selectOption('National Average');
      await page.getByRole('button', { name: /Check Cost/i }).click();

      // Check results
      await expect(page.getByText('Estimated Cost')).toBeVisible();
      await expect(page.getByText(/\$\d+ - \$\d+/i)).toBeVisible();
      await expect(page.getByText(procedure)).toBeVisible();
    }
  });

  test("Cost differences by region", async ({ page }) => {
    await page.goto('/cost-estimator');
    await page.getByLabel('Treatment').selectOption('Root Canal');

    // Big city
    await page.getByLabel('Location').selectOption('Big City');
    await page.getByRole('button', { name: /Check Cost/i }).click();

    let bigCityCost = await page.getByText(/\$\d+ - \$\d+/i).textContent();
    const bigCityMatch = bigCityCost.match(/\$(\d+)/);
    const bigCityMin = parseInt(bigCityMatch[1]);

    // Small city
    await page.getByLabel('Location').selectOption('Small City');
    await page.getByRole('button', { name: /Check Cost/i }).click();

    let smallCityCost = await page.getByText(/\$\d+ - \$\d+/i).textContent();
    const smallCityMatch = smallCityCost.match(/\$(\d+)/);
    const smallCityMin = parseInt(smallCityMatch[1]);

    // Verify Big city costs more
    expect(bigCityMin).toBeGreaterThan(smallCityMin);
  });

  test("Cost range format verification", async ({ page }) => {
    await page.goto('/cost-estimator');
    await page.getByLabel('Treatment').selectOption('Filling');
    await page.getByLabel('Location').selectOption('National Average');
    await page.getByRole('button', { name: /Check Cost/i }).click();

    // Verify format: "$XXX - $XXX"
    await expect(page.getByText(/\$\d{3} - \$\d{3}/i)).toBeVisible();
  });
});
