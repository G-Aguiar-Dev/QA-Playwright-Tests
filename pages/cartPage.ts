import { Page, Locator } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly cartItems: Locator;
    readonly checkoutButton: Locator;
    readonly continueShoppingButton: Locator;
    readonly removeButtons: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartItems = page.locator('.cart_item');
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
        this.removeButtons = page.locator('[data-test^="remove-"]');
    }

    async isLoaded(): Promise<boolean> {
        await this.checkoutButton.waitFor({ state: 'visible' });
        return await this.checkoutButton.isVisible();
    }

    async removeProductByName(productName: string): Promise<void> {
        const item = this.cartItems.filter({ hasText: productName });
        await item.locator('button').click();
    }

    async getProductNames(): Promise<string[]> {
        return await this.cartItems.locator('.inventory_item_name').allTextContents();
    }

    async proceedToCheckout(): Promise<void> {
        await this.checkoutButton.click();
    }
}
