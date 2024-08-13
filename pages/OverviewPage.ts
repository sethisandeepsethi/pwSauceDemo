import { expect, Locator, Page } from '@playwright/test';
import BasePage from './BasePage';

export class OverviewPage extends BasePage{
    private readonly lbl_PageTitle: Locator;
    private readonly btn_Finish: Locator;

    constructor (page: Page){
        super(page);
        this.lbl_PageTitle = page.locator('[data-test="title"]');
        this.btn_Finish = page.locator('[data-test="finish"]');
    }

    async isAtThisPage() {
        await expect(this.lbl_PageTitle).toContainText('Checkout: Overview');
    }

    async finishCheckout(){
        await this.clickElement(this.btn_Finish);
    }


}