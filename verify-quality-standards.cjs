#!/usr/bin/env node

/**
 * Quality Standards Verification Script
 *
 * Ensures content creators have acknowledged the quality standards
 * before making changes to question banks.
 *
 * Run this before editing any content files.
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const ACKNOWLEDGMENT_FILE = '.quality-standards-acknowledged';
const STANDARDS_FILE = 'CONTENT-QUALITY-STANDARDS.md';

console.log('='.repeat(80));
console.log('CONTENT QUALITY STANDARDS VERIFICATION');
console.log('='.repeat(80));
console.log();

// Check if standards file exists
if (!fs.existsSync(path.join(__dirname, STANDARDS_FILE))) {
    console.error('❌ ERROR: CONTENT-QUALITY-STANDARDS.md not found!');
    console.error('   Cannot proceed without quality standards document.');
    process.exit(1);
}

// Check if already acknowledged
const ackPath = path.join(__dirname, ACKNOWLEDGMENT_FILE);
const hasAcknowledged = fs.existsSync(ackPath);

if (hasAcknowledged) {
    const ackData = fs.readFileSync(ackPath, 'utf8');
    const lines = ackData.split('\n');
    const timestamp = lines[0]?.replace('Acknowledged: ', '');
    const name = lines[1]?.replace('By: ', '');

    console.log('✅ Quality Standards Previously Acknowledged');
    console.log(`   Date: ${timestamp}`);
    console.log(`   By: ${name}`);
    console.log();
    console.log('📋 Remember to follow ALL rules in CONTENT-QUALITY-STANDARDS.md');
    console.log('🔍 Run audit scripts after making changes');
    console.log();
    console.log('Quick Reference: QUICK-REFERENCE.md');
    console.log('='.repeat(80));
    process.exit(0);
}

// First time - require acknowledgment
console.log('⚠️  IMPORTANT: You have not acknowledged the quality standards yet.');
console.log();
console.log('Before making ANY changes to question banks, you MUST:');
console.log('  1. Read CONTENT-QUALITY-STANDARDS.md in full');
console.log('  2. Understand all rules and requirements');
console.log('  3. Acknowledge that you will follow these standards');
console.log();
console.log('The standards document covers:');
console.log('  • Vocabulary item requirements');
console.log('  • Grammar question guidelines');
console.log('  • Editing exercise rules');
console.log('  • MCQ distractor generation');
console.log('  • Quality assurance workflows');
console.log();
console.log('📖 Please open and read: CONTENT-QUALITY-STANDARDS.md');
console.log();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask for acknowledgment
rl.question('Have you read and understood CONTENT-QUALITY-STANDARDS.md? (yes/no): ', (answer) => {
    if (answer.toLowerCase() !== 'yes') {
        console.log();
        console.log('❌ You must read and understand the standards before proceeding.');
        console.log('   Please read CONTENT-QUALITY-STANDARDS.md and run this script again.');
        rl.close();
        process.exit(1);
    }

    rl.question('Enter your name for the record: ', (name) => {
        if (!name.trim()) {
            console.log();
            console.log('❌ Name is required for acknowledgment.');
            rl.close();
            process.exit(1);
        }

        // Create acknowledgment file
        const timestamp = new Date().toISOString();
        const acknowledgment = `Acknowledged: ${timestamp}\nBy: ${name.trim()}\n\nI have read and understood CONTENT-QUALITY-STANDARDS.md and agree to follow all rules when creating or modifying question bank content.\n`;

        fs.writeFileSync(ackPath, acknowledgment, 'utf8');

        console.log();
        console.log('='.repeat(80));
        console.log('✅ ACKNOWLEDGMENT RECORDED');
        console.log('='.repeat(80));
        console.log();
        console.log(`Thank you, ${name.trim()}!`);
        console.log();
        console.log('📋 You may now edit question bank content.');
        console.log('🔍 Remember to run audit scripts after making changes:');
        console.log();
        console.log('   node audit-grammar.cjs');
        console.log('   node audit-vocabulary-simple.cjs');
        console.log('   node audit-vocab-distractors.cjs');
        console.log('   node audit-editing.cjs');
        console.log();
        console.log('📖 Quick Reference: QUICK-REFERENCE.md');
        console.log('='.repeat(80));

        rl.close();
        process.exit(0);
    });
});
