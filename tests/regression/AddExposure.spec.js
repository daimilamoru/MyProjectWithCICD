import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import dotenv from 'dotenv';

dotenv.config();

test('Add Exposure', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const user = process.env.user;
  const pass = process.env.pass;
  
  await loginPage.goto();
  await loginPage.login(user, pass);

  const edad=0;
  await expect(edad).toBe(0);            

 
});