import { Locator, Page } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly username_input: Locator;
    readonly password_input: Locator;
    readonly login_button: Locator;
    readonly alert_error: Locator;

    constructor(page: Page) {
      this.page = page;
      this.username_input = page.locator('[data-test="username"]');
      this.password_input = page.locator('[data-test="password"]');
      this.login_button = page.locator('[data-test="login-button"]');
      this.alert_error = page.locator('[data-test="error"]');
    }

    async goToLoginPage() {
      await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username: string, password: string) {
      await this.username_input.click();
      await this.username_input.fill(username);
      await this.password_input.click();
      await this.password_input.fill(password);
      await this.login_button.click();
    }

    async getAlertError() {
      return await this.alert_error.textContent();
    }
}
