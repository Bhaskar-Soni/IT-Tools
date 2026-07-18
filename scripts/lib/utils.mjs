/**
 * Shared Utility Functions for Content Creation
 * Used by both old and new scripts for consistency
 */

/**
 * Generate a URL-friendly slug from input text
 * Examples: "Test Link Command" -> "test-link-command"
 * @param {string} input - Raw input text
 * @returns {string} - Slug in kebab-case
 */
export function generateSlug(input) {
  return input
    .toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with hyphens
    .replace(/[^a-z0-9-]/g, '');    // Remove special characters
}

/**
 * Generate Title Case from a slug
 * Examples: "test-link-command" -> "Test Link Command"
 * @param {string} slug - Slug in kebab-case
 * @returns {string} - Title cased text
 */
export function generateTitle(slug) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Generate PascalCase class name from a slug
 * Examples: "test-link-command" -> "TestLinkCommand"
 * @param {string} slug - Slug in kebab-case
 * @returns {string} - Class name in PascalCase
 */
export function generateClassName(slug) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

/**
 * Get the categories variable name for a content type
 * Examples: "scripts" -> "scriptCategories", "link" -> "linkCategories"
 * @param {string} contentType - Content type (singular or plural)
 * @returns {string} - Variable name for categories
 */
export function getCategoriesVarName(contentType) {
  const singular = contentType.endsWith('s') ? contentType.slice(0, -1) : contentType;
  return singular + 'Categories';
}

/**
 * Pluralize a content type
 * Examples: "script" -> "scripts", "tool" -> "tools"
 * @param {string} type - Content type (singular or plural)
 * @returns {string} - Pluralized content type
 */
export function pluralize(type) {
  if (type.endsWith('s')) {
    return type;
  }
  // Special pluralization rules
  const pluralMap = {
    'policy': 'policies',
    'command': 'commands',
    'cheatsheet': 'cheatsheets',
    'template': 'templates',
    'tool': 'tools',
    'script': 'scripts',
    'report': 'reports',
    'link': 'links',
  };
  return pluralMap[type] || type + 's';
}

/**
 * Singularize a content type
 * Examples: "scripts" -> "script", "tools" -> "tool"
 * @param {string} type - Content type (singular or plural)
 * @returns {string} - Singular content type
 */
export function singularize(type) {
  if (!type.endsWith('s')) {
    return type;
  }
  // Special singularization rules
  const singularMap = {
    'policies': 'policy',
    'commands': 'command',
    'cheatsheets': 'cheatsheet',
    'templates': 'template',
    'tools': 'tool',
    'scripts': 'script',
    'reports': 'report',
    'links': 'link',
  };
  return singularMap[type] || type.slice(0, -1);
}

/**
 * Normalize path separators to forward slashes
 * @param {string} path - File path
 * @returns {string} - Normalized path
 */
export function normalizePath(path) {
  return path.replace(/\\/g, '/');
}

/**
 * Format file size in human-readable format
 * @param {number} bytes - Size in bytes
 * @returns {string} - Formatted size
 */
export function formatFileSize(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toFixed(2) + ' ' + sizes[i];
}

/**
 * Get current timestamp in milliseconds
 * @returns {number} - Current timestamp
 */
export function getCurrentTimestamp() {
  return Date.now();
}

/**
 * Determine template tier for a content type
 * Tier 1 (Complex): link, script
 * Tier 2 (Simple): everything else
 * @param {string} contentType - Content type
 * @returns {string} - Template tier ('link', 'script', or 'generic')
 */
export function getTemplateTier(contentType) {
  const type = singularize(contentType);
  const tierMap = {
    'link': 'link',
    'script': 'script',
    'tool': 'tool',
    'template': 'template',
  };
  return tierMap[type] || 'generic';
}

/**
 * Validate content type format
 * @param {string} contentType - Content type to validate
 * @returns {boolean} - True if valid
 */
export function isValidContentType(contentType) {
  const validTypes = ['script', 'tool', 'report', 'command', 'cheatsheet', 'template', 'policy', 'link'];
  const singular = singularize(contentType);
  return validTypes.includes(singular);
}

export default {
  generateSlug,
  generateTitle,
  generateClassName,
  getCategoriesVarName,
  pluralize,
  singularize,
  normalizePath,
  formatFileSize,
  getCurrentTimestamp,
  getTemplateTier,
  isValidContentType,
};
