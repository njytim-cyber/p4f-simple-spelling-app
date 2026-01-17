#!/usr/bin/env node

/**
 * Question Length Audit Script
 *
 * Enforces minimum question length of 10 words for:
 * - Grammar questions
 * - Vocabulary example sentences
 *
 * Questions shorter than 10 words lack sufficient context.
 */

const fs = require('fs');
const path = require('path');

console.log('='.repeat(80));
console.log('QUESTION LENGTH AUDIT');
console.log('='.repeat(80));
console.log();
console.log('Minimum requirement: 10 words per question');
console.log();

// Function to count words (excluding HTML tags, braces, etc.)
function countWords(text) {
  // Remove { } pairs used in editing exercises
  const cleaned = text
    .replace(/\{[^}]+\}/g, '_') // Replace {wrong|correct} with single placeholder
    .replace(/_+/g, '_') // Normalize multiple blanks
    .trim();

  // Split by whitespace and filter out empty strings
  const words = cleaned.split(/\s+/).filter(w => w.length > 0);
  return words.length;
}

let totalIssues = 0;

// ============================================================================
// AUDIT GRAMMAR QUESTIONS
// ============================================================================

console.log('='.repeat(80));
console.log('GRAMMAR QUESTIONS');
console.log('='.repeat(80));
console.log();

const grammarPath = path.join(__dirname, 'src/data/grammar-exercises.ts');
const grammarContent = fs.readFileSync(grammarPath, 'utf8');

// Parse grammar questions (using double quotes)
const grammarRegex = /topic:\s*"([^"]+)"\s*,\s*question:\s*"([^"\\]*(?:\\.[^"\\]*)*)"/g;
const grammarIssues = [];
let grammarMatch;
let grammarCount = 0;

while ((grammarMatch = grammarRegex.exec(grammarContent)) !== null) {
  grammarCount++;
  const topic = grammarMatch[1];
  const question = grammarMatch[2].replace(/\\"/g, '"');
  const wordCount = countWords(question);

  if (wordCount < 10) {
    grammarIssues.push({
      topic,
      question,
      wordCount,
      index: grammarCount
    });
  }
}

console.log(`Total grammar questions: ${grammarCount}`);
console.log(`Questions with < 10 words: ${grammarIssues.length}`);
console.log();

if (grammarIssues.length > 0) {
  console.log('❌ GRAMMAR QUESTIONS TOO SHORT:');
  console.log();
  grammarIssues.forEach((issue, index) => {
    console.log(`${index + 1}. Question #${issue.index}`);
    console.log(`   Topic: ${issue.topic}`);
    console.log(`   Question: "${issue.question}"`);
    console.log(`   Word count: ${issue.wordCount} (needs ${10 - issue.wordCount} more words)`);
    console.log();
  });
  totalIssues += grammarIssues.length;
} else {
  console.log('✅ All grammar questions meet the 10-word minimum!');
  console.log();
}

// ============================================================================
// AUDIT VOCABULARY EXAMPLES
// ============================================================================

console.log('='.repeat(80));
console.log('VOCABULARY EXAMPLES');
console.log('='.repeat(80));
console.log();

const vocabPath = path.join(__dirname, 'src/data/vocabulary.ts');
const vocabContent = fs.readFileSync(vocabPath, 'utf8');

// Parse vocabulary items
const vocabRegex = /\{\s*id:\s*'([^']+)',\s*word:\s*'([^'\\]*(?:\\.[^'\\]*)*)',\s*meaning:\s*'([^'\\]*(?:\\.[^'\\]*)*)',\s*example:\s*'([^'\\]*(?:\\.[^'\\]*)*)'/g;
const vocabIssues = [];
let vocabMatch;
let vocabCount = 0;

while ((vocabMatch = vocabRegex.exec(vocabContent)) !== null) {
  vocabCount++;
  const id = vocabMatch[1];
  const word = vocabMatch[2].replace(/\\'/g, "'");
  const example = vocabMatch[4].replace(/\\'/g, "'");
  const wordCount = countWords(example);

  if (wordCount < 10) {
    vocabIssues.push({
      id,
      word,
      example,
      wordCount
    });
  }
}

console.log(`Total vocabulary items: ${vocabCount}`);
console.log(`Examples with < 10 words: ${vocabIssues.length}`);
console.log();

if (vocabIssues.length > 0) {
  console.log('❌ VOCABULARY EXAMPLES TOO SHORT:');
  console.log();
  vocabIssues.forEach((issue, index) => {
    console.log(`${index + 1}. ${issue.id}: "${issue.word}"`);
    console.log(`   Example: "${issue.example}"`);
    console.log(`   Word count: ${issue.wordCount} (needs ${10 - issue.wordCount} more words)`);
    console.log();
  });
  totalIssues += vocabIssues.length;
} else {
  console.log('✅ All vocabulary examples meet the 10-word minimum!');
  console.log();
}

// ============================================================================
// SUMMARY
// ============================================================================

console.log('='.repeat(80));
console.log('SUMMARY');
console.log('='.repeat(80));
console.log();

if (totalIssues === 0) {
  console.log('✅ PASSED - All questions meet the 10-word minimum!');
  console.log();
  process.exit(0);
} else {
  console.log(`❌ FAILED - ${totalIssues} questions are too short`);
  console.log();
  console.log('Required actions:');
  console.log('1. Expand each short question to at least 10 words');
  console.log('2. Add context to make questions unambiguous');
  console.log('3. Ensure questions provide enough information for students');
  console.log('4. Re-run this audit to verify fixes');
  console.log();
  console.log('Example fix for "Let\'s go _____." (3 words):');
  console.log('  ❌ Before: "Let\'s go _____."');
  console.log('  ✅ After:  "We should leave now and go _____ to play in the fresh air."');
  console.log('            (13 words, provides context for "outside")');
  console.log();
  console.log('='.repeat(80));
  process.exit(1);
}
