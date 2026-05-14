import { test, expect } from '@playwright/test';

test.describe('Language Toggle', () => {
  test.beforeEach(async ({ page }) => {
    // Reset language preference before each test
    await page.goto('/');
    await page.evaluate(() => localStorage.removeItem('ielts_lang'));
    await page.reload();
  });

  test('toggle button is visible in the header', async ({ page }) => {
    await page.goto('/');
    const toggle = page.getByTestId('language-toggle');
    await expect(toggle).toBeVisible();
  });

  test('default language is English — header shows English labels', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('navigation').getByText('English Mastery')).toBeVisible();
    await expect(page.getByRole('navigation').getByText('Courses')).toBeVisible();
  });

  test('clicking toggle switches to Bangla', async ({ page }) => {
    await page.goto('/');
    const toggle = page.getByTestId('language-toggle');

    // Default state shows বাংলা (the label to switch TO)
    await expect(toggle).toContainText('বাংলা');

    await toggle.click();

    // After switching, nav shows Bangla labels
    await expect(page.getByRole('navigation').getByText('ইংরেজি দক্ষতা')).toBeVisible();
    await expect(page.getByRole('navigation').getByText('কোর্সসমূহ')).toBeVisible();

    // Toggle button now shows "English" (to switch back)
    await expect(toggle).toContainText('English');
  });

  test('clicking toggle twice returns to English', async ({ page }) => {
    await page.goto('/');
    const toggle = page.getByTestId('language-toggle');

    await toggle.click(); // → Bangla
    await toggle.click(); // → English

    await expect(page.getByRole('navigation').getByText('English Mastery')).toBeVisible();
    await expect(toggle).toContainText('বাংলা');
  });

  test('language preference persists on page reload', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('language-toggle').click(); // switch to Bangla

    await page.reload();

    await expect(page.getByRole('navigation').getByText('ইংরেজি দক্ষতা')).toBeVisible();
  });

  test('language preference persists across navigation', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('language-toggle').click(); // switch to Bangla

    await page.goto('/courses');

    // Nav should still be in Bangla
    await expect(page.getByTestId('language-toggle')).toContainText('English');
    await expect(page.getByRole('navigation').getByText('কোর্সসমূহ')).toBeVisible();
  });

  test('home page hero text switches to Bangla', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('language-toggle').click();

    await expect(page.getByRole('heading', { name: /আগে ইংরেজি আয়ত্ত করুন/i })).toBeVisible();
  });

  test('footer text switches to Bangla', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('language-toggle').click();

    await expect(page.getByText('ইংরেজি শিখুন')).toBeVisible();
  });
});
