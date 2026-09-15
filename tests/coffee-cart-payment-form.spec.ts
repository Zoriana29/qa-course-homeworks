import { test, expect } from '@playwright/test';

test('should preserve entered name and email in the payment form', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.getByRole('textbox', { name: 'Name' }).fill('Zoriana');
  await page.getByRole('textbox', { name: 'Email' }).fill('zoriana@gmail.com');
  await expect(page.getByRole('textbox', { name: 'Name' })).toHaveValue('Zoriana');
  await expect(page.getByRole('textbox', { name: 'Email' })).toHaveValue('zoriana@gmail.com');
});