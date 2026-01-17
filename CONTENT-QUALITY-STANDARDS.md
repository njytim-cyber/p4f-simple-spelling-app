# Content Quality Standards

**Last Updated:** January 16, 2026
**Status:** 📋 **MANDATORY - ALL NEW CONTENT MUST FOLLOW THESE RULES**

---

## Table of Contents

1. [Universal Principles](#universal-principles)
2. [Vocabulary Items](#vocabulary-items)
3. [Grammar Questions](#grammar-questions)
4. [Editing Exercises](#editing-exercises)
5. [MCQ Distractor Generation](#mcq-distractor-generation)
6. [Quality Assurance Checklist](#quality-assurance-checklist)

---

## Universal Principles

### Rule 1: The Golden Rule of Unambiguity
**Every question MUST have exactly ONE correct answer that can be determined from the given context.**

❌ **FORBIDDEN:**
```typescript
example: 'The word "immediate" is commonly used in writing.'
// Problem: ANY word could fit this sentence
```

✅ **REQUIRED:**
```typescript
example: 'We need an immediate response to this emergency.'
// Only "immediate" makes sense in this context
```

### Rule 2: Context is King
**Every item must provide sufficient context for a 10-year-old to determine the answer without prior knowledge of the word.**

### Rule 3: No Meta-References
**Never reference the word itself or talk ABOUT the word. Use the word IN context.**

❌ **FORBIDDEN:**
- "The word 'X' is..."
- "Correct spelling of 'X' is..."
- "X is commonly used when..."

✅ **REQUIRED:**
- Use the word naturally in a sentence
- Show meaning through context
- Demonstrate real-world usage

### Rule 4: Age-Appropriate Language
**All content must be suitable for Primary 4 students (age 10):**
- Use simple, clear language
- Avoid adult themes
- Use relatable scenarios (school, family, nature, sports, daily life)
- No violence, politics, religion, or controversial topics

### Rule 5: UK English Standard
**All content uses UK English spelling and grammar:**
- colour (not color)
- realise (not realize)
- behaviour (not behavior)
- emphasise (not emphasize)

---

## Vocabulary Items

### Mandatory Structure
```typescript
{
    id: string,              // Format: 'v###' (v1, v2, v205)
    word: string,            // Target word in lowercase
    meaning: string,         // Clear, age-appropriate definition
    example: string,         // Sentence demonstrating usage
    level: string,           // 'p4' for Primary 4
    wrong_answers: string[]  // EXACTLY 3 curated distractors
}
```

### Rule V1: Example Sentence Requirements

**MUST:**
- ✅ Use the word in a natural, realistic sentence
- ✅ Provide enough context to infer meaning
- ✅ **Be at least 10 words long (MINIMUM) and no more than 25 words**
- ✅ Use proper punctuation and capitalization
- ✅ Make sense to a 10-year-old

**MUST NOT:**
- ❌ Reference the word itself ("The word X...")
- ❌ Be a generic template ("X is important")
- ❌ Use the word in a circular definition
- ❌ Be too vague or abstract
- ❌ Contain multiple possible answers

### Rule V2: Meaning Requirements

**MUST:**
- ✅ Be clear and age-appropriate
- ✅ Use simple language
- ✅ Be 5-30 words long
- ✅ Avoid using the target word itself

**MUST NOT:**
- ❌ Use complex jargon
- ❌ Be overly generic ("relating to or involving X")
- ❌ Be circular ("X means X")
- ❌ Reference common misspellings

### Rule V3: Word Selection Criteria

**Include words that:**
- ✅ Are commonly misspelled by 10-year-olds
- ✅ Have clear, demonstrable meanings
- ✅ Can be used in age-appropriate contexts
- ✅ Follow UK English spelling conventions

**Exclude words that:**
- ❌ Are too abstract for age 10
- ❌ Require specialized knowledge
- ❌ Have multiple unrelated meanings
- ❌ Cannot be contextualized appropriately

### Examples of Quality Vocabulary Items

#### ✅ EXCELLENT Example
```typescript
{
    id: 'v1',
    word: 'separate',
    meaning: 'forming or viewed as a unit apart or by itself',
    example: 'Please keep the raw meat separate from the vegetables.',
    level: 'p4',
    wrong_answers: ['separat', 'desperate', 'earth']
}
```

**Why this works:**
- Example shows clear usage in context
- Meaning is age-appropriate
- Context makes answer unambiguous
- Distractors include misspelling + confusables

#### ✅ EXCELLENT Example
```typescript
{
    id: 'v8',
    word: 'disappear',
    meaning: 'to cease to be visible',
    example: 'The magician made the rabbit disappear.',
    level: 'p4',
    wrong_answers: ['disapear', 'disappoint', 'lightning']
}
```

**Why this works:**
- Relatable scenario (magic show)
- Clear demonstration of meaning
- Only one word fits the context
- Mix of misspelling and similar words

#### ❌ POOR Example
```typescript
{
    id: 'v999',
    word: 'important',
    meaning: 'of great significance or value',
    example: 'Correct spelling of "important" is important.',
    level: 'p4',
    wrong_answers: ['bicycle', 'queue', 'rhythm']
}
```

**Problems:**
- ❌ Meta-reference to the word itself
- ❌ Circular/tautological example
- ❌ Random distractors (not curated)
- ❌ No contextual meaning shown

---

## Grammar Questions

### Mandatory Structure
```typescript
{
    topic: string,              // Grammar concept being tested
    question: string,           // Clear question with context
    correct_answer: string,     // Single correct answer
    wrong_answers: string[],    // EXACTLY 3 plausible wrong answers
    explanation: string,        // Why the answer is correct
    hint: string               // Subtle guidance (not giving away answer)
}
```

### Rule G1: Topic Clarity

**Topics must be specific:**
- ✅ "Possessive Apostrophes"
- ✅ "Subject-Verb Agreement"
- ✅ "Past Tense Formation"

**Not vague:**
- ❌ "Grammar"
- ❌ "Punctuation"
- ❌ "Spelling"

### Rule G2: Question Context Requirements

**Every question MUST include sufficient context to eliminate ambiguity.**

**CRITICAL: Minimum Question Length**
- ✅ **Every grammar question MUST be at least 10 words long (MINIMUM)**
- ✅ Questions shorter than 10 words lack sufficient context
- ✅ Count includes all words in the question, including the blank
- ✅ Example: "Let's go _____." is only 3 words - FORBIDDEN!
- ✅ Example: "I saw a dog playing in the park. This is the dog's bone." is 13 words - GOOD!

#### Example: Possessive Apostrophes

❌ **AMBIGUOUS:**
```typescript
question: "Which is correct?"
// Problem: No context - could be singular or plural
```

✅ **UNAMBIGUOUS:**
```typescript
question: "I saw a dog playing in the park. This is the dog's bone."
// Context establishes singular possession
```

✅ **UNAMBIGUOUS:**
```typescript
question: "At the swimming pool, the ladies' changing rooms are always busy."
// Context establishes plural possession (multiple ladies)
```

### Rule G3: Answer Options

**All options must be:**
- ✅ Grammatically plausible at first glance
- ✅ Related to the topic being tested
- ✅ Similar in format and length
- ✅ Free from obvious giveaways

**Wrong answers should test:**
- Common misconceptions
- Typical student errors
- Similar-looking constructions
- Related but incorrect rules

### Rule G4: Explanations

**Must:**
- ✅ Explain WHY the answer is correct
- ✅ Reference the grammar rule
- ✅ Use simple, clear language
- ✅ Be 1-3 sentences

**Example:**
```typescript
explanation: "We use 'dog's' (singular possessive) because there is only one dog. The apostrophe comes before the 's' to show that the bone belongs to that one dog."
```

### Rule G5: Hints

**Must:**
- ✅ Guide without revealing
- ✅ Point to relevant grammar rule
- ✅ Be genuinely helpful
- ✅ Not give away the answer

**Example:**
```typescript
hint: "Think about whether there is one or more than one. Where does the apostrophe go for singular possession?"
```

---

## Editing Exercises

### Mandatory Structure
```typescript
{
    id: string,              // Format: 'e###'
    title: string,           // Descriptive title
    passage: string,         // Text with {wrong|correct} pairs
    totalMistakes: number,   // Count of error pairs
    level: string           // Difficulty level
}
```

### Rule E1: Error Pair Format

**STRICT FORMAT:**
```typescript
{wrong_word|correct_word}
```

**Rules:**
- ✅ Wrong version comes FIRST
- ✅ Correct version comes SECOND
- ✅ Use pipe character `|` as separator
- ✅ No spaces inside braces
- ✅ Both versions must be different

### Rule E2: Error Types

**Include diverse error types:**
- Spelling mistakes (common confusions)
- Homophones (their/there/they're)
- UK/US spelling (colour/color)
- Common typos (teh/the)
- Double consonants (begining/beginning)
- Silent letters (seperate/separate)

**Forbidden:**
- ❌ Identical pairs: `{word|word}`
- ❌ Obvious nonsense: `{xyzabc|word}`
- ❌ Rare/obscure words
- ❌ Multiple errors in same word

### Rule E3: Error Pair Quality Checks

**Before adding ANY error pair, verify:**

1. **Are they actually different?**
   ```typescript
   ❌ {emphasised|emphasised}  // FORBIDDEN - identical
   ✅ {emphasied|emphasised}   // CORRECT - missing 's'
   ```

2. **Is the error realistic?**
   ```typescript
   ❌ {xqzword|word}      // Not a real mistake
   ✅ {recieve|receive}   // Common ie/ei confusion
   ```

3. **Is it pedagogically valuable?**
   ```typescript
   ❌ {teh|the}          // Too trivial (obvious typo)
   ✅ {their|there}      // Valuable (common confusion)
   ```

### Rule E4: Passage Requirements

**Must:**
- ✅ Be coherent and interesting
- ✅ Use age-appropriate topics
- ✅ Flow naturally with errors
- ✅ Be 100-300 words long
- ✅ Have 8-15 error pairs

**Must not:**
- ❌ Have awkward phrasing
- ❌ Be boring or preachy
- ❌ Overload with errors (too dense)
- ❌ Use adult themes

### Rule E5: Audit Requirements

**MANDATORY: Run audit before committing:**
```bash
node audit-editing.cjs
```

**Must pass:**
- All pairs have different wrong/correct
- No empty pairs
- No formatting errors
- No duplicate mistakes in same passage

---

## MCQ Distractor Generation

### ⚠️ CRITICAL UPDATE: Lessons from Real Exam Analysis

**Date Added:** January 16, 2026

After analyzing ambiguity issues and studying real Primary exam questions, we've identified the **fundamental problem** with fill-in-the-blank vocabulary MCQs:

**❌ THE PROBLEM: True Synonyms are Inherently Ambiguous**

Fill-in-the-blank questions using near-synonyms will ALWAYS have ambiguity:
- "recover/heal/recuperate" - all work in illness contexts
- "surrender/yield/submit/capitulate" - all work in defeat contexts
- "achieve/accomplish/attain" - all work in success contexts

**Even antonyms can fail:**
- "The father watched his daughter/son perform" - both work!

### ✅ WHAT ACTUALLY WORKS: Real Exam Strategies

Based on analysis of successful Primary-level exam questions:

#### Strategy 1: Domain-Specific Vocabulary

Use words from **different domains** even if semantically related:

**✅ EXCELLENT Example:**
```typescript
{
    word: 'deteriorating',
    example: 'The patient\'s health was deteriorating despite treatment.',
    wrong_answers: ['depreciating', 'disintegrating', 'dissipating']
}
```

**Why this works:**
- `deteriorating` → health, conditions, quality (MEDICAL domain)
- `depreciating` → currency, assets (FINANCIAL domain)
- `disintegrating` → physical objects breaking (PHYSICAL domain)
- `dissipating` → dispersing, fading (DISPERSAL domain)

Each word belongs to a **specific usage domain**, not interchangeable!

#### Strategy 2: Strong Collocations

Use fixed expressions where only ONE word commonly pairs:

**✅ EXCELLENT Example:**
```typescript
{
    word: 'profusely',
    example: 'The proud grandfather praised him profusely for the excellent performance.',
    wrong_answers: ['modestly', 'unanimously', 'consecutively']
}
```

**Why this works:**
- "praise profusely" is a **strong collocation** (natural pairing)
- "praise modestly" is contradictory
- "praise unanimously" is grammatically odd
- "praise consecutively" doesn't make sense

#### Strategy 3: Directional Opposition

Include clear directional opposites where context indicates direction:

**✅ EXCELLENT Example:**
```typescript
{
    word: 'dampened',
    example: 'Leo\'s confidence to win was dampened when he saw how good his opponent was.',
    wrong_answers: ['inflated', 'elevated', 'deepened']
}
```

**Why this works:**
- Context shows confidence **decreased** (negative direction)
- `dampened` = decreased (matches context)
- `inflated/elevated/deepened` = increased (opposite direction)
- Clear directional cue makes ONE answer obvious

#### Strategy 4: Functional Categories

Use words with **different logical functions**:

**✅ EXCELLENT Example:**
```typescript
{
    word: 'Moreover',
    example: 'The weather was terrible. Moreover, we forgot our raincoats.',
    wrong_answers: ['Therefore', 'Meanwhile', 'Regardless']
}
```

**Why this works:**
- `Moreover` = addition/continuation
- `Therefore` = conclusion/result
- `Meanwhile` = simultaneous action
- `Regardless` = contrast/concession

Completely different logical roles!

### ❌ WHAT DOESN'T WORK: Strategies to AVOID

#### ❌ Near-Synonyms (Even with Context)

**FORBIDDEN Example:**
```typescript
{
    word: 'daughter',
    example: 'The proud father watched his daughter perform brilliantly on stage.',
    wrong_answers: ['girl', 'child', 'offspring']  // ❌ ALL FIT!
}
```

**Why this fails:** All four words work perfectly in this context. No amount of context can fix true synonym ambiguity.

#### ❌ Random Unrelated Words

**FORBIDDEN Example:**
```typescript
{
    word: 'library',
    example: 'We borrowed books from the library.',
    wrong_answers: ['bicycle', 'thunder', 'happiness']  // ❌ TOO EASY!
}
```

**Why this fails:** Too obvious. No educational value. Students can guess without understanding "library".

#### ❌ Context-Only Dependency

**FORBIDDEN Example:**
```typescript
{
    word: 'bark',
    example: 'The dog began to bark when strangers approached.',
    wrong_answers: ['meow', 'chirp', 'hiss']
}
```

**Why this is risky:** This tests reading comprehension ("What animal is it?") more than vocabulary knowledge ("What does bark mean?"). While this might work, prefer domain-specific or collocation strategies.

### 🎯 NEW MANDATORY RULE: The Domain/Collocation Test

**Before accepting ANY vocabulary item, verify ONE of these:**

1. ✅ **Domain Separation**: Each distractor belongs to a different usage domain
2. ✅ **Collocation Strength**: The correct answer forms a strong natural pairing
3. ✅ **Directional Opposition**: Context clearly indicates direction, correct answer matches
4. ✅ **Functional Distinction**: Words serve different logical/grammatical functions

**If NONE of the above apply → REJECT THE ITEM**

Words like recover/heal/recuperate, achieve/accomplish, surrender/yield **cannot be used** because they fail all four tests.

---

### CRITICAL DISTINCTION: Vocabulary vs Spelling Mode

**🎯 VOCABULARY MODE (Current):**
- **Purpose:** Test whether students understand WORD MEANING
- **Distractors:** Different words that could plausibly fit the context
- **Example:** "The children will ___ a sandcastle on the beach"
  - ✅ Correct: `build`
  - ❌ Distractors: `queue`, `reign`, `bruise` (different words, not misspellings)
- **Student must:** Understand what each word means to choose correctly

**✏️ SPELLING MODE (Future feature):**
- **Purpose:** Test whether students can spell words correctly
- **Distractors:** Common misspellings of the target word
- **Example:** "It is ___ to drink water to stay hydrated"
  - ✅ Correct: `necessary`
  - ❌ Distractors: `necessery`, `nesessary`, `neccesary` (misspellings)
- **Student must:** Recognize correct spelling pattern

**⚠️ IMPORTANT: All vocabulary items use VOCABULARY-FOCUSED distractors, NOT spelling-focused!**

### Rule D1: Vocabulary Mode Distractor Strategy

**Every vocabulary item MUST have EXACTLY 3 curated distractors that test VOCABULARY COMPREHENSION:**

#### Tier 1: Contextually Plausible Words (Priority)
Select 2-3 different words that could plausibly fit similar contexts:
- Same part of speech (verb for verb, noun for noun)
- Similar difficulty level
- Related semantic field when appropriate
- Example: For `build` (construction context) → `queue`, `reign`, `bruise`
- Example: For `disappear` (visibility context) → `disappoint`, `discover`, `discuss`

#### Tier 2: Similar Meaning but Wrong Fit
Include words with related but distinct meanings:
- Words from the same topic area
- Words students might confuse
- Example: For `immediately` (time) → `frequently`, `eventually`, `recently`

#### Tier 3: Phonetically Similar (Optional)
If helpful, include words that sound similar but have different meanings:
- Homophones or near-homophones
- Example: For `throne` → `thrown`, `thorn`
- Use sparingly - focus on meaning, not sound

### Rule D2: Vocabulary Mode Distractor Quality Checks

**Each distractor MUST:**
- ✅ Be a different word from the correct answer (NOT a misspelling)
- ✅ Be a valid, correctly-spelled English word
- ✅ Be plausible in similar contexts (but not THIS context)
- ✅ Challenge student's understanding of word meanings
- ✅ **Test vocabulary knowledge, NOT spelling knowledge**

**Each distractor MUST NOT:**
- ❌ Match the correct answer
- ❌ Be another correct answer in context
- ❌ Be a misspelling of any word
- ❌ Be nonsensical or random
- ❌ Be from a completely different category (e.g., verb when answer is noun)
- ❌ Duplicate another distractor
- ❌ Be too easy to eliminate without reading the context

### Rule D3: Distribution Standards

**For a question bank of 205 items:**
- ✅ **100% must have vocabulary-focused distractors** (different words, not misspellings)
- ✅ **0% should use spelling-focused distractors** (misspellings belong in Spelling Mode)
- ✅ Minimum 90% must have curated (hand-picked) distractors
- ✅ No more than 2% can use random distractors
- ✅ All distractors must be validated by audit

### Rule D4: TRICKY Vocabulary Distractor Selection Strategies

**🎯 GOAL: Distractors must be CHALLENGING, not obvious!**

Students should need to understand SUBTLE DIFFERENCES in word meaning to choose correctly. Distractors should be close enough to require careful thought.

**PREFERRED STRATEGIES (in priority order):**

1. **Near-Synonyms with Subtle Differences**
   - Words that mean ALMOST the same but have important nuances
   - Example: `construct` → `build`, `create`, `assemble` (all similar, but different connotations)
   - Example: `confident` → `certain`, `assured`, `bold` (all positive qualities but different)
   - ⚠️ NOT obvious antonyms! ("beginning"→"ending" is too easy)

2. **Commonly Confused Words (Most Effective!)**
   - Words students frequently mix up in real usage
   - Example: `affect` → `effect`, `impact`, `influence`
   - Example: `compliment` → `complement`, `supplement`, `comment`
   - Example: `continuous` → `continual`, `constant`, `frequent`

3. **Same Semantic Field with Overlapping Usage**
   - Words from the same topic that could seem plausible
   - Example: `examine` → `inspect`, `observe`, `investigate`
   - Example: `peculiar` → `unusual`, `strange`, `unique`
   - Must require understanding of connotation/usage differences

4. **Register/Formality Variations**
   - Words with similar meanings but different formality levels
   - Example: `purchase` → `buy`, `acquire`, `obtain`
   - Example: `commence` → `begin`, `start`, `initiate`

**PROHIBITED PRACTICES:**

**NEVER:**
- ❌ Use misspellings as distractors (belongs in Spelling Mode)
- ❌ Use completely random words with no relationship
- ❌ Select words just because they're similar length
- ❌ Use words from different parts of speech (e.g., verb when answer is adjective)
- ❌ Reuse same distractors across multiple questions
- ❌ Use offensive or inappropriate words

### Examples of TRICKY Vocabulary-Focused Distractors

#### ✅ EXCELLENT - Near-Synonyms (TRICKY!)
```typescript
{
    word: 'construct',
    example: 'The engineers will construct a new bridge across the river.',
    wrong_answers: ['build', 'create', 'assemble']
}
```
**Why this is TRICKY:**
- All four words mean creating/making something
- `build`, `create`, `assemble` are all plausible with "bridge"
- Student must understand "construct" is most formal/technical
- Requires understanding subtle connotation differences

#### ✅ EXCELLENT - Commonly Confused (TRICKY!)
```typescript
{
    word: 'continuous',
    example: 'We heard the continuous sound of rain throughout the night.',
    wrong_answers: ['continual', 'constant', 'repeated']
}
```
**Why this is TRICKY:**
- All four words relate to ongoing actions
- Students commonly confuse "continuous" and "continual"
- `constant`, `repeated` also fit grammatically
- Requires precise understanding of "without stopping"

#### ✅ EXCELLENT - Semantic Overlap (TRICKY!)
```typescript
{
    word: 'examine',
    example: 'The doctor will examine the patient carefully.',
    wrong_answers: ['inspect', 'observe', 'investigate']
}
```
**Why this is TRICKY:**
- All are verbs about looking/checking carefully
- Doctors could theoretically do all four actions
- Student must recognize "examine" is the medical term
- Requires understanding professional/technical usage

#### ✅ EXCELLENT - Register Variation (TRICKY!)
```typescript
{
    word: 'purchase',
    example: 'We will purchase the tickets online tomorrow.',
    wrong_answers: ['buy', 'obtain', 'acquire']
}
```
**Why this is TRICKY:**
- All mean getting/obtaining something
- All work grammatically with "tickets"
- Student must recognize "purchase" is formal for "buy"
- Tests understanding of formality levels

#### ❌ POOR Vocabulary Distractors (These are SPELLING distractors!)
```typescript
{
    word: 'necessary',
    wrong_answers: ['necessery', 'nesessary', 'neccesary']
}
```
**Why this is WRONG for Vocabulary Mode:**
- All are misspellings, not different words
- Tests spelling ability, not word meaning
- Belongs in Spelling Mode, NOT Vocabulary Mode

#### ❌ POOR Vocabulary Distractors (Random words)
```typescript
{
    word: 'beginning',
    wrong_answers: ['begining', 'lightning', 'definite']
}
```
**Why this is WRONG:**
- `begining` - misspelling (wrong for vocab mode)
- `lightning`, `definite` - completely random
- No semantic relationship
- Too easy to eliminate

---

## Quality Assurance Checklist

### Before Committing New Content

**1. Run ALL Audit Scripts:**
```bash
node audit-grammar.cjs
node audit-vocabulary-simple.cjs
node audit-vocab-distractors.cjs
node audit-editing.cjs
```

**All must return: `✅ PASS`**

**2. Manual Review Checklist:**

#### For Vocabulary Items:
- [ ] Example uses word in natural context (not meta-reference)
- [ ] Only ONE word can complete the sentence
- [ ] Meaning is age-appropriate and clear
- [ ] 3 curated distractors included
- [ ] At least 1 distractor is a misspelling
- [ ] No distractor matches correct answer
- [ ] Sentence is 6-20 words
- [ ] UK English spelling used

#### For Grammar Questions:
- [ ] Question includes sufficient context
- [ ] Only ONE answer is grammatically correct
- [ ] Context eliminates all ambiguity
- [ ] Explanation references the grammar rule
- [ ] Hint guides without revealing
- [ ] All options are plausibly formatted
- [ ] Wrong answers reflect common errors

#### For Editing Exercises:
- [ ] All {wrong|correct} pairs are different
- [ ] Errors are realistic and common
- [ ] Passage is coherent and interesting
- [ ] 8-15 error pairs per passage
- [ ] Age-appropriate topic
- [ ] No identical pairs (run audit!)

**3. Test in Application:**
- [ ] Load question in dev environment
- [ ] Verify it displays correctly
- [ ] Confirm answer validation works
- [ ] Check that explanations/hints appear
- [ ] Test on different screen sizes

**4. Peer Review (if available):**
- [ ] Have another educator review
- [ ] Confirm age-appropriateness
- [ ] Verify no ambiguity exists
- [ ] Check for cultural sensitivity

---

## Content Addition Workflow

### Step 1: Create Content
Follow all rules in this document strictly.

### Step 2: Self-Review
Go through relevant checklist above.

### Step 3: Run Audits
```bash
# For vocabulary changes:
node audit-vocabulary-simple.cjs
node audit-vocab-distractors.cjs

# For grammar changes:
node audit-grammar.cjs

# For editing changes:
node audit-editing.cjs
```

### Step 4: Fix Issues
If any audit fails, fix ALL issues before proceeding.

### Step 5: Build Test
```bash
npm run build
```
Must complete without errors.

### Step 6: Manual Testing
```bash
npm run dev
```
Test new content in application.

### Step 7: Commit
Only commit if ALL checks pass.

---

## Emergency Content Removal

**If content is found to be ambiguous, inappropriate, or incorrect:**

1. **Immediate Action:**
   - Remove or fix the problematic content
   - Document the issue in commit message

2. **Run Audits:**
   - Verify fix with appropriate audit script
   - Ensure all audits still pass

3. **Update Tests:**
   - If issue affected multiple items, audit entire section
   - Document pattern to avoid in future

4. **Notify Team:**
   - Document the issue and fix
   - Update this guide if new pattern identified

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-01-16 | Initial standards document |

---

## Enforcement

**These standards are MANDATORY.**

- ✅ All content MUST pass automated audits
- ✅ All content MUST follow these rules
- ❌ Content that violates these rules MUST NOT be committed
- ❌ Exceptions require documented justification and approval

**Remember: Quality over quantity. 205 perfect questions are better than 1000 mediocre ones.**
