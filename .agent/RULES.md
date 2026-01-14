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
| Version & changelog | `src/data/version.ts` |
| TTS backend | `functions/api/tts.ts` |
| Speech utility | `src/utils/speech.ts` |
| Dashboard | `src/components/Dashboard.tsx` |
| Spelling mode | `src/components/SpellingMode.tsx` |
| Dictation mode | `src/components/DictationMode.tsx` |

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
| `p4_history` | Score history |
| `p4_last_version` | Last seen app version |
| `p4_onboarding_v2_done` | Onboarding completion |

## Deployment Notes
- Push to `main` triggers Cloudflare Pages deployment
- `wrangler.toml` only needs: name, compatibility_date, pages_build_output_dir
- Do NOT add `command` field to wrangler.toml (not supported)
