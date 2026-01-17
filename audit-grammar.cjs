/**
 * Audit Grammar MCQ Questions for Ambiguities
 *
 * Checks:
 * 1. All questions have exactly one correct answer
 * 2. No wrong answers could also be grammatically correct
 * 3. Questions provide sufficient context to eliminate ambiguity
 * 4. All required fields are present
 */

const fs = require('fs');
const path = require('path');

// Read the grammar exercises file
const grammarFile = fs.readFileSync(
  path.join(__dirname, 'src/data/grammar-exercises.ts'),
  'utf8'
);

// Extract the GRAMMAR_QUESTIONS array
const arrayMatch = grammarFile.match(/export const GRAMMAR_QUESTIONS: GrammarQuestion\[\] = (\[[\s\S]*\]);/);
if (!arrayMatch) {
  console.error('❌ Could not parse GRAMMAR_QUESTIONS array');
  process.exit(1);
}

const grammarQuestions = eval(arrayMatch[1]);

console.log('='.repeat(80));
console.log('GRAMMAR MCQ QUESTIONS AUDIT REPORT');
console.log('='.repeat(80));
console.log(`\nTotal questions: ${grammarQuestions.length}\n`);

const issues = [];
let questionNumber = 0;

for (const q of grammarQuestions) {
  questionNumber++;
  const qIssues = [];

  // Check 1: All required fields present
  if (!q.question) qIssues.push('Missing question');
  if (!q.correct_answer) qIssues.push('Missing correct_answer');
  if (!q.wrong_answers || q.wrong_answers.length === 0) qIssues.push('Missing wrong_answers');
  if (!q.explanation) qIssues.push('Missing explanation');
  if (!q.topic) qIssues.push('Missing topic');

  // Check 2: Ensure exactly 3 wrong answers (standard MCQ format)
  if (q.wrong_answers && q.wrong_answers.length !== 3) {
    qIssues.push(`Has ${q.wrong_answers.length} wrong answers (expected 3)`);
  }

  // Check 3: Check for duplicate answers
  const allAnswers = [q.correct_answer, ...(q.wrong_answers || [])];
  const uniqueAnswers = new Set(allAnswers);
  if (uniqueAnswers.size !== allAnswers.length) {
    qIssues.push('Duplicate answers detected');
  }

  // Check 4: Check for blank context (questions missing key information)
  const questionLower = (q.question || '').toLowerCase();
  const hasBlank = questionLower.includes('_____');

  // Check for questions that might need more context
  const needsContextPatterns = [
    { pattern: /^(the|a|an) _____ /, hint: 'May need subject/context before blank' },
    { pattern: /_____ (is|are|was|were)$/, hint: 'May need context after blank' },
  ];

  for (const { pattern, hint } of needsContextPatterns) {
    if (pattern.test(q.question) && q.question.split(' ').length < 6) {
      qIssues.push(`Potentially too little context: ${hint}`);
    }
  }

  // Check 5: Possessive apostrophe ambiguity check
  if (q.topic === 'Possessive Apostrophes' || q.topic === 'Plural Possessive Apostrophes') {
    const hasSingular = q.wrong_answers?.some(a => a.endsWith("'s"));
    const hasPlural = q.wrong_answers?.some(a => a.endsWith("s'"));
    const correctIsSingular = q.correct_answer.endsWith("'s");
    const correctIsPlural = q.correct_answer.endsWith("s'");

    if ((correctIsSingular && hasPlural) || (correctIsPlural && hasSingular)) {
      // Check if question provides singular/plural context
      const hasPluralContext = /multiple|several|many|all|some|few|both|these|those|were|are/i.test(q.question);
      const hasSingularContext = /\ba\b|\ban\b|one|single|this|that|was|is(?! always)|the (?!always)/i.test(q.question);

      if (!hasPluralContext && !hasSingularContext) {
        qIssues.push('⚠️  AMBIGUITY: Possessive question lacks clear singular/plural context');
      }
    }
  }

  // Check 6: Flag questions with notes as potentially reviewed
  if (q.notes && !q.reviewed) {
    qIssues.push(`⚠️  Has notes but not marked as reviewed: "${q.notes}"`);
  }

  if (qIssues.length > 0) {
    issues.push({
      rank: q.rank,
      topic: q.topic,
      question: q.question,
      correct: q.correct_answer,
      wrongs: q.wrong_answers,
      issues: qIssues,
      reviewed: q.reviewed || false,
      notes: q.notes || ''
    });
  }
}

// Print issues
if (issues.length === 0) {
  console.log('✅ All grammar questions passed the audit!\n');
} else {
  console.log(`❌ Found ${issues.length} questions with potential issues:\n`);

  for (const issue of issues) {
    console.log(`${'─'.repeat(80)}`);
    console.log(`Question #${issue.rank}: ${issue.topic}`);
    console.log(`Q: ${issue.question}`);
    console.log(`Correct: "${issue.correct}"`);
    console.log(`Wrong: [${issue.wrongs.map(w => `"${w}"`).join(', ')}]`);
    if (issue.reviewed) console.log(`✓ Reviewed: ${issue.reviewed}`);
    if (issue.notes) console.log(`Notes: ${issue.notes}`);
    console.log(`\nIssues:`);
    issue.issues.forEach(i => console.log(`  • ${i}`));
    console.log();
  }
}

console.log('='.repeat(80));
console.log(`SUMMARY: ${issues.length} issues found out of ${grammarQuestions.length} questions`);
console.log('='.repeat(80));

process.exit(issues.length > 0 ? 1 : 0);
