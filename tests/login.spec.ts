import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';

//[1, 2, 3, 4, 5].forEach( e => {
[1].forEach( e => {    
    test.describe(`Login scenario Iteration #${e}`, () => {
        test('should login with valid credentials', async ({ page }) => {
            const homePage: HomePage = new HomePage(page);
            const productsPage: ProductsPage = new ProductsPage(page);

            await homePage.navigateTo('https://www.saucedemo.com');
            await homePage.fillLoginForm('standard_user', 'secret_sauce');
            await productsPage.isAtThisPage();
        });

        test('should show error message for invalid credentials', async ({ page }) => {
            const homePage: HomePage = new HomePage(page);

            await homePage.navigateTo('https://www.saucedemo.com');
            await homePage.fillLoginForm('stanssdsdsddard_user', 'secredsdsdsdt_sauce');
            expect(await homePage.getLoginErrorMsg()).toContain('Epic sadface: Username and password do not match any user in this service')
        })

        test('should show error message for locked out users', async({page}) => {
            const homePage: HomePage = new HomePage(page);

            await homePage.navigateTo('https://www.saucedemo.com');
            await homePage.fillLoginForm('locked_out_user', 'secret_sauce');
            expect(await homePage.getLoginErrorMsg()).toContain('Epic sadface: Sorry, this user has been locked out')
        })
    })
})
