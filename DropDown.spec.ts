import test, {chromium} from '@playwright/test';

test ('Dropdown SelectOptions' , async({page})=>{
    
    await page.goto("https://www.telerik.com/contact");

    await page.waitForTimeout(3000);
    await page.selectOption ("#Dropdown-1", {value :'Product questions'});
    
    await page.waitForTimeout(2000);
    await page.selectOption ("#Dropdown-2", {index : 2});

    await page.waitForTimeout(2000);

    await page.selectOption ("#Country-1", {label :'Algeria'});

    await page.waitForTimeout(2000); 
    
})