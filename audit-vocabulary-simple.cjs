/**
 * Simple Vocabulary Audit (no eval)
 * Checks for problematic patterns in the source file
 */

const fs = require('fs');
const path = require('path');

const vocabFile = fs.readFileSync(
  path.join(__dirname, 'src/data/vocabulary.ts'),
  'utf8'
);

console.log('='.repeat(80));
console.log('VOCABULARY AUDIT REPORT');
console.log('='.repeat(80));
console.log();

// Count total items
const itemMatches = vocabFile.match(/id: 'v\d+'/g);
const totalItems = itemMatches ? itemMatches.length : 0;
console.log(`Total vocabulary items: ${totalItems}`);

// Check for problematic patterns
const problems = [];

// Pattern 1: "Correct spelling of" - completely generic
const genericSpelling = vocabFile.match(/Correct spelling of/g);
if (genericSpelling) {
  problems.push(`Found ${genericSpelling.length} items with "Correct spelling of" (completely ambiguous)`);
}

// Pattern 2: "is commonly used" - completely generic
const genericUsage = vocabFile.match(/is commonly used in writing/g);
if (genericUsage) {
  problems.push(`Found ${genericUsage.length} items with "is commonly used in writing" (completely ambiguous)`);
}

// Pattern 3: "The word X is" - meta-reference
const metaReference = vocabFile.match(/The word ".+?" is/g);
if (metaReference) {
  problems.push(`Found ${metaReference.length} items with meta-references like "The word X is..."`);
}

// Pattern 4: Generic meanings like "relating to or involving"
const genericMeaning = vocabFile.match(/meaning: 'relating to or involving/g);
if (genericMeaning) {
  problems.push(`Found ${genericMeaning.length} items with generic meaning "relating to or involving"`);
}

console.log();
if (problems.length === 0) {
  console.log('✅ No problematic patterns found!');
  console.log('✅ All vocabulary items appear to have proper contextual examples');
} else {
  console.log('❌ Found problematic patterns:');
  problems.forEach(p => console.log(`  • ${p}`));
}

console.log();
console.log('='.repeat(80));
console.log('SUMMARY');
console.log('='.repeat(80));
console.log(`Total items: ${totalItems}`);
console.log(`Issues: ${problems.length === 0 ? '0 (PASS)' : problems.length + ' (FAIL)'}`);
console.log('='.repeat(80));

process.exit(problems.length > 0 ? 1 : 0);
