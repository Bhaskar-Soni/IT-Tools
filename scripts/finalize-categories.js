import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const categoriesPath = path.join(__dirname, '../src/content/tools/categories.ts');
let content = fs.readFileSync(categoriesPath, 'utf-8');

// Parse the categories
const match = content.match(/export const toolCategories = (\[[\s\S]*\]);/);
if (match) {
  const categories = JSON.parse(match[1]);
  
  // Add missing tools
  // email-header-analyzer -> Email
  const emailCat = categories.find(c => c.name === 'Email');
  if (emailCat && !emailCat.items.includes('email-header-analyzer')) {
    emailCat.items.push('email-header-analyzer');
    emailCat.items.sort();
  } else if (!emailCat) {
    categories.push({
      name: 'Email',
      items: ['email-header-analyzer']
    });
  }
  
  // text-lowercase, text-uppercase -> Converter
  const converterCat = categories.find(c => c.name === 'Converter');
  if (converterCat) {
    if (!converterCat.items.includes('text-lowercase')) {
      converterCat.items.push('text-lowercase');
    }
    if (!converterCat.items.includes('text-uppercase')) {
      converterCat.items.push('text-uppercase');
    }
    converterCat.items.sort();
  }
  
  // Sort categories
  categories.sort((a, b) => a.name.localeCompare(b.name));
  
  // Write back
  const newContent = 'export const toolCategories = ' + JSON.stringify(categories, null, 2) + ';\n';
  fs.writeFileSync(categoriesPath, newContent);
  
  console.log('✅ Categories updated successfully');
  console.log('Total categories:', categories.length);
  categories.forEach(cat => {
    console.log(`  - ${cat.name}: ${cat.items.length} tools`);
  });
}
