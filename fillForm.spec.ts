import { test, expect } from '@playwright/test';
//place this beforeEach() outside of test
test.beforeEach(async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

test('login flow', async ({ page }) => {


//url navigation
 // await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//fill login form
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  console.log("title for succesful login ::",await page.title());
//assertions
await expect(page).toHaveTitle(/OrangeHRM/);
await expect(page).toHaveURL(/dashboard/);
//await page.waitForSelector('#dashboard', { state: 'visible' }); prefee this
await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

  
});
