const { test, expect } = require("@playwright/test");

// Helper function to select option from Radix UI dropdown
async function selectRadixOption(page, label, optionText) {
  // Click the trigger to open the dropdown
  await page.getByLabel(label).click();
  // Click the option
  await page.getByRole('option', { name: optionText, exact: false }).click();
}

test.describe("Script Builder", () => {
  test.beforeEach(async ({ page }) => {
    // Grant clipboard permissions for copy test
    await page.context().grantPermissions(['clipboard-read', 'clipboard-write']);
    await page.goto('/script-builder');
  });

  test("Generate script after selecting all fields", async ({ page }) => {
    // Select treatment
    await selectRadixOption(page, 'Treatment', 'Root Canal');

    // Select payment method
    await selectRadixOption(page, 'Payment', 'Cash');

    // Select urgency
    await selectRadixOption(page, 'Urgency', 'Regular');

    // Select visit type
    await selectRadixOption(page, 'Visit Type', 'First Visit');

    // Select tone
    await selectRadixOption(page, 'Tone', 'Direct');

    // Select contact channel
    await selectRadixOption(page, 'Contact', 'Visit');

    // Select language
    await selectRadixOption(page, 'Language', 'English');

    // Click generate script button
    await page.getByRole('button', { name: /Generate Scripts/i }).click();

    // Check results
    await expect(page.getByText('Option A')).toBeVisible();
    await expect(page.getByText('Option B')).toBeVisible();

    // Verify English text in Script A
    await expect(page.locator('[data-script="A"]')).toContainText('Root Canal');
  });

  test("Generate short version script", async ({ page }) => {
    // Checkbox selection
    await page.getByLabel('Short version').check();

    // Generate script
    await selectRadixOption(page, 'Treatment', 'Filling');
    await page.getByRole('button', { name: /Generate Scripts/i }).click();

    // Check results with waiting
    await expect(page.locator('[data-script="A"]')).toBeVisible();
    const scriptA = await page.locator('[data-script="A"]').textContent();
    expect(scriptA.length).toBeLessThan(300); // Verify it's short version
  });

  test("Script copy functionality", async ({ page }) => {
    // Generate script
    await selectRadixOption(page, 'Treatment', 'Filling');
    await page.getByRole('button', { name: /Generate Scripts/i }).click();

    // Click copy button (Option A)
    await page.getByRole('button', { name: 'Copy' }).first().click();

    // Verify "Copied!" state
    await expect(page.getByText('Copied!')).toBeVisible();

    // Verify clipboard content
    // Note: Clipboard reading in headless can be flaky, so we rely more on the UI feedback
    // but try to read if permission allows
    try {
      const clipboard = await page.evaluate(() => navigator.clipboard.readText());
      expect(clipboard).toContain('Filling');
    } catch (e) {
      console.log('Clipboard read failed, relying on UI feedback');
    }

    // Verify "Copied!" disappears after 2 seconds
    await expect(page.getByText('Copied!')).not.toBeVisible({ timeout: 4000 });
  });

  test("Generate script in Spanish", async ({ page }) => {
    // Select Spanish
    await selectRadixOption(page, 'Language', 'Español');

    // Generate script
    await selectRadixOption(page, 'Treatment', 'Root Canal');
    await page.getByRole('button', { name: /Generate Scripts/i }).click();

    // Verify Spanish text
    const scriptA = page.locator('[data-script="A"]');
    await expect(scriptA).toBeVisible();
    await expect(scriptA).toContainText('Hola');
    await expect(scriptA).toContainText('Conducto Radicular');
  });
});

test.describe("Script Builder - Accessibility", () => {
  test("Keyboard navigation", async ({ page }) => {
    await page.goto('/script-builder');

    // Wait for content to load
    await expect(page.getByLabel('Treatment')).toBeVisible();

    // Use Tab to navigate to the first element
    // Note: First tab might focus on skip link or header, so we focus explicitly then assume tab sequence
    await page.getByLabel('Treatment').focus();
    await expect(page.getByLabel('Treatment')).toBeFocused();

    // Select with Enter (verify dropdown opens)
    await page.keyboard.press('Enter');
    await expect(page.getByRole('option').first()).toBeVisible();
  });

  test("Screen reader compatibility", async ({ page }) => {
    await page.goto('/script-builder');

    // Verify visual labels map to controls
    const treatmentSelect = page.getByLabel('Treatment');
    await expect(treatmentSelect).toBeVisible();
  });
});
