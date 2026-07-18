import type { ContentType } from '@/core/content.types';
import { contents } from '@/core/content.loader';

/**
 * Normalize URL path segments to content types
 * Handles both singular and plural forms
 * Supports built-in types AND dynamically created custom types
 * Examples: 'tools' -> 'tool', 'reports' -> 'report', 'scripts' -> 'script', 'notes' -> 'note'
 */
export function normalizeType(urlType: string): ContentType | null {
  // Direct mapping for known types
  const typeMap: Record<string, string> = {
    // Singular forms
    tool: 'tool',
    cheatsheet: 'cheatsheet',
    template: 'template',
    policy: 'policy',
    script: 'script',
    command: 'command',
    link: 'link',
    report: 'report',
    guide: 'guide',
    snippet: 'snippet',
    
    // Plural forms - map to singular
    tools: 'tool',
    cheatsheets: 'cheatsheet',
    templates: 'template',
    policies: 'policy',
    scripts: 'script',
    commands: 'command',
    links: 'link',
    reports: 'report',
    notes: 'note',
    guides: 'guide',
    snippets: 'snippet',
  };

  // Return from map if exists
  if (typeMap[urlType]) {
    return typeMap[urlType] as ContentType;
  }

  // Try generic pluralization: if ends with 's', try removing it
  if (urlType.endsWith('s') && urlType.length > 1) {
    const singular = urlType.slice(0, -1);
    if (typeMap[singular]) {
      return typeMap[singular] as ContentType;
    }
  }

  // NEW: Check if urlType matches any actual loaded content type (for custom types)
  try {
    const availableTypes = Array.from(new Set(contents.map(item => item.type)));
    
    // Check if it matches exactly
    if (availableTypes.includes(urlType as ContentType)) {
      return urlType as ContentType;
    }
    
    // Check if plural form matches a loaded singular type
    if (urlType.endsWith('s') && urlType.length > 1) {
      const singular = urlType.slice(0, -1);
      if (availableTypes.includes(singular as ContentType)) {
        return singular as ContentType;
      }
    }
  } catch (e) {
    // Silently fail if content loader not ready
  }

  // If none found, return null (caller will use fallback)
  return null;
}

/**
 * Format content type name for display
 * Examples: 'tool' -> 'Tools', 'cheatsheet' -> 'Cheatsheets', 'report' -> 'Reports', 'note' -> 'Notes'
 * Supports both built-in and custom content types
 */
export function formatTypeName(type: string): string {
  const names: Record<string, string> = {
    tool: 'Tools',
    script: 'Scripts',
    cheatsheet: 'Cheatsheets',
    template: 'Templates',
    policy: 'Policies',
    command: 'Commands',
    link: 'Links',
    report: 'Reports',
    guide: 'Guides',
    snippet: 'Snippets',
  };

  // Return from map if exists
  if (names[type]) {
    return names[type];
  }

  // Generic fallback for custom types: capitalize and pluralize
  // Convert kebab-case to Title Case and add 's'
  const formatted = type
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return formatted.endsWith('s') ? formatted : formatted + 's';
}

/**
 * Generate a unique emoji based on content type name
 * Uses a hash function to ensure consistency
 * Any content type automatically gets its own emoji
 */
export function getEmojiForType(type: string): string {
  const emojiPool = [
    '📚', '🔧', '📝', '🎯', '🚀', '💡', '📖', '🔐', '📊', '🎨',
    '⚡', '🎓', '💻', '🌟', '💼', '🔍', '📋', '🛠️', '📈', '🔗',
    '💾', '🗂️', '📌', '📍', '🔖', '🧩', '⚙️', '🔨', '📐', '🎪',
    '🏆', '🎁', '📞', '🎵', '🎭', '🌈', '✨', '💎', '🎬', '🚁'
  ];

  // Create a simple hash of the type name
  let hash = 0;
  for (let i = 0; i < type.length; i++) {
    const char = type.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }

  // Get consistent emoji based on hash
  const index = Math.abs(hash) % emojiPool.length;
  return emojiPool[index];
}

/**
 * Get icon for content type
 * Falls back to icon assignment for any unknown types
 */
export async function getIconForType(type: string) {
  const { Book, Shield, Code, Layout, Hammer, Command, Link, FileText, Bell, Copy } = await import('@vicons/tabler');
  
  const iconMap: Record<string, any> = {
    cheatsheet: Book,
    policy: Shield,
    script: Code,
    template: Layout,
    command: Command,
    link: Link,
    report: FileText,
    tool: Hammer,
    guide: Book,
    news: Bell,
    note: FileText,
    snippet: Copy,
  };

  // Return known icon
  if (iconMap[type]) {
    return iconMap[type];
  }
  
  // For unknown types, assign a consistent icon based on hash
  const availableIcons = [Book, Code, Hammer, FileText, Bell, Copy, Link, Layout, Shield, Command];
  let hash = 0;
  for (let i = 0; i < type.length; i++) {
    hash = ((hash << 5) - hash) + type.charCodeAt(i);
  }
  const index = Math.abs(hash) % availableIcons.length;
  return availableIcons[index];
}

/**
 * Get icon component synchronously (for template usage)
 * Falls back to icon assignment for any unknown types
 */
export function getIconForTypeSync(type: string) {
  const { Book, Shield, Code, Layout, Hammer, Command, Link, FileText, Bell, Copy } = require('@vicons/tabler');
  
  const iconMap: Record<string, any> = {
    cheatsheet: Book,
    policy: Shield,
    script: Code,
    template: Layout,
    command: Command,
    link: Link,
    report: FileText,
    tool: Hammer,
    guide: Book,
    news: Bell,
    note: FileText,
    snippet: Copy,
  };

  // Return known icon
  if (iconMap[type]) {
    return iconMap[type];
  }
  
  // For unknown types, assign a consistent icon based on hash
  const availableIcons = [Book, Code, Hammer, FileText, Bell, Copy, Link, Layout, Shield, Command];
  let hash = 0;
  for (let i = 0; i < type.length; i++) {
    hash = ((hash << 5) - hash) + type.charCodeAt(i);
  }
  const index = Math.abs(hash) % availableIcons.length;
  return availableIcons[index];
}
