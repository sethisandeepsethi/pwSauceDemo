import { expect, test } from '@playwright/test'
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';

test('should add items to cart', async ({ page }) => {
    const homePage: HomePage = new HomePage(page);
    const productsPage: ProductsPage = new ProductsPage(page);

    await homePage.navigateTo('https://www.saucedemo.com');
    await homePage.fillLoginForm('standard_user', 'secret_sauce');
    await productsPage.isAtThisPage();

    await productsPage.addBikeLightToCart();
    await productsPage.addFleeceJacketToCart();
    expect(await productsPage.getCartItemCount()).toEqual('2');

})