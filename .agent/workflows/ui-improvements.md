# UI Improvements Workflow

## Recent UI Changes (2026-01-16)

### Navigation Structure
- **Bottom Navigation**: Changed from 3 to 4 tabs
  - Spelling
  - Exercises
  - Revision (with sub-tabs)
  - About (with sub-tabs)

- **Removed from header**: About (ℹ️) and Activity History (📈) icon buttons
- **Exercises Dashboard**: Made Editing/Vocab/Grammar cards more obviously clickable with:
  - Borders and shadows
  - Hover effects (lift up on desktop)
  - Equal widths using `flex: 1`

### Revision Tab Features
- **Sub-tabs**:
  - Revision: Spaced repetition items
  - Activity History: Exercise log
- **Swipe gestures**: Left/right to switch between sub-tabs

### About Tab Features
- **Sub-tabs**:
  - About: App purpose, privacy, tech stack
  - What's New: Changelog
- **Swipe gestures**: Left/right to switch between sub-tabs

### ExerciseMode Header
- Added "Vocab" or "Grammar" label next to back button (matching Editing mode)

### EditingMode
- Raised red underline (`bottom: 2` instead of `bottom: 0`) to prevent touching answer input boxes

### Text Updates
- Dashboard header: "Ready to ace your spelling?" (removed "today")
- Exercises tab: "Pick a challenge and let's boost your skills!"

## Guidelines for Future UI Work

### Making Elements Clickable
Use this pattern for obvious clickability:
```tsx
sx={{
  border: '2px solid',
  borderColor: 'rgba(103, 80, 164, 0.2)',
  bgcolor: 'white',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  '&:hover': {
    borderColor: 'primary.main',
    boxShadow: '0 4px 12px rgba(103, 80, 164, 0.2)',
    transform: { md: 'translateY(-2px)' }
  }
}}
```

### Swipe Gesture Pattern
```tsx
// State
const touchStart = useRef<number | null>(null);
const touchEnd = useRef<number | null>(null);
const minSwipeDistance = 50;

// Handlers
const onTouchStart = (e: React.TouchEvent) => {
  touchEnd.current = null;
  touchStart.current = e.targetTouches[0].clientX;
}

const onTouchMove = (e: React.TouchEvent) => {
  touchEnd.current = e.targetTouches[0].clientX;
}

const onTouchEnd = () => {
  if (!touchStart.current || !touchEnd.current) return;
  const distance = touchStart.current - touchEnd.current;
  const isLeftSwipe = distance > minSwipeDistance;
  const isRightSwipe = distance < -minSwipeDistance;

  if (isLeftSwipe && tab === 0) setTab(1);
  if (isRightSwipe && tab === 1) setTab(0);
}

// Usage
<Box
  onTouchStart={onTouchStart}
  onTouchMove={onTouchMove}
  onTouchEnd={onTouchEnd}
>
  {/* Content */}
</Box>
```

### Tab Pattern
Use MUI Tabs with full-width sub-tabs:
```tsx
<Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
  <Tabs value={tab} onChange={(_, v) => setTab(v)}>
    <Tab label="First" sx={{ fontWeight: 'bold', flex: 1 }} />
    <Tab label="Second" sx={{ fontWeight: 'bold', flex: 1 }} />
  </Tabs>
</Box>
```
