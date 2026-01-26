import { test, expect } from '@playwright/test';

test('verify Google title', async ({ page }) => {
  await page.goto('https://google.com');
  console.log("Title",await page.title());
  await expect(page).toHaveTitle(/Google/);
});
