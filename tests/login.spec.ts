import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';

test('Login test', async ({ page }) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);

    await homePage.navigateTo('https://www.saucedemo.com');
    await homePage.fillLoginForm('standard_user','secret_sauce');
    await productsPage.isAtThisPage();
} );