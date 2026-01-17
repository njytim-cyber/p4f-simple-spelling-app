import { test, expect } from '@playwright/test';

test.describe('Dashboard', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Wait for the app to load
    await page.waitForLoadState('networkidle');

    // Close onboarding if present
    const onboardingButton = page.getByRole('button', { name: /get started|got it/i });
    if (await onboardingButton.isVisible({ timeout: 1000 }).catch(() => false)) {
      await onboardingButton.click();
    }
  });

  test('should display the dashboard with header', async ({ page }) => {
    await expect(page.getByText('Hi! 👋')).toBeVisible();
  });

  test('should display XP counter', async ({ page }) => {
    const xpChip = page.locator('[class*="MuiChip"]').filter({ hasText: /^\d+$/ });
    await expect(xpChip).toBeVisible();
  });

  test('should display exercise list with dates', async ({ page }) => {
    // Check for exercise items
    await expect(page.getByText('#', { exact: true })).toBeVisible();
    await expect(page.getByText('Date')).toBeVisible();
  });

  test('should open spelling list dialog', async ({ page }) => {
    const spellingListButton = page.locator('[data-onboarding="spelling-list"]');
    await spellingListButton.click();

    await expect(page.getByText('Master Spelling List')).toBeVisible();

    // Close dialog
    await page.getByRole('button', { name: /got it/i }).click();
  });

  test('should open activity log dialog', async ({ page }) => {
    const activityLogButton = page.locator('[data-onboarding="activity-log"]');
    await activityLogButton.click();

    await expect(page.getByText('Activity history')).toBeVisible();

    // Close dialog
    await page.getByRole('button', { name: /finish/i }).click();
  });

  test('should switch between spelling and editing tabs', async ({ page }) => {
    // Initially on spelling tab
    await expect(page.getByText('Hi! 👋')).toBeVisible();

    // Click editing tab
    await page.getByRole('button', { name: /editing/i }).last().click();
    await expect(page.getByText('Editing ✍️')).toBeVisible();

    // Click back to spelling tab
    await page.getByRole('button', { name: /spelling/i }).last().click();
    await expect(page.getByText('Hi! 👋')).toBeVisible();
  });

  test('should display revision button', async ({ page }) => {
    const revisionButton = page.locator('[data-onboarding="revision"]');
    await expect(revisionButton).toBeVisible();
    await expect(revisionButton).toContainText(/revision/i);
  });

  test('should have clickable exercise icons', async ({ page }) => {
    // Find first spelling exercise icon
    const firstSpellingIcon = page.locator('[data-onboarding="spelling"]').first();
    await expect(firstSpellingIcon).toBeVisible();

    // Click should navigate to exercise
    await firstSpellingIcon.click();

    // Should leave dashboard
    await expect(page.getByText('Hi! 👋')).not.toBeVisible({ timeout: 5000 });
  });

  test('should open edit dates dialog', async ({ page }) => {
    const editDatesIcon = page.locator('button').filter({ has: page.locator('[data-testid="EditCalendarIcon"]') });
    await editDatesIcon.click();

    await expect(page.getByText('Edit Dates')).toBeVisible();

    // Close dialog
    await page.getByRole('button', { name: /cancel/i }).click();
  });

  test('should open about dialog and show tabs', async ({ page }) => {
    // Click info button (ℹ️)
    const infoButton = page.getByRole('button').filter({ hasText: 'ℹ️' });
    await infoButton.click();

    await expect(page.getByText('About this App')).toBeVisible();
    await expect(page.getByRole('tab', { name: /about/i })).toBeVisible();
    await expect(page.getByRole('tab', { name: /what's new/i })).toBeVisible();

    // Switch to "What's New" tab
    await page.getByRole('tab', { name: /what's new/i }).click();

    // Close dialog
    await page.getByRole('button', { name: /cool!/i }).click();
  });
});
