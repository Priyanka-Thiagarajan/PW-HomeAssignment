import test from '@playwright/test';

test('Page Fixture', async ({ page }) => {

     // Navigate to a website
     
    await page.goto('https://www.facebook.com'); 
    
    const title = await page.title(); // Get the title of the page
    
    console.log('Title of the page is: ' + title);
    
});