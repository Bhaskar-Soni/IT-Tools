#!/usr/bin/env node

/**
 * Create Items Script
 * Creates individual items within a content type
 * 
 * Usage:
 *   pnpm create:items notes "My First Note"
 *   pnpm create:items notes "My Second Note" --subcategory "important"
 *   pnpm create:items scripts "deploy" bash
 *   pnpm create:items scripts "backup" bash,batch,python
 */

import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

import {
  generateSlug,
  generateTitle,
  generateClassName,
  pluralize,
  singularize,
  getTemplateTier,
} from './lib/utils.mjs';

import {
  directoryExists,
  createDirectory,
  applyTemplate,
  addItemToCategory,
  createDataFolder,
} from './lib/file-manager.mjs';

import {
  validateItemName,
  validateCategoryName,
  validateContentTypeFolder,
  checkDuplicateItem,
} from './lib/validators.mjs';

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
  console.error('Usage: pnpm create:items <content-type> "<item-name>" [--subcategory "category"]\n');
  console.error('Examples:');
  console.error('  pnpm create:items notes "My Note"');
  console.error('  pnpm create:items scripts deploy bash');
  console.error('  pnpm create:items tools "JSON Formatter" --subcategory "converter"\n');
  console.error('Run with --help for more information\n');
  process.exit(1);
}

