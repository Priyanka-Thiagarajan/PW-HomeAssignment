import test, { chromium, webkit } from '@playwright/test';

test ('Launch Edge', async () => {

  const edgeBrowser = await chromium.launch({
    channel: 'msedge',   // Launch Microsoft Edge
    headless: false
  });

  const edgeContext = await edgeBrowser.newContext();  // Create new context

  const edgePage = await edgeContext.newPage();  // Create new page

  await edgePage.goto('https://www.redbus.in/'); // Open Red Bus website

  // Get title and URL
  const redBusTitle = await edgePage.title();
  const redBusURL = await edgePage.url();

  // Print title and URL
  console.log('Page Title:', redBusTitle);
  console.log('URL:', redBusURL); 

  await edgePage.waitForTimeout(5000);

});

test ('launch Webkit', async () =>{
  // Launch Webkit browser
  const webkitBrowser = await webkit.launch({
    headless: false
  });

  // Create new context
  const webkitContext = await webkitBrowser.newContext();

  // Create new page
  const webkitPage = await webkitContext.newPage();

  // Open Flipkart website
  await webkitPage.goto('https://www.flipkart.com');

  // Get title and URL
  const flipkartTitle = await webkitPage.title();
  const flipkartURL = await webkitPage.url();

  // Print title and URL
  console.log('Page Title:', flipkartTitle);
  console.log('URL:', flipkartURL);

  await webkitPage.waitForTimeout(5000);

});