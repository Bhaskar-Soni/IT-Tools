import { Braces } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'json-linter',
  title: 'JSON Linter',
  description: 'Check and lint JSON content',
  keywords: ['json','linter','check','validator','repair'],
  component: () => import('./json-linter.vue'),
  icon: Braces,
  category: 'JSON',
};
