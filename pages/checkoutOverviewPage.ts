import { Page, Locator } from '@playwright/test';

export class CheckoutOverviewPage {
    readonly page: Page;
    readonly cartItems: Locator;
    readonly totalLabel: Locator;
    readonly finishButton: Locator;
    readonly cancelButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartItems = page.locator('.cart_item');
        this.totalLabel = page.locator('.summary_total_label');
        this.finishButton = page.locator('[data-test="finish"]');
        this.cancelButton = page.locator('[data-test="cancel"]');
    }

    async isLoaded(): Promise<boolean> {
        await this.finishButton.waitFor({ state: 'visible' });
        return await this.finishButton.isVisible();
    }

    async getTotalText(): Promise<string | null> {
        return await this.totalLabel.textContent() || '';
    }

    async finishCheckout(): Promise<void> {
        await this.finishButton.click();
    }
}
