/**
 * Validation Functions for Content Creation
 * Centralized validation logic for consistency
 */

import path from 'path';
import { 
  isValidContentType as checkValidContentType,
  singularize,
  generateSlug 
} from './utils.mjs';
import { directoryExists, fileExists } from './file-manager.mjs';

/**
 * Validate content type
 * @param {string} contentType - Content type to validate
 * @throws {Error} - If invalid
 */
export function validateContentType(contentType) {
  if (!contentType) {
    throw new Error('Content type is required');
  }

  if (!checkValidContentType(contentType)) {
    throw new Error(
      `Invalid content type: ${contentType}\n` +
      'Valid types: script, tool, report, command, cheatsheet, template, policy, link'
    );
  }
}

/**
 * Validate item name
 * @param {string} itemName - Item name to validate
 * @throws {Error} - If invalid
 */
export function validateItemName(itemName) {
  if (!itemName || itemName.trim() === '') {
    throw new Error('Item name is required and cannot be empty');
  }

  if (typeof itemName !== 'string') {
    throw new Error('Item name must be a string');
  }

  const slug = generateSlug(itemName);
  if (!slug || slug.length === 0) {
    throw new Error('Item name must contain at least one letter or number');
  }
}

/**
 * Validate category name
 * @param {string} categoryName - Category name to validate
 * @throws {Error} - If invalid
 */
export function validateCategoryName(categoryName) {
  if (categoryName && categoryName.trim() === '') {
    throw new Error('Category name cannot be empty string');
  }

  if (categoryName && typeof categoryName !== 'string') {
    throw new Error('Category name must be a string');
  }
}

/**
 * Validate content type folder exists
 * @param {string} contentType - Content type
 * @param {string} rootDir - Root directory
 * @throws {Error} - If folder doesn't exist
 */
export function validateContentTypeFolder(contentType, rootDir) {
  const contentPath = path.join(rootDir, 'src', 'content', contentType);
  
  if (!directoryExists(contentPath)) {
    throw new Error(
      `Content type folder not found: ${contentType}\n` +
      `Expected path: ${contentPath}`
    );
  }
}

/**
 * Check for duplicate item
 * @param {string} itemPath - Item directory path
 * @param {string} itemName - Item name (for user message)
 * @throws {Error} - If item already exists
 */
export function checkDuplicateItem(itemPath, itemName) {
  if (directoryExists(itemPath)) {
    throw new Error(
      `Item already exists: ${itemName}\n` +
      `Path: ${itemPath}`
    );
  }
}

/**
 * Check for duplicate item in categories
 * @param {string} categoriesFilePath - Path to categories.ts
 * @param {string} itemSlug - Item slug
 * @throws {Error} - If item already listed in categories
 */
export function checkDuplicateInCategories(categoriesFilePath, itemSlug) {
  if (!fileExists(categoriesFilePath)) {
    return;
  }

  // Import fs at the top of the file, not inside function
  const content = fileExists(categoriesFilePath) ? readFileSync(categoriesFilePath, 'utf8') : '';
  
  if (content.includes(`'${itemSlug}'`) || content.includes(`"${itemSlug}"`)) {
    throw new Error(
      `Item already exists in categories: ${itemSlug}\n` +
      `Please check ${categoriesFilePath}`
    );
  }
}

/**
 * Validate file format (for scripts)
 * @param {string} format - Format to validate
 * @throws {Error} - If invalid
 */
export function validateScriptFormat(format) {
  const validFormats = ['bash', 'batch', 'powershell', 'yaml', 'python', 'all'];
  
  if (!format) {
    throw new Error('Format is required for scripts');
  }

  const formats = format.split(',').map(f => f.trim());
  
  for (const fmt of formats) {
    if (!validFormats.includes(fmt)) {
      throw new Error(
        `Invalid format: ${fmt}\n` +
        `Valid formats: ${validFormats.join(', ')}`
      );
    }
  }

  // Check for 'all' combined with other formats
  if (formats.includes('all') && formats.length > 1) {
    throw new Error("Cannot use 'all' with other formats. Either use 'all' or specific formats");
  }
}

/**
 * Validate template directory exists
 * @param {string} templateDir - Template directory path
 * @throws {Error} - If template doesn't exist
 */
export function validateTemplateExists(templateDir) {
  if (!directoryExists(templateDir)) {
    throw new Error(
      `Template directory not found: ${templateDir}\n` +
      'Template may not be available for this content type'
    );
  }
}

/**
 * Validate arguments array
 * @param {string[]} args - Arguments to validate
 * @param {number} minArgs - Minimum required arguments
 * @param {number} maxArgs - Maximum allowed arguments
 * @throws {Error} - If invalid
 */
export function validateArguments(args, minArgs, maxArgs = null) {
  if (args.length < minArgs) {
    throw new Error(
      `Insufficient arguments. Expected at least ${minArgs}, got ${args.length}`
    );
  }

  if (maxArgs !== null && args.length > maxArgs) {
    throw new Error(
      `Too many arguments. Expected at most ${maxArgs}, got ${args.length}`
    );
  }
}

/**
 * Validate all standard creation inputs
 * @param {object} options - Options object
 * @param {string} options.contentType - Content type
 * @param {string} options.itemName - Item name
 * @param {string} options.rootDir - Root directory
 * @param {string} options.categoryName - Category name (optional)
 * @throws {Error} - If any validation fails
 */
export function validateAllInputs(options) {
  const { contentType, itemName, rootDir, categoryName } = options;

  validateContentType(contentType);
  validateItemName(itemName);
  validateContentTypeFolder(contentType, rootDir);
  
  if (categoryName) {
    validateCategoryName(categoryName);
  }
}

export default {
  validateContentType,
  validateItemName,
  validateCategoryName,
  validateContentTypeFolder,
  checkDuplicateItem,
  checkDuplicateInCategories,
  validateScriptFormat,
  validateTemplateExists,
  validateArguments,
  validateAllInputs,
};
