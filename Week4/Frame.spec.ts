import test from '@playwright/test'


test("Handle Frame with Frame Locator",async({page})=>{


await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")

page.on('dialog',alertType=>{
    
        const type=alertType.type()
        alertType.accept()
})

await page.frameLocator("#iframeResult").locator("//button[text()='Try it']").click();


})