import { test } from '@playwright/test';

test('Login with Xpath', async ({ page }) => {
  
  await page.goto('https://login.salesforce.com/?locale=in'); 
  
  await page.locator('//input[@id="username"]').fill('dilipkumar.rajendran@testleaf.com');

  await page.locator('//input[contains(@id,"pass")]').fill('TestLeaf@2025');

  await page.locator('//input[@id="Login"]').click();

  await page.waitForTimeout(5000);

  console.log(await page.title());

});