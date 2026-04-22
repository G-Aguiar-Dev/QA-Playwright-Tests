import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/loginPage';
import { users } from '../fixtures/users.json';

test.describe('Login Tests', () => {
    test('Standard user can login successfully', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goToLoginPage();
        await loginPage.login(users.standard.username, users.standard.password);
        await expect(page).toHaveURL('/inventory.html');
    });

    test('Locked out user cannot login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goToLoginPage();
        await loginPage.login(users.lockedOut.username, users.lockedOut.password);
        await expect(loginPage.alert_error).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    });
});