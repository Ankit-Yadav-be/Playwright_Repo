const { test, expect } = require('@playwright/test');

test('Google search test', async ({ page }) => {
  await page.goto('https://www.google.com');

  const title = await page.title();
  await expect(title).toContain('Google');
});
