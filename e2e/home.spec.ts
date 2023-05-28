import { test, expect } from '@playwright/test';

test('home page', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/BimaAdi/);

  const myName = page.locator('#MyName');
  await expect(myName).toContainText("Muhammad Bima Adi Prabowo");

  const aboutMe = page.locator('#aboutMe');
  await expect(aboutMe).toContainText("About Me");

  const workingExperience = page.locator('#workingExperience');
  await expect(workingExperience).toContainText("Working Experience");

  const techStack = page.locator('#techStack');
  await expect(techStack).toContainText("Tech Stack");

  const contactMe = page.locator('#contactMe');
  await expect(contactMe).toContainText("Contact Me");
});
