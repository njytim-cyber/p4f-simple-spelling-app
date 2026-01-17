import { test, expect } from '@playwright/test';

test.describe('Editing Mode', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Close onboarding if present
    const onboardingButton = page.getByRole('button', { name: /get started|got it/i });
    if (await onboardingButton.isVisible({ timeout: 1000 }).catch(() => false)) {
      await onboardingButton.click();
    }

    // Navigate to editing tab
    await page.getByRole('button', { name: /editing/i }).last().click();
    await expect(page.getByText('Editing ✍️')).toBeVisible();
  });

  test('should display editing dashboard', async ({ page }) => {
    await expect(page.getByText('Your Progress')).toBeVisible();
    await expect(page.getByText(/of.*exercises completed/)).toBeVisible();
  });

  test('should show progress indicator', async ({ page }) => {
    // Progress bar should be visible
    const progressBar = page.locator('.MuiLinearProgress-root');
    await expect(progressBar).toBeVisible();
  });

  test('should have new exercise button', async ({ page }) => {
    const newExerciseButton = page.getByRole('button', { name: /start exercise/i });
    await expect(newExerciseButton).toBeVisible();
  });

  test('should have revision button', async ({ page }) => {
    const revisionButton = page.getByRole('button', { name: /revision/i });
    await expect(revisionButton).toBeVisible();
  });

  test('should start a new editing exercise', async ({ page }) => {
    const newExerciseButton = page.getByRole('button', { name: /start exercise/i });
    await newExerciseButton.click();

    // Should navigate to editing exercise
    await expect(page.getByText(/Editing:/)).toBeVisible({ timeout: 5000 });

    // Should show exercise content
    await expect(page.locator('input[type="text"]').first()).toBeVisible();
  });

  test('should display underlined errors in passage', async ({ page }) => {
    const newExerciseButton = page.getByRole('button', { name: /start exercise/i });
    await newExerciseButton.click();

    await page.waitForLoadState('networkidle');

    // Should have input fields for corrections
    const inputs = page.locator('input[placeholder="..."]');
    const count = await inputs.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should allow answering and checking', async ({ page }) => {
    const newExerciseButton = page.getByRole('button', { name: /start exercise/i });
    await newExerciseButton.click();

    await page.waitForLoadState('networkidle');

    // Fill in first input
    const firstInput = page.locator('input[placeholder="..."]').first();
    await firstInput.fill('test');

    // Check answers button should be enabled
    const checkButton = page.getByRole('button', { name: /check answers/i });
    await expect(checkButton).toBeEnabled();
  });

  test('should navigate back to dashboard', async ({ page }) => {
    const newExerciseButton = page.getByRole('button', { name: /start exercise/i });
    await newExerciseButton.click();

    await page.waitForLoadState('networkidle');

    // Click back button
    const backButton = page.getByRole('button', { name: /exit/i });
    await backButton.click();

    // Should return to editing dashboard
    await expect(page.getByText('Your Progress')).toBeVisible();
  });

  test('should show progress counter', async ({ page }) => {
    const newExerciseButton = page.getByRole('button', { name: /start exercise/i });
    await newExerciseButton.click();

    await page.waitForLoadState('networkidle');

    // Should show progress like "0/3"
    await expect(page.getByText(/\d+\/\d+/)).toBeVisible();
  });
});
