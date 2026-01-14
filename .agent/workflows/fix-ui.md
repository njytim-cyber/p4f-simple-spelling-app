---
description: Fix UI alignment and styling issues
---

# UI Fix Workflow

## Key Files

| Component | File |
|-----------|------|
| Dashboard | `src/components/Dashboard.tsx` |
| Spelling Mode | `src/components/SpellingMode.tsx` |
| Dictation Mode | `src/components/DictationMode.tsx` |
| Voice Selector | `src/components/VoiceSelector.tsx` |
| Theme | `src/theme/theme.ts` |

## Common Alignment Fixes

### Vertical Centering
```typescript
// Parent container
sx={{ display: 'flex', alignItems: 'center' }}

// Text with line-height issues
sx={{ lineHeight: 1 }}

// ButtonBase centering
sx={{ display: 'flex', alignItems: 'center', lineHeight: 1 }}
```

### Container Width
```typescript
// Match width across pages
<Container maxWidth="sm">  // 600px max
<Container maxWidth="md">  // 900px max
```

### Mobile Responsiveness
- Use `size="small"` on chips/buttons
- Reduce padding: `px: 0.5, py: 0.25`
- Constrain menus: `maxWidth: 'calc(100vw - 32px)'`

## Verification
1. Test on desktop (large screen)
2. Test in Chrome DevTools mobile mode
3. Check Samsung Galaxy S8+ (360px) dimensions
