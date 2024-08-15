import { expect, test } from '../fixtures/pomFixture'

test('should complete checkout', async ({
    homePage,
    productsPage,
    cartPage,
    customerInfoPage,
    overviewPage,
    checkoutCompletePage
}) => {

    await homePage.navigateTo('https://www.saucedemo.com');
    await homePage.fillLoginForm('standard_user', 'secret_sauce');
    await productsPage.isAtThisPage();

    await productsPage.addBikeLightToCart();
    await productsPage.addFleeceJacketToCart();
    expect(await productsPage.getCartItemCount()).toEqual('2');

    await productsPage.gotoCartPage();
    await cartPage.isAtThisPage();
    await cartPage.doCheckout();

    await customerInfoPage.isAtThisPage();
    await customerInfoPage.enterCustomerInfo('John', 'Smith', 'QWER1234');
    await customerInfoPage.doContinueToOverviewPage();

    await overviewPage.isAtThisPage();
    await overviewPage.finishCheckout();

    await checkoutCompletePage.validateOrderSuccessMessage()

})