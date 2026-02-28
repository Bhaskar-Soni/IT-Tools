import { Braces } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'json-to-php',
  title: 'Json to PHP Code',
  description: 'Generate PHP Classes from JSON',
  keywords: ['json','php'],
  component: () => import('./json-to-php.vue'),
  icon: Braces,
  category: 'JSON',
};
