import { test } from '@playwright/test';

test('Login and navigate', async ({ page }) => {

  // Launch URL
  await page.goto('https://leaftaps.com/opentaps/control/main');

  // Enter username
  await page.locator('#username').fill('democsr');

  // Enter password
  await page.locator('#password').fill('crmsfa');

  // Click Login button
  await page.locator('.decorativeSubmit').click();

  await page.waitForTimeout(20000);

  console.log(await page.title());
  
  await page.locator('text=CRM/SFA').click(); // Click CRM/SFA text
  await page.waitForTimeout(2000);
  console.log(await page.title());


});