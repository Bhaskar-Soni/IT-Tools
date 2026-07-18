#!/usr/bin/env node

/**
 * Create Content Type Script
 * Creates a new content type folder structure
 * 
 * Usage:
 *   pnpm create:content notes
 *   pnpm create:content scripts
 *   pnpm create:content custom-tools
 */

import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

import {
  pluralize,
  singularize,
} from './lib/utils.mjs';

import {
  directoryExists,
  fileExists,
  createDirectory,
  writeFile,
} from './lib/file-manager.mjs';

// Enable UTF-8 on Windows console
if (process.stdout.isTTY) {
  process.stdout.setEncoding('utf8');
}

if (process.platform === 'win32') {
  try {
    execSync('chcp 65001', { stdio: 'ignore' });
  } catch (e) {
    // Ignore if chcp command fails
  }
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Parse arguments
let args = process.argv.slice(2).filter(arg => arg !== '--');

if (!args[0] || args[0] === '--help' || args[0] === '-h') {
  printHelp();
  process.exit(args[0] ? 0 : 1);
}

async function createContentType() {
  try {
    const contentType = args[0].toLowerCase();
    const pluralType = pluralize(contentType);
    const contentPath = path.join(rootDir, 'src', 'content', pluralType);

    // Validate
    if (!contentType || contentType.trim() === '') {
      throw new Error('Content type name is required');
    }

    // Check if already exists
    if (directoryExists(contentPath)) {
      throw new Error(
        `Content type already exists: ${pluralType}\n` +
        `Path: ${contentPath}`
      );
    }

    // Create directory structure
    console.log(`\n📁 Creating content type: ${pluralType}\n`);
    
    createDirectory(contentPath);
    console.log(`✓ Created directory: src/content/${pluralType}/`);

    // Create categories.ts
    const varName = singularize(pluralType) + 'Categories';
    const categoriesContent = `export const ${varName} = [\n  {\n    name: 'Uncategorized',\n    items: [],\n  },\n];\n`;
    
    writeFile(path.join(contentPath, 'categories.ts'), categoriesContent);
    console.log(`✓ Created: categories.ts`);

    // Create .gitkeep to ensure folder is tracked
    writeFile(path.join(contentPath, '.gitkeep'), '');
    console.log(`✓ Created: .gitkeep (for git tracking)`);

    console.log(`\n✅ Content type created successfully!\n`);
    console.log(`📌 Next steps:`);
    console.log(`   1. Create items in this content type:`);
    console.log(`      pnpm create:items ${pluralType} "My First Item"`);
    console.log(`      pnpm create:items ${pluralType} "Second Item" --subcategory "category-name"`);
    console.log(`\n   2. Items will be created in: src/content/${pluralType}/<item-slug>/\n`);

  } catch (error) {
    console.error(`\n✗ Error: ${error.message}\n`);
    process.exit(1);
  }
}

function printHelp() {
  console.log(`
╔═══════════════════════════════════════════════════════════════════╗
║          CREATE CONTENT TYPE COMMAND                              ║
╚═══════════════════════════════════════════════════════════════════╝

PURPOSE:
  Create a NEW content type folder structure in src/content/

USAGE:
  pnpm create:content <type>

EXAMPLES:
  # Create new content types
  pnpm create:content notes
  pnpm create:content snippets
  pnpm create:content guides
  pnpm create:content tutorials
  pnpm create:content resources

WHAT IT DOES:
  1. Creates directory: src/content/<type>/
  2. Creates categories.ts with empty structure
  3. Prepares for items creation

NEXT STEP:
  After creating a content type, create items with:
    pnpm create:items <type> "<name>"
    pnpm create:items <type> "<name>" --subcategory "category"

EXAMPLES:
  pnpm create:items notes "My First Note"
  pnpm create:items guides "Getting Started" --subcategory "tutorials"
  pnpm create:items snippets "Hello World"

WORKFLOW:
  1. Create content type (one time):
     pnpm create:content notes

  2. Create items (multiple times):
     pnpm create:items notes "Note 1"
     pnpm create:items notes "Note 2"
     pnpm create:items notes "Note 3" --subcategory "important"

NOTES:
  - Content type names are auto-pluralized
  - Each content type has its own categories.ts
  - Categories are managed per type, not globally
  - Items within same type share category structure
`);
}

// Run the script
createContentType().catch(error => {
  console.error(`\n✗ Fatal Error: ${error.message}\n`);
  process.exit(1);
});
