import { Markdown } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'paste-as-markdown',
  title: 'Paste as Markdown',
  description: 'Paste cells/tables and links from clipboard content as Markdown',
  keywords: ['paste','cell','table','links','md','markdown'],
  component: () => import('./paste-as-markdown.vue'),
  icon: Markdown,
  category: 'Markdown',
};
