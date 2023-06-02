import { test, expect } from "@playwright/test";

test("/blog page", async ({ page }) => {
  await page.goto("http://localhost:3000/blog");
  await expect(page).toHaveTitle(/BimaAdi/);

  // Test searching
  // When
  await page.locator("#blogInput").type("in");
  await page.locator("#blogSearch").click();

  // Expect
  const blogList = page.locator('#blogList');
  await expect(blogList).toContainText("Scaling Websocket in Go");
  await expect(blogList).toContainText("Programing in Canvas using reactjs");

  // Test Redirect
  // When
  await page.getByText("Scaling Websocket in Go").click();
  
  // Expect
  await page.waitForURL("http://localhost:3000/blog/Scaling-Websocket-in-Go", {timeout: 6000})
  await expect(page).toHaveTitle(/BimaAdi/);
});
