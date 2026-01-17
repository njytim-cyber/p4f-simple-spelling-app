---
description: Bump the application version for a new release
---

# Version Bump Workflow

When releasing a new version, follow these steps:

## Step 1: Review and Update Documentation (if needed)

Before bumping the version, check if documentation needs updating:

**Update if any of these apply:**
- ✅ New features or modes added
- ✅ Architecture changes (new components, data structures)
- ✅ New localStorage keys or data files
- ✅ Breaking changes

**Files to check:**
- `spec.md` - Update Key Features and Technical Architecture sections
- `.agent/RULES.md` - Update Key Files table, localStorage keys, Content Guidelines

**Skip documentation update if:**
- ❌ Only bug fixes or performance optimizations
- ❌ UI polish (colors, spacing, fonts)
- ❌ Refactoring with same interface

## Step 2: Update Version Files

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

## Step 3: Build and Commit

1. **Run build** to catch any TypeScript errors:
   ```bash
   npm run build
   ```

2. **Commit with conventional message**:
   ```bash
   git add .
   git commit -m "chore: bump version to X.Y.Z and update changelog"
   ```

3. **Push to trigger deployment** (if ready):
   ```bash
   git push
   ```
