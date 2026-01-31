const { test, expect } = require("@playwright/test");

test.describe("Script Builder", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/script-builder');
  });

  test("Generate script after selecting all fields", async ({ page }) => {
    // Select treatment
    await page.getByLabel('Treatment').selectOption('Root Canal');

    // Select payment method
    await page.getByLabel('Payment').selectOption('Cash');

    // Select urgency
    await page.getByLabel('Urgency').selectOption('Regular');

    // Select visit type
    await page.getByLabel('Visit Type').selectOption('First Visit');

    // Select budget
    // TODO: Select budget UI verification needed

    // Select tone
    await page.getByLabel('Tone').selectOption('Direct');

    // Select contact channel
    await page.getByLabel('Contact').selectOption('Visit');

    // Select language
    await page.getByLabel('Language').selectOption('English');

    // Click generate script button
    await page.getByRole('button', { name: /Generate Scripts/i }).click();

    // Check results
    await expect(page.getByText('Option A')).toBeVisible();
    await expect(page.getByText('Option B')).toBeVisible();

    // Verify English text
    await expect(page.getByText('Hello')).toBeVisible();
    await expect(page.getByText(/Root Canal/i)).toBeVisible();
  });

  test("Generate short version script", async ({ page }) => {
    // Checkbox selection
    await page.getByLabel('Short version').check();

    // Generate script
    await page.getByLabel('Treatment').selectOption('Filling');
    await page.getByRole('button', { name: /Generate Scripts/i }).click();

    // Check results
    const scriptA = await page.locator('p').nth(0).textContent();
    expect(scriptA.length).toBeLessThan(200); // Verify it's short version
  });

  test("Script copy functionality", async ({ page }) => {
    // Generate script
    await page.getByLabel('Treatment').selectOption('Filling');
    await page.getByRole('button', { name: /Generate Scripts/i }).click();

    // Click copy button (Option A)
    await page.getByRole('button', { name: 'Copy' }).first().click();

    // Verify clipboard
    const clipboard = await page.evaluate(() => navigator.clipboard.readText());
    expect(clipboard).toContain('Filling');

    // Verify "Copied!" state
    await expect(page.getByText('Copied!')).toBeVisible();

    // Verify "Copied!" disappears after 2 seconds
    await page.waitForTimeout(2100);
    await expect(page.getByText('Copied!')).not.toBeVisible();
  });

  test("Generate script in Spanish", async ({ page }) => {
    // Select Spanish
    await page.getByLabel('Language').selectOption('Español');

    // Generate script
    await page.getByLabel('Treatment').selectOption('Root Canal');
    await page.getByRole('button', { name: /Generate Scripts/i }).click();

    // Verify Spanish text
    await expect(page.getByText('Hola')).toBeVisible();
  });
});

test.describe("Script Builder - Accessibility", () => {
  test("Keyboard navigation", async ({ page }) => {
    await page.goto('/script-builder');

    // Navigate with Tab
    await page.keyboard.press('Tab');

    // Verify focus on first field
    await expect(page.getByLabel('Treatment')).toBeFocused();

    // Select with Enter (verify dropdown opens)
    await page.keyboard.press('Enter');
    await expect(page.getByRole('option').first()).toBeVisible();
  });

  test("Screen reader compatibility", async ({ page }) => {
    await page.goto('/script-builder');

    // Verify ARIA labels
    const treatmentSelect = page.getByLabel('Treatment');
    await expect(treatmentSelect).toBeVisible();

    // Verify aria-label attribute
    const ariaLabel = await treatmentSelect.getAttribute('aria-label');
    expect(ariaLabel).toBe('Treatment');
  });
});
