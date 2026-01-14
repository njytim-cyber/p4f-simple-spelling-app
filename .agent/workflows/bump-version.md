---
description: Bump the application version for a new release
---

# Version Bump Workflow

When releasing a new version, update these 3 files:

## Files to Update

1. **`package.json`** - Line 4
   ```json
   "version": "X.Y.Z"
   ```

2. **`public/version.json`** - Line 2
   ```json
   "version": "X.Y.Z"
   ```

3. **`src/data/version.ts`**
   - Update `APP_VERSION` constant (line 6)
   - Add new changelog entry at top of `CHANGELOG` array (line 15+)
   
   ```typescript
   export const APP_VERSION = 'X.Y.Z';
   
   export const CHANGELOG: ChangelogEntry[] = [
       {
           version: 'X.Y.Z',
           date: 'DD Mon YYYY',
           title: '🎉 Title for this release',
           changes: [
               'Change 1',
               'Change 2',
           ],
       },
       // ... existing entries
   ];
   ```

## Versioning Guidelines
- **MAJOR** (X.0.0): Breaking changes
- **MINOR** (0.Y.0): New features
- **PATCH** (0.0.Z): Bug fixes
