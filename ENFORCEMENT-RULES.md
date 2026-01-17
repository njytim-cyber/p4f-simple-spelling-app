# Enforcement Rules

## 🔒 Automated Pre-Commit Hooks

**This repository uses [Husky](https://typicode.github.io/husky/) to automatically enforce quality checks BEFORE commits are allowed.**

When you run `git commit`, the following checks will run automatically:
1. ✅ Type checking (`npm run build`)
2. ✅ Code linting (`npm run lint`)
3. ✅ Content quality audits (`npm run audit:all`)

**If ANY check fails, the commit will be BLOCKED.** You must fix all issues before you can commit.

This means:
- ❌ You **CANNOT** commit broken code
- ❌ You **CANNOT** skip quality checks
- ✅ You **MUST** fix all issues first
- ✅ Quality is enforced automatically, not optionally

## Mandatory Pre-Commit Requirements

**ALL changes must pass these checks before committing:**

### 1. Type Checking
```bash
npm run build
```
- **Status**: MANDATORY
- **Failure Action**: Fix all TypeScript errors before committing
- **Why**: Prevents type errors from reaching production

### 2. Linting
```bash
npm run lint
```
- **Status**: MANDATORY
- **Failure Action**: Fix all linting errors before committing
- **Why**: Maintains code quality and consistency

### 3. Unit Tests
```bash
npm run test
```
- **Status**: MANDATORY
- **Failure Action**: Fix failing tests or update tests if behavior intentionally changed
- **Why**: Prevents regressions in component logic

### 4. E2E Tests
```bash
npm run test:e2e
```
- **Status**: MANDATORY for UI changes
- **Failure Action**: Fix failing tests or update tests if UI behavior intentionally changed
- **Why**: Prevents regressions in user workflows

### 5. Content Quality Audits
```bash
npm run audit:all
```
- **Status**: MANDATORY when modifying content files
- **Applies to changes in**:
  - `src/data/grammar-exercises.ts`
  - `src/data/vocabulary-simple.ts`
  - `src/data/editing-exercises.ts`
  - Any question bank files
- **Failure Action**: Fix all reported issues before committing
- **Why**: Ensures pedagogical quality and prevents ambiguous questions

### 6. Quality Standards Acknowledgment
```bash
npm run verify-standards
```
- **Status**: MANDATORY before first content edit
- **Failure Action**: Read CONTENT-QUALITY-STANDARDS.md and acknowledge
- **Why**: Ensures content creators understand quality requirements

## Pre-Push Requirements

Before pushing to remote:
1. All pre-commit checks must pass
2. Branch must be up to date with main
3. No merge conflicts

## Pre-Merge Requirements (Pull Requests)

Before merging any PR:
1. All checks from Pre-Commit Requirements must pass
2. Build must succeed
3. Code review approved (if team workflow requires it)
4. No outstanding audit failures

## Enforcement

### Local Enforcement

#### Automated Pre-Commit Hooks (Husky)
Pre-commit hooks are automatically installed when you run `npm install` (via the `prepare` script).

**First-time setup:**
```bash
npm install  # Automatically installs Husky hooks
```

**What happens on commit:**
1. You run `git commit -m "your message"`
2. Husky intercepts the commit
3. Runs all quality checks automatically
4. If all pass → Commit succeeds ✅
5. If any fail → Commit is blocked ❌

**Manual bypass (STRONGLY DISCOURAGED):**
```bash
git commit --no-verify -m "message"  # Bypasses hooks - DO NOT USE
```
⚠️ **WARNING:** Using `--no-verify` is a violation of project rules. Only use in genuine emergencies (e.g., fixing broken hooks). The CI will still catch issues and block merging.

#### Developer Responsibility
Even with automated hooks, developers are responsible for:
- Understanding why checks exist
- Running checks during development (not just at commit time)
- Writing tests for new features
- Maintaining code quality standards

### Automated Enforcement (CI/CD)
GitHub Actions automatically runs all checks on:
- Every push to main, feature/*, content/*, fix/* branches
- Every pull request to main

**CI Pipeline includes:**
1. Type checking (`npm run build`)
2. Linting (`npm run lint`)
3. Unit tests (`npm run test`)
4. E2E tests (`npm run test:e2e`)
5. Content quality audits (`npm run audit:all`)
6. Production build verification

**Pull requests CANNOT be merged if:**
- Any check fails
- Build fails
- Tests fail
- Audits fail

### How This Works
1. You push code → GitHub Actions runs automatically
2. All checks must pass → Green checkmark appears
3. If checks fail → Red X appears, merge blocked
4. Fix issues → Push again → CI re-runs
5. All green → Ready to merge

This ensures **enforcement is automatic, not optional**.

## Exemptions

**There are NO exemptions** to these rules. If checks fail:
- Fix the issue, OR
- Update the test/audit if requirements have legitimately changed

Never commit broken code with the intention to "fix it later."

## Quick Reference Commands

```bash
# Full pre-commit check suite
npm run build && npm run lint && npm test && npm run test:e2e

# Content changes only
npm run build && npm run lint && npm run audit:all

# Before first content edit
npm run verify-standards
```

## Consequences of Non-Compliance

Failing to follow these rules results in:
- Broken builds
- Production bugs
- User-facing errors
- Wasted team time debugging preventable issues
- Loss of pedagogical quality

**Prevention is mandatory. Fixing is expensive.**
