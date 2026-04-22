import { Page, Locator } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly inventoryContainer: Locator;
    readonly productItems: Locator;
    readonly openMenu: Locator;
    readonly shoppingCartLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inventoryContainer = page.locator('[data-test="inventory-container"]');
        this.productItems = page.locator('[data-test="inventory-item-description"]');
        this.openMenu = page.getByRole('button', { name: 'Open Menu' });
        this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
    }

    async isLoaded(): Promise<boolean> {
        await this.inventoryContainer.waitFor({ state: 'visible' });
        return await this.inventoryContainer.isVisible();
    }

    async addProductToCart(productName: string): Promise<void> {
        const product = this.productItems.filter({ hasText: productName });
        await product.locator('button').click();
    }

    async getCartItemCount(): Promise<number> {
        if (await this.shoppingCartLink.isVisible()) {
            const countText = await this.shoppingCartLink.textContent();
            return parseInt(countText || '0', 10);
        }
        return 0;    
    }

    async goToCart(): Promise<void> {
        await this.shoppingCartLink.click();
    }
}
