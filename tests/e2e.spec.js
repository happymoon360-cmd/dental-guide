const path = require("node:path");
const { test, expect } = require("@playwright/test");

const getFileUrl = () => {
  const filePath = path.resolve(__dirname, "..", "index.html");
  return `file://${filePath}`;
};

test.describe("Guerilla Dental Guide", () => {
  test("Script generation and favorite save/load", async ({ page }) => {
    await page.goto(getFileUrl());

    await page.getByRole("button", { name: "Generate script" }).click();
    await expect(page.getByText("Plan A", { exact: true })).toBeVisible();
    await expect(page.getByText("Plan B", { exact: true })).toBeVisible();

    await page.getByRole("button", { name: "Save favorite" }).click();
    const presetSelect = page.locator("#scriptPresetSelect");
    await expect(presetSelect.locator("option")).toHaveCount(1, { timeout: 3000 });

    await page.getByRole("button", { name: "Load favorite" }).click();
    await expect(page.getByText("Plan A", { exact: true })).toBeVisible();
  });

  test("Basic mobile layout validation", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(getFileUrl());

    const hasHorizontalScroll = await page.evaluate(() => {
      const doc = document.documentElement;
      return doc.scrollWidth > doc.clientWidth;
    });
    expect(hasHorizontalScroll).toBeFalsy();

    const scriptButton = page.getByRole("button", { name: "Generate script" });
    const schoolButton = page.getByRole("button", { name: "Find nearby dental school" });
    await expect(scriptButton).toBeVisible();
    await expect(schoolButton).toBeVisible();

    const scriptBox = await scriptButton.boundingBox();
    const schoolBox = await schoolButton.boundingBox();
    expect(scriptBox && scriptBox.height >= 44).toBeTruthy();
    expect(schoolBox && schoolBox.height >= 44).toBeTruthy();
  });
});