async function createItem() {
  try {
    const contentType = pluralize(args[0].toLowerCase());
    const itemName = args[1];
    let format = args[2] || ''; // Optional: for scripts
    let subcategoryName = '';

    // Check for --subcategory flag
    const subcategoryIndex = args.indexOf('--subcategory');
    if (subcategoryIndex !== -1) {
      if (subcategoryIndex + 1 >= args.length) {
        throw new Error('--subcategory flag requires a value');
      }
      subcategoryName = args[subcategoryIndex + 1];
    }

    // Validate inputs
    validateItemName(itemName);
    validateContentTypeFolder(contentType, rootDir);
    if (subcategoryName) {
      validateCategoryName(subcategoryName);
    }

    // Generate names
    const slug = generateSlug(itemName);
    const title = generateTitle(slug);
    const className = generateClassName(slug);
    const categoryName = subcategoryName || 'Uncategorized';

    // Check duplicate
    const contentPath = path.join(rootDir, 'src', 'content', contentType);
    const itemPath = path.join(contentPath, slug);
    checkDuplicateItem(itemPath, title);

    // Determine template tier based on content type
    const tier = getTemplateTier(contentType);

    // Create item directory
    createDirectory(itemPath);
    console.log(`\n📁 Creating item: ${title}`);
    console.log(`   Type: ${singularize(contentType)}`);
    console.log(`   Path: src/content/${contentType}/${slug}/`);
    if (subcategoryName) {
      console.log(`   Category: ${categoryName}`);
    }
    console.log('');

    // Apply template if available
    const templateDir = path.join(__dirname, 'templates', tier);
    
    if (directoryExists(templateDir)) {
      console.log(`📋 Using ${tier} template...`);
      
      // Icon mapping for different content types
      const iconMap = {
        'script': 'Code',
        'tool': 'Settings',
        'link': 'Link',
        'template': 'FileCheck',
        'cheatsheet': 'FileText',
        'command': 'Terminal',
        'guide': 'Book',
        'report': 'FileText',
        'policy': 'Shield',
      };
      
      const singularType = singularize(contentType);
      const icon = iconMap[singularType] || 'FileText';
      
      const replacements = {
        name: slug,
        title: title,
        description: `A collection of ${title.toLowerCase()} resources and tools`,
        className: className,
        type: singularize(contentType),
        icon: icon,
        category: categoryName,
      };

      // For scripts, always set format (default to 'sh')
      if (tier === 'script') {
        replacements.formats = format || 'sh';
      }

      applyTemplate(templateDir, itemPath, replacements);
    } else {
      console.log('⚠️  No template found, creating generic structure...');
      
      // Create generic vue component
      const vueContent = `<template>
  <div class="${slug}">
    <h1>${title}</h1>
    <p>Content goes here...</p>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
`;
      const fs = await import('fs');
      fs.writeFileSync(path.join(itemPath, `${slug}.vue`), vueContent);

      // Create index.ts with appropriate icon based on content type
      const iconMap = {
        'script': 'Wand',
        'command': 'Code',
        'guide': 'Book',
        'note': 'FileText',
        'news': 'Bell',
        'snippet': 'Copy',
        'link': 'Link',
        'tool': 'Hammer',
        'cheatsheet': 'Book',
        'template': 'Layout',
        'policy': 'Shield',
        'report': 'FileText',
      };
      
      // For unknown types, rotate through available icons
      const availableIcons = ['Book', 'Code', 'Wand', 'FileText', 'Bell', 'Copy', 'Link', 'Hammer', 'Layout', 'Shield'];
      
      const singularType = singularize(contentType);
      let iconName = iconMap[singularType];
      
      if (!iconName) {
        // Hash the item name to get a consistent icon
        let hash = 0;
        for (let i = 0; i < slug.length; i++) {
          hash = ((hash << 5) - hash) + slug.charCodeAt(i);
        }
        const index = Math.abs(hash) % availableIcons.length;
        iconName = availableIcons[index];
      }
      
      const indexContent = `import { ${iconName} } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: '${singularType}',
  slug: '${slug}',
  title: '${title}',
  description: 'Add a description for ${title}',
  keywords: ['${slug}'],
  category: '${categoryName}',
  component: () => import('./${slug}.vue'),
  icon: ${iconName},
};
`;
      fs.writeFileSync(path.join(itemPath, 'index.ts'), indexContent);

      // Create service file
      const serviceContent = `export class ${className}Service {
  static process(input: string): string {
    return input;
  }
}
`;
      fs.writeFileSync(path.join(itemPath, `${slug}.service.ts`), serviceContent);

      // Create service test
      const testContent = `import { describe, it, expect } from 'vitest';
import { ${className}Service } from './${slug}.service';

describe('${title}Service', () => {
  it('should work', () => {
    const result = ${className}Service.process('test');
    expect(result).toBeDefined();
  });
});
`;
      fs.writeFileSync(path.join(itemPath, `${slug}.service.test.ts`), testContent);

      // Create e2e test
      const e2eContent = `import { test, expect } from '@playwright/test';

test.describe('${title}', () => {
  test('should render', async ({ page }) => {
    await page.goto('/');
    // Add e2e test logic here
  });
});
`;
      fs.writeFileSync(path.join(itemPath, `${slug}.e2e.spec.ts`), e2eContent);
    }

    // Create data folder for links
    createDataFolder(itemPath, contentType);

    // Update categories.ts
    const categoriesFile = path.join(contentPath, 'categories.ts');
    addItemToCategory(categoriesFile, slug, categoryName);

    // Success message with dynamic next steps based on template tier
    console.log('✅ Item created successfully!\n');
    console.log('📌 Next steps:');
    
    if (tier === 'script') {
      console.log(`   1. Edit ${slug}.vue to customize the component`);
      console.log(`   2. Update the script format and implementation`);
      console.log(`   3. Update the description in index.ts`);
      console.log(`   4. Update keywords as needed`);
      console.log(`   5. Add tests\n`);
    } else if (tier === 'tool') {
      console.log(`   1. Edit ${slug}.vue to customize the component`);
      console.log(`   2. Implement business logic in ${slug}.service.ts`);
      console.log(`   3. Update the description in index.ts`);
      console.log(`   4. Update keywords as needed`);
      console.log(`   5. Add tests\n`);
    } else if (tier === 'template') {
      console.log(`   1. Edit ${slug}.vue to customize the template preview`);
      console.log(`   2. Update download links for DOCX and PDF files`);
      console.log(`   3. Update the description in index.ts`);
      console.log(`   4. Update keywords as needed`);
      console.log(`   5. Add your template files to public/templates/{docx,pdf}/\n`);
    } else if (tier === 'link') {
      console.log(`   1. Update data in data/boxes.json`);
      console.log(`   2. Update the description in index.ts`);
      console.log(`   3. Update keywords as needed`);
      console.log(`   4. Customize the component if needed\n`);
    } else {
      // Generic template (cheatsheets, commands, guides, etc.)
      console.log(`   1. Edit ${slug}.md to add your content`);
      console.log(`   2. Update the description in index.ts`);
      console.log(`   3. Update keywords as needed`);
      console.log(`   4. Update icon if needed`);
      console.log(`   5. Assign to appropriate category\n`);
    }
    
    console.log('✨ The item will automatically appear in the app!\n');

  } catch (error) {
    console.error(`\n✗ Error: ${error.message}\n`);
    process.exit(1);
  }
}

