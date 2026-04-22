// import Playwright test and expect
import { test, expect } from '@playwright/test';

// import POM classes
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';
import { CartPage } from '../pages/cartPage';
import { CheckoutPage } from '../pages/checkoutPage';
import { CheckoutOverviewPage } from '../pages/checkoutOverviewPage';
import { CheckoutCompletePage } from '../pages/checkoutCompletePage';

// import test data
import { users } from '../fixtures/users.json';

test.describe('Purchase Flow', () => {
  test('Default user can complete a purchase', async ({ page }) => {

    // Login
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.login(users.standard.username, users.standard.password);
    await expect(page).toHaveURL('/inventory.html');

    // Inventory - Add item to cart
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    expect(await inventoryPage.getCartItemCount()).toBe(1);
    await inventoryPage.goToCart();

    // Cart - Check product and proceed to checkout
    const cartPage = new CartPage(page);
    await cartPage.isLoaded();
    expect(await cartPage.getProductNames()).toContain('Sauce Labs Backpack');
    await cartPage.proceedToCheckout();

    // Checkout - Fill in details and continue
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.isLoaded();
    await checkoutPage.fillCheckoutInformation('Guilherme', 'Aguiar', '12345');
    await checkoutPage.submitForm();

    // Checkout Overview - Verify details and finish
    const checkoutOverviewPage = new CheckoutOverviewPage(page);
    await checkoutOverviewPage.isLoaded();
    expect(await checkoutOverviewPage.getTotalText()).toContain('Total:');
    await checkoutOverviewPage.finishCheckout();

    // Verify order completion
    const checkoutCompletePage = new CheckoutCompletePage(page);
    await checkoutCompletePage.isLoaded();
    expect(await checkoutCompletePage.getCompleteHeaderText()).toBe('Thank you for your order!');
    await checkoutCompletePage.clickBackHome();

    // Verify we are back on inventory page
    await expect(page).toHaveURL('/inventory.html');
  });
});
