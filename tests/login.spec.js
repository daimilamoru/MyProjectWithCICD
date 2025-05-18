// tests/login.spec.js

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import dotenv from 'dotenv';

dotenv.config();

test('Login con POM y variables de entorno', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const user = process.env.user;
  const pass = process.env.pass;

  console.log('USER:', user);
  console.log('PASS:', pass);

  await loginPage.goto();
  await loginPage.login(user, pass);

  // Puedes agregar validaciones aquí si lo deseas
  // await expect(page).toHaveURL('/dashboard');
});

/* import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config(); // Carga las variables del .env

test('Login con variables de entorno', async ({ page }) => {
  const user = process.env.user;
  const pass = process.env.pass;

  console.log('USER:', user); // para depurar
  console.log('PASS:', pass); // para depurar

  await page.goto('/');
  await page.getByRole('textbox', { name: 'Email' }).fill(user);
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('textbox', { name: 'Password New Password Confirm' }).fill(pass);
  await page.getByRole('button', { name: 'Sign in' }).click();
 
});
 */

