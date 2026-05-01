const { test, expect } = require('@playwright/test');

test('Login Test (Chakra UI Form)', async ({ page }) => {

  // Step 1: Open your app
  await page.goto('https://echo-board-mu.vercel.app/login');

  // Step 2: Fill email
  await page.fill('input[name="email"]', 'demo123@gmail.com');

  // Step 3: Fill password
  await page.fill('input[type="password"]', 'demo');

  // Step 4: Click login
  await page.click('button[type="submit"]');

  // Step 5: Assertion (change according to your app)
  await expect(page).toHaveURL(/dash/);

});