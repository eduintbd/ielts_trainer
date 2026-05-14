import { test, expect } from '@playwright/test';

test.describe('Courses Overview', () => {
  test('courses page is accessible and shows all three exams', async ({ page }) => {
    await page.goto('/courses');

    await expect(page.getByRole('heading', { name: /structured prep/i })).toBeVisible();
    await expect(page.getByTestId('exam-card-ielts')).toBeVisible();
    await expect(page.getByTestId('exam-card-toefl')).toBeVisible();
    await expect(page.getByTestId('exam-card-pte')).toBeVisible();
  });

  test('pricing table shows correct BDT prices', async ({ page }) => {
    await page.goto('/courses');

    // Foundation: ৳2,999, Intermediate: ৳4,999, Advanced: ৳7,999
    const content = await page.content();
    expect(content).toContain('2,999');
    expect(content).toContain('4,999');
    expect(content).toContain('7,999');
  });

  test('nav link to Courses is visible from home', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('navigation').getByText('Courses').click();
    await expect(page).toHaveURL('/courses');
  });

  test('clicking exam card navigates to exam course page', async ({ page }) => {
    await page.goto('/courses');
    await page.getByTestId('exam-card-ielts').getByRole('link').click();
    await expect(page).toHaveURL('/courses/ielts');
  });

  test('placement test CTA is visible on courses page', async ({ page }) => {
    await page.goto('/courses');
    await expect(page.getByRole('link', { name: /placement test/i })).toBeVisible();
  });
});

test.describe('Individual Course Page (IELTS)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/courses/ielts');
  });

  test('shows course title and description', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /IELTS Preparation/i })).toBeVisible();
  });

  test('shows all three pricing tiers', async ({ page }) => {
    await expect(page.getByTestId('tier-foundation')).toBeVisible();
    await expect(page.getByTestId('tier-intermediate')).toBeVisible();
    await expect(page.getByTestId('tier-advanced')).toBeVisible();
  });

  test('free preview modules are marked as FREE PREVIEW', async ({ page }) => {
    const freeModules = page.getByTestId('free-module');
    await expect(freeModules.first()).toBeVisible();
    await expect(freeModules.first().getByText('FREE PREVIEW')).toBeVisible();
  });

  test('locked modules show a lock icon and Enroll button', async ({ page }) => {
    const lockedModule = page.getByTestId('locked-module').first();
    await expect(lockedModule).toBeVisible();
    await expect(lockedModule.getByRole('link', { name: /enroll/i })).toBeVisible();
  });

  test('free preview modules contain external resource links', async ({ page }) => {
    const freeModules = page.getByTestId('free-module');
    const first = freeModules.first();
    await expect(first.getByRole('link')).toBeVisible();
  });

  test('all enroll buttons link to /sign-up', async ({ page }) => {
    const enrollLinks = page.getByRole('link', { name: /enroll/i });
    const count = await enrollLinks.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const href = await enrollLinks.nth(i).getAttribute('href');
      expect(href).toBe('/sign-up');
    }
  });

  test('breadcrumb links back to /courses', async ({ page }) => {
    await page.getByRole('link', { name: 'Courses' }).first().click();
    await expect(page).toHaveURL('/courses');
  });

  test('has a placement test CTA at the bottom', async ({ page }) => {
    await expect(page.getByText(/Not sure which tier/i)).toBeVisible();
    await expect(page.getByRole('link', { name: /placement test/i })).toBeVisible();
  });
});

test.describe('Individual Course Page (TOEFL)', () => {
  test('TOEFL course page renders correctly', async ({ page }) => {
    await page.goto('/courses/toefl');
    await expect(page.getByRole('heading', { name: /TOEFL iBT Preparation/i })).toBeVisible();
    await expect(page.getByTestId('tier-foundation')).toBeVisible();
  });
});

test.describe('Individual Course Page (PTE)', () => {
  test('PTE course page renders correctly', async ({ page }) => {
    await page.goto('/courses/pte');
    await expect(page.getByRole('heading', { name: /PTE Academic Preparation/i })).toBeVisible();
    await expect(page.getByTestId('tier-foundation')).toBeVisible();
  });
});

test.describe('404 handling', () => {
  test('unknown exam slug returns 404', async ({ page }) => {
    const res = await page.goto('/courses/gmat');
    // Next.js notFound() returns 404
    expect(res?.status()).toBe(404);
  });
});
