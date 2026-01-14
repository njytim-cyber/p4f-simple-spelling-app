---
description: Add new spelling and dictation content (e.g., Term 2)
---

# Add Content Workflow

Edit **`src/data/exercises.ts`** to add new exercises.

## Exercise Structure

```typescript
{
    id: '2.1',                    // Unique ID (Term.Week format)
    title: '2.1',                 // Display title in dashboard
    date: '01 Apr 2026',          // Default test date
    spelling: [
        { id: 's1', phrase: 'phrase one' },
        { id: 's2', phrase: 'phrase two' },
        // ... typically 10 phrases per week
    ],
    dictation: 'Full dictation passage with proper punctuation. Include commas, full stops, and capital letters!'
}
```

## Adding a New Term

1. Open `src/data/exercises.ts`
2. Find the `EXERCISES` array
3. Add new exercise objects after existing ones
4. Each exercise needs:
   - Unique `id` (e.g., '2.1', '2.2', ...)
   - Display `title`
   - Test `date` (format: 'DD Mon YYYY')
   - Array of `spelling` items with unique `id` and `phrase`
   - `dictation` string with the full passage

## Notes
- Dashboard automatically displays all exercises
- Dates can be edited by users in the UI
- Dictation is auto-chunked by punctuation marks
- Spelling phrases should include any tricky punctuation the student needs to learn
