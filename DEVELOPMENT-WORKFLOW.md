# Development Workflow

This document outlines the mandatory workflow for all code and content changes.

## Workflow Overview

```
1. Create feature branch
2. Make changes
3. Run applicable checks (see ENFORCEMENT-RULES.md)
4. Commit only if all checks pass
5. Push to remote
6. Create pull request
7. Merge only if all checks pass
```

## Step-by-Step Workflows

### Workflow A: Code Changes (Components, Logic, Styling)

```bash
# 1. Create feature branch
git checkout -b feature/your-feature-name

# 2. Make your code changes
# ... edit files ...

# 3. Run mandatory checks
npm run build          # Type checking
npm run lint           # Code quality
npm run test           # Unit tests
npm run test:e2e       # End-to-end tests (for UI changes)

# 4. If ALL checks pass, commit
git add .
git commit -m "feat: your descriptive commit message"

# 5. Push to remote
git push -u origin feature/your-feature-name

# 6. Create pull request
gh pr create --title "Your PR Title" --body "Description of changes"
```

**All checks must pass at step 3. No exceptions.**

---

### Workflow B: Content Changes (Question Banks)

```bash
# 0. First time only - acknowledge quality standards
npm run verify-standards

# 1. Create feature branch
git checkout -b content/your-content-change

# 2. Make your content changes
# ... edit grammar-exercises.ts, vocabulary-simple.ts, etc. ...

# 3. Run mandatory checks
npm run build          # Type checking
npm run lint           # Code quality
npm run audit:all      # Quality audits (CRITICAL for content)

# 4. Review audit results
# Fix any reported issues:
# - Ambiguous questions
# - Missing explanations
# - Poor distractors
# - Incorrect formatting

# 5. Re-run audits until clean
npm run audit:all

# 6. If ALL checks pass, commit
git add .
git commit -m "content: your descriptive commit message"

# 7. Push to remote
git push -u origin content/your-content-change

# 8. Create pull request
gh pr create --title "Your PR Title" --body "Description of changes"
```

**Audits must be 100% clean before committing. No exceptions.**

---

### Workflow C: Mixed Changes (Code + Content)

Combine both workflows:

```bash
# 1. Create feature branch
git checkout -b feature/your-feature-name

# 2. Make your changes (code + content)
# ... edit files ...

# 3. Run ALL mandatory checks
npm run build          # Type checking
npm run lint           # Code quality
npm run test           # Unit tests
npm run test:e2e       # E2E tests (if UI changed)
npm run audit:all      # Content quality (if content changed)

# 4. Fix any issues and re-run checks

# 5. If ALL checks pass, commit
git add .
git commit -m "feat: your descriptive commit message"

# 6. Push and create PR
git push -u origin feature/your-feature-name
gh pr create --title "Your PR Title" --body "Description"
```

---

## Handling Check Failures

### If Build Fails
```bash
npm run build
# Read error messages
# Fix TypeScript errors
# Re-run: npm run build
```

### If Lint Fails
```bash
npm run lint
# Fix linting issues
# Re-run: npm run lint
```

### If Tests Fail
```bash
npm run test
# Read test failures
# Fix code OR update tests if behavior intentionally changed
# Re-run: npm run test
```

### If Audits Fail
```bash
npm run audit:all
# Read audit report carefully
# Fix each reported issue in the content files
# Re-run: npm run audit:all
```

**Never commit when checks fail. Always fix, then re-run.**

---

## Pull Request Requirements

Before merging any PR:

1. ✅ All local checks passed
2. ✅ No merge conflicts with main
3. ✅ Descriptive PR title and body
4. ✅ Changes tested locally
5. ✅ Build succeeds
6. ✅ No outstanding audit failures

---

## Git Commit Message Convention

Follow conventional commits:

- `feat:` New feature
- `fix:` Bug fix
- `content:` Content/question bank changes
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `docs:` Documentation changes
- `chore:` Maintenance tasks

Examples:
```
feat: add passive voice detection to grammar mode
fix: correct scoring logic in vocabulary quiz
content: add 15 new idiom questions with explanations
test: add e2e tests for editing mode navigation
```

---

## Branch Naming Convention

- `feature/` - New features
- `fix/` - Bug fixes
- `content/` - Content updates
- `refactor/` - Code refactoring
- `test/` - Test additions/updates

Examples:
```
feature/grammar-mode
fix/scoring-bug
content/idioms-expansion
refactor/quiz-state-management
```

---

## Quick Reference

**Before every commit:**
```bash
# Code changes
npm run build && npm run lint && npm run test && npm run test:e2e

# Content changes
npm run build && npm run lint && npm run audit:all

# Mixed changes
npm run build && npm run lint && npm run test && npm run test:e2e && npm run audit:all
```

**Remember:**
- Checks are mandatory, not optional
- Fix failures before committing
- Never push broken code
- Quality standards are non-negotiable

See [ENFORCEMENT-RULES.md](ENFORCEMENT-RULES.md) for detailed requirements.
