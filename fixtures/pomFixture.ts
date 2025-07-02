import { test as baseTest } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CustomerInfoPage } from '../pages/CustomerInfoPage';
import { OverviewPage } from '../pages/OverviewPage';
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage';
import { Logger } from 'winston';

type pages = {
    homePage: HomePage;
    productsPage: ProductsPage;
    cartPage: CartPage;
    customerInfoPage: CustomerInfoPage;
    overviewPage: OverviewPage;
    checkoutCompletePage: CheckoutCompletePage;
}

const testPages = baseTest.extend<pages>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    productsPage: async ({ page }, use) => {
        await use(new ProductsPage(page));
    },
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
    customerInfoPage: async ({ page }, use) => {
        await use(new CustomerInfoPage(page));
    },
    overviewPage: async ({ page }, use) => {
        await use(new OverviewPage(page));
    },
    checkoutCompletePage: async ({ page }, use) => {
        await use(new CheckoutCompletePage(page));
    },

});


export const test = testPages;
export const expect =  testPages.expect;
export const fixtures = {
    // @ts-ignore
    logger: undefined as unknown as Logger
}