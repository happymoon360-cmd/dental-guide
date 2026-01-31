const { test, expect } = require("@playwright/test");

test.describe("Emergency Triage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/emergency-triage');
  });

  test("Guide for all symptoms", async ({ page }) => {
    const symptoms = ['Severe Pain', 'Face Swollen', "Bleeding Won't Stop", 'Broken Tooth', 'Gum Swollen', 'Pain + Fever'];

    for (const symptom of symptoms) {
      await page.goto('/emergency-triage');
      await page.getByLabel("What's wrong?").selectOption(symptom);
      await page.getByRole('button', { name: /Check What To Do/i }).click();

      // Check guide
      await expect(page.getByText('What To Do')).toBeVisible();
      await expect(page.getByText(/immediately|emergency|call/i)).toBeVisible();
    }
  });

  test("Urgent symptoms require quick response guide", async ({ page }) => {
    // Urgent symptom
    await page.getByLabel("What's wrong?").selectOption('Severe Pain');
    await page.getByRole('button', { name: /Check What To Do/i }).click();

    // Verify quick response guide
    const guide = await page.getByText('What To Do').locator('..').locator('p').nth(1).textContent();
    expect(guide.toLowerCase()).toMatch(/call|immediate|emergency|now/i);
  });

  test("Non-Urgent symptom shows general response guide", async ({ page }) => {
    // Less Urgent symptom
    await page.getByLabel("What's wrong?").selectOption('Broken Tooth');
    await page.getByRole('button', { name: /Check What To Do/i }).click();

    // Verify general response guide
    const guide = await page.getByText('What To Do').locator('..').locator('p').nth(1).textContent();
    expect(guide.toLowerCase()).not.toMatch(/immediate|emergency|now/i);
  });
});

test.describe("Emergency Triage - Accessibility", () => {
  test("Emergency button color contrast", async ({ page }) => {
    await page.goto('/emergency-triage');

    // Check button color (red)
    const button = page.getByRole('button', { name: /Check What To Do/i });
    const bgColor = await button.evaluate(el => window.getComputedStyle(el).backgroundColor);

    // Verify it's red color family
    expect(bgColor).toMatch(/rgb\(2\d{2}, \d{2}, \d{2}\)/);
    const rgbMatch = bgColor.match(/rgb\((\d+), (\d+), (\d+)\)/);
    const r = parseInt(rgbMatch[1]);
    const g = parseInt(rgbMatch[2]);
    const b = parseInt(rgbMatch[3]);

    // Verify red is the primary color
    expect(r).toBeGreaterThan(g);
    expect(r).toBeGreaterThan(b);
  });
});
