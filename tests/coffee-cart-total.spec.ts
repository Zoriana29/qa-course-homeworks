import { test, expect } from '@playwright/test';

test('should display correct total after adding Espresso and Cappuccino', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Cappuccino"]').click();
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $29.00');
});