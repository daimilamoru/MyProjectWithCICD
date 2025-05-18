// tests/login.spec.js

import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import dotenv from 'dotenv';

dotenv.config();

test('Login con POM y variables de entorno', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const user = process.env.USER;
  const pass = process.env.PASS;

  console.log('USER:', user);
  console.log('PASS:', pass);

  await loginPage.goto();
  await loginPage.login(user, pass);

 
});

