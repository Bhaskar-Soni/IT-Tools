import { readFile, writeFile, readdir, access } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

// Set stdout to UTF-8 for emoji support
if (process.stdout.isTTY) {
  process.stdout.setEncoding('utf8');
}

const __dirname = dirname(fileURLToPath(import.meta.url));

async function syncCategories() {
  console.log('\n🔄 Syncing categories across all content types...\n');

  const contentPath = './src/content';
  const contentTypes = ['commands', 'guides', 'links', 'scripts', 'tools', 'cheatsheets', 'templates', 'reports', 'policies'];

  for (const contentType of contentTypes) {
    const contentTypePath = join(contentPath, contentType);

    try {
      const categories = await readdir(contentTypePath, { withFileTypes: true });
      const items = categories
        .filter(file => file.isDirectory())
        .map(file => file.name)
        .filter(name => !name.startsWith('.'));

      for (const itemName of items) {
        const indexPath = join(contentTypePath, itemName, 'index.ts');
        const categoriesPath = join(contentTypePath, 'categories.ts');

        try {
          let indexContent = await readFile(indexPath, 'utf-8');

          const categoriesContent = await readFile(categoriesPath, 'utf-8');
          let foundCategory = null;

          // Extract category labels from the categories file (supports quoted or unquoted keys/values)
          const categoryLabelRegex = /["']?name["']?\s*:\s*["']([^"']+)["']\s*,\s*["']?items["']?\s*:\s*\[(.*?)\]/gs;
          let match;
          let categoryLabel = null;
          while ((match = categoryLabelRegex.exec(categoriesContent)) !== null) {
            const label = match[1];
            const itemsStr = match[2];
            const itemNames = itemsStr.match(/["']([^"']+)["']/g) || [];
            
            if (itemNames.some(n => n.includes(itemName))) {
              categoryLabel = label;
              break;
            }
          }

          if (categoryLabel) {
            // Update the category property in index.ts
            if (indexContent.includes('category:')) {
              const updatedContent = indexContent.replace(
                /category:\s*['"][^'"]*['"]/,
                `category: '${categoryLabel}'`
              );
              await writeFile(indexPath, updatedContent);
            } else {
              const updatedContent = indexContent.replace(
                /(\})\s*;/g,
                `  category: '${categoryLabel}',\n};`
              );
              await writeFile(indexPath, updatedContent);
            }
            
            console.log(`✅ ${contentType}/${itemName}: category = '${categoryLabel}'`);
          } else {
            // Put uncategorized items in Uncategorized
            if (indexContent.includes('category:')) {
              const updatedContent = indexContent.replace(
                /category:\s*['"][^'"]*['"]/,
                `category: 'Uncategorized'`
              );
              await writeFile(indexPath, updatedContent);
            } else {
              const updatedContent = indexContent.replace(
                /(\})\s*;/g,
                `  category: 'Uncategorized',\n};`
              );
              await writeFile(indexPath, updatedContent);
            }
            
            console.log(`✅ ${contentType}/${itemName}: category = 'Uncategorized'`);
          }
        } catch (error) {
          if (error.code !== 'ENOENT') {
            console.warn(`⚠️  Could not update ${contentType}/${itemName}: ${error.message}`);
          }
        }
      }
    } catch (error) {
      if (error.code !== 'ENOENT') {
        console.warn(`⚠️  Content type not found: ${contentType}`);
      }
    }
  }

  console.log(`\n✨ Categories synced successfully!`);
  console.log(`\n📝 All content items now have the correct category property matching their categories.ts entry.\n`);

  // Clean up orphaned items and empty categories
  await cleanupOrphanedItems();
}

async function cleanupOrphanedItems() {
  const contentPath = './src/content';
  
  console.log('🧹 Cleaning up orphaned items and empty categories...\n');

  const contentTypes = ['commands', 'guides', 'links', 'scripts', 'tools', 'cheatsheets', 'templates', 'reports', 'policies'];
  let totalOrphanedRemoved = 0;

  for (const contentType of contentTypes) {
    const contentTypePath = join(contentPath, contentType);
    const categoriesPath = join(contentTypePath, 'categories.ts');

    try {
      const categoriesContent = await readFile(categoriesPath, 'utf-8');
      
      // Extract all item names from items arrays (supports quoted keys)
      const itemsRegex = /["']?items["']?\s*:\s*\[(.*?)\]/gs;
      const allItems = [];
      let match;
      
      while ((match = itemsRegex.exec(categoriesContent)) !== null) {
        const itemsStr = match[1];
        const itemNames = itemsStr.match(/["']([^"']+)["']/g) || [];
        allItems.push(...itemNames.map(n => n.replace(/['"]/g, '')));
      }

      const orphanedItems = [];
      
      // Check which items no longer have folders
      for (const item of allItems) {
        const itemPath = join(contentTypePath, item);
        try {
          await access(itemPath);
        } catch {
          orphanedItems.push(item);
          console.log(`  ❌ Removed orphaned item: ${contentType}/${item}`);
          totalOrphanedRemoved++;
        }
      }

      // Remove orphaned items from the file
      if (orphanedItems.length > 0) {
        let updatedContent = categoriesContent;
        
        for (const item of orphanedItems) {
          const escapedItem = item.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&');
          // Remove the item from all items arrays: 'item', or "item",
          updatedContent = updatedContent.replace(new RegExp(`['"]${escapedItem}['"]\\s*,\\s*`, 'g'), '');
          // Also handle if it's the last item with no trailing comma
          updatedContent = updatedContent.replace(new RegExp(`['"]${escapedItem}['"]\\s*(?=\\])`, 'g'), '');
        }

        await writeFile(categoriesPath, updatedContent);
        console.log(`✅ ${contentType}: Cleaned ${orphanedItems.length} orphaned item(s)\n`);
      }
    } catch (error) {
      // Silently skip if file doesn't exist
    }
  }

  if (totalOrphanedRemoved > 0) {
    console.log(`\n✨ Cleanup complete!`);
    console.log(`📊 Summary:`);
    console.log(`   • Removed ${totalOrphanedRemoved} orphaned item(s)\n`);
  } else {
    console.log(`✨ No orphaned items or empty categories found.\n`);
  }
}

syncCategories().catch(error => {
  console.error('\n✗ Error syncing categories:', error.message);
  process.exit(1);
});
