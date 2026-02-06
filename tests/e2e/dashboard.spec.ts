import { test, expect } from '@playwright/test';

test.describe('Dashboard', () => {
  test.beforeEach(async ({ page }) => {
    // Skip onboarding, update splash, and privacy dialog
    await page.addInitScript(() => {
      localStorage.setItem('p4_onboarding_complete', 'true');
      localStorage.setItem('p4f-spelling-last-seen-version', '999.0.0');
      localStorage.setItem('p4_privacy_message_seen', 'true');
    });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('should display the dashboard with header', async ({ page }) => {
    await expect(page.getByText('Spelling Tests')).toBeVisible();
  });

  test('should display XP counter', async ({ page }) => {
    // The XP chip shows a star icon + number
    await expect(page.locator('[class*="MuiChip"]').first()).toBeVisible();
  });

  test('should display exercise list with dates', async ({ page }) => {
    await expect(page.getByText('#', { exact: true })).toBeVisible();
    await expect(page.getByText('Date')).toBeVisible();
  });

  test('should display bottom navigation tabs', async ({ page }) => {
    await expect(page.getByRole('button', { name: /spelling/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /exercises/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /revision/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /about/i })).toBeVisible();
  });

  test('should switch between tabs', async ({ page }) => {
    // Initially on spelling tab
    await expect(page.getByText('Spelling Tests')).toBeVisible();

    // Click exercises tab
    await page.getByRole('button', { name: /exercises/i }).click();
    await expect(page.getByText('Exercises 📝')).toBeVisible();

    // Click revision tab
    await page.getByRole('button', { name: /revision/i }).click();
    await expect(page.getByText('Revision 📚')).toBeVisible();

    // Click about tab
    await page.getByRole('button', { name: /about/i }).click();
    await expect(page.getByText('Hi! 👋')).toBeVisible();

    // Click back to spelling
    await page.getByRole('button', { name: /spelling/i }).click();
    await expect(page.getByText('Spelling Tests')).toBeVisible();
  });

  test('should have clickable exercise icons', async ({ page }) => {
    // Find first exercise row icon (spelling or dictation)
    const firstIcon = page.locator('[data-onboarding="spelling"]').first();
    await expect(firstIcon).toBeVisible();

    await firstIcon.click();

    // Should leave dashboard
    await expect(page.getByText('Spelling Tests')).not.toBeVisible({ timeout: 5000 });
  });

  test('should open edit dates dialog', async ({ page }) => {
    const editDatesIcon = page.locator('button').filter({ has: page.locator('[data-testid="EditCalendarIcon"]') });
    await editDatesIcon.click();

    await expect(page.getByText('Edit Dates')).toBeVisible();

    // Close dialog
    await page.getByRole('button', { name: /cancel/i }).click();
  });

  test('should show about section with tabs', async ({ page }) => {
    await page.getByRole('button', { name: /about/i }).click();
    await expect(page.getByText('Why we built this')).toBeVisible();
    await expect(page.getByRole('tab', { name: /about/i })).toBeVisible();
    await expect(page.getByRole('tab', { name: /what's new/i })).toBeVisible();
  });

  test('should show revision section', async ({ page }) => {
    await page.getByRole('button', { name: /revision/i }).click();
    await expect(page.getByText('Revision 📚')).toBeVisible();
  });
});
