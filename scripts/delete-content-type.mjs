#!/usr/bin/env node

/**
 * Delete Content Type Script
 * Deletes entire content type folder structure
 * 
 * Usage:
 *   pnpm delete:content notes
 *   pnpm delete:content scripts
 */

import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import fs from 'fs/promises';

import {
  pluralize,
} from './lib/utils.mjs';

import {
  directoryExists,
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

async function deleteContentType() {
  try {
    const contentType = pluralize(args[0].toLowerCase());
    const contentPath = path.join(rootDir, 'src', 'content', contentType);

    // Check if type exists
    if (!directoryExists(contentPath)) {
      throw new Error(`Content type not found: ${contentType}`);
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

    await getSize(contentPath);
    const sizeStr = formatSize(size);

    // Display confirmation
    console.log('\n' + '='.repeat(60));
    console.log('⚠️  DELETE CONTENT TYPE CONFIRMATION');
    console.log('='.repeat(60));
    console.log(`\nContent Type: ${contentType}`);
    console.log(`Folder: ${contentPath}`);
    console.log(`Folder size: ${sizeStr}`);
    console.log('\n⚠️  THIS ACTION CANNOT BE UNDONE!');
    console.log('All items in this content type will be deleted.\n');

    // Ask for confirmation
    const answer = await askConfirmation('Continue? (yes/no): ');

    if (!answer) {
      console.log('✗ Delete cancelled.\n');
      process.exit(0);
    }

    // Delete the folder
    await fs.rm(contentPath, { recursive: true, force: true });

    console.log(`\n✅ Content type deleted successfully!`);
    console.log(`   Deleted: ${contentType}\n`);

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
║          DELETE CONTENT TYPE SCRIPT                               ║
╚═══════════════════════════════════════════════════════════════════╝

PURPOSE:
  Delete an entire content type folder structure and all its items

USAGE:
  pnpm delete:content <type>

EXAMPLES:
  pnpm delete:content notes
  pnpm delete:content scripts
  pnpm delete:content guides

WARNING:
  This will DELETE the entire content type folder including:
  - All items in the type
  - Categories configuration
  - All associated files

  This action CANNOT be undone!

WORKFLOW:
  1. Delete content type:
     pnpm delete:content mynotes

  2. This removes: src/content/mynotes/ (entire folder)

RELATED COMMANDS:
  - pnpm delete:items <type> "<name>"  (delete single item)
  - pnpm create:content <type>         (create new type)
  - pnpm create:items <type> "<name>"  (create new item)
`);
}

// Run the script
deleteContentType().catch(error => {
  console.error(`\n✗ Fatal Error: ${error.message}\n`);
  process.exit(1);
});
