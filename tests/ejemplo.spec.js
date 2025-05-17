import { test, expect } from '@playwright/test';

test('Probando CI/CD', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
