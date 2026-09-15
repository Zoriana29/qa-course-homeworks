import { test, expect } from '@playwright/test';

test('should show one item in the cart after adding Espresso', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-test="Espresso"]').click();
  await expect(page.locator('#app')).toContainText('cart (1)');
});
