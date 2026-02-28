import { Code } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'html-entities',
  title: 'Escape HTML entities',
  description: 'Escape or unescape HTML entities (replace characters like <, >, &, " and \' with their HTML version)',
  keywords: ['html','entities','escape','unescape','special','characters','tags'],
  component: () => import('./html-entities.vue'),
  icon: Code,
  category: 'Web',
};
