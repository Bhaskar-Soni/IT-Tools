import { Markdown } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'markdown-editor',
  title: 'Markdown Editor',
  description: 'Simple Markdown Editor',
  keywords: ['markdown','editor'],
  component: () => import('./markdown-editor.vue'),
  icon: Markdown,
  layoutMode: 'wide',
  category: 'Markdown',
};
