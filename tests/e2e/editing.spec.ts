import { test, expect } from '@playwright/test';

test.describe('Editing Mode', () => {
  test.beforeEach(async ({ page }) => {
    // Skip onboarding, update splash, and privacy dialog
    await page.addInitScript(() => {
      localStorage.setItem('p4_onboarding_complete', 'true');
      localStorage.setItem('p4f-spelling-last-seen-version', '999.0.0');
      localStorage.setItem('p4_privacy_message_seen', 'true');
    });
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    // Navigate to exercises tab (which contains editing)
    await page.getByRole('button', { name: /exercises/i }).click();
    await expect(page.getByText('Exercises 📝')).toBeVisible();
  });

  test('should display exercises dashboard with editing section', async ({ page }) => {
    await expect(page.getByText('Editing')).toBeVisible();
  });

  test('should display grammar section', async ({ page }) => {
    await expect(page.getByText('Grammar')).toBeVisible();
  });

  test('should show progress indicator', async ({ page }) => {
    const progressBar = page.locator('[role="progressbar"]');
    await expect(progressBar).toBeVisible();
  });

  test('should show editing score counter', async ({ page }) => {
    // The editing section shows a score like "0/150"
    await expect(page.getByText(/\d+\/150/)).toBeVisible();
  });

  test('should navigate to editing exercise on click', async ({ page }) => {
    // The editing section is a clickable card, not a button
    const editingSection = page.getByText('Editing').first();
    await editingSection.click();

    // Should navigate to editing exercise — wait for exercise content to load
    await expect(page.locator('input[type="text"]').first()).toBeVisible({ timeout: 10000 });
  });

  test('should display input fields in editing exercise', async ({ page }) => {
    const editingSection = page.getByText('Editing').first();
    await editingSection.click();

    // Wait for exercise content
    await expect(page.locator('input[type="text"]').first()).toBeVisible({ timeout: 10000 });

    const inputs = page.locator('input[type="text"]');
    const count = await inputs.count();
    expect(count).toBeGreaterThan(0);
  });
});
