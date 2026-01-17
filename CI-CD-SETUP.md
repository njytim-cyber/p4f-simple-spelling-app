# CI/CD Setup Guide

This document explains the automated quality enforcement system using GitHub Actions.

## Overview

Every push and pull request triggers automated checks that **must pass** before code can be merged.

## Pipeline Architecture

The CI pipeline runs three parallel jobs:

### Job 1: Quality Checks
**Purpose:** Verify code quality, types, and content standards

**Steps:**
1. Type checking → `npm run build`
2. Linting → `npm run lint`
3. Unit tests → `npm run test`
4. Content audits → `npm run audit:all`

**Runs on:** `ubuntu-latest`
**Timeout:** 15 minutes

---

### Job 2: E2E Tests
**Purpose:** Test full user workflows across browsers

**Steps:**
1. Install Playwright browsers (Chromium, Firefox, WebKit)
2. Run E2E tests → `npm run test:e2e`
3. Upload Playwright report (on failure)

**Runs on:** `ubuntu-latest`
**Timeout:** 15 minutes

---

### Job 3: Build Verification
**Purpose:** Ensure production build succeeds

**Steps:**
1. Build production bundle → `npm run build`
2. Report bundle size

**Runs on:** `ubuntu-latest`
**Timeout:** 10 minutes

---

### Job 4: All Checks Passed (Final Gate)
**Purpose:** Verify all jobs succeeded

This job depends on all three previous jobs and **fails if any dependency fails**.

## Triggers

### On Push
Runs on pushes to these branches:
- `main`
- `feature/**`
- `content/**`
- `fix/**`

### On Pull Request
Runs on pull requests targeting:
- `main`

## Branch Protection Setup

To **enforce** these checks (prevent merging when checks fail):

1. Go to your GitHub repository
2. Navigate to **Settings → Branches**
3. Click **Add rule** or edit the `main` branch rule
4. Configure:
   - ✅ **Require a pull request before merging**
   - ✅ **Require status checks to pass before merging**
   - ✅ **Require branches to be up to date before merging**
   - Select these required status checks:
     - `Quality Checks`
     - `E2E Tests`
     - `Build Verification`
     - `All Checks Passed`
5. Save changes

**Result:** Pull requests cannot be merged unless all checks pass.

## Viewing Pipeline Results

### In Pull Requests
1. Open your PR
2. Scroll to the bottom
3. See check status for each job
4. Click "Details" to view logs

### In Actions Tab
1. Go to repository → **Actions** tab
2. See all workflow runs
3. Click any run to see detailed logs
4. Download artifacts (Playwright reports on E2E failures)

## Understanding Check Status

| Status | Meaning | Action Required |
|--------|---------|----------------|
| 🟢 Green checkmark | All checks passed | Ready to merge |
| 🔴 Red X | One or more checks failed | Review logs, fix issues, push again |
| 🟡 Yellow circle | Checks running | Wait for completion |
| ⚪ Gray circle | Checks queued | Wait for runner availability |

## Common Failures and Solutions

### Type Checking Failed
```bash
# Error: TypeScript compilation errors
# Solution: Fix type errors locally
npm run build
# Fix all errors shown
# Push changes
```

### Linting Failed
```bash
# Error: ESLint violations
# Solution: Fix linting issues
npm run lint
# Fix all issues shown
# Push changes
```

### Unit Tests Failed
```bash
# Error: Vitest tests failing
# Solution: Fix failing tests
npm run test
# Fix broken tests or update tests if behavior changed
# Push changes
```

### E2E Tests Failed
```bash
# Error: Playwright tests failing
# Solution:
1. Download Playwright report artifact from Actions tab
2. Review failed test screenshots
3. Fix the issue
npm run test:e2e
# Verify locally
# Push changes
```

### Content Audits Failed
```bash
# Error: audit:all script failed
# Solution: Fix content quality issues
npm run audit:all
# Review each failure
# Fix issues in question bank files
# Re-run until clean
# Push changes
```

### Build Verification Failed
```bash
# Error: Production build failed
# Solution: Usually same as type checking
npm run build
# Fix errors
# Push changes
```

## Local Development Workflow

**Always run checks locally BEFORE pushing:**

```bash
# For code changes
npm run build && npm run lint && npm run test && npm run test:e2e

# For content changes
npm run build && npm run lint && npm run audit:all

# If all pass, commit and push
git add .
git commit -m "your message"
git push
```

**Why run locally first?**
- Faster feedback (no waiting for CI)
- Save CI minutes
- Catch issues before they block your PR

## Troubleshooting

### Pipeline Not Running
- Check branch name matches trigger patterns
- Verify `.github/workflows/ci.yml` exists
- Check GitHub Actions is enabled (Settings → Actions)

### Checks Always Passing (Even When They Shouldn't)
- Verify branch protection rules are enabled
- Check required status checks are selected
- Ensure job names match exactly

### CI Failing But Local Passes
- Check Node.js version (CI uses Node 18)
- Check for environment-specific issues
- Review CI logs for differences

### Playwright Tests Timing Out
- Default timeout is 15 minutes
- Check for infinite loops or hung processes
- Review Playwright configuration

## Cost Considerations

**GitHub Actions minutes:**
- Free tier: 2,000 minutes/month for private repos
- Public repos: Unlimited

**Average pipeline run time:**
- Quality Checks: ~3-5 minutes
- E2E Tests: ~5-8 minutes
- Build Verification: ~2-3 minutes
- **Total: ~10-16 minutes per run**

**Optimization tips:**
- Run checks locally before pushing
- Use `npm ci` instead of `npm install` (faster, deterministic)
- Cache node_modules (already configured)

## Maintenance

### Updating Node.js Version
Edit `.github/workflows/ci.yml`:
```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '20'  # Change version here
```

### Adding New Checks
Add new steps to the appropriate job in `ci.yml`:
```yaml
- name: New check
  run: npm run your-new-check
```

### Changing Triggers
Edit the `on:` section in `ci.yml`:
```yaml
on:
  push:
    branches:
      - main
      - your-new-pattern/**
```

## Security Notes

- CI runs in isolated containers
- No secrets required for current setup
- All dependencies installed fresh each run
- `npm ci` ensures reproducible builds

## Further Reading

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Playwright CI Documentation](https://playwright.dev/docs/ci)
- [Vitest CI Documentation](https://vitest.dev/guide/ci.html)

---

**Remember:** The CI pipeline is your safety net. If it fails, don't bypass it—fix the issue.
