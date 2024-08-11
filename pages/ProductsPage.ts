import { expect, Locator, Page } from '@playwright/test';
import BasePage from './BasePage';

export class ProductsPage extends BasePage{
    private readonly lbl_PageTitle: Locator;

    constructor (page: Page){
        super(page);
        this.lbl_PageTitle = page.locator('[data-test="title"]');
    }

    async isAtThisPage() {
        await expect(this.lbl_PageTitle).toContainText('Products');
    }
}