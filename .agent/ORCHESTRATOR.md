# P4F Spelling App - Orchestrator

This is a React + TypeScript spelling and dictation practice app for Primary 4 students.

## Quick Commands (Natural Language → Action)

| You say... | I'll do... |
|------------|-----------|
| "Add Term 2 content" | Follow `/add-content` workflow |
| "Deploy" or "Push to prod" | Follow `/deploy` workflow |
| "Bump version" or "Release" | Follow `/bump-version` workflow |
| "Fix the UI" | Follow `/fix-ui` workflow |
| "Add a new voice" | Edit `AVAILABLE_VOICES` in `src/utils/speech.ts` |
| "Change the TTS" | Edit `functions/api/tts.ts` |
| "Update the dashboard" | Edit `src/components/Dashboard.tsx` |

## Common Tasks

### Adding New Spelling Content
"Add spelling list 2.1 with these phrases: ..."
→ I'll add to `src/data/exercises.ts`

### Fixing Build Errors
"Build is failing"
→ I'll run `npm run build`, identify errors, and fix them

### UI Adjustments
"The header isn't aligned" or "Make it more compact on mobile"
→ I'll check the relevant component and adjust MUI sx props

### Voice/TTS Issues
"Voice isn't changing" or "TTS not working"
→ I'll check `speech.ts` and `functions/api/tts.ts`

## Project Context
- **Target users**: Primary 4 students in Singapore
- **Features**: Spelling practice, dictation with chunking, progress tracking
- **Voice**: Google Cloud Neural2 TTS with 9 voice options
- **Storage**: localStorage (no backend database)
