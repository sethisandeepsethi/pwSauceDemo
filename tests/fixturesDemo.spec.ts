import { expect, test } from '@playwright/test'

const myFixture = test.extend({
    myObj: async({}, use ) => {
        console.log('This line will appear before the actual test starts');
        await use('hello from fixture');
        console.log('This line will appear after the test execution ends')
    }
})

myFixture.use(
    {
        headless: true,
        launchOptions: {
            channel: 'chrome',
            slowMo: 50
        }
    }
)

myFixture.describe('Custom fixtures demo', () => {

    //Fixtures Object not used so no console messages
    myFixture('Demo without calling myObj', async ({ page }) => {
        await page.goto('https://www.saucedemo.com', { waitUntil: "networkidle", timeout: 10000 });
        await expect(page.locator('div.login_logo')).toContainText('Swag Labs');   
    })
    //No console output

     //Fixtures Object not used but only Passed so no console message - hello from fixture
     myFixture('Demo with passing  myObj', async ({ page, myObj }) => {
        await page.goto('https://www.saucedemo.com', { waitUntil: "networkidle", timeout: 10000 });
        await expect(page.locator('div.login_logo')).toContainText('Swag Labs');
    })
    /* Console output:
    This line will appear before the actual test starts
    This line will appear after the test execution ends 
    */

     //Fixtures Object not used but only Passed so no console message - hello from fixture
     myFixture('Demo with passing myObj and using it', async ({ page, myObj }) => {
        await page.goto('https://www.saucedemo.com', { waitUntil: "networkidle", timeout: 10000 });
        await expect(page.locator('div.login_logo')).toContainText('Swag Labs');
        console.log(myObj);
    })
    /* Console output 
    This line will appear before the actual test starts
    hello from fixture
    This line will appear after the test execution ends
    */

})

