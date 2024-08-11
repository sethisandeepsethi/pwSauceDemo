import { expect, Locator, Page } from '@playwright/test';

export class ProductsPage {
    private readonly page:Page;
    private readonly lbl_PageTitle: Locator;

    constructor (page: Page){
        this.page = page;
        this.lbl_PageTitle = page.locator('[data-test="title"]');
    }

    async isAtThisPage() {
        await expect(this.lbl_PageTitle).toContainText('Products');
    }
}