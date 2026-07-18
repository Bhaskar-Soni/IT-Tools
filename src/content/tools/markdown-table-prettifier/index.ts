import { Markdown } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'markdown-table-prettifier',
  title: 'Markdown Table Prettifier',
  description: 'Prettify markdown tables',
  keywords: ['markdown','table','prettifier'],
  component: () => import('./markdown-table-prettifier.vue'),
  icon: Markdown,
  category: 'Markdown',
};
