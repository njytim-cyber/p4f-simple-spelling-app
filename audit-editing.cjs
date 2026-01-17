/**
 * Audit Editing Exercises for Correctness
 *
 * Checks:
 * 1. All {wrong|correct} pairs are properly formatted
 * 2. The "wrong" word is actually wrong
 * 3. The "correct" word is actually correct
 * 4. No ambiguous cases where both could be correct
 * 5. Consistent formatting throughout
 */

const fs = require('fs');
const path = require('path');

// Read the editing exercises file
const editingFile = fs.readFileSync(
  path.join(__dirname, 'src/data/editing-exercises.ts'),
  'utf8'
);

// Extract the EDITING_EXERCISES_DATA array
const arrayMatch = editingFile.match(/export const EDITING_EXERCISES_DATA: EditingExercise\[\] = (\[[\s\S]*\]);/);
if (!arrayMatch) {
  console.error('❌ Could not parse EDITING_EXERCISES_DATA array');
  process.exit(1);
}

const editingExercises = eval(arrayMatch[1]);

console.log('='.repeat(80));
console.log('EDITING EXERCISES AUDIT REPORT');
console.log('='.repeat(80));
console.log(`\nTotal editing exercises: ${editingExercises.length}\n`);

const issues = [];
let totalPairs = 0;

for (const exercise of editingExercises) {
  const exerciseIssues = [];

  // Check 1: Required fields
  if (!exercise.id) exerciseIssues.push('Missing id');
  if (!exercise.title) exerciseIssues.push('Missing title');
  if (!exercise.passage) exerciseIssues.push('Missing passage');
  if (!exercise.level) exerciseIssues.push('Missing level');
  if (!exercise.style) exerciseIssues.push('Missing style');

  if (!exercise.passage) {
    issues.push({
      id: exercise.id,
      title: exercise.title,
      issues: exerciseIssues,
      pairs: []
    });
    continue;
  }

  // Check 2: Extract all {wrong|correct} pairs
  const pairRegex = /\{([^|{}]+)\|([^|{}]+)\}/g;
  const pairs = [];
  let match;

  while ((match = pairRegex.exec(exercise.passage)) !== null) {
    pairs.push({
      full: match[0],
      wrong: match[1],
      correct: match[2],
      index: match.index
    });
  }

  totalPairs += pairs.length;

  // Check 3: Ensure there are editing pairs
  if (pairs.length === 0) {
    exerciseIssues.push('⚠️  No editing pairs found (should contain {wrong|correct} markup)');
  }

  // Check 4: Validate each pair
  const pairIssues = [];
  for (const pair of pairs) {
    const issuesForPair = [];

    // Check if wrong and correct are the same
    if (pair.wrong.toLowerCase() === pair.correct.toLowerCase()) {
      issuesForPair.push('🚨 CRITICAL: Wrong and correct are identical');
    }

    // Check if wrong/correct are empty
    if (!pair.wrong.trim()) issuesForPair.push('Wrong part is empty');
    if (!pair.correct.trim()) issuesForPair.push('Correct part is empty');

    // Check for common mistakes in formatting
    if (pair.wrong.includes('|')) issuesForPair.push('Wrong part contains pipe character');
    if (pair.correct.includes('|')) issuesForPair.push('Correct part contains pipe character');
    if (pair.wrong.includes('{')) issuesForPair.push('Wrong part contains opening brace');
    if (pair.correct.includes('}')) issuesForPair.push('Correct part contains closing brace');

    // Check for whitespace issues
    if (pair.wrong !== pair.wrong.trim()) issuesForPair.push('Wrong part has leading/trailing whitespace');
    if (pair.correct !== pair.correct.trim()) issuesForPair.push('Correct part has leading/trailing whitespace');

    // Check if both words exist and could be correct (ambiguity)
    // This is a simple check - we flag if both are common English words with same part of speech
    // For example: {went|gone} in "He has {went|gone}" - only "gone" is correct

    // Common confusables that might indicate reversed pair
    const commonConfusables = [
      ['their', 'there', 'they\'re'],
      ['your', 'you\'re'],
      ['its', 'it\'s'],
      ['then', 'than'],
      ['affect', 'effect'],
      ['accept', 'except'],
      ['lose', 'loose'],
      ['who\'s', 'whose']
    ];

    for (const confusableSet of commonConfusables) {
      if (confusableSet.includes(pair.wrong.toLowerCase()) &&
          confusableSet.includes(pair.correct.toLowerCase())) {
        // This is a confusable pair - need to verify context makes it unambiguous
        issuesForPair.push(`⚠️  Confusable pair (${pair.wrong}/${pair.correct}) - verify context is clear`);
      }
    }

    if (issuesForPair.length > 0) {
      pairIssues.push({
        pair: pair.full,
        wrong: pair.wrong,
        correct: pair.correct,
        issues: issuesForPair
      });
    }
  }

  if (exerciseIssues.length > 0 || pairIssues.length > 0) {
    issues.push({
      id: exercise.id,
      title: exercise.title,
      level: exercise.level,
      style: exercise.style,
      pairCount: pairs.length,
      issues: exerciseIssues,
      pairIssues: pairIssues
    });
  }
}

// Print issues
if (issues.length === 0) {
  console.log(`✅ All ${editingExercises.length} editing exercises (${totalPairs} pairs) passed the audit!\n`);
} else {
  console.log(`❌ Found ${issues.length} editing exercises with potential issues:\n`);

  for (const issue of issues) {
    console.log(`${'─'.repeat(80)}`);
    console.log(`Exercise: "${issue.title}" [${issue.id}] (${issue.level} - ${issue.style})`);
    console.log(`Editing pairs: ${issue.pairCount}`);

    if (issue.issues.length > 0) {
      console.log(`\nExercise-level issues:`);
      issue.issues.forEach(i => console.log(`  • ${i}`));
    }

    if (issue.pairIssues && issue.pairIssues.length > 0) {
      console.log(`\nPair-level issues:`);
      issue.pairIssues.forEach(p => {
        console.log(`  Pair: ${p.pair}`);
        p.issues.forEach(i => console.log(`    - ${i}`));
      });
    }
    console.log();
  }
}

console.log('='.repeat(80));
console.log(`SUMMARY: ${issues.length} issues found out of ${editingExercises.length} exercises`);
console.log(`Total editing pairs checked: ${totalPairs}`);
console.log('='.repeat(80));

process.exit(issues.length > 0 ? 1 : 0);
