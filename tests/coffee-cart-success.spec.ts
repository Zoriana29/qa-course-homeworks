import { test, expect } from '@playwright/test';

test('should display a success message after completing a purchase', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.getByRole('textbox', { name: 'Name' }).fill('Zoriana');
  await page.getByRole('textbox', { name: 'Email' }).fill('zoriana@gmail.com');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('#app')).toContainText('Thanks for your purchase. Please check your email for payment.');
});