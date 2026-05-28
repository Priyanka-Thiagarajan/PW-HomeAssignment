import { test } from '@playwright/test';

test('CreateLead', async ({ page }) => {
  
  await page.goto('https://leaftaps.com/opentaps/control/main'); // Launch URL

  await page.locator('#username').fill('democsr');  // Enter username
  
  await page.locator('#password').fill('crmsfa');  // Enter password
  
  await page.locator('.decorativeSubmit').click(); // Click Login button

  await page.waitForTimeout(10000);

  console.log(await page.title());
  
  await page.locator('text=CRM/SFA').click(); // Click CRM/SFA text
  
  await page.locator(`text='Leads'`).click();

  await page.waitForTimeout(2000);

  await page.locator('text=Create Lead').first().click();
 
  await page.locator('id=createLeadForm_companyName').fill('TestLeaf');
  
  await page.locator('id=createLeadForm_firstName').fill('Priya');

  await page.locator('id=createLeadForm_lastName').fill('Suriya');

  await page.locator('id=createLeadForm_personalTitle').fill('Ms');

  await page.locator('id=createLeadForm_generalProfTitle').fill('Test Lead');

  await page.locator('id=createLeadForm_annualRevenue').fill('1000000');

  await page.locator('id=createLeadForm_departmentName').fill('QA');

  await page.locator('id=createLeadForm_primaryPhoneNumber').fill('9677150333');

  await page.waitForTimeout(2000);

  await page.locator('.smallSubmit').click();

  await page.waitForTimeout(2000);

  console.log(await page.title());

});