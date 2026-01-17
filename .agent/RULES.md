# P4F Spelling App - Project Rules

## Architecture
- **Framework**: React 18 + TypeScript + Vite
- **UI Library**: Material UI (MUI)
- **Hosting**: Cloudflare Pages with Functions
- **TTS**: Google Cloud Text-to-Speech Neural2 voices

## Key Files
| Purpose | File |
|---------|------|
| Exercises data | `src/data/exercises.ts` |
| Editing exercises | `src/data/editing-exercises.ts` |
| Vocabulary list | `src/data/vocabulary.ts` |
| Grammar questions | `src/data/grammar-exercises.ts` |
| Version & changelog | `src/data/version.ts` |
| Spaced repetition | `src/utils/spacedRepetition.ts` |
| TTS backend | `functions/api/tts.ts` |
| Speech utility | `src/utils/speech.ts` |
| Dashboard | `src/components/Dashboard.tsx` |
| Spelling mode | `src/components/SpellingMode.tsx` |
| Dictation mode | `src/components/DictationMode.tsx` |
| Editing mode | `src/components/EditingMode.tsx` |
| Vocab/Grammar mode | `src/components/ExerciseMode.tsx` |
| Exercises dashboard | `src/components/ExercisesDashboard.tsx` |
| Revision dashboard | `src/components/RevisionDashboard.tsx` |
| Revision mode | `src/components/RevisionMode.tsx` |

## UI Structure
The app has a **4-tab bottom navigation**:
1. **Spelling** - Traditional spelling exercises with dates
2. **Exercises** - Editing, Vocab, and Grammar modes (clickable cards)
3. **Revision** - Spaced repetition with 2 sub-tabs:
   - Revision: Shows due items for review
   - Activity History: Log of all completed exercises
4. **About** - App information with 2 sub-tabs:
   - About: Purpose, privacy, tech stack
   - What's New: Changelog

**Swipe gestures** work on both Revision and About sub-tabs for better mobile UX.

## Coding Standards
1. **Always run `npm run build`** before committing to catch TypeScript errors
2. **Remove unused imports** - TypeScript strict mode catches these
3. **Use MUI sx prop** for styling, not inline styles
4. **Line height matters** - Use `lineHeight: 1` for text in flex containers

## TTS Configuration
- Available voices defined in `src/utils/speech.ts` (`AVAILABLE_VOICES`)
- Voice preference stored in localStorage (`p4_voice_preference`)
- Backend passes voice to Google API in `functions/api/tts.ts`

## localStorage Keys
| Key | Purpose |
|-----|---------|
| `p4_voice_preference` | Selected voice ID |
| `p4_exercises_dates` | Custom test dates |
| `p4_spelling_history` | Score history across all modes |
| `p4_revision_data` | Spaced repetition schedule data |
| `p4_last_version` | Last seen app version |
| `p4_onboarding_complete` | Onboarding completion |
| `p4_active_tab` | Last active dashboard tab |

## Content Guidelines

### Spelling & Dictation
- **UK spelling** throughout (colour, realise, centre, favourite)
- Aligned to school curriculum dates
- 10 phrases per exercise typical

### Editing Exercises
- **4 paragraphs** per exercise
- **10 spelling errors** total (using `{wrong|correct}` markup)
- **UK spelling** throughout
- Draw from vocabulary list in `src/data/vocabulary.ts`
- Age-appropriate themes (p4=10yo, p5=11yo, p6=12yo, sec1=13yo, sec2=14yo)
- Common error patterns: double consonants, ie/ei, silent letters, homophones

### Vocabulary
- Each word includes: id, word, meaning, example, level
- Current: 170 P4-level words
- Target: 1000 words across all levels
- Words should reflect commonly misspelled terms
- Used for MCQ quizzes with fill-in-the-blank format

### Grammar
- MCQ format with multiple choice answers
- Each question includes: rank, topic, question, correct_answer, wrong_answers, explanation
- Current: 93 questions covering basic to advanced grammar
- Topics include: nouns, pronouns, adjectives, verbs, tenses, sentence structure, punctuation
- Explanations shown after correct answer to reinforce learning
- Hints shown after wrong attempts to guide students

## Deployment Notes
- Push to `main` triggers Cloudflare Pages deployment
- `wrangler.toml` only needs: name, compatibility_date, pages_build_output_dir
- Do NOT add `command` field to wrangler.toml (not supported)
