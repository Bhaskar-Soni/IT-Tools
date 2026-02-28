import { Braces } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'json-escaper',
  title: 'Json Escaper/Unescaper',
  description: 'Escape and unescape JSON string',
  keywords: ['json','string','escape','unescape'],
  component: () => import('./json-escaper.vue'),
  icon: Braces,
  category: 'JSON',
};
