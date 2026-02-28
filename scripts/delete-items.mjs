#!/usr/bin/env node

/**
 * Delete Items Script
 * Deletes individual items from a content type
 * 
 * Usage:
 *   pnpm delete:items notes "My First Note"
 *   pnpm delete:items scripts deploy
 */

import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import fs from 'fs/promises';

import {
  generateSlug,
  pluralize,
} from './lib/utils.mjs';

import {
  directoryExists,
  removeItemFromCategory,
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

if (args.length < 2) {
  console.error('\n✗ Error: Insufficient arguments');
  console.error('Usage: pnpm delete:items <content-type> "<item-name>"\n');
  console.error('Examples:');
  console.error('  pnpm delete:items notes "My Note"');
  console.error('  pnpm delete:items scripts deploy\n');
  console.error('Run with --help for more information\n');
  process.exit(1);
}

async function deleteItem() {
  try {
    const contentType = pluralize(args[0].toLowerCase());
    const itemName = args[1];
    const slug = generateSlug(itemName);

    const contentPath = path.join(rootDir, 'src', 'content', contentType);
    const itemPath = path.join(contentPath, slug);

    // Check if type exists
    if (!directoryExists(contentPath)) {
      throw new Error(`Content type not found: ${contentType}`);
    }

    // Check if item exists
    if (!directoryExists(itemPath)) {
      throw new Error(`Item not found: ${slug}`);
    }

    // Get folder size for display
    let size = 0;
    async function getSize(dir) {
      const files = await fs.readdir(dir);
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = await fs.stat(filePath);
        if (stat.isDirectory()) {
          await getSize(filePath);
        } else {
          size += stat.size;
        }
      }
    }

    await getSize(itemPath);
    const sizeStr = formatSize(size);

    // Count files
    async function countFiles(dir) {
      let count = 0;
      const files = await fs.readdir(dir);
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = await fs.stat(filePath);
        if (stat.isDirectory()) {
          count += await countFiles(filePath);
        } else {
          count += 1;
        }
      }
      return count;
    }

    const fileCount = await countFiles(itemPath);

    // Display confirmation
    console.log('\n' + '='.repeat(60));
    console.log('⚠️  DELETE ITEM CONFIRMATION');
    console.log('='.repeat(60));
    console.log(`\nContent Type: ${contentType}`);
    console.log(`Item: ${slug}`);
    console.log(`Folder: ${itemPath}`);
    console.log(`Files to delete: ${fileCount}`);
    console.log(`Folder size: ${sizeStr}`);
    console.log('\n⚠️  THIS ACTION CANNOT BE UNDONE!\n');

    // Ask for confirmation
    const answer = await askConfirmation('Continue? (yes/no): ');

    if (!answer) {
      console.log('✗ Delete cancelled.\n');
      process.exit(0);
    }

    // Delete the item folder
    await fs.rm(itemPath, { recursive: true, force: true });

    // Remove from categories.ts
    const categoriesFile = path.join(contentPath, 'categories.ts');
    removeItemFromCategory(categoriesFile, slug);

    console.log(`\n✅ Item deleted successfully!`);
    console.log(`   Type: ${contentType}`);
    console.log(`   Item: ${slug}`);
    console.log(`   Removed from categories.ts\n`);

  } catch (error) {
    console.error(`\n✗ Error: ${error.message}\n`);
    process.exit(1);
  }
}

function formatSize(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

function askConfirmation(question) {
  return new Promise((resolve) => {
    const stdin = process.stdin;
    const stdout = process.stdout;

    stdout.write(question);

    stdin.setRawMode(false);
    stdin.setEncoding('utf8');
    stdin.resume();
    
    const onData = (data) => {
      stdin.pause();
      stdin.removeListener('data', onData);
      stdin.setRawMode(true);
      
      const answer = data.toString().trim().toLowerCase();
      resolve(answer === 'yes' || answer === 'y');
    };
    
    stdin.once('data', onData);
  });
}

function printHelp() {
  console.log(`
╔═══════════════════════════════════════════════════════════════════╗
║          DELETE ITEMS SCRIPT                                       ║
╚═══════════════════════════════════════════════════════════════════╝

PURPOSE:
  Delete individual items from a content type

USAGE:
  pnpm delete:items <content-type> "<item-name>"

EXAMPLES:
  # Basic deletion
  pnpm delete:items notes "My First Note"
  pnpm delete:items guides "Getting Started"
  pnpm delete:items snippets "Hello World"

  # Other examples
  pnpm delete:items scripts deploy
  pnpm delete:items tools "JSON Formatter"
  pnpm delete:items links "Dev Resources"

WORKFLOW:
  1. Delete item:
     pnpm delete:items mynotes "my-item"

  2. This removes:
     - src/content/mynotes/my-item/ (entire folder)
     - Entry from categories.ts

WHAT GETS DELETED:
  ✓ Item folder (src/content/<type>/<item>/)
  ✓ Vue component
  ✓ Service files
  ✓ Test files
  ✓ Data folder (if exists)
  ✓ Entry from categories.ts

WARNING:
  This action CANNOT be undone!

RELATED COMMANDS:
  - pnpm delete:content <type>         (delete entire type)
  - pnpm create:items <type> "<name>"  (create new item)
  - pnpm create:content <type>         (create new type)
`);
}

// Run the script
deleteItem().catch(error => {
  console.error(`\n✗ Fatal Error: ${error.message}\n`);
  process.exit(1);
});
