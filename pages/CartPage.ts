import { expect, Locator, Page } from '@playwright/test';
import BasePage from './BasePage';

export class CartPage extends BasePage{
    private readonly lbl_PageTitle: Locator;
    private readonly btn_RemoveFromCart_BikeLight: Locator;
    private readonly btn_RemoveFromCart_FleeceJacket: Locator;
    private readonly btn_Checkout: Locator;

    constructor (page: Page){
        super(page);
        this.lbl_PageTitle = page.locator('[data-test="title"]');
        this.btn_RemoveFromCart_BikeLight = page.locator('[data-test="remove-sauce-labs-bike-light"]');
        this.btn_RemoveFromCart_FleeceJacket = page.locator('[data-test="remove-sauce-labs-fleece-jacket"]');
        this.btn_Checkout = page.locator('[data-test="checkout"]');
    }

    async isAtThisPage() {
        await expect(this.lbl_PageTitle).toContainText('Your Cart');
    }

    async isBikeLightAddedToCart(){
        await expect(this.btn_RemoveFromCart_BikeLight).toBeVisible()
    }
    async isFleeceJacketAddedToCart(){
        await expect(this.btn_RemoveFromCart_FleeceJacket).toBeVisible()
    }

    async doCheckout() {
        await this.waitForElementVisible(this.btn_Checkout)
        await this.clickElement(this.btn_Checkout);
    }

}