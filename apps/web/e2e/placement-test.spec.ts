import { test, expect } from '@playwright/test';

test.describe('Placement Test', () => {
  test('intro page is accessible and shows key information', async ({ page }) => {
    await page.goto('/placement-test');

    await expect(page.getByRole('heading', { name: /find your english level/i })).toBeVisible();
    await expect(page.getByText('15 questions')).toBeVisible();
    await expect(page.getByTestId('start-quiz')).toBeVisible();
  });

  test('navigating to placement test from home page works', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /placement test/i }).first().click();
    await expect(page).toHaveURL('/placement-test');
    await expect(page.getByTestId('start-quiz')).toBeVisible();
  });

  test('starts quiz on clicking Start button', async ({ page }) => {
    await page.goto('/placement-test');
    await page.getByTestId('start-quiz').click();

    await expect(page.getByText('Question 1 of 15')).toBeVisible();
    await expect(page.getByTestId('question-text')).toBeVisible();
  });

  test('quiz shows 4 answer options per question', async ({ page }) => {
    await page.goto('/placement-test');
    await page.getByTestId('start-quiz').click();

    const options = await page.getByTestId(/^option-\d$/).all();
    expect(options).toHaveLength(4);
  });

  test('selecting an answer enables the Next button', async ({ page }) => {
    await page.goto('/placement-test');
    await page.getByTestId('start-quiz').click();

    const next = page.getByTestId('next-button');
    await expect(next).toBeDisabled();

    await page.getByTestId('option-0').click();
    await expect(next).toBeEnabled();
  });

  test('progress bar advances after each answer', async ({ page }) => {
    await page.goto('/placement-test');
    await page.getByTestId('start-quiz').click();

    await expect(page.getByText('Question 1 of 15')).toBeVisible();

    await page.getByTestId('option-0').click();
    await page.getByTestId('next-button').click();

    await expect(page.getByText('Question 2 of 15')).toBeVisible();
  });

  test('completes quiz and redirects to results page', async ({ page }) => {
    await page.goto('/placement-test');
    await page.getByTestId('start-quiz').click();

    for (let i = 0; i < 15; i++) {
      await page.getByTestId('option-0').click();
      await page.getByTestId('next-button').click();
    }

    await expect(page).toHaveURL('/placement-test/results');
    await expect(page.getByTestId('score-display')).toBeVisible();
    await expect(page.getByTestId('level-badge')).toBeVisible();
  });

  test('results page shows level badge and course recommendations', async ({ page }) => {
    await page.goto('/placement-test');
    await page.getByTestId('start-quiz').click();

    for (let i = 0; i < 15; i++) {
      await page.getByTestId('option-0').click();
      await page.getByTestId('next-button').click();
    }

    await expect(page.getByTestId('level-badge')).toContainText('A1-A2');
    await expect(page.getByRole('link', { name: /View course/i })).toHaveCount(3);
  });

  test('results page has retake button that returns to intro', async ({ page }) => {
    // Seed a result directly in localStorage
    await page.goto('/placement-test/results');
    await page.evaluate(() => {
      localStorage.setItem(
        'ielts_placement_result',
        JSON.stringify({
          score: 12,
          total: 15,
          level: 'C1-C2',
          label: 'Advanced',
          description: 'Your English is strong.',
          recommendedCourses: [
            { exam: 'IELTS', tier: 'Advanced', href: '/courses/ielts', reason: 'Test' },
            { exam: 'TOEFL', tier: 'Advanced', href: '/courses/toefl', reason: 'Test' },
            { exam: 'PTE', tier: 'Advanced', href: '/courses/pte', reason: 'Test' },
          ],
        }),
      );
    });
    await page.reload();

    await expect(page.getByTestId('level-badge')).toContainText('C1-C2');
    await expect(page.getByTestId('level-badge')).toContainText('Advanced');
  });

  test('shows "no result" message when no result in localStorage', async ({ page }) => {
    await page.goto('/placement-test/results');
    await page.evaluate(() => localStorage.removeItem('ielts_placement_result'));
    await page.reload();

    await expect(page.getByText(/no result found/i)).toBeVisible();
  });
});
