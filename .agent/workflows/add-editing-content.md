---
description: Add new editing exercises based on vocabulary words
---

# Add Editing Content Workflow

Editing exercises draw from the vocabulary list to create contextual spelling practice.

## Vocabulary Structure

Edit **`src/data/vocabulary.ts`** to add new vocabulary words.

```typescript
{
    id: 'v1',
    word: 'accommodation',
    meaning: 'a room, group of rooms, or building in which someone may live or stay',
    example: 'The hotel offered excellent accommodation for the guests.',
    level: 'p5'  // p4=10yo, p5=11yo, p6=12yo, sec1=13yo, sec2=14yo
}
```

## Exercise Structure

Edit **`src/data/editing-exercises.ts`** to add new editing exercises.

```typescript
'1.1': `Passage text here with {wrong|correct} markup for errors.

Second paragraph with more {erors|errors} to find.

Third paragraph continues the story with {mistakes|mistakes}.

Fourth paragraph concludes with final {corrections|corrections} needed.`
```

## Content Generation Rules

### Exercise Format
- **4 paragraphs** per exercise
- **10 spelling errors** total (distributed across paragraphs)
- **UK spelling** throughout (colour, realise, centre, etc.)
- **Contextual story** - paragraphs should flow naturally
- **Age-appropriate** themes and vocabulary

### Error Distribution
- **2-3 errors per paragraph** (varied distribution)
- **Use vocabulary words** from the vocabulary list
- **Common error patterns**:
  - Double consonants: `acommodation` → `accommodation`
  - ie/ei confusion: `beleive` → `believe`
  - Silent letters: `rythm` → `rhythm`
  - Vowel confusion: `seperate` → `separate`
  - Common homophones: `their/there/they're`

### Vocabulary Integration
1. Select 10 words from vocabulary list at appropriate level
2. Create errors that reflect common spelling mistakes
3. Build a coherent story using these words
4. Include context clues in the passage

### Writing Guidelines
- **Theme variety**: School, home, nature, adventure, sports
- **Sentence variety**: Mix simple, compound, and complex sentences
- **Natural dialogue**: Can include speech with proper punctuation
- **Engaging content**: Age-appropriate humor or interest

## Example Exercise

```typescript
'2.1': `Emily rushed to the library, feeling a sense of {urgancy|urgency} as her project was due tomorrow. She had been {procrastineting|procrastinating} all week, and now panic was setting in.

"I need to find information about ancient {civilisations|civilisations}," she whispered to the {librarean|librarian}. Ms Chen smiled kindly and pointed towards the history {section|sektion}.

Emily grabbed three books and settled into a quiet corner. The first chapter was {facinating|fascinating}, describing how people lived thousands of years ago. She began taking {carefull|careful} notes.

By closing time, Emily felt much better. She had gathered enough {matereial|material} for an excellent report. Walking home, she made a mental note to never leave things to the last {minit|minute} again!`
```

## Process

1. **Select vocabulary**: Choose 10 words at target level
2. **Plan story**: Outline a 4-paragraph narrative
3. **Write passage**: Create natural text using vocabulary
4. **Add errors**: Replace correct words with common mistakes using `{wrong|correct}` format
5. **Review**: Ensure 10 errors total, UK spelling, engaging content
6. **Test**: Try the exercise yourself to check difficulty

## Quality Checklist

- [ ] Exactly 10 errors marked with `{wrong|correct}`
- [ ] 4 paragraphs with natural flow
- [ ] UK spelling throughout
- [ ] Age-appropriate vocabulary and themes
- [ ] Errors reflect common spelling mistakes
- [ ] Story is engaging and coherent
- [ ] Proper punctuation and grammar (except intended errors)
