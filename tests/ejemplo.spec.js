import { test, expect } from '@playwright/test';

test('Página de ejemplo tiene título', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
