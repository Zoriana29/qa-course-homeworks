import { test, expect } from '@playwright/test';

test('should display Espresso in the cart', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-test="Espresso"]').click();
  await page.getByRole('link', { name: 'Cart page' }).click();
  await expect(page.locator('#app')).toContainText('Espresso');
});