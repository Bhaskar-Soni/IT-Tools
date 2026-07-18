import { ShieldLock } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'sensitive-data-masker',
  title: 'Sensitive data masker',
  description: 'Clean sensitive data from textual content (ie logs)',
  keywords: ['sensitive','data','masker','obfuscator','clean','log'],
  component: () => import('./sensitive-data-masker.vue'),
  icon: ShieldLock,
  category: 'Forensic',
};