function printHelp() {
  console.log(`
╔═══════════════════════════════════════════════════════════════════╗
║          CREATE ITEMS SCRIPT                                      ║
╚═══════════════════════════════════════════════════════════════════╝

PURPOSE:
  Create individual items within a content type

USAGE:
  pnpm create:items <content-type> "<item-name>" [options]

EXAMPLES:
  # Basic item creation
  pnpm create:items notes "My First Note"
  pnpm create:items guides "Getting Started"
  pnpm create:items snippets "Hello World"

  # With subcategory
  pnpm create:items notes "Important Note" --subcategory "urgent"
  pnpm create:items guides "Advanced" --subcategory "advanced-topics"

  # Scripts with formats
  pnpm create:items scripts deploy bash
  pnpm create:items scripts backup bash,batch,python
  pnpm create:items scripts all-formats all

  # Other examples
  pnpm create:items tools "JSON Formatter" --subcategory "converter"
  pnpm create:items reports "Q1 Analysis" --subcategory "quarterly"
  pnpm create:items commands "List Files"
  pnpm create:items links "Dev Resources"

WORKFLOW:
  1. First, create the content type (one time):
     pnpm create:content mynotes

  2. Then, create items within it (multiple times):
     pnpm create:items mynotes "Item 1"
     pnpm create:items mynotes "Item 2" --subcategory "category"
     pnpm create:items mynotes "Item 3"

OPTIONS:
  --subcategory "name"  - Assign to specific category
  --help               - Show this help message

WHAT IT CREATES:
  src/content/<type>/<item-slug>/
  ├── index.ts                    (ContentItem metadata)
  ├── <item-slug>.vue             (Vue component with template)
  ├── <item-slug>.service.ts      (Business logic)
  ├── <item-slug>.service.test.ts (Unit tests)
  ├── <item-slug>.e2e.spec.ts     (E2E tests)
  └── data/ (for links type)
      └── boxes.json

NAMING CONVENTIONS:
  Input: "My Item Name" or "my-item-name"
  Slug: my-item-name (kebab-case)
  Title: My Item Name (title-case)
  Class: MyItemName (PascalCase)

AUTOMATIC FEATURES:
  ✓ Slug generation (spaces → hyphens)
  ✓ Template selection based on type
  ✓ Categories.ts auto-update
  ✓ Complete file scaffolding
  ✓ Git tracking (.gitkeep)

BUILT-IN TYPES (Use these or create custom):
  - scripts (multi-format code)
  - links (interactive collections)
  - tools (utility tools)
  - notes (note collections)
  - guides (guides/tutorials)
  - snippets (code snippets)
  - reports (reports/analysis)
  - commands (CLI documentation)
  - cheatsheets (quick reference)
  - templates (boilerplate)
  - policies (documents)
  - ... or create your own!

NEXT STEPS:
  After creating an item:
  1. pnpm sync:categories (optional)
  2. Edit the generated files
  3. pnpm dev (see in browser)
  4. Content appears in sidebar automatically!
`);
}

// Run the script
createItem().catch(error => {
  console.error(`\n✗ Fatal Error: ${error.message}\n`);
  process.exit(1);
});

