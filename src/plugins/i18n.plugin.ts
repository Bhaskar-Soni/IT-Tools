import type { Plugin } from 'vue';

// This plugin is deprecated and not currently used
// Kept for backward compatibility
export const i18nPlugin: Plugin = {
  install: (app) => {
    // No-op: i18n is not used in this application
  },
};

// Fallback translate function - returns the key itself since i18n is not actively used
export const translate = (key: string): string => {
  return key;
};

// Get current locale - defaults to 'en-US'
export const getCurrentLocale = (): string => {
  // Try to get from navigator or use default
  return typeof navigator !== 'undefined' ? navigator.language : 'en-US';
};
