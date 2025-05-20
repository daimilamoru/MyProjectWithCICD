// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  reporter: [
    ['list'],  // salida en consola
    ['html', { outputFolder: 'playwright-report', open: 'never' }]  // reporte HTML
  ],
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 5000,
    baseURL: 'https://www.saucedemo.com/', // Cámbialo si usás otra URL base   
  
  },
});





