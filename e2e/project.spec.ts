import { test, expect } from "@playwright/test";

test("/project page", async ({ page }) => {
  await page.goto("http://localhost:3000/project");
  await expect(page).toHaveTitle(/BimaAdi/);

  const onProgress = page.locator("#onProgress");
  await expect(onProgress).toContainText("On Progress");
});
