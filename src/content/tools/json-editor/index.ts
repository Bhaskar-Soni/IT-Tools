import { Braces } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'json-editor',
  title: 'JSON Editor',
  description: 'Edit JSON content',
  keywords: ['json','editor','validator','repair'],
  component: () => import('./json-editor.vue'),
  icon: Braces,
  category: 'JSON',
};
