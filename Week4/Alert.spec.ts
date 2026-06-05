import test from '@playwright/test';

test('auto dismiss for prompt alert', async({page})=>{
    
await page.goto("https://www.leafground.com/alert.xhtml");
await page.locator("(//span[text()='Show'])[5]").click();

// page.on('dialog',alertType=>{
//     const type=alertType.type()
//     console.log(type)


//     const msg=alertType.message()
//     console.log(msg)


//     //if(msg.contain("Did you"){alertType.accept()}else{alertType.dismiss()})


//     if(type==="confirm"){
//     alertType.dismiss()
//     }else if(type==="prompt"){
//     alertType.accept("Playwright")
})