/**
 * File Management Operations for Content Creation
 * Handles file I/O, template processing, and category management
 */

import fs from 'fs';
import path from 'path';
import { 
  getCategoriesVarName, 
  singularize, 
  pluralize 
} from './utils.mjs';

/**
 * Check if directory exists
 * @param {string} dirPath - Directory path
 * @returns {boolean} - True if exists
 */
export function directoryExists(dirPath) {
  return fs.existsSync(dirPath);
}

/**
 * Check if file exists
 * @param {string} filePath - File path
 * @returns {boolean} - True if exists
 */
export function fileExists(filePath) {
  return fs.existsSync(filePath);
}

/**
 * Create directory recursively
 * @param {string} dirPath - Directory path
 * @throws {Error} - If creation fails
 */
export function createDirectory(dirPath) {
  try {
    fs.mkdirSync(dirPath, { recursive: true });
  } catch (error) {
    throw new Error(`Failed to create directory ${dirPath}: ${error.message}`);
  }
}

/**
 * Write content to file
 * @param {string} filePath - File path
 * @param {string} content - Content to write
 * @throws {Error} - If write fails
 */
export function writeFile(filePath, content) {
  try {
    fs.writeFileSync(filePath, content, 'utf8');
  } catch (error) {
    throw new Error(`Failed to write file ${filePath}: ${error.message}`);
  }
}

/**
 * Read content from file
 * @param {string} filePath - File path
 * @returns {string} - File content
 * @throws {Error} - If read fails
 */
export function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    throw new Error(`Failed to read file ${filePath}: ${error.message}`);
  }
}

/**
 * List files in directory
 * @param {string} dirPath - Directory path
 * @returns {string[]} - Array of filenames
 * @throws {Error} - If listing fails
 */
export function listFiles(dirPath) {
  try {
    return fs.readdirSync(dirPath);
  } catch (error) {
    throw new Error(`Failed to list files in ${dirPath}: ${error.message}`);
  }
}

/**
 * Get directory size recursively
 * @param {string} dirPath - Directory path
 * @returns {number} - Size in bytes
 */
export function getDirectorySize(dirPath) {
  let size = 0;
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      size += getDirectorySize(filePath);
    } else {
      size += stat.size;
    }
  }
  
  return size;
}

/**
 * Copy file from source to destination
 * @param {string} srcPath - Source file path
 * @param {string} destPath - Destination file path
 * @throws {Error} - If copy fails
 */
export function copyFile(srcPath, destPath) {
  try {
    const content = readFile(srcPath);
    writeFile(destPath, content);
  } catch (error) {
    throw new Error(`Failed to copy file from ${srcPath} to ${destPath}: ${error.message}`);
  }
}

/**
 * Process template file by replacing placeholders
 * @param {string} templateContent - Template content
 * @param {object} replacements - Key-value pairs for replacement
 * @returns {string} - Processed content
 */
export function processTemplate(templateContent, replacements) {
  let content = templateContent;
  
  for (const [key, value] of Object.entries(replacements)) {
    const placeholder = `{{${key}}}`;
    const regex = new RegExp(placeholder, 'g');
    content = content.replace(regex, value);
  }
  
  return content;
}

/**
 * Copy and process template files from template directory
 * @param {string} templateDir - Template directory path
 * @param {string} targetDir - Target directory path
 * @param {object} replacements - Placeholder replacements
 * @throws {Error} - If template processing fails
 */
export function applyTemplate(templateDir, targetDir, replacements) {
  try {
    if (!directoryExists(templateDir)) {
      throw new Error(`Template directory not found: ${templateDir}`);
    }

    const files = listFiles(templateDir);
    
    for (const file of files) {
      const templatePath = path.join(templateDir, file);
      const stat = fs.statSync(templatePath);
      
      if (stat.isFile()) {
        let content = readFile(templatePath);
        content = processTemplate(content, replacements);
        
        // Replace placeholders in filename too
        let outputFilename = file;
        for (const [key, value] of Object.entries(replacements)) {
          outputFilename = outputFilename.replace(new RegExp(`{{${key}}}`, 'g'), value);
        }
        
        const targetPath = path.join(targetDir, outputFilename);
        writeFile(targetPath, content);
      }
    }
  } catch (error) {
    throw new Error(`Failed to apply template: ${error.message}`);
  }
}

/**
 * Update categories.ts file with new item
 * @param {string} categoriesFilePath - Path to categories.ts
 * @param {string} itemSlug - Item slug
 * @param {string} categoryName - Category name (default: 'Uncategorized')
 * @throws {Error} - If update fails
 */
