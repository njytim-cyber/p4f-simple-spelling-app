# Primary 4 Spelling & Grammar App

A comprehensive educational application for Primary 4 students (age 10) focusing on spelling, grammar, vocabulary, and editing skills using UK English standards.

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

See [AUDIT-SUMMARY.md](AUDIT-SUMMARY.md) for full audit details.

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

1. **Create content** following [CONTENT-QUALITY-STANDARDS.md](CONTENT-QUALITY-STANDARDS.md)
2. **Run audits:**
   ```bash
   node audit-grammar.cjs         # For grammar changes
   node audit-vocabulary-simple.cjs  # For vocabulary changes
   node audit-vocab-distractors.cjs  # For distractor changes
   node audit-editing.cjs         # For editing changes
   ```
3. **Verify build:** `npm run build`
4. **Test manually:** `npm run dev`
5. **Commit** only if all checks pass

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

- [CONTENT-QUALITY-STANDARDS.md](CONTENT-QUALITY-STANDARDS.md) - **MANDATORY** reading for content creators
- [AUDIT-SUMMARY.md](AUDIT-SUMMARY.md) - Question bank audit results including grammar details
- [DISTRACTOR-QUALITY-EVOLUTION.md](DISTRACTOR-QUALITY-EVOLUTION.md) - Complete history of MCQ distractor quality improvements
- [spec.md](spec.md) - Technical specifications

## 🤝 Contributing

### Adding New Content

1. **Read [CONTENT-QUALITY-STANDARDS.md](CONTENT-QUALITY-STANDARDS.md)** - Non-negotiable
2. Follow all rules for your content type
3. Run appropriate audit scripts
4. Verify build passes
5. Test in dev environment
6. Submit PR with audit results

### Code Contributions

1. Follow existing code style
2. Add tests for new features
3. Update documentation
4. Ensure all tests pass

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

**Before deploying:**
- Run full test suite: `npm test && npm run test:e2e`
- Run all audit scripts
- Verify build: `npm run build`
- Test PWA functionality
- Check responsive design

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
- **Audit failures:** Check [AUDIT-SUMMARY.md](AUDIT-SUMMARY.md)
- **Technical issues:** See [spec.md](spec.md)

---

**Built with ❤️ for Primary 4 students learning UK English**
