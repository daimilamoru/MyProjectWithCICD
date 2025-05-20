// tests/login.spec.js

import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import dotenv from 'dotenv';

dotenv.config();

test('Login con POM ', async ({ page }, testInfo) => {
  const loginPage = new LoginPage(page);
  const username = process.env.username;
  const password = process.env.password;


  await loginPage.goto();
  await loginPage.login(username, password);

 
});