export function addItemToCategory(categoriesFilePath, itemSlug, categoryName = 'Uncategorized') {
  try {
    let content;
    
    if (!fileExists(categoriesFilePath)) {
      // Create new categories file
      const dirname = path.dirname(categoriesFilePath);
      const varName = getCategoriesVarName(dirname.split(path.sep).pop());
      content = `export const ${varName} = [\n  {\n    name: '${categoryName}',\n    items: ['${itemSlug}'],\n  },\n];\n`;
      writeFile(categoriesFilePath, content);
      return;
    }

    content = readFile(categoriesFilePath);

    // Detect style (quoted keys/values) used in categories file
    const usesQuotedKeys = /"name"\s*:/.test(content);
    const keyName = usesQuotedKeys ? '"name"' : 'name';
    const keyItems = usesQuotedKeys ? '"items"' : 'items';
    const quote = usesQuotedKeys ? '"' : "'";

    // Escape special regex characters in category name
    const escapedCategoryName = categoryName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Match category blocks with either quoted or unquoted keys
    const categoryRegex = new RegExp(
      `${keyName}\\s*:\\s*${quote}${escapedCategoryName}${quote}\\s*,\\s*${keyItems}\\s*:\\s*\\[(.*?)\\]`,
      's'
    );

    const categoryMatch = content.match(categoryRegex);

    if (categoryMatch !== null) {
      // Category exists, add item if not already present
      const existingItems = categoryMatch[1].trim();
      if (!existingItems.includes(`'${itemSlug}'`) && !existingItems.includes(`"${itemSlug}"`)) {
        // Replace the items array
        const newItems = existingItems ? `${existingItems}, ${quote}${itemSlug}${quote}` : `${quote}${itemSlug}${quote}`;
        content = content.replace(
          categoryRegex,
          `${keyName}: ${quote}${categoryName}${quote}, ${keyItems}: [${newItems}]`
        );
        writeFile(categoriesFilePath, content);
      }
    } else {
      // Category doesn't exist, add new category
      content = content.replace(
        /\];$/m,
        `  {\n    ${keyName}: ${quote}${categoryName}${quote},\n    ${keyItems}: [${quote}${itemSlug}${quote}],\n  },\n];`
      );
      writeFile(categoriesFilePath, content);
    }
  } catch (error) {
    throw new Error(`Failed to add item to category: ${error.message}`);
  }
}

/**
 * Remove item from category in categories.ts
 * @param {string} categoriesFilePath - Path to categories.ts
 * @param {string} itemSlug - Item slug
 * @throws {Error} - If update fails
 */
export function removeItemFromCategory(categoriesFilePath, itemSlug) {
  try {
    if (!fileExists(categoriesFilePath)) {
      return;
    }

    let content = readFile(categoriesFilePath);
    content = content.replace(`, '${itemSlug}'`, '').replace(`'${itemSlug}', `, '').replace(`'${itemSlug}'`, '');
    writeFile(categoriesFilePath, content);
  } catch (error) {
    throw new Error(`Failed to remove item from category: ${error.message}`);
  }
}

/**
 * Create empty data folder for links
 * @param {string} itemPath - Item directory path
 * @param {string} contentType - Content type
 * @throws {Error} - If creation fails
 */
export function createDataFolder(itemPath, contentType) {
  try {
    const type = singularize(contentType);
    if (type === 'link') {
      const dataPath = path.join(itemPath, 'data');
      createDirectory(dataPath);
      writeFile(path.join(dataPath, 'boxes.json'), '[]');
    }
  } catch (error) {
    throw new Error(`Failed to create data folder: ${error.message}`);
  }
}

/**
 * Delete directory recursively
 * @param {string} dirPath - Directory path
 * @throws {Error} - If deletion fails
 */
export function deleteDirectory(dirPath) {
  try {
    if (fs.existsSync(dirPath)) {
      fs.rmSync(dirPath, { recursive: true, force: true });
    }
  } catch (error) {
    throw new Error(`Failed to delete directory ${dirPath}: ${error.message}`);
  }
}

export default {
  directoryExists,
  fileExists,
  createDirectory,
  writeFile,
  readFile,
  listFiles,
  getDirectorySize,
  copyFile,
  processTemplate,
  applyTemplate,
  addItemToCategory,
  removeItemFromCategory,
  createDataFolder,
  deleteDirectory,
};
