# Primary 4 Spelling & Grammar App

[![CI](https://github.com/YOUR_USERNAME/YOUR_REPO/actions/workflows/ci.yml/badge.svg)](https://github.com/YOUR_USERNAME/YOUR_REPO/actions/workflows/ci.yml)

A comprehensive educational application for Primary 4 students (age 10) focusing on spelling, grammar, vocabulary, and editing skills using UK English standards.

> **Note:** Replace `YOUR_USERNAME/YOUR_REPO` in the badge URL above with your actual GitHub repository details.

## 🎯 Features

### Learning Modes
- **📝 Spelling** - Listen and spell words correctly
- **🎤 Dictation** - Write complete sentences from audio
- ~~**📚 Vocabulary**~~ - *(Temporarily hidden - needs better quality questions)*
- **✏️ Grammar** - Multiple choice grammar questions
- **🔍 Editing** - Identify and correct errors in passages
- **♻️ Revision** - Spaced repetition for missed items

### Key Highlights
- ✅ **100% unambiguous questions** - Every question has exactly one clear answer
- ✅ **Curated MCQ distractors** - 98% of vocabulary questions use pedagogically-sound wrong answers
- ✅ **Bite-sized sessions** - 10 questions per session for all modes
- ✅ **Spaced repetition** - Smart review system for mastery
- ✅ **UK English** - British spelling and grammar standards
- ✅ **Offline-capable** - Progressive Web App (PWA)

## 📊 Content Quality

### Question Bank Statistics

| Type | Total | Curated Distractors | Status |
|------|-------|---------------------|--------|
| Grammar MCQ | 93 | 93 (100%) | ✅ Active |
| Vocabulary MCQ | 205 | 201 (98%) | ⚠️ Hidden (needs improvement) |
| Editing Exercises | 150 | N/A | ✅ Active |
| **TOTAL** | **448** | **294/298 (99%)** | **✅ 100% CLEAN** |

**Quality Assurance:**
- 0 ambiguous questions
- 795 poor-quality items removed
- All questions audited and validated
- Continuous quality monitoring via automated scripts

## ⚠️ MANDATORY: Development Rules & Workflow

**ALL developers and content creators MUST follow:**

- **[ENFORCEMENT-RULES.md](ENFORCEMENT-RULES.md)** - Mandatory pre-commit requirements
- **[DEVELOPMENT-WORKFLOW.md](DEVELOPMENT-WORKFLOW.md)** - Step-by-step workflows for all changes

**Quick Summary:**
- ✅ All tests must pass before committing
- ✅ All audits must pass for content changes
- ✅ Build must succeed before pushing
- ❌ No exceptions - fix issues, don't skip checks

**🤖 Automated Enforcement:**
- GitHub Actions runs all checks automatically on every push/PR
- Pull requests **cannot be merged** if any check fails
- See [.github/workflows/ci.yml](.github/workflows/ci.yml) for CI pipeline details

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
# Opens at http://localhost:3000
```

### Build
```bash
npm run build
```

### Testing
```bash
# Unit tests
npm test

# E2E tests
npm run test:e2e

# Test with UI
npm run test:ui
npm run test:e2e:ui
```

## 📋 Content Quality Standards

**⚠️ IMPORTANT: All content creators MUST read and follow [CONTENT-QUALITY-STANDARDS.md](CONTENT-QUALITY-STANDARDS.md)**

### Quick Guidelines

#### For Vocabulary Items:
- ✅ Use word in natural context (no meta-references)
- ✅ Provide 3 curated distractors (misspellings + similar words)
- ✅ Ensure only ONE word can complete the sentence
- ❌ Never use generic templates ("The word X is...")

#### For Grammar Questions:
- ✅ Include sufficient context to eliminate ambiguity
- ✅ Provide clear explanations and helpful hints
- ✅ Test common errors and misconceptions
- ❌ Never leave room for multiple correct answers

#### For Editing Exercises:
- ✅ Use realistic, common errors
- ✅ Format: `{wrong|correct}` - wrong ALWAYS comes first
- ✅ Verify no identical pairs with audit script
- ❌ Never use obvious nonsense or trivial errors

### Content Addition Workflow

**See [DEVELOPMENT-WORKFLOW.md](DEVELOPMENT-WORKFLOW.md) for complete step-by-step instructions.**

Quick reference:
1. **Acknowledge standards:** `npm run verify-standards` (first time only)
2. **Create content** following [CONTENT-QUALITY-STANDARDS.md](CONTENT-QUALITY-STANDARDS.md)
3. **Run all checks:** `npm run build && npm run lint && npm run audit:all`
4. **Fix all issues** until checks pass
5. **Test manually:** `npm run dev`
6. **Commit** only if ALL checks pass

## 🔍 Quality Assurance Scripts

### Audit Scripts
```bash
# Check grammar MCQ questions
node audit-grammar.cjs

# Check vocabulary for generic patterns
node audit-vocabulary-simple.cjs

# Check vocabulary distractor quality
node audit-vocab-distractors.cjs

# Check editing exercise pairs
node audit-editing.cjs
```

All scripts must return `✅ PASS` before committing changes.

### Content Generation Scripts
```bash
# Generate distractor suggestions for vocabulary
node generate-vocab-distractors-v2.cjs

# Apply curated distractors to vocabulary
node apply-vocab-distractors-v2.cjs

# Fix apostrophes in vocabulary examples
node fix-apostrophes.cjs
```

## 🤖 CI/CD Pipeline

### Automated Quality Enforcement

GitHub Actions automatically runs all quality checks on every push and pull request.

**Pipeline Jobs:**
1. **Quality Checks** - Type checking, linting, unit tests, content audits
2. **E2E Tests** - Full user workflow testing across browsers
3. **Build Verification** - Production build and bundle size check

**Triggers:**
- Every push to `main`, `feature/*`, `content/*`, `fix/*` branches
- Every pull request to `main`

**Branch Protection:**
- Pull requests **cannot be merged** if any check fails
- All three jobs must pass: ✅ Quality Checks, ✅ E2E Tests, ✅ Build Verification

**What Gets Checked:**
```bash
# Job 1: Quality Checks
npm run build          # TypeScript compilation
npm run lint           # ESLint
npm run test           # Unit tests (Vitest)
npm run audit:all      # Content quality audits

# Job 2: E2E Tests
npm run test:e2e       # Playwright tests (Chromium, Firefox, WebKit)

# Job 3: Build Verification
npm run build          # Production build
# Bundle size reporting
```

**Viewing Results:**
- Check the "Actions" tab in GitHub to see pipeline runs
- Green ✅ = All checks passed, ready to merge
- Red ❌ = Checks failed, fix required before merge
- Failed Playwright tests include uploaded HTML reports

**Configuration:** [.github/workflows/ci.yml](.github/workflows/ci.yml)

**Setup Guide:** See [CI-CD-SETUP.md](CI-CD-SETUP.md) for:
- Detailed pipeline architecture
- Branch protection setup instructions
- Troubleshooting common failures
- Cost optimization tips

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Dashboard.tsx       # Main dashboard
│   ├── SpellingMode.tsx    # Spelling exercise mode
│   ├── DictationMode.tsx   # Dictation exercise mode
│   ├── ExerciseMode.tsx    # Vocab/Grammar MCQ mode
│   ├── EditingMode.tsx     # Editing exercise mode
│   └── RevisionMode.tsx    # Spaced repetition mode
├── data/               # Question banks
│   ├── vocabulary.ts       # 205 vocabulary items
│   ├── grammar-exercises.ts  # 93 grammar questions
│   └── editing-exercises.ts  # 150 editing exercises
└── utils/              # Utility functions
    ├── spacedRepetition.ts  # SRS algorithm
    ├── speech.ts           # Text-to-speech
    └── sounds.ts           # Audio feedback

audit-*.cjs             # Quality assurance scripts
generate-*.cjs          # Content generation helpers
*.md                    # Documentation
```

## 🎓 Educational Design

### Learning Principles

1. **Spaced Repetition**
   - Missed items appear for review at optimal intervals
   - Successful answers extend review periods
   - Focus on challenging material

2. **Immediate Feedback**
   - Instant correction on errors
   - Explanations for grammar questions
   - Hints available on second attempt

3. **Bite-Sized Learning**
   - 10 questions per session
   - Option to continue for motivated students
   - Prevents overwhelm and fatigue

4. **Progressive Difficulty**
   - Curated distractors challenge understanding
   - Common misspellings test mastery
   - Real-world contexts demonstrate usage

### Pedagogical Features

- **Curated Distractors:** Wrong answers based on common student errors (ie/ei confusion, double consonants, UK/US variants)
- **Contextual Examples:** Every word shown in realistic, age-appropriate usage
- **Unambiguous Questions:** No trick questions or gotchas
- **UK English Standard:** Prepares students for British curriculum
- **Audio Support:** Text-to-speech for spelling and dictation
- **Visual Feedback:** Clear indicators for correct/incorrect answers
- **Progress Tracking:** See improvement over time

## 🛠️ Technical Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Material-UI** - Component library
- **Vite** - Build tool
- **Vitest** - Unit testing
- **Playwright** - E2E testing
- **Web Speech API** - Text-to-speech

## 📈 Version History

See [CHANGELOG.md](CHANGELOG.md) for release notes.

Current version: **1.3.10**

## 📖 Documentation

### Mandatory Reading
- **[ENFORCEMENT-RULES.md](ENFORCEMENT-RULES.md)** - **REQUIRED** for all developers
- **[DEVELOPMENT-WORKFLOW.md](DEVELOPMENT-WORKFLOW.md)** - **REQUIRED** for all developers
- **[CONTENT-QUALITY-STANDARDS.md](CONTENT-QUALITY-STANDARDS.md)** - **REQUIRED** for content creators

### Reference Documentation
- [CI-CD-SETUP.md](CI-CD-SETUP.md) - GitHub Actions pipeline setup and troubleshooting
- [spec.md](spec.md) - Technical specifications
- [walkthrough.md](walkthrough.md) - Application walkthrough and features

## 🤝 Contributing

**Before making ANY changes, read:**
1. [ENFORCEMENT-RULES.md](ENFORCEMENT-RULES.md) - Understand mandatory requirements
2. [DEVELOPMENT-WORKFLOW.md](DEVELOPMENT-WORKFLOW.md) - Follow the correct workflow
3. [CONTENT-QUALITY-STANDARDS.md](CONTENT-QUALITY-STANDARDS.md) - For content changes

### Quick Workflow Reference

**For Code Changes:**
```bash
# Make changes → npm run build && npm run lint && npm run test && npm run test:e2e → commit
```

**For Content Changes:**
```bash
# Make changes → npm run build && npm run lint && npm run audit:all → commit
```

See [DEVELOPMENT-WORKFLOW.md](DEVELOPMENT-WORKFLOW.md) for detailed step-by-step instructions.

## 📄 License

Educational use. All content designed for Primary 4 students following UK curriculum standards.

## ⚠️ Important Notes

### For Content Creators

**Before adding ANY content:**
- 📖 Read [CONTENT-QUALITY-STANDARDS.md](CONTENT-QUALITY-STANDARDS.md) in full
- ✅ Follow ALL rules strictly
- 🔍 Run ALL relevant audit scripts
- 🧪 Test in development environment
- ❌ Never commit content that fails audits

**Remember: Quality over quantity. 205 perfect questions are better than 1000 mediocre ones.**

### For Developers

**MANDATORY: Follow [ENFORCEMENT-RULES.md](ENFORCEMENT-RULES.md) and [DEVELOPMENT-WORKFLOW.md](DEVELOPMENT-WORKFLOW.md)**

**Before every commit:**
- All tests pass: `npm test && npm run test:e2e`
- Build succeeds: `npm run build`
- Lint passes: `npm run lint`

**Before deploying:**
- Full test suite passes
- All audit scripts pass
- PWA functionality tested
- Responsive design verified

## 🎯 Quality Metrics

**Current Standards (Must Maintain):**
- ✅ 100% of questions are unambiguous
- ✅ 99% of MCQ questions have curated distractors
- ✅ 50%+ include misspelling-based distractors
- ✅ 0 questions fail automated audits
- ✅ All content is age-appropriate
- ✅ All content uses UK English

**These metrics are monitored and enforced through automated audits.**

## 📞 Support

For questions about:
- **Content quality:** See [CONTENT-QUALITY-STANDARDS.md](CONTENT-QUALITY-STANDARDS.md)
- **Audit failures:** Run `npm run audit:all` to regenerate audit reports
- **Technical issues:** See [spec.md](spec.md)

---

**Built with ❤️ for Primary 4 students learning UK English**
