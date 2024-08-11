import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';

test('Login test', async ({ page }) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);

    await homePage.navigateTo('https://saucedemo.com');
    await homePage.fillLoginForm();
    await productsPage.isAtThisPage();
} );