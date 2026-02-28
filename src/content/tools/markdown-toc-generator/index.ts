import { Table } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'markdown-toc-generator',
  title: 'Markdown toc generator',
  description: 'Generate a TOC from a markdown file/content',
  keywords: ['markdown','md','toc','generator'],
  component: () => import('./markdown-toc-generator.vue'),
  icon: Table,
  category: 'Markdown',
};
