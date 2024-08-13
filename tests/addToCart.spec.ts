import { expect, test } from '@playwright/test'
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CustomerInfoPage } from '../pages/CustomerInfoPage';
import { OverviewPage } from '../pages/OverviewPage';
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage';

test('should complete checkout', async ({ page }) => {
    const homePage: HomePage = new HomePage(page);
    const productsPage: ProductsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const custInfoPage = new CustomerInfoPage(page);
    const overviewPage = new OverviewPage(page);
    const checkoutCompletePage = new CheckoutCompletePage(page);

    await homePage.navigateTo('https://www.saucedemo.com');
    await homePage.fillLoginForm('standard_user', 'secret_sauce');
    await productsPage.isAtThisPage();

    await productsPage.addBikeLightToCart();
    await productsPage.addFleeceJacketToCart();
    expect(await productsPage.getCartItemCount()).toEqual('2');

    await productsPage.gotoCartPage();
    await cartPage.isAtThisPage();
    await cartPage.doCheckout();

    await custInfoPage.isAtThisPage();
    await custInfoPage.enterCustomerInfo('John', 'Smith', 'QWER1234');
    await custInfoPage.doContinueToOverviewPage();

    await overviewPage.isAtThisPage();
    await overviewPage.finishCheckout();

    await checkoutCompletePage.validateOrderSuccessMessage()

})