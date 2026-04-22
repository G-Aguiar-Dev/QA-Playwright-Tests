import { Page, Locator } from '@playwright/test';

export class CheckoutCompletePage {
    readonly page: Page
    readonly completeHeader: Locator;
    readonly completeText: Locator;
    readonly backHomeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.completeHeader = page.locator('[data-test="complete-header"]');
        this.completeText = page.locator('[data-test="complete-text"]');
        this.backHomeButton = page.locator('[data-test="back-to-products"]');
    }

    async isLoaded(): Promise<boolean> {
        await this.completeHeader.waitFor({ state: 'visible' });
        return await this.completeHeader.isVisible();
    }

    async getCompleteHeaderText(): Promise<string> {
        return await this.completeHeader.textContent() || '';
    }

    async clickBackHome(): Promise<void> {
        await this.backHomeButton.click();
    }
};
