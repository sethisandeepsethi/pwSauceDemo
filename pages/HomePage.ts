import { Page, Locator, expect} from '@playwright/test'
import BasePage from './BasePage'

export class HomePage extends BasePage{
    private readonly userNameTextBox: Locator
    private readonly passwordTextBox: Locator
    private readonly loginButton: Locator
    private readonly shopLabel: Locator

    constructor(page: Page) {
        super(page);
        this.userNameTextBox = page.locator('[data-test="username"]');
        this.passwordTextBox = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.shopLabel = page.locator('div.login_logo');
    }

    async isAtThisPage(){
        await expect(this.shopLabel).toContainText('Swag Labs');
    }

    async fillLoginForm(userName:string, password:string) {
        await this.fillFormField(this.userNameTextBox, userName)
        await this.fillFormField(this.passwordTextBox, password)
        await this.clickElement(this.loginButton);
    }
}