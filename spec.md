# Project Specification: P4P Simple Spelling App

Development of a "Local-First" educational web application for primary school students to master spelling and dictation.

## Core Principles
- **Privacy First**: No server-side storage. All data (progress, scores, settings) persists in `localStorage`.
- **Scholar's Desk Aesthetic**: Tang Dynasty-inspired design (KaiTi fonts, Cinnabar colors, ink-stroke accents).
- **Spaced Repetition**: Automatic scheduling of missed items for review using an SM-2 inspired algorithm.
- **Natural Voice**: High-quality TTS using Google Cloud Neural2 voices (with browser fallback).

## Technical Architecture
- **Framework**: React 18 (Vite, TypeScript).
- **UI Library**: Material UI (MUI) 6.
- **State Management**: React State/Context (currently local component state in main containers).
- **Spaced Repetition**: Located in `src/utils/spacedRepetition.ts`.
- **Speech Engine**: Located in `src/utils/speech.ts`.

## Key Features
1. **Dashboard**: Lesson selection, progress tracking (Honey Jar XP), history log, and revision alerts.
2. **Spelling Mode**: Flashcard-style practice for specific phrases.
3. **Dictation Mode**: Full passage practice with intelligent punctuation checking and tiered scoring (2pts first try, 1pt retry).
4. **Revision Mode**: Dedicated session for items due for review according to the spaced repetition schedule.

## AI Interaction Rules (The Constraints)
1. **Anchor with Static Spec**: This file (`spec.md`) is the source of truth.
2. **Explicit Context Tagging**: AI must be surgical in file access.
3. **Plan, Then Execute**: AI must provide an `implementation_plan.md` before coding.
4. **Test-Driven Execution**: Implement Vitest tests for new logic before implementation.
5. **Session Hygiene**: Keep sessions short and focused on a single task.
