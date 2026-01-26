import { test, expect } from '@playwright/test';

test('wait for spinner to disappear before interacting', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/products');

  // The site shows a loading spinner with class "loading"
  const spinner = page.locator('.loading');

  // Wait for spinner to disappear
  await spinner.waitFor({ state: 'hidden' });

  // Now verify that products are visible
  const productGrid = page.locator('.features_items');
  await expect(productGrid).toBeVisible();

  // Additional assertion
  await expect(page).toHaveURL(/products/);

  await page.waitForTimeout(4000);
});
