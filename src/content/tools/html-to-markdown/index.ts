import { Markdown } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'html-to-markdown',
  title: 'Html to markdown',
  description: 'Convert HTML (either from clipboard) to Markdown',
  keywords: ['html','markdown','converter'],
  component: () => import('./html-to-markdown.vue'),
  icon: Markdown,
  category: 'Markdown',
};
